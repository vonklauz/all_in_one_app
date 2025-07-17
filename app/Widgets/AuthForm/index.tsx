import { useActionState, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import type { ValidationError } from "yup"
import { FormCustom } from "~/Components/FormCustom"
import { Input } from "~/Components/Input"
import { InputPassword } from "~/Components/Input/InputPassword"
import { PhoneInput } from "~/Components/Input/PhoneInput"
import { RegisterSuccessModal } from "~/Components/Modal/RegisterSuccessModal"
import { REDIRECT_TIMING } from "~/Consts"
import type { LoginResponse, ObjectWithProps, RegisterData, User } from "~/Models"
import { useLoginMutation, useRegisterMutation } from "~/Service/authApi"
import { setTokens } from "~/Store/Token/tokenSlice"
import { getDefaultUser } from "~/Store/User/userSlice"
import { handleLoginSuccess, clearPhoneNumberString, remapServerFieldToFrontFormat } from "~/Utils"
import { loginSchema, registerSchema } from "~/Utils/validation"

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
        redirectPath: "/profile",
        validationSchema: loginSchema,
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
        redirectPath: "/",
        validationSchema: registerSchema,
    }
}
interface IAuthFormProps {
    mode: "login" | "registration"
}

export const AuthForm = ({ mode }: IAuthFormProps) => {
    const [errors, setErrors] = useState<Partial<RegisterData> | null>(null);
    const [isShowModal, setIsShowModal] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [request, resultRequest] = CONFIG[mode].submitRequest();
    console.log(errors)

    const validateAndSend = (requestData: RegisterData) => {
        try {
            CONFIG[mode].validationSchema.validateSync({ ...requestData }, { abortEarly: false })
        } catch (err) {
            const validationErrors = err as ValidationError;
            const newErrors: ObjectWithProps = {};
            validationErrors.inner.forEach((e) => {
                newErrors[e.path as string] = e.message;
            });
            setErrors(newErrors);
        }
        setErrors(null);
        request(requestData)
    }

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

        validateAndSend(requestData);

        return requestData
    }

    const [actionState, action, isPending] = useActionState(handleFormAction, { ...getDefaultUser(), password: '' });

    useEffect(() => {
        console.log(resultRequest.data)
        if (resultRequest.data?.success) {
            if (CONFIG[mode].successAction) {
                dispatch(setTokens(resultRequest.data.data));
                CONFIG[mode].successAction(resultRequest.data.data);
                navigate(CONFIG[mode].redirectPath);
            } else {
                setIsShowModal(true)
                setTimeout(() => navigate('/'), REDIRECT_TIMING);
            }
            
        } else if (resultRequest.data?.error) {
            const { field, message } = resultRequest.data?.error.message
            //remapServerFieldToFrontFormat
            const fieldname = remapServerFieldToFrontFormat(field);
            const backendError = { [fieldname]: message };
            setErrors({ ...backendError });
        }
    }, [resultRequest])

    const renderRegistrationFields = () => {
        return (
            <>
                <Input label="Фамилия*" name="lastName" defaultValue={actionState.lastName} disabled={isPending} error={errors?.lastName} />
                <Input label="Имя*" name="firstName" defaultValue={actionState.firstName} disabled={isPending} error={errors?.firstName} />
                <Input label="Отчество*" name="secondName" defaultValue={actionState.secondName} disabled={isPending} error={errors?.secondName} />
                <PhoneInput label="Телефон*" name="phone" defaultValue={actionState.phone} disabled={isPending} error={errors?.phone} />
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
                <Input label="Эл. почта*" type="email" name="email" defaultValue={actionState.email} disabled={isPending} error={errors?.email} />
                <InputPassword label="Пароль*" type="password" name="password" defaultValue={actionState.password} disabled={isPending} error={errors?.password} />
                <button type="submit" disabled={isPending}>{mode === "registration" ? 'Зарегистрироваться' : 'Войти'}</button>
                {renderBottomLinkSection()}
                {isShowModal && <RegisterSuccessModal isOpen={isShowModal} />}
            </>
        </FormCustom>
    )
}