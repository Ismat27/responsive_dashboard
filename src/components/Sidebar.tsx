import { Link } from "react-router-dom"
import { MdOutlineDashboardCustomize } from "react-icons/md"
import { IconType } from "react-icons"
import ImageOrIcon from "./ImageOrIcon"
import logoImg from "../assets/Logo.png"
import hamburger from "../assets/menu_bar.png"
import helpIcon from "../assets/sidebar/help.svg"
import ordersIcon from "../assets/sidebar/orders.svg"
import productsIcon from "../assets/sidebar/products.svg"
import maintenanceIcon from "../assets/sidebar/maintenance.svg"
import settingsIcon from "../assets/sidebar/settings.svg"
import userIcon from "../assets/sidebar/user.svg"
import reportsIcon from "../assets/sidebar/reports.svg"

type SideLinkProps = {
    to: string,
    Img: string | IconType,
    text: string,
    sideExpand: boolean
}

type SideBarProps = {
    expand: boolean,
    sideTranslate: boolean,
    setExpand: React.Dispatch<React.SetStateAction<boolean>>
}

export const SideLink = ({ to, Img, text, sideExpand}: SideLinkProps) => {
    return (
        <li>
            <Link to={to} className="p-4 block hover:bg-gray-200 hover:bg-opacity-30 hover:border-l-4 hover:border-white transition-all ease-linear duration-300">
                <span className="flex items-center flex-row gap-4 text-[15px] text-white capitalize font-medium">
                    <ImageOrIcon Icon={Img} alt={text} />
                    <span className={`overflow-hidden text-[15px] capitalize font-medium ${sideExpand? 'w-[auto]': 'w-0'}`}>{text}</span>
                </span>
            </Link>
        </li>
    )
}

const Sidebar = ({ expand, setExpand, sideTranslate }: SideBarProps) => {
    return (
        <aside className={`bg-black-100 fixed top-[62px] left-0  h-[100vh] overflow-hidden overflow-y-auto py-4 transition-all ease-linear duration-300 ${expand? 'w-[255px]' : 'w-[88px]'} ${sideTranslate? '-translate-x-[255px]' : 'translate-x-0'} lg:top-0 lg:translate-x-0`}>
            <div className="grid place-content-center">
                <div className="flex items-center gap-4 p-4">
                    <img onClick={() => setExpand(!expand)} src={hamburger} className="cursor-pointer" alt="menu" />
                    <img src={logoImg} alt="logo" className={`${expand? 'block': "hidden"}`} />
                </div>
                <nav>
                    <ul className="flex flex-col">
                        <SideLink sideExpand={expand} to="/" Img={MdOutlineDashboardCustomize} text="overview" />
                        <SideLink sideExpand={expand} to="/" Img={productsIcon} text="products" />
                        <SideLink sideExpand={expand} to="/" Img={ordersIcon} text="orders" />
                        <SideLink sideExpand={expand} to="/" Img={reportsIcon} text="reports" />
                        <SideLink sideExpand={expand} to="/" Img={settingsIcon} text="settings" />
                        <SideLink sideExpand={expand} to="/" Img={userIcon} text="administration" />
                        <SideLink sideExpand={expand} to="/" Img={maintenanceIcon} text="maintenance" />
                        <SideLink sideExpand={expand} to="/" Img={helpIcon} text="help" />
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar