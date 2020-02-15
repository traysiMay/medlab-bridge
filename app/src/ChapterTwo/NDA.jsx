import React, { useState } from "react";
import { WhiteButton } from "../_styles/basic";
import styled from "styled-components";

const RectButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bolder;
`;
const SmallWhiteButton = styled(WhiteButton)`
  background: white;
  height: 9rem;
  color: black;
  line-height: 9rem;
  text-align: center;
  border-radius: 6rem;
  font-weight: bold;
  font-size: 1.4rem;
  width: 9rem;
  margin: 1rem auto 2rem;
  cursor: pointer;
`;

const RectButton = styled.div`
  background: white;
  height: 6rem;
  width: 17rem;
  font-size: 2rem;
  text-align: center;
  line-height: 6rem;
  color: black;
  margin: 2rem 0;
  padding: 1rem;
`;
const NDA = ({ history }) => {
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 && (
        <div>
          <div
            style={{ textAlign: "center", margin: "1rem", fontSize: "3rem" }}
          >
            Now you must agree to the fine print!
          </div>
          <div style={{ fontSize: ".1rem", margin: "2rem" }}>{text}</div>
          <SmallWhiteButton onClick={() => setStep(2)}>
            Yes ok!
          </SmallWhiteButton>
        </div>
      )}
      {step === 2 && (
        <RectButtonContainer>
          Monarch May 8
          <RectButton onClick={() => history.push("/rsvp")}>
            RSVP by Email
          </RectButton>
          <RectButton>Mint Toad Ticket</RectButton>
        </RectButtonContainer>
      )}
    </div>
  );
};

export default NDA;

var text = `As a human of planet earth I solemnly agree that I am actually a raptor. As per the agreement that was aforementioned about actually being a dinosaur (most likely from the future past, but not exclusively from or to another dimension), I understand that this additional identity to that one that is reflected on whatever form of identity the oligarchy that I was arbitrarily born into bestowed upon me comes with the responsibility of treating others as music has down unto thy. As a newly, or past ordained, clever cute dinosaur, I agree that I will treat everyone at Monarch with the same respect that I would treat a combination of my grandmother, best friend, partner, and beloved dog. I understand that in this case ‘everyone’ refers to all ordained dinosaurs, as well as those working at Monarch to provide the best experience they can while we are all probably under the influence of various substances that should make us even more merry than we would be on any other normal boring ass day that our lives usually encompass. I understand that this agreement of treating others in more compassionate fashion than usually is expected, in a society that we all live in, begins at the point I start making my way to Monarch and does not end. I understand that anyone that I come across while I am journeying to the party via rideshare, scooter, skateboard, bicycle, motor-bicycle, eletric-motor-bicycle, motorcycle, walking, running, jogging, skipping, galavanting, crawling, rolling, jumping, etc. I will acknowledge as another human and/or raptor, and as such will do whatever I can to acknowledge their beauty and existence by sharing a respectful gaze and telling them something nice and sincere. I agree that none of these things when I think about them are not actually very difficult or remarkable, but for whatever reason we forget how elegant and fun it can be to make another human bean’s day a tad brighter. I understand that even though these practices will make me be more enthusiastic than I generally am, I will still be mindful and respectful of others’s space, and I will not impose anything upon another that makes them uncomfortable. From that angle, I will dedicate a significant part of my attention to listening to those around me, and make sure that I take a moment before speaking over those who are more introverted, but probably have insightful wisdom for us all. `;
