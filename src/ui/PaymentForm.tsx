// src/ui/PaymentForm.tsx
"use client";
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentForm = () => {
  const searchParams = useSearchParams();
  
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [selectedServiceName, setSelectedServiceName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (searchParams) {
      const title = searchParams.get('title') || '';
      const startingAmt = searchParams.get('startingAmt') || '';
      const detailsOne = searchParams.get('detailsOne') || '';
      const detailsTwo = searchParams.get('detailsTwo') || '';
      const detailsThree = searchParams.get('detailsThree') || '';
      const detailsFour = searchParams.get('detailsFour') || '';
      const detailsFive = searchParams.get('detailsFive') || '';
      const imageUrl = searchParams.get('imageUrl') || '';

      setSelectedServiceName(title);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (fullName === '') {
      setErrMessage("Full name is required!");
      toast.error("Full name is required!");
    } else if (address === '') {
      setErrMessage("Address is required!");
      toast.error("Address is required!");
    } else if (email === '') {
      setErrMessage("Email is required!");
      toast.error("Email is required!");
    } else if (tel === '') {
      setErrMessage("Phone number is required!");
      toast.error("Phone number is required!");
    } else if (selectedServiceName === '') {
      setErrMessage("Please select a service!");
      toast.error("Please select a service!");
    } else {
      try {
        const res = await fetch('/api/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fullName, address, email, tel, selectedServiceName }),
        });

        if (res.ok) {
          setSuccessMessage(
            `Hello dear ${fullName}. We received your order for ${selectedServiceName} successfully. Additional details will be sent to your email at ${email}, and our team will contact you shortly. Thank you for choosing our service.`
          );
          toast.success("Order placed successfully!");
          setFullName('');
          setAddress('');
          setEmail('');
          setTel('');
          setSelectedServiceName('');
          setErrMessage('');
          setIsSubmitted(true);
        } else {
          const data = await res.json();
          setErrMessage(data.error || 'Failed to place order');
          toast.error(data.error || 'Failed to place order');
        }
      } catch (error) {
        setErrMessage('Failed to place order');
        toast.error('Failed to place order');
      }
    }
  };

  return (
    <>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Your Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tel" className="block text-gray-700 font-bold mb-2">Your Phone Number</label>
            <input
              type="tel"
              id="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="service" className="block text-gray-700 font-bold mb-2">Service</label>
            <input
              type="text"
              id="service"
              value={selectedServiceName}
              readOnly
              className="w-full px-3 py-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div className="mb-4 text-red-600">
            {errMessage && <p>{errMessage}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
          <ToastContainer />
        </form>
      ) : (
        <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <p>{successMessage}</p>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
