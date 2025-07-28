import React, { useState } from 'react'

const Projects = () => {

  const [listProjects] = useState([
    {
      name:"GameSpot",
      des:"lorem20",
      mission:"Full stack developer",
      language:"HTML, CSS, Js, Java, Spring, MySql"
    },
  ])
  return (
    <section id="projects">
      <div className="title">
        These are my projects
      </div>
      <div className="des">
        lorem20
      </div>
    </section>
  )
}

export default Projects 