"use client";
import PaymentForm from '@/ui/PaymentForm';
import TitleBanner from '@/ui/TitleBanner';
import React from 'react'

export default function page() {
  return (
    <div className='w-full'>
        <TitleBanner subtitle="Payment Fast" title="Always available to help" />
        <div className="mt-8">
            <PaymentForm />
      </div>
    </div>
  )
}
