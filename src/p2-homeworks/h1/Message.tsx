import React from 'react'
import s from './Message.module.css';


export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string

}


const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.messageBlock}>
            <div className={s.wrapperMessageImage}>
                <div className={s.innerMessageImage}>
                    <img className={s.messageImage} src={props.avatar} alt="avatar"/>
                </div>
            </div>
            <div className={s.messageContent}>
                <div className={s.bloggerName}>{props.name}</div>
                <div className={s.messageAndTime}>
                    <div className={s.message}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
