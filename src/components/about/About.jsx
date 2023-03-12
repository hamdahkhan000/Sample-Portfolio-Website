import React from 'react'
import "./about.css"
import Award from "../../img/award.png"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img 
          src="https://images.pexels.com/photos/3692625/pexels-photo-3692625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="" 
          className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that reader will be distracted 
          by the readable content.
        </p>
        <p className="a-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos deleniti
          ab quia beatae, hic nulla doloremque blanditiis recusandae enim ducimus
          minus tenetur repellat animi quidem voluptas aliquam sed voluptatem
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">
              International Design
            </h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, atque
            </p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default About