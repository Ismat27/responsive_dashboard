import DashboardLayout from "../components/DashboardLayout";
import Promotions from "../components/Promotions";
import Summary from "../charts/Summary";
import OrderVoume from "../charts/OrderVolume";
import Announcements from "../components/Announcements";
import { announcements_data } from "../data/announcements";

const DashboardHome = () => {
  return (
    <DashboardLayout>
      <div className="px-2 py-4 lg:px-4 max-w-[1536px]">
        <div className="grid grid-cols-1 gap-y-8 items-start lg:grid-cols-dashboardLayout lg:gap-6 justify-between">
          <div className="order-2 lg:-order-1">
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 1.5xl:grid-cols-4">
              <div className="bg-white rounded-lg h-[248px]"></div>
              <div className="bg-white rounded-lg h-[248px]"></div>
              <div className="bg-white rounded-lg h-[248px]"></div>
              <div className="bg-white rounded-lg h-[248px]"></div>
            </div>
            <div className="my-6  grid gap-4 md:grid-cols-2 items-start">
              <Summary />
              <OrderVoume />
            </div>
            <Announcements data={announcements_data} />
          </div>
          <Promotions />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardHome;
