import React from 'react';

export default function SectionHeader({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">{subtitle}</p>}
      <div className={`h-1 w-20 bg-red-600 mt-4 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}