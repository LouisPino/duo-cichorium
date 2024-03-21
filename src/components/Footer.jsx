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
            <img src="https://res.cloudinary.com/dsvcyich1/image/upload/v1710982439/YT_rnuaso.png" alt="img1" />
          </a>
        </div>
        <h3 className="here myh3">© Louis Pino & Jaz Tsui 2024</h3>
      </div>
    </div>
  );
}

export default Footer;
