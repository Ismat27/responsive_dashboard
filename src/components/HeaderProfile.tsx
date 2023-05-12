import { AiOutlineBell } from "react-icons/ai";
import userImg from "../assets/user.png";

type PropsType = {
  dark?: boolean;
};

const HeaderProfile = ({ dark = false }: PropsType) => {
  const colorClassOne = dark ? "text-white" : "text-black-200";
  const colorClassTwo = dark ? "text-gray-200" : "text-gray-300";
  return (
    <article className="flex items-start justify-between gap-4">
      <div className="inline-block relative">
        <AiOutlineBell className=" text-[21px] text-gray-300" />
        <span className="rounded-full bg-red w-[6px] h-[6px] absolute top-[2px] right-[3px]"></span>
      </div>
      <div>
        <p className={`font-bold ${colorClassOne} text-sm`}>
          Puma Official Store
        </p>
        <p className={`text-sm text-right ${colorClassTwo}`}>Change Seller</p>
      </div>
      <div className="inline-block relative">
        <img className="rounded-full" src={userImg} alt="user" />
        <span className="rounded-full bg-green w-2 h-2 absolute -bottom-[6px] -right-[2px]"></span>
      </div>
    </article>
  );
};

export default HeaderProfile;
