import React from 'react'

const Summary = ({project}) => {
    return (
        <div className='card z-depth-0'>
            <div className='card-content'>
    <           span className='card-title'>{project.title}</span>
                <p>posted by {project.authFirstName + ' ' + project.authLastName}</p>
                <p className='grey-text'>september 2019</p>
            </div>
        </div>
    );
}

export default Summary;
