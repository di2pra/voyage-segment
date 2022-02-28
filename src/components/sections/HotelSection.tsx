import { withTranslation, TFunction } from 'react-i18next';
import { faker } from '@faker-js/faker';

interface IProps {
  t: TFunction<"translation", undefined>
}


function HotelSection({ t }: IProps) {

  return (
    <section className="py-7 overflow-hidden" id="hotels">
      <div className="container bg-offcanvas-gray-right">
        <div className="row gx-2">
          <div className="col-sm-6 col-lg-4">
            <div className="bg-primary-gradient h-100 d-flex align-items-end">
              <div className="row g-0 justify-content-start">
                <div className="col-xl-9">
                  <div className="p-3 px-lg-4 text-light">
                    <img
                      className="mb-5"
                      src="assets/img/icons/icon-hotel.svg"
                      alt="..."
                    />
                    <h2 className="mb-3 text-light">{t('Discover our best hotels to stay')}</h2>
                    <p>{t('hotel_desc')}</p>
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
                    src="assets/img/gallery/moon-house-hotel.png"
                    height={375}
                    alt="..."
                  />
                  <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                    <div className="mt-auto px-4">
                      <h3 className="fs-1 fs-md-2 text-white">
                        Moon House Hotel
                      </h3>
                      <div className="d-flex align-items-center justify-content-start">
                        <span className="text-light fs--1 me-1">
                          <i className="fas fa-map-marker-alt" />
                        </span>
                        <span className="text-light me-md-3">
                          Soi Petchburi 19, Bankok
                        </span>
                      </div>
                      <p className="mb-0 mt-3">{t('Starts from')}</p>
                      <h1 className="mb-2 text-light fw-bolder fs-2 fs-md-4">
                        <span>{t('priceWithCurrency', {val: faker.datatype.number({min: 200, max: 800})})}</span>
                        <span className="text-light fs--1 fw-normal"> / {t('Per Person')}</span>
                      </h1>
                    </div>
                  </div>
                  <a className="stretched-link" href="#!">
                    {" "}
                  </a>
                </div>
              </div>
              <div className="col-12">
                <div className="card card-span h-100 text-white">
                  <img
                    className="img-fluid h-100 w-100"
                    src="assets/img/gallery/blue-mosque-hotel.png"
                    height={375}
                    alt="..."
                  />
                  <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                    <div className="mt-auto px-4">
                      <h3 className="fs-1 fs-md-2 text-white">
                        Blue Mosque Hotel
                      </h3>
                      <div className="d-flex align-items-center justify-content-start">
                        <span className="text-light fs--1 me-1">
                          <i className="fas fa-map-marker-alt" />
                        </span>
                        <span className="text-light me-md-3">
                          Dismesi Sokak, Istanbul
                        </span>
                      </div>
                      <p className="mb-0 mt-3">{t('Starts from')}</p>
                      <h1 className="mb-2 text-light fw-bolder fs-2 fs-md-4">
                        <span>{t('priceWithCurrency', {val: faker.datatype.number({min: 200, max: 800})})}</span>
                        <span className="text-light fs--1 fw-normal"> / {t('Per Person')}</span>
                      </h1>
                    </div>
                  </div>
                  <a className="stretched-link" href="#!">
                    {" "}
                  </a>
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
                    src="assets/img/gallery/hotel-royal.png"
                    height={375}
                    alt="..."
                  />
                  <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                    <div className="mt-auto px-4">
                      <h3 className="fs-1 fs-md-2 text-white">Hotel Royal</h3>
                      <div className="d-flex align-items-center justify-content-start">
                        <span className="text-light fs--1 me-1">
                          <i className="fas fa-map-marker-alt" />
                        </span>
                        <span className="text-light me-md-3">
                          Kedewatan, Bali
                        </span>
                      </div>
                      <p className="mb-0 mt-3">{t('Starts from')}</p>
                      <h1 className="mb-2 text-light fw-bolder fs-2 fs-md-4">
                        <span>{t('priceWithCurrency', {val: faker.datatype.number({min: 200, max: 800})})}</span>
                        <span className="text-light fs--1 fw-normal"> / {t('Per Person')}</span>
                      </h1>
                    </div>
                  </div>
                  <a className="stretched-link" href="#!">
                    {" "}
                  </a>
                </div>
              </div>
              <div className="col-12">
                <div className="card card-span h-100 text-white">
                  <img
                    className="img-fluid h-100 w-100"
                    src="assets/img/gallery/boutique-hotel.png"
                    height={375}
                    alt="..."
                  />
                  <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                    <div className="mt-auto px-4">
                      <h3 className="fs-1 fs-md-2 text-white">
                        The Rin Boutique Hotel
                      </h3>
                      <div className="d-flex align-items-center justify-content-start">
                        <span className="text-light fs--1 me-1">
                          <i className="fas fa-map-marker-alt" />
                        </span>
                        <span className="text-light me-md-3">
                          Bang Lamung, Pattaya
                        </span>
                      </div>
                      <p className="mb-0 mt-3">{t('Starts from')}</p>
                      <h1 className="mb-2 text-light fw-bolder fs-2 fs-md-4">
                        <span>{t('priceWithCurrency', {val: faker.datatype.number({min: 200, max: 800})})}</span>
                        <span className="text-light fs--1 fw-normal"> / {t('Per Person')}</span>
                      </h1>
                    </div>
                  </div>
                  <a className="stretched-link" href="#!">
                    {" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-8 gy-2">
            <div className="bg-secondary-gradient h-100 d-flex align-items-center">
              <div className="text-light py-6">
                <div className="row">
                  <div className="col-12 col-xl-6">
                    <p className="fs-1 px-5">{t('more_desc')}</p>
                  </div>
                  <div className="col-12 col-xl-6 text-end">
                    <a
                      className="btn btn-lg text-light fs-1 fs-sm--1 fs-md-1 px-5"
                      href="#!"
                      role="button"
                    >
                      {t('Click to view more')}
                      <svg
                        className="bi bi-arrow-right-circle ms-3"
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
        </div>
      </div>
    </section>
  )
}

export default withTranslation('hotelSection')(HotelSection);