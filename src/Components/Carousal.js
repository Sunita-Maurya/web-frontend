import React from 'react';
import 'tw-elements';
import carouselImages from '../images/carouselImages';
const Carousal = () => {
  return (
    <div
      id="carouselDarkVariant"
      className="carousel slide carousel-fade carousel-dark relative mt-16 "
      data-bs-ride="carousel"
    >
      {/* <!-- Indicators --> */}
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 text-white">
        {carouselImages.map((img, i) => {
          return (
            <button
              key={i}
              data-bs-target="#carouselDarkVariant"
              className={`${i === 0 ? 'active' : ''}`}
              aria-current={`${i === 0 ? 'true' : ''}`}
              data-bs-slide-to={i}
              aria-label={`Slide ${i + 1}`}
            ></button>
          );
        })}
      </div>

      {/* <!-- Inner --> */}
      <div className="carousel-inner relative w-full overflow-hidden">
        {/* carousel content */}
        {carouselImages.map((img, i) => {
          return (
            <div
              className={`carousel-item ${
                i === 0 ? 'active' : ''
              } relative float-left w-full`} //w-full
              key={i}
            >
              <img
                src={img}
                className="block rounded-lg" //w-full
                alt="Mountaintop"
                style={{
                  height: '30rem',
                  marginInline: 'auto',
                  width: '95%',
                  objectFit: 'cover',
                }}
              />
              <div className="carousel-caption hidden md:block absolute text-center text-white">
                <h5 className="text-xl text-white">Second slide label</h5>
                <p className="text-xl text-white">
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
          );
        })}
        {/* carousel content single item */}
      </div>

      {/* <!-- Inner -->  <!-- Controls --> */}
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden ">Next</span>
      </button>
    </div>
  );
};

export default Carousal;
