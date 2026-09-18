const bogotaMap = {
  src: '/maps/bogota-central.svg',
}

export function BogotaMapBackground() {
  return (
    <>
      <div className="bogota-map-background" aria-hidden="true">
        <img
          className="bogota-map-image"
          src={bogotaMap.src}
          alt=""
          decoding="async"
          loading="eager"
        />
      </div>

      <p className="map-attribution">
        © Ideca - 2026 · IDECA - UAECD
      </p>
    </>
  )
}