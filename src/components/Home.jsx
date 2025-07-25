import React from 'react'
import img_profilo from '../assets/img_portfolio.jpeg'
const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="content">
          <div className="name">
            MY NAME IS <span>AGOSTINO</span>
          </div>
          <div className="des">
            Chi sono...
          </div>
          <a href="/agostinocarusocv.pdf" target='_blank'>Download my CV</a>
        </div>
        <div className="avatar">
          <div className="card">
            <img src={img_profilo} alt="" />
            <div className="info">
              <div>
                <div>JR full stack web dev</div>
                <div>Italian</div>
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