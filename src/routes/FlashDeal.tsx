import { useEffect, useState } from "react";
import { TFunction, withTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import { FlashDeals } from '../Data';
import { IFlashDeal } from "../Types";

interface IProps {
  t: TFunction<"translation", undefined>
}

function FlashDeal({ t }: IProps) {

  let { nameUrl } = useParams();

  const [selectedDeal, setSelectedDeal] = useState<IFlashDeal | null>(null);

  useEffect(() => {

    const getFlashDeal = FlashDeals.find(item => item.url === nameUrl);

    if (getFlashDeal) {
      setSelectedDeal(getFlashDeal);

      window.analytics.track("product_view_event", {
        product_url: getFlashDeal.url,
        product: getFlashDeal,
        event_type: 'view'
      });

    }



  }, [nameUrl]);

  if (selectedDeal === null) {
    return <section>
      <h1>Not Found</h1>
    </section>
  }

  return (
    <section id="flash-deal-detail">
      <div className="container">
        <div className="row">
          <div className="col-5 text-center">
            <img src={selectedDeal.imgUrl} alt={selectedDeal.title} />
          </div>
          <div className="col-7">
            <h4 className="fw-bold text-1000 mb-2">{selectedDeal.title}</h4>
            <div className="d-flex align-items-center justify-content-start">
              <span className="text-800 fs--1 me-2">
                <i className="fas fa-map-marker-alt" />
              </span>
              <span className="text-900 me-3">{selectedDeal.location}</span>
              <span className="text-800 fs--1 me-2">
                <i className="fas fa-calendar" />
              </span>
              <span className="text-900">{selectedDeal.duration}</span>
            </div>
            <p className="text-decoration-line-through text-900 mt-3 mb-0">{t('priceWithCurrency', { val: selectedDeal.originalPrice })}</p>
            <h1 className="mb-3 text-primary fw-bolder fs-4">
              <span>{t('priceWithCurrency', { val: selectedDeal.discountedPrice })}</span>
              <span className="text-900 fs--1 fw-normal"> / {t('Per person')}</span>
            </h1>
            <span className="badge bg-soft-secondary p-2">
              <i className="fas fa-tag text-secondary fs--1 me-1" />
              <span className="text-secondary fw-normal fs-1">{selectedDeal.discountPercentage}</span>
            </span>
            <div className="row mt-5">
              <div className="col-6">
                <div className="input-group-icon">
                  <label
                    className="form-label visually-hidden"
                    htmlFor="inputPeopleTwo"
                  ></label>
                  <select
                    className="form-select form-voyage-select input-box"
                    id="inputPeopleTwo"
                    defaultValue="2"
                  >
                    <option value="1">1 {t('Adult')}</option>
                    <option value="2">2 {t('Adults')}</option>
                    <option value="3">3 {t('Adults')}</option>
                    <option value="4">4 {t('Adults')}</option>
                    <option value="5">5 {t('Adults')}</option>
                    <option value="6">6 {t('Adults')}</option>
                    <option value="7">7 {t('Adults')}</option>
                  </select>
                  <span className="nav-link-icon text-800 fs--1 input-box-icon">
                    <i className="fas fa-user"> </i>
                  </span>
                </div>
              </div>
              <div className="col-6 d-grid">
                <button className="btn btn-secondary" type="button">Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default withTranslation('flashDealsSection')(FlashDeal);