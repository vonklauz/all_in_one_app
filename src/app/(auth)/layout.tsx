import { IParentProps } from "@/Models";

export default function AuthLayout({ children }: IParentProps) {
    return (
        <div>
            {children}
        </div>
    )
}