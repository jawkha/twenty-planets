import React from "react";

import SingleCar from './SingleCar.jsx';

const CarList = (props) => {
    return (
        
            <ul>
                <li id="car-list-header">
                <div>ID</div>
                <div>Brand</div>
                <div>Model</div>
                <div>Color</div>
                <div>Gears</div>
                <div></div>
                </li>
            
                {props.cars.map((car, index) => (
                    <SingleCar enterEditMode={props.enterEditMode} removeCar={props.removeCar} car={car} key={index}/>
                ))}
            </ul>
    );
}
export default CarList;
