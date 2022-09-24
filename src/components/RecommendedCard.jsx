import { Stack, Box, Typography, IconButton } from "@mui/material";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";

const iconPosition = {
  position: "absolute",
  top: 3,
  right: 3
};

const ProductCard = ({
  name,
  description,
  price,
  imageUrl,
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
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <img src={imageUrl} width='75%' height='auto' />
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
        {
          recommendedProducts.map(v => (
            <ProductCard
              name={v.name}
              description={v.description}
              price={v.salePrice}
              imageUrl={v.imageUrl}
            />
          ))
        }
      </Stack>
    </Stack>
  );
};

export default RecommendedCard;
