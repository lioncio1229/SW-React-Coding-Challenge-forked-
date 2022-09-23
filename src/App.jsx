import Recommended from "./components/RecommendedCard";
import QuantityCard from "./components/QuantityCard";
import { Stack } from "@mui/material";

export default function App() {
  return (
    <Stack spacing={1}>
      <Recommended />
      <QuantityCard/>
    </Stack>
  );
}
