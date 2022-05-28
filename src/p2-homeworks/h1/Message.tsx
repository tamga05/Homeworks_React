import React from 'react'
import s from "./Message.module.css";


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}


const Message: React.FC<MessagePropsType> = () => {
    return (
        <div>
            <div className={s.messageBlock}>
                <img className={s.messageImage}
                     src="https://i.pinimg.com/originals/62/f2/03/62f203bea44b49f7b744e956b07f0a6e.jpg"
                     alt="avatar"/>
                <div className={s.messageContent}>
                    <div className={s.bloggerName}>Artem</div>
                    <div className={s.messageAndTime}>
                        <div className={s.message}>npm start нажимал?</div>
                        <div className={s.time}>20:00</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
