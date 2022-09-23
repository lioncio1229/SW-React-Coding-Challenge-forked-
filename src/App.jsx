import Recommended from "./components/RecommendedCard";
import QuantityCard from "./components/QuantityCard";
import SizeSelector from "./components/SizeSelector";
import { Stack } from "@mui/material";
import { useState } from "react";

export default function App() {
  const [quantity, setQuantity] = useState(0)

  const handleIncrement = () => {
    setQuantity(quantity+1)
  }

  const handleDecrement = () => {
    setQuantity(quantity-1)
  }

  return (
    <Stack spacing={1} width={400}>
      <QuantityCard
        imageUrl="./sample.jpg"
        quantity={quantity}
        maxQuantity={10}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      <SizeSelector
        brand="Mansanas"
        product="This is mansanas"
        oldPrice="$120"
        newPrice="$100"
      />
      <Recommended />
    </Stack>
  );
}
