import React from 'react';

const LeafIcon = ({ size = 300, className = '' }) => {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 100 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer leaf shape */}
      <path
        d="M50 0C50 0 10 30 10 75C10 110 28 140 50 140C72 140 90 110 90 75C90 30 50 0 50 0Z"
        fill="#3dae2b"
      />
      {/* Inner cutouts to create vein pattern */}
      <ellipse cx="50" cy="30" rx="8" ry="15" fill="currentColor" className="text-white" />
      <ellipse cx="30" cy="55" rx="7" ry="18" fill="currentColor" className="text-white" transform="rotate(-25 30 55)" />
      <ellipse cx="70" cy="55" rx="7" ry="18" fill="currentColor" className="text-white" transform="rotate(25 70 55)" />
      <ellipse cx="25" cy="90" rx="6" ry="16" fill="currentColor" className="text-white" transform="rotate(-35 25 90)" />
      <ellipse cx="75" cy="90" rx="6" ry="16" fill="currentColor" className="text-white" transform="rotate(35 75 90)" />
      <ellipse cx="50" cy="115" rx="5" ry="12" fill="currentColor" className="text-white" />
    </svg>
  );
};

export default LeafIcon;
