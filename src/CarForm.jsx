import React from "react";

export default class CarForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var form = document.forms.carForm;
    this.props.editMode
      ? this.props.editCar({
        brand: form.brand.value,
        model: form.model.value,
        color: form.color.value,
        gears: form.gears.value,
      })
      : this.props.createCar({
        brand: form.brand.value,
        model: form.model.value,
        color: form.color.value,
        gears: form.gears.value,
      });
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div id="car-form-div" className="well">
        
        <form name="carForm" onSubmit={this.handleSubmit} className="form-inline" id="car-form">
          <input
          id="car-form-brand"
          className="form-control mb-2 mr-sm-2 mb-sm-0"
            type="text"
            name="brand"
            placeholder={this.props.editMode ? this.props.carToEdit.brand : "Fiat"}
            defaultValue={this.props.editMode ? this.props.carToEdit.brand : "Fiat"}
            onChange={this.handleChange}
          />
          <input
          id="car-form-model"
          className="form-control mb-2 mr-sm-2 mb-sm-0"
            type="text"
            name="model"
            placeholder={this.props.editMode ? this.props.carToEdit.model : "Uno"}
            defaultValue={this.props.editMode ? this.props.carToEdit.model : "Uno"}
            onChange={this.handleChange}
          />
          <input
          id="car-form-color"
          className="form-control mb-2 mr-sm-2 mb-sm-0"
            type="text"
            name="color"
            placeholder={this.props.editMode ? this.props.carToEdit.color : "Red"}
            defaultValue={this.props.editMode ? this.props.carToEdit.color : "Red"}
            onChange={this.handleChange}
          />
          <input
          id="car-form-gears"
          className="form-control mb-2 mr-sm-2 mb-sm-0"
            type="number"
            name="gears"
            placeholder={this.props.editMode ? this.props.carToEdit.gears : 5}
            defaultValue={this.props.editMode ? this.props.carToEdit.gears : 5}
            min="3"
            max="8"
            onChange={this.handleChange}
          />
          <button id="car-form-button" className="btn btn-primary">
            {this.props.editMode ? "EDIT" : "ADD"}
          </button>
        </form>
      </div>
    );
  }
}
