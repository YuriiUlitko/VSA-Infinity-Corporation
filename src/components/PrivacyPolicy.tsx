import { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { contact } from '../data/landing';

const dsarHref = 'https://app.termly.io/dsar/0cf9fd1e-e1dd-47f7-a9f4-d96c42c72c4a';
const linkClass = 'font-medium text-pine underline underline-offset-2 hover:text-pine-dark';
const h2Class = 'mt-12 font-display text-xl font-extrabold uppercase tracking-wider text-ink md:text-2xl';
const h3Class = 'mt-8 font-display text-base font-bold uppercase tracking-wider text-ink';
const pClass = 'mt-4 text-sm leading-relaxed text-body md:text-base';

export function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | VSA Infinity Corporation';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white font-sans text-body">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-pine">Legal</p>
        <h1 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-wider text-ink md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted">Last updated October 09, 2026</p>

        <div className="prose-legal mt-10">
          <p className={pClass}>
            This Privacy Notice for VSA Infinity Corporation (doing business as VSA Infinity) (“we,” “us,” or “our”),
            describes how and why we might access, collect, store, use, and/or share (“process”) your personal
            information when you use our services (“Services”), including when you:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-body md:text-base">
            <li>
              Visit our website at{' '}
              <a className={linkClass} href="https://vsainfinity.com" target="_blank" rel="noopener noreferrer">
                https://vsainfinity.com
              </a>{' '}
              or any website of ours that links to this Privacy Notice
            </li>
            <li>Engage with us in other related ways, including any marketing or events</li>
          </ul>
          <p className={pClass}>
            <strong className="text-ink">Questions or concerns?</strong> Reading this Privacy Notice will help you
            understand your privacy rights and choices. We are responsible for making decisions about how your
            personal information is processed. If you do not agree with our policies and practices, please do not use
            our Services. If you still have any questions or concerns, please contact us at{' '}
            <a className={linkClass} href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            .
          </p>

          <h2 className={h2Class}>Summary of Key Points</h2>
          <p className={pClass}>
            This summary provides key points from our Privacy Notice. Use the table of contents below to find the
            section you are looking for.
          </p>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-body md:text-base">
            <li>
              <strong className="text-ink">What personal information do we process?</strong> When you visit, use, or
              navigate our Services, we may process personal information depending on how you interact with us and the
              Services, the choices you make, and the products and features you use.
            </li>
            <li>
              <strong className="text-ink">Do we process any sensitive personal information?</strong> We do not process
              sensitive personal information.
            </li>
            <li>
              <strong className="text-ink">Do we collect any information from third parties?</strong> We do not collect
              any information from third parties.
            </li>
            <li>
              <strong className="text-ink">How do we process your information?</strong> We process your information to
              provide, improve, and administer our Services, communicate with you, for security and fraud prevention,
              and to comply with law. We may also process your information for other purposes with your consent.
            </li>
            <li>
              <strong className="text-ink">In what situations and with which parties do we share personal information?</strong>{' '}
              We may share information in specific situations and with specific third parties.
            </li>
            <li>
              <strong className="text-ink">How do we keep your information safe?</strong> We have adequate organizational
              and technical processes and procedures in place to protect your personal information. However, no
              electronic transmission over the internet or information storage technology can be guaranteed to be 100%
              secure.
            </li>
            <li>
              <strong className="text-ink">What are your rights?</strong> Depending on where you are located
              geographically, applicable privacy law may mean you have certain rights regarding your personal
              information.
            </li>
            <li>
              <strong className="text-ink">How do you exercise your rights?</strong> The easiest way is by submitting a{' '}
              <a className={linkClass} href={dsarHref} target="_blank" rel="noopener noreferrer">
                data subject access request
              </a>
              , or by contacting us. We will consider and act upon any request in accordance with applicable data
              protection laws.
            </li>
          </ul>

          <h2 id="toc" className={h2Class}>
            Table of Contents
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-body md:text-base">
            <li>
              <a className={linkClass} href="#infocollect">
                What information do we collect?
              </a>
            </li>
            <li>
              <a className={linkClass} href="#infouse">
                How do we process your information?
              </a>
            </li>
            <li>
              <a className={linkClass} href="#whoshare">
                When and with whom do we share your personal information?
              </a>
            </li>
            <li>
              <a className={linkClass} href="#cookies">
                Do we use cookies and other tracking technologies?
              </a>
            </li>
            <li>
              <a className={linkClass} href="#inforetain">
                How long do we keep your information?
              </a>
            </li>
            <li>
              <a className={linkClass} href="#infosafe">
                How do we keep your information safe?
              </a>
            </li>
            <li>
              <a className={linkClass} href="#infominors">
                Do we collect information from minors?
              </a>
            </li>
            <li>
              <a className={linkClass} href="#privacyrights">
                What are your privacy rights?
              </a>
            </li>
            <li>
              <a className={linkClass} href="#dnt">
                Controls for Do-Not-Track features
              </a>
            </li>
            <li>
              <a className={linkClass} href="#uslaws">
                Do United States residents have specific privacy rights?
              </a>
            </li>
            <li>
              <a className={linkClass} href="#policyupdates">
                Do we make updates to this notice?
              </a>
            </li>
            <li>
              <a className={linkClass} href="#contact">
                How can you contact us about this notice?
              </a>
            </li>
            <li>
              <a className={linkClass} href="#request">
                How can you review, update, or delete the data we collect from you?
              </a>
            </li>
          </ol>

          <h2 id="infocollect" className={`${h2Class} scroll-mt-24`}>
            1. What Information Do We Collect?
          </h2>
          <h3 className={h3Class}>Personal information you disclose to us</h3>
          <p className={pClass}>
            <em>In Short:</em> We collect personal information that you provide to us.
          </p>
          <p className={pClass}>
            We collect personal information that you voluntarily provide to us when you express an interest in
            obtaining information about us or our products and Services, when you participate in activities on the
            Services, or otherwise when you contact us.
          </p>
          <p className={pClass}>
            <strong className="text-ink">Personal Information Provided by You.</strong> The personal information that
            we collect depends on the context of your interactions with us and the Services, the choices you make, and
            the products and features you use. The personal information we collect may include the following:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-body md:text-base">
            <li>names</li>
            <li>phone numbers</li>
            <li>email addresses</li>
            <li>mailing addresses</li>
          </ul>
          <p className={pClass}>
            <strong className="text-ink">Sensitive Information.</strong> We do not process sensitive information.
          </p>
          <p className={pClass}>
            All personal information that you provide to us must be true, complete, and accurate, and you must notify
            us of any changes to such personal information.
          </p>

          <h3 className={h3Class}>Information automatically collected</h3>
          <p className={pClass}>
            <em>In Short:</em> Some information — such as your Internet Protocol (IP) address and/or browser and device
            characteristics — is collected automatically when you visit our Services.
          </p>
          <p className={pClass}>
            We automatically collect certain information when you visit, use, or navigate the Services. This
            information does not reveal your specific identity (like your name or contact information) but may include
            device and usage information, such as your IP address, browser and device characteristics, operating
            system, language preferences, referring URLs, device name, country, location, information about how and
            when you use our Services, and other technical information. This information is primarily needed to
            maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
          </p>
          <p className={pClass}>The information we collect includes:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-body md:text-base">
            <li>
              <em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic, usage, and performance
              information our servers automatically collect when you access or use our Services and which we record in
              log files. Depending on how you interact with us, this log data may include your IP address, device
              information, browser type, and settings and information about your activity in the Services (such as the
              date/time stamps associated with your usage, pages and files viewed, searches, and other actions you
              take such as which features you use), device event information (such as system activity, error reports
              (sometimes called “crash dumps”), and hardware settings).
            </li>
          </ul>
          <h3 className={h3Class}>Google API</h3>
          <p className={pClass}>
            Our use of information received from Google APIs will adhere to{' '}
            <a
              className={linkClass}
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google API Services User Data Policy
            </a>
            , including the{' '}
            <a
              className={linkClass}
              href="https://developers.google.com/terms/api-services-user-data-policy#limited-use"
              target="_blank"
              rel="noopener noreferrer"
            >
              Limited Use requirements
            </a>
            .
          </p>

          <h2 id="infouse" className={`${h2Class} scroll-mt-24`}>
            2. How Do We Process Your Information?
          </h2>
          <p className={pClass}>
            <em>In Short:</em> We process your information to provide, improve, and administer our Services,
            communicate with you, for security and fraud prevention, and to comply with law. We may also process your
            information for other purposes with your consent.
          </p>
          <p className={pClass}>
            <strong className="text-ink">
              We process your personal information for a variety of reasons, depending on how you interact with our
              Services, including:
            </strong>
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-body md:text-base">
            <li>
              <strong className="text-ink">To deliver and facilitate delivery of services to the user.</strong> We may
              process your information to provide you with the requested service.
            </li>
          </ul>

          <h2 id="whoshare" className={`${h2Class} scroll-mt-24`}>
            3. When and With Whom Do We Share Your Personal Information?
          </h2>
          <p className={pClass}>
            <em>In Short:</em> We may share information in specific situations described in this section and/or with
            the following third parties.
          </p>
          <p className={pClass}>We may need to share your personal information in the following situations:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-body md:text-base">
            <li>
              <strong className="text-ink">Business Transfers.</strong> We may share or transfer your information in
              connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition
              of all or a portion of our business to another company.
            </li>
          </ul>

          <h2 id="cookies" className={`${h2Class} scroll-mt-24`}>
            4. Do We Use Cookies and Other Tracking Technologies?
          </h2>
          <p className={pClass}>
            <em>In Short:</em> We may use cookies and other tracking technologies to collect and store your
            information.
          </p>
          <p className={pClass}>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information
            when you interact with our Services. Some online tracking technologies help us maintain the security of
            our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
          </p>
          <p className={pClass}>
            We also permit third parties and service providers to use online tracking technologies on our Services for
            analytics and advertising, including to help manage and display advertisements or to tailor advertisements
            to your interests. The third parties and service providers use their technology to provide advertising
            about products and services tailored to your interests which may appear either on our Services or on other
            websites.
          </p>
          <p className={pClass}>
            To the extent these online tracking technologies are deemed to be a “sale”/“sharing” (which includes
            targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt
            out of these online tracking technologies by submitting a request as described below under section{' '}
            <a className={linkClass} href="#uslaws">
              Do United States residents have specific privacy rights?
            </a>
            .
          </p>
          <p className={pClass}>
            Specific information about how we use such technologies and how you can refuse certain cookies is set out
            in our Cookie Notice.
          </p>
          <h3 className={h3Class}>Google Analytics</h3>
          <p className={pClass}>
            We may share your information with Google Analytics to track and analyze the use of the Services. The
            Google Analytics Advertising Features that we may use include: Remarketing with Google Analytics. To opt
            out of being tracked by Google Analytics across the Services, visit{' '}
            <a className={linkClass} href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              https://tools.google.com/dlpage/gaoptout
            </a>
            . You can opt out of Google Analytics Advertising Features through{' '}
            <a className={linkClass} href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">
              Ads Settings
            </a>{' '}
            and Ad Settings for mobile apps. Other opt out means include{' '}
            <a className={linkClass} href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">
              http://optout.networkadvertising.org/
            </a>{' '}
            and{' '}
            <a
              className={linkClass}
              href="http://www.networkadvertising.org/mobile-choice"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.networkadvertising.org/mobile-choice
            </a>
            . For more information on the privacy practices of Google, please visit the{' '}
            <a className={linkClass} href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google Privacy &amp; Terms page
            </a>
            .
          </p>

          <h2 id="inforetain" className={`${h2Class} scroll-mt-24`}>
            5. How Long Do We Keep Your Information?
          </h2>
          <p className={pClass}>
            <em>In Short:</em> We keep your information for as long as necessary to fulfill the purposes outlined in
            this Privacy Notice unless otherwise required by law.
          </p>
          <p className={pClass}>
            We will only keep your personal information for as long as it is necessary for the purposes set out in
            this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax,
            accounting, or other legal requirements).
          </p>
          <p className={pClass}>
            When we have no ongoing legitimate business need to process your personal information, we will either
            delete or anonymize such information, or, if this is not possible (for example, because your personal
            information has been stored in backup archives), then we will securely store your personal information and
            isolate it from any further processing until deletion is possible.
          </p>

          <h2 id="infosafe" className={`${h2Class} scroll-mt-24`}>
            6. How Do We Keep Your Information Safe?
          </h2>
          <p className={pClass}>
            <em>In Short:</em> We aim to protect your personal information through a system of organizational and
            technical security measures.
          </p>
          <p className={pClass}>
            We have implemented appropriate and reasonable technical and organizational security measures designed to
            protect the security of any personal information we process. However, despite our safeguards and efforts to
            secure your information, no electronic transmission over the Internet or information storage technology can
            be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other
            unauthorized third parties will not be able to defeat our security and improperly collect, access, steal,
            or modify your information. Although we will do our best to protect your personal information, transmission
            of personal information to and from our Services is at your own risk. You should only access the Services
            within a secure environment.
          </p>

          <h2 id="infominors" className={`${h2Class} scroll-mt-24`}>
            7. Do We Collect Information From Minors?
          </h2>
          <p className={pClass}>
            <em>In Short:</em> We do not knowingly collect data from or market to children under 18 years of age.
          </p>
          <p className={pClass}>
            We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we
            knowingly sell such personal information. By using the Services, you represent that you are at least 18 or
            that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the
            Services. If we learn that personal information from users less than 18 years of age has been collected, we
            will deactivate the account and take reasonable measures to promptly delete such data from our records. If
            you become aware of any data we may have collected from children under age 18, please contact us at{' '}
            <a className={linkClass} href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            .
          </p>

          <h2 id="privacyrights" className={`${h2Class} scroll-mt-24`}>
            8. What Are Your Privacy Rights?
          </h2>
          <p className={pClass}>
            <em>In Short:</em> You may review, change, or terminate your account at any time, depending on your
            country, province, or state of residence.
          </p>
          <p className={pClass}>
            <strong className="text-ink">Withdrawing your consent:</strong> If we are relying on your consent to
            process your personal information, which may be express and/or implied consent depending on the applicable
            law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by
            contacting us by using the contact details provided in the section{' '}
            <a className={linkClass} href="#contact">
              How can you contact us about this notice?
            </a>{' '}
            below.
          </p>
          <p className={pClass}>
            However, please note that this will not affect the lawfulness of the processing before its withdrawal nor,
            when applicable law allows, will it affect the processing of your personal information conducted in
            reliance on lawful processing grounds other than consent.
          </p>
          <p className={pClass}>
            If you have questions or comments about your privacy rights, you may email us at{' '}
            <a className={linkClass} href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            .
          </p>

          <h2 id="dnt" className={`${h2Class} scroll-mt-24`}>
            9. Controls for Do-Not-Track Features
          </h2>
          <p className={pClass}>
            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”)
            feature or setting you can activate to signal your privacy preference not to have data about your online
            browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing
            and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser
            signals or any other mechanism that automatically communicates your choice not to be tracked online. If a
            standard for online tracking is adopted that we must follow in the future, we will inform you about that
            practice in a revised version of this Privacy Notice.
          </p>
          <p className={pClass}>
            California law requires us to let you know how we respond to web browser DNT signals. Because there
            currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond
            to them at this time.
          </p>

          <h2 id="uslaws" className={`${h2Class} scroll-mt-24`}>
            10. Do United States Residents Have Specific Privacy Rights?
          </h2>
          <p className={pClass}>
            <em>In Short:</em> If you are a resident of a US state with applicable data protection laws, you may have
            the right to request access to and receive details about the personal information we maintain about you and
            how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may
            also have the right to withdraw your consent to our processing of your personal information. These rights
            may be limited in some circumstances by applicable law.
          </p>
          <h3 className={h3Class}>Categories of Personal Information We Collect</h3>
          <p className={pClass}>
            The table below shows the categories of personal information we have collected in the past twelve (12)
            months. For a comprehensive inventory of all personal information we process, please refer to{' '}
            <a className={linkClass} href="#infocollect">
              What information do we collect?
            </a>
            .
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm text-body">
              <thead>
                <tr className="border-b border-line">
                  <th className="px-3 py-3 font-semibold text-ink">Category</th>
                  <th className="px-3 py-3 font-semibold text-ink">Examples</th>
                  <th className="px-3 py-3 font-semibold text-ink">Collected</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['A. Identifiers', 'Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name', 'YES'],
                  ['B. Protected classification characteristics under state or federal law', 'Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data', 'NO'],
                  ['C. Commercial information', 'Transaction information, purchase history, financial details, and payment information', 'NO'],
                  ['D. Biometric information', 'Fingerprints and voiceprints', 'NO'],
                  ['E. Internet or other similar network activity', 'Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements', 'NO'],
                  ['F. Geolocation data', 'Device location', 'NO'],
                  ['G. Audio, electronic, sensory, or similar information', 'Images and audio, video or call recordings created in connection with our business activities', 'NO'],
                  ['H. Professional or employment-related information', 'Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us', 'NO'],
                  ['I. Education Information', 'Student records and directory information', 'NO'],
                  ['J. Inferences drawn from collected personal information', 'Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics', 'NO'],
                  ['K. Sensitive personal Information', '—', 'NO'],
                ].map(([cat, examples, collected]) => (
                  <tr key={cat} className="border-b border-line align-top">
                    <td className="px-3 py-3">{cat}</td>
                    <td className="px-3 py-3">{examples}</td>
                    <td className="px-3 py-3 font-semibold text-ink">{collected}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={pClass}>
            We may also collect other personal information outside of these categories through instances where you
            interact with us in person, online, or by phone or mail in the context of:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-body md:text-base">
            <li>Receiving help through our customer support channels;</li>
            <li>Participation in customer surveys or contests; and</li>
            <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
          </ul>
          <h3 className={h3Class}>Sources of Personal Information</h3>
          <p className={pClass}>
            Learn more about the sources of personal information we collect in{' '}
            <a className={linkClass} href="#infocollect">
              What information do we collect?
            </a>
            .
          </p>
          <h3 className={h3Class}>How We Use and Share Personal Information</h3>
          <p className={pClass}>
            Learn more about how we use your personal information in{' '}
            <a className={linkClass} href="#infouse">
              How do we process your information?
            </a>
            .
          </p>
          <p className={pClass}>
            <strong className="text-ink">Will your information be shared with anyone else?</strong>
          </p>
          <p className={pClass}>
            We may disclose your personal information with our service providers pursuant to a written contract between
            us and each service provider. Learn more about how we disclose personal information in{' '}
            <a className={linkClass} href="#whoshare">
              When and with whom do we share your personal information?
            </a>
            .
          </p>
          <p className={pClass}>
            We may use your personal information for our own business purposes, such as for undertaking internal
            research for technological development and demonstration. This is not considered to be “selling” of your
            personal information.
          </p>
          <p className={pClass}>
            We have not disclosed, sold, or shared any personal information to third parties for a business or
            commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in
            the future belonging to website visitors, users, and other consumers.
          </p>
          <h3 className={h3Class}>Your Rights</h3>
          <p className={pClass}>
            You have rights under certain US state data protection laws. However, these rights are not absolute, and in
            certain cases, we may decline your request as permitted by law. These rights include:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-body md:text-base">
            <li>
              <strong className="text-ink">Right to know</strong> whether or not we are processing your personal data
            </li>
            <li>
              <strong className="text-ink">Right to access</strong> your personal data
            </li>
            <li>
              <strong className="text-ink">Right to correct</strong> inaccuracies in your personal data
            </li>
            <li>
              <strong className="text-ink">Right to request</strong> the deletion of your personal data
            </li>
            <li>
              <strong className="text-ink">Right to obtain a copy</strong> of the personal data you previously shared
              with us
            </li>
            <li>
              <strong className="text-ink">Right to non-discrimination</strong> for exercising your rights
            </li>
            <li>
              <strong className="text-ink">Right to opt out</strong> of the processing of your personal data if it is
              used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that
              produce legal or similarly significant effects (“profiling”)
            </li>
          </ul>
          <h3 className={h3Class}>How to Exercise Your Rights</h3>
          <p className={pClass}>
            To exercise these rights, you can contact us by submitting a{' '}
            <a className={linkClass} href={dsarHref} target="_blank" rel="noopener noreferrer">
              data subject access request
            </a>
            , by emailing us at{' '}
            <a className={linkClass} href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            , or by referring to the contact details at the bottom of this document.
          </p>
          <p className={pClass}>
            Under certain US state data protection laws, you can designate an authorized agent to make a request on
            your behalf. We may deny a request from an authorized agent that does not submit proof that they have been
            validly authorized to act on your behalf in accordance with applicable laws.
          </p>
          <h3 className={h3Class}>Request Verification</h3>
          <p className={pClass}>
            Upon receiving your request, we will need to verify your identity to determine you are the same person
            about whom we have the information in our system. We will only use personal information provided in your
            request to verify your identity or authority to make the request. However, if we cannot verify your
            identity from the information already maintained by us, we may request that you provide additional
            information for the purposes of verifying your identity and for security or fraud-prevention purposes.
          </p>
          <p className={pClass}>
            If you submit the request through an authorized agent, we may need to collect additional information to
            verify your identity before processing your request and the agent will need to provide a written and signed
            permission from you to submit such request on your behalf.
          </p>

          <h2 id="policyupdates" className={`${h2Class} scroll-mt-24`}>
            11. Do We Make Updates to This Notice?
          </h2>
          <p className={pClass}>
            <em>In Short:</em> Yes, we will update this notice as necessary to stay compliant with relevant laws.
          </p>
          <p className={pClass}>
            We may update this Privacy Notice from time to time. The updated version will be indicated by an updated
            “Revised” date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we
            may notify you either by prominently posting a notice of such changes or by directly sending you a
            notification. We encourage you to review this Privacy Notice frequently to be informed of how we are
            protecting your information.
          </p>

          <h2 id="contact" className={`${h2Class} scroll-mt-24`}>
            12. How Can You Contact Us About This Notice?
          </h2>
          <p className={pClass}>
            If you have questions or comments about this notice, you may email us at{' '}
            <a className={linkClass} href={`mailto:${contact.email}`}>
              {contact.email}
            </a>{' '}
            or contact us by post at:
          </p>
          <p className={`${pClass} text-ink`}>
            VSA Infinity Corporation
            <br />
            Collegeville
            <br />
            Collegeville, PA 19426
            <br />
            United States
          </p>

          <h2 id="request" className={`${h2Class} scroll-mt-24`}>
            13. How Can You Review, Update, or Delete the Data We Collect From You?
          </h2>
          <p className={pClass}>
            You have the right to request access to the personal information we collect from you, details about how we
            have processed it, correct inaccuracies, or delete your personal information. You may also have the right
            to withdraw your consent to our processing of your personal information. These rights may be limited in
            some circumstances by applicable law. To request to review, update, or delete your personal information,
            please fill out and submit a{' '}
            <a className={linkClass} href={dsarHref} target="_blank" rel="noopener noreferrer">
              data subject access request
            </a>
            .
          </p>

        </div>
      </main>
      <Footer />
    </div>
  );
}
