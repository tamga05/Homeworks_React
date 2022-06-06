import React from 'react';
import {AffairType} from './HW2';
import s from './Affairs.module.css';


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}


function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    };// need to fix


    return (
        <div className={s.wrapperAffairButton}>
            <div>{props.affair.name}</div>

            <div className={s.affairButtonRightBlock}>
                <div>{props.affair.priority}</div>

                <button className={s.deleteButton} onClick={deleteCallback}>
                    <div>✖</div>
                </button>
            </div>
        </div>
    );
}

export default Affair;
