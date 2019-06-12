import React, {Component} from 'react'
import Notifications from './Notifications'
import List from '../projects/List'
import {connect} from 'react-redux'

class Dashboard extends Component 
{
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col s12 m6'>
                        <List projects={this.props.projects} />
                    </div>
                    <div className='col s12 m5 offset-m1'>
                        <Notifications></Notifications>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
return {
    projects: state.project.projects,
    }
}
export default connect(mapStateToProps)(Dashboard)