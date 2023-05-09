import hamburger from "../assets/menu_bar.png"

type PropsType = {
    setSideTranslate: React.Dispatch<React.SetStateAction<boolean>>,
    sideTranslated: boolean
}

const HeaderMobile = ({ setSideTranslate, sideTranslated }: PropsType) => {
  return (
    <header className="bg-black-100 h-[62px] grid items-center lg:hidden">
        <img onClick={() => setSideTranslate(!sideTranslated)} src={hamburger} alt="side bar toggler" />
    </header>
  )
}

export default HeaderMobile