import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductItem = ({ item, onSeletedProduct }) => {
  const { name, price, image } = item;
  return (
    <Card
      className="w-full border shadow-xs"
      onClick={() => {
        onSeletedProduct(item);
      }}
    >
      <div className="flex flex-col items-center gap-4 p-3">
        {/* image */}
        <img
          src={image}
          alt={name}
          className="w-full h-[200px] object-contain"
        />

        {/* content */}
        <CardContent className="space-y-2 w-full">
          <h3 className="text-base font-medium text-gray-900">{name}</h3>
          <p className="text-sm text-gray-700">{price}$</p>
          <Button
            className="bg-black text-white hover:bg-gray-800 px-6 py-3"
            size="lg"
          >
            Add to card 🛒
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default ProductItem;
