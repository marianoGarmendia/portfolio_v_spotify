// eslint-disable-next-line react/prop-types
function FirestoreLogo({ size = "sm" }) {
  const sizeSVG = {
    sm: "25",
    md: "35",
    lg: "55",
  };

  return (
    <div>
      <svg
        viewBox="0 0 256 351"
        width={sizeSVG[size]}
        height={sizeSVG[size]}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid"
      >
        <defs>
          <filter
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            filterUnits="objectBoundingBox"
            id="b"
          >
            <feGaussianBlur
              stdDeviation="17.5"
              in="SourceAlpha"
              result="shadowBlurInner1"
            />
            <feOffset in="shadowBlurInner1" result="shadowOffsetInner1" />
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowInnerInner1"
            />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
              in="shadowInnerInner1"
            />
          </filter>
          <filter
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            filterUnits="objectBoundingBox"
            id="d"
          >
            <feGaussianBlur
              stdDeviation="3.5"
              in="SourceAlpha"
              result="shadowBlurInner1"
            />
            <feOffset
              dx="1"
              dy="-9"
              in="shadowBlurInner1"
              result="shadowOffsetInner1"
            />
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowInnerInner1"
            />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
              in="shadowInnerInner1"
            />
          </filter>
          <path
            d="m1.253 280.732 1.605-3.131 99.353-188.518-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188L1.253 280.732Z"
            id="a"
          />
          <path
            d="m134.417 148.974 32.039-32.812-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109-.53 1.744 31.678 58.556Z"
            id="c"
          />
        </defs>
        <path
          d="m0 282.998 2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951L0 282.998Z"
          fill="#FFC24A"
        />
        <use fill="#FFA712" fillRule="evenodd" xlinkHref="#a" />
        <use filter="url(#b)" xlinkHref="#a" />
        <path
          d="m135.005 150.38 32.955-33.75-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86l32.584 60.233Z"
          fill="#F4BD62"
        />
        <use fill="#FFA50E" fillRule="evenodd" xlinkHref="#c" />
        <use filter="url(#d)" xlinkHref="#c" />
        <path
          fill="#F6820C"
          d="m0 282.998.962-.968 3.496-1.42 128.477-128 1.628-4.431-32.05-61.074z"
        />
        <path
          d="m139.121 347.551 116.275-64.847-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"
          fill="#FDE068"
        />
        <path
          d="M254.354 282.16 221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006l115.392-64.355Z"
          fill="#FCCA3F"
        />
        <path
          d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983 115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847-.285-1.752-115.99 64.689Z"
          fill="#EEAB37"
        />
      </svg>
    </div>
  );
}

export default FirestoreLogo;
