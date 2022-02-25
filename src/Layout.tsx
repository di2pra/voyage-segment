import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Layout() {
  return (
    <main className="main">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}