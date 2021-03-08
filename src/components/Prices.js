import React from "react";

const Prices = () => {
  const [header] = React.useState({
    mainHeader: "CHOOSE A PLAN",
    subHeading: "Pricing Plan",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "Basic",
      price: 150,
      msg1: "1 Week Technical Support with no extra Cost",
      msg2: "Delivery in 10 Days",
      msg3: "10 Pages",
      msg4: "Responsive Design",
      msg5: "20 Revisions",
    },
    {
      id: 2,
      heading: "Standard",
      price: 275,
      msg1: "1 Month Technical Support with no extra cost",
      msg2: "Delivery in 10 Days",
      msg3: "15 Pages",
      msg4: "Responsive Design",
      msg5: "Unlimited Revisions",
    },
    {
      id: 3,
      heading: "Premium",
      price: 480,
      msg1: "2 Month Technical Support with no extra cost",
      msg2: "Delivery in 15 days",
      msg3: "15+ Pages",
      msg4: "Responsive Modern Design",
      msg5: "Unlimited Revisions",
    },
  ]);
  return (
    <div className="prices">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="priceHeading">${prices.heading}</div>
                <div className="price__rs">
                  <span>$</span>
                  {prices.price}
                </div>
                <ul>
                  <li>{prices.msg1}</li>
                  <li>{prices.msg2}</li>
                  <li>{prices.msg3}</li>
                  <li>{prices.msg4}</li>
                  <li>{prices.msg5}</li>
                </ul>
                <div className="price__btn">
                  <a href="" className="btn btn-outline">
                    Purchase
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
