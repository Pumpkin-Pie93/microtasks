import React, {useState} from 'react';

//
//
// type ComponentType = {
//     students: Array<StudensType>
// }
//
// type StudensType = {
//     id: number
//     name: string
//     age: number
// }
type CarsType = {
    topCars: Array<TopCarsType>
}

type TopCarsType = {
    manufacturer:string,
    model:string
}


export  const [topCars, setTopCars] = useState([
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
])

export const Component = (props: CarsType) => {



    return (
        <table>
            <tr>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
                {props.topCars.map((t , index) => {
                    return (
                        <tr key={index + 1}>
                        <td>
                            {/*// {index +1} -*/}
                            {t.manufacturer}</td>
                    <td>{t.model}</td>
                </tr>
                    )
                })}
                    </table>
                    );
                };




