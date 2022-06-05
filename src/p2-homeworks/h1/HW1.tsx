import React from 'react';
import Message from './Message';
import Message2 from './Message2';


const messageData1 = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Artem',
    message: 'npm start нажимал?',
    time: '22:00'
};

const messageData2 = {
    avatar: 'https://i.pinimg.com/originals/62/f2/03/62f203bea44b49f7b744e956b07f0a6e.jpg',
    name: 'Angelina',
    message: 'You\'re handsome...',
    time: '07:00',
};


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData1.avatar}
                name={messageData1.name}
                message={messageData1.message}
                time={messageData1.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            AlternativeMessage

            <Message2
                avatar={messageData2.avatar}
                name={messageData2.name}
                message={messageData2.message}
                time={messageData2.time}
            />

            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;
