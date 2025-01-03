import Product1 from "@/components/product1";
import Product2 from "@/components/product2";
import Product3 from "@/components/product3";
import Product4 from "@/components/product4";

export default function Shop() {
    return (
       <div className="flex flex-col items-center">
       <div className="max-w-[1440px] h-auto">
            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-16 py-12">
                <Product1 />
                <Product2 />
                <Product3 />
                <Product4 />
                <Product1 />
                <Product2 />
                <Product3 />
                <Product4 />
            </div>
        </div>
        </div>
    )
}