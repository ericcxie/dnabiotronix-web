import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto px-4 xl:px-20">
        {/* Divider Line */}
        <hr className="border-t border-gray-300" />

        <div className="flex justify-between items-center mt-6">
          <div>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} DNA Biotronix. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="w-6 h-6 text-gray-600 hover:text-[#4267B2]" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="w-6 h-6 text-gray-600 hover:text-gray-600" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-[#0077B5]" />
            </a>
            <a
              href="mailto:info@dnabiotronix.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail className="w-6 h-6 text-gray-600 hover:text-[#0072C6]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
