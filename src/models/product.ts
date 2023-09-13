export interface IProduct {
    id: number;
    sku: number;
    productName: string;
    description: string;
    availableSizes: string[];
    style: string;
    price: number;
    installments: number;
    image: string;
};

export interface IGetProductsResponse {
    data: IProduct[];
}