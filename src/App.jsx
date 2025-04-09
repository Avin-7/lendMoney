import "./App.css";
import { Outlet } from "react-router";

import Navbar from "./components/Navbar/Navbar";
import FooterComponent from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterComponent />
    </>
  );
}

export default App;
