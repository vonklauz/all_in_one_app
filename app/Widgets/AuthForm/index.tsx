import { title } from "process"
import { FormCustom } from "~/Components/FormCustom"
import { Input } from "~/Components/Input"
import { InputPassword } from "~/Components/Input/InputPassword"

const CONFIG = {
    login: {
        title: "Вход",
        fields: ['email', 'password'],
        bottomLinks: [
            { href: "/register", text: "Создать аккаунт" },
            { href: "/restore", text: "Забыли пароль?" }
        ],
        submitRequest: () => { },
    },
    registration: {
        title: "Регистрация",
        fields: ['last_name', 'first_name', 'second_name', 'phone', 'email', 'password'],
        bottomLinks: [{
            href: "/login",
            text: "Уже есть аккаунт? Войти"
        }],
        submitRequest: () => { },
    }
}

interface IAuthFormProps {
    mode: "login" | "registration"
}

export const AuthForm = ({ mode }: IAuthFormProps) => {

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
                <Input label="Фамилия*" name="last_name" />
                <Input label="Имя*" name="first_name" />
                <Input label="Отчество*" name="second_name" />
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