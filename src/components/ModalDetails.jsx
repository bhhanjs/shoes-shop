import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  CustomDialogContent,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Grid } from "lucide-react";

const ModalDetails = ({ product, isOpen, onOpen }) => {
  const productName = product.name;
  const { id, image, price, description, quantity, alias } = product;
  return (
    <Dialog open={isOpen} onOpenChange={onOpen}>
      <CustomDialogContent className="flex flex-col gap-4 md:flex-row md:gap-9 p-12">
        <div className="basis-1/2">
          <img src={image} alt={alias} />
        </div>
        <div className="basis-1/2 flex flex-col gap-4 px-4">
          <DialogHeader>
            <DialogTitle className="text-3xl text-gray-700">
              {productName}
            </DialogTitle>
            <p className="text-sm">Quantity: {quantity}</p>
          </DialogHeader>
          <p className="font-bold">Price: {price} $</p>
          <DialogDescription>{description}</DialogDescription>
          <div className="mt-4">
            <Button>Add to cart</Button>
          </div>
        </div>
      </CustomDialogContent>
    </Dialog>
  );
};

export default ModalDetails;
