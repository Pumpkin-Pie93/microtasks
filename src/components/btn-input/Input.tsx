import React, {ChangeEvent} from 'react';
import styled from "styled-components";

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
}


export const Input = (props: InputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (
        <StyledInput value={props.title} onChange={onChangeInputHandler}/>
    );
};











const StyledInput = styled.input`
  color: deeppink;
  background-color: rgba(255, 192, 203, 0.47);
  border: transparent;
  margin-right: 4px;
  padding: 5px;

  &:focus-visible {
    outline: 1px solid hotpink;
    border-radius: 3px;
  }
`

