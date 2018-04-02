import React from 'react';
import styled from 'styled-components';
import { theme, cols10, lessThanCols6, mobile, fontSize, cols6, cols8 } from 'lib/theme';
import StaticHeader from '../StaticHeader';

import ContentBlock from 'components/lib/ContentBlock';

const termsContent = {
  block1: [
    'These Terms of Use are effective on March 17, 2014.',
    'By accessing or using the Cherry Home product, the Cherry Home website, or any applications (including mobile applications) made available by Cherry Home (together, the "Service"), you agree to be bound by these terms of use ("Terms of Use"). The Service is owned or controlled by Cherry Home, Inc. ("Cherry Home"). These Terms of Use affect your legal rights and obligations. If you do not agree to be bound by all of these Terms of Use, do not access or use the Service.',
    'ARBITRATION NOTICE: EXCEPT IF YOU OPT-OUT AND EXCEPT FOR CERTAIN TYPES OF DISPUTES DESCRIBED IN THE ARBITRATION SECTION BELOW, YOU AGREE THAT DISPUTES BETWEEN YOU AND CHERRY HOME WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.',
  ],
  basic: 'Basic Terms',
  block2: [
    'You must be at least 13 years old to use the Service.',
    'You may not post violent, nude, partially nude, discriminatory, unlawful, infringing, hateful, pornographic or sexually suggestive photos or other content via the Service.',
    'You are responsible for any activity that occurs through your account and you agree you will not sell, transfer, license or assign your account, followers, username, or any account rights. With the exception of people or businesses that are expressly authorized to create accounts on behalf of their employers or clients, Cherry Home prohibits the creation of and you agree that you will not create an account for anyone other than yourself. You also represent that all information you provide or provided to Cherry Home upon registration and at all other times will be true, accurate, current and complete and you agree to update your information as necessary to maintain its truth and accuracy.',
    'You agree that you will not solicit, collect or use the login credentials of other Cherry Home users.',
    'You are responsible for keeping your password secret and secure.',
    'You must not defame, stalk, bully, abuse, harass, threaten, impersonate or intimidate people or entities and you must not post private or confidential information via the Service, including, without limitation, your or any other person\'s credit card information, social security or alternate national identity numbers, non-public phone numbers or non-public email addresses.',
    'You may not use the Service for any illegal or unauthorized purpose. You agree to comply with all laws, rules and regulations (for example, federal, state, local and provincial) applicable to your use of the Service and your Content (defined below), including but not limited to, copyright laws.',
    'You are solely responsible for your conduct and any data, text, files, information, usernames, images, graphics, photos, profiles, audio and video clips, sounds, musical works, works of authorship, applications, links and other content or materials (collectively, "Content") that you submit, post or display on or via the Service.',
    'You must not change, modify, adapt or alter the Service or change, modify or alter another website so as to falsely imply that it is associated with the Service or Cherry Home.',
    'You must not access Cherry Home\'s private API by means other than those permitted by Cherry Home.',
    'You must not create or submit unwanted email, comments, likes or other forms of commercial or harassing communications (a/k/a "spam") to any Cherry Home users.',
    'You must not attempt to restrict another user from using or enjoying the Service and you must not encourage or facilitate violations of these Terms of Use or any other Cherry Home terms.',
  ],
  block3: [
    'Violation of these Terms of Use may, in Cherry Home\'s sole discretion, result in termination of your Cherry Home account. You understand and agree that Cherry Home cannot and will not be responsible for the Content posted on the Service and you use the Service at your own risk. If you violate the letter or spirit of these Terms of Use, or otherwise create risk or possible legal exposure for Cherry Home, we can stop providing all or part of the Service to you.',
    'General Conditions',
    'We reserve the right to modify or terminate the Service or your access to the Service for any reason, without notice, at any time, and without liability to you. If we terminate your access to the Service or you deactivate your account, your photos, comments, likes, friendships, and all other data will no longer be accessible through your account (e.g., users will not be able to navigate to your username and view your photos), but those materials and data may persist and appear within the Service (e.g., if your Content has been reshared by others).',
    'Upon termination, all licenses and other rights granted to you in these Terms of Use will immediately cease.',
    'We reserve the right, in our sole discretion, to change these Terms of Use ("Updated Terms") from time to time. Unless we make a change for legal or administrative reasons, we will provide reasonable advance notice before the Updated Terms become effective. You agree that we may notify you of the Updated Terms by posting them on the Service, and that your use of the Service after the effective date of the Updated Terms (or engaging in such other conduct as we may reasonably specify) constitutes your agreement to the Updated Terms. Therefore, you should review these Terms of Use and any Updated Terms before using the Service. The Updated Terms will be effective as of the time of posting, or such later date as may be specified in the Updated Terms, and will apply to your use of the Service from that point forward. These Terms of Use will govern any disputes arising before the effective date of the Updated Terms.',
    'We reserve the right to refuse access to the Service to anyone for any reason at any time.',
    'We reserve the right to force forfeiture of any username for any reason.',
    'We may, but have no obligation to, remove, edit, block, and/or monitor Content or accounts containing Content that we determine in our sole discretion violates these Terms of Use.',
    'You are solely responsible for your interaction with other users of the Service, whether online or offline. You agree that Cherry Home is not responsible or liable for the conduct of any user. Cherry Home reserves the right, but has no obligation, to monitor or become involved in disputes between you and other users. Exercise common sense and your best judgment when interacting with others, including when you submit or post Content or any personal or other information.',
    'There may be links from the Service, or from communications you receive from the Service, to third-party web sites or features. There may also be links to third-party web sites or features in images or comments within the Service. The Service also includes third-party content that we do not control, maintain or endorse. Functionality on the Service may also permit interactions between the Service and a third-party web site or feature, including applications that connect the Service or your profile on the Service with a third-party web site or feature. For example, the Service may include a feature that enables you to share Content from the Service or your Content with a third party, which may be publicly posted on that third party\'s service or application. Using this functionality typically requires you to login to your account on the third-party service and you do so at your own risk. Cherry Home does not control any of these third-party web services or any of their content. You expressly acknowledge and agree that Cherry Home is in no way responsible or liable for any such third-party services or features. YOUR CORRESPONDENCE AND BUSINESS DEALINGS WITH THIRD PARTIES FOUND THROUGH THE SERVICE ARE SOLELY BETWEEN YOU AND THE THIRD PARTY. You may choose, at your sole and absolute discretion and risk, to use applications that connect the Service or your profile on the Service with a third-party service (each, an "Application") and such Application may interact with, connect to or gather and/or pull information from and to your Service profile. By using such Applications, you acknowledge and agree to the following: (i) if you use an Application to share information, you are consenting to information about your profile on the Service being shared; (ii) your use of an Application may cause personally identifying information to be publicly disclosed and/or associated with you, even if Cherry Home has not itself provided such information; and (iii) your use of an Application is at your own option and risk, and you will hold the Cherry Home Parties (defined below) harmless for activity related to the Application.',
    'You agree that you are responsible for all data charges you incur through use of the Service.',
    'We prohibit crawling, scraping, caching or otherwise accessing any content on the Service via automated means, including but not limited to, user profiles and photos (except as may be the result of standard search engine protocols or technologies used by a search engine with Cherry Home\'s express consent).',
    'Rights',
    'Cherry Home does not claim ownership of any Content that you post on or through the Service. Instead, you hereby grant to Cherry Home a non-exclusive, fully paid and royalty-free, transferable, sub-licensable, worldwide license to use the Content that you post on or through the Service, subject to the Cherry Home’s Privacy Policy. You can choose who can view your Content and activities, including your photos, as described in the Privacy Policy.',
    'Some of the Service is supported by advertising revenue and may display advertisements and promotions, and you hereby agree that Cherry Home may place such advertising and promotions on the Service or on, about, or in conjunction with your Content. The manner, mode and extent of such advertising and promotions are subject to change without specific notice to you.',
    'You acknowledge that we may not always identify paid services, sponsored content, or commercial communications as such.',
    'You represent and warrant that: (i) you own the Content posted by you on or through the Service or otherwise have the right to grant the rights and licenses set forth in these Terms of Use; (ii) the posting and use of your Content on or through the Service does not violate, misappropriate or infringe on the rights of any third party, including, without limitation, privacy rights, publicity rights, copyrights, trademark and/or other intellectual property rights; (iii) you agree to pay for all royalties, fees, and any other monies owed by reason of Content you post on or through the Service; and (iv) you have the legal right and capacity to enter into these Terms of Use in your jurisdiction.',
    'The Service contains content owned or licensed by Cherry Home ("Cherry Home Content"). Cherry Home Content is protected by copyright, trademark, patent, trade secret and other laws, and, as between you and Cherry Home, Cherry Home owns and retains all rights in the Cherry Home Content and the Service. You will not remove, alter or conceal any copyright, trademark, service mark or other proprietary rights notices incorporated in or accompanying the Cherry Home Content and you will not reproduce, modify, adapt, prepare derivative works based on, perform, display, publish, distribute, transmit, broadcast, sell, license or otherwise exploit the Cherry Home Content.',
    'Although it is Cherry Home\'s intention for the Service to be available as much as possible, there will be occasions when the Service may be interrupted, including, without limitation, for scheduled maintenance or upgrades, for emergency repairs, or due to failure of telecommunications links and/or equipment. Also, Cherry Home reserves the right to remove any Content from the Service for any reason, without prior notice. Content removed from the Service may continue to be stored by Cherry Home, including, without limitation, in order to comply with certain legal obligations, but may not be retrievable without a valid court order. Consequently, Cherry Home encourages you to maintain your own backup of your Content. In other words, Cherry Home is not a backup service and you agree that you will not rely on the Service for the purposes of Content backup or storage. Cherry Home will not be liable to you for any modification, suspension, or discontinuation of the Services, or the loss of any Content. You also acknowledge that the Internet may be subject to breaches of security and that the submission of Content or other information may not be secure.',
    'You agree that Cherry Home is not responsible for, and does not endorse, Content posted within the Service. Cherry Home does not have any obligation to prescreen, monitor, edit, or remove any Content. If your Content violates these Terms of Use, you may bear legal responsibility for that Content.',
    'Except as otherwise described in the Cherry Home\'s Privacy Policy, available at as between you and Cherry Home, any Content will be non-confidential and non-proprietary and we will not be liable for any use or disclosure of Content. You acknowledge and agree that your relationship with Cherry Home is not a confidential, fiduciary, or other type of special relationship, and that your decision to submit any Content does not place Cherry Home in a position that is any different from the position held by members of the general public, including with regard to your Content. None of your Content will be subject to any obligation of confidence on the part of Cherry Home, and Cherry Home will not be liable for any use or disclosure of any Content you provide.',
    'It is Cherry Home\'s policy not to accept or consider content, information, ideas, suggestions or other materials other than those we have specifically requested and to which certain specific terms, conditions and requirements may apply. This is to avoid any misunderstandings if your ideas are similar to those we have developed or are developing independently. Accordingly, Cherry Home does not accept unsolicited materials or ideas, and takes no responsibility for any materials or ideas so transmitted. If, despite our policy, you choose to send us content, information, ideas, suggestions, or other materials, you further agree that Cherry Home is free to use any such content, information, ideas, suggestions or other materials, for any purposes whatsoever, including, without limitation, developing and marketing products and services, without any liability or payment of any kind to you.',
    'Reporting Copyright and Other IP Violations',
    'We respect other people\'s rights, and expect you to do the same.',
    'If you repeatedly infringe other people\'s intellectual property rights, we will disable your account when appropriate.',
    'Disclaimer Of Warranties',
    'THE SERVICE, INCLUDING, WITHOUT LIMITATION, CHERRY HOME CONTENT, IS PROVIDED ON AN "AS IS", "AS AVAILABLE" AND "WITH ALL FAULTS" BASIS. TO THE FULLEST EXTENT PERMISSIBLE BY LAW, NEITHER CHERRY HOME NOR ITS PARENT COMPANY NOR ANY OF THEIR EMPLOYEES, MANAGERS, OFFICERS OR AGENTS (COLLECTIVELY, THE "Cherry Home PARTIES") MAKE ANY REPRESENTATIONS OR WARRANTIES OR ENDORSEMENTS OF ANY KIND WHATSOEVER, EXPRESS OR IMPLIED, AS TO: (A) THE SERVICE; (B) THE CHERRY HOME CONTENT; (C) USER CONTENT; OR (D) SECURITY ASSOCIATED WITH THE TRANSMISSION OF INFORMATION TO CHERRY HOME OR VIA THE SERVICE. IN ADDITION, THE CHERRY HOME PARTIES HEREBY DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, TITLE, CUSTOM, TRADE, QUIET ENJOYMENT, SYSTEM INTEGRATION AND FREEDOM FROM COMPUTER VIRUS.',
    'YOU ACKNOWLEDGE THAT YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE CHERRY HOME PARTIES DO NOT WARRANT THAT YOUR USE OF THE SERVICE IS LAWFUL IN ANY PARTICULAR JURISDICTION, AND THE CHERRY HOME PARTIES SPECIFICALLY DISCLAIM SUCH WARRANTIES. SOME JURISDICTIONS LIMIT OR DO NOT ALLOW THE DISCLAIMER OF IMPLIED OR OTHER WARRANTIES SO THE ABOVE DISCLAIMER MAY NOT APPLY TO YOU TO THE EXTENT SUCH JURISDICTION\'S LAW IS APPLICABLE TO YOU AND THESE TERMS OF USE.',
    'BY ACCESSING OR USING THE SERVICE YOU REPRESENT AND WARRANT THAT YOUR ACTIVITIES ARE LAWFUL IN EVERY JURISDICTION WHERE YOU ACCESS OR USE THE SERVICE.',
    'THE CHERRY HOME PARTIES DO NOT ENDORSE CONTENT AND SPECIFICALLY DISCLAIM ANY RESPONSIBILITY OR LIABILITY TO ANY PERSON OR ENTITY FOR ANY LOSS, DAMAGE (WHETHER ACTUAL, CONSEQUENTIAL, PUNITIVE OR OTHERWISE), INJURY, CLAIM, LIABILITY OR OTHER CAUSE OF ANY KIND OR CHARACTER BASED UPON OR RESULTING FROM ANY CONTENT.',
    'Limitation Of Liability; Waiver',
    'UNDER NO CIRCUMSTANCES WILL THE CHERRY HOME PARTIES BE LIABLE TO YOU FOR ANY LOSS OR DAMAGES OF ANY KIND (INCLUDING, WITHOUT LIMITATION, FOR ANY DIRECT, INDIRECT, ECONOMIC, EXEMPLARY, SPECIAL, PUNITIVE, INCIDENTAL OR CONSEQUENTIAL LOSSES OR DAMAGES) THAT ARE DIRECTLY OR INDIRECTLY RELATED TO: (A) THE SERVICE; (B) THE CHERRY HOME CONTENT; (C) USER CONTENT; (D) YOUR USE OF, INABILITY TO USE, OR THE PERFORMANCE OF THE SERVICE; (E) ANY ACTION TAKEN IN CONNECTION WITH AN INVESTIGATION BY THE CHERRY HOME PARTIES OR LAW ENFORCEMENT AUTHORITIES REGARDING YOUR OR ANY OTHER PARTY\'S USE OF THE SERVICE; (F) ANY ACTION TAKEN IN CONNECTION WITH COPYRIGHT OR OTHER INTELLECTUAL PROPERTY OWNERS; (G) ANY ERRORS OR OMISSIONS IN THE SERVICE\'S OPERATION; OR (H) ANY DAMAGE TO ANY USER\'S COMPUTER, MOBILE DEVICE, OR OTHER EQUIPMENT OR TECHNOLOGY INCLUDING, WITHOUT LIMITATION, DAMAGE FROM ANY SECURITY BREACH OR FROM ANY VIRUS, BUGS, TAMPERING, FRAUD, ERROR, OMISSION, INTERRUPTION, DEFECT, DELAY IN OPERATION OR TRANSMISSION, COMPUTER LINE OR NETWORK FAILURE OR ANY OTHER TECHNICAL OR OTHER MALFUNCTION, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOST PROFITS, LOSS OF GOODWILL, LOSS OF DATA, WORK STOPPAGE, ACCURACY OF RESULTS, OR COMPUTER FAILURE OR MALFUNCTION, EVEN IF FORESEEABLE OR EVEN IF THE CHERRY HOME PARTIES HAVE BEEN ADVISED OF OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, STRICT LIABILITY OR TORT (INCLUDING, WITHOUT LIMITATION, WHETHER CAUSED IN WHOLE OR IN PART BY NEGLIGENCE, ACTS OF GOD, TELECOMMUNICATIONS FAILURE, OR THEFT OR DESTRUCTION OF THE SERVICE). IN NO EVENT WILL THE CHERRY HOME PARTIES BE LIABLE TO YOU OR ANYONE ELSE FOR LOSS, DAMAGE OR INJURY, INCLUDING, WITHOUT LIMITATION, DEATH OR PERSONAL INJURY. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU. IN NO EVENT WILL THE CHERRY HOME PARTIES TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES OR CAUSES OR ACTION EXCEED ONE THOUSAND UNITED STATES DOLLARS ($1000.00).',
    'BY ACCESSING THE SERVICE, YOU UNDERSTAND THAT YOU MAY BE WAIVING RIGHTS WITH RESPECT TO CLAIMS THAT ARE AT THIS TIME UNKNOWN OR UNSUSPECTED, AND IN ACCORDANCE WITH SUCH WAIVER, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND, AND HEREBY EXPRESSLY WAIVE, THE BENEFITS OF SECTION 1542 OF THE CIVIL CODE OF CALIFORNIA, AND ANY SIMILAR LAW OF ANY STATE OR TERRITORY, WHICH PROVIDES AS FOLLOWS: "A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM MUST HAVE MATERIALLY AFFECTED HIS SETTLEMENT WITH THE DEBTOR."',
    'CHERRY HOME IS NOT RESPONSIBLE FOR THE ACTIONS, CONTENT, INFORMATION, OR DATA OF THIRD PARTIES, AND YOU RELEASE US, OUR DIRECTORS, OFFICERS, EMPLOYEES, AND AGENTS FROM ANY CLAIMS AND DAMAGES, KNOWN AND UNKNOWN, ARISING OUT OF OR IN ANY WAY CONNECTED WITH ANY CLAIM YOU HAVE AGAINST ANY SUCH THIRD PARTIES.',
    'Indemnification',
    'You (and also any third party for whom you operate an account or activity on the Service) agree to defend (at Cherry Home\'s request), indemnify and hold the Cherry Home Parties harmless from and against any claims, liabilities, damages, losses, and expenses, including without limitation, reasonable attorney\'s fees and costs, arising out of or in any way connected with any of the following (including as a result of your direct activities on the Service or those conducted on your behalf): (i) your Content or your access to or use of the Service; (ii) your breach or alleged breach of these Terms of Use; (iii) your violation of any third-party right, including without limitation, any intellectual property right, publicity, confidentiality, property or privacy right; (iv) your violation of any laws, rules, regulations, codes, statutes, ordinances or orders of any governmental and quasi-governmental authorities, including, without limitation, all regulatory, administrative and legislative authorities; or (v) any misrepresentation made by you. You will cooperate as fully required by Cherry Home in the defense of any claim. Cherry Home reserves the right to assume the exclusive defense and control of any matter subject to indemnification by you, and you will not in any event settle any claim without the prior written consent of Cherry Home.',
    'Arbitration',
    'Except if you opt-out or for disputes relating to: (1) your or Cherry Home\'s intellectual property (such as trademarks, trade dress, domain names, trade secrets, copyrights and patents); (2) violations of the API Terms; or (3) violations of provisions 13 or 15 of the Basic Terms, above ("Excluded Disputes"), you agree that all disputes between you and Cherry Home (whether or not such dispute involves a third party) with regard to your relationship with Cherry Home, including without limitation disputes related to these Terms of Use, your use of the Service, and/or rights of privacy and/or publicity, will be resolved by binding, individual arbitration under the American Arbitration Association\'s rules for arbitration of consumer-related disputes and you and Cherry Home hereby expressly waive trial by jury. As an alternative, you may bring your claim in your local "small claims" court, if permitted by that small claims court\'s rules. You may bring claims only on your own behalf. Neither you nor Cherry Home will participate in a class action or class-wide arbitration for any claims covered by this agreement. You also agree not to participate in claims brought in a private attorney general or representative capacity, or consolidated claims involving another person\'s account, if Cherry Home is a party to the proceeding. This dispute resolution provision will be governed by the Federal Arbitration Act. In the event the American Arbitration Association is unwilling or unable to set a hearing date within sixty (60) days of filing the case, then either Cherry Home or you can elect to have the arbitration administered instead by the Judicial Arbitration and Mediation Services. Judgment on the award rendered by the arbitrator may be entered in any court having competent jurisdiction. Any provision of applicable law notwithstanding, the arbitrator will not have authority to award damages, remedies or awards that conflict with these Terms of Use.',
    'You may opt out of this agreement to arbitrate. If you do so, neither you nor Cherry Home can require the other to participate in an arbitration proceeding. To opt out, you must notify Cherry Home in writing within 30 days of the date that you first became subject to this arbitration provision. You must use this address to opt out:',
    'Cherry Home, Inc 2711 Centerville Road, Suite 400, Wilmington, 19808, United States, Delaware',
    'You must include your name and residence address, the email address you use for your Cherry Home account, and a clear statement that you want to opt out of this arbitration agreement.',
    'If the prohibition against class actions and other claims brought on behalf of third parties contained above is found to be unenforceable, then all of the preceding language in this Arbitration section will be null and void. This arbitration agreement will survive the termination of your relationship with Cherry Home.',
    'Time Limitation On Claims',
    'You agree that any claim you may have arising out of or related to your relationship with Cherry Home must be filed within one year after such claim arose; otherwise, your claim is permanently barred.',
    'Governing Law & Venue',
    'These Terms of Use are governed by and construed in accordance with the laws of the State of California, without giving effect to any principles of conflicts of law AND WILL SPECIFICALLY NOT BE GOVERNED BY THE UNITED NATIONS CONVENTIONS ON CONTRACTS FOR THE INTERNATIONAL SALE OF GOODS, IF OTHERWISE APPLICABLE. For any action at law or in equity relating to the arbitration provision of these Terms of Use, the Excluded Disputes or if you opt out of the agreement to arbitrate, you agree to resolve any dispute you have with Cherry Home exclusively in a state or federal court located in San Francisco, California, and to submit to the personal jurisdiction of the courts located in San Francisco for the purpose of litigating all such disputes.',
    'If any provision of these Terms of Use is held to be unlawful, void, or for any reason unenforceable during arbitration or by a court of competent jurisdiction, then that provision will be deemed severable from these Terms of Use and will not affect the validity and enforceability of any remaining provisions. Cherry Home\'s failure to insist upon or enforce strict performance of any provision of these Terms will not be construed as a waiver of any provision or right. No waiver of any of these Terms will be deemed a further or continuing waiver of such term or condition or any other term or condition. Cherry Home reserves the right to change this dispute resolution provision, but any such changes will not apply to disputes arising before the effective date of the amendment. This dispute resolution provision will survive the termination of any or all of your transactions with Cherry Home.',
    'Entire Agreement',
    'If you are using the Service on behalf of a legal entity, you represent that you are authorized to enter into an agreement on behalf of that legal entity. These Terms of Use constitute the entire agreement between you and Cherry Home and governs your use of the Service, superseding any prior agreements between you and Cherry Home. You will not assign the Terms of Use or assign any rights or delegate any obligations hereunder, in whole or in part, whether voluntarily or by operation of law, without the prior written consent of Cherry Home. Any purported assignment or delegation by you without the appropriate prior written consent of Cherry Home will be null and void. Cherry Home may assign these Terms of Use or any rights hereunder without your consent. If any provision of these Terms of Use is found by a court of competent jurisdiction to be invalid or otherwise unenforceable, the parties nevertheless agree that such portion will be deemed severable from these Terms of Use and will not affect the validity and enforceability of the remaining provisions, and the remaining provisions of the Terms of Use remain in full force and effect. Neither the course of conduct between the parties nor trade practice will act to modify the Terms of Use. These Terms of Use do not confer any third-party beneficiary rights.',
    'Territorial Restrictions',
    'The information provided within the Service is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject Cherry Home to any registration requirement within such jurisdiction or country. We reserve the right to limit the availability of the Service or any portion of the Service, to any person, geographic area, or jurisdiction, at any time and in our sole discretion, and to limit the quantities of any content, program, product, service or other feature that Cherry Home provides.',
    'Video Storage',
    'When you upload a video to Cherry Home, you agree to abide by our Terms and Conditions. For the purposes of these Terms and Conditions, if you have registered for an account at Cherry Home.com, then you are considered a Subscriber (referred to as “you”).',
    'You agree not to misuse the Cherry Home Care services ("Services") or help anyone else to do so. You must not contribute any content that:',
  ],
  block4: [
    'Infringes any third party\'s copyrights or other rights (e.g., trademark, privacy rights, etc.);',
    'Contains sexually abusive content, exploits minors; depicts unlawful acts or extreme violence;',
    'Is harmful, fraudulent, deceptive, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, or otherwise objectionable;',
    'Depicts animal cruelty or extreme violence toward animals;',
    'Otherwise violates any law, statute, ordinance or regulation.',
  ],
  block5: [
    'If you do upload a video that is unsuitable, we reserve the right to remove that video. In extreme cases or, for persistent infringing behaviour, we may suspend your account and prohibit further use of the Cherry Home Care service.',
    'We reserve the right to require Subscribers with videos or accounts that contain lawful but explicit sexual or violent content, to set their content to Private.',
    'No failure or delay by Cherry Home in exercising any of our rights in this Agreement will waive any further exercise of that right.',
    'Content Ownership',
    'You retain all of your ownership rights to your content. You are solely responsible for your own content and the consequences of creating or publishing it. Cherry Home expressly disclaims any and all liability in connection with your content.',
    'You agree indemnify, defend, and hold harmless Cherry Home and its directors and employees, from and against all third party actions that: (i) arise from your content on the Cherry Home Care platform, (ii) assert a violation by you of any term of this Agreement; or (iii) assert that any content you hosted on the Cherry Home Care platform violates any law or infringes any third party right, including any intellectual property or privacy right.',
    'Video Storage',
    'Your source videos will be recorded for 3 days after you fail to renew your subscription, at which time your subscription will be cancelled. After your subscription is cancelled, your purchased source videos will be available for a number of days determined by your subscription plan. You can also store your favorite videos by downloading them to your device.',
    'Subscription Plans',
    'This Agreement governs access to and use of the ”Cherry Home Care” client software and services ("Subscription Services”). By clicking "I Agree," signing your contract for the Services or using the Services, you agree to this Agreement as a Customer.',
  ],
  block6: [
    'a) Subscription services. Certain services, such as additional cloud video storage, require a paid subscription (a "Subscription" or "Service Plan"). A Subscription and the rights and privileges provided to a subscriber is personal and non-transferable.',
    'b) Plans. You can find full and up-to-date details of our service plans here. We reserve the right to change and update our plans without notice. When we do, we reserve the right to transition existing clients to the revised plans progressively over the course of up to 60 days.',
    'c) Charge authorization. When you purchase any of our Subscription Services, you expressly acknowledge and agree that (1) Cherry Home is authorized to charge you all applicable fees depending on the billing cycle you choose (in addition to any applicable taxes) for as long as your subscription continues, and (2) your subscription is continuous until you cancel it or such a Subscription Service is suspended, discontinued or terminated in accordance with Cherry Home’s Terms of Service. Fees are non-refundable except as required by law. You are responsible for providing complete and accurate billing and contact information to Cherry Home.',
    'd) Payment Methods. You may pay for your Subscription with a major credit or debit card, or any other payment method accepted by our third party payment processor at the time of purchase. We will charge your credit or debit card or account for your first Subscription fee on the date that we process your order for your Subscription and on or about each monthly or annual anniversary. All fees for and payments of a Service Plan are in US Dollars unless otherwise noted at the time of purchase.',
    `e) Billing. We will automatically renew your subscription on or about each monthly or annual anniversary of the date that we first charged you for the first subscription fee and, as authorized by you during the subscription sign-up process, we will charge you the applicable monthly or annual subscription fee and any sales or similar taxes that may be imposed on your subscription fee payment unless you cancel prior to the renewal date.You will be liable for paying any and all applicable sales and use taxes for the purchase of your subscription based on the mailing address that you provide when you register as a subscriber, and you authorize Cherry Home to charge your credit or debit card for any such applicable taxes. If we are unable to successfully charge your credit card or payment account for fees due, we reserve the right to revoke or restrict access to our services, delete your stored content in accordance with our service plan retention periods, or terminate your account. If you want to designate a different credit card or payment account, or if there is a change in your credit card or payment account status, you may change your payment method by updating your banking information via mobile application or website; this may temporarily disrupt your access to the services while we verify your new payment information and may result in a change to your payment billing date. `,
    `f) Cancellations and Refunds. You may cancel your Subscription Services at any time by selecting this option in system preferences through the website of mobile application. Note that merely unpairing a Product from a Subscription Service will not trigger cancellation of the Subscription Service. Any fees paid by you prior to your cancellation are non-refundable including any fees paid in advance for the billing cycle during which you cancel, unless otherwise noted. We do not provide price protection or refunds in the event of promotions or price decreases. We can issue a refund for any bills raised in error if notified within 30 days.`,
    `g) Free Trials. We may offer free trials of our Subscription Services for limited periods of time. If we offer you a free trial, the specific terms of your free trial will be stated in the material describing the free trial offer. Cherry Home reserves the right to determine eligibility for any free trial.Once your free trial period ends, we will begin billing you for monthly or annual subscription fees that correspond to your subscription choices (plus any applicable taxes), unless you cancel prior to the end of your free trial. If your account is set to auto renew or is in a trial period, Cherry Home may automatically charge you at the end of the trial or for the renewal, unless you cancel or disable auto renewal.`,
  ],
  block7: [
    'Fair Usage',
    'Our plans have storage limits and we reserve the right to limit subscribers who exceed their account limits.',
    'a) Trial Users. If you are using the free trial service and you surpass 100% of your allocated allowance without upgrading, you will be considered to be contravening our fair use policy. If you do not upgrade your trial account to a paid subscription, we reserve the right to automatically replace your videos with an upgrade message. We will regard opening multiple trial accounts in order to circumvent the allowances as being in breach of our fair use policy and may suspend your use of the service.',
    'The effective date of these Terms of Use is March 17, 2014.'
  ]
};

