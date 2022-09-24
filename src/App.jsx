import Recommended from "./components/RecommendedCard";
import QuantityCard from "./components/QuantityCard";
import SizeSelector from "./components/SizeSelector";
import { Stack } from "@mui/material";
import {LoadingButton} from '@mui/lab';
import { useState } from "react";
import useFetchProduct from "./hooks/useFetchProduct";

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

  const { products, fetchProduct, fetching } = useFetchProduct(
    "https://sw-coding-challenge.herokuapp.com/api/v1/products",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNvZGVyIn0.B1QyKzKxzpxay1__A8B85ij32rqFoOIAFGDqBmqXhvs"
  );

  const handleIncrement = () => {
    setQuantity(quantity+1)
  }

  const handleDecrement = () => {
    setQuantity(quantity-1)
  }

  return (
    <Stack spacing={1} width={400}>
      <LoadingButton variant='contained' color='primary' onClick={fetchProduct}>Change Display</LoadingButton>
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
