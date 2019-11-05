import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Formulario extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} class="jumbotron">
            
            <h1>Registro de laboratorio</h1>
            <div class="form-group">
            <label class="col-sm-2 col-form-label">Ingrese el carnet: </label>
            <input class="form-control" type="text" ></input>
            </div>

            <div class="form-group">
                <label for="schedule">Seleccione el horario:</label>
                <select name="schedule" class="form-control" id="schedule_field">
                    <option>Lunes de 9:00 a 11.00</option>
                    <option>Martes de 13:30 a 15:30</option>
                    <option>Miércoles de 9:00 a 11.00</option>
                    <option>Jueves de 13:30 a 15:30</option>
                    <option>Viernes de 9:00 a 11.00</option>
                    <option>Viernes de 15:30 a 17:30</option>
                </select>
            </div>  
            
            <div class="form-group">
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="late_switch"></input>
                    <label class="custom-control-label" for="late_switch">Llegó tarde? </label>
                </div>
            </div>
            
        
            <div class="form-group">
                <button type="button" class="btn btn-danger" id="submit_btn"> Ingresar</button>     
            </div>
    
        </form>
        );
    }
}

//main
ReactDOM.render(
    <Formulario />,
    document.getElementById('root')
  );

