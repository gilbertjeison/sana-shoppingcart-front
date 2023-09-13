import { useCallback } from 'react';
import { useProductsContext } from './ProductContextProvider';
import { getCatalog } from '../../services/products';
import { IProduct } from '../../models/product';


const useProducts = () => {
    const {
        isFetching,
        setIsFetching,
        products,
        setProducts,
    } = useProductsContext();

    const fetchProducts = useCallback(() => {
        setIsFetching(true);
        getCatalog().then((products: IProduct[]) => {
            setIsFetching(false);
            setProducts(products);
        });
    }, [setIsFetching, setProducts]);
    

    return {
        isFetching,
        fetchProducts,
        products
    };
};

export default useProducts;
