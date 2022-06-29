import { TFunction, withTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { FlashDeals } from "../../Data";

interface IProps {
  t: TFunction<"translation", undefined>
}

function FlashDealsSection({ t }: IProps) {

  return (
    <section id="flashDeals">
      <div className="container">
        <div className="row h-100">
          <div className="col-lg-7 mx-auto text-center mb-6">
            <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">{t('Flash Deals')}</h5>
          </div>
          <div className="col-12">
            <div className='row'>
              {
                FlashDeals.map((card, cardIndex) => {
                  return (

                    <div key={cardIndex} className="col-md-4 mb-3 mb-md-0 h-100">
                      <Link style={{ 'textDecoration': 'none' }} to={`flash-deals/${card.url}`}>
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src={card.imgUrl}
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0" style={{ 'bottom': '50%' }}>
                            <span className="badge bg-primary ms-3 me-1 p-2">
                              <i className="fas fa-clock me-1" />
                              <span>20:04:32</span>
                            </span>
                            {
                              card.isTrending ? <span className="badge bg-secondary p-2"><i className="fas fa-bolt me-1" /><span>{t("Trending")}</span></span> : ''
                            }
                          </div>
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 mb-2">{card.title}</h5>
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="text-800 fs--1 me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-900 me-3">{card.location}</span>
                              <span className="text-800 fs--1 me-2">
                                <i className="fas fa-calendar" />
                              </span>
                              <span className="text-900">{card.duration}</span>
                            </div>
                            <p className="text-decoration-line-through text-900 mt-3 mb-0">{t('priceWithCurrency', { val: card.originalPrice })}</p>
                            <h1 className="mb-3 text-primary fw-bolder fs-4">
                              <span>{t('priceWithCurrency', { val: card.discountedPrice })}</span>
                              <span className="text-900 fs--1 fw-normal"> / {t('Per person')}</span>
                            </h1>
                            <span className="badge bg-soft-secondary p-2">
                              <i className="fas fa-tag text-secondary fs--1 me-1" />
                              <span className="text-secondary fw-normal fs-1">{card.discountPercentage}</span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default withTranslation('flashDealsSection')(FlashDealsSection);