import React from 'react';
import styled from 'styled-components';

import { theme, desktop, mobile, cols10 } from 'lib/theme';

import ContentBlock from 'components/lib/ContentBlock';
import { Columns, Column } from 'components/lib/Columns';
import Divider from 'components/lib/Divider';

import AiIco from './ai.svg';
import PrivacyIco from './privacy.svg';
import SafetyIco from './safety.svg';

import AiIcoMobile from './ai-mobile.svg';
import PrivacyIcoMobile from './privacy-mobile.svg';
import SafetyIcoMobile from './safety-mobile.svg';

import BlockTitle from './../BlockTitle';
import TextBlock from './../TextBlock';

const StyledBlock = styled(ContentBlock)`
  overflow: hidden;
  padding: 133px 0 0 0;
  ${mobile(`
    padding: 93px 0 73px 0;
  `)}
`;

const StyledDivider = styled(Divider)`
  margin-top: 152px;
  ${mobile(`
    margin-top: 72px;
  `)}
`;

const StyledTextBlock = styled(TextBlock)`
  p {
    color: ${theme.colors.greyText};
  }
  ${desktop(`
    width: 262px;
  `)}
  ${cols10(`
    width: auto;
  `)}
`;

const StyledBlockTitle = styled(BlockTitle)`
  padding-bottom: 81px;
  ${cols10(`
    padding-bottom: 26px;
  `)}
  ${mobile(`
    padding-bottom: 1px;
  `)}
`;

const StyledColumn = styled(Column)`
  width: 262px;
  flex-grow: 0;
  ${cols10(`
    width: auto;
    margin-bottom: 20px;
  `)}
  ${mobile(`
    width: auto;
  `)}
`;

const StyledColumns = styled(Columns)`
  padding-right: 36px;
  ${cols10(`
    display: block;
    padding-right: 0;
  `)}
  ${mobile(`
    display: block;
    padding-right: 0;
  `)}
`;

const Block3 = () => (
  <StyledBlock>
    <StyledBlockTitle>What makes Cherry different.</StyledBlockTitle> {/* TODO: i18n */}
    <StyledColumns>
      <StyledColumn>
        <StyledTextBlock
          icon={<AiIco />}
          mobileIcon={<AiIcoMobile />}
          title={<span>The smartest home on the block.</span>}
          compact
        >
          Better living through smarter technology. Leveraging AI,
          computer vision and advanced biometrics, Cherry has
          completely redefined home security. At-a-glance home
          check-ins and meaningful updates are just a few of the
          features that give you the full, fast picture of what’s
          happening at home.
        </StyledTextBlock>
      </StyledColumn>
      <StyledColumn>
        <StyledTextBlock
          icon={<PrivacyIco />}
          mobileIcon={<PrivacyIcoMobile />}
          title={<span>Protecting privacy.</span>}
          compact
        >
          A smart home is also a private home. With Cherry you don’t
          have to worry about intrusions of any kind, video included.
          Video recordings are made only when necessary, and data
          is encrypted with AI and stored at your home only.
        </StyledTextBlock>
      </StyledColumn>
      <StyledColumn>
        <StyledTextBlock
          icon={<SafetyIco />}
          mobileIcon={<SafetyIcoMobile />}
          title={<span>Around-the-clock safety.</span>}
          compact
        >
          Keeping your family safe isn’t a part time job.
          Thanks to Cherry’s state-of-the-art system there’s
          no need to arm and disarm an alarm or worry about
          hacked cameras. Cherry’s always working for you,
          making your home the safest it can be even when
          your family is asleep.
        </StyledTextBlock>
      </StyledColumn>
    </StyledColumns>
    <StyledDivider />
  </StyledBlock>
);

export default Block3;
