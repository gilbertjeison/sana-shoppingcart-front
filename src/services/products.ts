import axios from 'axios';
import { IGetProductsResponse } from '../models/product';

const urlCatalog = 'https://localhost:7090/api/catalog';

export const getCatalog = async () => {
    let response: IGetProductsResponse;
    response = await axios.get(urlCatalog);
    const { data } = response || [];
    return data;
}