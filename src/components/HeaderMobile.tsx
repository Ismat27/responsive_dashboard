import hamburger from "../assets/menu_bar.png";
// import searchIcon from "../assets/search.svg";
import HeaderProfile from "./HeaderProfile";

type PropsType = {
  setSideTranslate: React.Dispatch<React.SetStateAction<boolean>>;
  sideTranslated: boolean;
};

const HeaderMobile = ({ setSideTranslate, sideTranslated }: PropsType) => {
  return (
    <header className="bg-black-100 h-[62px] grid items-center lg:hidden">
      <div className="flex justify-between items-center px-4 sm:px-4">
        <div className="flex start gap-2">
          <img
            onClick={() => setSideTranslate(!sideTranslated)}
            src={hamburger}
            alt="side bar toggler"
            role="button"
          />
          <div className="flex items-start">
            {/* <img role="button" alt="search icon" src={searchIcon} /> */}
            {/* <input className="w-full" /> */}
          </div>
        </div>
        <HeaderProfile dark={true} />
      </div>
    </header>
  );
};

export default HeaderMobile;
