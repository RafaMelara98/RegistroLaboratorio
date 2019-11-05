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
            <div class="form-group">
                <h1>Registro de laboratorio</h1>
                <label  class="col-sm-2 col-form-label">
                Ingrese el carnet:
                    <input type="text" value={this.state.value} onChange={this.handleChange} class="form-control" />
                </label>  

                <label class="col-sm-2 col-form-label">
                Seleccione el horario:
                <select  class="form-control">
                    <option value="lunes" >Lunes de 9:00 a 11.00</option>
                    <option value="martes">Martes de 13:30 a 15:30</option>
                    <option value="miercoles">Miércoles de 9:00 a 11.00</option>
                    <option value="jueves">Jueves de 13:30 a 15:30</option>
                    <option value="viernes">Viernes de 9:00 a 11.00</option>
                    <option value="viernes">Viernes de 15:30 a 17:30</option>
                </select>
                </label>  
                
                <label class="custom-control-label">
                Llegó tarde?
                <input type="checkbox" class = "custom-control-input"/>
                </label> 

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

