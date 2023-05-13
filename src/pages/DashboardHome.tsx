import DashboardLayout from "../components/DashboardLayout";
import Promotions from "../components/Promotions";
import Summary from "../charts/Summary";
import Announcements from "../components/Announcements";
import { announcements_data } from "../data/announcements";
import SellingProducts from "../charts/SellingProducts";
import NewProductRejection from "../charts/NewProduct";
import Order from "../charts/Order";
import PendingOrders from "../charts/PendingOrders";

const DashboardHome = () => {
  return (
    <DashboardLayout>
      <div className="px-2 py-4 lg:px-4 max-w-[1536px]">
        <div className="grid grid-cols-1 gap-y-8 items-start lg:grid-cols-dashboardLayout lg:gap-6 justify-between">
          <div className="order-2 lg:-order-1">
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 1.5xl:grid-cols-3">
              <NewProductRejection />
              <SellingProducts />
              <PendingOrders />
            </div>
            <div className="my-6 grid gap-4 md:grid-cols-2 items-start">
              <Summary />
              <Order />
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
