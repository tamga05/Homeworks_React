import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import Greeting from './Greeting';
import {UserType} from './HW3';


type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void; // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для профи :)
// уровень локальной логики

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов

    const [name, setName] = useState<string>(''); // need to fix any

    const [error, setError] = useState<string>(''); // need to fix any


    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any

        const userName = event.currentTarget.value.trim();

        if (userName) {
            setName(userName);
            setError('');
            //error && setError('');
        } else {
            setName('');
            //name && setName('');
            setError('Enter your name !!!');
        }
    };


    const addUser = () => {
        alert(`Hello ${name}!`); // need to fix
        addUserCallback(name);
        setName('');
    };


    const addEnterUser = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && name) {
            addUser();
        }
    }


    const totalUsers = users.length; // need to fix


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            addEnterUser={addEnterUser}
        />
    );
};

export default GreetingContainer;
