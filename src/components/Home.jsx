import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import img_profilo from '../assets/img_portfolio.jpeg'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {

  const { language, translation } = useContext(GlobalContext);
  return (
    <div>
      <section id="home">
        <div className="content">
          <div className="name">
            {translation[language].home.name} <span>AGOSTINO</span>
          </div>
          <div className="des">
            {translation[language].home.des}
          </div>
          <a className='cv' href="/Agostino.Caruso.pdf" target='_blank'>{translation[language].home.cv}</a>
        </div>
        <div className="avatar">
          <div className="card">
            <img src={img_profilo} alt="" />
            <div className="info">
              <div>
                <div>JR full stack web dev</div>
                <div>{translation[language].home.nationality}</div>
                <div className='link'>

                  <a href="https://github.com/agostinocaruso" target='_blank'><FontAwesomeIcon icon={faGithub} />GitHUB</a>

                  <a href="https://www.linkedin.com/in/agostino-caruso-154811377/" target='_blank'><FontAwesomeIcon icon={faLinkedin} />Linkedin</a>
                </div>
              </div>
              <div>CSS HTML JS REACT JAVA SPRING</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home