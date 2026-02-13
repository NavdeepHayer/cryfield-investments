export default function Logo({ height = 50 }: { height?: number }) {
  const width = (height / 50) * 320;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 320 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/*
        Logo layout:
        - Top: London skyline silhouette (~75% width, centred)
        - Bottom: "CRYFIELD" (white) + "INVESTMENTS" (gold) on one line
        Buildings sit above the text, resting on a shared baseline.
      */}

      {/* === LONDON SKYLINE (buildings from y≈2 down to y≈34) === */}
      <g opacity="0.25">
        {/* Generic left buildings */}
        <rect x="45" y="16" width="12" height="18" rx="1" fill="#d4a039" />
        <rect x="60" y="12" width="10" height="22" rx="1" fill="#d4a039" />

        {/* Big Ben / Elizabeth Tower */}
        <rect x="75" y="6" width="7" height="28" fill="#d4a039" />
        <path d="M75 6L78.5 1L82 6" fill="#d4a039" />
        <rect x="77.5" y="0" width="2" height="2" fill="#d4a039" />

        {/* Westminster-style building */}
        <rect x="86" y="18" width="16" height="16" rx="1" fill="#d4a039" />

        {/* London Eye (simplified) */}
        <circle cx="115" cy="18" r="11" stroke="#d4a039" strokeWidth="1.5" fill="none" />
        <circle cx="115" cy="18" r="1.5" fill="#d4a039" />
        <line x1="115" y1="29" x2="115" y2="34" stroke="#d4a039" strokeWidth="1.5" />

        {/* The Shard */}
        <path d="M135 34L140 1L145 34Z" fill="#d4a039" />

        {/* Walkie Talkie style */}
        <path d="M152 34H162V10C162 10 160 14 157 14C154 14 152 10 152 10V34Z" fill="#d4a039" />

        {/* The Gherkin */}
        <path d="M170 34H180C180 34 181 16 175 6C169 16 170 34 170 34Z" fill="#d4a039" />

        {/* Canary Wharf tower */}
        <rect x="188" y="4" width="9" height="30" rx="1" fill="#d4a039" />
        <path d="M188 4L192.5 0L197 4" fill="#d4a039" />

        {/* Tower Bridge silhouette */}
        <rect x="206" y="10" width="6" height="24" fill="#d4a039" />
        <rect x="224" y="10" width="6" height="24" fill="#d4a039" />
        <path d="M212 10L215 6H221L224 10" fill="#d4a039" />
        <rect x="212" y="10" width="12" height="3" fill="#d4a039" />
        <rect x="210" y="20" width="16" height="2" fill="#d4a039" />

        {/* Right buildings */}
        <rect x="238" y="14" width="10" height="20" rx="1" fill="#d4a039" />
        <rect x="252" y="18" width="12" height="16" rx="1" fill="#d4a039" />
      </g>

      {/* Horizon / baseline where buildings meet text */}
      <line x1="40" y1="34" x2="270" y2="34" stroke="#d4a039" strokeWidth="0.75" opacity="0.18" />

      {/* === WORDMARK (below skyline) === */}
      {/* "CRYFIELD" in white, "INVESTMENTS" in gold, on one line */}
      <text
        x="160"
        y="47"
        textAnchor="middle"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        fontWeight="600"
        fontSize="13"
        letterSpacing="4.5"
      >
        <tspan fill="white">CRYFIELD</tspan>
        <tspan fill="#d4a039">{" "}INVESTMENTS</tspan>
      </text>
    </svg>
  );
}
