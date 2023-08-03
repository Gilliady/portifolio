'use client';

import { Transition } from '@headlessui/react';

interface MenuProps {
  isHidden: boolean;
}
const Menu = ({ isHidden }: MenuProps) => {

  return (
    <Transition
      show={!isHidden}
      enter="transition duration-[5s]"
      enterFrom="absolute top-0 left-0 right-0 z-0 w-full"
      enterTo="justify-between items-center
      max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:right-0 max-lg:z-0
      max-lg:w-full
      max-lg:transition-all 
      max-lg:transform max-lg:translate-y-20 max-lg:translate-x-0
      max-lg:bg-indigo-300
      max-lg:justify-center
      lg:w-auto lg:order-1"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="absolute top-0 left-0 right-0 z-10 w-full"
      leaveTo="absolute top-10000 left-0 right-0 z-10 w-full opacity-0"
      id='mobile-menu'
      >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50
      lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700
          lg:p-0">
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100
        hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0
        ">
              About
            </a>
          </li>
        </ul>
    </Transition>);
}

export default Menu;