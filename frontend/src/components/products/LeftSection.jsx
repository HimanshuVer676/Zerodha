import React from "react";

export default function LeftSection({
  imageURL,
  productName,
  productDsc,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  // {} --> Helps to destruct propss
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-3">
          <img
            src={imageURL}
            alt=""
            className="mx-5"
            style={{ padding: "0px 0px 0px 30px" }}
          />
        </div>

        <div className="col-6 mt-5" style={{ padding: "50px 140px" }}>
          <h3>{productName}</h3>
          <p>{productDsc}</p>
          <div>
            <a href={tryDemo}>
              Try demo
              <i
                class="fa-solid fa-arrow-right-long"
                style={{ fontSize: "12px" }}
              ></i>
            </a>
            <a className="mx-4" href={learnMore}>
              Learn more
              <i
                class="fa-solid fa-arrow-right-long"
                style={{ fontSize: "12px" }}
              ></i>
            </a>
          </div>
          <div className="mt-5">
            <a href={googlePlay}>
              <img
                src="media\products\google-play-badge.svg"
                alt="googlePlay"
              />
            </a>
            <a href={appStore} className="mx-4">
              <img src="media\products\appstore-badge.svg" alt="appStore" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
