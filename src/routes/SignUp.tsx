import { useCallback, useContext, useEffect, useRef } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import useForm, { FormSchema, ValidationSchema } from '../hooks/useForm';
import { UserContext } from '../providers/UserProvider';
import { IUser } from '../Types';

interface IProps {
  t: TFunction<"translation", undefined>
}

const stateSchema: FormSchema = {
  firstName: { value: '', errorMessage: '', isInvalid: false },
  lastName: { value: '', errorMessage: '', isInvalid: false },
  email: { value: '', errorMessage: '', isInvalid: false },
  phone: { value: '', errorMessage: '', isInvalid: false }
};

const validationStateSchema: ValidationSchema = {
  firstName: {
    required: true
  },
  lastName: {
    required: true
  },
  email: {
    required: true
  },
  phone: {
    required: true
  }
};

function SignUp({ t }: IProps) {

  const { signUpUser } = useContext(UserContext);
  let navigate = useNavigate();
  const formEl = useRef(null);

  const { state, handleOnChange, handleOnSubmit } = useForm(stateSchema, validationStateSchema);

  useEffect(() => {

    if (formEl.current) {
      /*window.analytics.trackForm(formEl.current, 'Signed Up', {
        plan: 'Premium',
        revenue: 99.00
      });*/
    }

  }, [formEl]);

  const processSignUp = useCallback((state) => {

    const user: IUser = {
      firstName: state.firstName.value,
      lastName: state.lastName.value,
      email: state.email.value,
      phone: state.phone.value
    }

    if (signUpUser) {

      window.analytics.track("User Registered", user);
      signUpUser(user);
      navigate(`/`);

    }

  }, [signUpUser, navigate]);

  return (
    <section id="register">
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 text-center mb-3">
            <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-1">{t('Register')}</h5>
          </div>
          <div className="col-8 offset-2">
            <form ref={formEl} className="row g-4" onSubmit={(e) => { handleOnSubmit(e, processSignUp) }}>
              <div className="col-6">
                <div className="input-group-icon">
                  <label
                    className="form-label visually-hidden"
                    htmlFor="inputFirstName"
                  ></label>
                  <input
                    className="form-control input-box form-voyage-control"
                    id="inputFirstName"
                    autoComplete='given-name'
                    value={state.firstName.value}
                    name="firstName"
                    onChange={handleOnChange}
                    type="text"
                    placeholder={t('First Name')}
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
                    htmlFor="inputLastName"
                  ></label>
                  <input
                    className="form-control input-box form-voyage-control"
                    id="inputLastName"
                    autoComplete='family-name'
                    value={state.lastName.value}
                    name="lastName"
                    onChange={handleOnChange}
                    type="text"
                    placeholder={t('Last Name')}
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
                    value={state.email.value}
                    name="email"
                    onChange={handleOnChange}
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
                    value={state.phone.value}
                    name="phone"
                    onChange={handleOnChange}
                    type="tel"
                    placeholder={t('Phone Number')}
                  />
                  <span className="nav-link-icon text-800 fs--1 input-box-icon">
                    <i className="fas fa-phone" />
                  </span>
                </div>
              </div>
              <div className="col-12 mt-4">
                <button className="btn btn-secondary" type="submit">{t('Register')}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default withTranslation('register')(SignUp);