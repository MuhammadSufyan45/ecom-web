'use client';
import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import "tailwindcss/tailwind.css";
import main from '../../public/main.png';
import cart2 from '../../public/cart2.png';

export default function Navbar() {
    // State to toggle the cart modal
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Toggle cart visibility
    const toggleCart = () => setIsCartOpen((prev) => !prev);

    return (
            <div className="w-full h-auto sm:px-8 sm:py-4 px-4 py-2 relative">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-x-1">
                        <Image src={Logo} alt="Logo" width={38} height={15} />
                        <h2 className="font-bold text-2xl">Furniro</h2>
                    </div>
                    {/* Icons */}
                    <div className="flex items-center gap-x-4">
                        <Image src='/profile.png' alt="profile" width={20} height={0} />
                        <Image src='/search.png' alt="search" width={20} height={0}/>
                        <Image src='/heart.png' alt="heart" width={20} height={0}/>
                        <button onClick={toggleCart} className="relative">
                            <Image src='/cart.png' alt="cart" width={20} height={0}/>
                        </button>
                    </div>
                </div>

                {/* Backdrop Overlay */}
                {isCartOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-20"
                        onClick={toggleCart} // Close on backdrop click
                    />
                )}

                {/* Cart Modal as a Dropdown */}
                {isCartOpen && (
                    <div className="absolute space-y-24 right-0 top-12 bg-white p-6 rounded-lg shadow-lg w-80 max-w-xs z-30">
                        {/* Top */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold">Shopping Cart</h3>
                                <button onClick={toggleCart} className="text-xl font-semibold"><Image src='/cartclose.png' width={20} height={0} alt="cartclose" /></button>
                            </div>
                            <div className="w-[200px] h-[1px] bg-gray-200" />
                            <div className="space-y-4 mt-4">
                                <div className="flex gap-x-6 items-center font-poppins">
                                    <Image src={main} alt="sofa" className="w-[70px] bg-[#F9F1E7]" />
                                    <div className="space-y-2 text-xs">
                                        <h4>Asgaard sofa</h4>
                                        <div className="flex gap-x-4">
                                            <p>1</p>
                                            <p>x</p>
                                            <p className="text-[#B88E2F]">Rs. 250,000.00</p>
                                        </div>
                                    </div>
                                    <Image src='/cut.png' width={20} height={0} alt="cut" className="w-[18px] h-[18px]" />
                                </div>
                                <div className="flex gap-x-6 items-center font-poppins">
                                    <Image src={cart2} alt="sofa" className="w-[70px] bg-[#F9F1E7]" />
                                    <div className="space-y-2 text-xs">
                                        <h4>Casaliving Wood</h4>
                                        <div className="flex gap-x-4">
                                            <p>1</p>
                                            <p>x</p>
                                            <p className="text-[#B88E2F]">Rs. 270,000.00</p>
                                        </div>
                                    </div>
                                    <Image src='/cut.png' width={20} height={0} alt="cut" className="w-[18px] h-[18px]" />
                                </div>
                            </div>
                        </div>
                        {/* Bottom */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-semibold">Subtotal</h3>
                                <h3 className="text-sm text-[#B88E2F]">Rs. 520,000.00</h3>
                            </div>
                            <div className="w-full h-[1px] bg-gray-200" />
                            <div className="flex gap-x-4">
                               <button className="text-xs border-2 border-gray-500 rounded-lg px-4 py-1 hover:bg-gray-500 hover:text-white">Cart</button>
                               <button className="text-xs border-2 border-gray-500 rounded-lg px-4 py-1 hover:bg-gray-500 hover:text-white">Checkout</button>
                                <button className="text-xs border-2 border-gray-500 rounded-lg px-4 py-1 hover:bg-gray-500 hover:text-white">Comparison</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
    );
}
