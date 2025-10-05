"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import GridLayout from "react-grid-layout";
import 'react-grid-layout/css/styles.css';

const OnboardingPreviewPage = () => {
  const [width, setWidth] = useState(400);
  const containerRef = useRef<HTMLDivElement>(null);

  const [layout, setLayout] = useState([
    { i: 'profile', x: 2.5, y: 0, w: 3, h: 3.5 },
    { i: 'clients', x: 0.5, y: 2.5, w: 7, h: 4 },
    { i: 'brochure', x: 1, y: 4, w: 4, h: 3 },
    { i: 'expertise', x: 5, y: 4, w: 2, h: 3 },
    { i: 'tech', x: 1, y: 6, w: 2, h: 3 },
    { i: 'video', x: 3, y: 6, w: 2, h: 3 },
    { i: 'calendar', x: 5, y: 6, w: 2, h: 3 },
  ]);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLayoutChange = (newLayout: import("react-grid-layout").Layout[]) => {
    setLayout(newLayout);
    console.log('New Layout:', newLayout);
  };

  return (
    <div ref={containerRef} className="w-full h-full min-h-screen bg-gray-50 p-4">
      <GridLayout 
        className="layout" 
        layout={layout} 
        cols={8} 
        rowHeight={40} 
        width={width}
        isDraggable={true}
        isResizable={true}
        onLayoutChange={handleLayoutChange}
        margin={[10, 10]}
        containerPadding={[10, 10]}
      >
        
        <div key="profile">
          <div>
            <Image src="/images/profile.png" alt="Profile" fill className='object-cover'/>
          </div>
        </div>

        <div key="clients">
          <div>
            <Image src="/images/clients.png" alt="Profile" fill className='object-cover'/>
          </div>
        </div>

        <div key="brochure">
          <div>
            <Image src="/images/brochure.png" alt="Profile" fill className='object-cover'/>
          </div>
        </div>

        <div key="expertise">
          <div>
            <Image src="/images/expertise.png" alt="Profile" fill className='object-cover'/>
          </div>
        </div>

        <div key="tech">
          <div>
            <Image src="/images/tech.png" alt="Profile" fill className='object-cover'/>
          </div>
        </div>

        <div key="video">
          <div>
            <Image src="/images/video.png" alt="Profile" fill className='object-cover'/>
          </div>
        </div>

        <div key="calendar">
          <div>
            <Image src="/images/calendar.png" alt="Profile" fill className='object-cover'/>
          </div>
        </div>

      </GridLayout>
    </div>
  );
};

export default OnboardingPreviewPage;