import Navbar from "../components/Navbar";
import FlashDealsSection from "../components/sections/FlashDealsSection";
import TopSection from "../components/sections/TopSection";

export default function SignIn() {
  return (
    <section id="login">
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 text-center mb-3">
            <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-1">Se connecter</h5>
          </div>
          <div className="col-6 offset-3">
            <form className="row g-4">
              <div className="col-12">
                <div className="input-group-icon">
                  <label
                    className="form-label visually-hidden"
                    htmlFor="inputAddress1"
                  >
                    Nom d'utilisateur
                  </label>
                  <input
                    className="form-control input-box form-voyage-control"
                    id="inputAddress1"
                    type="text"
                    placeholder="Nom d'utilisateur"
                  />
                  <span className="nav-link-icon text-800 fs--1 input-box-icon">
                    <i className="fas fa-user" />
                  </span>
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-icon">
                  <label
                    className="form-label visually-hidden"
                    htmlFor="password"
                  >
                    Mot de Passe
                  </label>
                  <input
                    className="form-control input-box form-voyage-control"
                    id="password"
                    type="password"
                    placeholder="Mot de passe"
                  />
                  <span className="nav-link-icon text-800 fs--1 input-box-icon">
                    <i className="fas fa-key" />
                  </span>
                </div>
              </div>
              <div className="col-12 mt-6">
                <button className="btn btn-secondary" type="button">
                  Se connecter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}