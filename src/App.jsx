import Recommended from "./components/RecommendedCard";
import QuantityCard from "./components/QuantityCard";
import SizeSelector from "./components/SizeSelector";
import { Stack } from "@mui/material";

export default function App() {
  return (
    <Stack spacing={1}>
      <QuantityCard/>
      <SizeSelector brand='Mansanas' product='This is mansanas' oldPrice='$120' newPrice='$100' />
      <Recommended />
    </Stack>
  );
}
