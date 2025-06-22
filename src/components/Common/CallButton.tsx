"use client";

const CallButton = () => {
  const phoneNumber = "8358952017";
  
  const handleCallClick = () => {
    window.location.href = `tel:+91${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-48 right-4 z-40 group">
      <button
        onClick={handleCallClick}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-red-600"
        aria-label="Call LogiBrix"
      >
        <svg
          className="h-7 w-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      </button>
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Call us
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
      </div>
    </div>
  );
};

export default CallButton;