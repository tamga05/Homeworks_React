import React from 'react'
import s from "./Message2.module.css";


export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}


const Message2: React.FC<MessagePropsType> = (props) => {
    return (
        <div>
            <div className={s.message2}>
                <div className={s.messageLeftBlock}>
                    <div className={s.messageLeftBlockInner}></div>
                </div>
                <div className={s.messageBlockWrapper}>
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
                </div>
            </div>
        </div>
    )
}

export default Message2
