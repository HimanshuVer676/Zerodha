import React from "react";

export default function Stats() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-6 p-5">
            <h3>Trust with confidence</h3>
            <h5 className="mt-5 mb-1">Customer-first always</h5>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>

            <h5 className="mt-3 mb-2">No spam or gimmicks</h5>
            <p className="text-muted">
              No gimmicks, spam "gamification", or annoying push notifications
              High quality apps that you use at your pace, the way you like
            </p>

            <h5 className="mt-3 mb-2">The Zerodha universe</h5>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>

            <h5 className="mt-3 mb-2">Do better with money</h5>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-6">
            <img
              src="media\homePage\ecosystem.png"
              alt="image"
              style={{ width: "80%" }}
            />
            <div className="text-center">
              <a href="" style={{ textDecoration: "none" }}>
                Explore our products{" "}
                <i class="fa-solid fa-arrow-right-long"></i>
              </a>

              <a href="" className="mx-4" style={{ textDecoration: "none" }}>
                Try Kite demo {"  "}
                <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
