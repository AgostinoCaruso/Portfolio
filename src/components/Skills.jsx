import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
  faJava
} from '@fortawesome/free-brands-svg-icons'

import { faDatabase } from '@fortawesome/free-solid-svg-icons'

import springLogo from '../assets/springLogo.png'

const Skills = () => {

  const { language, translation } = useContext(GlobalContext);
  const skills = translation[language].skills;
  return (
    <section id="skills">

      <div data-aos="zoom-in">
        <div className="title">
          {translation[language].skills.title}
        </div>
        <div className="des">
          {translation[language].skills.des}
        </div>
      </div>
      <div className="list" data-aos="zoom-in">
        {
          skills.skillsList.map((value, index) => {
            let aosType = '';
            if (index % 3 === 0) aosType = 'fade-up';
            else if (index % 3 === 1) aosType = 'zoom-in';
            else aosType = 'fade-down';

            return (
              <div key={index} className='item' data-aos={aosType}>
                {value.name === 'SPRING' ? <img src={value.icon} alt="" />
                  : <FontAwesomeIcon icon={value.icon} />}
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
              </div>
            );
          })
        }
      </div>

    </section>
  )
}

export default Skills