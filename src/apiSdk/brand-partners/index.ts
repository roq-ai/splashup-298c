import axios from 'axios';
import queryString from 'query-string';
import { BrandPartnerInterface, BrandPartnerGetQueryInterface } from 'interfaces/brand-partner';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBrandPartners = async (
  query?: BrandPartnerGetQueryInterface,
): Promise<PaginatedInterface<BrandPartnerInterface>> => {
  const response = await axios.get('/api/brand-partners', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createBrandPartner = async (brandPartner: BrandPartnerInterface) => {
  const response = await axios.post('/api/brand-partners', brandPartner);
  return response.data;
};

export const updateBrandPartnerById = async (id: string, brandPartner: BrandPartnerInterface) => {
  const response = await axios.put(`/api/brand-partners/${id}`, brandPartner);
  return response.data;
};

export const getBrandPartnerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/brand-partners/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBrandPartnerById = async (id: string) => {
  const response = await axios.delete(`/api/brand-partners/${id}`);
  return response.data;
};
