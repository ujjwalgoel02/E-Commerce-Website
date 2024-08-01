import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(112)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Ecommerce is the process of buying and selling products or services
          online. Short for “electronic commerce,” ecommerce encompasses all
          buying and selling that’s done on any digital device or platform, such
          as an online store, smartphone, online marketplace, or social media
          platform. Whether it’s business-to-consumer (B2C),
          business-to-business (B2B), or business-to-consumer-business, (B2C2B),
          or physical or digital products, these online exchanges can come in
          many forms and occur across a variety of channels. To fully understand
          ecommerce, let’s take a look at its history, growth, and impact on the
          business world. We’ll also touch on the main types of ecommerce
          business models, the potential benefits and challenges of selling
          online, and what tools you’ll need to get started.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
