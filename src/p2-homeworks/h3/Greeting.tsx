import React, {ChangeEvent} from 'react';
import s from './Greeting.module.css';


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void// need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}


// презентационная компонента (для верстальщика)

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
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

    return (
        <div>
            <div className={s.wrapperInput}>
                <input value={name} onChange={setNameCallback} className={error ? s.errorInputClass : s.inputInputClass}/>
                <button onClick={addUser} disabled={!name} className={error ? s.errorButton : s.button}>add</button>
                <span className={error ? s.errorTotalUsers : s.totalUsers}>{totalUsers}</span>
            </div>
            <div className={s.wrapperErrorSpanClass}>
                <span className={s.errorSpanClass}>{error}</span>
            </div>
        </div>
    );
};

export default Greeting;
