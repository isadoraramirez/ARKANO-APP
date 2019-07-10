import React from 'react';


class Form extends React.Component {
  constructor(args){
    super(args)
    this.state ={

        name:'',
        shop:'',
        user:'',
        visit:'',
        date:'',

    }
  }

  onChange(e){
      this.setState({
          [e.target.name]: e.target.value
      })

  }

  render(){
    return(
     

        <div>
        <label htmlFor="name">Cantidad de nuevas compras </label>
        <input 
        value={this.state.name}
        onChange={this.onChange.bind(this)}
        name="name" id="name" type="number"/>
     
        

        <div>
        <label htmlFor="shop">Incremento de compras</label>
        <input 
        value={this.state.shop}
        onChange={this.onChange.bind(this)}
        shop="shop" id="shop" type="number"/>
     
        </div>

        <div>
        <label htmlFor="user">Cantidad de nuevos usuarios </label>
        <input 
        value={this.state.user}
        onChange={this.onChange.bind(this)}
        user="user" id="user" type="number"/>
     
        </div>


        <div>
        <label htmlFor="visit">Cantidad de nuevas visitas </label>
        <input 
        value={this.state.visit}
        onChange={this.onChange.bind(this)}
        name="visit" id="visit" type="number"/>
     
        </div>

        <div>
        <label htmlFor="date">Fecha de ingreso  </label>
        <input 
        value={this.state.date}
        onChange={this.onChange.bind(this)}
        name="date" id="date" type="date"/>
     
        </div>


      <p>{JSON.stringify(this.state)}</p>
      </div>
    )
    }
  }




export default Form;
