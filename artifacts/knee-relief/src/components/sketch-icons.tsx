export function SvgFilters() {
  return (
    <svg width="0" height="0" className="hidden">
      <defs>
        <filter id="pencil-texture" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" seed="2" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="pencil-texture-fill" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="5" result="noise" seed="3" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.9 0" />
        </filter>
      </defs>
    </svg>
  );
}

export function PickleballIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      <circle cx="100" cy="180" r="40" fill="#e8d5c0" opacity="0.3" />
      <circle cx="60" cy="80" r="12" fill="#e8a598" className="sketch-fill" />
      <path d="M60 92 L60 130" stroke="#5a6b5a" strokeWidth="5" strokeLinecap="round" className="sketch-path" />
      <path d="M60 100 L40 115 M60 100 L80 85" stroke="#5a6b5a" strokeWidth="4" strokeLinecap="round" className="sketch-path" />
      <path d="M60 130 L45 165 M60 130 L75 165" stroke="#5a6b5a" strokeWidth="4" strokeLinecap="round" className="sketch-path" />
      <path d="M80 85 L95 70 L115 75" stroke="#8b9a8b" strokeWidth="5" strokeLinecap="round" className="sketch-path" />
      <ellipse cx="115" cy="75" rx="18" ry="10" fill="#d4b872" className="sketch-fill" />
      <ellipse cx="115" cy="75" rx="18" ry="10" stroke="#5a6b5a" strokeWidth="2" fill="none" className="sketch-path" />
      <circle cx="145" cy="90" r="10" fill="#e8a598" className="sketch-fill" stroke="#5a6b5a" strokeWidth="2" />
      <path d="M143 88 L147 88 M143 92 L147 92" stroke="#5a6b5a" strokeWidth="1" />
      <path d="M55 95 Q50 100 52 108" stroke="#e8a598" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      <ellipse cx="100" cy="160" rx="8" ry="3" fill="#8b9a8b" opacity="0.15" />
    </svg>
  );
}

export function RunningIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      <circle cx="100" cy="180" r="50" fill="#e8d5c0" opacity="0.2" />
      <circle cx="105" cy="55" r="14" fill="#e8a598" className="sketch-fill" />
      <path d="M105 69 L100 110" stroke="#5a6b5a" strokeWidth="5" strokeLinecap="round" className="sketch-path" />
      <path d="M100 80 L75 95 M100 80 L130 70" stroke="#5a6b5a" strokeWidth="4" strokeLinecap="round" className="sketch-path" />
      <path d="M100 110 L70 145 L55 140" stroke="#5a6b5a" strokeWidth="4" strokeLinecap="round" className="sketch-path" />
      <path d="M100 110 L130 140 L145 155" stroke="#5a6b5a" strokeWidth="4" strokeLinecap="round" className="sketch-path" />
      <ellipse cx="105" cy="90" rx="18" ry="22" fill="#8b9a8b" opacity="0.3" className="sketch-fill" />
      <path d="M125 68 L135 60 L140 65" stroke="#d4b872" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M130 60 L138 52 L143 57" stroke="#d4b872" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M85 100 Q80 95 82 88" stroke="#e8a598" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export function WalkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      <path d="M20 170 Q60 155 100 160 Q140 165 180 150" stroke="#8b9a8b" strokeWidth="3" strokeLinecap="round" opacity="0.3" className="sketch-path" />
      <path d="M30 160 Q35 140 45 155" stroke="#6b8a6b" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M60 150 Q65 130 75 145" stroke="#6b8a6b" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <circle cx="90" cy="55" r="13" fill="#e8a598" className="sketch-fill" />
      <path d="M90 68 L88 115" stroke="#5a6b5a" strokeWidth="5" strokeLinecap="round" className="sketch-path" />
      <path d="M88 82 L65 98 M88 82 L110 75" stroke="#5a6b5a" strokeWidth="4" strokeLinecap="round" className="sketch-path" />
      <path d="M88 115 L70 155 M88 115 L105 150" stroke="#5a6b5a" strokeWidth="4" strokeLinecap="round" className="sketch-path" />
      <circle cx="130" cy="60" r="10" fill="#d4b872" className="sketch-fill" />
      <path d="M130 70 L128 100" stroke="#5a6b5a" strokeWidth="4" strokeLinecap="round" className="sketch-path" />
      <path d="M128 78 L115 88 M128 78 L142 85" stroke="#5a6b5a" strokeWidth="3" strokeLinecap="round" className="sketch-path" />
      <path d="M128 100 L118 130 M128 100 L138 128" stroke="#5a6b5a" strokeWidth="3" strokeLinecap="round" className="sketch-path" />
    </svg>
  );
}

