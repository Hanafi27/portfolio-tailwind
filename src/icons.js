const PortfolioIcons = {
  code: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="m18 16 4-4-4-4"></path>
      <path d="m6 8-4 4 4 4"></path>
      <path d="m14.5 4-5 16"></path>
    </svg>
  `,
  database: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"></path>
      <path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"></path>
    </svg>
  `,
  network: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect width="16" height="10" x="4" y="4" rx="2"></rect>
      <path d="M8 20h8"></path>
      <path d="M12 14v6"></path>
      <path d="M8 9h.01"></path>
      <path d="M12 9h.01"></path>
      <path d="M16 9h.01"></path>
    </svg>
  `,
  chip: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect width="14" height="14" x="5" y="5" rx="2"></rect>
      <path d="M9 1v4"></path>
      <path d="M15 1v4"></path>
      <path d="M9 19v4"></path>
      <path d="M15 19v4"></path>
      <path d="M1 9h4"></path>
      <path d="M1 15h4"></path>
      <path d="M19 9h4"></path>
      <path d="M19 15h4"></path>
    </svg>
  `,
  chart: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 3v18h18"></path>
      <path d="m19 9-5 5-4-4-3 3"></path>
    </svg>
  `,
  ticket: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
      <path d="M13 5v2"></path>
      <path d="M13 17v2"></path>
      <path d="M13 11v2"></path>
    </svg>
  `,
  bolt: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M13 2 3 14h8l-1 8 10-12h-8Z"></path>
    </svg>
  `,
  briefcase: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
    </svg>
  `,
  globe: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M2 12h20"></path>
      <path d="M12 2a15.3 15.3 0 0 1 0 20"></path>
      <path d="M12 2a15.3 15.3 0 0 0 0 20"></path>
    </svg>
  `,
  mail: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-10 6L2 7"></path>
    </svg>
  `,
  phone: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 2.2 2.5Z"></path>
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1a3.7 3.7 0 0 1 3.3-1.8c3.6 0 4.2 2.4 4.2 5.4v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.4H3.5V9h3.6v11.4Z"></path>
    </svg>
  `,
  github: `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z"></path>
    </svg>
  `,
  php: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <ellipse cx="32" cy="32" rx="30" ry="18" fill="#777BB4"></ellipse>
      <text x="32" y="38" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#fff">PHP</text>
    </svg>
  `,
  laravel: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path fill="#FF2D20" d="M12 13 27 5l15 8v17l10 6v15l-15 8-15-8V34l-10-6V13Zm15 5v12l10 6V24l-10-6Zm15 24v9l7-4v-8l-7 3Zm-20 0 8 4v-9l-8-4v9Z"></path>
    </svg>
  `,
  codeigniter: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path fill="#EF4223" d="M31 5c8 11-4 15 5 25 3-9 13-9 14-19 12 18 3 45-19 45C15 56 6 43 12 29c4 8 10 8 12 1 3-9-4-14 7-25Z"></path>
      <path fill="#F9A11B" d="M29 31c5 7-3 10 4 16 2-5 8-5 9-10 6 10 1 19-10 19-9 0-15-7-12-15 3 4 7 4 8 0 1-4-2-7 1-10Z"></path>
    </svg>
  `,
  javascript: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="8" y="8" width="48" height="48" rx="6" fill="#F7DF1E"></rect>
      <text x="34" y="44" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="800" fill="#111">JS</text>
    </svg>
  `,
  tailwind: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path fill="#38BDF8" d="M32 18c-7 0-11 3-14 10 3-4 7-5 12-3 3 1 5 4 8 5 5 3 11 2 16-5-3 4-7 5-12 3-3-1-5-4-8-5-1-1-2-1-2-5Zm-14 16C11 34 7 37 4 44c3-4 7-5 12-3 3 1 5 4 8 5 5 3 11 2 16-5-3 4-7 5-12 3-3-1-5-4-8-5-1-1-2-1-2-5Z"></path>
    </svg>
  `,
  bootstrap: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="8" y="8" width="48" height="48" rx="12" fill="#7952B3"></rect>
      <path fill="#fff" d="M24 18h12c7 0 11 3 11 8 0 4-2 6-5 7 4 1 7 4 7 9 0 6-5 10-12 10H24V18Zm8 13h4c3 0 5-1 5-4s-2-4-5-4h-4v8Zm0 15h5c4 0 6-2 6-5s-2-5-6-5h-5v10Z"></path>
    </svg>
  `,
  mysql: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <ellipse cx="32" cy="14" rx="22" ry="8" fill="#00758F"></ellipse>
      <path fill="#00758F" d="M10 14v26c0 5 10 9 22 9s22-4 22-9V14c0 5-10 9-22 9s-22-4-22-9Z"></path>
      <path fill="#F29111" d="M44 27c5 1 9 5 10 10-4-3-8-4-13-3l-5 1 3-4c1-2 2-3 5-4Z"></path>
    </svg>
  `,
  git: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="13" y="13" width="38" height="38" rx="6" transform="rotate(45 32 32)" fill="#F05032"></rect>
      <path fill="#fff" d="M38 36a5 5 0 0 0-4 2l-8-5a6 6 0 0 0 0-2l8-5a5 5 0 1 0-2-3l-8 5a5 5 0 1 0 0 8l8 5a5 5 0 1 0 6-5Z"></path>
    </svg>
  `,
  mikrotik: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="10" y="18" width="44" height="28" rx="6" fill="#1F2937"></rect>
      <rect x="15" y="25" width="34" height="6" rx="2" fill="#94A3B8"></rect>
      <circle cx="19" cy="38" r="3" fill="#22C55E"></circle>
      <circle cx="29" cy="38" r="3" fill="#38BDF8"></circle>
      <circle cx="39" cy="38" r="3" fill="#F59E0B"></circle>
      <path d="M18 16v-6M32 16V8M46 16v-6" stroke="#64748B" stroke-width="4" stroke-linecap="round"></path>
    </svg>
  `,
  fiber: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M10 38c12-18 32-18 44 0" fill="none" stroke="#0EA5E9" stroke-width="7" stroke-linecap="round"></path>
      <path d="M10 28c12 18 32 18 44 0" fill="none" stroke="#22C55E" stroke-width="7" stroke-linecap="round"></path>
      <circle cx="16" cy="33" r="5" fill="#F59E0B"></circle>
      <circle cx="48" cy="33" r="5" fill="#6366F1"></circle>
    </svg>
  `,
  esp32: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="14" y="14" width="36" height="36" rx="6" fill="#059669"></rect>
      <rect x="23" y="23" width="18" height="18" rx="3" fill="#ECFDF5"></rect>
      <path d="M10 22h4M10 32h4M10 42h4M50 22h4M50 32h4M50 42h4M22 10v4M32 10v4M42 10v4M22 50v4M32 50v4M42 50v4" stroke="#065F46" stroke-width="4" stroke-linecap="round"></path>
    </svg>
  `,
  sensor: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="18" y="20" width="28" height="24" rx="6" fill="#0F766E"></rect>
      <circle cx="32" cy="32" r="7" fill="#CCFBF1"></circle>
      <path d="M32 8v12M32 44v12M8 32h10M46 32h10" stroke="#14B8A6" stroke-width="6" stroke-linecap="round"></path>
      <path d="M16 16 23 23M48 16l-7 7M16 48l7-7M48 48l-7-7" stroke="#5EEAD4" stroke-width="4" stroke-linecap="round"></path>
    </svg>
  `,
  plc: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="10" y="14" width="44" height="36" rx="6" fill="#EA580C"></rect>
      <rect x="17" y="22" width="30" height="8" rx="2" fill="#FFEDD5"></rect>
      <path d="M18 38h28" stroke="#7C2D12" stroke-width="5" stroke-linecap="round"></path>
      <circle cx="20" cy="43" r="3" fill="#22C55E"></circle>
      <circle cx="30" cy="43" r="3" fill="#38BDF8"></circle>
      <circle cx="40" cy="43" r="3" fill="#FACC15"></circle>
      <path d="M16 10v4M26 10v4M38 10v4M48 10v4M16 50v4M26 50v4M38 50v4M48 50v4" stroke="#FDBA74" stroke-width="4" stroke-linecap="round"></path>
    </svg>
  `,
  matlab: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path fill="#F97316" d="M8 46 24 18l12 20 10-14 10 22H8Z"></path>
      <path fill="#2563EB" d="M24 18c8 12 15 20 32 28H8l16-28Z" opacity=".82"></path>
      <path fill="#FACC15" d="M36 38 46 24l10 22c-8-1-14-4-20-8Z"></path>
    </svg>
  `,
  python: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path fill="#3776AB" d="M32 6c-12 0-14 6-14 13v5h17v4H12c-7 0-10 6-10 14s4 16 11 16h7v-9c0-7 6-12 13-12h16c6 0 11-5 11-11v-7c0-7-6-13-28-13Zm-7 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>
      <path fill="#FFD43B" d="M32 58c12 0 14-6 14-13v-5H29v-4h23c7 0 10-6 10-14S58 6 51 6h-7v9c0 7-6 12-13 12H15c-6 0-11 5-11 11v7c0 7 6 13 28 13Zm7-8a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"></path>
    </svg>
  `,
  flask: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M24 8h16M28 8v16L14 48c-2 4 1 8 6 8h24c5 0 8-4 6-8L36 24V8" fill="none" stroke="#111827" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M22 44h20" stroke="#0EA5E9" stroke-width="6" stroke-linecap="round"></path>
    </svg>
  `,
  node: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path fill="#339933" d="M32 5 56 19v26L32 59 8 45V19L32 5Z"></path>
      <text x="32" y="39" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="800" fill="#fff">JS</text>
    </svg>
  `,
  express: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="8" y="14" width="48" height="36" rx="8" fill="#111827"></rect>
      <path d="M18 24h28M18 32h20M18 40h28" stroke="#fff" stroke-width="4" stroke-linecap="round"></path>
    </svg>
  `,
  rest: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="8" y="16" width="48" height="32" rx="8" fill="#0EA5E9"></rect>
      <path d="M18 32h28M38 24l8 8-8 8" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  `,
  knn: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="18" cy="20" r="7" fill="#8B5CF6"></circle>
      <circle cx="46" cy="18" r="7" fill="#8B5CF6"></circle>
      <circle cx="24" cy="46" r="7" fill="#22C55E"></circle>
      <circle cx="48" cy="42" r="7" fill="#F59E0B"></circle>
      <path d="M23 24 41 19M21 27l3 12M42 39l-12 5" stroke="#64748B" stroke-width="4" stroke-linecap="round"></path>
    </svg>
  `,
  vision: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M6 32s10-16 26-16 26 16 26 16-10 16-26 16S6 32 6 32Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="5"></path>
      <circle cx="32" cy="32" r="10" fill="#0284C7"></circle>
      <circle cx="36" cy="28" r="3" fill="#fff"></circle>
    </svg>
  `,
  pytorch: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M34 8v20a14 14 0 1 1-12-7" fill="none" stroke="#EE4C2C" stroke-width="8" stroke-linecap="round"></path>
      <circle cx="43" cy="15" r="4" fill="#EE4C2C"></circle>
    </svg>
  `,
  tensorflow: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path fill="#FF6F00" d="M32 6 56 20v12l-8-5v23l-12 7V20l-8 5v32l-12-7V27l-8 5V20L32 6Z"></path>
    </svg>
  `,
};
