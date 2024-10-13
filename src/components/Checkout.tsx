import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { ShoppingBag, CreditCard } from 'lucide-react';

const Checkout = ({ cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    // In a real application, you would create a payment intent on your server
    // and pass the client secret to the frontend. For this example, we'll use a dummy secret.
    const clientSecret = 'dummy_client_secret';

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'John Doe',
        },
      },
    });

    if (result.error) {
      setError(result.error.message);
      setProcessing(false);
    } else {
      // Payment successful, you would typically redirect or show a success message
      console.log('Payment successful');
      setProcessing(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <ShoppingBag className="mr-2" />
        Checkout
      </h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between mb-1">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <CreditCard className="inline mr-2" size={16} />
            Card Details
          </label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button
          type="submit"
          disabled={!stripe || processing}
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors duration-200 disabled:opacity-50"
        >
          {processing ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

export default Checkout;