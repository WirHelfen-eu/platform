import { Fragment } from 'react'
import { signIn, signOut } from 'next-auth/client'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'

export default function Example({ session }) {
    return (
        <Popover className="relative bg-white">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <Link href="/">
                                    <a href="#">
                                        <span className="sr-only">Wirhelfen</span>
                                        <img
                                            className="h-8 w-auto sm:h-10"
                                            src="./WirHelfen_Logo_Schwarz.png"
                                            alt="Wir Helfen Logo"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="-mr-2 -my-2 md:hidden">
                                <Popover.Button className="bg-white rounded-full p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-wh-green-500">
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            <Popover.Group as="nav" className="hidden md:flex space-x-10">
                                <Link href="/" >
                                    <a className="block px-3 py-2 rounded-full text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Startseite</a>
                                </Link>
                                <Link href="/requests">
                                    <a className="block px-3 py-2 rounded-full text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Hilfsgesuche</a>
                                </Link>
                            </Popover.Group>
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                {!session && (
                                    <>
                                        <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-wh-green-600 hover:bg-wh-green-700" onClick={signIn}>sign In</button>
                                    </>
                                )}
                                {session && (
                                    <>
                                        <img className="h-8 w-auto sm:h-10 mr-5 rounded-full" src={session.user.image}></img>
                                        <span className="text-sm"> {session.user.name} </span>
                                        <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium bg-grey-600 hover:bg-grey-700" onClick={signOut}>sign Out</button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            static
                            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img
                                                className="h-8 w-auto"
                                                src="./WirHelfen_Logo_Schwarz.png"
                                                alt="Wir Helfen"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-full p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-wh-green-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-6 px-5 space-y-6">
                                    <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                                        <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                            <Link href="/" >
                                                Startseite
                                            </Link>

                                        </a>

                                        <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                            <Link href="/requests" >
                                                Hilfsgesuche
                                        </Link>
                                        </a>
                                    </div>
                                    <div>
                                        {!session && (
                                            <>
                                                <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-wh-green-600 hover:bg-wh-green-700" onClick={signIn}>sign In</button>
                                            </>
                                        )}
                                        {session && (
                                            <>  
                                            <div className="mb-5">
                                                <img className="h-8 w-auto sm:h-10 mr-5 rounded-full inline" src={session.user.image}></img>
                                                <span className="text-base font-medium text-gray-500"> {session.user.name} </span>
                                            </div>
                                                <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-wh-green-600 hover:bg-wh-green-700" onClick={signOut}>sign Out</button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}