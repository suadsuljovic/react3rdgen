import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <div style={{ position: "relative" }}>
      <Sidebar />

      <Navbar />

      <div style={{ paddingLeft: "300px" }}>{children}</div>
    </div>
  );
};

export default Layout;
