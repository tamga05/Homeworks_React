import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './SuperInputText.module.css'


// тип пропсов Обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


// здесь мы говорим что у нашего инпута будут такие же пропсы как у Обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & { // и + Ещё пропсы, которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
}


const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,

        ...restProps// все Остальные пропсы попадут в объект restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)
        onChangeText && onChangeText(e.currentTarget.value)
    }


    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter // если Есть пропс onEnter
        && e.key === 'Enter' // и если Нажата кнопка Enter
        && onEnter() // то Вызвать его
    }

    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`

    // const finalInputClassName = `${s.errorInput} ${className}` // need to fix with (?:) and s.superInput
    const finalInputClassName = error ? `${s.errorInput} ${className} ${s.mainInput}` : `${className} ${s.mainInput}`


    return (
        <div className={s.wrapperInputMain}>
            <input
                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}

                {...restProps} // отдаём инпуту Остальные пропсы если они есть (value например там внутри)
            />
            <div className={s.wrapperInputErrorSpan}>
                {error && <span className={finalSpanClassName}>{error}</span>}
            </div>
        </div>
    )
}

export default SuperInputText
