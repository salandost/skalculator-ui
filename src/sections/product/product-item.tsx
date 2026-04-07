import type { Product } from 'src/state/types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export type ProductItemProps = Product;

export function ProductItem({ product }: { product: ProductItemProps }) {
  // const renderStatus = (
  //   <Label
  //     variant="inverted"
  //     color={'info'}
  //     sx={{
  //       zIndex: 9,
  //       top: 16,
  //       right: 16,
  //       position: 'absolute',
  //       textTransform: 'uppercase',
  //     }}
  //   >
  //     {product}
  //   </Label>
  // );

  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.image}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      {/* <Typography
        component="span"
        variant="body1"
        sx={{
          color: 'text.disabled',
          textDecoration: 'line-through',
        }}
      >
        {fCurrency(product.price)}
      </Typography> */}
      &nbsp;
      {fCurrency(product.price)}
    </Typography>
  );

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {/* {product.status && renderStatus} */}
        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link
          href={`/product/${product.id}`}
          color="inherit"
          underline="hover"
          variant="subtitle2"
          noWrap
        >
          {product.name}
        </Link>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* <ColorPreview colors={product.colors} /> */}
          {renderPrice}
        </Box>
      </Stack>
    </Card>
  );
}
