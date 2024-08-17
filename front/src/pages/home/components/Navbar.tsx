import { Icon } from "@iconify/react"
import { useState } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <nav className="bg-[#0E100F] sticky w-full top-0 z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 w-full">
          <div className="relative flex h-16 items-center justify-between z-10 w-full">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden w-full">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setOpen(!open)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* Open */}
                <Icon
                  className={`${open ? "hidden" : "block"}`}
                  icon="material-symbols:menu"
                  width="24"
                  height="24"
                />
                {/* Close */}
                <Icon
                  className={`${open ? "block" : "hidden"}`}
                  icon="material-symbols:close"
                  width="24"
                  height="24"
                />
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:flex-1">
                <div className="flex w-full items-end justify-end">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <a
                    href="#projects"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Proyectos
                  </a>
                  <a
                    href="#about"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    ¿Quienes somos?
                  </a>
                  <a
                    href="#contact"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Contacto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div
          className={`sm:hidden ${open ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/*  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

            <a
              href="#projects"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Proyectos
            </a>
            <a
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              ¿Quienes somos?
            </a>
            <a
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Navbar
