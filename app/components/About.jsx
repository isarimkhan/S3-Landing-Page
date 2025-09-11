import React from 'react';
import { Facebook, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const quickLinks = [
    "Home",
    "About S3",
    "Modules",
    "Solutions",
    "Pricing",
    "Contact",
  ];

  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Us Section */}
          <div>
            <h3 className="text-3xl lg:text-4xl text-[#54595F] font-quicksand mb-6">
              About Us
            </h3>
            <p className="text-[#7A7A7A] text-base lg:text-lg leading-relaxed">
              Smart School Solutions (S3) is a comprehensive digital education
              platform designed to help schools, madrassahs, and institutes
              streamline operations, enhance learning experiences, and connect
              administrators, teachers, students, and parents in one
              easy-to-use system.
            </p>

            {/* Contact Information */}
            <div className="space-y-4 mt-8">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16">
                  <Image
                    src="/images/eflag.png"
                    alt="UK Office"
                    width={80}
                    height={80}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-[#7A7A7A] text-sm sm:text-base">
                  1294, Davenport House, 207 Regent St., London W1B 3BJ, United
                  Kingdom
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16">
                  <Image
                    src="/images/mflag.png"
                    alt="Malaysia Office"
                    width={80}
                    height={80}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-[#7A7A7A] text-sm sm:text-base">
                  2-1, Tower 3, UOA Business Park 1, Jalan Pengaturcara, Seksyen
                  U1/51a, Shah Alam, Malaysia
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl text-gray-600 mb-6 font-quicksand">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-[#24B9F1] text-base transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div>
            <h3 className="text-2xl text-gray-600 mb-6 font-quicksand">
              Recent Posts
            </h3>
            <div className="space-y-6">
              {[
                { title: "Innovative Solutions", date: "Dec 12, 2023", img: "/images/6.jpg" },
                { title: "Over 500 Happy Clients", date: "Dec 12, 2023", img: "/images/7.png" },
                { title: "Great Design Proposals", date: "Dec 12, 2023", img: "/images/8.png" },
              ].map((post, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-16 h-16 flex-shrink-0">
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={80}
                      height={80}
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-600 hover:text-[#24B9F1] cursor-pointer font-medium text-base sm:text-lg">
                      {post.title}
                    </h4>
                    <p className="text-gray-400 text-xs">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t-2 border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
            © 2025 Smart School Solutions (S3), a product of Sidr Productions
            Ltd. All Rights Reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-3">
            {[Facebook, Twitter, Youtube].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-[#24B9F1] transition-colors duration-200"
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
