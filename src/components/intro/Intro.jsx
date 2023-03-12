import "./intro.css"
import guy from "../../img/guy.png"

const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Hamdah Khan</h1>
                <div className="i-title">
                  <div className="i-title-wrapper">
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">UI/UX Designer</div>
                    <div className="i-title-item">Photographer</div>
                    <div className="i-title-item">Writer</div>
                    <div className="i-title-item">Content Creator</div>
                  </div>
                </div>
                <p className="i-desc">
                  I design and develop services for customers of all sizea,
                  specializing in creating stylish, modern websites, web sevices and online and
                  stores.
                </p>
            </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={guy} alt="" className="i-img" />
        </div>
    </div>
  )
}

export default Intro
