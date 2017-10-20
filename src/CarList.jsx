import React from "react";

import SingleCar from './SingleCar.jsx';

const CarList = (props) => {
    return (
        
            <ul>
                <li id="car-list-header">
                <span>ID</span>
                <span>Brand</span>
                <span>Model</span>
                <span>Color</span>
                <span>Gears</span>
                <span></span>
                </li>
            
                {props.cars.map((car, index) => (
                    <SingleCar enterEditMode={props.enterEditMode} removeCar={props.removeCar} car={car} key={index}/>
                ))}
            </ul>
    );
}
export default CarList;
