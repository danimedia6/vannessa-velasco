// Los SVG IDECA concentran la cartografia principal en raster embebido; esta
// seleccion ligera acompana su composicion sin inlinear miles de nodos.
export const cityTracePaths = [
  {
    id: 'eastern-corridor',
    weight: 'primary',
    d: 'M782 0 C724 148 704 294 730 430 C756 568 828 666 834 812 C840 964 782 1080 710 1200',
  },
  {
    id: 'central-axis',
    weight: 'primary',
    d: 'M116 732 C258 684 388 696 512 750 C638 806 768 820 916 764 C1024 724 1128 724 1200 754',
  },
  {
    id: 'northwest-link',
    weight: 'secondary',
    d: 'M150 330 C290 350 410 422 516 548 C614 664 720 718 884 708',
  },
  {
    id: 'eastern-branch',
    weight: 'secondary',
    d: 'M916 134 C958 282 946 414 894 538 C856 628 860 724 930 860',
  },
  {
    id: 'southern-thread',
    weight: 'secondary',
    d: 'M230 1020 C350 956 488 946 620 994 C744 1038 862 1032 1038 952',
  },
  {
    id: 'local-grid-a',
    weight: 'fine',
    d: 'M438 186 C452 294 446 414 420 548 C398 662 412 760 470 846',
  },
  {
    id: 'local-grid-b',
    weight: 'fine',
    d: 'M302 586 C410 560 520 574 630 628 C734 680 830 690 934 650',
  },
  {
    id: 'local-grid-c',
    weight: 'fine',
    d: 'M606 210 C644 330 646 454 612 582 C582 696 594 820 652 952',
  },
  {
    id: 'local-grid-d',
    weight: 'fine',
    d: 'M114 892 C242 850 370 862 496 920 C616 976 748 982 900 928',
  },
]

export function CityTrace({ className = '', paths = cityTracePaths }) {
  return (
    <svg
      className={`city-trace ${className}`.trim()}
      viewBox="0 0 1200 1200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <g className="city-trace__paths">
        {paths.map(({ id, d, weight }) => (
          <path key={id} d={d} data-weight={weight} pathLength="1" />
        ))}
      </g>
    </svg>
  )
}
