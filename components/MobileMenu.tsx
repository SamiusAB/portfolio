import Link from 'next/link'
import { Menu } from '@headlessui/react'

function MyLink(props:any) {
  let { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  )
}

function MobileMenu() {
  return (
    <Menu as="div" className="relative inline-block text-center">
      <div>
      <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
            </path>
        </svg>
      </Menu.Button>
      </div>
      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item className="group flex rounded-md items-center w-full px-2 py-2 text-sm justify-center">
          <MyLink href="/">Home</MyLink>
        </Menu.Item>
        <Menu.Item className="group flex rounded-md items-center w-full px-2 py-2 text-sm justify-center">
          <MyLink href="/work">Work</MyLink>
        </Menu.Item>
        <Menu.Item className="group flex rounded-md items-center w-full px-2 py-2 text-sm justify-center">
          <MyLink href="/contact">Contact</MyLink>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default MobileMenu;