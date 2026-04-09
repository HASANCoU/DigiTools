import React from "react";
import { MdHourglassEmpty } from "react-icons/md";
import { toast } from "react-toastify";



const CartsContainer = ({ cartProducts,setCartProducts,setTotalPrice,totalPrice }) => {
    const handelRemoveBtn = (cartProduct) =>{
        const newCartProducts = cartProducts.filter((cart)=>cart!==cartProduct);
        setCartProducts(newCartProducts);
        const newPrice = totalPrice-cartProduct.price;
        setTotalPrice(newPrice);
        toast.error(`${cartProduct.name} is Removed From Cart!!!`);
    }
    const handleBtnProceed = () =>{
        setCartProducts([]);
        setTotalPrice(0)
        toast.success(`Proceed All cart items!!`)
    }
  return (
    <div className="w-11/12 mx-auto border border-gray-100 rounded-xl p-5 md:p-20 bg-gray-50">
      {cartProducts.length ? (
        <div className="">
          {cartProducts.map((cartProduct) => {
            const { name, icon, price } = cartProduct;
            return (
              <div className="py-3 px-5 bg-gray-200 text-[#717383] m-4 rounded-xl flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="p-1 bg-white rounded-full">{icon}</span>
                  <div>
                    <h1 className="font-semibold text-xl text-black">{name}</h1>
                    <p>${price}</p>
                  </div>
                </div>

                <div>
                  <button className="btn btn-ghost btn-error rounded-full" onClick={ ()=>handelRemoveBtn(cartProduct)}>
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div className="py-3 px-5 bg-gray-200 text-black text-xl m-4 rounded-xl flex justify-between items-center">
            <h2 className="text-gray-600">Total</h2>
            <h2 className="font-bold">${totalPrice}</h2>
          </div>
          <div className="px-5">
            <button className="btn btn-block  bg-linear-to-r from-purple-600 via-purple-800 to-purple-900 rounded-full text-white" onClick={handleBtnProceed}>Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <div className="w-70 mx-auto text-4xl text-gray-700">
          <h1 className="mx-auto  w-1/7">
            <MdHourglassEmpty />
          </h1>
          <div>
            <h1 className="text-center font-semibold">Empty Cart</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartsContainer;
