import React, { useState } from 'react'

const Projects = () => {

  const [listProjects] = useState([
    {
      name: "GameSpot",
      des: "A full-stack web application for managing a digital game library. The frontend allows users to browse, search, and view game details, while the backend handles game data, and database integration.",
      mission: "Full stack developer",
      language: "HTML, CSS, JS, Java, Spring, MySql",
      images: "/project1.png"
    },
    {
      name: "B&B",
      des: "lorem20",
      mission: "Full stack developer",
      language: "HTML, CSS, JS, MySql",
      images: "../project1.png"
    },
  ])
  return (
    <section id="projects">
      <div data-aos="fade-in">
        <div className="title">
          These are my projects
        </div>
        <div className="des">
          lorem20
        </div>
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div key={key} className='item' data-aos={key % 2 === 0 ? "fade-right" : "fade-left"}>
            <div className="images">
              <img src={value?.images} alt="" />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <h4>Mission</h4>
                <div className='de'>{value.mission}</div>
              </div>
              <div className="mission">
                <h4>Languages</h4>
                <div className='de'>{value.language}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects 