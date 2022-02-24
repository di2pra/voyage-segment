export default function TopSection() {
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
              <h1 className="display-3 text-1000 fw-normal">Let’s make a tour</h1>
              <h1 className="display-3 text-primary fw-bold">
                Discover the beauty
              </h1>
              <div className="pt-5">
                <nav>
                  <div
                    className="nav nav-tabs voyage-tabs"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      <i className="fas fa-map-marker-alt" />
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      {" "}
                      <i className="fas fa-plane" />
                    </button>
                    <button
                      className="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      {" "}
                      <i className="fas fa-hotel" />
                    </button>
                  </div>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <form className="row g-4 mt-5">
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              htmlFor="inputAddress1"
                            >
                              Address 1
                            </label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddress1"
                              type="text"
                              placeholder="From where"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-map-marker-alt" />
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              htmlFor="inputAddress2"
                            >
                              Address 2
                            </label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddress2"
                              type="text"
                              placeholder="To where"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-map-marker-alt"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
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
                        <div className="col-sm-6 col-md-6 col-xl-5">
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
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              htmlFor="inputPersonOne"
                            >
                              Person
                            </label>
                            <select
                              className="form-select form-voyage-select input-box"
                              id="inputPersonOne"
                              defaultValue="2 Adults"
                            >
                              <option>2 Adults</option>
                              <option>2 Adults 1 children</option>
                              <option>2 Adults 2 children</option>
                            </select>
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-user"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-12 col-xl-10 col-lg-12 d-grid mt-6">
                          <button className="btn btn-secondary" type="submit">
                            Search Packages
                          </button>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <form className="row g-4 mt-5">
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              htmlFor="inputAddressThree"
                            >
                              Address 1
                            </label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddressThree"
                              type="text"
                              placeholder="From where"
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
                            >
                              Address 2
                            </label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddressFour"
                              type="text"
                              placeholder="To where"
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
                            >
                              People
                            </label>
                            <select
                              className="form-select form-voyage-select input-box"
                              id="inputPeopleTwo"
                              defaultValue="2 Adults"
                            >
                              <option>2 Adults</option>
                              <option>2 Adults 1 children</option>
                              <option>2 Adults 2 children</option>
                            </select>
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-user"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-12 d-grid mt-6">
                          <button className="btn btn-secondary" type="submit">
                            Search Packages
                          </button>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
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
                            >
                              Person
                            </label>
                            <select
                              className="form-select form-voyage-select input-box"
                              id="inputPeopleThree"
                              defaultValue="2 Adults"
                            >
                              <option>2 Adults</option>
                              <option>2 Adults 1 children</option>
                              <option>2 Adults 2 children</option>
                            </select>
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-user"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-12 d-grid mt-6">
                          <button className="btn btn-secondary" type="submit">
                            Search Packages
                          </button>
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
                    <h5 className="fw-bold text-light">
                      Visit the greatest places
                    </h5>
                  </div>
                </div>
                <div className="align-items-center d-block d-flex mb-5">
                  <img
                    className="img-fluid me-3 me-md-2 me-lg-4"
                    src="assets/img/icons/schedule.png"
                    alt="..."
                  />
                  <div className="flex-1 align-items-center pt-2">
                    <h5 className="fw-bold text-light">Make your own plans.</h5>
                  </div>
                </div>
                <div className="align-items-center d-block d-flex mb-5">
                  <img
                    className="img-fluid me-3 me-md-2 me-lg-4"
                    src="assets/img/icons/save.png"
                    alt="..."
                  />
                  <div className="flex-1 align-items-center pt-2">
                    <h5 className="fw-bold text-light">
                      Save 50% on your next trip
                    </h5>
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