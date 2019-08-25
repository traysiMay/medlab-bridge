import styled from "styled-components";

export const EmptyToadContainer = styled.div`
  display: grid;
  grid-column: 2;
  grid-row-gap: 6rem;
`;

export const ToadContainer = styled.div`
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "lheader lheader lheader lheader"
    "rheader rheader rheader rheader"
    "qrspace qrspace qrspace qrspace"
    "toadman toadman toadman toadman";
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
  grid-template-areas: "qr qr admit admit";
  border: 60px white solid;
  padding: 3rem;
  width: 36rem;
`;

export const Qr = styled.img`
  grid-area: qr;
  width: 100%;
`;

export const Admit = styled.div`
  grid-area: admit;
  font-size: 3rem;
  letter-spacing: 0.1rem;
  text-align: center;
  padding: 2rem;
  font-weight: bold;
  p {
    font-size: 8rem;
    margin: 1rem;
    font-weight: bold;
  }
`;
