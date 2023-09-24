import React from 'react';
import styled from "styled-components";

type BtnPropsType = {
    name: string
    callBack:() => void
}
export const Btn = (props: BtnPropsType) => {

    const onclickBtnHandler = () => {
        props.callBack()
    }
    return (
        <StyledBtn onClick={onclickBtnHandler}>{props.name}</StyledBtn>
    );
};



const StyledBtn = styled.button`
  width: 20px;
  height: 20px;
  background-color: deeppink;
  color: pink;
  border: none;
  border-radius: 50%;
`