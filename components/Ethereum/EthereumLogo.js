import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

function EthereumLogo() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

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
      xmlSpace="preserve"
      width="200"
      height="200"
      version="1.1"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 784.37 1277.39"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="inline mt-10 mx-10"
    >
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer" />
        <g id="_1421394342400">
          <g>
            <polygon
              fill="#343434"
              fillRule="nonzero"
              points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "
              style={{ stroke: "#D1D5DB" , strokeWidth: "15px" }}
            />
            <polygon
              fill="#8C8C8C"
              fillRule="nonzero"
              points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "
              style={{ stroke: "#D1D5DB" , strokeWidth: "15px" }}
            />
            <polygon
              fill="#3C3C3B"
              fillRule="nonzero"
              points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "
              style={{ stroke: "#D1D5DB" , strokeWidth: "15px" }}
            />
            <polygon
              fill="#8C8C8C"
              fillRule="nonzero"
              points="392.07,1277.38 392.07,956.52 -0,724.89 "
              style={{ stroke: "#D1D5DB" , strokeWidth: "15px" }}
            />
            <polygon
              fill="#141414"
              fillRule="nonzero"
              points="392.07,882.29 784.13,650.54 392.07,472.33 "
              style={{ stroke: "#D1D5DB" , strokeWidth: "15px" }}
            />
            <polygon
              fill="#393939"
              fillRule="nonzero"
              points="0,650.54 392.07,882.29 392.07,472.33 "
              style={{ stroke: "#D1D5DB" , strokeWidth: "15px" }}
            />
          </g>
        </g>
      </g>
    </svg>
  );
      } else {
        return (
          <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width="200"
      height="200"
      version="1.1"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 784.37 1277.39"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="inline mt-10 mx-10"
    >
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer" />
        <g id="_1421394342400">
          <g>
            <polygon
              fill="#343434"
              fillRule="nonzero"
              points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "
              style={{ stroke: "#111827" , strokeWidth: "15px" }}
            />
            <polygon
              fill="#8C8C8C"
              fillRule="nonzero"
              points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "
              style={{ stroke: "#111827" , strokeWidth: "15px" }}
            />
            <polygon
              fill="#3C3C3B"
              fillRule="nonzero"
              points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "
              style={{ stroke: "#111827" , strokeWidth: "15px" }}
            />
            <polygon
              fill="#8C8C8C"
              fillRule="nonzero"
              points="392.07,1277.38 392.07,956.52 -0,724.89 "
              style={{ stroke: "#111827" , strokeWidth: "15px" }}
            />
            <polygon
              fill="#141414"
              fillRule="nonzero"
              points="392.07,882.29 784.13,650.54 392.07,472.33 "
              style={{ stroke: "#111827" , strokeWidth: "15px" }}
            />
            <polygon
              fill="#393939"
              fillRule="nonzero"
              points="0,650.54 392.07,882.29 392.07,472.33 "
              style={{ stroke: "#111827" , strokeWidth: "15px" }}
            />
          </g>
        </g>
      </g>
    </svg>
        );
      }
    };

    return renderThemeChanger();
}

export default EthereumLogo;