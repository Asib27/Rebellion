import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Transition } from "@headlessui/react";
import { Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NavBar(){
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 text-xl bg-white border-gray-200 dark:bg-gray-900 z-50">
        <div className="flex items-center justify-between mx-auto py-4 px-8 gap-4 ">
          <div className="">
            <Link href="/home" className="flex items-center space-x-3">
              <img
                src="/images/Rebellion_trans.svg"
                className="h-10"
                alt="Rebellion Logo"
              />
              <p className="self-center text-3xl font-semibold dark:text-white">
                REBELLION
              </p>
            </Link>
          </div>

          <div
            className="hidden md:block"
            id="navbar-cta"
          >
            <ul className="flex font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8  md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/home"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/checkout"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
                >
                  Checkout
                </Link>
              </li>
              {/* <li>
                  <Link href="/tracking" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tracking</Link>
                </li> */}
            </ul>
          </div>

          <div className="hidden md:flex md:items-center md:gap-5">
            <ModeToggle className='cursor-pointer'/>
            <ShoppingCart className='cursor-pointer' size={30} />
            <Button >
              SignIn
            </Button>
          </div>
          <div className="cursor-pointer sm:block md:hidden">
            {
              !open? < Menu onClick={() => setOpen(!open)} /> :  <X onClick={() => setOpen(!open)} />
            }
            
          </div>
        </div>
        <Transition className="md:hidden" show={open}>
        <div  class={cn("px-6 pt-2 pb-4 transition duration-300 ease-in data-[closed]:-translate-y-full border-gray-200 dark:bg-gray-900")}>
          <Link href="/home" class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Home </Link>
          <Link href="/products" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Products</Link>
          <Link href="/checkout" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Checkout</Link>
          <Link href="/cart" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Cart</Link>
          <Link href="/sign-in" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">SignIn</Link>
          
        </div>
        </Transition>
        
        
      </nav>
  )
}