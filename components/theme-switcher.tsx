import { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

import { Sun, Moon, Check } from "lucide-react";
import { BsFillMoonFill } from "react-icons/bs";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme, themes } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Listbox value={ theme } onChange={(value) => setTheme(value)}>
        {({ open }) => {
          const iconClassName = clsx(
            "w-4 h-4 text-primary cursor-pointer transition-colors", resolvedTheme === "dark" && "dark:text-white"
          );

          return (
            <div className="relative">
              <Listbox.Button
                className={clsx(
                  "sm:w-4 sm:h-4 relative w-8 h-8 cursor-pointer rounded-full flex items-center justify-center focus:outline-none"
                )}
              >
                {resolvedTheme === "dark" ? (
                  <BsFillMoonFill className={iconClassName} />
                ) : (
                  <Sun className={iconClassName} />
                )}
              </Listbox.Button>
              <AnimatePresence>
                {open && (
                  <Listbox.Options
                    as={motion.ul}
                    static
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.3 }}
                    className="absolute right-0 p-2 mt-2 overflow-auto text-base origin-top-right shadow-lg max-h-60 w-42 rounded-xl bg-white dark:bg-black focus:outline-none sm:text-sm capitalize"
                    style={theme === "pink" ? { background: "#dedddf"} :{}
                  }
                  >
                    {themes.map((theme) => (
                      <Listbox.Option
                        key={theme}
                        className={({ active }) =>
                          clsx(
                            "relative cursor-pointer text-primary select-none py-2 pl-10 pr-4 rounded-md ",
                            active ? "bg-gray-100 dark:bg-slate-800 " : ""
                          )
                        }
                        value={theme}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate text-xs font-light  ${
                                selected ? "font-medium " : "font-normal "
                              }`}
                            >
                              {theme === "system" ? "Automatic" : theme}
                            </span>
                            {selected ? (
                              <span className=" absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-50">
                                <Check
                                  className="w-4 h-4 "
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                )}
              </AnimatePresence>
            </div>
          );
        }}
      </Listbox>
    </>
  );
}
