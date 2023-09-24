import React, {useState} from 'react';
import './App.css';
import {Input} from "./components/btn-input/Input";
import {Btn} from "./components/btn-input/Btn";


function App() {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])


    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])

    };

    const callBackBtnHandler = () => {
        addMessage(title);
        setTitle('')
    }

    return (
        <div className={'App'}>
            <Input title={title} setTitle={setTitle}/>
            <Btn name={'+'} callBack={callBackBtnHandler}/>
            {message.map((m: { message: string },index: number) => {
                return (
                    <div key={index}>{m.message}</div>
                )
            })}
        </div>
    )
}

export default App;


