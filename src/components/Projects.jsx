import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Projects = () => {

  const { language, translation } = useContext(GlobalContext);
  const projects = translation[language].projects;
  return (
    <section id="projects">
      <div data-aos="fade-in">
        <div className="title">
          {projects.title}
        </div>
        <div className="des">
          {projects.des}
        </div>
      </div>
      <div className="list">
        {projects.projectsList.map((value, key) => (
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
                <h4>{language === "en" ? "Languages" : "Linguaggi"}</h4>
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