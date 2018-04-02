import React from 'react';
import styled from 'styled-components';
import { theme, cols10, lessThanCols6, mobile, fontSize, cols6, cols8 } from 'lib/theme';

import ContentBlock from 'components/lib/ContentBlock';

const privacyContent = [
  {
    description: [
      'Welcome to Cherry Home  ("we," "us" or "our").',
      'Our Privacy Policy explains how we and some of the companies we work with collect, use, share and protect information in relation to our mobile services, web site, and any software provided on or in connection with Cherry Home services (collectively, the "Service"), and your choices about the collection and use of your information. By using our Service you understand and agree that we are providing a platform for you to post content, including photos, comments and other materials ("User Content"), to the Service and to share User Content publicly. This means that other Users may search for, see, use, or share any of your User Content that you make publicly available through the Service, consistent with the terms and conditions of this Privacy Policy and our Terms of Use. Our Policy applies to all visitors, users, and others who access the Service ("Users").',
    ]
  },
  {
    title: '1. Information We Collect',

    description: [
      'We collect the following types of information. Information you provide us directly:',
    ],
    list: [
      'Your username, password and e-mail address when you register for an Cherry Home account.',
      'Profile information you provide for your user or pet profile (e.g., first and last name, picture, phone number). This information allows us to help you or others be "found" on Cherry Home.',
      'User Content (e.g., photos, audio, videos, comments, and other materials) that you post to the Service, and is broadcasted, recorded, shared or saved by the Service.',
      'Communications between you and Cherry Home. For example, we may send you Service-related emails (e.g., account verification, changes/updates to features of the Service, technical and security notices). Note that you may not opt out of Service-related e-mails.',
    ],
    afterDescription: [
      'Analytics information:',
      'We use third-party analytics tools to help us measure traffic and usage trends for the Service. These tools collect information sent by your device or our Service, including the web pages you visit, add-ons, and other information that assists us in improving the Service. We collect and use this analytics information with analytics information from other Users so that it cannot reasonably be used to identify any particular individual User.',
      'Cookies and similar technologies:',
      'When you visit the Service, we may use cookies and similar technologies like pixels, web beacons, and local storage to collect information about how you use Cherry Home and provide features to you.',
      'We may ask advertisers or other partners to serve ads or services to your devices, which may use cookies or similar technologies placed by us or the third party.',
      'Log file information:',
      'Log file information is automatically reported by your browser each time you make a request to access (i.e., visit) a web page or app. It can also be provided when the content of the webpage or app is downloaded to your browser or device.',
      'When you use our Service, our servers automatically record certain log file information, including your web request, Internet Protocol ("IP") address, browser type, referring / exit pages and URLs, number of clicks and how you interact with links on the Service, domain names, landing pages, pages viewed, and other such information. We may also collect similar information from emails sent to our Users which then help us track which emails are opened and which links are clicked by recipients. The information allows for more accurate reporting and improvement of the Service.',
      'Device identifiers:',
      'When you use a mobile device like a tablet or phone to access our Service, we may access, collect, monitor, store on your device, and/or remotely store one or more "device identifiers." Device identifiers are small data files or similar data structures stored on or associated with your mobile device, which uniquely identify your mobile device. A device identifier may be data stored in connection with the device hardware, data stored in connection with the device\'s operating system or other software, or data sent to the device by Cherry Home.',
      'A device identifier may deliver information to us or to a third party partner about how you browse and use the Service and may help us or others provide reports or personalized content and ads. Some features of the Service may not function properly if use or availability of device identifiers is impaired or disabled.',
      'Metadata:',
      'Metadata is usually technical data that is associated with User Content. For example, Metadata can describe how, when and by whom a piece of User Content was collected and how that content is formatted.',
      'Users can add or may have Metadata added to their User Content including a hashtag (e.g., to mark keywords when you post a photo), geotag (e.g., to mark your location to a photo), comments or other data.',
      'Audio and video content',
      'Cherry Home devices, as a core feature, broadcast, record, save and share video and/or audio recordings from the device, subject to your configuration and settings. If you have the recording features enabled, we will capture, process and retain video and audio recordings from your device and you will be able to access those recordings using the Services.',
      'You may save and choose to share certain content like video clips, live video streams, images, captions, and comments to other people through the Services. We will collect and store information that will allow us to save or share your content as directed by you through the Services. Note that recording and sharing content that involves other people may affect their privacy and data protection rights.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    description: [
      'In addition to some of the specific uses of information we describe in this Privacy Policy, we may use information that we receive to:'
    ],
    list: [
      'Help you efficiently access your information after you sign in;',
      'Remember information so you will not have to re-enter it during your visit or the next time you visit the Service;',
      'Provide personalized content and information to you and others, which could include online ads or other forms of marketing;',
      'Provide, improve, test, and monitor the effectiveness of our Service;',
      'Develop and test new products and features;',
      'Monitor metrics such as total number of visitors, traffic, and demographic patterns;',
      'Diagnose or fix technology problems;',
      'Automatically update the Cherry Home application on your device Cherry Home or other Users may run contests, special offers or other events or activities ("Events") on the Service. If you do not want to participate in an Event, do not use the particular Metadata (i.e. hashtag or geotag) associated with that Event.'
    ]
  },
  {
    title: '3. Sharing Of Your Information',
    description: [
      'We will not rent or sell your information to third parties outside Cherry Home without your consent, except as noted in this Policy.',
      'Parties with whom we may share your information:',
      'We may share your information as well as information from tools like cookies, log files, and device identifiers and location data, with third-party organizations that help us provide the Service to you ("Service Providers"). Our Service Providers will be given access to your information as is reasonably necessary to provide the Service under reasonable confidentiality terms.',
      'We may also share certain information such as cookie data with third-party advertising partners. This information would allow third-party ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you.',
      'We may remove parts of data that can identify you and share anonymized data with other parties. We may also combine your information with other information in a way that it is no longer associated with you and share that aggregated information.',
      'If you remove information that you posted to the Service, copies may remain viewable in cached and archived pages of the Service, or if other Users or third parties using the Cherry Home API have copied or saved that information.',
      'What happens in the event of a change of control:',
      'If we sell or otherwise transfer part or the whole of Cherry Home or our assets to another organization (e.g., in the course of a transaction like a merger, acquisition, bankruptcy, dissolution, liquidation), your information such as name and email address, User Content and any other information collected through the Service may be among the items sold or transferred. You will continue to own your User Content. The buyer or transferee will have to honor the commitments we have made in this Privacy Policy.',
      'Responding to legal requests and preventing harm:',
      'We may access, preserve and share your information in response to a legal request (like a search warrant, court order or subpoena) if we have a good faith belief that the law requires us to do so. This may include responding to legal requests from jurisdictions outside of the United States where we have a good faith belief that the response is required by law in that jurisdiction, affects users in that jurisdiction, and is consistent with internationally recognized standards. We may also access, preserve and share information when we have a good faith belief it is necessary to: detect, prevent and address fraud and other illegal activity; to protect ourselves, you and others, including as part of investigations; and to prevent death or imminent bodily harm. Information we receive about you may be accessed, processed and retained for an extended period of time when it is the subject of a legal request or obligation, governmental investigation, or investigations concerning possible violations of our terms or policies, or otherwise to prevent harm.'
    ]
  },
  {
    title: '4. How We Store Your Information',
    description: [
      'Storage and Processing:',
      'Your information collected through the Service may be stored and processed in the United States or any other country in which Cherry Home, its Affiliates or Service Providers maintain facilities.',
      'Cherry Home, its Affiliates, or Service Providers may transfer information that we collect about you, including personal information across borders and from your country or jurisdiction to other countries or jurisdictions around the world. If you are located in the European Union or other regions with laws governing data collection and use that may differ from U.S. law, please note that we may transfer information, including personal information, to a country and jurisdiction that does not have the same data protection laws as your jurisdiction.',
      'By registering for and using the Service you consent to the transfer of information to the U.S. or to any other country in which Cherry Home, its Affiliates or Service Providers maintain facilities and the use and disclosure of information about you as described in this Privacy Policy.',
      'We use commercially reasonable safeguards to help keep the information collected through the Service secure and take reasonable steps (such as requesting a unique password) to verify your identity before granting you access to your account. However, Cherry Home cannot ensure the security of any information you transmit to Cherry Home or guarantee that information on the Service may not be accessed, disclosed, altered, or destroyed.',
      'Please do your part to help us. You are responsible for maintaining the secrecy of your unique password and account information, and for controlling access to emails between you and Cherry Home, at all times. Your privacy settings may also be affected by changes the social media services you connect to Cherry Home make to their services. We are not responsible for the functionality, privacy, or security measures of any other organization.'
    ]
  },
  {
    title: '5. Your Choices About Your Information',
    description: [
      'Update your account at any time by logging in and changing your profile settings.',
      'Following termination or deactivation of your account, Cherry Home, its Affiliates, or its Service Providers may retain information (including your profile information) and User Content for a commercially reasonable time for backup, archival, and/or audit purposes.'
    ]
  },
  {
    title: '6. Children\'s Privacy',
    description: [
      'Cherry Home  does not knowingly collect or solicit any information from anyone under the age of 13 or knowingly allow such persons to register for the Service. The Service and its content are not directed at children under the age of 13. In the event that we learn that we have collected personal information from a child under age 13 without parental consent, we will delete that information as quickly as possible. If you believe that we might have any information from or about a child under 13, please contact us.'
    ]
  },
  {
    title: '7. Other Web Sites And Services',
    description: [
      'We are not responsible for the practices employed by any websites or services linked to or from our Service, including the information or content contained within them. Please remember that when you use a link to go from our Service to another website or service, our Privacy Policy does not apply to those third-party websites or services. Your browsing and interaction on any third-party website or service, including those that have a link on our website, are subject to that third party\'s own rules and policies. In addition, you agree that we are not responsible and do not have control over any third-parties that you authorize to access your User Content. If you are using a third-party website or service and you allow them to access your User Content you do so at your own risk.'
    ]
  },
  {
    title: '8. How To Contact Us About A Deceased User',
    description: [
      'In the event of the death of an Cherry Home User, please contact us. We will usually conduct our communication via email; should we require any other information, we will contact you at the email address you have provided in your request.'
    ]
  },
  {
    title: '9. How To Contact Us',
    description: [
      'If you have any questions about this Privacy Policy please email us.'
    ]
  },
  {
    title: '10. Changes To Our Privacy Policy',
    description: [
      'Cherry Home may modify or update this Privacy Policy from time to time, so please review it periodically. Your continued use of Cherry Home  or the Service after any modification to this Privacy Policy will constitute your acceptance of such modification.'
    ]
  }
];

