import Logo from "../../assets/todotab.png";
import "./Header.css";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="header">
      {"" ? (
        <span className="heading">{title}</span>
      ) : (
        <img className="logo" src={Logo} alt="" />
      )}
    </div>
  );
};

export default Header;
