import { CategoryType } from '../types/category';
import { isAuthenticate } from '../utils/localStorage';
import instance from './config';


const user = isAuthenticate();

export const listct = () => {
    const url = `/category`;
    return instance.get(url);
};
