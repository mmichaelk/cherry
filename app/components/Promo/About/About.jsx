import React from 'react';
import styled from 'styled-components';
import { theme, cols10, cols8, cols6, mobile, fontSize } from 'lib/theme';

import Divider from 'components/lib/Divider';
import ContentBlock from 'components/lib/ContentBlock';
import TextBlock from './../TextBlock';
import { StyledBlockTitle } from './../Block1/Block1';

import maxImg from './max.jpg';
import stasImg from './stas.jpg';
import nickImg from './nick.jpg';
import mitImg from './mit.jpg';

import { Columns, Column } from './../../lib/Columns';

const Block1 = styled(ContentBlock)`
  padding: 122px 0 172px 0;
  ${mobile(`
    padding: 155px 0 63px 0;
  `)}
`;

const Block2 = styled(ContentBlock)`
  padding: 165px 0 131px 0;
  ${mobile(`
    padding: 69px 0 10px 0;
  `)}
`;

const Block3 = styled(ContentBlock)`
  padding: 163px 0 172px 0;
  ${mobile(`
    padding: 69px 0 73px 0;
  `)}
`;

const BlockTitle = styled(StyledBlockTitle)`
  padding-bottom: 40px;
  text-align: center;
  width: 100%;
  ${mobile(`
    padding-bottom: 12px;
    margin: 0;
  `)}
`;

const Cols = styled(Columns)`
  ${mobile(`
    display: block;
  `)}
  ${cols10(`
    display: flex;
    width: 780px;
    margin: 0 auto;
  `)}
`;

const Col = styled(Column)`
  min-width: 460px;
  flex-grow: 0;
  ${mobile(`
    flex: none;
    min-width: 0;
    padding-bottom: 10px;
  `)}
  ${cols10(`
    flex: 1;
    flex-grow: 0;
    min-width: 380px;
    padding-bottom: 0;
  `)}
`;

const Block2Col = styled(Col)`
  ${mobile(`
    padding-bottom: 62px;
  `)}
`;

const Block2Columns = styled(Cols)`
  padding-bottom: 41px;
  ${mobile(`
    padding-bottom: 0;
  `)}
`;

const Photo = styled.img.attrs({
  width: 460,
  height: 220,
})`
  margin: 56px 0 14px 0;
  width: 100%;
  height: auto;
  ${mobile(`
    margin: 15px 0 26px 0;
  `)}
  ${cols8(`
    width: 620px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  `)}
  ${cols6(`
    width: 460px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  `)}
`;

const Text = styled(TextBlock)`
  ${cols10(`
    width: 100%;
  `)}
  ${mobile(`
    div, h3 {
      ${fontSize(16, 25)}
      letter-spacing: 0.24px;
    }
    h3 {
      margin-bottom: 10px;
    }
  `)}
`;

const Name = styled.span`
  color: ${theme.colors.red};
`;

const About = () => (
  <div>
    <Block1>
      <BlockTitle>Cherry story.</BlockTitle>
      <Cols>
        <Col>
          <Text>
            Cherry Home was sparked by a simple idea: we wanted to feel completely safe at
            home. That meant protecting from the outside world, creating a safer home inside,
            and not being spied on anywhere.
          </Text>
        </Col>
        <Col>
          <Text>
            For more than a year, award-winning serial entrepreneurs with previous exits to
            Facebook, Google and Apple have worked hard with AI scientists, computer vision
            engineers and product designers in complete stealth mode to create the revolution
            in Home Security and Family Safety.
          </Text>
        </Col>
      </Cols>
    </Block1>
    <Divider />
    <Block2>
      <TextBlock title="Core team members." />
      <Block2Columns>
        <Block2Col>
          <Photo src={maxImg} />
          <Text compact title={<span><Name>Max Goncharov</Name><br />CEO and co-founder</span>}>
            Entrepreneur with strong development and AI skills.
            Winner of TechCrunch Disrupt 2016, AngelHack Moscow 2015.
            Founded 33Bits in 2011(sold shares in 2014)
          </Text>
        </Block2Col>
        <Block2Col>
          <Photo src={stasImg} />
          <Text compact title={<span><Name>Stas Veretennikov</Name><br />CTO and co-founder</span>}>
            Strong AI and Mobile engineer. Ex-head of Mobile Department
            at Yandex (Leading CIS IT giant, like Google).
          </Text>
        </Block2Col>
      </Block2Columns>
      <Block2Columns>
        <Block2Col>
          <Photo src={nickImg} />
          <Text compact title={<span><Name>Nick Davidov</Name><br />Co-founder</span>}>
            Of Gagarin Capital Сonsultant to MSQRD
            (acquired by Facebook) and Prisma.
          </Text>
        </Block2Col>
        <Block2Col>
          <Photo src={mitImg} />
          <Text compact title={<span><Name>Mit Gorilovskiy</Name><br />VP of hardware</span>}>
            Best of CES Award Winner 2015 – YotaPhone, 3 IFA hardware design awards,
            10 year of gadget creation and engineering experience and 140 patent
            applications. Several successful Kickstarter campaigns with product
            delivered on-time.
          </Text>
        </Block2Col>
      </Block2Columns>
    </Block2>
    <Divider />
    <Block3>
      <TextBlock title="Team." />
      <Cols>
        <Col first>
          <Text>
            At Cherry, we’re passionate about making the world a safer place for everyone,
            one home at a time. Our award-winning team is located around the globe and we
            bring an international, diverse perspective to our approach to home safety.
          </Text>
        </Col>
        <Col>
          <Text>
            We are engineers with PhDs in the field of computer vision, successful serial
            entrepreneurs, experienced designers and senior advisors adept at creating
            best-in-class companies and experiences.
          </Text>
        </Col>
      </Cols>
    </Block3>
  </div>
);

export default About;
