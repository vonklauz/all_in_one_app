import { useActionState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { FormCustom } from "~/Components/FormCustom"
import { Input } from "~/Components/Input"
import { InputPassword } from "~/Components/Input/InputPassword"
import { PhoneInput } from "~/Components/Input/PhoneInput"
import type { LoginResponse, RegisterData, User } from "~/Models"
import { useLoginMutation, useRegisterMutation } from "~/Service/authApi"
import { setTokens } from "~/Store/Token/tokenSlice"
import { getDefaultUser } from "~/Store/User/userSlice"
import { handleLoginSuccess, clearPhoneNumberString } from "~/Utils"

const CONFIG = {
    login: {
        title: "Вход",
        fields: ['email', 'password'],
        bottomLinks: [
            { href: "/register", text: "Не зарегистрированы? Создать аккаунт" },
            { href: "/restore", text: "Забыли пароль?" }
        ],
        submitRequest: useLoginMutation,
        successAction: (responseData: LoginResponse) => {
            handleLoginSuccess(responseData);
        },
        redirectPath: "/profile"
    },
    registration: {
        title: "Регистрация",
        fields: ['lastName', 'firstName', 'secondName', 'phone', 'email', 'password'],
        bottomLinks: [{
            href: "/login",
            text: "Уже есть аккаунт? Войти"
        }],
        submitRequest: useRegisterMutation,
        successAction: null,
        redirectPath: "/"
    }
}
interface IAuthFormProps {
    mode: "login" | "registration"
}

export const AuthForm = ({ mode }: IAuthFormProps) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [request, resultRequest] = CONFIG[mode].submitRequest();

    async function handleFormAction(prevState: unknown, formData: FormData) {
        const requestData = {} as RegisterData;
        CONFIG[mode].fields.forEach((fieldName) => {
            if (fieldName === 'phone') {
                //@ts-expect-error
                requestData[fieldName] = clearPhoneNumberString(formData.get(fieldName));
            } else {
                //@ts-expect-error
                requestData[fieldName] = formData.get(fieldName);
            }

        });
        request(requestData)

        return requestData
    }

    const [actionState, action, isPending] = useActionState(handleFormAction, { ...getDefaultUser(), password: '' });

    useEffect(() => {
        console.log(resultRequest.data)
        if (resultRequest.data?.success) {
            if (CONFIG[mode].successAction) {
                dispatch(setTokens(resultRequest.data.data));
                CONFIG[mode].successAction(resultRequest.data.data);
            }
            navigate(CONFIG[mode].redirectPath);
        }
    }, [resultRequest])

    const renderRegistrationFields = () => {
        return (
            <>
                <Input label="Фамилия*" name="lastName" defaultValue={actionState.lastName} disabled={isPending}/>
                <Input label="Имя*" name="firstName" defaultValue={actionState.firstName} disabled={isPending}/>
                <Input label="Отчество*" name="secondName" defaultValue={actionState.secondName} disabled={isPending}/>
                <PhoneInput label="Телефон*" name="phone" defaultValue={actionState.phone} disabled={isPending}/>
            </>
        )
    }

    const renderBottomLinkSection = () => {
        <div className="flex">
            <a href=""></a>
        </div>
        return (
            <div>
                {CONFIG[mode].bottomLinks.map((item) => (
                    <div className="flex" style={{ marginTop: '16px' }} key={item.href}>
                        <a href={item.href} style={{ textDecoration: 'underline' }}>{item.text}</a>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <FormCustom
            action={action}
            title={CONFIG[mode].title}
        >
            <>
                {mode === "registration" && renderRegistrationFields()}
                <Input label="Эл. почта*" type="email" name="email" defaultValue={actionState.email} disabled={isPending}/>
                <InputPassword label="Пароль*" type="password" name="password" defaultValue={actionState.password} disabled={isPending}/>
                <button type="submit" disabled={isPending}>{mode === "registration" ? 'Зарегистрироваться' : 'Войти'}</button>
                {renderBottomLinkSection()}
            </>
        </FormCustom>
    )
}