import React from 'react';
import styled from 'styled-components';
import { theme, mobile, cols10 } from 'lib/theme';

import ContentBlock from 'components/lib/ContentBlock';
import Anchor from 'components/Header/Navigation/Anchor';
import BlockTitle from './../BlockTitle';
import TextBlock from './../TextBlock';

import DownloadIco from './download.svg';
import AsessmentIco from './assessment.svg';
import InstallationIco from './installation.svg';
import PlaceIco from './place.svg';

const Block = styled(ContentBlock)`
  margin: 175px 0 92px 0;
  ${mobile(`
    display: none;
  `)}
`;

const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 81px 0;
`;

const Column = styled.div`
  width: 380px;
  padding: 0 0 0 80px;
  position: relative;
  ${cols10(`
    padding-left: 0;
    margin-right: 100px;
  `)}
`;

const Text = styled(TextBlock).attrs({
  compact: true,
})`
  width: auto;
`;

const Title = styled(BlockTitle)`
  margin-bottom: 71px;
`;

const Icon = styled.div`
  position: relative;
  margin: 0 0 3px -10px;
`;

const Num = styled.div`
  position: absolute;
  margin: -2px 0 0 -40px;
  box-sizing: border-box;
  padding: 5px 0 0 1px;
  text-align: center;
  ${theme.fonts.futuraBold}
  font-size: 16px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: ${theme.colors.darkGrey};
  color: ${theme.colors.white};
`;

const Block4 = () => (
  <Block>
    <Anchor id="getstarted" offset="-100" />
    <Title>Getting started is easy. Seriously.</Title>
    <Columns>
      <Column>
        <Icon><DownloadIco /></Icon>
        <Num>1</Num>
        <Text title="Download Cherry app.">
          That’s about the only thing you’ll do by yourself.
        </Text>
      </Column>
      <Column>
        <Icon><AsessmentIco /></Icon>
        <Num>2</Num>
        <Text title="Personalized assessment.">
          A Cherry security specialist discusses
          your home goals with you (yes, an actual person)
          and designs a coverage plan with your home
          management needs in mind.
        </Text>
      </Column>
    </Columns>
    <Columns>
      <Column>
        <Icon><InstallationIco /></Icon>
        <Num>3</Num>
        <Text title="Easy installation.">
          We pair sensors with the base station, charge
          batteries and install the latest updates for you.
          When you receive your Cherry, it’ll be ready to
          serve you right out of the box.
        </Text>
      </Column>
      <Column>
        <Icon><PlaceIco /></Icon>
        <Num>4</Num>
        <Text title="Place Cherry in pre-designated spots.">
          Follow the personalized mounting guide and put
          Cherry units into the marked areas. No drilling
          or climbing ladders. Cherry just sticks to walls
          or stands on shelves and there are no wires.
        </Text>
      </Column>
    </Columns>
  </Block>
);

export default Block4;
