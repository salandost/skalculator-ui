import { CONFIG } from 'src/config-global';

import { ProductView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Product - ${CONFIG.appName}`}</title>

      <ProductView />
    </>
  );
}
