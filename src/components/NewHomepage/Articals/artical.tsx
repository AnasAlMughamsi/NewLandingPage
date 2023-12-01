import { articals } from "../data"
import "./artical.scss"



const Artical = () => {
  
    return (
    <section className="artical_section">
        {articals.map((artical) => (
            <div key={artical.id} className="artical_card">

                <img src={artical.image} className="artical_image"/>

                <div className="artical_card_content">
                    <h2>0{artical.id}</h2>
                    <h4>{artical.title}</h4>
                    <p>{artical.description}</p>
                </div>
            </div>
        ))}

    </section>
  )
}

export default Artical