import { SanityAsset } from "@sanity/image-url/lib/types/types";

export interface Product {

    _id: string;
    productName: string;
    description: string;
    type:"product";    
    image?:{
        asset:{
            ref : string ;
            _type: "image";
        }
    };
    slug : {
        _type : "slug";
        current:string;
    },
    price: number;
    category:string;
    discountPercentage:number;
    priceWithoutDiscount:number;
    rating:number;
    ratingCount:number;
    tags:string[];
    sizes:string[];
    inventory:number;

}