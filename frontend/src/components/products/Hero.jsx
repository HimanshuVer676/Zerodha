import React from "react";

export default function Hero() {
  return (
    <>
      <div className="container mt-5 border-bottom">
        <div className="row">
          <div className="col text-center mb-5">
            <h3 className="opacity text-muted mt-5">Zerodha Products</h3>
            <p className="opacity fs-5 mt-2 text-muted">
              Sleek, modern, and intuitive trading platforms
            </p>
            <p className="opacity fs-5 text-muted">
              Check out our{" "}
              <a href="" className="mx-1" style={{ textDecoration: "none" }}>
                investment offerings{" "}
                <i
                  class="fa-solid fa-arrow-right-long"
                  style={{ fontSize: "12px" }}
                ></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
