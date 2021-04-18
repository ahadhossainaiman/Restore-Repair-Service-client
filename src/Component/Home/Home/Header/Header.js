import React from "react";
import header01 from "../../../../images/header01.jpg";
import header02 from "../../../../images/header02.jpg";
import header03 from "../../../../images/header03.jpg";

const Header = () => {
  return (
    <section>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={header01} class="d-block img-fluid" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1 style={{ fontSize: "100px" }}>Fast Repair Service</h1>
              <p>
              Just send your valuable Laptop, PC, Mobile, Gaming Device or Smartphone and we'll take care of it. 
              We will happy to serve our best to you, just keep faith on u
              </p>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="2000">
            <img src={header02} class="d-block img-fluid" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 style={{ fontSize: "100px" }}>COMPUTER REPAIR SERVICE</h5>
              <p>
              Just send your valuable Laptop, PC, Mobile, Gaming Device or Smartphone and we'll take care of it. 
              We will happy to serve our best to you, just keep faith on us

              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={header03} class="d-block img-fluid" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 style={{ fontSize: "100px" }}>MOBILE REPAIR SERVICES</h5>
              <p>
              Just send your valuable Laptop, PC, Mobile, Gaming Device or Smartphone and we'll take care of it. 
              We will happy to serve our best to you, just keep faith on us
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Header;
