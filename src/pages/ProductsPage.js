import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import axios from 'axios';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const [filteredTravel, setFilteredTravel] = useState([]);
  const [render, setRender] = useState(false);

  //-----------------------------------------------------------------------------
  const getTravel = async () => {
    try {
      const result = await axios.get('http://localhost:8000/travel');
      console.log(result.data.travel);
      setFilteredTravel(result.data.travel);
    } catch (err) {
      console.log('ERR', err);
    }
  };

  const deleteTravel = async (_id) => {
    try {
      const result = await axios.delete(`http://localhost:8000/travel/${_id}`);
      setRender(!render);
    } catch (err) {
      console.log('ERR', err);
    }
  };
  useEffect(() => {
    console.log('-----');
    getTravel();
  }, [!render]);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> Dashboard: Products | Minimal UI </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>

        <ProductList filteredTravel={filteredTravel} />
        <ProductCartWidget />
      </Container>
    </>
  );
}
