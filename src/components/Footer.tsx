import { withTranslation, TFunction } from 'react-i18next';

interface IProps  {
  t: TFunction<"translation", undefined>
}

function Footer({ t } : IProps) {
  return (
    <section className="py-0 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-4 col-lg-6">
            <div className="py-7">
              <img
                className="d-inline-block"
                src="/assets/img/gallery/logo.png"
                width={50}
                alt="logo"
              />
              <span className="fw-bold fs-4 text-primary ms-2">voyage</span>
              <ul className="list-unstyled mt-4">
                <li className="mb-2">
                  <a className="text-800 fw-bold text-decoration-none" href="#!">{t('News')}</a>
                </li>
                <li className="mb-2">
                  <a className="text-800 fw-bold text-decoration-none" href="#!">{t('Terms & Conditions')}</a>
                </li>
                <li className="mb-2">
                  <a className="text-800 fw-bold text-decoration-none" href="#!">{t('Privacy')}</a>
                </li>
                <li className="mb-2">
                  <a className="text-800 fw-bold text-decoration-none" href="#!">{t('About Us')}</a>
                </li>
                <li className="mb-2">
                  <a className="text-800 fw-bold text-decoration-none" href="#!">{t('FAQs')}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-8 col-lg-6 bg-primary-gradient bg-offcanvas-right">
            <div className="p-3 py-7 p-md-7">
              <p className="text-light">
                <i className="fas fa-phone-alt me-3" />
                <span className="text-light">{t('+1-764-456-4595')}</span>
              </p>
              <p className="text-light">
                <i className="fas fa-envelope me-3" />
                <span className="text-light">{t('support@voyage.com')}</span>
              </p>
              <p className="text-light">
                <i className="fas fa-map-marker-alt me-3" />
                <span className="text-light lh-lg">
                  {t('23 fleet st, Boston, MA')}
                  <br />
                  {t('United States of America')}
                </span>
              </p>
              <div className="mt-6">
                <a href="#!">
                  {" "}
                  <img
                    className="me-3"
                    src="/assets/img/icons/facebook.svg"
                    alt="..."
                  />
                </a>
                <a href="#!">
                  {" "}
                  <img
                    className="me-3"
                    src="/assets/img/icons/twitter.svg"
                    alt="..."
                  />
                </a>
                <a href="#!">
                  {" "}
                  <img
                    className="me-3"
                    src="/assets/img/icons/instagram.svg"
                    alt="..."
                  />
                </a>
              </div>
              <p className="mt-3 text-light text-center text-md-start">
                {" "}
                Made with&nbsp;
                <svg
                  className="bi bi-suit-heart-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={15}
                  fill="#EB6453"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                </svg>
                &nbsp;by&nbsp;
                <a
                  className="text-light"
                  href="mailto:prajendirane@twilio.com"
                  target="_blank"
                >Pradheep</a>
                , credits to {" "}
                <a
                  className="text-light"
                  href="https://themewagon.com/"
                  target="_blank"
                >
                  ThemeWagon{" "}
                </a>
                for the theme
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end of .container*/}
    </section>
  )
}

export default withTranslation('footer')(Footer);