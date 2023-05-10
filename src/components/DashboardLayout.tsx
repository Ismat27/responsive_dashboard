import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [sideExpand, setSideExpand] = useState(true);
  const [sideTranslated, setSideTranslated] = useState(true);
  return (
    <div className="bg-gray bg-gray-100 min-h-screen font-roboto">
      <Sidebar
        expand={sideExpand}
        setExpand={setSideExpand}
        sideTranslate={sideTranslated}
      />
      <div className={`${sideExpand ? "lg:pl-[255px]" : "lg:pl-[88px]"}`}>
        <HeaderMobile
          sideTranslated={sideTranslated}
          setSideTranslate={setSideTranslated}
        />
        <HeaderDesktop />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
