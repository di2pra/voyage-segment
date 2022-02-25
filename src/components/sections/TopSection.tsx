import { useState } from 'react';
import { withTranslation, TFunction } from 'react-i18next';

interface IProps {
  t: TFunction<"translation", undefined>
}

enum Tabs {
  PACKAGES = "package",
  FLIGHTS = "flights",
  HOTELS = "hotels"
}


function TopSection({ t }: IProps) {

  const [selectedTab, setSelectedTab] = useState<Tabs>(Tabs.PACKAGES);

  return (
    <>
      <section className="mt-7 py-0">
        <div
          className="bg-holder w-50 bg-right d-none d-lg-block"
          style={{ backgroundImage: "url(assets/img/gallery/hero-section-1.png)" }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-5 py-xl-5 py-xxl-7">
              <h1 className="display-3 text-1000 fw-normal">{t('Let’s make a tour')}</h1>
              <h1 className="display-3 text-primary fw-bold">{t('Discover the beauty')}</h1>
              <div className="pt-5">
                <nav>
                  <div
                    className="nav nav-tabs voyage-tabs"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className={`nav-link ${selectedTab === Tabs.PACKAGES ? 'active' : ''}`}
                      type="button"
                      onClick={() => { setSelectedTab(Tabs.PACKAGES) }}
                    ><i className="fas fa-map-marker-alt" /></button>
                    <button
                      className={`nav-link ${selectedTab === Tabs.FLIGHTS ? 'active' : ''}`}
                      type="button"
                      onClick={() => { setSelectedTab(Tabs.FLIGHTS) }}
                    ><i className="fas fa-plane" /></button>
                    <button
                      className={`nav-link ${selectedTab === Tabs.HOTELS ? 'active' : ''}`}
                      type="button"
                      onClick={() => { setSelectedTab(Tabs.HOTELS) }}
                    ><i className="fas fa-hotel" /></button>
                  </div>
                  <div className="tab-content">
                    <div
                      className={`tab-pane fade ${selectedTab === Tabs.PACKAGES ? 'show active' : ''}`}
                    >
                      <form className="row g-4 mt-5">
                        <div className="col-sm-6 col-md-6 col-xl-6">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              htmlFor="inputAddress1"
                            ></label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddress1"
                              type="text"
                              placeholder={t('From Where')}
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-map-marker-alt" />
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-6">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              htmlFor="inputAddress2"
                            ></label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddress2"
                              type="text"
                              placeholder={t('From To')}
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-map-marker-alt"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-6">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputdateOne"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar" />
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-6">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateTwo"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar" />
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-6">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              htmlFor="inputPersonOne"
                            ></label>
                            <select
                              className="form-select form-voyage-select input-box"
                              id="inputPersonOne"
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
                        <div className="col-12 d-grid mt-6">
                          <button className="btn btn-secondary" type="submit">{t('Search Packages')}</button>
                        </div>
                      </form>
                    </div>
                    <div
                      className={`tab-pane fade ${selectedTab === Tabs.FLIGHTS ? 'show active' : ''}`}
                    >
                      <form className="row g-4 mt-5">
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              htmlFor="inputAddressThree"
                            ></label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddressThree"
                              type="text"
                              placeholder={t('From Where')}
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-map-marker-alt" />
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              htmlFor="inputAddressFour"
                            ></label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddressFour"
                              type="text"
                              placeholder={t('From To')}
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-map-marker-alt"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateThree"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar" />
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateFour"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar" />
                            </span>
                          </div>
                        </div>
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
                        <div className="col-12 d-grid mt-6">
                          <button className="btn btn-secondary" type="submit">{t('Search Flights')}</button>
                        </div>
                      </form>
                    </div>
                    <div
                      className={`tab-pane fade ${selectedTab === Tabs.HOTELS ? 'show active' : ''}`}
                    >
                      <form className="row g-4 mt-5">
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateFive"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar" />
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateSix"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar" />
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              htmlFor="inputPeopleThree"
                            ></label>
                            <select
                              className="form-select form-voyage-select input-box"
                              id="inputPeopleThree"
                              defaultValue="2 personnes"
                            >
                              <option>1 personne</option>
                              <option>2 personnes</option>
                              <option>3 personnes</option>
                              <option>4 personnes</option>
                              <option>5 personnes</option>
                              <option>6 personnes</option>
                              <option>7 personnes</option>
                            </select>
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-user"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-12 d-grid mt-6">
                          <button className="btn btn-secondary" type="submit">{t('Search Hotels')}</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0 overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 px-0">
              <img
                className="img-fluid order-md-0 mb-4 h-100 fit-cover"
                src="assets/img/gallery/hero-section-2.png"
                alt="..."
              />
            </div>
            <div className="col-lg-6 px-0 bg-primary-gradient bg-offcanvas-right">
              <div className="mx-6 mx-xl-8 my-8">
                <div className="align-items-center d-block d-flex mb-5">
                  <img
                    className="img-fluid me-3 me-md-2 me-lg-4"
                    src="assets/img/icons/locations.png"
                    alt="..."
                  />
                  <div className="flex-1 align-items-center pt-2">
                    <h5 className="fw-bold text-light">{t('Visit the greatest places')}</h5>
                  </div>
                </div>
                <div className="align-items-center d-block d-flex mb-5">
                  <img
                    className="img-fluid me-3 me-md-2 me-lg-4"
                    src="assets/img/icons/schedule.png"
                    alt="..."
                  />
                  <div className="flex-1 align-items-center pt-2">
                    <h5 className="fw-bold text-light">{t('Make your own plans')}</h5>
                  </div>
                </div>
                <div className="align-items-center d-block d-flex mb-5">
                  <img
                    className="img-fluid me-3 me-md-2 me-lg-4"
                    src="assets/img/icons/save.png"
                    alt="..."
                  />
                  <div className="flex-1 align-items-center pt-2">
                    <h5 className="fw-bold text-light">{t('Save 50% on your next trip')}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
    </>
  )
}

export default withTranslation('topSection')(TopSection);