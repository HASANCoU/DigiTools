import React from "react";
import ListItem from "./ListItem";

const Product = ({ product }) => {
  const { name, description, icon, tagType, period, price, features } = product;
  const tagClass =
  tagType === "Best Seller"
    ? "text-[#BB4D00] bg-[#FEF3C6]"
    : tagType === "Popular"
    ? "text-purple-600 bg-[#e1e7ff]"
    : "text-[#0a883e] bg-[#dbfce7]";

  return (
    <div className="border border-[#bbcad7] rounded-md p-6 flex flex-col h-full space-y-4">
      <div className="flex justify-end">
        {" "}
        <h2 className={`text-[14px] font-medium p-2 rounded-full inline-block text-right ${tagClass}`}>
          {tagType}
        </h2>
      </div>
      <div className="border p-2 rounded-full w-10 flex items-center justify-center border-[#F2F2F2]">
        {icon}
      </div>
      <h1 className="font-bold text-2xl text-[#101727]">{name}</h1>
      <p className="text-[#627382] text-[16px]">{description}</p>
      <div className="text-[16px] text-[#627382]">
        <span className="font-bold text-2xl text-[#101727]">${price}</span>/
        {period}
      </div>
      <div className="grow">
        <ul className="font-medium text-[16px] text-[#627382]">
          {features.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </ul>
      </div>
      <button className="btn btn-block text-white rounded-full font-bold bg-linear-to-r from-purple-600 via-purple-800 to-purple-900">Buy Now</button>
    </div>
  );
};

export default Product;
