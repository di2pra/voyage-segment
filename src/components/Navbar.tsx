import { useCallback, useContext, useEffect, useRef } from "react"
import { Link } from "react-router-dom";
import { hasClass, hexToRgb } from "../Helpers";
import { NavHashLink } from 'react-router-hash-link';
import { withTranslation, TFunction } from 'react-i18next';
import { UserContext } from "../providers/UserProvider";
import { IUser } from "../Types";

interface IProps {
  t: TFunction<"translation", undefined>
}

function Navbar({ t }: IProps) {

  const { user, updateUser } = useContext(UserContext);

  const navbar = useRef<HTMLElement>(null);

  const scrollEventListener = useCallback(() => {

    if (navbar.current) {

      const color = '#fff';
      const bgClassName = `bg-white`;

      const shadowName = 'shadow-transition'

      const colorRgbRaw = hexToRgb(color)
      const colorRgb = colorRgbRaw === null ? [0, 0, 0] : colorRgbRaw;

      const { scrollTop } = document.documentElement;
      let alpha = (scrollTop / window.innerHeight) * 1.5;

      const navbarCollapse = navbar.current.querySelector('.navbar-collapse');

      navbar.current.classList.add('backdrop');
      if (alpha === 0) {
        navbar.current.classList.remove('backdrop');
      }

      alpha >= 1 && (alpha = 1);
      navbar.current.style.backgroundColor = `rgba(${colorRgb[0]}, ${colorRgb[1]}, ${colorRgb[2]}, ${alpha})`;
      (alpha > 0 || hasClass(navbarCollapse, 'show')) ? navbar.current.classList.add(shadowName) : navbar.current.classList.remove(shadowName);
    }

  }, [navbar.current]);

  useEffect(() => {
    scrollEventListener()
  }, [scrollEventListener])

  useEffect(() => {

    window.addEventListener('scroll', scrollEventListener);

    return () => {
      window.removeEventListener('scroll', scrollEventListener)
    }

  }, [scrollEventListener]);

  const logOut = useCallback(() => {

    if (updateUser) {
      window.analytics.reset();
      updateUser(null);
    }


  }, [updateUser])

  return (
    <nav
      ref={navbar}
      className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block"
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div className="container-fluid">
        <NavHashLink className="navbar-brand" to="/#home">
          <img
            className="d-inline-block"
            src="assets/img/gallery/logo.png"
            width={50}
            alt="logo"
          />
          <span className="fw-bold text-primary ms-2">voyage</span>
        </NavHashLink>
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
              <NavHashLink
                className="nav-link fw-medium active"
                aria-current="page"
                to='/#places'
              >
                <span className="nav-link-icon text-800 me-1 fas fa-map-marker-alt" />
                <span className="nav-link-text">{t('locations')}</span>
              </NavHashLink>
            </li>
            <li className="nav-item px-2">
              <NavHashLink className="nav-link" to="/#flights">
                {" "}
                <span className="nav-link-icon text-800 me-1 fas fa-plane" />
                <span className="nav-link-text">{t('flights')}</span>
              </NavHashLink>
            </li>
            <li className="nav-item px-2">
              <NavHashLink className="nav-link" to="/#hotels">
                {" "}
                <span className="nav-link-icon text-800 me-1 fas fa-hotel" />
                <span className="nav-link-text">{t('hotels')}</span>
              </NavHashLink>
            </li>
            <li className="nav-item px-2">
              <NavHashLink className="nav-link" to="/#activities">
                <span className="nav-link-icon text-800 me-1 fas fa-bolt" />
                <span className="nav-link-text">{t('activities')}</span>
              </NavHashLink>
            </li>
          </ul>
          <form>
            <button className="btn text-800 order-1 order-lg-0 me-2" type="button">{t('need_help')}</button>
            {user === null ? <LoggedOut t={t} /> : <LoggedIn user={user} t={t} logOut={logOut} />}
          </form>
        </div>
      </div>
    </nav>
  )
}

interface ILoggedIn extends IProps {
  logOut: () => void,
  user: IUser
}

function LoggedIn({ t, logOut, user }: ILoggedIn) {
  return (
    <>
      <button className="btn order-1 order-lg-0 me-2" type="button" style={{'color': '#FE7A15'}}>{user.firstName} {user.lastName}</button>
      <button className="btn btn-voyage-outline order-0" type="button" onClick={() => { logOut() }}>
        <span className="text-primary">{t('Log out')}</span>
      </button>
    </>

  )
}

function LoggedOut({ t }: IProps) {
  return (
    <>
      <NavHashLink to="/register#register">
        <button className="btn btn-voyage-outline order-0" type="button">
          <span className="text-primary">{t('register')}</span>
        </button>
      </NavHashLink>
      <NavHashLink to="/login#login">
        <button className="btn btn-voyage-outline order-0" type="button">
          <span className="text-primary">{t('login')}</span>
        </button>
      </NavHashLink>
    </>
  )
}

export default withTranslation('navbar')(Navbar);