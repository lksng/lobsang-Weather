import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-semibold">lks</div>
        <div className="flex space-x-6 my-4 md:my-0">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400"><FaFacebook size={20} /></a>
          <a href="#" className="hover:text-gray-400"><FaTwitter size={20} /></a>
          <a href="#" className="hover:text-gray-400"><FaInstagram size={20} /></a>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-4">
        &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
