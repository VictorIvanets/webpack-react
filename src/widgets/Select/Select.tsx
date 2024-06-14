import { useTheme } from "app/Providers/Theme/useTheme";
import { ChangeEvent, memo, useMemo } from "react";
import { useTranslation } from "react-i18next";


interface SelectOptions {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options: SelectOptions[]
    value?: string
    onChange?: (value: string) => void
}


export const Select = memo((props: SelectProps) => {

    const {
        className, 
        label, 
        options,
        value,
        onChange
    } = props

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>)=>{
        onChange?.(e.target.value)
    }

    const optionList = useMemo(()=>{
        return options?.map((opt)=> (
            <option
            className={`${className}__options`}
            value={opt.value}
            key={opt.value}
            
            >{opt.content}</option>

        ))

    }, [options])



    const {theme} = useTheme()
    const {t} = useTranslation()


    return (
        <div className={className}>
            {label && (<span className={`${className}__label`}>{label}</span>)}

            <select 
            className={`${className}__select`} 
            value={value}
            onChange={onChangeHandler}
            >
                    {optionList}
            </select>
        </div>

    );
});

export default Select;