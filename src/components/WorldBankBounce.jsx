import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import "./WorldBankBounce.css";

export function WorldBankBounce({ content }) {
  const { label, headline, intro, projects } = content;

  const [activeIndex, setActiveIndex] = useState(0);
  const [dotPosition, setDotPosition] = useState(0);
  const [dotDirection, setDotDirection] = useState(0);

  const itemRefs = useRef([]);
  const previousPosition = useRef(null);
  const bounceTimer = useRef(null);

  const positionDot = (index, animate = true) => {
    const item = itemRefs.current[index];

    if (!item) return;

    const nextPosition =
      item.offsetTop + item.offsetHeight / 2;

    const previous = previousPosition.current;

    if (animate && previous !== null) {
      const direction = nextPosition > previous ? 1 : -1;

      setDotDirection(direction);

      window.clearTimeout(bounceTimer.current);

      bounceTimer.current = window.setTimeout(() => {
        setDotDirection(0);
      }, 240);
    }

    previousPosition.current = nextPosition;
    setDotPosition(nextPosition);
  };

  useLayoutEffect(() => {
    positionDot(activeIndex, false);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      positionDot(activeIndex, false);
    };

    window.addEventListener("resize", handleResize);

    document.fonts?.ready.then(() => {
      positionDot(activeIndex, false);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.clearTimeout(bounceTimer.current);
    };
  }, [activeIndex]);

  const selectItem = (index) => {
    if (index === activeIndex) return;

    setActiveIndex(index);
    positionDot(index);
  };

  const activeItem = projects[activeIndex];

  return (
    <section
      className="world-bank-section"
      id="world-bank"
      aria-labelledby="world-bank-title"
    >
      {/* INTRO */}
      <div className="world-bank-intro">
        <div className="world-bank-intro-heading">
          <p className="world-bank-eyebrow">
            {label}
          </p>

          <h2 id="world-bank-title">
            {headline.split("\n").map((line) => (
                <span key={line}>{line}</span>
            ))}
            </h2>
        </div>

        <div className="world-bank-intro-bottom">
          <p className="world-bank-intro-copy">
            {intro}
          </p>

          <div
            className="world-bank-intro-marker"
            aria-hidden="true"
          >
            <span>Selected work</span>
            <span>01 — 06</span>
          </div>
        </div>
      </div>

      {/* INTERACTIVE EXPERIENCE */}
      <div className="wb-bounce">
        <nav
          className="wb-bounce-nav"
          aria-label="World Bank projects"
        >
          <div
            className="wb-bounce-line"
            aria-hidden="true"
          />

          <span
            className={`wb-bounce-dot ${
              dotDirection > 0
                ? "is-moving-down"
                : dotDirection < 0
                  ? "is-moving-up"
                  : ""
            }`}
            style={{
              transform: `translate3d(
                0,
                ${dotPosition - 5}px,
                0
              )`,
            }}
            aria-hidden="true"
          />

          {projects.map((item, index) => {
            const active = index === activeIndex;

            return (
              <button
                key={`${item.geography}-${item.name}`}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                type="button"
                className={`wb-bounce-item ${
                  active ? "is-active" : ""
                }`}
                onClick={() => selectItem(index)}
                aria-pressed={active}
              >
                <span className="wb-bounce-location">
                  {item.geography}
                </span>

                <span className="wb-bounce-project">
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>

        <article
          className="wb-bounce-panel"
          key={activeIndex}
        >
          <p className="wb-bounce-counter">
            {String(activeIndex + 1).padStart(2, "0")}
            <span> / </span>
            {String(projects.length).padStart(2, "0")}
          </p>

          <p className="wb-bounce-panel-location">
            {activeItem.geography}
          </p>

          <h3>{activeItem.name}</h3>

          <p className="wb-bounce-description">
            {activeItem.description}
          </p>

          {activeItem.amount && (
            <div className="wb-bounce-value">
              <strong>{activeItem.amount}</strong>
            </div>
          )}
          {activeItem.file && (
            <a
                className="wb-bounce-file"
                href={activeItem.file.href}
                target="_blank"
                rel="noreferrer"
            >
                <span>{activeItem.file.label}</span>
                <span aria-hidden="true">↗</span>
            </a>
            )}
        </article>
      </div>
    </section>
  );
}