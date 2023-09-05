import { cn } from "@/lib/utils";
import AppBreadComb from "./bread-comb";

const PageWrapper = ({ className, children }) => {
  return <div className={cn("pt-[90px] lg:pt-24 px-6", className)}>
      <AppBreadComb />
      {children}
    </div>;
};

export { PageWrapper };