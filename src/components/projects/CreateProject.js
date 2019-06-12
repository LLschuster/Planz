import React, { Component } from 'react'
import {connect} from 'react-redux'
import {projectCreate} from '../../store/actions/projectCreate'

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
          this.props.CreateProject(this.state)
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
const mapDispachtToProps = (dispatch) => {
    return {
        CreateProject: (project) => dispatch(projectCreate(project))
    }
}

export default connect(null, mapDispachtToProps)(CreateProject)