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

export const NewPrice = ({ oldPrice, newPrice }) => (
  <Stack direction="rows" gap={3}>
    <Typography fontWeight="bold">{newPrice}</Typography>
    <Typography
      sx={{
        textDecoration: "line-through",
        color: "#bbbcbd",
        fontStyle: "italic",
        fontSize: 14
      }}
    >
      {oldPrice}
    </Typography>
  </Stack>
);

const QuantityCard = ({
  name = "Mansanas",
  description = "So this is mansanas from baguio. this is super fresh. mansanas from san pablo",
  quantity,
  maxQuantity,
  onDecrement,
  onIncrement,
  oldPrice = "$100",
  newPrice = "$120",
  imageSize = 135,
  imageUrl,
}) => (
  <Stack gap={2} direction="rows" bgcolor="white" p={2} borderRadius={2}>

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
      <NewPrice oldPrice={oldPrice} newPrice={newPrice} />
    </Stack>
  </Stack>
);

export default QuantityCard;