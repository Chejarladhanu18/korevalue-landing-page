export default function NetworkBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-40 animate-network">

      <svg
        className="w-full h-full"
        viewBox="0 0 1600 900"
        xmlns="http://www.w3.org/2000/svg"
      >

        
        <g
          stroke="#77B900"
          strokeWidth="1.2"
          className="network-lines"
        >

          <line x1="100" y1="100" x2="400" y2="200" />
          <line x1="400" y1="200" x2="650" y2="120" />
          <line x1="650" y1="120" x2="900" y2="300" />
          <line x1="900" y1="300" x2="1200" y2="200" />
          <line x1="400" y1="200" x2="700" y2="400" />
          <line x1="700" y1="400" x2="1000" y2="500" />
          <line x1="1000" y1="500" x2="1300" y2="300" />

        </g>

        
        <g fill="#77B900" className="network-nodes">

          <circle cx="100" cy="100" r="4" />
          <circle cx="400" cy="200" r="4" />
          <circle cx="650" cy="120" r="4" />
          <circle cx="900" cy="300" r="4" />
          <circle cx="1200" cy="200" r="4" />
          <circle cx="700" cy="400" r="4" />
          <circle cx="1000" cy="500" r="4" />
          <circle cx="1300" cy="300" r="4" />

        </g>

      </svg>

    </div>
  );
}