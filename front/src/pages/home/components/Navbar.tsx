import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useLocation } from "react-router-dom";
import SpainFlag from "../../../assets/flags/SpainFlag";
import UnitedStatesFlag from "../../../assets/flags/UnitedStatesFlag";
import DarkModeSwitcher from "../../../components/DarkModeSwitcher";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(localStorage.getItem('language') || 'es');
  const { t, i18n } = useTranslation();
  const langMenuRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();

  // useEffect para manejar clics fuera del menú
  useEffect(() => {
    // Función que cierra el menú si se hace clic fuera de él
    const handleClickOutside = (event: any) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
    };

    // Agregar event listener al documento
    document.addEventListener('mousedown', handleClickOutside);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (lang: string, flag: JSX.Element, text: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    console.log(flag.type, text.length);
    
    setCurrentLang(lang);
    setLangMenuOpen(false);
  };

  const getFlagAndText = () => {
    switch (currentLang) {
      case 'en':
        return { flag: <UnitedStatesFlag />, text: 'English' };
      case 'es':
      default:
        return { flag: <SpainFlag />, text: 'Español' };
    }
  };

  const { flag, text } = getFlagAndText();

  return (
    <header className="sticky bg-[#0F0F0F] w-full top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 md:px-8 py-5 w-full">
        <div className="flex items-center justify-between z-10 w-full">
          {/* Open menu button */}
          <div className="items-center md:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md text-light hover:bg-main/80 hover:text-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open main menu</span>

              {/* Open */}
              <Icon
                className={`${open ? "block" : "block ml-[-3px]"}`}
                icon="material-symbols:menu"
                width="24"
                height="24"
              />
            </button>
          </div>

          {/* ZeilSoft Logo */}
          <div className="flex items-center">
            <Link to="/">
              <Icon icon="ri:tailwind-css-fill" width="32" height="32" className="text-main" />
              {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="ZeilSoft Logo" /> */}
            </Link>
          </div>

          {/* NavLinks */}
          <div className="hidden md:ml-6 md:flex md:flex-1">
            <div className="flex w-full items-center justify-end text-center flex-row gap-2 re">

              {/* <NavLink
                to="/"
                className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-main transition-all duration-300 ${pathname === '/' ? 'text-main' : 'text-light'}`}
              >
                {t('home')}
                <span
                  className={`h-[2.5px] inline-block bg-main absolute left-0 bottom-[1px] transition-[width] ease duration-300 ${pathname === '/' ? 'w-full' : 'w-0'}`}
                >
                  &nbsp;
                </span>
              </NavLink>

              <NavLink
                to="/about"
                className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-main transition-all duration-300 ${pathname === '/about' ? 'text-main' : 'text-light'}`}
              >
                {t('about-us')}
                <span
                  className={`h-[2.5px] inline-block bg-main absolute left-0 bottom-[1px] transition-[width] ease duration-300 
                    ${pathname === '/about' ? 'w-full' : 'w-0'}`}
                >
                  &nbsp;
                </span>
              </NavLink>

              <NavLink
                to="/services"
                className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-main transition-all duration-300 ${pathname === '/services' ? 'text-main' : 'text-light'}`}
              >
                {t('services')}
                <span
                  className={`h-[2.5px] inline-block bg-main absolute left-0 bottom-[1px] transition-[width] ease duration-300 
                    ${pathname === '/services' ? 'w-full' : 'w-0'}`}
                >
                  &nbsp;
                </span>
              </NavLink>

              <NavLink
                to="/contact"
                className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-main transition-all duration-300 ${pathname === '/contact' ? 'text-main' : 'text-light'}`}
              >
                {t('contact-us')}
                <span
                  className={`h-[2.5px] inline-block bg-main absolute left-0 bottom-[1px] transition-[width] ease duration-300 
                    ${pathname === '/contact' ? 'w-full' : 'w-0'}`}
                >
                  &nbsp;
                </span>
              </NavLink> */}

              <NavLink
                to="/"
                className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-main transition-all duration-300 ${pathname === '/' ? 'text-main' : 'text-light'}`}
              >
                {t('home')}
                <span
                  className={`h-[2.5px] inline-block bg-main absolute left-1/2 -translate-x-1/2 bottom-[1px] transition-[width] ease duration-[400ms] ${pathname === '/' ? 'w-[80%]' : 'w-0'}`}
                >
                  &nbsp;
                </span>
              </NavLink>

              <NavLink
                to="/about"
                className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-main transition-all duration-300 ${pathname === '/about' ? 'text-main' : 'text-light'}`}
              >
                {t('about-us')}
                <span
                  className={`h-[2.5px] inline-block bg-main absolute left-1/2 -translate-x-1/2 bottom-[1px] transition-[width] ease duration-[400ms] ${pathname === '/about' ? 'w-[80%]' : 'w-0'}`}
                >
                  &nbsp;
                </span>
              </NavLink>

              <NavLink
                to="/services"
                className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-main transition-all duration-300 ${pathname === '/services' ? 'text-main' : 'text-light'}`}
              >
                {t('services')}
                <span
                  className={`h-[2.5px] inline-block bg-main absolute left-1/2 -translate-x-1/2 bottom-[1px] transition-[width] ease duration-[400ms] ${pathname === '/services' ? 'w-[80%]' : 'w-0'}`}
                >
                  &nbsp;
                </span>
              </NavLink>

              <NavLink
                to="/contact"
                className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-main transition-all duration-300 ${pathname === '/contact' ? 'text-main' : 'text-light'}`}
              >
                {t('contact-us')}
                <span
                  className={`h-[2.5px] inline-block bg-main absolute left-1/2 -translate-x-1/2 bottom-[1px] transition-[width] ease duration-[400ms] ${pathname === '/contact' ? 'w-[80%]' : 'w-0'}`}
                >
                  &nbsp;
                </span>
              </NavLink>




              {/* <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "text-main border-b-2 border-main"
                      : "text-light hover:text-main"
                  } transition-colors duration-300`
                }
              >
                {t('home')}
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "text-main border-b-2 border-main"
                      : "text-light hover:text-main"
                  } transition-colors duration-300`
                }
              >
                {t('about-us')}
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "text-main border-b-2 border-main"
                      : "text-light hover:text-main"
                  } transition-colors duration-300`
                }
              >
                {t('services')}
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "text-main border-b-2 border-main"
                      : "text-light hover:text-main"
                  } transition-colors duration-300`
                }
              >
                {t('contact-us')}
              </NavLink> */}

            </div>
          </div>

          {/* Current language Flag and Text */}
          <div className="flex flex-row gap-4">
            <div
              ref={langMenuRef}
              className="flex flex-row gap-1 md:gap-2 justify-center items-center md:ml-8 lg:ml-12 relative cursor-pointer text-sm mr-[-2px] md:mr-0"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
            >
              {flag}
              <div className="flex flex-row gap-2 justify-start">
                <p className="hidden md:flex text-light leading-none">{text}</p>
              </div>

              <Icon className="text-light mb-[3px]" icon="ph:caret-down-bold" width="15" height="15" />

              {/* Languages Modal */}
              <div
                className={`absolute top-full right-0 xl:-left-3.5 mt-3 bg-[#0E100F] rounded-md w-32 p-2 transition-all duration-300 ${
                  langMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="flex flex-col gap-2">
                  <button
                    className="w-full text-left text-light hover:text-light rounded-sm hover:bg-main/80 px-2 py-1 transition-colors duration-150 flex flex-row gap-2 items-center"
                    onClick={() => handleLanguageChange('es', <SpainFlag />, 'Español')}
                  >
                    <SpainFlag />
                    <p>Español</p>
                  </button>

                  <button
                    className="w-full text-left text-light hover:text-light rounded-sm hover:bg-main/80 px-2 py-1 transition-colors duration-150 flex flex-row gap-2 items-center"
                    onClick={() => handleLanguageChange('en', <UnitedStatesFlag />, 'English')}
                  >
                    <UnitedStatesFlag />
                    <p>English</p>
                  </button>
                </div>
              </div>
            </div>

            <DarkModeSwitcher className="hidden md:flex" />
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-start z-50 md:hidden transition-all duration-300 ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className={`bg-[#0E100F] w-[280px] h-full p-6 flex flex-col gap-6 transition-all duration-300 ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          > 
            <div className="flex flex-row items-center justify-between">
              <DarkModeSwitcher className="w-fit ml-[8px]" />
              <button
                type="button"
                className="self-start"
                onClick={() => setOpen(false)}
              >
                <Icon className="text-light" icon="material-symbols:close" width="24" height="24" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive ? "bg-main text-light" : "text-light hover:bg-main/80 hover:text-light"
                  } transition-colors duration-300`
                }
                onClick={() => setOpen(false)}
              >
                {t('home')}
              </NavLink>

              <NavLink
                to="about"
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive ? "bg-main text-light" : "text-light hover:bg-main/80 hover:text-light"
                  } transition-colors duration-300`
                }
                onClick={() => setOpen(false)}
              >
                {t('about-us')}
              </NavLink>

              <NavLink
                to="services"
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive ? "bg-main text-light" : "text-light hover:bg-main/80 hover:text-light"
                  } transition-colors duration-300`
                }
                onClick={() => setOpen(false)}
              >
                {t('services')}
              </NavLink>

              <NavLink
                to="contact"
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive ? "bg-main text-light" : "text-light hover:bg-main/80 hover:text-light"
                  } transition-colors duration-300`
                }
                onClick={() => setOpen(false)}
              >
                {t('contact-us')}
              </NavLink>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;