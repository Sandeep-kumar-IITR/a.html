import React from "react";
import bg from "../components/bg.jpg"; // make sure path is correct

function Hero() {
  return (
    <div className="position-relative w-100">
      {/* Full-width image */}
      <img
        src={bg}
        alt="Credit Card Banner"
        className="img-fluid w-100 d-block"
        style={{ objectFit: "contain" }}
      />

      {/* Overlay text - aligned left */}
      <div className="position-absolute top-50 start-0 translate-middle-y text-white px-5">
        <p
          className="text-uppercase small mb-3"
          style={{ fontFamily: "'Roboto', sans-serif" }} // replace with your font
        >
          Standard Chartered Credit Card
        </p>
        <h1
          className="fw-light lh-base"
          style={{ fontFamily: "'Roboto Slab', serif", fontSize: "2.5rem" }}
        >
          Discover endless benefits &amp; privileges <br />
          with our range of <span className="fw-normal">Credit Cards</span>
        </h1>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import "./RewardsCard.css";

const RewardsCard = ({
  title,
  image,
  cardName,
  features,
  eligibility,
  termsLink,
  moreInfoLink,
  buttonText = "FIND OUT MORE",
}) => {
  return (
    <div className="product-action">
      <div className="content-wrapper text-start">
        {/* Title */}
        <h2 className="product-action-columns-view__title">{title}</h2>

        {/* Two Column Layout */}
        <div className="product-action-columns-view__wrapper container">
          <div className="row align-items-center">
            {/* Left Column (Image) */}
            <div className="col-md-4">
              <img
                src={image}
                alt={cardName}
                className="img-fluid rounded-4"
              />
            </div>

            {/* Right Column (Content) */}
            <div className="col-md-8">
              {/* Card Name */}
              <div className="heading heading1">{cardName}</div>

              {/* Features */}
              <div className="desc-long container text-start">
                <div className="row g-4">
                  {features.map((feature, idx) => (
                    <div key={idx} className="col-md-4 d-flex">
                      <span className="c-icon icon-tick me-2"></span>
                      <div>
                        <strong className="feature-heading">{feature.title}</strong>
                        {feature.value && (
                          <span className="feature-value"> {feature.value} </span>
                        )}
                        {feature.details && (
                          <p className="feature-details">{feature.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility */}
              <div className="remarks">
                <p className="heading1"><strong>Eligibility</strong></p>
                <ul className="row g-3 list-unstyled text-start heading2">
                  {eligibility.map((item, idx) => (
                    <li key={idx} className="col-md-4 d-flex">
                      <span className="c-icon icon-tick me-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Terms & Button */}
              <div className="terms-and-conditions mt-3 heading1">
                <a
                  href={moreInfoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success ps-6 pe-6 mb-3"
                >
                  {buttonText}
                </a>
                <a href={termsLink} className="d-block mb-2">
                  Product Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsCard;




import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import cardic from '../components/cardic.jpg'; // make sure path is correct
const CreditCards = () => {
  const cards = [
    {
      img: cardic, // Replace with your image
      title: "Super Value Titanium Credit Card",
      desc: "Enjoy 5%* cashback on fuel, telephone & utility bills & 1 reward point per ₹150 on all other spends"
    },
    {
      img: "https://i.ibb.co/6nSx5jS/manhattan.jpg", // Replace with your image
      title: "Manhattan Credit Card",
      desc: "Earn double benefits with both 5%* cashback at supermarkets and 3x rewards for every other purchase."
    },
    {
      img: "https://i.ibb.co/vjH2hzJ/priority.jpg", // Replace with your image
      title: "Priority Visa Infinite Credit Card",
      desc: "Custom made exclusively for our Priority Bank customers – offers a unique rewards programme and varied complimentary benefits"
    },
    {
      img: "https://i.ibb.co/4pPkYf6/digismart.jpg", // Replace with your image
      title: "DigiSmart Credit Card",
      desc: "Your one card for everything online. Enjoy year-round benefits on Myntra, Yatra, Zomato and more."
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="section-title mb-4">Other Credit Cards</h2>
      <div className="row g-4">
        {cards.map((card, index) => (
          <div className="col-md-3" key={index}>
            <div className="card card-custom h-100">
              <img src={card.img} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text text-muted">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditCards;



import React from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CreditCardFAQ() {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-primary">Credit Card FAQs</h2>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is a credit card?</Accordion.Header>
          <Accordion.Body>
            A credit card is a simple and efficient way to make payments. It negates
            the need to carry cash or issue checks and is designed to make spending
            a rewarding experience. It is the perfect way to handle all physical and
            online payments and has you covered in the event of a cash emergency too.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>What are the benefits of a credit card?</Accordion.Header>
          <Accordion.Body>
            Credit cards offer benefits such as convenience, reward points, cashback,
            EMI options, and global acceptance.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What is the eligibility criteria to get a Standard Chartered Credit Card online?
          </Accordion.Header>
          <Accordion.Body>
            Eligibility generally depends on age, income, and credit history.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How to apply for a Standard Chartered Credit Card?
          </Accordion.Header>
          <Accordion.Body>
            You can apply online through the Standard Chartered website by filling
            out the application form and uploading required documents.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            What are the types of Credit Cards offered by Standard Chartered in India?
          </Accordion.Header>
          <Accordion.Body>
            Standard Chartered offers a variety of cards including rewards cards,
            cashback cards, travel cards, and premium cards.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="text-center mt-4">
        <a href="#" className="text-muted fw-bold">
          READ MORE
        </a>
      </div>
    </div>
  );
}

export default CreditCardFAQ;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-start py-5">
      <Container fluid className="px-5">
        <Row>
          {/* Column 1 */}
          <Col md={3} sm={6} className="mb-4">
            <ul className="list-unstyled">
              <li>ABOUT US</li>
              <li>BANK WITH US</li>
              <li>ATMS AND BRANCHES</li>
              <li>GET HELP</li>
              <li>FAQS</li>
              <li>FORMS AND DOWNLOADS</li>
              <li>WEBSITE PRIVACY STATEMENT</li>
              <li>LATEST FINANCIAL RESULTS</li>
              <li>IMPORTANT INFORMATION</li>
            </ul>
          </Col>

          {/* Column 2 */}
          <Col md={3} sm={6} className="mb-4">
            <ul className="list-unstyled">
              <li>LATEST MARKET INSIGHTS</li>
              <li>INVESTOR RELATIONS</li>
              <li>GLOBAL RESEARCH</li>
              <li>NEWS AND MEDIA</li>
              <li>AWARDS AND ACHIEVEMENT</li>
              <li>CAREERS</li>
              <li>GROUP WEBSITE</li>
              <li>WORLDWIDE LOCATIONS</li>
            </ul>
          </Col>

          {/* Column 3 */}
          <Col md={3} sm={6} className="mb-4">
            <ul className="list-unstyled">
              <li>FIGHTING FRAUD</li>
              <li>SPEAKING UP</li>
              <li>SECURITY TIPS</li>
              <li>SUSTAINABILITY</li>
              <li>PROTECTING OUR CLIENTS AND THE FINANCIAL SYSTEM</li>
              <li>TERMS AND CONDITIONS</li>
              <li>ONLINE SECURITY</li>
              <li>COOKIE POLICY</li>
              <li>PRIVACY NOTICE</li>
            </ul>
          </Col>

          {/* Column 4 - DICGC + QR */}
          <Col md={3} sm={6} className="text-center mb-4">
            <img
              src="https://www.dicgc.org.in/images/logo.png"
              alt="DICGC Logo"
              className="mb-3"
              style={{ maxWidth: "100px" }}
            />
            <p className="small">
              Standard Chartered Bank is registered with DICGC <br />
              <a
                href="https://www.dicgc.org.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-success"
              >
                https://www.dicgc.org.in
              </a>
            </p>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://www.dicgc.org.in"
              alt="DICGC QR Code"
              className="mb-2"
            />
            <p className="small">DICGC QR Code</p>
          </Col>
        </Row>

        <hr className="border-secondary" />

        {/* Bottom Footer */}
        <Row className="d-flex justify-content-between align-items-center">
          <Col md={6} className="text-start small">
            © Standard Chartered Bank 2022 —{" "}
            <a href="/" className="text-light text-decoration-none">
              SITE MAP
            </a>
          </Col>
          <Col md={6} className="text-end">
            <a href="/" className="text-light me-3">
              <FaFacebookF />
            </a>
            <a href="/" className="text-light me-3">
              <FaLinkedinIn />
            </a>
            <a href="/" className="text-light">
              <FaTwitter />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;






import logo from './logo.svg';
import './App.css';
import CreditCardForm from './components/CreditCardForm';
import CreditCardPage from './components/HomePage';
import HomePage from './components/HomePage';
import CreditCardOffer from './components/RewardsCard';
import RewardsCard from './components/RewardsCard';
import Hero from './components/Hero';
import CreditCards from './components/CreditCard';
import CreditCardFAQ from './components/CreditCardFAQ';
import Footer from './components/Footer';
const cardData = {
  title: "Earn 4X rewards on all retail spends* + bonus 4X rewards*. No Joining Fee, Free lounge access, Fuel Surcharge waiver and many more.",
  image: "https://av.sc.com/in/content/images/in-rewards-card-pintile.jpg",
  cardName: "Rewards Credit Card",
  features: [
    {
      title: "Get",
      value: "4X",
      details: "rewards on all retail spends* + bonus 4X rewards* on monthly spends* over INR 20,000.",
    },
    {
      title: "Free",
      value: "Lounge access*",
      details: "1 per calendar quarter",
    },
    {
      title: "Enjoy",
      value: "No Joining Fee*",
    },
  ],
  eligibility: [
    "Applicant’s age should be between 18 and 65 years (salaried) and 18–67 years (self-employed).",
    "Minimum age for add-on cardholder is 18 years. Monthly Income",
    "Applicants should have a stable monthly income.",
    "Applicants should belong to credit card sourcing cities/locations of the Bank.",
    "All applications are subject to credit and policy checks.",
  ],
  moreInfoLink: "#",
  termsLink: "#",
};



function App() {
  return (
    <div className="App">
      
      <HomePage></HomePage>
      <Hero></Hero>
      <RewardsCard {...cardData} />
      <CreditCards></CreditCards>
      <CreditCardFAQ></CreditCardFAQ>
      <Footer></Footer>
    </div>
  );
}

export default App;





reward card.className
/* Main Section */
.product-action {
  background-color: #f9f9f9;
  padding: 32px;
  font-family: "SC Sans Web", Arial, sans-serif;
  color: #000;
}

/* Wrapper */
.content-wrapper {
  max-width: 1200px;
  margin: auto;
}

/* Title */
.product-action-columns-view__title {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 30px;
  line-height: 1.5;
}

/* Headings */
.heading1 {
  margin-left: 40px;
  font-size: 20px; /* default desktop font */
}

.heading2 {
  margin-left: 10px;
  font-size: 16px; /* default desktop font */
}

/* Two-column layout */
.product-action-columns-view__wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.col-image img {
  max-width: 100%;
  border-radius: 16px; /* added border-radius */
}

/* Right column content */
.heading {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
}

/* Features List */
.desc-long ul {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}

.desc-long li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 18px;
}

.c-icon.icon-tick {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  flex-shrink: 0;
  background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Green_check.svg/1024px-Green_check.svg.png")
    no-repeat center center;
  background-size: contain;
}

.feature-heading {
  display: block;
  font-weight: 500;
}

.feature-value {
  font-size: 22px;
  font-weight: bold;
}

.feature-details {
  font-size: 14px;
  color: #444;
  margin-top: 4px;
}

/* Eligibility */
.remarks {
  margin-top: 20px;
}

.remarks ul {
  list-style: none;
  padding: 0;
}

.remarks li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.4;
}

/* Button */
.buttons {
  margin-top: 20px;
}

.c-button {
  background-color: #007a33;
  color: #fff;
  padding: 12px 22px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
}

.c-button:hover {
  background-color: #005f29;
}

/* Terms */
.terms-and-conditions {
  margin-top: 15px;
}

.terms-and-conditions a {
  font-size: 13px;
  color: #007a33;
  text-decoration: underline;
}

/* Responsive Fonts & Layout */
@media (max-width: 1200px) {
  .heading1 {
    font-size: 18px;
  }
  .heading2 {
    font-size: 15px;
  }
}

@media (max-width: 768px) {
  .product-action-columns-view__wrapper {
    flex-direction: column;
  }
  .heading1 {
    font-size: 16px;
  }
  .heading2 {
    font-size: 14px;
  }
  .product-action-columns-view__title {
    font-size: 18px;
  }
  .col-image img {
    border-radius: 12px; /* smaller radius on mobile */
  }
}