export function YogaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      <ellipse cx="100" cy="175" rx="60" ry="6" fill="#8b9a8b" opacity="0.15" />
      <circle cx="100" cy="55" r="14" fill="#e8a598" className="sketch-fill" />
      <path d="M100 69 L100 120" stroke="#5a6b5a" strokeWidth="5" strokeLinecap="round" className="sketch-path" />
      <path d="M100 85 L55 70 M100 85 L145 70" stroke="#5a6b5a" strokeWidth="4" strokeLinecap="round" className="sketch-path" />
      <path d="M55 70 L50 65 M145 70 L150 65" stroke="#5a6b5a" strokeWidth="3" strokeLinecap="round" className="sketch-path" />
      <path d="M100 120 L65 155 L60 155 M100 120 L135 155 L140 155" stroke="#5a6b5a" strokeWidth="4" strokeLinecap="round" className="sketch-path" />
      <circle cx="50" cy="63" r="3" fill="#d4b872" className="sketch-fill" />
      <circle cx="150" cy="63" r="3" fill="#d4b872" className="sketch-fill" />
      <ellipse cx="100" cy="105" rx="15" ry="18" fill="#d4b872" opacity="0.2" className="sketch-fill" />
      <path d="M80 50 Q85 40 95 42" stroke="#e8a598" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export function FetchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      <ellipse cx="100" cy="175" rx="70" ry="5" fill="#8b9a8b" opacity="0.1" />
      <circle cx="70" cy="60" r="13" fill="#e8a598" className="sketch-fill" />
      <path d="M70 73 L68 115" stroke="#5a6b5a" strokeWidth="5" strokeLinecap="round" className="sketch-path" />
      <path d="M68 85 L50 100 M68 85 L95 70" stroke="#5a6b5a" strokeWidth="4" strokeLinecap="round" className="sketch-path" />
      <path d="M68 115 L55 150 M68 115 L82 148" stroke="#5a6b5a" strokeWidth="4" strokeLinecap="round" className="sketch-path" />
      <path d="M95 70 Q115 55 130 65" stroke="#d4b872" strokeWidth="3" strokeLinecap="round" strokeDasharray="4,4" opacity="0.6" />
      <circle cx="135" cy="65" r="8" fill="#e8a598" className="sketch-fill" stroke="#5a6b5a" strokeWidth="2" />
      <ellipse cx="155" cy="130" rx="20" ry="16" fill="#d4b872" className="sketch-fill" />
      <circle cx="155" cy="120" r="10" fill="#8b9a8b" className="sketch-fill" />
      <path d="M155 120 L155 110 Q160 105 165 110" stroke="#5a6b5a" strokeWidth="2" strokeLinecap="round" className="sketch-path" />
      <path d="M140 135 L135 145 M155 146 L155 155" stroke="#5a6b5a" strokeWidth="3" strokeLinecap="round" className="sketch-path" />
      <path d="M170 135 L178 145 M165 146 L168 155" stroke="#5a6b5a" strokeWidth="3" strokeLinecap="round" className="sketch-path" />
      <path d="M170 125 Q180 120 175 130" stroke="#d4b872" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function BikeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      <circle cx="55" cy="140" r="25" stroke="#5a6b5a" strokeWidth="3" fill="none" className="sketch-path" />
      <circle cx="145" cy="140" r="25" stroke="#5a6b5a" strokeWidth="3" fill="none" className="sketch-path" />
      <circle cx="55" cy="140" r="4" fill="#8b9a8b" className="sketch-fill" />
      <circle cx="145" cy="140" r="4" fill="#8b9a8b" className="sketch-fill" />
      <path d="M55 140 L85 100 L145 140 M85 100 L110 75 L130 80 M55 140 L75 80 M60 80 L95 80" stroke="#5a6b5a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="sketch-path" />
      <circle cx="95" cy="65" r="12" fill="#e8a598" className="sketch-fill" />
      <path d="M90 58 Q95 53 100 58" stroke="#5a6b5a" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="100" cy="95" rx="12" ry="15" fill="#d4b872" opacity="0.25" className="sketch-fill" />
      <path d="M95 77 L90 90" stroke="#5a6b5a" strokeWidth="3" strokeLinecap="round" className="sketch-path" />
      <path d="M85 100 L80 110" stroke="#5a6b5a" strokeWidth="3" strokeLinecap="round" className="sketch-path" />
    </svg>
  );
}

