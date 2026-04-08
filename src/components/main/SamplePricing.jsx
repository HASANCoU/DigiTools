import React, { use } from "react";
import PricingCard from "./PricingCard";

const SamplePricing = ({ pricingCardsPromise }) => {
  const pricingCards = use(pricingCardsPromise);
  return (
    <div className="bg-white py-30">
      <h1 className="text-center text-5xl text-[#101727] font-extrabold">
        Simple, Transparent Pricing
      </h1>
      <p className="text-center text-[#627382] text-[16px] py-8">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
      <div className="w-9/12 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {pricingCards.map((card, index) => {
          return <PricingCard key={index} card={card} />;
        })}
      </div>
    </div>
  );
};

export default SamplePricing;
