import React from 'react';

const Logo = ({ size = 'md', showText = true }) => {
  const sizes = {
    sm: { leaf: 40, text: 'text-lg' },
    md: { leaf: 50, text: 'text-xl' },
    lg: { leaf: 80, text: 'text-3xl' },
    xl: { leaf: 120, text: 'text-4xl' }
  };

  const currentSize = sizes[size];

  return (
    <div className="flex flex-col items-center">
      {/* Leaf Icon SVG */}
      <svg
        width={currentSize.leaf}
        height={currentSize.leaf * 1.4}
        viewBox="0 0 100 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-1"
      >
        {/* Outer leaf shape */}
        <path
          d="M50 0C50 0 10 30 10 75C10 110 28 140 50 140C72 140 90 110 90 75C90 30 50 0 50 0Z"
          fill="#3dae2b"
        />
        {/* Inner cutouts to create vein pattern */}
        <ellipse cx="50" cy="30" rx="8" ry="15" fill="white" />
        <ellipse cx="30" cy="55" rx="7" ry="18" fill="white" transform="rotate(-25 30 55)" />
        <ellipse cx="70" cy="55" rx="7" ry="18" fill="white" transform="rotate(25 70 55)" />
        <ellipse cx="25" cy="90" rx="6" ry="16" fill="white" transform="rotate(-35 25 90)" />
        <ellipse cx="75" cy="90" rx="6" ry="16" fill="white" transform="rotate(35 75 90)" />
        <ellipse cx="50" cy="115" rx="5" ry="12" fill="white" />
      </svg>

      {/* Brand Text */}
      {showText && (
        <div className="text-center">
          <span className={`${currentSize.text} font-bold text-biofilia-black tracking-tight block leading-tight`}>
            Biofilia
          </span>
          <span className={`text-sm text-biofilia-black/70 tracking-widest`}>
            Cocreativa
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
