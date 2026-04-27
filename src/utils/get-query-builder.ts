import type { GetParams } from 'src/state';

export const getQueryBuilder = <Filters>(params: GetParams<Filters>) => {
  const { filterBy, filterValue, sortBy, sortOrder, page, limit, withDeleted, withEntities } =
    params;
  const queryParams = new URLSearchParams();
  if (filterBy && filterValue) queryParams.append(filterBy, filterValue);
  if (sortBy) queryParams.append('sort', sortBy);
  if (sortOrder) queryParams.append('order', sortOrder);
  if (page) queryParams.append('page', page.toString());
  if (limit) queryParams.append('limit', limit.toString());
  if (withDeleted) queryParams.append('withDeleted', withDeleted.toString());
  if (withEntities && withEntities.length > 0) {
    withEntities.forEach((entity) => queryParams.append('withEntities', entity));
  }
  return queryParams.toString();
};
