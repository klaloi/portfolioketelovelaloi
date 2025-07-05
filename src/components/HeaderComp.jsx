import { Button } from "antd";
import profile from "../assets/images/Kate.jpg";
import {
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const HeaderComp = () => {
  return (
    <header>
      <div className="left">
        <img src={profile} alt="Photo de profil" />
        <div className="user-infos">
          <h1>LALOI Ketelove</h1>
          <h3>Développeuse web - mobile</h3>
          <div className="contacts">
            <div className="contact-item">
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinOutlined />
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://github.com/klaloi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubOutlined />
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://web.facebook.com/?locale=fr_FR&_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookOutlined />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComp;
