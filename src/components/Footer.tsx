import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-8 md:mt-4">
      <div className="px-2 lg:px-4 max-w-[1536px]">
        <div className="sm:flex flex-wrap gap-2 justify-between items-start border-t border-black-100 py-3">
          <div className="mb-2 sm:mb-0">
            <Link to={"#"} className="text-black-300 font-roboto">
              About
            </Link>
          </div>
          <ul className="flex flex-col gap-2 sm:gap-4 sm:flex-row justify-between">
            <li>
              <Link to={"#"} className="text-black-300 font-roboto">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to={"#"} className="text-black-300 font-roboto">
                FAQ
              </Link>
            </li>
            <li>
              <Link to={"#"} className="text-black-300 font-roboto">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to={"#"} className="text-black-300 font-roboto">
                Seller Labs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
