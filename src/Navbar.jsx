import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Accueil", href: "#accueil", current: true },
  { name: "A propos", href: "#apropos", current: false },
  {
    name: "Stack technique",
    href: "#stacktechnique",
    current: false,
  },
  { name: "Projects", href: "#projects", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-600" id="accueil">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-start mr-9">
                <div className="flex flex-shrink-0 items-center">
                  <span className="h-8 w-auto text-white text-xl">KRE</span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

// import { BsMoonFill, BsSunFill } from "react-icons/bs";

// const Navbar = () => {
//   return (
//     <nav className="bg-base-200">
//       <div className="navbar align-element">
//         <div className="navbar-start">
//           <h2 className="text-4xl  items-center">
//             K<span className="text-emerald-600">R</span>E
//           </h2>
//         </div>
//         <div className="navbar-center">
//           <div className="align-element px-8 py-8 flex flex-col sm:flex-row sm:gap-x-16 sm:py-8">
//             <div className="flex gap-x-3">
//               <a
//                 href=""
//                 className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
//               >
//                 Accueil
//               </a>
//               <a
//                 href=""
//                 className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
//               >
//                 Stack technique
//               </a>
//               <a
//                 href=""
//                 className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
//               >
//                 Projets
//               </a>
//               <a
//                 href=""
//                 className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
//               >
//                 A propos
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="navbar-end">
//           <label className="swap swap-rotate">
//             <input type="checkbox" onChange="" />
//             <BsSunFill className="swap-on h-4 w-4" />
//             <BsMoonFill className="swap-off h-4 w-4" />
//           </label>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
