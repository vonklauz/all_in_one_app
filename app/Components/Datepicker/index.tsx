import { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru } from "date-fns/locale";
import { type IInputProps } from "../Input";
import inputStyles from '../Input/Input.module.css';
import { getDay, isBefore, isToday } from "date-fns";

registerLocale('ru', ru);
setDefaultLocale('ru');

interface IDatepickerProps extends IInputProps {
    dateFormat?: string;
}

export const Datepicker = ({
    label,
    type = 'text',
    name,
    id,
    value,
    error,
    onChange,
    placeholder,
    children,
    defaultValue,
    dateFormat,
    ...props
}: IDatepickerProps) => {
    const [startDate, setStartDate] = useState(new Date());

    const isWeekday = (date: Date) => {
        const day = getDay(date);
        return day !== 0 && day !== 6 && (isBefore(new Date(), date) || isToday(date));
    };

    return (
        <div className={inputStyles.formRow}>
            <label
                htmlFor={id ? id : name ? name : ''}
                className={inputStyles.formLabel}
            >{label}</label>
            <div className={`${inputStyles.inputWrapper} ${props.disabled ? inputStyles.readOnly : ''}`}>
                <DatePicker
                    name={name}
                    id={id}
                    className={inputStyles.dateInput}
                    dateFormat={dateFormat ? dateFormat : "dd.MM.yyyy"}
                    filterDate={isWeekday}
                    selected={startDate} onChange={(date) => {
                        if (date) {
                            setStartDate(date)
                        }
                    }}
                />
                {children}
            </div>
            {error && <span className={inputStyles.error}>{error}</span>}
        </div>
    )

}