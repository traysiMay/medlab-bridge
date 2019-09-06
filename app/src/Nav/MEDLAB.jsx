import React from "react";
export const MEDLAB = ({ goHome, onCircle, onHex, onSquare, onTriangle }) => {
  return (
    <svg version="1.2" baseProfile="tiny" x="0px" y="0px" viewBox="0 0 411 72">
      <g id="fatterHeader">
        <g>
          <rect onClick={onSquare} x="23.8" y="23" fill="#FFFFFF" width="30" height="30" style={{ transformOrigin: "23.8px 23px" }} />
          <circle onClick={onCircle} fill="#FFFFFF" cx="101.8" cy="38" r="15" style={{ transformOrigin: "101.8px 38px" }} />
          <polyline
            onClick={onTriangle}
            fill="#FFFFFF"
            points="290.6,53 305.6,23 320.6,53 290.6,53 		"
          />
          <polygon
            onClick={onHex}
            style={{ transformOrigin: "378.7px 38px" }}
            fill="#FFFFFF"
            points="378.7,53.6 361.9,53.8 353.6,39.2 362.1,24.4 378.9,24.2 387.2,38.8 		"
          />
        </g>
        <text
          onClick={goHome}
          transform="matrix(1 0 0 1 172.5593 32.7749)"
          fill="#FFFFFF"
          fontFamily="Arial"
          fontWeight="bold"
          fontSize="37.8543px"
        >
          M
      </text>
        <text
          transform="matrix(0.79 0 0 1 196.408 32.7749)"
          fill="#FFFFFF"
          fontFamily="Arial"
          fontWeight="bold"
          fontSize="37.8543px"
        >
          E
      </text>
        <text
          transform="matrix(0.99 0 0 1 213.0647 32.7749)"
          fill="#FFFFFF"
          fontFamily="Arial"
          fontWeight="bold"
          fontSize="37.8543px"
        >
          D
      </text>
        <text
          transform="matrix(1 0 0 1 172.5593 65.4497)"
          fill="#FFFFFF"
          fontFamily="Arial"
          fontWeight="bold"
          fontSize="37.8543px"
        >
          L
      </text>
        <text
          transform="matrix(0.98 0 0 1 188.7551 65.4497)"
          fill="#FFFFFF"
          fontFamily="Arial"
          fontWeight="bold"
          fontSize="37.8543px"
        >
          A
      </text>
        <text
          transform="matrix(0.98 0 0 1 213.134 65.4497)"
          fill="#FFFFFF"
          fontFamily="Arial"
          fontWeight="bold"
          fontSize="37.8543px"
        >
          B
      </text>
      </g>
    </svg>
  )
}
