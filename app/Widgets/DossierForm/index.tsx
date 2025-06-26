import { Fragment, useEffect, useState } from "react";
import { FormItem } from "~/Components/FormCustom/FormItem";
import { FormWrapper } from "~/Components/FormCustom/FormWrapper";
import { Input } from "~/Components/Input";
import { FormSkeleton } from "~/Components/Skeleton/FormSkeleton";
import type { IDossierFormSection, IDossierFormState } from "~/Models";
import { dossierApi, useGetFormSchemasQuery } from "~/Service/dossierApi"
import { dispatch } from "~/Store";

export const DossierForm = () => {
    const [form, setForm] = useState<IDossierFormState>();
    const [isLoading, setIsLoading] = useState(true);
    const { data: formSchema } = useGetFormSchemasQuery();
    console.log('form', form)

    const getShcemasById = (ids: string[]) => {
        const promises = ids.map((id) => {
            return dispatch(dossierApi.endpoints.getSchemaById.initiate({ schemaId: id }))
        })
        return Promise.all(promises);
    }

    useEffect(() => {
        if (formSchema?.success) {
            const fetchData = async () => {
                const ids = formSchema?.data.map((schema) => schema.schema_id)
                const data = await getShcemasById(ids)
                // console.log(data)
                const result = data?.map((responseObj) => {
                    if (responseObj.isSuccess) {
                        return responseObj.data.data;
                    }
                });

                if (result.length) {
                    setForm({
                        //@ts-ignore
                        sections: [...result]
                    });
                    setIsLoading(false);
                }
            }
            fetchData();
        }
    }, [formSchema])

    if (isLoading) {
        return (
            <div className="dossier-container">
                <FormSkeleton />
            </div>
        )
    }

    return <div className="dossier-container">
        <FormWrapper action={() => { }}>
            {form?.sections?.map((section, index) => (
                <FormItem title={section.form_title} key={section.schema_id}>
                    {section.blocks.map((block) => (
                        <Fragment key={block.block_title}>
                            <h4 className="title text-lg mt-4">{block.block_title}</h4>
                            {block.fields.map(({ id, title, type }) => (
                                <Input key={id} label={title} />
                            ))}
                        </Fragment>

                    ))}
                </FormItem>
            ))}
        </FormWrapper>
    </div>
}