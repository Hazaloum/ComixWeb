"use client";

// Node coordinates for the network C shape (viewBox 0 0 52 56)
const C_NODES: [number, number][] = [
  [42, 9],   // 0  top-right tip
  [33, 4],   // 1  top arm right
  [23, 5],   // 2  top arm left
  [14, 9],   // 3  top-left
  [7, 17],   // 4  left upper
  [4, 27],   // 5  left center
  [7, 37],   // 6  left lower
  [14, 45],  // 7  bottom-left
  [23, 49],  // 8  bottom arm left
  [33, 50],  // 9  bottom arm right
  [42, 46],  // 10 bottom-right tip
  [25, 11],  // 11 interior top
  [34, 14],  // 12 interior top-right
  [16, 18],  // 13 interior upper-left
  [24, 20],  // 14 interior upper-center
  [12, 27],  // 15 interior left-center
  [22, 27],  // 16 interior center
  [16, 36],  // 17 interior lower-left
  [24, 34],  // 18 interior lower-center
  [25, 43],  // 19 interior bottom
  [34, 40],  // 20 interior bottom-right
];

const C_LINES: [number, number][] = [
  // Outer boundary
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10],
  // Top arm triangulation
  [0, 12], [12, 1], [1, 11], [11, 2], [12, 11],
  [11, 14], [12, 14], [2, 13], [11, 13], [3, 13],
  // Upper-left inner
  [4, 13], [13, 14], [13, 15], [14, 15], [14, 16],
  // Left spine
  [4, 15], [5, 15], [15, 16], [5, 16], [5, 17],
  [16, 17], [16, 18], [6, 17], [17, 18],
  // Lower-left transition
  [7, 17], [7, 19], [17, 19], [18, 19], [8, 19],
  // Bottom arm triangulation
  [19, 20], [8, 20], [9, 20], [10, 20], [20, 18],
];

function CIcon({ gradId }: { gradId: string }) {
  return (
    <>
      {/* Mesh lines */}
      <g stroke={`url(#${gradId})`} strokeWidth="1.15" strokeLinecap="round">
        {C_LINES.map(([a, b], i) => (
          <line
            key={i}
            x1={C_NODES[a][0]}
            y1={C_NODES[a][1]}
            x2={C_NODES[b][0]}
            y2={C_NODES[b][1]}
          />
        ))}
      </g>
      {/* Node dots — outer nodes slightly larger */}
      <g fill={`url(#${gradId})`}>
        {C_NODES.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i <= 10 ? 2.3 : 1.8} />
        ))}
      </g>
    </>
  );
}

export function ComixLogo({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "small" | "large";
}) {
  const dimensions = {
    small:   { width: 118, height: 35 },
    default: { width: 158, height: 47 },
    large:   { width: 198, height: 59 },
  };

  const { width, height } = dimensions[size];

  return (
    <svg
      viewBox="0 0 188 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      aria-label="COMIX"
    >
      <defs>
        <linearGradient
          id="logoGrad"
          x1="38" y1="4"
          x2="6" y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%"   stopColor="#0DDBB8" />
          <stop offset="100%" stopColor="#3A6EE8" />
        </linearGradient>
      </defs>

      <CIcon gradId="logoGrad" />

      {/* COMIX wordmark */}
      <text
        x="56"
        y="37"
        fill="currentColor"
        fontFamily="var(--font-instrument-serif), 'Instrument Serif', Georgia, serif"
        fontSize="27"
        fontWeight="400"
        letterSpacing="4"
      >
        COMIX
      </text>
    </svg>
  );
}

export function ComixLogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 52 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={34}
      height={37}
      aria-label="COMIX"
    >
      <defs>
        <linearGradient
          id="logoGradIcon"
          x1="38" y1="4"
          x2="6" y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%"   stopColor="#0DDBB8" />
          <stop offset="100%" stopColor="#3A6EE8" />
        </linearGradient>
      </defs>

      <CIcon gradId="logoGradIcon" />
    </svg>
  );
}
