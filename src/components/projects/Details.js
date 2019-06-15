import React from 'react'
import { compose } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';
import { firestoreConnect } from 'react-redux-firebase';
import {connect} from 'react-redux';


const Details = (props) => {
    if (props.project){
        return (
            <div className = 'container section'>
                <div className = 'card z-depth-0'>
                    <div className='card-content'>
                        <span className='card-title'>{props.project.title}</span>
                        <p>{props.project.content}</p>
                        <p className='grey-text'>September 2019</p>
                    </div>
                    <div className='card-action gray light-3'>
                        <span className='text-gray'>{props.project.authFirstName} {props.project.authLastName}</span>    
                    </div>                
                </div>
            </div>
        )
    } else {
        return (
            <div className='container'>
                <p>page loading</p>
            </div>
        )
    }
}

const mapStateToProps = (state, preProps) => {
    
    const Projects = state.firestore.data.Projects;
    const project = Projects? Projects[preProps.match.params.id] : null;
    return {
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
      firestoreConnect([
        {collection: 'Projects'}
    ])
) (Details)
