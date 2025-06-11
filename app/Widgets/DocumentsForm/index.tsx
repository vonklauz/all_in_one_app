import { useEffect, useState } from "react";
import { FormItem } from "~/Components/FormCustom/FormItem";
import { FormWrapper } from "~/Components/FormCustom/FormWrapper";
import { Input } from "~/Components/Input";
import type { IDocumentsSection } from "~/Models";
import { useGetDocumentsQuery } from "~/Service/docsApi"

export const DocumentsForm = () => {
    const [form, setForm] = useState<IDocumentsSection[]>()
    console.log('form', form)
    const { data } = useGetDocumentsQuery();
    useEffect(() => {
        if (data?.data) {
            const newFormState = [];
            const sections = data.data[0];
            for (let id in sections) {
                const section = sections[id]
                newFormState.push(section)
            }
            setForm(newFormState)
        }
    }, [data])
    return (
        <div className="docs-container">
            <FormWrapper action={() => { }}>
                {form?.map((formItem) => (<FormItem title={formItem.title} key={formItem.title}>
                    {formItem.documents.map((doc) => (
                        // @ts-ignore
                        <Input label={doc.title} type="file" name={doc.document_id} />
                    ))}
                </FormItem>))}
            </FormWrapper>
        </div>
    )
}