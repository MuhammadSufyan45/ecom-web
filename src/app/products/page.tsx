"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartslics";



  interface Item {
    "id": number,
    "title": string,
    "Subtitle": string,
    "description": string,
    "price": string,
    "tag": string,
    "discount": string,
    "image": string 
    "quantity": number  
}

export default function Shop() {

    const [products, setProducts] = useState<Item[]>([]);
    const dispatch = useDispatch();

    async function Getusers(){
        const res = await fetch("http://localhost:3000/api/detail");
        const data = await res.json();
        return setProducts(data);
      }

      const handleAdd = (product: Item) => {
        dispatch(add(product));
      };

      useEffect(() => {
        Getusers();
      }, []);

    return (
       <div className="flex flex-col items-center">
       <div className="max-w-[1440px] h-auto">
            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-16 py-12">
                {
                    products.map((detail:Item)=>(
                        <div key={detail.id} className="sm:w-full w-[246px] h-[386px] sm:h-[466px] bg-[#F4F5F7] flex flex-col relative">
            {/* Image */}
            <div className="w-full h-[301px] relative">
                <Image
                    src={detail.image}
                    alt="Product Image"
                    width={285}
                    height={301}
                    className="object-cover w-full h-full"
                />
                <p className="bg-red-400 text-white rounded-full w-fit sm:p-2 p-1 text-center absolute top-4 right-4">{detail.tag}</p>
            </div>

            {/* Product Details */}
            <div className="p-4 sm:space-y-2 space-y-1 flex-grow">
                <Link href={`/products/${detail.id}`}>
                    <h2 className="text-[#333333] font-bold sm:text-lg text-sm font-poppins">{detail.title}</h2>
                </Link>
                <p className="text-[#898989] font-poppins sm:text-sm text-xs">{detail.Subtitle}</p>
                <div className="flex items-center gap-x-4">
                    <h2 className="text-[#333333] font-bold sm:text-lg text-sm font-poppins">Rp {detail.price}</h2>
                    <p className="text-[#898989] font-poppins text-sm line-through">{detail.discount}</p>
                </div>
                <button onClick={()=>handleAdd(detail)} className="text-sm bg-[#e9c89e] rounded p-1 font-medium sm:text-[16px]">Add to cart</button>
            </div>
        </div>
                    ))
                }
            </div>
        </div>
        </div>
    )
}