import AudienceTable from "@/components/dashboard/audience/audience-table";
import { audienceTableConfig } from "@/config/table-config";

const Audience = () => (
  <>
    <AudienceTable tData={audienceTableConfig.data || []} />
  </>
);

export default Audience;
