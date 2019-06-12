import React from 'react'

const Summary = ({project}) => {
    return (
        <div className='card z-depth-0'>
            <div className='card-content'>
    <           span className='card-title'>{project.title}</span>
                <p>Poject content</p>
                <p className='grey-text'>Date of Project</p>
            </div>
        </div>
    );
}

export default Summary;
