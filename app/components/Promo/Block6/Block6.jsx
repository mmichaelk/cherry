import React from 'react';
import styled from 'styled-components';
import { theme, mobile, desktop, fontSize } from 'lib/theme';
import Mobile from 'components/lib/Mobile';
import Desktop from 'components/lib/Desktop';

import ContentBlock from 'components/lib/ContentBlock';
import Divider from 'components/lib/Divider';
import BlockTitle from './../BlockTitle';
import TextBlock from './../TextBlock';

import SensorImg from './sensor.svg';
import UnitImg from './unit.svg';

import SensorMobileImg from './sensor-mobile.svg';
import UnitMobileImg from './unit-mobile.svg';

const Block = styled(ContentBlock)`
  margin-top: 170px;
  ${mobile(`
    margin-top: 102px;
    border-bottom: none;
  `)}
`;

const Columns = styled.div`
  ${desktop(`
    display: flex;
    justify-content: space-between;
    width: 780px;
    margin: 93px auto 58px auto;
  `)}
`;

const Column = styled.div`
  ${desktop(`
    box-sizing: border-box;
    padding-left: 14px;
    width: 300px;
  `)}
`;

const Title = styled(BlockTitle)`
  ${mobile(`
    margin-bottom: 33px;
  `)}
`;

const Text = styled(TextBlock).attrs({
  compact: true,
})`
  ul {
    color: ${theme.colors.greyText};
  }
  ${desktop(`
    width: 304px;
  `)}
  ${mobile(`
    text-align: left;
    margin-top: 30px;
    margin-bottom: 77px;
    ${fontSize(16, 25)}
    letter-spacing: 0.24px;
  `)}
`;

const Image = styled.div`
  ${desktop(`
    height: 465px;
  `)}
  ${mobile(`
    text-align: center;
    padding: 43px 0 0 0;
  `)}
`;

const Sensor = styled(SensorImg)`
  position: relative;
  margin: 25px 0 0 -57px;
`;

const Unit = styled(UnitImg)`
  position: relative;
  margin: 0 0 0 -101px;
`;

const MobileSensor = styled(SensorMobileImg)`
`;

const MobileUnit = styled(UnitMobileImg)`
`;

const MobileDivider = styled(Divider)`
  margin-top: 4px;
  margin-bottom: 46px;
`;

const Block4 = () => (
  <Block>
    <Title>Let’s see what’s inside the box.</Title> {/* TODO: i18n */}
    <Columns>
      <Column>
        <Image>
          <Desktop><Sensor /></Desktop>
          <Mobile><MobileSensor /></Mobile>
        </Image>
        <Text title="Wireless Sensors.">
          <p>Your home’s IQ. The more sensors, the smarter your home. Here’s what they do:</p>
          <ul>
            <li>Capture optical and sound data</li>
            <li>Sends data to the processing unit</li>
            <li>Runs on batteries for 2-3 months</li>
          </ul>
        </Text>
      </Column>
      <MobileDivider />
      <Column>
        <Image>
          <Desktop><Unit /></Desktop>
          <Mobile><MobileUnit /></Mobile>
        </Image>
        <Text title="Home unit — brain of Cherry.">
          <p>The brain. Where the AI works. Here’s what it does:</p>
          <ul>
            <li>Establishes secured wireless network for sensors</li>
            <li>Receives, processes and analyzes signals from sensors</li>
            <li>Stores all data in a local lockbox, not on the cloud</li>
            <li>Self-sustained unit that functions during power outage</li>
          </ul>
        </Text>
      </Column>
    </Columns>
    <Divider />
  </Block>
);

export default Block4;
