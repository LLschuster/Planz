import React from 'react'

const Details = (props) => {
    const index = props.match.params.id;
    return (
        <div className = 'container section'>
            <div className = 'card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>Project title - {index}</span>
                    <p>Poject content</p>
                    <p className='grey-text'>Date of Project</p>
                </div>
                <div className='card-action gray light-3'>
                    <span className='text-gray'>Author</span>    
                </div>                
            </div>
        </div>
    )
}

export default Details
