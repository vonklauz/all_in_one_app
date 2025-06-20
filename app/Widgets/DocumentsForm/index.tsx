import { useEffect, useState, type ChangeEvent } from "react";
import { FormItem } from "~/Components/FormCustom/FormItem";
import { FormWrapper } from "~/Components/FormCustom/FormWrapper";
import { FormSkeleton } from "~/Components/Skeleton/FormSkeleton";
import { UserFiles } from "~/Components/UserFiles";
import { useLoadUserDocs } from "~/Hooks/useLoadUserDocs";
import type { IDocumentsFormState } from "~/Models";
import { useUploadDocumentMutation } from "~/Service/docsApi"

export const DocumentsForm = () => {
    const [form, setForm] = useState<IDocumentsFormState[]>()
    const { userDocs, isLoading } = useLoadUserDocs();
    const [uploadDocument, resultUploadDocument] = useUploadDocumentMutation()
    console.log('form', form)

    useEffect(() => {
        if (userDocs) {
            setForm(userDocs)
        }

    }, [userDocs])

    const handleAttachFile = (documentId: string) => (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            if (selectedFiles.length) {
                const formData = new FormData();
                selectedFiles.forEach((file) => formData.append('files', file))
                uploadDocument({ documentId, files: formData })
            }
        }
    }

    if (isLoading) {
        return (
            <div className="docs-container">
                <FormSkeleton />
            </div>
        )
    }

    return (
        <div className="docs-container">
            <FormWrapper action={() => { }}>
                {form?.map((formItem) => (<FormItem title={formItem.title} key={formItem.title}>
                    {formItem.documents.map(({ title, document_id, userDocs }) => (
                        <UserFiles
                            label={title}
                            name={document_id}
                            key={document_id}
                            onChange={handleAttachFile(document_id)}
                            uploadedFiles={userDocs} />
                    ))}
                </FormItem>))}
            </FormWrapper>
        </div>
    )
}