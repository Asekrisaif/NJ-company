// src/admin/page.tsx
"use client";
import TitleBanner from '@/ui/TitleBanner';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Order {
  id: number;
  full_name: string;
  address: string;
  email: string;
  phone_number: string;
  service_name: string;
}

const AdminDashboard = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch('/api/orders');
        if (!res.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data: Order[] = await res.json();
        setOrders(data);
      } catch (error) {
        // Type assertion to handle unknown error type
        const errorMessage = (error as Error).message;
        setError(errorMessage);
        toast.error('Failed to load orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="w-full">
      <TitleBanner subtitle="Order List" title="Check Order List" />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        {orders.length === 0 ? (
          <p>No orders found</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Full Name</th>
                <th className="py-2 px-4 border-b">Address</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Phone Number</th>
                <th className="py-2 px-4 border-b">Service Name</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td className="py-2 px-4 border-b">{order.id}</td>
                  <td className="py-2 px-4 border-b">{order.full_name}</td>
                  <td className="py-2 px-4 border-b">{order.address}</td>
                  <td className="py-2 px-4 border-b">{order.email}</td>
                  <td className="py-2 px-4 border-b">{order.phone_number}</td>
                  <td className="py-2 px-4 border-b">{order.service_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <ToastContainer />
      </div>

    </div>
  );
};

export default AdminDashboard;
