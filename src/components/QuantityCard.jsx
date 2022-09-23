import { Box, Stack, Typography, Button } from "@mui/material";

const AddRemoveButton = () => {
    return (
        <Stack direction='rows' sx={{border : '1px solid #dfdfdf'}} alignItems='center' justifyContent='space-between' borderRadius={2}>
            <Button variant="text"><Typography color='black' variant='h5'>-</Typography></Button>
            <Typography fontSize={19}>2</Typography>
            <Button variant="text"><Typography color='black' variant='h5'>+</Typography></Button>
        </Stack>
    )
}

const QuantityCard = ({price='$100', passPrice='$120', width=400, imageSize=135}) => {
    return (
        <Stack gap={2} direction='rows' width={width} bgcolor='white' p={2} borderRadius={2}>
            <Box width={imageSize} height={imageSize} bgcolor='#dfdfdf' borderRadius={2}></Box>
            <Stack spacing={1}>
                <Typography fontSize={14}> <b>Mansanas</b> This is Mansanas </Typography>
                <Typography color='#5f6063' fontSize={14}>Philippines Mansanas</Typography>
                <AddRemoveButton/>
                <Stack direction='rows' gap={3}>
                    <Typography fontWeight='bold'>{price}</Typography>
                    <Typography sx={{textDecoration : 'line-through', color : '#bbbcbd', fontStyle : 'italic'}}>{passPrice}</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default QuantityCard;