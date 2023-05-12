import searchIcon from "../assets/searchGray.svg";
import HeaderProfile from "./HeaderProfile";

const HeaderDesktop = () => {
  return (
    <header className="hidden lg:block pt-2">
      <div className="px-2 lg:px-4 max-w-[1536px]">
        <div className="bg-white py-2 rounded-lg px-4">
          <div className="flex justify-between items-center">
            <div className="basis-3/4 flex gap-2 justify-between items-center pl-2 py-1 border rounded-lg border-gray-200">
              <img role="button" alt="search" src={searchIcon} />
              <input
                placeholder="Search"
                className="w-full border-none focus:border-none focus:outline-none rounded-lg"
              />
            </div>
            <HeaderProfile dark={false} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDesktop;
