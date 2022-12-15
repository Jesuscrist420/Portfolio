import './Home.css'
import {useLayoutEffect, useState} from "react";
import {gsap} from "gsap";
const Home = ({tl}) => {

    const [animatedElement, setAnimatedElement] = useState(null);

    useLayoutEffect(() => {
        if (!animatedElement) return;
        let ctx = gsap.context(() => {
            tl.to(animatedElement,{duration:1,opacity:1, scale:1, ease:"back", immediateRender: false});
        });
        return () => ctx.revert(); // cleanup
    },[animatedElement])

    return(
        <section className="homeSection">
            <div className="presentation">
                <h1 ref={setAnimatedElement} className="title">Hi I'm Jesus Developer!<br/>Welcome to my portfolio</h1>
            </div>
        </section>
    )
}

export default  Home