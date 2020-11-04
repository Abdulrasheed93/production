import React, { Component } from 'react';


class Input extends Component {
    state = {
        num1: '', 
        num2: '',
        operator: '',
        result: ''
    };

    onButttonClicked = () => {
     
            let num1 = (this.state.num1);
            let num2 = (this.state.num2);
            let total = (this.state.result);

      switch (this.state.operator) {
          case '+':
              total = parseFloat(num1) + parseFloat(num2);
              this.setState({result: total})
              break;

          case  '*':
               total = num1 * num2;
               this.setState({result: total})
               break;
          
          case  '-':
                total = num1 - num2;
                this.setState({result: total})
                break;
                
          case  '/':
            if (num1 === '0' || num2 === '0'){
                this.setState({result: 'invalid Input'});
            }
            else {
                total = num1 / num2;
               this.setState({result: total})
            }
               
               break;

          default:
                this.setState({num1: ''});
                this.setState({num2: ''});
                this.setState({operator: ''});
                this.setState({result: ''});
                break;

                
      };

     
        };




    render() {
        return(
            <div className='ui container'>
                <input 
                    type ='text'
                    placeholder = 'Enter first Number'
                    onChange = {e => this.setState({ num1: e.target.value})}
                    value = {this.state.num1}
                />

                <select
                    onChange = {e => this.setState({ operator: e.target.value})} 
                    value = {this.state.operator}
                >

                    <option>* </option>
                    <option>/</option>
                    <option>-</option>
                    <option>+</option>
                </select>

                 <input 
                    type ='text'
                    placeholder = 'Enter second Number'
                    onChange = {e => this.setState({ num2: e.target.value})}
                    value = {this.state.num2}
                />

                 
            <br/>
            <div>
                
                <button onClick = {this.onButttonClicked}>Calculate
                </button>

                <input 
                    type ='text'
                    placeholder = 'Answer'
                    value = {this.state.result}
                    readOnly
                />


            </div>

             </div>  


            
           )
         
        };  

    
       
};



export default Input;