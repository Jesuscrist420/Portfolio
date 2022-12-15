import Me from "../../Assets/Me.png";
import "./AboutMe.css"

const AboutMe = () => {
    return(
        <section>
            <div className="Container">
                <h1>About me</h1>
                <img src={Me} className="portraitPhoto"  alt="Jesus's Picture" />
            </div>
        </section>
    )
}

export default  AboutMe