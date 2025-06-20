import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FileInput, type IFileInputProps } from "../Input/FileInput"
import type { IUserDocument } from '~/Models';

interface IUserFilesProps extends IFileInputProps {
    uploadedFiles?: IUserDocument[],
    onDelete?: (fileId: string) => void;
}

export const UserFiles = ({uploadedFiles, onDelete, ...props}: IUserFilesProps) => {

    const renderDocsList = () => {
        if (uploadedFiles) {
            return uploadedFiles.map((file, index) => (
                <div className='mb-2'>
                    <a target="blank" href={file.s3_url}>Документ {index + 1}</a>
                </div>
            ))
        }

        return 'Список пуст'
    }

    return (
        <>
            <Disclosure>
                <DisclosureButton className="group flex items-center gap-2">
                    Загруженные файлы
                    <ChevronDownIcon className="w-5 group-data-open:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel>{renderDocsList()}</DisclosurePanel>
            </Disclosure>
            <FileInput {...props} />
        </>
    )
}