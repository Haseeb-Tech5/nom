import "../Components/privacy.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Privacy() {
  const [data, setData] = useState([
    {
      purpose:
        "To connect you with a dentist who will offer you an examination and check your suitability for treatment",
      dataTypes: ["(a)Identity", "(b)Contact"],
      lawfulBasis: [
        "Performance of a contract with you",
        "Necessary for our legitimate interests (to deliver products and services)",
      ],
    },
    {
      purpose:
        "To manage our relationship with you which will include: (a) Notifying you about changes to our terms or privacy policy(b) Asking you to leave a review or take a survey",
      dataTypes: ["Identity", "Contact", "Marketing and Communications"],
      lawfulBasis: [
        "Performance of a contract with you",
        "Necessary to comply with a legal obligation",
        "Necessary for our legitimate interests (to keep our records updated and to study how customers use our products/services)",
      ],
    },
    {
      purpose: "To enable you to complete a survey",
      dataTypes: [
        "Identity",
        "Contact",
        "Usage",
        "Marketing and Communications",
      ],
      lawfulBasis: [
        "Performance of a contract with you",
        "Necessary for our legitimate interests (to study how customers use our products/services, to develop them and grow our business)",
      ],
    },
    {
      purpose:
        "To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data)",
      dataTypes: ["Identity", "Contact", "Technical"],
      lawfulBasis: [
        "Necessary for our legitimate interests (for running our business, provision of administration and IT services, network security, to prevent fraud and in the context of a business reorganization or group restructuring exercise)",
        "Necessary to comply with a legal obligation",
      ],
    },
    {
      purpose:
        "To use data analytics to improve our website, products/services, marketing, customer relationships and experiences",
      dataTypes: ["Technical", "Usage"],
      lawfulBasis: [
        "Necessary for our legitimate interests (to define types of customers for our products and services, to keep our website updated and relevant, to develop our business and to inform our marketing strategy)",
      ],
    },
    {
      purpose:
        "To make suggestions and recommendations to you about goods or services that may be of interest to you",
      dataTypes: [
        "Identity",
        "Contact",
        "Technical",
        "Usage",
        "Marketing and Communications",
      ],
      lawfulBasis: [
        "Necessary for our legitimate interests (to develop our products/services and grow our business)",
      ],
    },
  ]);
  return (
    <>
      <div className="terms-main">
        <div className="terms-head">
          <p>Privacy Policy</p>
          <p>Introduction</p>
        </div>
        <div className="terms-para">
          <p>Welcome to the Nomad Locum Limited's website privacy policy. </p>
          <p>
            Nomad Locum Limited respects your privacy and is committed to
            protecting your personal data. This privacy policy will inform you
            as to how we look after your personal data when you visit our
            website (regardless of where you visit it from) and tell you about
            your privacy rights and how the law protects you. 
          </p>
          <p>
            This privacy policy is provided in a layered format so you can click
            through to the specific areas set out below. Please also use the
            Glossary to understand the meaning of some of the terms used in this
            privacy policy.
          </p>
          <ol>
            <li>. IMPORTANT INFORMATION AND WHO WE ARE </li>
            <li>THE DATA WE COLLECT ABOUT YOU</li>
            <li>HOW IS YOUR PERSONAL DATA COLLECTED? </li>
            <li>HOW WE USE YOUR PERSONAL DATA</li>
            <li>DISCLOSURES OF YOUR PERSONAL DATA </li>
            <li>INTERNATIONAL TRANSFERS </li>
            <li>DATA SECURITY</li>
            <li>DATA RETENTION </li>
            <li>YOUR LEGAL RIGHTS </li>
            <li>GLOSSARY</li>
          </ol>
          <h3>1. Important information and who we are</h3>
          <br />
          <h4>Purpose of this privacy policy</h4>
          <p>
            This privacy policy aims to give you information on how Nomad Locum
            Limited collects and processes your personal data through your use
            of this website, including any data you may provide through this
            website when you sign up to receive information about our services. 
          </p>
          <p>
            This website is not intended for children and we do not knowingly
            collect data relating to children. 
          </p>
          <p>
            It is important that you read this privacy policy together with any
            other privacy policy or fair processing policy we may provide on
            specific occasions when we are collecting or processing personal
            data about you so that you are fully aware of how and why we are
            using your data. This privacy policy supplements other notices and
            privacy policies and is not intended to override them. 
          </p>
          <br />
          <br />
          <h4>controller</h4>
          <p>
            Nomad Locum Limited is the controller and responsible for your
            personal data (collectively referred to as "Nomad Locum", "we", "us"
            or "our" in this privacy policy). 
          </p>
          <p>
            If you have any questions about this privacy policy, including any
            requests to exercise your legal rights, please contact us using the
            details set out below. 
          </p>
          <br />
          <h4>Contact details</h4>
          <p>
            If you have any questions about this privacy policy or our privacy
            practices, please contact us in the following ways: 
          </p>
          <p>Full name of legal entity: Nomad Locum Limited </p>
          <p>Email address: info@nomadnurse.co.uk.</p>
          <p>Postal address: {"{TBC}"}</p>
          <br />
          <p>
            You have the right to make a complaint at any time to the
            Information Commissioner's Office (ICO), the UK regulator for data
            protection issues{" "}
            <Link to={"https://ico.org.uk/"}>(www.ico.org.uk)</Link>. We would,
            however, appreciate the chance to deal with your concerns before you
            approach the ICO so please contact us in the first instance. 
          </p>
          <br />
          <h4>
            {" "}
            Changes to the privacy policy and your duty to inform us of changes
          </h4>
          <p>We keep our privacy policy under regular review. </p>
          <p>
            It is important that the personal data we hold about you is accurate
            and current. Please keep us informed if your personal data changes
            during your relationship with us. 
          </p>
          <br />
          <h4>Third-party links</h4>
          <p>
            This website may include links to third-party websites, plug-ins and
            applications. Clicking on those links or enabling those connections
            may allow third parties to collect or share data about you. We do
            not control these third-party websites and are not responsible for
            their privacy statements. When you leave our website, we encourage
            you to read the privacy policy of every website you visit. 
          </p>
          <br />
          <h3> 2. The data we collect about you</h3>
          <p>
            Personal data, or personal information, means any information about
            an individual from which that person can be identified. It does not
            include data where the identity has been removed (anonymous data). 
          </p>
          <p>
            We may collect, use, store and transfer different kinds of personal
            data about you which we have grouped together as follows: 
          </p>
          <ul>
            <li>
              <p>
                <strong>identitiy Data</strong> includes first name, maiden
                name, last name, username or similar identifier, information
                about your teeth as set out on our ‘Can You Treat Me’ page,
                title, date of birth and gender. 
              </p>
            </li>
            <li>
              <p>
                <strong>Contact Data</strong> includes email address and phone
                number. 
              </p>
            </li>
            <li>
              <p>
                <strong>Technical Data</strong> includes internet protocol (IP)
                address, your login data, browser type and version, time zone
                setting and location, browser plug-in types and versions,
                operating system and platform, and other technology on the
                devices you use to access this website. 
              </p>
            </li>
            <li>
              <p>
                <strong>Usage Data</strong> includes information about how you
                use our website, products and services. 
              </p>
            </li>
            <li>
              <p>
                <strong> Marketing and Communications Data</strong> includes
                your preferences in receiving marketing from us and our third
                parties and your communication preferences. 
              </p>
            </li>
          </ul>
          <p>
            We also collect, use and share Aggregated Data such as statistical
            or demographic data for any purpose. Aggregated Data could be
            derived from your personal data but is not considered personal data
            in law as this data will not directly or indirectly reveal your
            identity. For example, we may aggregate your Usage Data to calculate
            the percentage of users accessing a specific website feature.
            However, if we combine or connect Aggregated Data with your personal
            data so that it can directly or indirectly identify you, we treat
            the combined data as personal data which will be used in accordance
            with this privacy policy. 
          </p>
          <p>
            We do not collect any 
            <strong>Special Categories of Personal Data</strong> about you (this
            includes details about your race or ethnicity, religious or
            philosophical beliefs, sex life, sexual orientation, political
            opinions, trade union membership, information about your health, and
            genetic and biometric data). Nor do we collect any information about
            criminal convictions and offences. 
          </p>
          <br />
          <h4>If you fail to provide personal data</h4>
          <p>
            Where we need to collect personal data by law, or under the terms of
            a contract we have with you, and you fail to provide that data when
            requested, we may not be able to perform the contract we have or are
            trying to enter into with you (for example, to provide you with
            goods or services). In this case, we may have to cancel a product or
            service you have with us but we will notify you if this is the case
            at the time. 
          </p>
          <br />
          <h3>3. How is your personal data collected?</h3>
          <p>
            We use different methods to collect data from and about you
            including through: 
          </p>
          <ul>
            <li>
              <p>
                <strong>Direct interactions.</strong> You may give us your
                Identity and Contact Data by filling in forms or by
                corresponding with us by post, phone, email or otherwise. This
                includes personal data you provide when you: 
              </p>
            </li>
            <li>
              <p>apply for our products or services; </p>
            </li>
            <li>request marketing to be sent to you; or </li>
            <li>
              <p>give us feedback or contact us.</p>
            </li>
            <li>
              <p>
                <strong>Automated technologies or interactions.</strong> As you
                interact with our website, we will automatically collect
                Technical Data about your equipment, browsing actions and
                patterns. We collect this personal data by using cookies, server
                logs and other similar technologies. Please see our 
                <strong>
                  <Link to="">cookie policy</Link>
                </strong>
                 for further details. 
              </p>
            </li>
          </ul>
          <br />
          <h3>4. How we use your personal data</h3>
          <p>
            We will only use your personal data when the law allows us to. Most
            commonly, we will use your personal data in the following
            circumstances: 
          </p>
          <ul>
            <li>
              <p>
                Where we need to perform the contract we are about to enter into
                or have entered into with you. 
              </p>
            </li>
            <li>
              <p>
                Where it is necessary for our legitimate interests (or those of
                a third party) and your interests and fundamental rights do not
                override those interests.
              </p>
               
            </li>
            <li>
              <p>
                Where we need to comply with a legal obligation. 
                <strong>
                  <Link>Click here</Link>
                </strong>
                 to find out more about the types of lawful basis that we will
                rely on to process your personal data. 
              </p>
            </li>
          </ul>
          <p>
            Generally, we do not rely on consent as a legal basis for processing
            your personal data although we will get your consent before sending
            third party direct marketing communications to you via email or text
            message. You have the right to withdraw consent to marketing at any
            time by contacting us. 
          </p>
          <br />
          <h4>Purposes for which we will use your personal data</h4>
          <p>
            We have set out below, in a table format, a description of all the
            ways we plan to use your personal data, and which of the legal bases
            we rely on to do so. We have also identified what our legitimate
            interests are where appropriate. 
          </p>
          <p>
            Note that we may process your personal data for more than one lawful
            ground depending on the specific purpose for which we are using your
            data. Please contact us if you need details about the specific legal
            ground we are relying on to process your personal data where more
            than one ground has been set out in the table below.
          </p>
          <table style={{ border: "1px solid rgba(128, 128, 128, 0.575)" }}>
            <thead>
              <tr style={{ border: "1px solid rgba(128, 128, 128, 0.575)" }}>
                <th style={{ border: "1px solid rgba(128, 128, 128, 0.575)" }}>
                  Purpose
                </th>
                <th style={{ border: "1px solid rgba(128, 128, 128, 0.575)" }}>
                  Data Types
                </th>
                <th style={{ border: "1px solid rgba(128, 128, 128, 0.575)" }}>
                  Lawful Basis
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  style={{ border: "1px solid rgba(128, 128, 128, 0.575)" }}
                >
                  <td
                    style={{ border: "1px solid rgba(128, 128, 128, 0.575)" }}
                  >
                    {item.purpose}
                  </td>
                  <td
                    style={{ border: "1px solid rgba(128, 128, 128, 0.575)" }}
                  >
                    {item.dataTypes.join(", ")}
                  </td>
                  <td
                    style={{ border: "1px solid rgba(128, 128, 128, 0.575)" }}
                  >
                    {item.lawfulBasis.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <h4>Marketing</h4>
          <p>
            We strive to provide you with choices regarding certain personal
            data uses, particularly around marketing and advertising. We have
            established the following personal data control mechanisms: 
          </p>
          <h4>Promotional offers from us</h4>
          <p>
            We may use your Identity, Contact, Technical, Usage and Profile Data
            to form a view on what we think you may want or need, or what may be
            of interest to you. This is how we decide which products, services
            and offers may be relevant for you (we call this marketing). 
          </p>
          <p>
            You will receive marketing communications from us if you have
            requested information from us or purchased goods or services from us
            and you have not opted out of receiving that marketing. 
          </p>
          <h4>Third-party marketing</h4>
          <p>
            We will get your express opt-in consent before we share your
            personal data with any third party for marketing purposes. 
          </p>
          <h4>Opting out</h4>
          <p>
            You can ask us or third parties to stop sending you marketing
            messages at any by contacting us at any time. 
          </p>
          <p>
            Where you opt out of receiving these marketing messages, this will
            not apply to personal data provided to us as a result of a
            product/service purchase. 
          </p>
          <h4>Cookies</h4>
          <p>
            You can set your browser to refuse all or some browser cookies, or
            to alert you when websites set or access cookies. If you disable or
            refuse cookies, please note that some parts of this website may
            become inaccessible or not function properly. For more information
            about the cookies we use,
            <strong>
              <Link> please see </Link>
            </strong>
          </p>
          <br />
          <h4>Change of purpose</h4>
          <p>
            We will only use your personal data for the purposes for which we
            collected it, unless we reasonably consider that we need to use it
            for another reason and that reason is compatible with the original
            purpose. If you wish to get an explanation as to how the processing
            for the new purpose is compatible with the original purpose, please
            contact us. 
          </p>
          <p>
            If we need to use your personal data for an unrelated purpose, we
            will notify you and we will explain the legal basis which allows us
            to do so. 
          </p>
          <p>
            Please note that we may process your personal data without your
            knowledge or consent, in compliance with the above rules, where this
            is required or permitted by law. 
          </p>
          <h3>5. Disclosures of your personal data</h3>
          <p>
            We may share your personal data with the parties set out below for
            the purposes set out in the table Purposes for which we will use
            your personal data above. 
          </p>
          <ul>
            <li>External Third Parties as set out in the Glossary. </li>
            <li>
              Third parties to whom we may choose to sell, transfer or merge
              parts of our business or our assets. Alternatively, we may seek to
              acquire other businesses or merge with them. If a change happens
              to our business, then the new owners may use your personal data in
              the same way as set out in this privacy policy. We require all
              third parties to respect the security of your personal data and to
              treat it in accordance with the law. We do not allow our
              third-party service providers to use your personal data for their
              own purposes and only permit them to process your personal data
              for specified purposes and in accordance with our instructions. 
            </li>
          </ul>
          <h3>6. International transfers</h3>
          <p>
            Some of our external third party suppliers are based outside the UK
            so their processing of your personal data will involve a transfer of
            data outside the UK.
          </p>
          <p>
            Whenever we transfer your personal data out of the UK, we ensure a
            similar degree of protection is afforded to it by ensuring at least
            one of the following safeguards is implemented: 
          </p>
          <ul>
            <li>
              {" "}
              We will only transfer your personal data to countries that have
              been deemed to provide an adequate level of protection for
              personal data. 
            </li>
            <li>
              Where we use certain service providers, we may use specific
              contracts approved for use in the UK which give personal data the
              same protection it has in the UK. Please contact us if you want
              further information on the specific mechanism used by us when
              transferring your personal data out of the UK. 
            </li>
          </ul>
          <br />
          <h3>7. Data security</h3>
          <p>
            We have put in place appropriate security measures to prevent your
            personal data from being accidentally lost, used or accessed in an
            unauthorised way, altered or disclosed. In addition, we limit access
            to your personal data to those employees, agents, contractors and
            other third parties who have a business need to know. They will only
            process your personal data on our instructions and they are subject
            to a duty of confidentiality
          </p>
          <p>
            We have put in place procedures to deal with any suspected personal
            data breach and will notify you and any applicable regulator of a
            breach where we are legally required to do so. 
          </p>
          <h3>8. Data retention</h3>
          <br />
          <h4>How long will you use my personal data for?</h4>
          <p>
            We will only retain your personal data for as long as reasonably
            necessary to fulfil the purposes we collected it for, including for
            the purposes of satisfying any legal, regulatory, tax, accounting or
            reporting requirements. We may retain your personal data for a
            longer period in the event of a complaint or if we reasonably
            believe there is a prospect of litigation in respect to our
            relationship with you. 
          </p>
          <p>
            To determine the appropriate retention period for personal data, we
            consider the amount, nature and sensitivity of the personal data,
            the potential risk of harm from unauthorised use or disclosure of
            your personal data, the purposes for which we process your personal
            data and whether we can achieve those purposes through other means,
            and the applicable legal, regulatory, tax, accounting or other
            requirements. 
          </p>
          <p>
            Details of retention periods for different aspects of your personal
            data are available in our retention policy which you can request
            from us by contacting us. 
          </p>
          <p>
            In some circumstances you can ask us to delete your data: see your
            legal rights below for further information. 
          </p>
          <p>
            In some circumstances we will anonymise your personal data (so that
            it can no longer be associated with you) for research or statistical
            purposes, in which case we may use this information indefinitely
            without further notice to you. 
          </p>
          <h4>9. Your legal rights</h4>
          <p>
            Under certain circumstances, you have rights under data protection
            laws in relation to your personal data. Please click on the links
            below to find out more about these rights: 
          </p>
          <ul>
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data. </li>
            <li>Request erasure of your personal data. </li>
            <li>Object to processing of your personal data. </li>
            <li>Request restriction of processing your personal data. </li>
            <li>Request transfer of your personal data.</li>
            <li>Right to withdraw consent. </li>
          </ul>
          <p>
            If you wish to exercise any of the rights set out above, please
            contact us. 
          </p>
          <h4>No fee usually required</h4>
          <p>
            You will not have to pay a fee to access your personal data (or to
            exercise any of the other rights). However, we may charge a
            reasonable fee if your request is clearly unfounded, repetitive or
            excessive. Alternatively, we could refuse to comply with your
            request in these circumstances. 
          </p>
          <h4>What we may need from you</h4>
          <p>
            We may need to request specific information from you to help us
            confirm your identity and ensure your right to access your personal
            data (or to exercise any of your other rights). This is a security
            measure to ensure that personal data is not disclosed to any person
            who has no right to receive it. We may also contact you to ask you
            for further information in relation to your request to speed up our
            response. 
          </p>
          <h4>Time limit to respond</h4>
          <p>
            We try to respond to all legitimate requests within one month.
            Occasionally it could take us longer than a month if your request is
            particularly complex or you have made a number of requests. In this
            case, we will notify you and keep you updated. 
          </p>
          <br />
          <h3>10. Glossary</h3>
          <br />
          <h4>LAWFUL BASIS</h4>
          <p>
            <strong>Legitimate Interest</strong> means the interest of our
            business in conducting and managing our business to enable us to
            give you the best service/product and the best and most secure
            experience. We make sure we consider and balance any potential
            impact on you (both positive and negative) and your rights before we
            process your personal data for our legitimate interests. We do not
            use your personal data for activities where our interests are
            overridden by the impact on you (unless we have your consent or are
            otherwise required or permitted to by law). You can obtain further
            information about how we assess our legitimate interests against any
            potential impact on you in respect of specific activities by
            contacting us. 
          </p>
          <p>
            <strong>Performance of Contract</strong> means processing your data
            where it is necessary for the performance of a contract to which you
            are a party or to take steps at your request before entering into
            such a contract. 
          </p>
          <p>
            <strong>Comply with a legal obligation</strong> means processing
            your personal data where it is necessary for compliance with a legal
            obligation that we are subject to.
          </p>
          <h4>THIRD PARTIES</h4>
          <br />
          <h4>External Third Parties</h4>
          <ul>
            <li>
              Dental practices in the United Kingdom acting as controllers, for
              the purposes of dentists contacting you to discuss treatment
              options, following your specific request for them to do so via our
              website. 
            </li>
            <li>
              Service providers acting as processors such as Cloudways Limited
              in Malta who provide website hosting, IT and system administration
              services. 
            </li>
            <li>
              Professional advisers acting as processors or joint controllers
              including lawyers, bankers, auditors and insurers based in the
              United Kingdom who provide consultancy, banking, legal, insurance
              and accounting services. 
            </li>
            <li>
              HM Revenue & Customs, regulators and other authorities acting as
              processors or joint controllers based in the United Kingdom who
              require reporting of processing activities in certain
              circumstances. 
            </li>
          </ul>
          <h3>YOUR LEGAL RIGHTS</h3>
          <h4>You have the right to: </h4>
          <p>
            <strong>Request access </strong>to your personal data (commonly
            known as a "data subject access request"). This enables you to
            receive a copy of the personal data we hold about you and to check
            that we are lawfully processing it. 
          </p>
          <p>
            <strong>Request correction</strong> of the personal data that we
            hold about you. This enables you to have any incomplete or
            inaccurate data we hold about you corrected, though we may need to
            verify the accuracy of the new data you provide to us. 
          </p>
          <p>
            <strong>Request erasure</strong> of your personal data. This enables
            you to ask us to delete or remove personal data where there is no
            good reason for us continuing to process it. You also have the right
            to ask us to delete or remove your personal data where you have
            successfully exercised your right to object to processing (see
            below), where we may have processed your information unlawfully or
            where we are required to erase your personal data to comply with
            local law. Note, however, that we may not always be able to comply
            with your request of erasure for specific legal reasons which will
            be notified to you, if applicable, at the time of your request. 
          </p>
          <p>
            <strong>Object to processing</strong> of your personal data where we
            are relying on a legitimate interest (or those of a third party) and
            there is something about your particular situation which makes you
            want to object to processing on this ground as you feel it impacts
            on your fundamental rights and freedoms. You also have the right to
            object where we are processing your personal data for direct
            marketing purposes. In some cases, we may demonstrate that we have
            compelling legitimate grounds to process your information which
            override your rights and freedoms. 
          </p>
          <p>
            <strong>Request restriction of processing</strong> of your personal
            data. This enables you to ask us to suspend the processing of your
            personal data in the following scenarios: 
          </p>
          <ul>
            <li>If you want us to establish the data's accuracy.</li>
            <li>
              Where our use of the data is unlawful but you do not want us to
              erase it. 
            </li>
            <li>
              Where you need us to hold the data even if we no longer require it
              as you need it to establish, exercise or defend legal claims.
            </li>
            <li>
              You have objected to our use of your data but we need to verify
              whether we have overriding legitimate grounds to use it. 
            </li>
          </ul>
          <p>
            <strong>Request the transfer</strong> of your personal data to you
            or to a third party. We will provide to you, or a third party you
            have chosen, your personal data in a structured, commonly used,
            machine-readable format. Note that this right only applies to
            automated information which you initially provided consent for us to
            use or where we used the information to perform a contract with
            you. 
          </p>
          <p>
            <strong>Withdraw consent at any time</strong> where we are relying
            on consent to process your personal data. However, this will not
            affect the lawfulness of any processing carried out before you
            withdraw your consent. If you withdraw your consent, we may not be
            able to provide certain products or services to you. We will advise
            you if this is the case at the time you withdraw your consent.
          </p>
        </div>
      </div>
    </>
  );
}
