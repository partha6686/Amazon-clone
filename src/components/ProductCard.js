import Image from "next/image";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import CurrencyFormat from "react-currency-format";

const ProductCard = ({ product }) => {
  const { id, title, description, price, category, image } = product;
  const [rating] = useState(Math.floor(Math.random() * 5) + 1);
  const [prime] = useState(Math.floor(Math.random() * 2));
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <Image
        src={image}
        alt={title}
        height={200}
        width={200}
        objectFit="contain"
      />

      <h4 className="my-3">{title}</h4>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>

      {prime !== 0 && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            src="https://links.papareact.com/fdw"
            loading="lazy"
            alt="banner"
            className="w-12"
          />
          <p className="text-xs text-gray-500">FREE Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
