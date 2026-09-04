import React from "react";

export default function Hero() {
  return (
    <>
      <div className="container p-5 mb-5">
        <div className="row text-center">
          <img
            src="media/images/home_hero.svg"
            alt="HeroImg"
            className="mb-5"
          ></img>
          <h1 className="mt-5 mb-3">Investing in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <button
            className="btn btn-primary mt-4 fs-5"
            style={{ width: "16%", height: "50px", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </>
  );
}
