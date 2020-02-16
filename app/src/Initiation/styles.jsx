import styled from "styled-components";

export const EmptyToadContainer = styled.div`
  display: grid;
  grid-column: 2;
  grid-row-gap: 1.9rem;
  padding: 1.2rem;
  border: 1rem white solid;
`;

export const ToadContainer = styled.div`
  background: rgb(60, 235, 227);
  border: 1rem white solid;
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "headername headername headername headername"
    "headericon headericon headericon headericon"
    "rheader rheader rheader rheader"
    "qrspace qrspace qrspace qrspace"
    "toadman toadman toadman toadman";
`;

export const HeaderName = styled.h1`
  grid-area: headername;
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  border-bottom: 0.4rem white solid;
  margin: 3rem;
  overflow-wrap: break-word;
`;
export const HeaderIcon = styled.h1`
  grid-area: headericon;
  text-align: center;
  font-size: 5rem;
  border: 11px white solid;
  border-radius: 18rem;
  width: 6rem;
  margin: auto;
  color: black;
  margin-top: -1.6rem;
  background: #a6899d;
`;

const Header = styled.div`
  font-size: 4rem;
  margin-bottom: -3rem;
`;

export const LHeader = styled(Header)`
  grid-area: lheader;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const RHeader = styled(Header)`
  grid-area: rheader;
  text-align: right;
  letter-spacing: 0.1rem;
  width: 49.7rem;
  margin-bottom: 1rem;
`;

export const QRSpace = styled.div`
  grid-area: qrspace;
  display: grid;
  grid-template-areas:
    "qr qr"
    "admit admit";
  border: 10px black solid;
  padding: 0rem;
  margin: 1rem;
`;

export const Qr = styled.img`
  grid-area: qr;
  border: 1rem white solid;
  width: 87%;
  margin: auto;
`;

export const Admit = styled.div`
  grid-area: admit;
  font-size: 1rem;
  -webkit-letter-spacing: 0.1rem;
  -moz-letter-spacing: 0.1rem;
  -ms-letter-spacing: 0.1rem;
  letter-spacing: 0.1rem;
  text-align: center;
  padding: 2rem 0rem 0rem;
  font-weight: bold;
  color: black;
  border: 1rem white solid;
  background: #c5ffb2;
  p {
    font-size: 8rem;
    margin: 1rem;
    font-weight: bold;
  }
`;

export const BottomLine = styled.div`
  font-size: 1.2rem;
  text-align: right;
  border-bottom: 0.5rem black dashed;
  margin: 1rem;
  padding: 1rem;
  font-weight: 700;
`;

export const SporeContainer = styled.div`
  margin-top: 1.6rem;
  canvas {
    max-width: 300px;

    margin: auto;
    display: block;
  }
`;
