import Recommended from "./components/RecommendedCard";
import QuantityCard from "./components/QuantityCard";
import SizeSelector from "./components/SizeSelector";
import { Stack } from "@mui/material";
import {LoadingButton} from '@mui/lab';
import { useState } from "react";
import useFetchProduct from "./useFetchProduct";
import getRandomizeIndixes from './getRandomizeIndixes';


export default function App() {
  const [quantity, setQuantity] = useState(0)
  const [size, setSize] = useState('')
  const [index, setIndex] = useState(0);

  const { products } = useFetchProduct(
    "https://sw-coding-challenge.herokuapp.com/api/v1/products",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNvZGVyIn0.B1QyKzKxzpxay1__A8B85ij32rqFoOIAFGDqBmqXhvs"
  );

  const handleIncrement = () => {
    setQuantity(quantity+1)
  }

  const handleDecrement = () => {
    setQuantity(quantity-1)
  }

  const setNewDisplay = () => {
    setIndex(index < products?.d.length ? index + 1 : 0)
  }

  if(!products) return <div>Loading</div>

  const productList = products.d;
  const {name, description, imageUrl, salePrice, originalPrice, sizes} = productList[index]

  const recommendedProducts = getRandomizeIndixes(productList.length, 2).map(i => productList[i])
  
  return (
    <Stack spacing={1} width={400}>

      <LoadingButton variant='contained' color='primary' onClick={setNewDisplay}>Change Display</LoadingButton>

      <QuantityCard
        name={name}
        description={description}
        imageUrl={imageUrl}
        salePrice={salePrice}
        originalPrice={originalPrice}
        quantity={quantity}
        maxQuantity={10}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />

      <SizeSelector
        logo={imageUrl}
        brand={name}
        product={description}
        originalPrice={originalPrice}
        salePrice={salePrice}
        selected={size}
        setSelected={setSize}
        sizes={sizes}
      />
      <Recommended recommendedProducts={recommendedProducts}/>
    </Stack>
  );
}