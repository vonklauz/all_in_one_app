import type { IDossierFormField } from '~/Models';
import styles from './RadioInputStyles.module.css';

interface IRadioProps extends Omit<IDossierFormField, 'type' | 'length' | 'mask' | 'required'> { }

export const RadioInput = ({ id, title, choices, groups, }: IRadioProps) => {

    const renderOptions = () => (
        choices?.map(({ id: choiceId, label }) => (
            <div className={styles.item}>
                <input id={choiceId} className={styles.input} type="radio" value={label} name={id} />
                <label htmlFor="o1_1" className={styles.label}>
                    <span className={styles.text}>{label}</span>
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