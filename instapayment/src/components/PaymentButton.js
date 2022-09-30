import React from "react";
import "../modules/module.paymentbutton.css";
import community from "../assests/modifiedcommunity.png";

function PaymentButton() {
  return (
    <>
      <div className="paymentpage" id="donate">
        <img src={community} alt="Donation" />
        <div className="makepayment">
          <a
            href="https://test.instamojo.com/@priyankapchaudhari26/"
            target="_blanck"
          >
            <button className="pay" type="button">
              <b>Donate</b>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default PaymentButton;
