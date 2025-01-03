import Navbar from "@/components/navbar";
import Shop from "./products/page";

export default function Home() {
  return (
   <div className="flex flex-col items-center">
    <Shop />
   </div>
  );
}