const ContnetPrivacy = styled(ContentBlock)`
  padding: 65px 100px 0px;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 0px 0px 8px 8px;
  margin-bottom: 50px;
  ${mobile(`
    padding: 65px 20px 75px;
  `)}
  ${cols8(`
    padding: 65px 20px 75px;
  `)}
  ${cols10(`
    padding: 65px 40px 75px;
  `)}
  ${lessThanCols6(`
   padding: 65px 20px 75px;
  `)}
`;

const TitlePage = styled.h1`
  ${theme.fonts.futura}
  font-size: 36px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #404e54;
  margin: 0px 0px 14px;
  ${mobile(`
    font-size: 32px;
    margin: 0px 0px 5px;
    font-weight: bold;
  `)}
`;

const BlockContent = styled.div`
  padding-bottom: 20px;
  ${mobile(`
    padding-bottom: 20px;
  `)}
`;

const Text = styled.p`
  font-family: Arial;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.3px;
  text-align: left;
  color: #404e54;
  margin: 0px 0px 20px;
  
  &.title {
    font-weight: bold;
    ${theme.fonts.futura}
    font-size: 24px;
    margin: 0px 0px 10px;
  }
  &.title-two {
    font-weight: bold;
    ${theme.fonts.futura}
    font-size: 24px;
    padding-top: 10px;
    margin: 0px 0px 10px;
  }
  &.list-style{
    display: flex;
    span {
      display: block;
      padding-right: 15px;
    }
  }
  &.one-title {
    margin-bottom: 40px;
  }
 
  ${mobile(`
    font-size: 14px;
    li{
      text-indent: 0px;
    }
    &.title {
      font-size: 14px;
      margin-bottom: 10px;
    }
    &.title-two {
      font-size: 14px;
      margin-bottom: 10px;
    }
  `)}
`;

