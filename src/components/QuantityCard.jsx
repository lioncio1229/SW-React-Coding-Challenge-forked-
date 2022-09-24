import { Stack, Typography, Button, Box } from "@mui/material";

export const AddRemoveButton = ({ quantity = 0, maxQuantity=100, onDecrement, onIncrement }) => (
  <Stack
    direction="rows"
    sx={{ border: "1px solid #dfdfdf" }}
    alignItems="center"
    justifyContent="space-between"
    borderRadius={2}
  >
    <Button variant="text" onClick={() => { if(quantity > 0) onDecrement() }}>
      <Typography color="black" variant="h5">
        -
      </Typography>
    </Button>

    <Typography fontSize={19}>{quantity}</Typography>

    <Button variant="text" onClick={() => { if(quantity < maxQuantity) onIncrement() }}>
      <Typography color="black" variant="h5">
        +
      </Typography>
    </Button>

  </Stack>
);

export const NewPrice = ({ originalPrice, salePrice }) => (
  <Stack direction="rows" gap={3}>
    <Typography fontWeight="bold">{salePrice}</Typography>
    <Typography
      sx={{
        textDecoration: "line-through",
        color: "#bbbcbd",
        fontStyle: "italic",
        fontSize: 14
      }}
    >
      {originalPrice}
    </Typography>
  </Stack>
);

const QuantityCard = ({
  name='',
  description='',
  quantity,
  maxQuantity,
  onDecrement,
  onIncrement,
  originalPrice = "$100",
  salePrice = "$120",
  imageSize = 135,
  imageUrl='#',
  width=400
}) => (
  <Stack gap={2} direction="rows" bgcolor="white" p={2} borderRadius={2} width={width}>

    <img src={imageUrl} width={imageSize} height={imageSize} style={{borderRadius : '5px'}} />

    <Stack spacing={1}>
      <Stack direction="row">
        <Typography noWrap={false} color="#767779">
          <b style={{ color: "black" }}>{name}</b> {description}
        </Typography>
      </Stack>

      <AddRemoveButton
        quantity={quantity}
        maxQuantity={maxQuantity}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
      />
      <NewPrice originalPrice={originalPrice} salePrice={salePrice} />
    </Stack>
  </Stack>
);

export default QuantityCard;