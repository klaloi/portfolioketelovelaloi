import { Button, Divider } from "antd";
import "./App.css";
import HeaderComp from "./components/HeaderComp";
import FooterComp from "./components/FooterComp";
import { LikeOutlined, LinkOutlined } from "@ant-design/icons";
import { experience, projects } from "./data/data";
import AsideComp from "./components/AsideComp";
import ecommerceImg from "./assets/images/ECommerce.png";


function App() {
  return (
    <>
      <div className='main'>
        <HeaderComp />
        <div className='body-container'>
          <div className='left'>
            <section className='about'>
              <article>
                <h2>Parlons un peu de moi</h2>
                <p>
                  Passionnée par le développement web et les nouvelles technologies, je mets mon savoir-faire au service de projets innovants et ambitieux. Curieuse et créative, j'aime relever des défis techniques et concevoir des solutions sur mesure pour répondre aux besoins de mes clients.
                  <br /><br />
                  Grâce à mes compétences en HTML, CSS, JavaScript, React et d'autres frameworks modernes, je suis capable de créer des sites web performants, responsives et esthétiques. J'ai également une bonne maîtrise de la gestion de projet, ce qui me permet de travailler efficacement en équipe et de livrer des résultats de qualité dans les délais impartis.
                  <br /><br />
                  Autonome, rigoureuse et toujours prête à apprendre de nouvelles choses, je reste à l'écoute des tendances pour améliorer constamment mes pratiques. Mon objectif est de contribuer à des projets qui ont un impact positif et de continuer à progresser en tant que développeur.
                </p>
              </article>
            </section>
            <section className='projects'>
              <h2>Mon projet recent</h2>
              <article>
                <img
                  className='featured-img'
                  src={ecommerceImg}
                  alt='ecommerces'
                />
                <div className='project-info'>
                  <h3>E-Commerce</h3>
                  <p>
                    Cette image illustre notre plateforme e-commerce moderne et intuitive,
                    conçue pour faciliter l’achat en ligne. Elle met en avant la diversité
                    des produits proposés, la simplicité de navigation et la sécurité des
                    transactions. Notre objectif est d’offrir à chaque client une expérience
                    d’achat rapide, pratique et agréable, où qu’il soit.
                  </p>
                  
                </div>
              </article>
              <Divider style={{ backgroundColor: "#fff" }} />
            </section>

            <section className='experiences'>
              <h2>Experience professionnelle</h2>
              {experience.map((item) => {
                return (
                  <article key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </section>
          </div>
          <AsideComp />
        </div>
        <FooterComp />
      </div>
    </>
  );
}

export default App;
