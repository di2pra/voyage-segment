import { withTranslation, TFunction } from 'react-i18next';
import { faker } from '@faker-js/faker';

interface IProps {
  t: TFunction<"translation", undefined>
}

function PlaceSection({ t }: IProps) {

  return (
    <section className="py-7 overflow-hidden" id="places">
      <div className="container bg-offcanvas-gray-right">
        <div className="row gx-2 mb-2">
          <div className="col-12 col-md-12 col-lg-4">
            <div className="bg-primary-gradient bg-offcanvas h-100">
              <div className="row g-0 justify-content-end">
                <div className="col-12">
                  <div className="p-6 py-md-5 px-md-3 py-lg-8 text-light">
                    <img
                      className="mb-5"
                      src="assets/img/icons/icon-location.svg"
                      alt="..."
                    />
                    <h2 className="mb-2 text-light">{t('Popular places')}</h2>
                    <p>{t('place_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card card-span h-100 text-white">
              <img
                className="img-fluid h-100 w-100"
                src="assets/img/gallery/agra.png"
                height={375}
                alt="..."
              />
              <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                <div className="mt-auto px-4 mb-1">
                  <h3 className="fs-1 fs-md-2 text-white">Agra</h3>
                  <span className="text-light fs--1 me-1">
                    <i className="fas fa-gift" />
                  </span>
                  <span className="text-light me-3">{faker.datatype.number({min: 2, max: 10})} {t('Packages')}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card card-span h-100 text-white">
              <img
                className="img-fluid h-100 w-100"
                src="assets/img/gallery/kualalumpur.png"
                height={375}
                alt="..."
              />
              <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                <div className="mt-auto px-4 mb-1">
                  <h3 className="fs-1 fs-md-2 text-white">Kuala Lumpur</h3>
                  <span className="text-light fs--1 me-1">
                    <i className="fas fa-gift" />
                  </span>
                  <span className="text-light me-3">{faker.datatype.number({min: 2, max: 10})} {t('Packages')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-2">
          <div className="col-sm-6 col-lg-4">
            <div className="row g-2">
              <div className="col-12">
                <div className="card card-span h-100 text-white">
                  <img
                    className="img-fluid h-100 w-100"
                    src="assets/img/gallery/munich.png"
                    height={375}
                    alt="..."
                  />
                  <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                    <div className="mt-auto px-4 mb-1">
                      <h3 className="fs-1 fs-md-2 text-white">Munich</h3>
                      <span className="text-light fs--1 me-1">
                        <i className="fas fa-gift" />
                      </span>
                      <span className="text-light me-3">{faker.datatype.number({min: 2, max: 10})} {t('Packages')}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card card-span h-100 text-white">
                  <img
                    className="img-fluid h-100 w-100"
                    src="assets/img/gallery/munich.png"
                    height={375}
                    alt="..."
                  />
                  <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                    <div className="mt-auto px-4 mb-1">
                      <h3 className="fs-1 fs-md-2 text-white">Munich</h3>
                      <span className="text-light fs--1 me-1">
                        <i className="fas fa-gift" />
                      </span>
                      <span className="text-light me-3">{faker.datatype.number({min: 2, max: 10})} {t('Packages')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="row g-2">
              <div className="col-12">
                <div className="card card-span h-100 text-white">
                  <img
                    className="img-fluid h-100 w-100"
                    src="assets/img/gallery/paris.png"
                    height={375}
                    alt="..."
                  />
                  <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                    <div className="mt-auto px-4 mb-1">
                      <h3 className="fs-1 fs-md-2 text-white">Paris</h3>
                      <span className="text-light fs--1 me-1">
                        <i className="fas fa-gift" />
                      </span>
                      <span className="text-light me-3">{faker.datatype.number({min: 2, max: 10})} {t('Packages')}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card card-span h-100 text-white">
                  <img
                    className="img-fluid h-100 w-100"
                    src="assets/img/gallery/vienna.png"
                    height={375}
                    alt="..."
                  />
                  <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                    <div className="mt-auto px-4 mb-1">
                      <h3 className="fs-1 fs-md-2 text-white">Vienna</h3>
                      <span className="text-light fs--1 me-1">
                        <i className="fas fa-gift" />
                      </span>
                      <span className="text-light me-3">{faker.datatype.number({min: 2, max: 10})} {t('Packages')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="bg-secondary-gradient h-100 d-flex align-items-center">
              <div className="text-light p-4 p-sm-6 p-lg-0 px-xxl-6">
                <p className="fs-1 px-4 mb-6">{t('place_more')}</p>
                <a className="btn btn-lg text-light fs-2" href="#!" role="button">
                  {t('Click to view more')}
                  <svg
                    className="bi bi-arrow-right-circle ms-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={55}
                    height={55}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default withTranslation('placeSection')(PlaceSection);