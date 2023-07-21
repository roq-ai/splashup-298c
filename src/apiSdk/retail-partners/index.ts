import axios from 'axios';
import queryString from 'query-string';
import { RetailPartnerInterface, RetailPartnerGetQueryInterface } from 'interfaces/retail-partner';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRetailPartners = async (
  query?: RetailPartnerGetQueryInterface,
): Promise<PaginatedInterface<RetailPartnerInterface>> => {
  const response = await axios.get('/api/retail-partners', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createRetailPartner = async (retailPartner: RetailPartnerInterface) => {
  const response = await axios.post('/api/retail-partners', retailPartner);
  return response.data;
};

export const updateRetailPartnerById = async (id: string, retailPartner: RetailPartnerInterface) => {
  const response = await axios.put(`/api/retail-partners/${id}`, retailPartner);
  return response.data;
};

export const getRetailPartnerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/retail-partners/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRetailPartnerById = async (id: string) => {
  const response = await axios.delete(`/api/retail-partners/${id}`);
  return response.data;
};
