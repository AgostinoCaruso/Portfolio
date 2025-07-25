import React, { useState } from 'react'
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

  const [listSkills] = useState([
    {
      name: 'HTML',
      des: 'lorem20',
      icon: faHtml5
    },
    {
      name: 'CSS',
      des: 'lorem20',
      icon: faCss3Alt
    },
    {
      name: 'JAVA SCRIPT',
      des: 'lorem20',
      icon: faJs
    },
    {
      name: 'REACT',
      des: 'lorem20',
      icon: faReact
    },
    {
      name: 'JAVA',
      des: 'lorem20',
      icon: faJava
    },
    {
      name: 'SPRING',
      des: 'lorem20',
      icon: springLogo
    },
    {
      name: 'MYSQL',
      des: 'lorem20',
      icon: faDatabase
    }
  ])

  return (
    <section id="skills">
      <div className="title">
        These are my Skills
      </div>
      <div className="des">
        Mi sono specializzato...
      </div>
      <div className="list">
        {
          listSkills.map((value, index) => (
            <div key={index} className='item'>
              {value.name === 'SPRING' ? <img src={value.icon} alt="" />
                : <FontAwesomeIcon icon={value.icon} />}
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills