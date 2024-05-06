import Heading from "../ui/Heading";
import Wrapper from "../ui/Wrapper";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  return (
    <>
      <Wrapper type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Wrapper>
      <Wrapper>
        <CabinTable />
        <AddCabin />
      </Wrapper>
    </>
  );
}

export default Cabins;
