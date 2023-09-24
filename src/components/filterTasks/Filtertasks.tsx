import React, {useState} from "react";
import {Button} from "../../button/Button";
import styled from "styled-components";

export type FilterBtnType = 'skip' | 'dollar' | 'ruble'

    export const Section = () => {

     const [money, setMoney] = useState([
            {banknote: "dollar", nominal: 100, number: "a123456789"},
            {banknote: "dollar", nominal: 50, number: "b123456789"},
            {banknote: "ruble", nominal: 100, number: "c123456789"},
            {banknote: "dollar", nominal: 100, number: "d123456789"},
            {banknote: "dollar", nominal: 50, number: "e123456789"},
            {banknote: "ruble", nominal: 100, number: "f123456789"},
            {banknote: "dollar", nominal: 50, number: "j123456789"},
            {banknote: "ruble", nominal: 50, number: "h123456789"}
        ]);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        let [filterBtn, setFilter] = useState<FilterBtnType>('skip');

        let CurrentMoney = money;

        if (filterBtn === 'ruble') {
            CurrentMoney = money.filter(cupure => cupure.banknote === 'ruble');
        }
        if (filterBtn === 'dollar') {
            CurrentMoney = money.filter(cupure => cupure.banknote === 'dollar');
        }

        let onclickHandler = (nameBtn: FilterBtnType) => {
            setFilter(nameBtn);
        }
        return (
        <StyledSection>
            <ul style={{
                border: '1px solid green',
                padding: '7px',
                width: 'fit-content',
                height: 'fit-content',
                flexWrap: 'wrap'
            }}>
                {CurrentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index + 1} style={{listStyle: "none", color: "green"}}>
                            <span>{objFromMoneyArr.banknote} </span>
                            <span>{objFromMoneyArr.nominal} </span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <Button name={'Rubles'} callBack={() => onclickHandler('ruble')}></Button>
                <Button name={'Dollars'} callBack={() => onclickHandler('dollar')}></Button>
                <Button name={'SkipFilter'} callBack={() => onclickHandler('skip')}></Button>
            </div>
        </StyledSection>
            )
            }

 const StyledSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    //  
    //  & h1 {
    //    margin: 10px;
    //  }
    //}
`