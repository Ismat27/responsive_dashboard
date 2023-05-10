import { Link } from "react-router-dom";
import calender from "../assets/promotion/calendar-stats.svg";
import checkupIcon from "../assets/promotion/checkup-list.svg";
import discountIcon from "../assets/promotion/discount.svg";
import tagIcon from "../assets/promotion/tags.svg";
import countdownBg from "../assets/promotion/countdown-bg.png";
import { BsThreeDotsVertical } from "react-icons/bs";

type PropsType = {
  date_from: string;
  date_to: string;
  discount: string | number;
  reg_end: string;
  sellers?: number;
  products?: number;
  funded_discount?: string;
  figure?: number | string;
  approved_deals?: number | string;
  pending_deals?: number | string;
  rejected_deals?: number | string;
  title: string;
  countdown_bg: number;
};

type CountdownProps = {
  unit: string;
  bg: string;
  bgCode: number;
};

const bgsArray = ["bg-lightBlue", "bg-orangeLight", "bg-redLight"];

const CountdownItem = ({ unit, bgCode }: CountdownProps) => {
  return (
    <div className="w-10 text-center">
      <div className="relative">
        <div
          className={`w-10 h-5 rounded-lg ${bgsArray[bgCode]} bg-opacity-20 mb-0.5`}
        ></div>
        <div
          className={`w-10 h-5 rounded-lg ${bgsArray[bgCode]} bg-opacity-20 mb-0.5`}
        ></div>
        <h5 className="absolute top-0 left-0 h-full w-full text-black-100 text-xl font-semibold grid place-content-center lg:text-3xl">
          09
        </h5>
      </div>
      <span className="text-sm">{unit}</span>
    </div>
  );
};

const PromotionCard = ({
  date_from,
  date_to,
  discount,
  reg_end,
  sellers = 0,
  products = 0,
  approved_deals,
  pending_deals,
  rejected_deals,
  title,
  funded_discount = "100% out of the discount",
  countdown_bg,
}: PropsType) => {
  return (
    <article className="bg-white rounded-lg p-4">
      <h3 className="font-bold text-sm font-roboto mb-4">{title}</h3>
      <div>
        <div className="grid grid-cols-2">
          <div className="relative h-[134px] max-w-[185px] ">
            <img className="block" src={countdownBg} />
            <div className="flex items-center justify-center absolute top-0 left-0 w-full h-[134px]">
              <CountdownItem unit={"Days"} bg="blue" bgCode={countdown_bg} />
              <span className="block mb-5">
                <BsThreeDotsVertical />
              </span>
              <CountdownItem unit={"Hours"} bg="blue" bgCode={countdown_bg} />
              <span className="block mb-5">
                <BsThreeDotsVertical />
              </span>
              <CountdownItem unit={"Mins"} bg="blue" bgCode={countdown_bg} />
            </div>
          </div>
          <div>
            <ul className="flex flex-col gap-2 mb-4 text-sm text-black-100">
              <li className="flex gap-2">
                <img src={calender} />
                <span>
                  {date_from} - {date_to}
                </span>
              </li>
              <li className="flex gap-2">
                <img src={discountIcon} />
                <span>Voucher discount: {discount}%</span>
              </li>
              <li className="flex gap-2">
                <img src={checkupIcon} />
                <span>Registration until: {reg_end}</span>
              </li>
              <li className="flex gap-2">
                <img src={tagIcon} />
                <span>Seller funded portion: {funded_discount}</span>
              </li>
            </ul>
            <div className="flex justify-between gap-2">
              <p>Sellers: {sellers}</p>
              <p>Products: {products}</p>
            </div>
          </div>
        </div>
      </div>
      <Link
        to={"#"}
        className="flex justify-center items-center bg-black-200 text-white rounded-lg py-3 my-4"
      >
        Join the Promotion
      </Link>
      <div className="flex gap-4 flex-wrap md:justify-between">
        <p className="flex items-center gap-1 text-sm">
          <span className="text-green">Approved deals</span>
          <span className="bg-white w-[30px] h-[30px] text-sm rounded border-green border-[1px] flex items-center justify-center">
            {approved_deals || 1}
          </span>
        </p>
        <p className="flex items-center gap-1 text-sm">
          <span className="text-orange">Pending deals</span>
          <span className="bg-white w-[30px] h-[30px] text-sm rounded border-orange border-[1px] flex items-center justify-center">
            {pending_deals || "-"}
          </span>
        </p>
        <p className="flex items-center gap-1 text-sm">
          <span className="text-red">Rejected deals</span>
          <span className="bg-white w-[30px] h-[30px] text-sm rounded border-red border-[1px] flex items-center justify-center">
            {rejected_deals || "-"}
          </span>
        </p>
      </div>
    </article>
  );
};

export default PromotionCard;
