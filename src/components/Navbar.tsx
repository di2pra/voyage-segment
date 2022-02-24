import React, { useCallback, useEffect, useRef } from "react"
import { hasClass, hexToRgb } from "../Helpers";

export default function Navbar() {

  const navbar = useRef<HTMLElement>(null);

  const scrollEventListener = useCallback(() => {

    if (navbar.current) {

      const color = '#fff';
      const bgClassName = `bg-white`;
  
      const shadowName = 'shadow-transition'
  
      const colorRgbRaw = hexToRgb(color)
      const colorRgb = colorRgbRaw === null ? [0,0,0] : colorRgbRaw;
  
      const { scrollTop } = document.documentElement;
      let alpha = (scrollTop / window.innerHeight) * 1.5;

      const navbarCollapse = navbar.current.querySelector('.navbar-collapse');

      navbar.current.classList.add('backdrop');
      if (alpha === 0) {
        navbar.current.classList.remove('backdrop');
      }

      alpha >= 1 && (alpha = 1);
      navbar.current.style.backgroundColor = `rgba(${colorRgb[0]}, ${colorRgb[1]}, ${colorRgb[2]}, ${alpha})`;
      //navbar.style.backgroundImage = (alpha > 0 || utils.hasClass(navbarCollapse, 'show')) ? backgroundImage : 'none';
      (alpha > 0 || hasClass(navbarCollapse, 'show')) ? navbar.current.classList.add(shadowName) : navbar.current.classList.remove(shadowName);
    }

  }, [navbar.current])

  useEffect(() => {

    window.addEventListener('scroll', scrollEventListener);

    return () => {
      window.removeEventListener('scroll', scrollEventListener)
    }

  }, [scrollEventListener]);

  return (
    <nav
      ref={navbar}
      className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block backdrop shadow-transition"
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img
            className="d-inline-block"
            src="assets/img/gallery/logo.png"
            width={50}
            alt="logo"
          />
          <span className="fw-bold text-primary ms-2">voyage</span>
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto pt-2 pt-lg-0 font-base">
            <li className="nav-item px-2">
              <a
                className="nav-link fw-medium active"
                aria-current="page"
                href="#places"
              >
                <span className="nav-link-icon text-800 me-1 fas fa-map-marker-alt" />
                <span className="nav-link-text">Voyages</span>
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#flights">
                {" "}
                <span className="nav-link-icon text-800 me-1 fas fa-plane" />
                <span className="nav-link-text">Vols</span>
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#hotels">
                {" "}
                <span className="nav-link-icon text-800 me-1 fas fa-hotel" />
                <span className="nav-link-text">Hôtels</span>
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#activities">
                <span className="nav-link-icon text-800 me-1 fas fa-bolt" />
                <span className="nav-link-text">Activités</span>
              </a>
            </li>
          </ul>
          <form>
            <button
              className="btn text-800 order-1 order-lg-0 me-2"
              type="button"
            >
              Support
            </button>
            <button className="btn btn-voyage-outline order-0" type="submit">
              <span className="text-primary">Sign in</span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}