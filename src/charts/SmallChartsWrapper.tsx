import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SmallChartsWrapper = ({ children }: Props) => {
  return (
    <div className="self-center relative h-[150px] w-[120px] md:w-[150px] lg:w-[100px] xl:w-[150px] mx-[auto]">
      {children}
    </div>
  );
};

export default SmallChartsWrapper;
