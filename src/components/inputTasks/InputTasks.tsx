import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";

type AddMessagePropsType = {
    addMessage: (title: string) => void
}

export const InputTasks = (props: AddMessagePropsType) => {

    let [title, setTitle] = useState('')
    console.log(title)
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
// @ts-ignore
//     const onClickTitleHandler = (event: MouseEvent<HTMLButtonElement>) => {
//         let newTitle = event.currentTarget.value;
//         setTitle(newTitle) все неправильно 4 верхние строчки
// }

    const onClickBtnHandler = () => {
        {props.addMessage(title)}
        setTitle('')
    }

    return (
            <StyledInputTasks>
                <input value={title} onChange={onChangeInputHandler}/>
                <button onClick={onClickBtnHandler}>+</button>
            </StyledInputTasks>
    );
};

const StyledInputTasks = styled.div`
  border: 1px solid deeppink;
  border-radius: 5px;
  padding: 4px;
  margin: 2px;
  //background-image: -webkit-gradient( liner red , pink);

  & input {
    color: deeppink;
    background-color: rgba(255, 192, 203, 0.47);
    border: transparent;
    margin-right: 4px;
    padding: 5px;
    
    &:focus-visible {
      outline: 1px solid hotpink;
      border-radius: 3px;
    }
  }
  
  & button {
    width: 20px;
    height: 20px;
    background-color: deeppink;
    color: pink;
    border: none;
    border-radius: 50%;
  }
`