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
  const [listSkills] = useState([
    {
      name: 'HTML',
      des: 'HTML defines the structure of web pages using elements like headings, paragraphs, and links. It is the foundation for organizing content on websites and applications.',
      icon: faHtml5
    },
    {
      name: 'CSS',
      des: 'CSS styles web pages with colors, layouts, fonts, and animations. It separates design from content, enabling responsive and visually appealing interfaces across different screen sizes and devices.',
      icon: faCss3Alt
    },
    {
      name: 'JAVA SCRIPT',
      des: 'JavaScript adds interactivity to web pages, enabling dynamic content updates, user input handling, and real-time features. It s essential for building modern, client-side web applications.',
      icon: faJs
    },
    {
      name: 'REACT',
      des: 'React is a JavaScript library for building interactive user interfaces. It uses components and a virtual DOM to efficiently update and render dynamic views in web applications.',
      icon: faReact
    },
    {
      name: 'JAVA',
      des: 'Java is a powerful, object-oriented programming language used for building cross-platform applications. It’s widely used in enterprise environments for backend development, Android apps, and large systems.',
      icon: faJava
    },
    {
      name: 'SPRING',
      des: 'Spring is a Java-based framework that simplifies backend development. It provides tools for dependency injection, REST APIs, security, and database integration in scalable, enterprise-grade applications.',
      icon: springLogo
    },
    {
      name: 'MYSQL',
      des: 'MySQL is a relational database management system used to store and manage data. It supports structured queries (SQL) and is commonly used in web and server-side applications.',
      icon: faDatabase
    }
  ])

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
          listSkills.map((value, index) => {
            let aosType = '';
            if (index % 3 === 0) aosType = 'fade-right';
            else if (index % 3 === 1) aosType = 'zoom-in';
            else aosType = 'fade-left';

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