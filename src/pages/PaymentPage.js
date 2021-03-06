import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Btn from '../components/Btn';
import Steps from '../components/Steps';
import { useCartContext } from '../context/cart_context';

const PaymentPage = ({ history }) => {
  const { shippingAddress, savePaymentMethod } = useCartContext();

  if (!shippingAddress.address) {
    history.push('/shipping');
  }

  const [paymentMethod] = useState('PayPal');

  const submitHandler = e => {
    e.preventDefault();
    savePaymentMethod(paymentMethod);
    history.push('/placeorder');
  };

  return (
    <div className="flex-col items-center justify-center bg-amber-50 min-h-screen ">
      <Steps step1 step2 step3 />
      <div className="flex-col items-center justify-center mt-20 pb-10">
        <form className="w-full px-5 sm:w-1/2 xl:w-1/3  mx-auto  p-16">
          <h2 className="text-3xl mb-5">Payment Method</h2>
          <div className="mb-10">
            <label
              htmlFor="payment"
              className="block mb-2  font-medium text-gray-900 "
            >
              Select payment method
            </label>

            <div className="inline-block relative w-64">
              <select
                name="payment"
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>PayPal or Credit Card</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <Link to="/placeorder" onClick={submitHandler}>
            <Btn name="Next" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
