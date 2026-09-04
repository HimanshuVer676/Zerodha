import React from "react";

export default function RightSection({
  imageURL,
  productName,
  productDsc,
  followLink,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Details */}
        <div className="col-6 mt-5" style={{ padding: "50px 140px" }}>
          <h3 style={{ marginTop: "110px" }}>{productName}</h3>
          <p>{productDsc}</p>
          <div>
            <a href={followLink}>
              {followLink}
              <i
                class="fa-solid fa-arrow-right-long"
                style={{ fontSize: "12px" }}
              ></i>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="col-6 p-3">
          <img
            src={imageURL}
            alt=""
            className="my-5"
            style={{ padding: "0px 30px 0px 0px" }}
          />
        </div>
      </div>
    </div>
  );
}
