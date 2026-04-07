import type { SelectChangeEvent } from '@mui/material/Select';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

import { DashboardContent } from 'src/layouts/dashboard';
import { useProductStore, useCategoryStore } from 'src/state';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export function ProductView() {
  const { id } = useParams();
  const {
    item: product,
    isLoading,
    error,
    getItem: getProduct,
    createItem,
    updateItem,
    deleteItem,
  } = useProductStore();
  const { data: categories, getData: getCategories } = useCategoryStore();

  useEffect(() => {
    console.log('ProductView: useEffect called with id', id);
    if (id) {
      getProduct?.(parseInt(id, 10));
      getCategories();
    }
  }, [id, getProduct, getCategories]);

  const [categoryName, setCategoryName] = useState<string[]>([]);

  const handleCategoryChange = (event: SelectChangeEvent<typeof categoryName>) => {
    const {
      target: { value },
    } = event;
    setCategoryName(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <DashboardContent>
      {!isLoading && error === null && product ? (
        <FormControl variant="outlined" fullWidth>
          <Stack
            sx={{
              my: 1,
              gap: 1,
              flexShrink: 0,
              display: 'flex',
            }}
            spacing={2}
          >
            <TextField value={product?.name} label="Name" variant="outlined" />
            <TextField
              value={product?.description}
              label="Description"
              variant="outlined"
              multiline
            />
            <TextField value={product?.price} label="Price" variant="outlined" type="number" />
            <TextField value={product?.sku} label="SKU" variant="outlined" type="number" />
            <TextField value={product?.image} label="Image URL" variant="outlined" />
            <FormControl fullWidth>
              <InputLabel id="multiple-category-label">Category</InputLabel>
              <Select
                labelId="multiple-category-label"
                id="multiple-category"
                multiple
                value={categoryName}
                onChange={handleCategoryChange}
                input={<OutlinedInput label="Category" />}
                MenuProps={MenuProps}
              >
                {categories.map((category: typeof categories[number]) => (
                  <MenuItem key={category.id} value={category.name}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="outlined">Update</Button>
          </Stack>
        </FormControl>
      ) : (
        'Loading...'
      )}
    </DashboardContent>
  );
}
