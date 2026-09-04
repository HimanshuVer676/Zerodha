import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="container-fluid border-top bg-light">
        <div className="container mt-5 ">
          <div className="row">
            <div className="col-3">
              <img
                src="media\navbar\logo.svg"
                alt="Logo"
                style={{ width: "50%" }}
              />
              <p className=" mt-4 text-muted">
                © 2010 - 2026, Zerodha Broking. <br /> All rights reserved.
              </p>
              <div>
                <a href="">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="" className="mx-3">
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
                <a href="" className="mx-2">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="" className="mx-2">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <hr />
              <div>
                <a href="">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="" className="mx-3">
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
                <a href="" className="mx-2">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div className="mt-4">
                <img
                  src="media\footer\google-play-badge-light.svg"
                  alt="play store"
                />
                <img
                  src="media\footer\appstore-badge-light.svg"
                  alt="app store"
                  className="mx-2"
                />
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col">
                  <h5 className="text-muted mb-4">Account</h5>
                  <ul className="foot-link">
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                  </ul>
                </div>
                <div className="col">
                  <h5 className="text-muted mb-4">Support</h5>
                  <ul className="foot-link">
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                  </ul>
                </div>
                <div className="col">
                  <h5 className="text-muted mb-4">Company</h5>
                  <ul className="foot-link">
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                  </ul>
                </div>
                <div className="col">
                  <h5 className="text-muted mb-4">Quick links</h5>
                  <ul className="foot-link">
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                    <li>Open demat account</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p
            className="text-muted mt-5"
            style={{ fontSize: "10px", opacity: "0.8" }}
          >
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p
            className="text-muted"
            style={{ fontSize: "10px", opacity: "0.8" }}
          >
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p
            className="text-muted"
            style={{ fontSize: "10px", opacity: "0.8" }}
          >
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly from
            Exchange/Depositories on your mobile/email at the end of the day.
            Issued in the interest of investors. KYC is one time exercise while
            dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not
            undergo the same process again when you approach another
            intermediary." Dear Investor, if you are subscribing to an IPO,
            there is no need to issue a cheque. Please write the Bank account
            number and sign the IPO application form to authorize your bank to
            make payment in case of allotment. In case of non allotment the
            funds will remain in your bank account. As a business we don't give
            stock tips, and have not authorized anyone to trade on behalf of
            others. If you find anyone claiming to be part of Zerodha and
            offering such services, please create a ticket here.s
          </p>
          <p
            className="text-muted"
            style={{ fontSize: "10px", opacity: "0.8" }}
          >
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
        </div>
      </footer>
    </>
  );
}
