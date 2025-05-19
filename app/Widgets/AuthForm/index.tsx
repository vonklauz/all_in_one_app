import { FormCustom } from "~/Components/FormCustom"
import { Input } from "~/Components/Input"
import { InputPassword } from "~/Components/Input/InputPassword"
import { useLoginMutation, useRegisterMutation } from "~/Service/baseApi"

const CONFIG = {
    login: {
        title: "Вход",
        fields: ['email', 'password'],
        bottomLinks: [
            { href: "/register", text: "Не зарегистрированы? Создать аккаунт" },
            { href: "/restore", text: "Забыли пароль?" }
        ],
        submitRequest: useLoginMutation,
    },
    registration: {
        title: "Регистрация",
        fields: ['lastName', 'firstName', 'secondName', 'phone', 'email', 'password'],
        bottomLinks: [{
            href: "/login",
            text: "Уже есть аккаунт? Войти"
        }],
        submitRequest: useRegisterMutation,
    }
}

interface IAuthFormProps {
    mode: "login" | "registration"
}

export const AuthForm = ({ mode }: IAuthFormProps) => {
    const [request, resultRequest] = CONFIG[mode].submitRequest();

    function search(formData: FormData) {
        const query = formData.get("password");
        CONFIG[mode].fields.forEach((fieldName) => {
            console.log(formData.get(fieldName))
        });
        console.log(formData)
    }

    const renderRegistrationFields = () => {
        return (
            <>
                <Input label="Фамилия*" name="lastName" />
                <Input label="Имя*" name="firstName" />
                <Input label="Отчество*" name="secondName" />
                <Input label="Телефон*" name="phone" />
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
                    <div className="flex" style={{ marginTop: '16px' }}>
                        <a href={item.href} style={{ textDecoration: 'underline' }}>{item.text}</a>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <FormCustom
            action={search}
            title={CONFIG[mode].title}
        >
            <>
                {mode === "registration" && renderRegistrationFields()}
                <Input label="Эл. почта*" type="email" name="email" />
                <InputPassword label="Пароль*" type="password" name="password" />
                <button type="submit">{mode === "registration" ? 'Зарегистрироваться' : 'Войти'}</button>
                {renderBottomLinkSection()}
            </>
        </FormCustom>
    )
}