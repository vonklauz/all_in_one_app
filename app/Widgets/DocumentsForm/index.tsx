import { Fragment, useEffect, useState, type ChangeEvent } from "react";
import { FormItem } from "~/Components/FormCustom/FormItem";
import { FormWrapper } from "~/Components/FormCustom/FormWrapper";
import { FormSkeleton } from "~/Components/Skeleton/FormSkeleton";
import { UserFiles } from "~/Components/UserFiles";
import { useLoadUserDocs } from "~/Hooks/useLoadUserDocs";
import type { IDocumentsFormState } from "~/Models";
import { useDeleteUserDocumentMutation, useUploadDocumentMutation } from "~/Service/docsApi"
import { isEmpty } from "~/Utils";

export const DocumentsForm = () => {
    const [form, setForm] = useState<IDocumentsFormState[]>([]);
    const { userDocs, isLoading } = useLoadUserDocs();
    const [uploadDocument, resultUploadDocument] = useUploadDocumentMutation();
    const [deleteDoument, resultDeleteDocument] = useDeleteUserDocumentMutation();

    const { isLoading: isDocumentUploading, data: uploadDocData } = resultUploadDocument;
    const { isLoading: isDocumentDeleting } = resultDeleteDocument;

    console.log('form', form)

    useEffect(() => {
        if (userDocs) {
            setForm(userDocs)
        }
    }, [userDocs]);

    useEffect(() => {
        if (uploadDocData?.success) {
            const response = uploadDocData.data[0];
            const newForm = [...form];
            newForm.some((sectionItem) => {
                const docsIndex = sectionItem.documents.findIndex((documentItem) => documentItem.document_id === response.document_id)
                if (docsIndex > -1) {
                    if (sectionItem.documents[docsIndex].userDocs) {
                        sectionItem.documents[docsIndex].userDocs.push({ ...response })
                    } else {
                        sectionItem.documents[docsIndex].userDocs = [{ ...response }];
                    }
                }
            })
            setForm([...newForm]);
        }
    }, [resultUploadDocument]);

    const handleAttachFile = (sectionIndex: number, docIndex: number) => (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            if (selectedFiles.length) {
                const newForm = [...form];
                newForm[sectionIndex].documents[docIndex].attachedDoc = selectedFiles[0];
                setForm([...newForm])
                e.target.value = '';
            }
        }
    }

    const handleUnattachFile = (sectionIndex: number, docIndex: number) => {
        const newForm = [...form];
        delete newForm[sectionIndex].documents[docIndex].attachedDoc;
        setForm([...newForm]);
    }

    const uploadFile = (sectionIndex: number, docIndex: number) => {
        const { document_id, attachedDoc } = form[sectionIndex].documents[docIndex];
        const formData = new FormData();
        if (attachedDoc) {
            formData.append('files', attachedDoc);
            const method = form[sectionIndex].documents[docIndex].userDocs ? 'PUT' : 'POST';
            uploadDocument({ documentId: document_id, files: formData, method });
            handleUnattachFile(sectionIndex, docIndex);
        }
    }

    const deleteUserDocument = (sectionIndex: number, docIndex: number) => (documentId: string) => {
        deleteDoument({ documentId });
        const newForm = [...form];
        const { userDocs } = newForm[sectionIndex].documents[docIndex];
        const newUserDocs = userDocs?.filter((doc) => doc.id !== documentId) || [];
        if (isEmpty(newUserDocs)) {
            delete newForm[sectionIndex].documents[docIndex].userDocs;
        } else {
            newForm[sectionIndex].documents[docIndex].userDocs = [...newUserDocs]
        }

        setForm([...newForm]);
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
                {form?.map((sectionItem, sectionIndex) => (<FormItem title={sectionItem.title} key={sectionItem.title}>
                    {sectionItem.documents.map(({ title, document_id, userDocs, attachedDoc }, docIndex) => (
                        <Fragment key={document_id}>
                            <UserFiles
                                label={title}
                                name={document_id}
                                onChange={handleAttachFile(sectionIndex, docIndex)}
                                onDelete={deleteUserDocument(sectionIndex, docIndex)}
                                uploadedFiles={userDocs}
                                disabled={isDocumentUploading}
                                attachedDoc={attachedDoc}
                            />
                            {attachedDoc && (
                                <div className="flex mt-1 mb-4">
                                    <button className="button button_small button_green mr-4" type="button" disabled={isDocumentUploading} onClick={() => uploadFile(sectionIndex, docIndex)}>Отправить</button>
                                    <button className="button button_small button_red" type="button" disabled={isDocumentUploading} onClick={() => handleUnattachFile(sectionIndex, docIndex)}>Очистить</button>
                                </div>
                            )}
                        </Fragment>
                    ))}
                </FormItem>))}
            </FormWrapper>
        </div>
    )
}