import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';

// @mui
import { Container, Stack, Typography, Box, Button } from '@mui/material';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import Iconify from '../components/iconify/Iconify';
import { CategoryContext } from '../Context/catContext';
// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);

  //-----------------------------------------------------------------------------
  const [modalOpen, setModalOpen] = useState(false);
  const [isNew, setIsNew] = useState();

  const handleClose = () => {
    setModalOpen(false);
  };

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
        <Box>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" sx={{ mb: 5 }}>
              Travel
            </Typography>
            <Button
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
              onClick={() => {
                setModalOpen(true);
                setIsNew(false);
              }}
            >
              New Travel
            </Button>
          </Stack>
        </Box>

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

        <ProductList
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          isNew={isNew}
          setIsNew={setIsNew}
          handleClose={handleClose}
        />
        <ProductCartWidget />
      </Container>
    </>
  );
}
