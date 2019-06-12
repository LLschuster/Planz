import React from 'react'
import Summary from './Summary'

const List = ({projects}) => {
    return(
        <div className='section'>
            {projects && projects.map(project=>{
               return (
                <Summary project={project} key={project.id}/>
               )
            })}
        </div>
    )
}

export default List