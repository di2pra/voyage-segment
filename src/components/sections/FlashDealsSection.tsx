import { ICarrousselItem } from "../../Types"
import { withTranslation, TFunction } from 'react-i18next';
import { useState } from "react";
import { Link } from "react-router-dom";

interface IProps {
  t: TFunction<"translation", undefined>
}

function FlashDealsSection({ t }: IProps) {

  const items: ICarrousselItem[] = [
    {
      cards: [
        {
          title: "Mermaid Beach Resort: The most joyful way to spend your holiday",
          imgUrl: "assets/img/gallery/maldives.png",
          location: "Maldives",
          duration: "4 jours",
          originalPrice: t('priceWithCurrency', { val: 200 }),
          discountedPrice: t('priceWithCurrency', { val: 150 }),
          discountPercentage: "25%",
          isTrending: true
        },
        {
          title: "Bora Bora: Enjoy a romantic cruise tour of at the sunny side of life",
          imgUrl: "assets/img/gallery/cinnamon.png",
          location: "Singapour",
          duration: "5 jours",
          originalPrice: t('priceWithCurrency', { val: 500 }),
          discountedPrice: t('priceWithCurrency', { val: 450 }),
          discountPercentage: "10%",
          isTrending: true
        },
        {
          title: "Fihalhohi Island Resort: Luxury destination without compromise",
          imgUrl: "assets/img/gallery/dhigu.png",
          location: "Maldives",
          duration: "7 jours",
          originalPrice: t('priceWithCurrency', { val: 700 }),
          discountedPrice: t('priceWithCurrency', { val: 630 }),
          discountPercentage: "10%",
          isTrending: false
        }
      ]
    },
    {
      cards: [
        {
          title: "Mermaid Beach Resort: The most joyful way to spend your holiday",
          imgUrl: "assets/img/gallery/maldives.png",
          location: "Sénégal",
          duration: "4 jours",
          originalPrice: t('priceWithCurrency', { val: 200 }),
          discountedPrice: t('priceWithCurrency', { val: 150 }),
          discountPercentage: "25%",
          isTrending: true
        },
        {
          title: "Bora Bora: Enjoy a romantic cruise tour of at the sunny side of life",
          imgUrl: "assets/img/gallery/cinnamon.png",
          location: "Singapour",
          duration: "5 jours",
          originalPrice: t('priceWithCurrency', { val: 500 }),
          discountedPrice: t('priceWithCurrency', { val: 450 }),
          discountPercentage: "10%",
          isTrending: true
        },
        {
          title: "Fihalhohi Island Resort: Luxury destination without compromise",
          imgUrl: "assets/img/gallery/dhigu.png",
          location: "Maldives",
          duration: "7 jours",
          originalPrice: t('priceWithCurrency', { val: 700 }),
          discountedPrice: t('priceWithCurrency', { val: 630 }),
          discountPercentage: "10%",
          isTrending: true
        }
      ]
    }
  ];

  const [selectedCarousel, setSelectedCarousel] = useState<number>(0);

  console.log(selectedCarousel);

  return (
    <section id="flashDeals">
      <div className="container">
        <div className="row h-100">
          <div className="col-lg-7 mx-auto text-center mb-6">
            <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">{t('Flash Deals')}</h5>
          </div>
          <div className="col-12">
            <div
              className="carousel slide"
              id="carouselTestimonials"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {
                  items.map((item, index) => {
                    return (
                      <Link key={index} to="/flash-deals/maldives">
                        <div className={`carousel-item ${selectedCarousel === index ? 'active' : ''}`} >
                          <div className="row h-100 align-items-center g-2">
                            {
                              item.cards.map((card, cardIndex) => {
                                return (
                                  <div key={cardIndex} className="col-md-4 mb-3 mb-md-0 h-100">
                                    <div className="card card-span h-100 text-white">
                                      <img
                                        className="img-fluid h-100"
                                        src={card.imgUrl}
                                        alt="..."
                                      />
                                      <div className="card-img-overlay ps-0">
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
                                        <p className="text-decoration-line-through text-900 mt-3 mb-0">{card.originalPrice}</p>
                                        <h1 className="mb-3 text-primary fw-bolder fs-4">
                                          <span>{card.discountedPrice}</span>
                                          <span className="text-900 fs--1 fw-normal"> / {t('Per person')}</span>
                                        </h1>
                                        <span className="badge bg-soft-secondary p-2">
                                          <i className="fas fa-tag text-secondary fs--1 me-1" />
                                          <span className="text-secondary fw-normal fs-1">{card.discountPercentage}</span>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                      </Link>
                    )
                  })
                }
                <div className="row">
                  <button
                    className="carousel-control-prev"
                    type="button"
                    onClick={() => { setSelectedCarousel(prev => Math.max(0, prev - 1)) }}
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    onClick={() => { setSelectedCarousel(prev => Math.min(items.length - 1, prev + 1)) }}
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next </span>
                  </button>
                </div>
              </div>
              <div className="row flex-center">
                <div className="col-auto position-relative z-index-2">
                  <ol className="carousel-indicators me-xxl-7 me-xl-4 me-lg-7">
                    {
                      items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className={selectedCarousel === index ? 'active' : ''}
                            data-bs-target="#carouselTestimonials"
                            onClick={() => { setSelectedCarousel(index) }}
                          />
                        )
                      })
                    }
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default withTranslation('flashDealsSection')(FlashDealsSection);