export function DanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      <ellipse cx="100" cy="178" rx="50" ry="4" fill="#8b9a8b" opacity="0.1" />
      <circle cx="100" cy="45" r="14" fill="#e8a598" className="sketch-fill" />
      <path d="M100 59 L98 110" stroke="#5a6b5a" strokeWidth="5" strokeLinecap="round" className="sketch-path" />
      <path d="M98 75 L60 60 M98 75 L140 55" stroke="#5a6b5a" strokeWidth="4" strokeLinecap="round" className="sketch-path" />
      <path d="M60 60 L55 55 M140 55 L148 48" stroke="#5a6b5a" strokeWidth="3" strokeLinecap="round" className="sketch-path" />
      <path d="M98 110 L70 160 L65 160 M98 110 L130 145 L135 170" stroke="#5a6b5a" strokeWidth="4" strokeLinecap="round" className="sketch-path" />
      <path d="M90 90 Q85 100 92 108" stroke="#d4b872" strokeWidth="8" strokeLinecap="round" opacity="0.25" fill="none" />
      <path d="M106 90 Q112 100 108 108" stroke="#d4b872" strokeWidth="8" strokeLinecap="round" opacity="0.25" fill="none" />
      <circle cx="55" cy="52" r="3" fill="#d4b872" className="sketch-fill" opacity="0.6" />
      <circle cx="148" cy="45" r="3" fill="#e8a598" className="sketch-fill" opacity="0.6" />
      <path d="M45 55 L50 60 M155 48 L150 52" stroke="#d4b872" strokeWidth="1.5" opacity="0.4" />
      <path d="M85 38 Q90 30 100 32 Q110 30 115 38" stroke="#e8a598" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export function KneeAcheIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path d="M42 15 L42 45 Q42 55 45 60 L45 85" stroke="#5a6b5a" strokeWidth="5" strokeLinecap="round" className="sketch-path" />
      <path d="M58 15 L58 45 Q58 55 55 60 L55 85" stroke="#5a6b5a" strokeWidth="5" strokeLinecap="round" className="sketch-path" />
      <ellipse cx="50" cy="52" rx="15" ry="12" fill="#e8a598" className="sketch-fill" opacity="0.5" />
      <ellipse cx="50" cy="52" rx="15" ry="12" stroke="#e8a598" strokeWidth="2" className="sketch-path" />
      <path d="M38 48 Q34 52 38 56" stroke="#d4b872" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M62 48 Q66 52 62 56" stroke="#d4b872" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <circle cx="50" cy="52" r="5" fill="#e8a598" className="sketch-fill" opacity="0.8" />
    </svg>
  );
}

export function ShootingPainIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path d="M42 15 L42 40 Q42 50 45 55 L45 85" stroke="#5a6b5a" strokeWidth="5" strokeLinecap="round" className="sketch-path" />
      <path d="M58 15 L58 40 Q58 50 55 55 L55 85" stroke="#5a6b5a" strokeWidth="5" strokeLinecap="round" className="sketch-path" />
      <path d="M50 35 L55 48 L65 50 L55 52 L50 65 L45 52 L35 50 L45 48 Z" fill="#d4b872" className="sketch-fill" opacity="0.6" />
      <path d="M50 35 L55 48 L65 50 L55 52 L50 65 L45 52 L35 50 L45 48 Z" stroke="#d4b872" strokeWidth="1.5" className="sketch-path" />
      <path d="M30 42 L37 47" stroke="#e8a598" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M70 42 L63 47" stroke="#e8a598" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M30 58 L37 53" stroke="#e8a598" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M70 58 L63 53" stroke="#e8a598" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function SharpPainIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path d="M42 15 L42 40 Q42 50 45 55 L45 85" stroke="#5a6b5a" strokeWidth="5" strokeLinecap="round" className="sketch-path" />
      <path d="M58 15 L58 40 Q58 50 55 55 L55 85" stroke="#5a6b5a" strokeWidth="5" strokeLinecap="round" className="sketch-path" />
      <circle cx="50" cy="50" r="14" fill="#e8a598" className="sketch-fill" opacity="0.4" />
      <path d="M50 36 L50 44" stroke="#e8a598" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 56 L50 64" stroke="#e8a598" strokeWidth="3" strokeLinecap="round" />
      <path d="M36 50 L44 50" stroke="#e8a598" strokeWidth="3" strokeLinecap="round" />
      <path d="M56 50 L64 50" stroke="#e8a598" strokeWidth="3" strokeLinecap="round" />
      <circle cx="50" cy="50" r="4" fill="#e8a598" className="sketch-fill" />
      <path d="M25 35 L32 42" stroke="#d4b872" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M75 35 L68 42" stroke="#d4b872" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}
