"use client";

import useInvalidname from "@/lib/use-invalid-paths";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  const invalidPath: boolean = useInvalidname();
  if (invalidPath) return <></>;
  return (
    <footer className="py-8 bg-gray-50">
      {/* Main Footer Content */}
      <div className="container my-0 mx-auto px-4 mb-6 max-w-5xl flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liên Hệ với chúng tôi</h3>
            <ul className="space-y-2 leading-loose">
              <li className="flex items-center">
                <FaPhone className="mr-2 text-gray-600" />
                <span>+84 94 777 71 02</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-gray-600" />
                <span>hatran121289@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-bold mb-4">Ghé thăm chúng tôi</h3>
            <div className="flex items-start">
              <FaMapMarkerAlt className="mr-2 mt-1 text-gray-600 text-4xl" />
              <address className="not-italic mr-9 leading-relaxed">
                103 đường số 4, Khu đô thị mới An Cựu,
                phường An Đông quận Thuận Hoá,
                thành phố Huế
              </address>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Giờ Làm Việc</h3>
            <ul className="space-y-2 leading-loose flex flex-col items-start">
              <li className="flex items-center">
                <FaClock className="mr-2 mt-1 text-gray-600" />
                Thứ 2 - Thứ 6: 7:00 AM - 8:00 PM
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2 mt-1 text-gray-600" />
                Thứ 7: 9:00 AM - 6:00 PM
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2 mt-1 text-gray-600" />
                Chủ nhật: 7:00 AM - 12:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t-2 border-solid border-accent mx-4 md:mx-36">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 pt-4">
          {/* Copyright Text */}
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} <b>YOURS Workspace</b>. All rights
            reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/yoursworkspacehue?locale=vi_VN"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 text-gray-400"
            >
              <FaFacebook size={20} />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 text-gray-400"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 448 512"
                fill="currentColor"
              >
                <path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
