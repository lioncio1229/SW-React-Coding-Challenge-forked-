import Recommended from "./components/RecommendedCard";
import QuantityCard from "./components/QuantityCard";
import SizeSelector from "./components/SizeSelector";
import { Stack } from "@mui/material";
import { useState } from "react";

const example = [
  {
    isAvailable: false,
    label: "XS",
  },
  {
    isAvailable: true,
    label: "S",
  },
  {
    isAvailable: true,
    label: "M",
  },
  {
    isAvailable: false,
    label: "L",
  },
  {
    isAvailable: true,
    label: "XL",
  },
];

export default function App() {
  const [quantity, setQuantity] = useState(0)
  const [size, setSize] = useState('')

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
        logo={'./sample.jpg'}
        brand="Mansanas"
        product="This is mansanas"
        oldPrice="$120"
        newPrice="$100"
        selected={size}
        setSelected={setSize}
        sizes={example}
      />
      <Recommended />
    </Stack>
  );
}
