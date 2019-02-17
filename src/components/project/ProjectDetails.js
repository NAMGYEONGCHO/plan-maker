import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p>Lorem</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>11th of the Feb</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
