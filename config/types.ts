import { Dispatch, SetStateAction } from "react";

export interface SubCategoryExtended {
    _id: string,
    name: string,
    properties: Object,
}
export interface SubCategoryClass {
    name: string,
    properties: Object,
}
export interface CategoryClass {
    _id: string,
    name: string,
    subCategory: SubCategoryClass[],
    createdAt: string,
    updatedAt: string,
    __v: number
}

export interface Product {
    _id: string,
    name: string,
    images: string[],
    description: string,
    price: number,
    discountPercentage: number,
    amount: number,
    __v: number,
    category: string,
    subCategory?: string,
    categoryProperties: Object,
    createdAt: string,
    updatedAt: string,
    seller: string,
}

export interface CartResponseBody {
    userId: string,
    name: string,
    phoneNo: string,
    email: string,
    city_district_town: string,
    pinCode: string,
    address: string,
    products: string[],
}

export interface CartOrderProps {
    name: string, 
    setName: Dispatch<SetStateAction<string>>, 
    phoneNumber: string, 
    setPhoneNumber: Dispatch<SetStateAction<string>>, 
    email: string, 
    setEmail: Dispatch<SetStateAction<string>>,
    city: string, 
    setCity: Dispatch<SetStateAction<string>>, 
    pinCode: string, 
    setPinCode: Dispatch<SetStateAction<string>>, 
    streetAddress: string, 
    setStreetAddress: Dispatch<SetStateAction<string>>,
    subTotal: number,
}