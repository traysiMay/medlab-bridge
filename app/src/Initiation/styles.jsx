import styled from "styled-components";

export const EmptyToadContainer = styled.div`
  display: grid;
  grid-column: 2;
  grid-row-gap: 6rem;
`;

export const ToadContainer = styled.div`
  background: rgb(235, 60, 60);
  border: 2rem white solid;
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
  font-size: 6rem;
  text-transform: uppercase;
  border-bottom: 1rem white solid;
  margin: 3rem;
  overflow-wrap: break-word;
`;
export const HeaderIcon = styled.h1`
  grid-area: headericon;
  text-align: center;
  font-size: 9rem;
  border: 45px white solid;
  border-radius: 21rem;
  width: 11rem;
  margin: auto;
  color: black;
  margin-top: 3rem;
  margin-bottom: 3rem;
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
  border: 60px black solid;
  padding: 3rem;
  margin: 2rem;
`;

export const Qr = styled.img`
  grid-area: qr;
  border: 3rem white solid;
  margin: auto;
`;

export const Admit = styled.div`
  grid-area: admit;
  font-size: 3rem;
  letter-spacing: 0.1rem;
  text-align: center;
  padding: 2rem;
  font-weight: bold;
  color: black;
  border: 3rem white solid;
  background: #e94003;
  margin: 3rem;
  p {
    font-size: 8rem;
    margin: 1rem;
    font-weight: bold;
  }
`;

export const BottomLine = styled.div`
  font-size: 4rem;
  text-align: right;
  border-bottom: 1rem black dashed;
  margin: 1rem;
  padding: 1rem;
  font-weight: bold;
`;
