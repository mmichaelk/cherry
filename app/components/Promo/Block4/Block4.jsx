import React from 'react';
import styled from 'styled-components';
import { mobile, medium } from 'lib/theme';

import Anchor from 'components/Header/Navigation/Anchor';
import ContentBlock from 'components/lib/ContentBlock';
import Desktop from 'components/lib/Desktop';
import BlockTitle from './../BlockTitle';
import TextBlock from './../TextBlock';
import Available2018 from './Available2018';
import OverlayImg from './OverlayImg';

import img1 from './1-redefining.jpg';
import imgOverlay1 from './1-redefining-overlay.jpg';
import img2 from './2-knowing.jpg';
import imgOverlay2 from './2-knowing-overlay.jpg';
import img3 from './3-keeping.jpg';
import imgOverlay3 from './3-keeping-overlay.jpg';
import img4 from './4-managing.jpg';
import imgOverlay4 from './4-managing-overlay.jpg';
import img5 from './5-health.jpg';
import imgOverlay5 from './5-health-overlay.jpg';

import img2Small from './2-1-knowing-small.jpg';
import imgOverlay2Small from './2-1-knowing-overlay-small.jpg';

const StyledBlock = styled(ContentBlock)`
  overflow: hidden;
  padding: 194px 0 5px 0;
  ${mobile(`
    padding-top: 23px;
  `)}
`;

const StyledBlockTitle = styled(BlockTitle)`
  margin-bottom: 81px;
  ${mobile(`
    margin-bottom: 86px;
  `)}
`;

const StyledTextBlock = styled(TextBlock).attrs({
  horizontal: true,
})`
  margin-top: 68px;
  margin-bottom: 177px;
  ${mobile(`
    margin-top: 25px;
    margin-bottom: 58px;
  `)}
`;

const title = (text, available2018) => (
  <span>
    { text }
    { available2018 &&
      <Available2018 />
    }
  </span>
);

const OverlayImgLarge = styled.div`
  display: block;
  ${medium(`
    display: none;
  `)}
`;

const OverlayImgSmall = styled.div`
  display: none;
  ${medium(`
    display: block;
  `)}
`;

/* eslint-disable react/jsx-closing-bracket-location */
const Block4 = () => (
  <StyledBlock>
    <Anchor id="technology" offset="-100" mobileOffset="-40" />
    <StyledBlockTitle>Securing and managing your home with Cherry.</StyledBlockTitle>

    <OverlayImg img={img1} overlay={imgOverlay1} />
    <StyledTextBlock title="Redefining home security.">
      Cherry brings together AI, computer vision and biometrics.
      The results are intelligent monitoring, virtual mapping
      and the right notifications at the right times. Your
      home has never been safer.
    </StyledTextBlock>

    <OverlayImgLarge>
      <OverlayImg img={img2} overlay={imgOverlay2} />
    </OverlayImgLarge>
    <OverlayImgSmall>
      <OverlayImg img={img2Small} overlay={imgOverlay2Small} center={12} />
    </OverlayImgSmall>
    <StyledTextBlock title="Knowing, not watching.">
      Cherry uses a combination of alternative biometrics
      to recognize people, pets, objects, postures and
      behaviour patterns.
    </StyledTextBlock>

    <Desktop>
      <OverlayImg img={img3} overlay={imgOverlay3} />
      <StyledTextBlock title={title('Keeping the family in touch.', true)}>
        Cherry’s also like a dedicated housekeeper.
        It can nudge family members to check
        in at certain times, keeping everyone on track.
      </StyledTextBlock>

      <OverlayImg img={img4} overlay={imgOverlay4} />
      <StyledTextBlock title={title('Managing your front door intelligently.', true)}>
        Your front door is the gateway to our family
        and lives. Cherry makes sure you are always
        aware of important activity there.
      </StyledTextBlock>

      <OverlayImg img={img5} overlay={imgOverlay5} />
      <StyledTextBlock title={title('Health and wellbeing.', true)}>
        Timely detecting a stroke, heart attack
        or choking can mean a difference between life and
        death. Cherry is trained to tell the symptoms of
        health hazards early and react by notifying
        family members and calling for help.
      </StyledTextBlock>
    </Desktop>
  </StyledBlock>
);

export default Block4;
