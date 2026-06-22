export interface IProductItem {
    id: string,
    title: string,
    image: string,
    price: number,
    qty: number,
    totalPrice: number,
}

export type AddItemPayloadTy =
    Omit<IProductItem, 'qty' | 'totalPrice'>