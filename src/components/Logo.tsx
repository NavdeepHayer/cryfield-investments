export default function Logo({ size = 40 }: { size?: number }) {
  const scale = size / 48;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `scale(${scale > 1 ? 1 : 1})` }}
    >
      {/*
        Logomark: An abstract building/pinnacle with integrated "C" shape.
        Three ascending columns form a skyline, with the tallest centre
        column rising to a pointed apex — suggesting growth, ambition, and
        architectural excellence. The negative space on the left side of
        the grouping subtly reads as a "C".
      */}

      {/* Left column - shortest */}
      <rect x="6" y="24" width="9" height="20" rx="1.5" fill="#d4a039" />

      {/* Centre column - tallest, with pointed top */}
      <path
        d="M19.5 6L24 2L28.5 6V44H19.5V6Z"
        fill="#d4a039"
      />

      {/* Right column - medium */}
      <rect x="33" y="16" width="9" height="28" rx="1.5" fill="#d4a039" opacity="0.75" />

      {/* Connecting base bar */}
      <rect x="6" y="41" width="36" height="3" rx="1.5" fill="#d4a039" opacity="0.35" />

      {/* Horizontal accent lines across centre tower — floor lines */}
      <line x1="20.5" y1="16" x2="27.5" y2="16" stroke="#0a1929" strokeWidth="1" opacity="0.3" />
      <line x1="20.5" y1="22" x2="27.5" y2="22" stroke="#0a1929" strokeWidth="1" opacity="0.3" />
      <line x1="20.5" y1="28" x2="27.5" y2="28" stroke="#0a1929" strokeWidth="1" opacity="0.3" />
      <line x1="20.5" y1="34" x2="27.5" y2="34" stroke="#0a1929" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}
