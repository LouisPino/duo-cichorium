import "../styles/footer.css"
import MailList from "./MailList"

function Footer() {
  return (
    <div className="my-footer">
      <MailList />
      <div className="footer-content">
        <div className="socials-ctr">
          <a href="https://www.instagram.com/duo_cichorium/" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/dsvcyich1/image/upload/v1712532048/Insta_iwv0wl.png" alt="Duo Cichorium Instagram link" />
            <img className="social-flower social-l" src="https://res.cloudinary.com/dsvcyich1/image/upload/v1712532187/YouTube_hover_gif_jv2llb.gif" alt="Duo Cichorium Background Flower" />
          </a>
          <a href="https://www.youtube.com/@DuoCichorium" target="_blank" rel="noreferrer" >
            <img className="social-flower social-r" src="https://res.cloudinary.com/dsvcyich1/image/upload/v1712532187/YouTube_hover_gif_jv2llb.gif" alt="Duo Cichorium Background Flower" />
            <img src="https://res.cloudinary.com/dsvcyich1/image/upload/v1712532050/YouTube_vq9fpt.png" alt="Duo Cichorium YouTube link" />
          </a>
        </div>
        <h6 className="glow myh3 footer-text">© Louis Pino & Jaz Tsui 2024</h6>
      </div>
    </div>
  );
}

export default Footer;
