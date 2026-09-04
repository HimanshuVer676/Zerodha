import React from "react";

export default function OpenAccount() {
  return (
    <>
      <div className="container p-5 mb-5">
        <div className="row text-center text-muted">
          <h3 className="mt-5 mb-3">Open a Zerodha account</h3>
          <p className="text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
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
