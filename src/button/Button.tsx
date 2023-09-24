import React from 'react';
import styled from "styled-components";

type BtnType = {
    name: string
    callBack: () => void
}
export const Button = (props:BtnType) => {
    const onClickHandler = () => {

        props.callBack()
    }

    return (
        <StyledBtn onClick={onClickHandler}>{props.name}</StyledBtn>
    );
};

const StyledBtn = styled.button`
  width: 130px;
  height: 55px;
  background-color: rgba(187, 30, 222, 0.6);
  border: 2px solid rgba(245, 135, 168, 0);
  box-shadow: 2px 3px 24px 1px #bb1ede;
  border-radius: 6px;
  color: #fff3f3;
  font-size: 1.5rem;
  font-family: "Harlow Solid Italic", sans-serif;

  &:last-child {
    background-color: rgb(255, 242, 0);
    box-shadow: 2px 3px 24px 1px rgb(250, 242, 2);
    color: #fff3f3;
    padding: 3px;
    font-size: 1.2rem;

    &:hover {
      background-color: rgba(255, 0, 0, 0.76);
      border: 2px solid rgb(255, 0, 0);
      box-shadow: 2px 3px 24px 1px #ee3939;
    }
  }

  & + button {
    margin-left: 25px;
  }

  &:hover {
    background-color: rgba(123, 222, 30, 0.6);
    border: 2px solid rgba(123, 222, 30, 0.6);
    box-shadow: 2px 3px 24px 1px #4ff105;
  }


`


