import type { IDossierFormField } from '~/Models';
import styles from './RadioInputStyles.module.css';
import { useRef, type ChangeEvent } from 'react';

interface IRadioProps extends Omit<IDossierFormField, 'type' | 'length' | 'mask' | 'required'> {
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioInput = ({ id, title, choices, value, onChange }: IRadioProps) => {
    const radioInputRef = useRef<HTMLInputElement | null>(null);

    const renderOptions = () => (
        choices?.map(({ id: choiceId, label }) => (
            <div className={styles.item} key={choiceId}>
                <input
                    id={choiceId + id}
                    className={styles.input}
                    type="radio"
                    value={label}
                    name={id}
                    checked={value === label}
                    ref={radioInputRef}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        console.log(e)
                        onChange(e)

                    }}
                />
                <label htmlFor={choiceId + id} className={styles.label}>
                    <span className={styles.text} onClick={() => radioInputRef?.current?.click()}>{label}</span>
                </label>
            </div>
        ))
    )

    return (
        <div>
            <label className="form-label">{title}</label>
            <div className={styles.options}>
                {renderOptions()}
            </div>
        </div>
    )
}