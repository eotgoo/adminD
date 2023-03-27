import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

ProductList.propTypes = {
  producsetFilteredTravel: PropTypes.array.isRequired,
};

export default function ProductList({ filteredTravel }) {
  return (
    <Grid container spacing={3}>
      {filteredTravel?.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
