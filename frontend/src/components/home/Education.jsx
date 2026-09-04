import React from "react";

export default function Education() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-6 p-5">
            <img src="media\homePage\index-education.svg" alt="" />
          </div>
          <div className="col-6 p-5 mt-5">
            <h4 className="mb-5">Free and open market education</h4>
            <p className="text-muted">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              Varsity <i class="fa-solid fa-arrow-right-long"></i>
            </a>

            <p className="mt-4 text-muted">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              TradingQ&A <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
