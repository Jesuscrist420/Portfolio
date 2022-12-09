import './Home.css'
import Me from "../../Assets/Me.png";
import {useLayoutEffect} from "react";
import {gsap} from "gsap";
const Home = () => {

    useLayoutEffect(() => {
        window.scroll(0,0);
        gsap.fromTo(".title",{x:-200, duration:3,opacity:0, delay:3.3},{x:0, duration:3, ease:'power2', opacity:1, delay:3 });
        gsap.fromTo(".portraitPhoto",{x:200, duration:3,opacity:0, delay:3.3},{x:0, duration:3, ease:'power2', opacity:1, delay:3 });
    },[])

    return(
        <section className="homeSection">
            <div className="presentation">
                <h1 className="title">Hi I'm Jesus Developer!<br/>Welcome to my portfolio</h1>
                <img src={Me} className="portraitPhoto"  alt="Jesus's Picture" />
            </div>
        </section>
    )
}

export default  Home