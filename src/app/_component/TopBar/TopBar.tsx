import React from "react";

const TopBar = () => {
  return (
    <div className="bg-emerald-600 py-2 text-white text-xs font-medium border-b border-emerald-500">
      <div className="w-[80%] mx-auto flex justify-between items-center">
        {/* العرض - Promotion */}
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-truck-fast"></i>
          <span>Free shipping on orders over 1500 EGP</span>
        </div>

        {/* التواصل - Contact */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-1.5">
            <a
              href="tel:+201555376024"
              className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
            >
              <i className="fa-solid fa-phone text-[10px]"></i>
              <span>+20 1555376024</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <a
              href="mailto:mohamedeltonbary5@gmail.com"
              className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
            >
              <i className="fa-solid fa-envelope text-[10px]"></i>
              <span>mohamedeltonbary5@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
