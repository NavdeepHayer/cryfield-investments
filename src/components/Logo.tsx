export default function Logo({ height = 40 }: { height?: number }) {
  const width = (height / 40) * 320;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 320 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/*
        Logo: "CRYFIELD INVESTMENTS" on one line with a London skyline
        silhouette centred behind, covering ~75% of the width.
        Landmarks: Big Ben, The Shard, Gherkin, Tower Bridge, Canary Wharf.
      */}

      {/* === LONDON SKYLINE (centred, ~75% width = ~240px, offset ~40px) === */}
      <g opacity="0.13">
        {/* Generic left buildings */}
        <rect x="45" y="18" width="12" height="22" rx="1" fill="#d4a039" />
        <rect x="60" y="14" width="10" height="26" rx="1" fill="#d4a039" />

        {/* Big Ben / Elizabeth Tower */}
        <rect x="75" y="8" width="7" height="32" fill="#d4a039" />
        <path d="M75 8L78.5 2L82 8" fill="#d4a039" />
        <rect x="77" y="0" width="3" height="3" fill="#d4a039" />

        {/* Westminster-style building */}
        <rect x="86" y="20" width="16" height="20" rx="1" fill="#d4a039" />

        {/* London Eye (simplified) */}
        <circle cx="115" cy="20" r="12" stroke="#d4a039" strokeWidth="1.5" fill="none" />
        <circle cx="115" cy="20" r="1.5" fill="#d4a039" />
        <line x1="115" y1="32" x2="115" y2="40" stroke="#d4a039" strokeWidth="1.5" />

        {/* The Shard */}
        <path d="M135 40L140 2L145 40Z" fill="#d4a039" />

        {/* Walkie Talkie style */}
        <path d="M152 40H162V12C162 12 160 16 157 16C154 16 152 12 152 12V40Z" fill="#d4a039" />

        {/* The Gherkin */}
        <path d="M170 40H180C180 40 181 20 175 8C169 20 170 40 170 40Z" fill="#d4a039" />

        {/* Canary Wharf tower */}
        <rect x="188" y="6" width="9" height="34" rx="1" fill="#d4a039" />
        <path d="M188 6L192.5 2L197 6" fill="#d4a039" />

        {/* Tower Bridge silhouette */}
        <rect x="206" y="12" width="6" height="28" fill="#d4a039" />
        <rect x="224" y="12" width="6" height="28" fill="#d4a039" />
        <path d="M212 12L215 8H221L224 12" fill="#d4a039" />
        <rect x="212" y="12" width="12" height="3" fill="#d4a039" />
        <rect x="210" y="22" width="16" height="2" fill="#d4a039" />

        {/* Right buildings */}
        <rect x="238" y="16" width="10" height="24" rx="1" fill="#d4a039" />
        <rect x="252" y="20" width="12" height="20" rx="1" fill="#d4a039" />
      </g>

      {/* Horizon line */}
      <line x1="40" y1="39" x2="270" y2="39" stroke="#d4a039" strokeWidth="1" opacity="0.12" />

      {/* === WORDMARK (single line, overlays skyline) === */}
      <text
        x="160"
        y="27"
        textAnchor="middle"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        fontWeight="600"
        fontSize="17"
        letterSpacing="5"
        fill="white"
      >
        CRYFIELD INVESTMENTS
      </text>
    </svg>
  );
}
