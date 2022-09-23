import { Stack, Box, Typography, IconButton } from "@mui/material";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";

const iconPosition = {
  position: "absolute",
  top: 10,
  right: 10
};

const ProductCard = ({
  name,
  description,
  price,
  size = 170,
  isFavorite,
  setIsFavorite,
}) => (
  <Stack spacing={1}>
    <Box
      width={size}
      height={size}
      bgcolor="#f4f4f4"
      borderRadius={2}
      position="relative"
    >
      <Box bgcolor="white" borderRadius={2} sx={iconPosition}>
        <IconButton onClick={setIsFavorite}>
          {isFavorite ? <Favorite /> : <FavoriteBorderOutlined />}
        </IconButton>
      </Box>
    </Box>
    <Stack direction='row'>
      <Typography noWrap={false} color='#767779'>
        <b style={{color : 'black'}}>{name}</b> {description}
      </Typography>
    </Stack>
    <Typography fontWeight="bold">{price}</Typography>
  </Stack>
);

const RecommendedCard = ({ recommendedProducts, bgcolor = "white"}) => {
  return (
    <Stack spacing={1} bgcolor={bgcolor} p={2} borderRadius={2}>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={20} fontWeight="bold">
          Recommended for you
        </Typography>
        <Typography color="primary" fontSize={12}>
          See more
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1} justifyContent="space-between">
        <ProductCard name="Apple" description='The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality' price="$200" />
        <ProductCard name="Mansanas" description='The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality' price="$300" />
      </Stack>
    </Stack>
  );
};

export default RecommendedCard;