const Border = styled.div`
  height: 50px;
  width: 100%;
`;


const Privacy = () => (
  <div>
    <ContnetPrivacy>
      <TitlePage>Privacy Policy.</TitlePage>
      {
        privacyContent.map((item, index) => (
          <BlockContent key={index}>
            {item.title && <Text className="title">{item.title}</Text>}
            {
              item.description && item.description.map((desc, descIndex) => (
                <Text
                  className={`
                    ${index === 0 && descIndex === 0 && 'one-title'}
                    ${
                      (
                        descIndex === 1 ||
                        descIndex === 6 ||
                        descIndex === 8
                      ) && index === 3 && 'title-two'}
                    ${index === 4 && descIndex === 0 && 'title'}
                  `}
                  key={descIndex}
                >
                  {desc}
                </Text>
              ))
            }
            {
              item.list && item.list.map((l, listIndex) => (
                <Text className="list-style" key={listIndex}><span>•</span>{l}</Text>
              ))
            }
            {
              item.afterDescription && item.afterDescription.map((secondDesc, secondIndex) => (
                <Text
                  key={secondIndex}
                  className={
                    (
                      secondIndex === 0 ||
                      secondIndex === 2 ||
                      secondIndex === 5 ||
                      secondIndex === 8 ||
                      secondIndex === 11 ||
                      secondIndex === 14
                    ) && 'title-two'}
                >
                  {secondDesc}
                </Text>
              ))
            }
          </BlockContent>
        ))
      }
    </ContnetPrivacy>
    <Border/>
  </div>
);

export default Privacy;
