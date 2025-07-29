import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
  faJava
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import springLogo from '../assets/springLogo.png';

const Skills = () => {
  const { language, translation } = useContext(GlobalContext);
  const skills = translation[language].skills;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="skills">
      <div data-aos="zoom-in">
        <div className="title">{skills.title}</div>
        <div className="des">{skills.des}</div>
      </div>

      <div className="list" data-aos="zoom-in">
        {skills.skillsList.map((value, index) => {
          let aosType = '';

          if (isMobile) {
            aosType = index % 3 === 0 ? 'fade-up'
                    : index % 3 === 1 ? 'fade-down'
                    : 'zoom-in';
          } else {
            aosType = index % 3 === 0 ? 'fade-right'
                    : index % 3 === 1 ? 'zoom-in'
                    : 'fade-left';
          }

          return (
            <div key={index} className="item" data-aos={aosType}>
              {value.name === 'SPRING'
                ? <img src={value.icon} alt="" />
                : <FontAwesomeIcon icon={value.icon} />}
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
