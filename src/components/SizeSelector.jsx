import { Stack, Typography, Button } from "@mui/material";
import { NewPrice } from "./QuantityCard";

const SizeButtons = ({sizes, selected, setSelected}) => {
    return (
      <Stack direction="row" justifyContent="space-between">
        {sizes.map((size, i) => (
          <Button
            key={i}
            variant='outlined'
            bgcolor="white"
            disabled={!size.isAvailable}
            sx={{ borderColor: size.label === selected ? "black" : 'grey.200', color: "black" }}
            onClick={() => setSelected(size.label)}
          >
            {size.label}
          </Button>
        ))}
      </Stack>
    );
}

const SizeSelector = ({
  logo,
  brand,
  product,
  originalPrice,
  salePrice,
  sizes,
  selected,
  setSelected,
  width=400
}) => {
  return (
    <Stack spacing={1.5} bgcolor="white" p={2} borderRadius={2} width={width}>

      <Stack direction="row" spacing={2} alignItems="center">
        <img src={logo} width={30} height={30} />
        <Stack fontSize={14} fontWeight="bold">
          {brand}
        </Stack>
      </Stack>

      <Typography variant="h5" fontWeight="bold" noWrap={false}>
        {product}
      </Typography>

      <NewPrice originalPrice={originalPrice} salePrice={salePrice} />

      <SizeButtons
        sizes={sizes}
        selected={selected}
        setSelected={setSelected}
      />
    </Stack>
  );
};

export default SizeSelector;