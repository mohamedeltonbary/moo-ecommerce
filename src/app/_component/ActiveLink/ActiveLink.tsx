// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";

// type ActiveLinkProps = {
//   href: string;
//   children: React.ReactNode;
// };

// const ActiveLink = ({ href, children }: ActiveLinkProps) => {
//   const pathname = usePathname();

//   const isActive = pathname.startsWith(href);

//   return (
//     <Link
//       href={href}
//       className="group relative px-2 py-1 text-black transition-colors duration-300 hover:text-blue-500"
//     >
//       {children}

//       {/* underline */}
//       <span
//         className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 transition-transform duration-300 origin-left
//         ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
//       ></span>
//     </Link>
//   );
// };

// export default ActiveLink;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type ActiveLinkProps = {
  href: string;
  children: React.ReactNode;
};

const ActiveLink = ({ href, children }: ActiveLinkProps) => {
  const pathname = usePathname();

  // التشيك دا أدق عشان لو عندك /products و /products/details
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`group relative px-2 py-1 transition-colors duration-300 hover:text-blue-500 
        ${isActive ? "text-blue-600 font-semibold" : "text-black"}`}
      >
        {children}

        {/* الـ Underline */}
        <span
          className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 origin-left
          ${isActive ? "w-full scale-x-100" : "w-full scale-x-0 group-hover:scale-x-100"}`}
        ></span>
      </Link>
    </li>
  );
};

export default ActiveLink;
