"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import about1 from '../../../public/images/about1.jpg';

export default function Page() {
  // State to control opacity
  const [opacity, setOpacity] = useState(0);

  // Effect to trigger fade-in
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 100); // Delay to allow initial render

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full bg-primaryColor pt-10">
      {/* Image Section */}
      <div className="relative w-full h-[500px]">
        <Image src={about1} alt="about" layout="fill" objectFit="cover" className="w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-start pl-10 text-white">
          <div>
            <p className="text-4xl font-bold">About Us</p>
            <p className="text-2xl font-semibold mt-4">Never Give Up</p>
          </div>
        </div>
      </div>

      {/* Title and Paragraph Section */}
      <div className="mt-10 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-darkText mb-6" style={{ opacity, transition: 'opacity 2s ease-in-out' }}>NJ Trade and Service</h2>
        <p className="text-xl text-darkText leading-10 tracking-wide mb-4 text-indent" style={{ opacity, transition: 'opacity 2s ease-in-out' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NJ Trade and Service brings unmatched expertise in the ever-changing trading and service markets. We understand the complexities of these industries and provide tailored strategies that keep your business competitive and thriving.
        </p>
        <p className="text-xl text-darkText leading-10 tracking-wide mb-4 text-indent" style={{ opacity, transition: 'opacity 2s ease-in-out' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our innovative solutions are designed to address your business's unique challenges, from product sourcing to supply chain optimization. We ensure that your operations run smoothly and efficiently.
        </p>
        <p className="text-xl text-darkText leading-10 tracking-wide mb-4 text-indent" style={{ opacity, transition: 'opacity 2s ease-in-out' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;More than just a service provider, we are your strategic partner in business, committed to offering comprehensive support from planning to execution. Our mission is to help your business achieve its goals and secure a successful future.
        </p>

        <p className="text-xl text-darkText leading-10 tracking-wide mb-4 text-indent" style={{ opacity, transition: 'opacity 2s ease-in-out' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We have successfully developed future-ready projects for over 1,000 clients, demonstrating our expertise in delivering innovative solutions that meet the evolving needs of the market.
        </p>
        <p className="text-xl text-darkText leading-10 tracking-wide mb-4 text-indent" style={{ opacity, transition: 'opacity 2s ease-in-out' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our commitment to excellence and forward-thinking approach ensure that each project is designed to adapt to future challenges and opportunities.
        </p>
        <p className="text-xl text-darkText leading-10 tracking-wide mb-4 text-indent" style={{ opacity, transition: 'opacity 2s ease-in-out' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;These all factors should be considered when you are going to choose a domain name. But it’s fine if you disregard any of them as your convenience to focus on others.
        </p>
      </div>

      {/* Video Section */}
      <div className="mt-10 px-6 md:px-20 mb-20">
        <video controls className="w-full h-[500px]">
          <source src="/video/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
