import {
  EnvironmentOutlined,
  LinkOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { educations } from "../data/data";

const AsideComp = () => {
  return (
    <>
      <aside>
        <div className="section contacts">
          <div className="contact-item">
            <EnvironmentOutlined />
            <span>
              <a
                href="https://www.google.com/maps/place/Delmas+75,+Port-au-Prince/@18.5419576,-72.2744153,18.79z/data=!4m6!3m5!1s0x8eb9e7ce1981c26b:0xaaed6032fec7b1b2!8m2!3d18.5361711!4d-72.2901289!16s%2Fg%2F1v470djt?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pétion-Ville, Haïti
              </a>
            </span>
          </div>
          <div className="contact-item">
            <PhoneOutlined />
            <span>
              <a href="tel:+50931216802">(+509) 3121 - 6802</a>
            </span>
          </div>
          <div className="contact-item">
            <MailOutlined />
            <span>
              <a href="mailto:ketelovelaloi647@gmail.com">
                ketelovelaloi647@gmail.com
              </a>
            </span>
          </div>
        </div>

        <div className="section">
          <h2>Compétences</h2>
          <p>
            Je possède une solide maîtrise des technologies web telles que HTML, CSS,
            JavaScript et React, ce qui me permet de créer des sites modernes,
            responsives et performants. Je sais également travailler avec des outils de
            versioning comme Git et collaborer efficacement en équipe. Curieux et
            passionné, j’améliore constamment mes compétences pour proposer des solutions
            adaptées et innovantes à chaque projet.
          </p>
          <div className="skills">
            <div className="skill">
              <span>Javascript - React js</span>
              <div className="full">
                <div className="percent second"></div>
              </div>
            </div>
            <div className="skill">
              <span>HTML, CSS, SCSS</span>
              <div className="full">
                <div className="percent third"></div>
              </div>
            </div>
            <div className="skill">
              <span>Python && Django</span>
              <div className="full">
                <div className="percent forth"></div>
              </div>
            </div>
          </div>
          <Button
            type="link"
            icon={<LinkOutlined />}
            href="https://github.com/klaloi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            En savoir plus sur Github
          </Button>
        </div>

        <div className="section">
          <h2>Témoignages</h2>
          <p>
            <q>
              Travailler avec Ketelove a été une excellente expérience. Son
              professionnalisme et sa créativité ont permis de donner vie à notre projet
              exactement comme nous l’avions imaginé.
            </q>
          </p>
          <Button
            type="link"
            icon={<LinkOutlined />}
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            En savoir plus sur LinkedIn
          </Button>
        </div>

        <div className="section">
          <h2>Formations Universitaires</h2>
          {educations.map((item, index) => (
            <div className="education-item" key={index}>
              <h3>{item.title}</h3>
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <div className="section">
          <h2>Langues</h2>
          <div className="language-item">
            <h3>Français</h3>
            <span>Niveau professionnel</span>
            <div className="full">
              <div className="percent first"></div>
            </div>
          </div>
          <div className="language-item">
            <h3>Anglais</h3>
            <span>Niveau intermédiaire</span>
            <div className="full">
              <div className="percent second"></div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AsideComp;
