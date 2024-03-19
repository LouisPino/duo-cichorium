import "../styles/footer.css"

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="socials-ctr">
          <a href="https://www.instagram.com/duo_cichorium/" target="_blank">
            <img src="https://res.cloudinary.com/dsvcyich1/image/upload/v1693442901/instagram-logo_aoujxu.png" alt="" />
          </a>
          <a href="mailto:duocichorium@gmail.com" target="_blank">
            <img src="https://res.cloudinary.com/dsvcyich1/image/upload/v1693848478/maillogo_ajymti.png" />
          </a>
        </div>
        <h3 className="here">© Louis Pino & Jaz Tsui 2024</h3>
      </div>
    </footer>
  );
}

export default Footer;
