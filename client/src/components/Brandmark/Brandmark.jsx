// import CallStackITGrey from "../../assets/shared/callstack-icon-grey.png";
import CallStackITWhite from "../../assets/shared/callstack-icon-white.png";

import "./Brandmark.css";

const Brandmark = ({ navbarStyle }) => {
  return (
    <a href="#head-navbar" className={"brandmark " + (navbarStyle ? navbarStyle : "")}>
      {navbarStyle === "fixed" ? (
        <img className="icon" src={CallStackITWhite} alt="CallStackIT Icon" />
      ) : (
        <img className="icon" src={CallStackITWhite} alt="CallStackIT Icon" />
      )}
      Prototipo App
    </a>
  );
};

export default Brandmark;
