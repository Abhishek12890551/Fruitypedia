const fs = require('fs');
const path = require('path');

const fontPath = path.join(__dirname, '../public/fonts/ballet/ballet-latin-400-normal.woff2');
const fontB64 = fs.readFileSync(fontPath).toString('base64');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-18 5 70 70" fill="none">
  <defs>
    <style>
      @font-face {
        font-family: 'Ballet';
        font-style: normal;
        font-weight: 400;
        src: url('data:font/woff2;charset=utf-8;base64,${fontB64}') format('woff2');
      }
      .brand-fp {
        font-family: 'Ballet', cursive;
        font-size: 27px;
        fill: #ffffff;
        user-select: none;
        filter: drop-shadow(0 0 1.5px rgba(0, 0, 0, 0.95)) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.75));
      }
      @media (prefers-color-scheme: light) {
        .brand-fp {
          fill: #18181b;
          filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.9));
        }
      }
    </style>
    <filter id="rubyGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="1.2" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Fully Transparent Canvas: Only Cursive fp brand text in Ballet -->
  <text x="24" y="38" class="brand-fp">fp</text>

  <!-- Ruby Glow Accent Dot -->
  <circle cx="47" cy="36" r="2.5" fill="#f43f5e" filter="url(#rubyGlow)" />
</svg>
`;

const outputPath = path.join(__dirname, '../public/favicon.svg');
fs.writeFileSync(outputPath, svg.trim());
console.log('Successfully generated public/favicon.svg');
