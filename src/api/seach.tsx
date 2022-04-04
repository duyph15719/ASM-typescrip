import { ProductType } from '../types/product';
import { isAuthenticate } from '../utils/localStorage';
import instance from './config';

export const read = (name: string) => {
    const url = `/products/${name}`;
    return instance.get(url);
};