import React, { Component } from 'react'

class CreateProject extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            title:'',
            content:'',
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
                    <label htmlFor='title'>Project title</label>
                    <input type='text' id='title' onChange = {this.onChangeHandler} ></input>
                    </div>
                    <div className='input-field'>
                    <label htmlFor='content'>Project content</label>
                    <textarea className='materialize-textarea' id='content' onChange = {this.onChangeHandler}></textarea>
                    </div>
                    <div className='input-field'>
                    <button  type = 'submit' className='btn pink'>Create project</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject