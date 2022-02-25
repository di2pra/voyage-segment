import Navbar from "../components/Navbar";
import FlashDealsSection from "../components/sections/FlashDealsSection";
import TopSection from "../components/sections/TopSection";

export default function Home() {
  return (
    <>
      <TopSection />
      <FlashDealsSection />
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
                      <h2 className="mb-2 text-light">Popular places</h2>
                      <p>
                        Enjoy the benefits of our packages to the
                        <br className="d-none d-lg-block" />
                        sites where our visitors have more fun.{" "}
                        <br className="d-none d-lg-block" />
                        Properly arranged with low costing.
                      </p>
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
                    <span className="text-light me-3">10 Packages</span>
                  </div>
                </div>
                <a className="stretched-link" href="#!" />
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
                    <span className="text-light me-3">10 Packages</span>
                  </div>
                </div>
                <a className="stretched-link" href="#!" />
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
                        <span className="text-light me-3">10 Packages</span>
                      </div>
                    </div>
                    <a className="stretched-link" href="#!" />
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
                        <span className="text-light me-3">10 Packages</span>
                      </div>
                    </div>
                    <a className="stretched-link" href="#!" />
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
                        <span className="text-light me-3">10 Packages</span>
                      </div>
                    </div>
                    <a className="stretched-link" href="#!" />
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
                        <span className="text-light me-3">10 Packages</span>
                      </div>
                    </div>
                    <a className="stretched-link" href="#!" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="bg-secondary-gradient h-100 d-flex align-items-center">
                <div className="text-light p-4 p-sm-6 p-lg-0 px-xxl-6">
                  <p className="fs-1 px-4 mb-6">
                    Wanna travel to the most thrilling spot on the planet? We've set
                    a bunch of surprises for you.
                  </p>
                  <a className="btn btn-lg text-light fs-2" href="#!" role="button">
                    Click to view more
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
      <section className="py-0 my-7">
        <div
          className="bg-holder w-50 bg-left  d-none d-lg-block"
          style={{
            backgroundImage: "url(assets/img/gallery/sharee.png)",
            backgroundPosition: "top"
          }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-4 order-1 order-lg-0"> </div>
            <div className="col-lg-8 bg-white">
              <div
                className="carousel slide"
                id="carouselShare"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval={10000}>
                    <div className="row h-100">
                      <div className="col-12">
                        <img
                          className="w-100"
                          src="assets/img/gallery/dubai.png"
                          height={600}
                          alt="..."
                        />
                        <div className="pt-5 ps-sm-7">
                          <h4 className="mb-2 text-1000">Share a trip</h4>
                          <h2 className="mb-3 text-primary fs-3 fs-md-6">Dubai</h2>
                          <p className="fw-normal mb-0">
                            Dubai, a city with many faces, is one of the world's
                            most popular tourist destinations. The Burj Khalifa, the
                            world's highest tower, is located here. The futuristic
                            beauty of new buildings is at the heart of Dubai
                            tourism.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval={2000}>
                    <div className="row h-100">
                      <div className="col-12">
                        <img
                          className="w-100"
                          src="assets/img/gallery/cinnamon.png"
                          height={600}
                          alt="..."
                        />
                        <div className="pt-5 ps-sm-7">
                          <h4 className="mb-2 text-1000">Share a trip</h4>
                          <h2 className="mb-3 text-primary fs-3 fs-md-6">
                            Maldives
                          </h2>
                          <p className="fw-normal mb-0">
                            Dubai, a city with many faces, is one of the world's
                            most popular tourist destinations. The Burj Khalifa, the
                            world's highest tower, is located here. The futuristic
                            beauty of new buildings is at the heart of Dubai
                            tourism.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval={1000}>
                    <div className="row h-100">
                      <div className="col-12">
                        <img
                          className="w-100"
                          src="assets/img/gallery/dhigu.png"
                          height={600}
                          alt="..."
                        />
                        <div className="pt-5 ps-sm-7">
                          <h4 className="mb-2 text-1000">Share a trip</h4>
                          <h2 className="mb-3 text-primary fs-3 fs-md-6">
                            Maldives
                          </h2>
                          <p className="fw-normal mb-0">
                            Dubai, a city with many faces, is one of the world's
                            most popular tourist destinations. The Burj Khalifa, the
                            world's highest tower, is located here. The futuristic
                            beauty of new buildings is at the heart of Dubai
                            tourism.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row h-100">
                      <div className="col-12">
                        <img
                          className="w-100"
                          src="assets/img/gallery/dubai.png"
                          height={600}
                          alt="..."
                        />
                        <div className="pt-5 ps-sm-7">
                          <h4 className="mb-2 text-1000">Share a trip</h4>
                          <h2 className="mb-3 text-primary fs-3 fs-md-6">Dubai</h2>
                          <p className="fw-normal mb-0">
                            Dubai, a city with many faces, is one of the world's
                            most popular tourist destinations. The Burj Khalifa, the
                            world's highest tower, is located here. The futuristic
                            beauty of new buildings is at the heart of Dubai
                            tourism.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row ps-sm-7 align-items-end">
                  <div className="col-4 col-sm-6 position-relative z-index-2">
                    <ol className="carousel-indicators me-xxl-7 me-xl-4 me-lg-7">
                      <li
                        className="active"
                        data-bs-target="#carouselShare"
                        data-bs-slide-to={0}
                      />
                      <li data-bs-target="#carouselShare" data-bs-slide-to={1} />
                      <li data-bs-target="#carouselShare" data-bs-slide-to={2} />
                      <li data-bs-target="#carouselShare" data-bs-slide-to={3} />
                    </ol>
                  </div>
                  <div className="col-8 col-sm-6 position-relative z-index-2 text-end">
                    <a className="btn btn-lg text-secondary" href="#" role="button">
                      Read More
                      <svg
                        className="bi bi-arrow-right ms-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width={35}
                        height={35}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-7 overflow-hidden">
        <div className="container bg-offcanvas-gray">
          <div className="row gx-2">
            <div className="col-sm-6 col-lg-4 order-1 order-lg-0 gy-2 gy-lg-0">
              <div className="card card-span h-100 text-white">
                <img
                  className="img-fluid h-100 w-100"
                  src="assets/img/gallery/sky-the-limit.png"
                  height={375}
                  alt="..."
                />
                <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                  <div className="mt-auto px-4">
                    <h3 className="fs-1 fs-md-2 text-white">Sky the Limit</h3>
                    <div className="d-flex align-items-center justify-content-start">
                      <span className="text-light fs--1 me-1">
                        <i className="fas fa-map-marker-alt" />
                      </span>
                      <span className="text-light me-3">Manali</span>
                      <span className="text-light fs--1 me-1">
                        <i className="fas fa-calendar" />
                      </span>
                      <span className="text-light">4 days</span>
                    </div>
                    <h1 className="my-2 text-light fw-bolder fs-4">
                      <span>$175</span>
                      <span className="text-light fs--1 fw-normal">
                        /Per person
                      </span>
                    </h1>
                  </div>
                </div>
                <a className="stretched-link" href="#!" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 order-2 order-lg-0 gy-2 gy-lg-0">
              <div className="card card-span h-100 text-white">
                <img
                  className="img-fluid h-100 w-100"
                  src="assets/img/gallery/beyond-the-blues.png"
                  height={375}
                  alt="..."
                />
                <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                  <div className="mt-auto px-4">
                    <h3 className="fs-1 fs-md-2 text-white">Beyond the Blues</h3>
                    <div className="d-flex align-items-center justify-content-start">
                      <span className="text-light fs--1 me-1">
                        <i className="fas fa-map-marker-alt" />
                      </span>
                      <span className="text-light me-3">Maldives</span>
                      <span className="text-light fs--1 me-1">
                        <i className="fas fa-calendar" />
                      </span>
                      <span className="text-light">4 days</span>
                    </div>
                    <h1 className="my-2 text-light fw-bolder fs-4">
                      <span>$175</span>
                      <span className="text-light fs--1 fw-normal">
                        /Per person
                      </span>
                    </h1>
                  </div>
                </div>
                <a className="stretched-link" href="#!" />
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="bg-primary-gradient h-100 bg-offcanvas-right">
                <div className="row g-0 h-100">
                  <div className="col-12 h-100">
                    <div className="d-flex flex-column justify-content-center h-100 text-light ps-4 ps-xl-5 py-5 py-lg-0">
                      <img
                        className="mb-5"
                        src="assets/img/icons/icon-gift-box.svg"
                        width={58}
                        alt="..."
                      />
                      <h2 className="mb-2 text-light">popular Packages</h2>
                      <p>
                        Choose the most popular bundles among{" "}
                        <br className="d-none d-xl-block" />
                        our current ones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 gy-2">
              <div className="card card-span h-100 text-white">
                <img
                  className="img-fluid h-100 w-100"
                  src="assets/img/gallery/green.png"
                  height={375}
                  alt="..."
                />
                <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                  <div className="mt-auto px-4">
                    <h3 className="fs-1 fs-md-2 text-white">Within the Gren</h3>
                    <div className="d-flex align-items-center justify-content-start">
                      <span className="text-light fs--1 me-1">
                        <i className="fas fa-map-marker-alt" />
                      </span>
                      <span className="text-light me-3">Phillipines</span>
                      <span className="text-light fs--1 me-1">
                        <i className="fas fa-calendar" />
                      </span>
                      <span className="text-light">4 days</span>
                    </div>
                    <h1 className="my-2 text-light fw-bolder fs-4">
                      <span>$175</span>
                      <span className="text-light fs--1 fw-normal">
                        /Per person
                      </span>
                    </h1>
                  </div>
                </div>
                <a className="stretched-link" href="#!" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 gy-2">
              <div className="card card-span h-100 text-white">
                <img
                  className="img-fluid h-100 w-100"
                  src="assets/img/gallery/queens-gambit.png"
                  height={375}
                  alt="..."
                />
                <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                  <div className="mt-auto px-4">
                    <h3 className="fs-1 fs-md-2 text-white">Queens Gambit</h3>
                    <div className="d-flex align-items-center justify-content-start">
                      <span className="text-light fs--1 me-1">
                        <i className="fas fa-map-marker-alt" />
                      </span>
                      <span className="text-light me-3">London</span>
                      <span className="text-light fs--1 me-1">
                        <i className="fas fa-calendar" />
                      </span>
                      <span className="text-light">4 days</span>
                    </div>
                    <h1 className="my-2 text-light fw-bolder fs-4">
                      <span>$175</span>
                      <span className="text-light fs--1 fw-normal">
                        /Per person
                      </span>
                    </h1>
                  </div>
                </div>
                <a className="stretched-link" href="#!" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 gy-2">
              <div className="card card-span h-100 text-white">
                <img
                  className="img-fluid h-100 w-100"
                  src="assets/img/gallery/canals.png"
                  height={375}
                  alt="..."
                />
                <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                  <div className="mt-auto px-4">
                    <h3 className="fs-1 fs-md-2 text-white">City of canals</h3>
                    <div className="d-flex align-items-center justify-content-start">
                      <span className="text-light fs--1 me-1">
                        <i className="fas fa-map-marker-alt" />
                      </span>
                      <span className="text-light me-3">Maldives</span>
                      <span className="text-light fs--1 me-1">
                        <i className="fas fa-calendar" />
                      </span>
                      <span className="text-light">4 days</span>
                    </div>
                    <h1 className="my-2 text-light fw-bolder fs-4">
                      <span>$175</span>
                      <span className="text-light fs--1 fw-normal">
                        /Per person
                      </span>
                    </h1>
                  </div>
                </div>
                <a className="stretched-link" href="#!" />
              </div>
            </div>
            <div className="col-12 col-lg-8 gy-2 order-3 order-lg-0">
              <div className="bg-secondary-gradient h-100">
                <div className="row h-100">
                  <div className="col-12">
                    <div className="d-flex flex-column flex-center h-100 text-light p-4 p-sm-6 p-md-8 p-lg-0">
                      <p className="fs-1 px-3 mb-5">
                        Most exclusive packages are ready{" "}
                        <br className="d-none d-xl-block" />
                        for you. It's only a click away!
                      </p>
                      <a
                        className="btn btn-lg text-light fs-1"
                        href="#!"
                        role="button"
                      >
                        Click to view more
                        <svg
                          className="bi bi-arrow-right-circle ms-7"
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
            <div className="col-sm-6 col-lg-4 gy-2">
              <div className="card card-span h-100 text-white">
                <img
                  className="img-fluid h-100 w-100"
                  src="assets/img/gallery/mountain-venture.png"
                  height={375}
                  alt="..."
                />
                <div className="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient">
                  <div className="mt-auto px-4">
                    <h3 className="fs-1 fs-md-2 text-white">Mountain Venture</h3>
                    <div className="d-flex align-items-center justify-content-start">
                      <span className="text-light fs--1 me-1">
                        <i className="fas fa-map-marker-alt" />
                      </span>
                      <span className="text-light me-3">Maldives</span>
                      <span className="text-light fs--1 me-1">
                        <i className="fas fa-calendar" />
                      </span>
                      <span className="text-light">4 days</span>
                    </div>
                    <h1 className="my-2 text-light fw-bolder fs-4">
                      <span>$175</span>
                      <span className="text-light fs--1 fw-normal">
                        /Per person
                      </span>
                    </h1>
                  </div>
                </div>
                <a className="stretched-link" href="#!" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-7" id="activities">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-4 order-1">
              <img
                className="w-100 mt-5 mt-lg-0"
                src="assets/img/gallery/bungee-jumping.png"
                height={750}
                alt="..."
              />
            </div>
            <div className="col-lg-8">
              <div
                className="carousel slide"
                id="carouselActivity"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval={10000}>
                    <div className="row h-100">
                      <div className="col-12">
                        <img
                          className="w-100"
                          src="assets/img/gallery/activity.png"
                          width={383}
                          alt="..."
                        />
                        <div className="py-4">
                          <h4 className="mb-2 text-1000">
                            Participate in activities like
                          </h4>
                          <h2 className="mb-3 text-primary fs-3 fs-md-6">
                            Bungee Jumping
                          </h2>
                          <p className="fw-normal mb-0 pe-lg-9">
                            Bungee jumping, often known as bungy jumping, is a sport
                            in which a person jumps from a considerable height while
                            attached to a long elastic line. Usually, the pad is
                            built on a high structure like a structure or a crane, a
                            bridge across a steep ravine
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval={2000}>
                    <div className="row h-100">
                      <div className="col-12">
                        <img
                          className="w-100"
                          src="assets/img/gallery/activity.png"
                          width={383}
                          alt="..."
                        />
                        <div className="py-4">
                          <h4 className="mb-2 text-1000">
                            Participate in activities like
                          </h4>
                          <h2 className="mb-3 text-primary fs-3 fs-md-6">
                            Bungee Jumping
                          </h2>
                          <p className="fw-normal mb-0 pe-lg-9">
                            Bungee jumping, often known as bungy jumping, is a sport
                            in which a person jumps from a considerable height while
                            attached to a long elastic line. Usually, the pad is
                            built on a high structure like a structure or a crane, a
                            bridge across a steep ravine
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval={1000}>
                    <div className="row h-100">
                      <div className="col-12">
                        <img
                          className="w-100"
                          src="assets/img/gallery/activity.png"
                          width={383}
                          alt="..."
                        />
                        <div className="py-4">
                          <h4 className="mb-2 text-1000">
                            Participate in activities like
                          </h4>
                          <h2 className="mb-3 text-primary fs-3 fs-md-6">
                            Bungee Jumping
                          </h2>
                          <p className="fw-normal mb-0 pe-lg-9">
                            Bungee jumping, often known as bungy jumping, is a sport
                            in which a person jumps from a considerable height while
                            attached to a long elastic line. Usually, the pad is
                            built on a high structure like a structure or a crane, a
                            bridge across a steep ravine
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row h-100">
                      <div className="col-12">
                        <img
                          className="w-100"
                          src="assets/img/gallery/activity.png"
                          width={383}
                          alt="..."
                        />
                        <div className="py-4">
                          <h4 className="mb-2 text-1000">
                            Participate in activities like
                          </h4>
                          <h2 className="mb-3 text-primary fs-3 fs-md-6">
                            Bungee Jumping
                          </h2>
                          <p className="fw-normal mb-0 pe-lg-9">
                            Bungee jumping, often known as bungy jumping, is a sport
                            in which a person jumps from a considerable height while
                            attached to a long elastic line. Usually, the pad is
                            built on a high structure like a structure or a crane, a
                            bridge across a steep ravine
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row ps-sm-5 ps-md-0 align-items-end">
                  <div className="col-4 col-sm-6 position-relative z-index-2">
                    <ol className="carousel-indicators me-xxl-7 me-xl-4 me-lg-7">
                      <li
                        className="active"
                        data-bs-target="#carouselShare"
                        data-bs-slide-to={0}
                      />
                      <li data-bs-target="#carouselShare" data-bs-slide-to={1} />
                      <li data-bs-target="#carouselShare" data-bs-slide-to={2} />
                      <li data-bs-target="#carouselShare" data-bs-slide-to={3} />
                    </ol>
                  </div>
                  <div className="col-8 col-sm-6 position-relative z-index-2 text-end">
                    <a className="btn btn-lg text-secondary" href="#" role="button">
                      Read More
                      <svg
                        className="bi bi-arrow-right ms-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width={35}
                        height={35}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
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
                      <h2 className="mb-3 text-light">
                        Discover our best hotels to stay
                      </h2>
                      <p>
                        Bundle tickets to any hotel to save on your whole order.
                        Follow bundle it! method by picking the right hotel
                        accommodation once you add your tickets to your cart.
                      </p>
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
                        <p className="mb-0 mt-3">Starts from </p>
                        <h1 className="mb-2 text-light fw-bolder fs-2 fs-md-4">
                          <span>$175</span>
                          <span className="text-light fs--1 fw-normal">
                            /Per person
                          </span>
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
                        <p className="mb-0 mt-3">Starts from </p>
                        <h1 className="mb-2 text-light fw-bolder fs-2 fs-md-4">
                          <span>$175</span>
                          <span className="text-light fs--1 fw-normal">
                            /Per person
                          </span>
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
                        <p className="mb-0 mt-3">Starts from </p>
                        <h1 className="mb-2 text-light fw-bolder fs-2 fs-md-4">
                          <span>$175</span>
                          <span className="text-light fs--1 fw-normal">
                            /Per person
                          </span>
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
                        <p className="mb-0 mt-3">Starts from </p>
                        <h1 className="mb-2 text-light fw-bolder fs-2 fs-md-4">
                          <span>$175</span>
                          <span className="text-light fs--1 fw-normal">
                            /Per person
                          </span>
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
                      <p className="fs-1 px-5">
                        In our offers, we have more hotels. Just to make your stay
                        easy for your best interests.
                      </p>
                    </div>
                    <div className="col-12 col-xl-6 text-end">
                      <a
                        className="btn btn-lg text-light fs-1 fs-sm--1 fs-md-1 px-5"
                        href="#!"
                        role="button"
                      >
                        Click to view more
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
      <section className="py-0 pb-8">
        <div className="container-fluid container-lg">
          <div className="row h-100 g-2 justify-content-center">
            <div className="col-sm-9 col-md-4 mb-3 mb-md-0 h-100">
              <div className="card card-span text-white h-100">
                <img
                  className="img-card h-100"
                  src="assets/img/gallery/blog-1.png"
                  alt="..."
                />
                <div className="card-body px-xl-5 px-md-3 pt-0 pb-7">
                  <div className="d-flex justify-content-between align-items-center bg-100 mt-n5 me-auto">
                    <img
                      src="assets/img/gallery/author-1.png"
                      width={60}
                      alt="..."
                    />
                    <div className="d-flex flex-1 justify-content-around">
                      {" "}
                      <span className="text-900 text-center">
                        <i className="fas fa-heart text-primary" />
                        <span className="text-900 ms-2">355</span>
                      </span>
                      <span className="text-900 text-center">
                        <i className="fas fa-eye text-primary" />
                        <span className="text-900 ms-2">234</span>
                      </span>
                      <span className="text-900 text-center">
                        <i className="fas fa-share text-primary" />
                        <span className="text-900 ms-2">14</span>
                      </span>
                    </div>
                  </div>
                  <h5 className="text-900 mt-3">
                    John Oliver. <span className="fw-normal">5 mins Read. </span>
                  </h5>
                  <h3 className="fw-bold text-1000 mt-5 text-truncate">
                    15 Best Day Trips from Portland Oregon
                  </h3>
                  <p className="text-900 mt-3">
                    The structure of the trip blog is only a white canvas to
                    highlight the atmospheric and immersive.
                  </p>
                  <a
                    className="btn btn-lg text-900 fs-1 px-0 hvr-icon-forward"
                    href="#!"
                    role="button"
                  >
                    Read more
                    <svg
                      className="bi bi-arrow-right-short hover-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      >
                        {" "}
                      </path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-9 col-md-4 mb-3 mb-md-0 h-100">
              <div className="card card-span text-white h-100">
                <img
                  className="img-card h-100"
                  src="assets/img/gallery/blog-2.png"
                  alt="..."
                />
                <div className="card-body px-xl-5 px-md-3 pt-0 pb-7">
                  <div className="d-flex justify-content-between align-items-center bg-100 mt-n5 me-auto">
                    <img
                      src="assets/img/gallery/author-2.png"
                      width={60}
                      alt="..."
                    />
                    <div className="d-flex flex-1 justify-content-around">
                      {" "}
                      <span className="text-900 text-center">
                        <i className="fas fa-heart text-primary" />
                        <span className="text-900 ms-2">35</span>
                      </span>
                      <span className="text-900 text-center">
                        <i className="fas fa-eye text-primary" />
                        <span className="text-900 ms-2">23</span>
                      </span>
                      <span className="text-900 text-center">
                        <i className="fas fa-share text-primary" />
                        <span className="text-900 ms-2">14</span>
                      </span>
                    </div>
                  </div>
                  <h5 className="text-900 mt-3">
                    Haley Wilson . <span className="fw-normal">5 mins Read. </span>
                  </h5>
                  <h3 className="fw-bold text-1000 mt-5 text-truncate">
                    Famous Roads for Great Drives in California
                  </h3>
                  <p className="text-900 mt-3">
                    I first discovered about famous road in california when I flew
                    with KLM to Europe in 2018.
                  </p>
                  <a
                    className="btn btn-lg text-900 fs-1 px-0 hvr-icon-forward"
                    href="#!"
                    role="button"
                  >
                    Read more
                    <svg
                      className="bi bi-arrow-right-short hover-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      >
                        {" "}
                      </path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-9 col-md-4 mb-3 mb-md-0 h-100">
              <div className="card card-span text-white h-100">
                <img
                  className="img-card h-100"
                  src="assets/img/gallery/blog-3.png"
                  alt="..."
                />
                <div className="card-body px-xl-5 px-md-3 pt-0 pb-7">
                  <div className="d-flex justify-content-between align-items-center bg-100 mt-n5 me-auto">
                    <img
                      src="assets/img/gallery/author-3.png"
                      width={60}
                      alt="..."
                    />
                    <div className="d-flex flex-1 justify-content-around">
                      {" "}
                      <span className="text-900 text-center">
                        <i className="fas fa-heart text-primary" />
                        <span className="text-900 ms-2">35</span>
                      </span>
                      <span className="text-900 text-center">
                        <i className="fas fa-eye text-primary" />
                        <span className="text-900 ms-2">23</span>
                      </span>
                      <span className="text-900 text-center">
                        <i className="fas fa-share text-primary" />
                        <span className="text-900 ms-2">14</span>
                      </span>
                    </div>
                  </div>
                  <h5 className="text-900 mt-3">
                    Jeff Baley. <span className="fw-normal">5 mins Read. </span>
                  </h5>
                  <h3 className="fw-bold text-1000 mt-5 text-truncate">
                    7 of the Best Train Trips in Canada
                  </h3>
                  <p className="text-900 mt-3">
                    On this very stunning rail ride from Vancouver to Calgary, take
                    in the stunning vistas andspectacular.
                  </p>
                  <a
                    className="btn btn-lg text-900 fs-1 px-0 hvr-icon-forward"
                    href="#!"
                    role="button"
                  >
                    Read more
                    <svg
                      className="bi bi-arrow-right-short hover-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      >
                        {" "}
                      </path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      <section className="py-0" id="flights">
        <div className="container-fluid">
          <div className="row h-100">
            <div className="col-lg-7 mx-auto text-center mb-6">
              <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">
                Flights to Popular Places at the Best Costs
              </h5>
            </div>
          </div>
          <div className="row g-0 flex-center">
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{ backgroundColor: "#240D8C", minHeight: 230 }}
              >
                <h5 className="text-light">Dhaka - Chittagong</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6>
                <i className="fas fa-arrow-right text-light mt-4" />
                <a className="stretched-link" href="#!" />
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{ backgroundColor: "#3011BB", minHeight: 230 }}
              >
                <h5 className="text-light">Dhaka - Sylhet</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6>
                <i className="fas fa-arrow-right text-light mt-4" />
                <a className="stretched-link" href="#!" />
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{ backgroundColor: "#4914DC", minHeight: 230 }}
              >
                <h5 className="text-light">Dhaka - Chittagong</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6>
                <i className="fas fa-arrow-right text-light mt-4" />
                <a className="stretched-link" href="#!" />
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{ backgroundColor: "#6213D2", minHeight: 230 }}
              >
                <h5 className="text-light">Dhaka - Chittagong</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6>
                <i className="fas fa-arrow-right text-light mt-4" />
                <a className="stretched-link" href="#!" />
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{ backgroundColor: "#4611BC", minHeight: 230 }}
              >
                <h5 className="text-light">Dhaka - Coxs Bazar</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6>
                <i className="fas fa-arrow-right text-light mt-4" />
                <a className="stretched-link" href="#!" />
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{ backgroundColor: "#7013CE", minHeight: 230 }}
              >
                <h5 className="text-light">Dhaka - Sylhet</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6>
                <i className="fas fa-arrow-right text-light mt-4" />
                <a className="stretched-link" href="#!" />
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{ backgroundColor: "#4611BC", minHeight: 230 }}
              >
                <h5 className="text-light">Dhaka - Coxs Bazar</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6>
                <i className="fas fa-arrow-right text-light mt-4" />
                <a className="stretched-link" href="#!" />
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{ backgroundColor: "#6213D2", minHeight: 230 }}
              >
                <h5 className="text-light">Dhaka - Chittagong</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6>
                <i className="fas fa-arrow-right text-light mt-4" />
                <a className="stretched-link" href="#!" />
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{ backgroundColor: "#240D8C", minHeight: 230 }}
              >
                <h5 className="text-light">Dhaka - Coxs Bazar</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6>
                <i className="fas fa-arrow-right text-light mt-4" />
                <a className="stretched-link" href="#!" />
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{ backgroundColor: "#4914DC", minHeight: 230 }}
              >
                <h5 className="text-light">Dhaka - Sylhet</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6>
                <i className="fas fa-arrow-right text-light mt-4" />
                <a className="stretched-link" href="#!" />
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{ backgroundColor: "#3011BB", minHeight: 230 }}
              >
                <h5 className="text-light">Dhaka - Chittagong</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6>
                <i className="fas fa-arrow-right text-light mt-4" />
                <a className="stretched-link" href="#!" />
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{ backgroundColor: "#4611BC", minHeight: 230 }}
              >
                <h5 className="text-light">Dhaka - Coxs Bazar</h5>
                <h6 className="text-light fw-normal fs-0">From $100</h6>
                <i className="fas fa-arrow-right text-light mt-4" />
                <a className="stretched-link" href="#!" />
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      <section>
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/gallery/cta-bg.png)",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row flex-center">
            <div className="col-lg-6 text-center">
              <img
                className="mb-5 mb-lg-0"
                src="assets/img/gallery/cta-mobile.png"
                alt="..."
              />
            </div>
            <div className="col-lg-6 text-center">
              <h1 className="fs-6 pe-xxl-10">Get the app</h1>
              <div className="mt-4 pe-xxl-10">
                <a href="https://play.google.com/store/apps" target="_blank">
                  <img
                    className="me-3"
                    src="assets/img/gallery/google-play.png"
                    width={170}
                    alt="..."
                  />
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank">
                  {" "}
                  <img
                    src="assets/img/gallery/app-store.png"
                    width={170}
                    alt="..."
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}