import { withTranslation, TFunction } from 'react-i18next';

interface IProps {
  t: TFunction<"translation", undefined>
}


function SignUp({ t }: IProps) {
  return (
    <section id="register">
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 text-center mb-3">
            <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-1">{t('Register')}</h5>
          </div>
          <div className="col-8 offset-2">
            <form className="row g-4">
              <div className="col-12">
                <div className="input-group-icon">
                  <label
                    className="form-label visually-hidden"
                    htmlFor="inputUsername"
                  >{t('Username')}</label>
                  <input
                    className="form-control input-box form-voyage-control"
                    id="inputUsername"
                    autoComplete="username"
                    type="text"
                    placeholder={t('Username')}
                  />
                  <span className="nav-link-icon text-800 fs--1 input-box-icon">
                    <i className="fas fa-user" />
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="input-group-icon">
                  <label
                    className="form-label visually-hidden"
                    htmlFor="inputPassword"
                  >{t('Password')}</label>
                  <input
                    className="form-control input-box form-voyage-control"
                    id="inputPassword"
                    autoComplete='new-password'
                    type="password"
                    placeholder={t('Password')}
                  />
                  <span className="nav-link-icon text-800 fs--1 input-box-icon">
                    <i className="fas fa-key" />
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="input-group-icon">
                  <label
                    className="form-label visually-hidden"
                    htmlFor="inputPassword1"
                  >{t('Password')}</label>
                  <input
                    className="form-control input-box form-voyage-control"
                    id="inputPassword1"
                    autoComplete='new-password'
                    type="password"
                    placeholder={t('Confirm Password')}
                  />
                  <span className="nav-link-icon text-800 fs--1 input-box-icon">
                    <i className="fas fa-key" />
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="input-group-icon">
                  <label
                    className="form-label visually-hidden"
                    htmlFor="inputEmail"
                  >{t('Email')}</label>
                  <input
                    className="form-control input-box form-voyage-control"
                    id="inputEmail"
                    autoComplete='email'
                    type="email"
                    placeholder={t('Email')}
                  />
                  <span className="nav-link-icon text-800 fs--1 input-box-icon">
                    <i className="fas fa-envelope" />
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="input-group-icon">
                  <label
                    className="form-label visually-hidden"
                    htmlFor="inputEmail1"
                  >{t('Email')}</label>
                  <input
                    className="form-control input-box form-voyage-control"
                    id="inputEmail1"
                    autoComplete='email'
                    type="email"
                    placeholder={t('Confirm Email')}
                  />
                  <span className="nav-link-icon text-800 fs--1 input-box-icon">
                    <i className="fas fa-envelope" />
                  </span>
                </div>
              </div>
              <div className="col-12">
                <div className="input-group-icon">
                  <label
                    className="form-label visually-hidden"
                    htmlFor="inputNumber"
                  >{t('Phone Number')}</label>
                  <input
                    className="form-control input-box form-voyage-control"
                    id="inputNumber"
                    autoComplete='tel'
                    type="tel"
                    placeholder={t('Phone Number')}
                  />
                  <span className="nav-link-icon text-800 fs--1 input-box-icon">
                    <i className="fas fa-phone" />
                  </span>
                </div>
              </div>
              <div className="col-12 mt-4">
                <button className="btn btn-secondary" type="button">{t('Register')}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default withTranslation('register')(SignUp);