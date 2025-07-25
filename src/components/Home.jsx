import React from 'react'
import img_profilo from '../assets/img_portfolio.jpeg'
const Home = () => {
  return (
    <div>
      <section className="home">
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
              <div>JR FULL STACK WEB DEVELOPER</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home