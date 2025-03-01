import React from 'react';
import image from './assets/images/image-product-desktop.jpg';
import cart from './assets/images/icon-cart.svg';
function Modal() {
  return (
    <div className="grid grid-cols-2 bg-white max-w-xl rounded-lg">
      <img
        src={image}
        alt="desktop pic"
        className="rounded-tl-lg rounded-bl-lg h-full"
      />
      <div className="p-8">
        <div className="pb-6">
          <p className="text-[#6C7289] uppercase tracking-[0.5em] font-montserrat text-xs pb-4">
            Perfume
          </p>
          <p className="font-fraunces font-bold text-[32px] leading-none pb-4">
            Gabrielle Essence Eau De Parfum
          </p>
          <p className="font-montserrat text-sm">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        <div className="flex justify-baseline gap-4 items-center pb-6">
          <p className="font-fraunces font-bold text-[32px]">$149.99</p>
          <p className="font-montserrat line-through">$169.99</p>
        </div>
        <div className="flex items-center justify-center bg-green-500 py-4">
          <img src={cart} alt="cart" />
          <button className="pl-2 font-montserrat text-sm">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
