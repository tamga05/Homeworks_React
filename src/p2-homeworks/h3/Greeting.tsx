import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Greeting.module.css';


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void// need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    addEnterUser: (event: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, addEnterUser} // деструктуризация пропсов
) => {

    // const inputClass = s.error; // need to fix with (?:)

    // const inputClass = {
    //     outline: 'none',
    //     border: '1px solid red'
    // };
    //
    //
    // const someClass = {
    //     outline: 'none',
    //     border: '1px solid green'
    // };

    const styleInput = error ? s.errorInputClass : s.inputInputClass; // styleInput
    const styleButton = error ? s.errorButton : s.button; // styleButton
    const styleSpan = error ? s.errorTotalUsers : s.totalUsers; // styleSpan

    const enterTitle = 'Enter at input your name and press add';


    return (
        <div className={s.wrapper}>
            <div className={s.fullWrapper}>
                <div className={s.wrapperInput}>
                    {/*<input value={name} onChange={setNameCallback} className={error ? s.errorInputClass : s.inputInputClass}/>*/}
                    {/*<button onClick={addUser} disabled={!name} className={error ? s.errorButton : s.button}>add</button>*/}
                    {/*<span className={error ? s.errorTotalUsers : s.totalUsers}>{totalUsers}</span>*/}

                    <input value={name} onChange={setNameCallback} onKeyDown={addEnterUser} title={enterTitle} className={styleInput}/>
                    <button onClick={addUser} disabled={!name} title={enterTitle} className={styleButton}>add</button>
                    <span className={styleSpan}>{totalUsers}</span>
                </div>
                <div className={s.wrapperErrorSpanClass}>
                    <span className={s.errorSpanClass}>{error}</span>
                </div>
            </div>
        </div>
    );
};

export default Greeting;
