import React from "react";

const ShoesStore = ({ children }) => {
  return (
    <>
      <main className="h-screen w-full max-w-[1440px] mx-auto py-5 px-3">
        <header className="text-center w-6/12 mx-auto py-3 mb-7">
          <h1 className="text-2xl text-gray-700 font-semibold">Shoes Shop</h1>
        </header>
        {children}
      </main>
    </>
  );
};

export default ShoesStore;
