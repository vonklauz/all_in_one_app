import { Fragment, useEffect, useState, type ChangeEvent } from "react";
import { FormItem } from "~/Components/FormCustom/FormItem";
import { FormWrapper } from "~/Components/FormCustom/FormWrapper";
import { Input } from "~/Components/Input";
import { RadioInput } from "~/Components/RadioInput";
import { FormSkeleton } from "~/Components/Skeleton/FormSkeleton";
import type { IDossierFormSection } from "~/Models";
import { dossierApi } from "~/Service/dossierApi"
import { dispatch } from "~/Store";
import { cloneDeep } from "~/Utils";

export const DossierForm = () => {
    const [form, setForm] = useState<IDossierFormSection>();
    const [isLoading, setIsLoading] = useState(true);
    const url = new URL(window.location.href);
    const formId = url.searchParams.get("id");
    console.log('form', form)

    const getFormById = (id: string) => {
        return dispatch(dossierApi.endpoints.getSchemaById.initiate({ schemaId: id }))
    }

    useEffect(() => {
        if (formId) {
            const getForm = async () => {
                const response = await getFormById(formId);
                if (response.data?.success) {
                    setForm({ ...cloneDeep(response.data.data) })
                    setIsLoading(false);
                }
            }
            getForm()
        }

    }, [formId])

    if (isLoading) {
        return (
            <div className="dossier-container">
                <FormSkeleton />
            </div>
        )
    }

    const onChange = (blockIndex: number, fieldIndex: number) => (e: ChangeEvent<HTMLInputElement>) => {
        if (!form) {
            return;
        }
        const newForm = cloneDeep(form);
        newForm.blocks[blockIndex].fields[fieldIndex].value = e.target.value;
        setForm(newForm);
    }

    if (form) {
        return (
            <div className="dossier-container">
                <FormWrapper action={() => { }}>
                    <FormItem title={form.form_title} key={form.schema_id}>
                        {form.blocks.map((block, blockIndex) => (
                            <Fragment key={block.block_title}>
                                <h4 className="title text-lg mt-4">{block.block_title}</h4>
                                {block.fields.map(({ id, title, type, ...props }, fieldIndex) => {
                                    if (type === 'text') {
                                        return <Input key={id} label={title} onChange={onChange(blockIndex, fieldIndex)} />
                                    } else if (type === 'select') {
                                        return <RadioInput {...{ id, title, ...props }} key={id} onChange={onChange(blockIndex, fieldIndex)} />
                                    }
                                })}
                            </Fragment>

                        ))}
                    </FormItem>
                </FormWrapper>
            </div>
        )
    }

}