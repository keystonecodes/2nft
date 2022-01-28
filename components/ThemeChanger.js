import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

function ThemeChanger() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <div className="p-2 absolute right-[4px] top-0 mt-[14px]">
        <Switch
          checked={enabled}
          onChange={() => setTheme("light") && setEnabled}
          className={`${enabled ? "bg-[#9945FF]" : "bg-transparent"}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-white rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full border-2 border-transparent bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
          />
          <MoonIcon className="w-8 h-8" />
        </Switch>
      </div>
    );
  } else {
    return (
      <div className="p-2 absolute right-[4px] top-0 mt-[14px]">
        <Switch
          checked={!enabled}
          onChange={() => setTheme("dark") && setEnabled}
          className={`${!enabled ? "bg-gray-900" : "bg-[#14f195]"}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-gray-900 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${!enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full border-2 border-gray-900 bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
          />
          <SunIcon className="w-8 h-8 absolute left-1 text-white" />
        </Switch>
      </div>
    );
  }
}

export default ThemeChanger;
