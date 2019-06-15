import React, {Component} from 'react'
import Notifications from './Notifications'
import List from '../projects/List'
import {connect} from 'react-redux'
import { compose } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';
import { firestoreConnect } from 'react-redux-firebase';

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
    projects: state.firestore.ordered.Projects,
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'Projects'}
    ])
)(Dashboard)