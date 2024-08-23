import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import SpainFlag from "../../../assets/flags/SpainFlag";
import UnitedStatesFlag from "../../../assets/flags/UnitedStatesFlag";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(localStorage.getItem('language') || 'es');
  const { t, i18n } = useTranslation();
  const langMenuRef = useRef<HTMLDivElement | null>(null);

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
    <header className="sticky bg-[#0E100F] w-full top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 md:px-8 py-5 w-full">
        <div className="flex items-center justify-between z-10 w-full">
          {/* Open menu button */}
          <div className="items-center md:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open main menu</span>

              {/* Open */}
              <Icon
                className={`${open ? "hidden" : "block ml-[-3px]"}`}
                icon="material-symbols:menu"
                width="24"
                height="24"
              />
            </button>
          </div>

          {/* ZeilSoft Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="ZeilSoft Logo" />
            </Link>
          </div>

          {/* NavLinks */}
          <div className="hidden md:ml-6 md:flex md:flex-1">
              <div className="flex w-full items-center justify-end text-center flex-row gap-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium ${
                      isActive ? "bg-gray-700 text-gray-300" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } transition-colors duration-300`
                  }
                >
                  {t('home')}
                </NavLink>

                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium ${
                      isActive ? "bg-gray-700 text-gray-300" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } transition-colors duration-300`
                  }
                >
                  {t('about-us')}
                </NavLink>

                <NavLink
                  to="services"
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium ${
                      isActive ? "bg-gray-700 text-gray-300" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } transition-colors duration-300`
                  }
                >
                  {t('services')}
                </NavLink>

                <NavLink
                  to="projects"
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium ${
                      isActive ? "bg-gray-700 text-gray-300" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } transition-colors duration-300`
                  }
                >
                  {t('projects')}
                </NavLink>

                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium ${
                      isActive ? "bg-gray-700 text-gray-300" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } transition-colors duration-300`
                  }
                >
                  {t('contact-us')}
                </NavLink>
              </div>
          </div>

          {/* Current language Flag and Text */}
          <div
            ref={langMenuRef}
            className="flex flex-row gap-1 md:gap-2 justify-center items-center md:ml-8 lg:ml-12 relative cursor-pointer text-sm mr-[-2px] md:mr-0"
            onClick={() => setLangMenuOpen(!langMenuOpen)}
          >
            {flag}
            <div className="flex flex-row gap-2 justify-start">
              <p className="hidden md:flex text-gray-300 leading-none">{text}</p>
            </div>

            <Icon className="text-white mb-[3px]" icon="ph:caret-down-bold" width="15" height="15" />

            {/* Languages Modal */}
            <div
              className={`absolute top-full right-0 xl:-left-3.5 mt-3 bg-[#0E100F] border border-gray-700 rounded-md shadow-lg w-32 p-2 transition-all duration-300 ${
                langMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="flex flex-col gap-2">
                <button
                  className="w-full text-left text-gray-300 hover:text-white hover:bg-gray-700 px-2 py-1 transition-colors duration-150 flex flex-row gap-2 items-center"
                  onClick={() => handleLanguageChange('es', <SpainFlag />, 'Español')}
                >
                  <SpainFlag />
                  <p>Español</p>
                </button>

                <button
                  className="w-full text-left text-gray-300 hover:text-white hover:bg-gray-700 px-2 py-1 transition-colors duration-150 flex flex-row gap-2 items-center"
                  onClick={() => handleLanguageChange('en', <UnitedStatesFlag />, 'English')}
                >
                  <UnitedStatesFlag />
                  <p>English</p>
                </button>
              </div>
            </div>
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
            <button
              type="button"
              className="self-end"
              onClick={() => setOpen(false)}
            >
              <Icon className="text-white" icon="material-symbols:close" width="24" height="24" />
            </button>

            <div className="flex flex-col gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive ? "bg-gray-700 text-gray-300" : "text-gray-300 hover:bg-gray-700 hover:text-white"
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
                    isActive ? "bg-gray-700 text-gray-300" : "text-gray-300 hover:bg-gray-700 hover:text-white"
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
                    isActive ? "bg-gray-700 text-gray-300" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  } transition-colors duration-300`
                }
                onClick={() => setOpen(false)}
              >
                {t('services')}
              </NavLink>

              <NavLink
                to="projects"
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive ? "bg-gray-700 text-gray-300" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  } transition-colors duration-300`
                }
                onClick={() => setOpen(false)}
              >
                {t('projects')}
              </NavLink>

              <NavLink
                to="contact"
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive ? "bg-gray-700 text-gray-300" : "text-gray-300 hover:bg-gray-700 hover:text-white"
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