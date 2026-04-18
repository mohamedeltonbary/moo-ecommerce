import Link from "next/link";
import React from "react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaGithub, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt 
} from "react-icons/fa"; // يفضل تستخدم react-icons بدل FontAwesome التقليدي

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com/yourusername", color: "hover:bg-blue-600" },
    { icon: <FaInstagram />, href: "https://instagram.com/yourusername", color: "hover:bg-pink-600" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/mohamed-eltonbary/", color: "hover:bg-blue-700" },
    { icon: <FaGithub />, href: "https://github.com/mohamedeltonbary", color: "hover:bg-gray-700" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "Cart", href: "/cart" },
  ];

  return (
    <footer className="relative mt-20 bg-slate-950 text-white overflow-hidden">
      {/* لمسة جمالية: خلفية متدرجة خفيفة */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="group inline-block">
              <h2 className="text-3xl font-bold tracking-tighter text-white group-hover:text-emerald-400 transition-colors">
                Fresh<span className="text-emerald-500">Cart</span>
              </h2>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Elevating your shopping experience with premium products and seamless service. Your satisfaction is our priority.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-300 ${social.color} hover:text-white hover:border-transparent hover:-translate-y-1`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-emerald-500"></span>
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 hover:translate-x-1 transition-all duration-200 flex items-center"
                  >
                    <span className="mr-2 text-[10px]">▶</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-emerald-500"></span>
            </h3>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
                  <FaEnvelope />
                </div>
                <span>mohamedeltonbary5@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
                  <FaPhoneAlt />
                </div>
                <span>+20 155 537 6024</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
                  <FaMapMarkerAlt />
                </div>
                <span>Egypt, Alexandria</span>
              </div>
            </div>
          </div>

          {/* Newsletter / Extra Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Developer
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-emerald-500"></span>
            </h3>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <p className="text-xs leading-5 text-slate-400">
                Designed & Developed with ❤️ by 
                <span className="block font-medium text-emerald-400 mt-1 italic text-sm">Mohamed Eltonbary</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 Fresh Cart. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;