import { withTranslation, TFunction } from 'react-i18next';
import { faker } from '@faker-js/faker';

interface IProps {
  t: TFunction<"translation", undefined>
}

function FlightSection({ t }: IProps) {

  return (
    <section className="py-0" id="flights">
      <div className="container-fluid">
        <div className="row h-100">
          <div className="col-lg-7 mx-auto text-center mb-6">
            <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">{t('Flights to Popular Places at the Best Costs')}</h5>
          </div>
        </div>
        <div className="row g-0 flex-center">
          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
            <div
              className="d-flex flex-column justify-content-center px-3"
              style={{ backgroundColor: "#240D8C", minHeight: 230 }}
            >
              <h5 className="text-light">Paris - Rome</h5>
              <h6 className="text-light fw-normal fs-0">{t('startingPriceWithCurrency', { val: faker.datatype.number({ min: 50, max: 200 }) })}</h6>
              <i className="fas fa-arrow-right text-light mt-4" />
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
            <div
              className="d-flex flex-column justify-content-center px-3"
              style={{ backgroundColor: "#3011BB", minHeight: 230 }}
            >
              <h5 className="text-light">Paris - Londres</h5>
              <h6 className="text-light fw-normal fs-0">{t('startingPriceWithCurrency', { val: faker.datatype.number({ min: 50, max: 200 }) })}</h6>
              <i className="fas fa-arrow-right text-light mt-4" />
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
            <div
              className="d-flex flex-column justify-content-center px-3"
              style={{ backgroundColor: "#4914DC", minHeight: 230 }}
            >
              <h5 className="text-light">Paris - Madrid</h5>
              <h6 className="text-light fw-normal fs-0">{t('startingPriceWithCurrency', { val: faker.datatype.number({ min: 50, max: 200 }) })}</h6>
              <i className="fas fa-arrow-right text-light mt-4" />
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
            <div
              className="d-flex flex-column justify-content-center px-3"
              style={{ backgroundColor: "#6213D2", minHeight: 230 }}
            >
              <h5 className="text-light">Paris - Porto</h5>
              <h6 className="text-light fw-normal fs-0">{t('startingPriceWithCurrency', { val: faker.datatype.number({ min: 50, max: 200 }) })}</h6>
              <i className="fas fa-arrow-right text-light mt-4" />
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
            <div
              className="d-flex flex-column justify-content-center px-3"
              style={{ backgroundColor: "#4611BC", minHeight: 230 }}
            >
              <h5 className="text-light">Paris - Séville</h5>
              <h6 className="text-light fw-normal fs-0">{t('startingPriceWithCurrency', { val: faker.datatype.number({ min: 50, max: 200 }) })}</h6>
              <i className="fas fa-arrow-right text-light mt-4" />
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
            <div
              className="d-flex flex-column justify-content-center px-3"
              style={{ backgroundColor: "#7013CE", minHeight: 230 }}
            >
              <h5 className="text-light">Paris - Barcelone</h5>
              <h6 className="text-light fw-normal fs-0">{t('startingPriceWithCurrency', { val: faker.datatype.number({ min: 50, max: 200 }) })}</h6>
              <i className="fas fa-arrow-right text-light mt-4" />
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
            <div
              className="d-flex flex-column justify-content-center px-3"
              style={{ backgroundColor: "#4611BC", minHeight: 230 }}
            >
              <h5 className="text-light">Paris - Venise</h5>
              <h6 className="text-light fw-normal fs-0">{t('startingPriceWithCurrency', { val: faker.datatype.number({ min: 50, max: 200 }) })}</h6>
              <i className="fas fa-arrow-right text-light mt-4" />
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
            <div
              className="d-flex flex-column justify-content-center px-3"
              style={{ backgroundColor: "#6213D2", minHeight: 230 }}
            >
              <h5 className="text-light">Paris - Berlin</h5>
              <h6 className="text-light fw-normal fs-0">{t('startingPriceWithCurrency', { val: faker.datatype.number({ min: 50, max: 200 }) })}</h6>
              <i className="fas fa-arrow-right text-light mt-4" />
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
            <div
              className="d-flex flex-column justify-content-center px-3"
              style={{ backgroundColor: "#240D8C", minHeight: 230 }}
            >
              <h5 className="text-light">Paris - Zurich</h5>
              <h6 className="text-light fw-normal fs-0">{t('startingPriceWithCurrency', { val: faker.datatype.number({ min: 50, max: 200 }) })}</h6>
              <i className="fas fa-arrow-right text-light mt-4" />
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
            <div
              className="d-flex flex-column justify-content-center px-3"
              style={{ backgroundColor: "#4914DC", minHeight: 230 }}
            >
              <h5 className="text-light">Paris - Marrakech</h5>
              <h6 className="text-light fw-normal fs-0">{t('startingPriceWithCurrency', { val: faker.datatype.number({ min: 50, max: 200 }) })}</h6>
              <i className="fas fa-arrow-right text-light mt-4" />
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
            <div
              className="d-flex flex-column justify-content-center px-3"
              style={{ backgroundColor: "#3011BB", minHeight: 230 }}
            >
              <h5 className="text-light">Paris - Munich</h5>
              <h6 className="text-light fw-normal fs-0">{t('startingPriceWithCurrency', { val: faker.datatype.number({ min: 50, max: 200 }) })}</h6>
              <i className="fas fa-arrow-right text-light mt-4" />
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
            <div
              className="d-flex flex-column justify-content-center px-3"
              style={{ backgroundColor: "#4611BC", minHeight: 230 }}
            >
              <h5 className="text-light">Paris - Naples</h5>
              <h6 className="text-light fw-normal fs-0">{t('startingPriceWithCurrency', { val: faker.datatype.number({ min: 50, max: 200 }) })}</h6>
              <i className="fas fa-arrow-right text-light mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default withTranslation('flightSection')(FlightSection);