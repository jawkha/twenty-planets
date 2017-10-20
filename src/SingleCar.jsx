import React from "react";

const SingleCar = props => {
  console.log(props);
  return (
    <li className='single-car-list-item'>
      <button id='single-car-data' onClick={() => props.enterEditMode(props.car)}>
        <div>{props.car.id}</div>
        <div>{props.car.brand}</div>
        <div>{props.car.model}</div>
        <div>{props.car.color}</div>
        <div>{props.car.gears}</div>
      </button>
      <div className='remove-car-button-div'>
        <button onClick={() => props.removeCar(props.car)}>X</button>
      </div>
    </li>
  );
};
export default SingleCar;