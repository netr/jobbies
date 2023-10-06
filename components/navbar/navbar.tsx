'use client'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { NotificationsIcon, SearchBar } from '@/components/navbar'

interface NavigationItem {
    name: string
    href: string
}

const navigation: NavigationItem[] = [
    { name: 'Dashboard', href: '/' },
    { name: 'Listings', href: '#' },
    { name: 'Contacted', href: '#' },
    { name: 'Interviews', href: '#' },
]

const profileNavigation: NavigationItem[] = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

export default function Navbar() {
    const pathname = usePathname()

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex items-center px-2 lg:px-0">
                                <div className="flex-shrink-0">
                                    <Image
                                        alt="Your Company"
                                        className="h-8 w-auto"
                                        height={100}
                                        src="/logo.png"
                                        width={100}
                                    />
                                </div>
                                <div className="hidden lg:ml-6 lg:block">
                                    <div className="flex space-x-4">
                                        {/* Current: , Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                        {navigation.map((item) => (
                                            <Link className={clsx('rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white', pathname == item.href ? 'bg-gray-900 text-white' : '')} href={item.href} key={item.name}>
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <SearchBar />
                            <div className="flex lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon aria-hidden="true" className="block h-6 w-6" />
                                    ) : (
                                        <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="hidden lg:ml-4 lg:block">
                                <div className="flex items-center">
                                    <NotificationsIcon count={0} />

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-4 flex-shrink-0">
                                        <div>
                                            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Open user menu</span>
                                                <Image
                                                    alt=""
                                                    className="h-8 w-8 rounded-full"
                                                    height={100}
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    width={100}
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95">
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {profileNavigation.map((item) => (
                                                    <Menu.Item key={item.name}>
                                                        {({ active }) => (
                                                            <Link
                                                                className={clsx(
                                                                    active ? 'bg-gray-100' : '',
                                                                    'block px-4 py-2 text-sm text-gray-700'
                                                                )}
                                                                href={item.href}>
                                                                {item.name}
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    as={Link}
                                    className={clsx('block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white', pathname == item.href ? 'bg-gray-900 text-white' : '')}
                                    href={item.href}
                                    key={item.name}>
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                        <div className="border-t border-gray-700 pb-3 pt-4">
                            <div className="flex items-center px-5">
                                <div className="flex-shrink-0">
                                    <Image
                                        alt=""
                                        className="h-10 w-10 rounded-full"
                                        height={100}
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        width={100}
                                    />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-white">Tom Cook</div>
                                    <div className="text-sm font-medium text-gray-400">tom@example.com</div>
                                </div>
                                <NotificationsIcon className={'ml-auto'} count={3} />
                            </div>
                            <div className="mt-3 space-y-1 px-2">
                                {profileNavigation.map((item) => (
                                    <Disclosure.Button
                                        as={Link}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                        href={item.href}
                                        key={item.name}>
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}