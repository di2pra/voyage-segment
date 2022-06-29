import { TFunction, withTranslation } from 'react-i18next';

interface IProps {
  t: TFunction<"translation", undefined>
}


function SignIn({ t }: IProps) {
  return (
    <section id="login">
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 text-center mb-3">
            <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-1">{t('Login')}</h5>
          </div>
          <div className="col-6 offset-3">
            <form className="row g-4">
              <div className="col-12">
                <div className="input-group-icon">
                  <label
                    className="form-label visually-hidden"
                    htmlFor="inputAddress1"
                  >{t('Username')}</label>
                  <input
                    className="form-control input-box form-voyage-control"
                    id="inputAddress1"
                    type="text"
                    placeholder={t('Username')}
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
                  >{t('Password')}</label>
                  <input
                    className="form-control input-box form-voyage-control"
                    id="password"
                    type="password"
                    placeholder={t('Password')}
                  />
                  <span className="nav-link-icon text-800 fs--1 input-box-icon">
                    <i className="fas fa-key" />
                  </span>
                </div>
              </div>
              <div className="col-12 mt-6">
                <button className="btn btn-secondary" type="button">{t('Login')}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default withTranslation('login')(SignIn);