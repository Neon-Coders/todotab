import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p className="footer__text">
        Copyright &copy; 2022
        <a
          href="http://ibrahimraimi.github.io"
          className="footer__link"
          target="_blank"
        >
          Ibrahim Raimi
        </a>
      </p>
    </div>
  );
};

export default Footer;
