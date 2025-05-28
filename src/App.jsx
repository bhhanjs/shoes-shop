import { useState } from "react";
import DATA from "./data";
import ShoesStore from "./components/ShoesStore";
import ProductsList from "./components/ProductsList";
import ProductItem from "./components/ProductItem";
import ModalDetails from "./components/ModalDetails";

function App() {
  const [seletedProduct, setSeletedProduct] = useState(null);
  const [modalOpen, setOpenModal] = useState(false);

  const handleSeletedProduct = function (product) {
    setSeletedProduct(product);
    setOpenModal(true);
  };

  return (
    <>
      <ShoesStore>
        {/* product list */}
        <ProductsList>
          {DATA.map((shoes) => {
            console.log(shoes);
            return (
              <ProductItem
                key={shoes.id}
                item={shoes}
                onSeletedProduct={handleSeletedProduct}
              />
            );
          })}
        </ProductsList>

        {/* modal details */}
        {seletedProduct && (
          <ModalDetails
            isOpen={modalOpen}
            product={seletedProduct}
            onOpen={setOpenModal}
          />
        )}
      </ShoesStore>
    </>
  );
}

export default App;
