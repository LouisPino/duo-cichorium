import "../styles/footer.css"
import MailList from "./MailList"

function Footer() {
  return (
    <div className="my-footer">
      <MailList />
      <div className="footer-content">
        <div className="socials-ctr">
          <a href="https://www.instagram.com/duo_cichorium/" target="_blank" rel="noreferrer">
            <img src="https://res.cloudinary.com/dsvcyich1/image/upload/v1693442901/instagram-logo_aoujxu.png" alt="img1" />
          </a>
          <a href="https://www.youtube.com/@DuoCichorium" target="_blank" rel="noreferrer" >
            <img src="https://res.cloudinary.com/dsvcyich1/image/upload/v1711065183/paper-black-and-white-logo-pattern-youtube-play-button-6f7fda0489cbea1d1b4a036e5a111e85_pqdb7a.png" alt="img1" />
          </a>
        </div>
        <h6 className="glow myh3 footer-text">© Louis Pino & Jaz Tsui 2024</h6>
      </div>
    </div>
  );
}

export default Footer;
