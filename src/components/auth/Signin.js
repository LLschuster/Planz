import React, { Component } from 'react'

class Signin extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            email:'',
            password:'',
        };
    }
    onSubmitHandler = (e) => {
          e.preventDefault();
          console.log(this.state);  
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.onSubmitHandler} className='white'>
                    <div className='input-field'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' onChange = {this.onChangeHandler} ></input>
                    </div>
                    <div className='input-field'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' onChange = {this.onChangeHandler} ></input>
                    </div>
                    <div className='input-field'>
                    <button  type = 'submit' className='btn pink'>Log in</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin
