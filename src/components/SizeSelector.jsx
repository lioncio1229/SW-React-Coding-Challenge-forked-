import { Stack, Typography, Button } from "@mui/material";
import { NewPrice } from "./QuantityCard";


const example = 
    [
        {
            "isAvailable": false,
            "label": "XS"
        },
        {
            "isAvailable": true,
            "label": "S"
        },
        {
            "isAvailable": true,
            "label": "M"
        },
        {
            "isAvailable": false,
            "label": "L"
        },
        {
            "isAvailable": true,
            "label": "XL"
        }
    ]

const SizeButtons = ({sizes}) => {
    return (
        <Stack direction='row' justifyContent='space-between'>
            {
                sizes.map(size => (
                    <Button variant='outlined' bgcolor='white' disabled={size.isAvailable} sx={{borderColor : 'black', color : 'black'}}>
                        {size.label}
                    </Button>
                ))
            }
        </Stack>
    )
}

const SizeSelector = ({logo, brand, product, oldPrice, newPrice}) => {
    return (
        <Stack spacing={1.5} bgcolor='white' p={2} borderRadius={2} width={400}>
            <Stack fontSize={14} fontWeight="bold"> {brand} </Stack>
            <Stack variant='h4' fontWeight='bold'> {product} </Stack>
            <NewPrice oldPrice={oldPrice} newPrice={newPrice} />
            <SizeButtons sizes={example} />
        </Stack>
    );
}
 
export default SizeSelector;