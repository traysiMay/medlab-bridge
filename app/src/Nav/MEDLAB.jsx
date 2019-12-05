import React from "react";
export const MEDLAB = ({
  goHome,
  onCircle,
  onHex,
  onSquare,
  onTriangle,
  onHam
}) => {
  return (
    <svg
      version="1.2"
      baseProfile="tiny"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 411 72"
    >
      <g id="HEADER">
        <polyline
          id="triangle"
          fill="#FFFFFF"
          points="290.6,52.5 305.6,22.5 320.6,52.5 290.6,52.5 	"
        />
        <polygon
          id="pentagon"
          fill="#FFFFFF"
          points="378.7,53.1 361.9,53.3 353.6,38.7 362.1,23.9 378.9,23.7 387.2,38.3 	"
        />
        <g>
          <path
            fill="#FFFFFF"
            d="M175.2,32.3V5.2h8.2l4.9,18.5l4.9-18.5h8.2v27.1h-5.1V10.9L191,32.3h-5.3l-5.4-21.3v21.3H175.2z"
          />
          <path
            fill="#FFFFFF"
            d="M198.6,32.3V5.2h15.9v4.6h-11.5v6h10.7v4.6h-10.7v7.4h12v4.6H198.6z"
          />
          <path
            fill="#FFFFFF"
            d="M215.8,5.2h9.9c2.2,0,3.9,0.2,5.1,0.5c1.6,0.5,2.9,1.3,4,2.5c1.1,1.2,2,2.7,2.6,4.4
			c0.6,1.7,0.9,3.9,0.9,6.4c0,2.2-0.3,4.2-0.8,5.8c-0.7,2-1.6,3.6-2.9,4.8c-0.9,0.9-2.2,1.6-3.8,2.2c-1.2,0.4-2.8,0.6-4.8,0.6h-10.2
			V5.2z M221.2,9.8v17.9h4c1.5,0,2.6-0.1,3.3-0.3c0.9-0.2,1.6-0.6,2.2-1.1s1.1-1.4,1.4-2.6c0.4-1.2,0.5-2.9,0.5-5s-0.2-3.7-0.5-4.8
			c-0.4-1.1-0.9-2-1.5-2.6c-0.7-0.6-1.5-1.1-2.5-1.3c-0.8-0.2-2.2-0.3-4.4-0.3H221.2z"
          />
          <path fill="#FFFFFF" d="M175.5,64.9V38.1h5.5v22.3h13.6v4.6H175.5z" />
          <path
            fill="#FFFFFF"
            d="M215.4,64.9h-5.8l-2.3-6.2h-10.6l-2.2,6.2h-5.7l10.3-27.1h5.7L215.4,64.9z M205.5,54.2l-3.7-10.1
			l-3.6,10.1H205.5z"
          />
          <path
            fill="#FFFFFF"
            d="M215.9,37.9h10.6c2.1,0,3.7,0.1,4.7,0.3c1,0.2,2,0.6,2.8,1.1c0.8,0.6,1.5,1.3,2,2.3c0.5,0.9,0.8,2,0.8,3.2
			c0,1.3-0.3,2.4-1,3.5c-0.7,1.1-1.6,1.9-2.7,2.4c1.6,0.5,2.9,1.3,3.7,2.5c0.9,1.2,1.3,2.5,1.3,4.1c0,1.2-0.3,2.4-0.8,3.6
			c-0.6,1.2-1.3,2.1-2.3,2.8s-2.2,1.1-3.6,1.3c-0.9,0.1-3,0.2-6.5,0.2h-9V37.9z M221.2,42.4v6.3h3.5c2.1,0,3.4,0,3.9-0.1
			c0.9-0.1,1.6-0.4,2.2-1s0.8-1.2,0.8-2.1c0-0.8-0.2-1.5-0.7-2s-1.1-0.8-2-1c-0.5-0.1-2.1-0.1-4.6-0.1H221.2z M221.2,53.1v7.2h5
			c1.9,0,3.2-0.1,3.7-0.2c0.8-0.1,1.4-0.5,1.9-1.1c0.5-0.6,0.8-1.3,0.8-2.3c0-0.8-0.2-1.5-0.6-2.1c-0.4-0.6-0.9-1-1.7-1.2
			s-2.3-0.4-4.8-0.4H221.2z"
          />
        </g>
        <g id="ham" onClick={onHam}>
          <rect x="23.8" y="22.5" fill="#FFFFFF" width="30" height="30" />
          <rect
            opacity="0"
            x="23.8"
            y="22.5"
            fill="#FFFFFF"
            width="100"
            height="30"
          />

          <circle fill="#FFFFFF" cx="101.8" cy="37.5" r="15" />
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeMiterlimit="10"
            d="M46.5,25.5c27-4,22.1,12,52,0"
          />
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeMiterlimit="10"
            d="M46.5,37.5c-3-3,37,10,47,0"
          />
          <path
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeMiterlimit="10"
            d="M48.5,49.5c0,0,31,6,50-2"
          />
        </g>
      </g>
    </svg>

    // <svg version="1.2" baseProfile="tiny" x="0px" y="0px" viewBox="0 0 411 72">
    //   <g id="fatterHeader">
    //     <g>
    //       <rect onClick={onSquare} x="23.8" y="23" fill="#FFFFFF" width="30" height="30" style={{ transformOrigin: "23.8px 23px" }} />
    //       <circle onClick={onCircle} fill="#FFFFFF" cx="101.8" cy="38" r="15" style={{ transformOrigin: "101.8px 38px" }} />
    //       <polyline
    //         onClick={onTriangle}
    //         fill="#FFFFFF"
    //         points="290.6,53 305.6,23 320.6,53 290.6,53 		"
    //       />
    //       <polygon
    //         onClick={onHex}
    //         style={{ transformOrigin: "378.7px 38px" }}
    //         fill="#FFFFFF"
    //         points="378.7,53.6 361.9,53.8 353.6,39.2 362.1,24.4 378.9,24.2 387.2,38.8 		"
    //       />
    //     </g>
    //     <text
    //       onClick={goHome}
    //       transform="matrix(1 0 0 1 172.5593 32.7749)"
    //       fill="#FFFFFF"
    //       fontFamily="Arial"
    //       fontWeight="bold"
    //       fontSize="37.8543px"
    //     >
    //       M
    //   </text>
    //     <text
    //       transform="matrix(0.79 0 0 1 196.408 32.7749)"
    //       fill="#FFFFFF"
    //       fontFamily="Arial"
    //       fontWeight="bold"
    //       fontSize="37.8543px"
    //     >
    //       E
    //   </text>
    //     <text
    //       transform="matrix(0.99 0 0 1 213.0647 32.7749)"
    //       fill="#FFFFFF"
    //       fontFamily="Arial"
    //       fontWeight="bold"
    //       fontSize="37.8543px"
    //     >
    //       D
    //   </text>
    //     <text
    //       transform="matrix(1 0 0 1 172.5593 65.4497)"
    //       fill="#FFFFFF"
    //       fontFamily="Arial"
    //       fontWeight="bold"
    //       fontSize="37.8543px"
    //     >
    //       L
    //   </text>
    //     <text
    //       transform="matrix(0.98 0 0 1 188.7551 65.4497)"
    //       fill="#FFFFFF"
    //       fontFamily="Arial"
    //       fontWeight="bold"
    //       fontSize="37.8543px"
    //     >
    //       A
    //   </text>
    //     <text
    //       transform="matrix(0.98 0 0 1 213.134 65.4497)"
    //       fill="#FFFFFF"
    //       fontFamily="Arial"
    //       fontWeight="bold"
    //       fontSize="37.8543px"
    //     >
    //       B
    //   </text>
    //   </g>
    // </svg>
  );
};
