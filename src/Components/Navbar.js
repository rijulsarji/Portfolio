import "../CSS/Components CSS/navBar.css";
import {
  FaDribbble,
  FaGithub,
  FaHome,
  FaIdCard,
  FaLaptopCode,
  FaLinkedin,
  FaTrophy,
} from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  function openNavbar() {
    document.getElementById("sidebar").style.marginLeft = "0px";
  }

  function closeNavber() {
    document.getElementById("sidebar").style.marginLeft = "-70px";
  }

  return (
    <div>
      <div id="sidebar">
        <IoIosClose className="closeIcon" onClick={closeNavber} />

        <div className="topSide">
          <FaHome className="sideUpIcons" id="topIcon" />
          <FaLaptopCode className="sideUpIcons" />
          <FaTrophy className="sideUpIcons" />
          <FaIdCard className="sideUpIcons" />
        </div>

        <div className="bottomSide">
          <FaGithub className="sideDownIcons" id="github" />
          <FaDribbble className="sideDownIcons" id="dribbble" />
          <FaLinkedin className="sideDownIcons" id="linkedin" />
        </div>
      </div>

      <FiMenu className="openIcon" onClick={openNavbar} />
    </div>
  );
}

export default Navbar;
