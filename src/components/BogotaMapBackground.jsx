const bogotaMap = {
  src: '/maps/bogota-central.svg',
}

export function BogotaMapBackground() {
  return (
    <>
      <div
        className="bogota-map-background"
        aria-hidden="true"
      >
        <img
          className="bogota-map-image"
          src={bogotaMap.src}
          alt=""
          decoding="async"
          loading="eager"
        />

        <svg
          className="bogota-map-trace-svg"
          viewBox="0 0 2217 4667"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >

          
            
          <path
            className="bogota-trace-path"
            fill="none"
            stroke="#7fc8a9"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="
              M 2209 663
              L 1778 1007
              L 1683 1159
              L 1443 1558
              L 1236 1838
              L 941 2230
              L 622 2653
              L 359 2957
              L 144 3268
              L 8 3428
            "
          />
          {/* TRAZADO 02 — fragmento A */}
          <path
            className="bogota-trace-path"
            fill="none"
            stroke="#7fc8a9"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="
              M 1 1349
              L 121 1561
              L 205 1657
              L 373 1821
              L 548 1653
              L 904 1833
              C 904 1833, 1072.332 1960.708, 1116 1961
              C 1159.668 1961.292, 1236 2101, 1236 2101
              L 1459 2433
              L 1651 2721
            "
          />

          {/* TRAZADO 02 — fragmento B */}
          <path
            className="bogota-trace-path"
            fill="none"
            stroke="#7fc8a9"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="
              M 1755 2837
              L 1839 2901
              L 1959 2957
              L 2130 3001
              L 2210 3021
            "
          />
          {/* TRAZADO 03 */}
          <path
            className="bogota-trace-path"
            data-scroll-start="0.08"
            data-scroll-end="0.76"
            fill="none"
            stroke="#7fc8a9"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="
              M 2122 1509
              L 1987 1597
              L 1998 1612
              L 1941 1650
              L 1754 1926
              L 1700 2025
              L 1655 2092
              L 1491 2433

              C 1491 2433, 1442.197 2460.332, 1463 2502
              C 1483.803 2543.668, 1310 2855, 1310 2855

              C 1310 2855, 1276.528 2943.143, 1175 2999
              C 1073.473 3054.857, 956 3158, 956 3158

              L 760 3290
              L 706 3328
              L 631 3371
              L 544 3437
              L 455 3527
              L 362 3640
              L 331 3770
              L 259 3860
            "
          />
          {/* TRAZADO 04 */}
          <path
            className="bogota-trace-path"
            data-scroll-start="0.20"
            data-scroll-end="1.4"
            fill="none"
            stroke="#7fc8a9"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="
              M 4 2278
              L 1219 4201

              C 1219 4201, 1255.028 4270.418, 1363 4303
              C 1470.973 4335.582, 1723 4432, 1723 4432

              C 1723 4432, 1768.028 4447.475, 1825 4525
              C 1881.973 4602.525, 1927 4663, 1927 4663
            "
          />
          {/* TRAZADO 05 */}
          <path
            className="bogota-trace-path"
            data-scroll-start="0.45"
            data-scroll-end="1.5"
            fill="none"
            stroke="#7fc8a9"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="
              M 1831 2950
              L 1615 3505

              C 1615 3505, 1591.028 3556.278, 1513 3619
              C 1434.973 3681.723, 1165 3844, 1165 3844

              L 895 4015
              L 700 4147
              L 601 4243
            "
          />
        </svg>
      </div>

      <p className="map-attribution">
        © Ideca - 2026 · IDECA - UAECD
      </p>
    </>
  )
}