const ContnetPrivacy = styled(ContentBlock)`
  padding: 65px 100px 30px;
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
      display: inline-block;
      padding-right: 15px;
    }
  }
  &.list-padding {
    padding-left: 20px;
  }
  &.one-title {
    margin-bottom: 40px;
  }
  ${mobile(`
    font-size: 14px;
    li{
      list-style-type: none;
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

const Terms = () => (
  <div>
    <ContnetPrivacy>
      <TitlePage>Terms of Use.</TitlePage>
      {
        termsContent.block1.map((item, index) => (
          <Text className={index === 0 && 'one-title'} key={index}>{item}</Text>
        ))
      }
      <Text className="title">{termsContent.basic}</Text>
      {
        termsContent.block2.map((item, index) => (
          <Text className="list-style" key={index}><span>•</span>{item}</Text>
        ))
      }
      {
        termsContent.block3.map((item, index) => (
          <Text
            className={
              (
                index === 1 ||
                index === 12 ||
                index === 25 ||
                index === 30 ||
                index === 34 ||
                index === 36 ||
                index === 42 ||
                index === 44 ||
                index === 47 ||
                index === 49 ||
                index === 51
              )
              && 'title-two'
            }
            key={index}
          >
            {item}
            </Text>
        ))
      }
      {
        termsContent.block4.map((item, index) => (
          <Text className="list-style" key={index}><span>•</span>{item}</Text>
        ))
      }
      {
        termsContent.block5.map((item, index) => (
          <Text
            className={
              (
                index === 3 ||
                index === 6 ||
                index === 8 ||
                index === 10
              ) && 'title-two'
            }
            key={index}
          >
            {item}
          </Text>
        ))
      }
      {
        termsContent.block6.map((item, index) => (
          <Text className="list-padding" key={index}>{item}</Text>
        ))
      }
      {
        termsContent.block7.map((item, index) => (
          <Text
            className={`${index === 2 && 'list-padding'} ${index === 0 && 'title-two'}`}
            key={index}
          >
            {item}
          </Text>
        ))
      }
    </ContnetPrivacy>
    <Border/>
  </div>
);

export default Terms;
