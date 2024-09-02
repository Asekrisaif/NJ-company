"use client";
import TitleBanner from '@/ui/TitleBanner';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Order {
  id: number;
  username: string;
  email: string;
  message: string;
}

const AdminDashboard = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch('/api/contacts');
        if (!res.ok) {
          throw new Error('Failed to fetch contact');
        }
        const data: Order[] = await res.json();
        setOrders(data);
        
      } catch (error) {
        // Type assertion to handle unknown error type
        const errorMessage = (error as Error).message;
        setError(errorMessage);
        toast.error('Failed to load contact');
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
      <TitleBanner subtitle="Contact List" title="Check Contact List" />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        {orders.length === 0 ? (
          <p>No Contact found</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-300 text-left">ID</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Full Name</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Email</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Message</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td className="py-2 px-4 border-b border-gray-300 text-left">{order.id}</td>
                  <td className="py-2 px-4 border-b border-gray-300 text-left">{order.username}</td>
                  <td className="py-2 px-4 border-b border-gray-300 text-left">{order.email}</td>
                  <td className="py-2 px-4 border-b border-gray-300 text-left">{order.message}</td>
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
