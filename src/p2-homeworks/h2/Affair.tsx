import React from 'react';
import {AffairType} from './HW2';
import affairs from './Affairs';


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}


function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        // props.deleteAffairCallback();
        // alert('BUTTON');


    };// need to fix


    return (
        <div>
            // show some text

            <button onClick={deleteCallback}>✖️</button>
        </div>
    );
}

export default Affair;
