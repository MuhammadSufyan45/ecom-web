import Image from "next/image";
import Link from "next/link";

async function Getusers(){
    const res = await fetch("http://localhost:3000/api/detail");
    const data = await res.json();
    return data;
  }

export default async function Product2() {
    const data = await Getusers();
    const detail = data[1];
    return (
        <div className="sm:w-full w-[246px] h-[346px] sm:h-[446px] bg-[#F4F5F7] flex flex-col relative">
            {/* Image */}
            <div className="w-full h-[301px] relative">
                <Image
                    src={"/image 2.png"}
                    alt="Product Image"
                    width={285}
                    height={301}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Product Details */}
            <div className="p-4 sm:space-y-2 space-y-1 flex-grow">
                <Link href={`/products/${detail.id}`}>
                    <h2 className="text-[#333333] font-bold sm:text-lg text-sm font-poppins">{detail.title}</h2>
                </Link>
                <p className="text-[#898989] font-poppins sm:text-sm text-xs">{detail.Subtitle}</p>
                <div className="flex items-center gap-x-4">
                    <h2 className="text-[#333333] font-bold sm:text-lg text-sm font-poppins">{detail.price}</h2>
                </div>
            </div>
        </div>
    );
}
