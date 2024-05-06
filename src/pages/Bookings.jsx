import Heading from "../ui/Heading";
import Wrapper from "../ui/Wrapper";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <>
      <Wrapper type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Wrapper>

      <BookingTable />
    </>
  );
}

export default Bookings;
