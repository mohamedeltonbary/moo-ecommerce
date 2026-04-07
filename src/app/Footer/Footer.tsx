// import Link from "next/link";
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="mt-16 border-t border-gray-200 bg-white">
//       <div className="w-full md:w-[85%] mx-auto px-4 py-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//           <div>
//             <h2 className="text-2xl font-bold text-emerald-600 mb-3">
//               Fresh Cart
//             </h2>
//             <p className="text-gray-600 leading-7 text-sm">
//               Your trusted online store for quality products, smooth shopping,
//               and a modern e-commerce experience.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-gray-800 mb-3">
//               Quick Links
//             </h3>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li>
//                 <Link href="/" className="hover:text-emerald-600 transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/products"
//                   className="hover:text-emerald-600 transition-colors"
//                 >
//                   Products
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/categories"
//                   className="hover:text-emerald-600 transition-colors"
//                 >
//                   Categories
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/cart" className="hover:text-emerald-600 transition-colors">
//                   Cart
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-gray-800 mb-3">
//               Contact
//             </h3>
//             <div className="space-y-2 text-sm text-gray-600">
//               <p>Email: support@freshcart.com</p>
//               <p>Phone: +20 155 537 6024</p>
//               <p>Location: Egypt</p>
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
//           © 2026 Fresh Cart. All rights reserved.{" "}
//           <span className="mx-2">|</span>
//           Built by Mohamed Eltonbary
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;`

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 bg-slate-900 text-white">
      <div className="w-full md:w-[85%] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl font-heading text-emerald-400 mb-3">
              Fresh Cart
            </h2>
            <p className="text-sm leading-7 text-slate-300">
              Your trusted online store for quality products and a smooth
              shopping experience.
            </p>

            <div className="flex gap-4 mt-5 text-lg">
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/mohamed-eltonbary/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a
                href="https://github.com/mohamedeltonbary"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading mb-4 text-white">Contact</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <p>Email: mohamedeltonbary5@gmail.com</p>
              <p>Phone: +20 155 537 6024</p>
              <p>Location: Egypt</p>
              <p className="text-slate-400">
                Designed & Developed by Mohamed Eltonbary
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-slate-700 text-center text-sm text-slate-400">
          © 2026 Fresh Cart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
