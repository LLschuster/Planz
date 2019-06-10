import React, { Component } from 'react'

class Signup extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            email:'',
            password:'',
            firstName: '',
            lastName: '',
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
                    <input type='text' id='email' onChange = {this.onChangeHandler}  ></input>
                    </div>
                    <div className='input-field'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' onChange = {this.onChangeHandler} ></input>
                    </div>
                    <div className='input-field'>
                    <label htmlFor='firstName'>First name</label>
                    <input type='text' id='firstName' onChange = {this.onChangeHandler} ></input>
                    </div>
                    <div className='input-field'>
                    <label htmlFor='lastName'>Last name</label>
                    <input type='text' id='lastName' onChange = {this.onChangeHandler} ></input>
                    </div>
                    <div className='input-field'>
                    <button  type = 'submit' className='btn pink'>Sign up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup