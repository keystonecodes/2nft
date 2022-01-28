import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

function HomeLogo() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="50px"
          height="50px"
          viewBox="0 0 50 50"
          version="1.1"
          className="hidden sm:inline"
        >
          <g id="surface1">
            <path
              style={{
                fill: "none",
                strokeWidth: 1,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                stroke: "#D1D5DB",
                strokeOpacity: 1,
                strokeMiterlimit: 10,
              }}
              d="M 132.695312 133.359375 L 132.695312 133.359375 "
              transform="matrix(0.1,0,0,0.1,0,0)"
            />
            <path
              style={{
                fill: "none",
                strokeWidth: 10,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                stroke: "#D1D5DB",
                strokeOpacity: 1,
                strokeMiterlimit: 4,
              }}
              d="M -150.50293 -34.434267 L -100.576172 34.463901 L 103.32194 34.463901 L 150.522461 -34.434267 Z M -150.50293 -34.434267 "
              transform="matrix(0.096,0,0,0.116,24.96,6.385)"
            />
            <path
              style={{
                fill: "none",
                strokeWidth: 10,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                stroke: "#D1D5DB",
                strokeOpacity: 1,
                strokeMiterlimit: 4,
              }}
              d="M 0.661458 98.902133 L 103.048611 98.902133 L 197.579861 -98.913174 L -197.559028 -98.913174 L -102.246528 98.902133 Z M 0.661458 98.902133 "
              transform="matrix(0.09,0,0,0.167,24.96,31.956)"
            />
          </g>
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="50px"
          height="50px"
          viewBox="0 0 50 50"
          version="1.1"
          className="hidden sm:inline"
        >
          <g id="surface1">
            <path
              style={{
                fill: "none",
                strokeWidth: 1,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                stroke: "#111827",
                strokeOpacity: 1,
                strokeMiterlimit: 10,
              }}
              d="M 132.695312 133.359375 L 132.695312 133.359375 "
              transform="matrix(0.1,0,0,0.1,0,0)"
            />
            <path
              style={{
                fill: "none",
                strokeWidth: 10,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                stroke: "#111827",
                strokeOpacity: 1,
                strokeMiterlimit: 4,
              }}
              d="M -150.50293 -34.434267 L -100.576172 34.463901 L 103.32194 34.463901 L 150.522461 -34.434267 Z M -150.50293 -34.434267 "
              transform="matrix(0.096,0,0,0.116,24.96,6.385)"
            />
            <path
              style={{
                fill: "none",
                strokeWidth: 10,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                stroke: "#111827",
                strokeOpacity: 1,
                strokeMiterlimit: 4,
              }}
              d="M 0.661458 98.902133 L 103.048611 98.902133 L 197.579861 -98.913174 L -197.559028 -98.913174 L -102.246528 98.902133 Z M 0.661458 98.902133 "
              transform="matrix(0.09,0,0,0.167,24.96,31.956)"
            />
          </g>
        </svg>
      );
    }
  };

  return renderThemeChanger();
}

export default HomeLogo;
