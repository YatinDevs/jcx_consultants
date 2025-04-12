import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineEmail, MdOutlineBusinessCenter } from "react-icons/md";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import JCXLogo from "./JCXLogo";

const Footer = () => {
  const socialIcons = [
    { icon: FaFacebookF, label: "Facebook" },
    { icon: FaTwitter, label: "Twitter" },
    { icon: FaLinkedinIn, label: "LinkedIn" },
    { icon: FaInstagram, label: "Instagram" },
  ];

  const services = [
    "NABL Accreditation",
    "BIS Certification",
    "OTR for Importers",
    "Hallmarking Training",
    "Management Systems",
  ];

  const industries = [
    "Testing & Calibration Labs",
    "Hospitals & Clinics",
    "Manufacturers",
    "Educational Institutes",
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="mb-6">
            <JCXLogo />
          </div>
          <p className="text-gray-300 mb-6">
            With decades of experience and unmatched expertise, we deliver
            reliable compliance solutions for businesses of all sizes.
          </p>
          <div className="flex gap-4">
            {socialIcons.map(({ icon: Icon, label }, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -3 }}
                className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full text-white transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-6 text-blue-400">
            Our Services
          </h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <span className="text-blue-400 mr-2">•</span>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {service}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-6 text-blue-400">
            Industries
          </h3>
          <ul className="space-y-3">
            {industries.map((industry, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <span className="text-blue-400 mr-2">•</span>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {industry}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-6 text-blue-400">
            Contact Us
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <IoLocationOutline
                size={20}
                className="text-blue-400 mt-1 flex-shrink-0"
              />
              <span>Corporate Office Address, City - 400001</span>
            </li>
            <li className="flex items-center gap-3">
              <MdOutlineEmail size={20} className="text-blue-400" />
              <a
                href="mailto:info@jcxconsultants.com"
                className="hover:text-white transition-colors"
              >
                info@jcxconsultants.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IoCallOutline size={20} className="text-blue-400" />
              <a
                href="tel:+919970436943"
                className="hover:text-white transition-colors"
              >
                +91 9970436943
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MdOutlineBusinessCenter size={20} className="text-blue-400" />
              <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-gray-400 border-t border-gray-800 pt-6">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">JCx Consultants</span>. All
          Rights Reserved.{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
