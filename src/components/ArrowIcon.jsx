export default function ArrowIcon({
  direction = 'up-right',
  className = '',
}) {
  const paths = {
    'up-right': (
      <>
        <path d="M4 12L12 4" />
        <path d="M6 4H12V10" />
      </>
    ),

    'down-right': (
      <>
        <path d="M4 4L12 12" />
        <path d="M6 12H12V6" />
      </>
    ),

    up: (
      <>
        <path d="M8 13V3" />
        <path d="M4 7L8 3L12 7" />
      </>
    ),

    down: (
      <>
        <path d="M8 3V13" />
        <path d="M4 9L8 13L12 9" />
      </>
    ),
  }

  return (
    <svg
      className={`arrow-icon ${className}`.trim()}
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      >
        {paths[direction]}
      </g>
    </svg>
  )
}