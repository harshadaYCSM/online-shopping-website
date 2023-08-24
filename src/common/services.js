import { PRODUCT_API } from "./api";

export const fetchProducts = () => {
    return fetch(PRODUCT_API)
        .then(res => res.json());
};