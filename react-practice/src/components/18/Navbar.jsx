import { Link } from "react-router-dom";
import logo from "./logo.svg";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        height: 80,
        background: "purple",
        alignItems: "center",
        position: "relative",
        border: "2px solid black",
        borderRadius: "8px",
      }}
    >
      <img
        src={logo}
        alt=""
        width={40}
        height={40}
        style={{ margin: "0 20px", background: "blue" }}
      />

      <div style={{ display: "flex" }}>
        <Link style={{ padding: "0 20px", color: "black" }} to={"/home"}>
          Home
        </Link>
        <Link style={{ padding: "0 20px", color: "black" }} to={"/product"}>
          Product
        </Link>
        <Link style={{ padding: "0 20px", color: "black" }} to={"/about"}>
          About
        </Link>
        <Link style={{ padding: "0 20px", color: "black" }} to={"/contact"}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
