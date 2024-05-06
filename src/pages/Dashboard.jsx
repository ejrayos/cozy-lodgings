import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Wrapper from "../ui/Wrapper";

function Dashboard() {
  return (
    <>
      <Wrapper type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Wrapper>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
