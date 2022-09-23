import { Stack, Box, Typography } from "@mui/material";
import { FavoriteBorderOutlined } from "@mui/icons-material";

const iconPosition = {
  position: "absolute",
  top: 10,
  right: 10
};

const ProductCard = ({ name, price, size = 170 }) => (
  <Stack spacing={1}>
    <Box
      width={size}
      height={size}
      bgcolor="#f4f4f4"
      borderRadius={2}
      position="relative"
    >
      <Box bgcolor="white" p={0.8} borderRadius={2} sx={iconPosition}>
        <FavoriteBorderOutlined />
      </Box>
    </Box>
    <Typography>{name}</Typography>
    <Typography fontWeight="bold">{price}</Typography>
  </Stack>
);

const RecommendedCard = ({ bgcolor = "white", width = 400 }) => {
  return (
    <Stack spacing={1} width={width} bgcolor={bgcolor} p={2} borderRadius={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={20} fontWeight="bold">
          Recommended for you
        </Typography>
        <Typography color="primary" fontSize={12}>
          See more
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1} justifyContent="space-between">
        <ProductCard name="Apple" price="$200" />
        <ProductCard name="Mansanas" price="$300" />
      </Stack>
    </Stack>
  );
};

export default RecommendedCard;
