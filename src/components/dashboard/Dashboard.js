import React, {Component} from 'react'
import Notifications from './Notifications'
import List from '../projects/List'

class Dashboard extends Component 
{
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col s12 m6'>
                        <List />
                    </div>
                    <div className='col s12 m5 offset-m1'>
                        <Notifications></Notifications>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard