import { useEffect, useState } from "react"
import HeroImage from "../../../assets/New-homepage/image-web-3-desktop.jpg"
import HeroImageMobile from "../../../assets/New-homepage/image-web-3-mobile.jpg"
import { news } from "../data"

import "./Hero.scss"


const Hero = () => {

  const [isDesktop, setDesktop] = useState(true);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);

    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <section className="hero_container">

        <article className="hero_card"> <img src={isDesktop ? HeroImage : HeroImageMobile} alt="hero-background" /> </article>

        <article className="hero_card"> The Bright Future of Web 3.0? </article>

        <article className="hero_card">
          We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
          But is it really fulfilling its promise?
          <button> Read more </button>
        </article>

        <article className="hero_card">
          <h3>News</h3>
          {news.map((news, index) => (
            <div key={index} className="single_news_card">
              <h4>{news.title}</h4>
              <p>{news.description}</p>
            </div>
          ))}
        </article>
    </section>
  )
}

export default Hero