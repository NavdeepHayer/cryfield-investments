export default function Logo({ height = 44 }: { height?: number }) {
  const width = (height / 48) * 220;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/*
        Logo: Architectural skyline silhouette blended behind the wordmark.
        The building columns sit as a subtle backdrop, with the company
        name layered on top — tying the brand to property development.
      */}

      {/* === SKYLINE BACKDROP (behind text) === */}
      {/* Tallest tower - left of centre with pointed apex */}
      <path d="M28 6L34 0L40 6V48H28V6Z" fill="#d4a039" opacity="0.12" />
      {/* Left building */}
      <rect x="8" y="18" width="16" height="30" rx="1.5" fill="#d4a039" opacity="0.08" />
      {/* Right building - tallish */}
      <rect x="44" y="12" width="14" height="36" rx="1.5" fill="#d4a039" opacity="0.1" />
      {/* Far right building */}
      <rect x="62" y="22" width="12" height="26" rx="1.5" fill="#d4a039" opacity="0.06" />
      {/* Skyline accent lines */}
      <line x1="0" y1="46" x2="100" y2="46" stroke="#d4a039" strokeWidth="1.5" opacity="0.15" />

      {/* === WORDMARK (overlays skyline) === */}
      <text
        x="0"
        y="26"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        fontWeight="700"
        fontSize="22"
        letterSpacing="3"
        fill="white"
      >
        CRYFIELD
      </text>
      <text
        x="1"
        y="43"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        fontWeight="300"
        fontSize="11.5"
        letterSpacing="6.8"
        fill="#d4a039"
      >
        INVESTMENTS
      </text>
    </svg>
  );
}
