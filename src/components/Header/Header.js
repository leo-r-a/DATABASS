import mikeyright from "../../assets/GOATmikeydances.gif";
import mikeyleft from "../../assets/GOATmikeydances3.gif";
import klubright from "../../assets/KLUBKIDFLIPPED.gif";
import klubleft from "../../assets/KLUBKID.gif";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <img src={mikeyright} alt="my friend mike" />
      <img src={klubright} alt="everyones friend, klubkid" />
      <div className="header__title-container">
        <h1 className="header__title">D A T A B A S S</h1>
      </div>
      <img src={klubleft} alt="everyones friend, klubkid" />
      <img src={mikeyleft} alt="my friend mike" />
    </div>
  );
}
export default Header;
