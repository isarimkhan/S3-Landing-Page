import React from 'react';
import { Facebook, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const recentPosts = [
    {
      title: "Innovative Solutions",
      date: "December 12, 2023",
      
    },
    {
      title: "Over 500 Happy Clients",
      date: "December 12, 2023",
    },
    {
      title: "Great Design Proposals",
      date: "December 12, 2023",
    }
  ];

  const quickLinks = [
    "Home",
    "About S3",
    "Modules",
    "Solutions",
    "Pricing",
    "Contact"
  ];

  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Us Section */}
          <div className="">
            <h3 className="text-4xl text-[#54595F] font-quicksand mb-6 font-norml">About Us</h3>
            <p className="text-[#7A7A7A] text-xl leading-relaxed">
              Smart School Solutions (S3) is a comprehensive digital education platform designed to help schools, madrassahs and educational institutes streamline operations, enhance learning experiences, and connect all stakeholders — administrators, teachers, students, and parents — in one powerful, easy-to-use system.
            </p>

            {/* Contact Information */}
            <div className="space-y-4 mt-8">
              <div className="flex flex-row items-start space-x-3">
                <div className="w-20 h-20  rounded-full">
                  <Image
                                        src="/images/eflag.png"
                                        alt="Apple"
                                        width={150}
                                        height={150}
                                      />
                </div>
                <div className="text-[#7A7A7A] text-md">
                  1294, Davenport House, 207 Regent St., London W1B 3BJ, United Kingdom
                </div>
              </div>
              
              <div className="flex flex-row items-start space-x-3">
                <div className="w-20 h-20 rounded-full ">
                  <Image
                                        src="/images/mflag.png"
                                        alt="Apple"
                                        width={400}
                                        height={400}
                                      />
                </div>
                <div className="text-[#7A7A7A] text-md">
                  2-1, Tower 3, UOA Business Park 1, Jalan Pengaturcara, Seksyen, U1/51a, Shah Alam, Malaysia
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-16 ml-50">
            <h3 className="text-2xl  text-gray-600 mb-6 font-quicksand font-norml">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 text-lg font-light transition-colors duration-800"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div className="space-y-6 ml-40">
            <h3 className="font-normal text-2xl text-gray-600 mb-6 font-quicksand">Recent Post</h3>
            <div className="space-y-4">
             
                <div className="flex items-start space-x-3">
                <div className="text-gray-500 font-medium text-lg mb-1">
                      <Image
                                        src="/images/6.jpg"
                                        alt="Apple"
                                        width={80}
                                        height={80}
                                      />
                    </div>
                  <div className="flex-1">
                    <h4 className="text-gray-500 hover:text-[#24B9F1] font-medium text-lg mb-1">
                     Innovative Solutions   
                    </h4>
                    <p className="text-gray-500 text-xs">
                      December 12, 2023
                    </p>
                  </div>
                </div>

                 <div className="flex items-start space-x-3">
                <div className="text-gray-500 font-medium text-lg mb-1">
                      <Image
                                        src="/images/7.png"
                                        alt="Apple"
                                        width={75}
                                        height={50}
                                      />
                    </div>
                  <div className="flex-1">
                    <h4 className="text-gray-500 hover:text-[#24B9F1] font-medium text-lg mb-1">
                     Over 500 Happy Clients
                    </h4>
                    <p className="text-gray-500 text-xs">
                      December 12, 2023
                    </p>
                  </div>
                </div>

                 <div className="flex items-start space-x-3">
                <div className="text-gray-500 font-medium text-lg mb-1">
                      <Image
                                        src="/images/8.png"
                                        alt="Apple"
                                        width={70}
                                        height={70}
                                      />
                    </div>
                  <div className="flex-1">
                    <h4 className="text-gray-500 hover:text-[#24B9F1] font-medium text-lg mb-1">
                     Great Design Proposals
                    </h4>
                    <p className="text-gray-500 text-xs">
                      December 12, 2023
                    </p>
                  </div>
                </div>
              
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className=" border-t-2 border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between">
          <div className="text-gray-500 text-sm mr-24 ">
            © Copyright - 2025. Smart School Solutions (S3) is a product of Sidr Productions Ltd. All Rights Reserved.
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-3">
            <a 
              href="#" 
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-[#24B9F1] transition-colors duration-200"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-[#24B9F1] transition-colors duration-200"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-[#24B9F1] transition-colors duration-200"
            >
              <Youtube className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;