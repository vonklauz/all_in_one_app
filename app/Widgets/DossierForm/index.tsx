import { Fragment, useEffect, useState, type ChangeEvent } from "react";
import { FormItem } from "~/Components/FormCustom/FormItem";
import { FormWrapper } from "~/Components/FormCustom/FormWrapper";
import { Input } from "~/Components/Input";
import { RadioInput } from "~/Components/RadioInput";
import { FormSkeleton } from "~/Components/Skeleton/FormSkeleton";
import { useGetSchemaByIdQuery } from "~/Service/dossierApi"
import { mapSchemaFromData } from "~/Utils/validation";

export const DossierForm = () => {
    const [form, setForm] = useState<Record<string, string>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});
    const url = new URL(window.location.href);
    const formId = url.searchParams.get("id") as string;
    const { data: formSchema, isLoading } = useGetSchemaByIdQuery({ schemaId: formId });
    console.log('formSchema', formSchema?.data)
    console.log('form', form)

    const validateForm = () => {
        if (!formSchema) {
            return false;
        }
        const fieldsArr = formSchema?.data.blocks.map((block) => block.fields);
        const validationSchema = mapSchemaFromData(fieldsArr);
        try {
            validationSchema.validateSync(form, { abortEarly: false })
        } catch (err) {
            const newErrors: Record<string, string> = {};
            //@ts-expect-error
            err.inner.forEach((e) => {
                newErrors[e.path] = e.message;
            });
            console.log('newErrors', newErrors)
            setErrors(newErrors);
            return;
        }
    }

    if (isLoading) {
        return (
            <div className="dossier-container">
                <FormSkeleton />
            </div>
        )
    }

    const onChange = (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
        const newForm = { ...form };
        newForm[id] = e.target.value;
        setForm(newForm);
    }

    if (formSchema?.data) {
        return (
            <div className="dossier-container">
                <FormWrapper action={() => { }}>
                    <FormItem title={formSchema?.data.form_title} key={formSchema?.data.schema_id}>
                        <>
                            {formSchema?.data.blocks.map((block, blockIndex) => (
                                <Fragment key={block.block_title}>
                                    <h4 className="title text-lg mt-4">{block.block_title}</h4>
                                    {block.fields.map(({ id, title, type, ...props }, fieldIndex) => {
                                        if (type === 'text') {
                                            return <Input
                                                key={id}
                                                label={title}
                                                onChange={onChange(id)}
                                                value={form[id] ?? ''}
                                                error={errors[id]}
                                            />
                                        } else if (type === 'select') {
                                            return <RadioInput
                                                {...{ id, title, ...props }}
                                                key={id}
                                                onChange={onChange(id)} value={form[id] ?? ''}
                                                error={errors[id]}
                                            />
                                        }
                                    })}
                                </Fragment>
                            ))}
                            <button className="button button_green" type="button" onClick={validateForm}>Отправить</button>
                        </>
                    </FormItem>
                </FormWrapper>

            </div>
        )
    }

}