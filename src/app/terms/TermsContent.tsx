'use client';

import Link from 'next/link';
import { useUtm } from '@/hooks/useUtm';

export default function TermsContent() {
  const { getPathWithUtm } = useUtm();

  return (
    <>
      <h1>Terms of Use</h1>
      <p>
        <i>Last revised February, 2024</i>
      </p>
      <p>
        <strong>These terms and conditions of use (“Terms of Use”) govern your use of</strong>
        our online interfaces and properties (e.g., websites and mobile applications) owned and
        controlled by Plume, Inc., including the getplume.co website
        <strong>
          (the “Site”), as well as the non-clinical technology and Site services (the “Services”)
          and products (“Products”) available to users through the Site.
        </strong>
      </p>
      <p>
        Plume, Inc. (<strong>“Plume,” “we,” “us,” and “our”</strong>) contracts with Plume Health
        Medical Group and Plume Health Medical Group of California (collectively,
        <strong> “Plume Health Medical”</strong>) to assist them in the provision of online
        telehealth medical consultations and secure messaging between Plume Health Medical
        physicians and other healthcare professionals (individually the “<strong>Provider</strong>”
        and collectively the “<strong>Providers</strong>”) and their patients. (See the Section
        titled “<strong>Supplemental Terms Applicable to Providers</strong>”). As part of our
        Services, we facilitate access to prescription fulfillment services (“
        <strong>Pharmacy Services</strong>”) offered by a mail order pharmacy provider (the “
        <strong>Pharmacy</strong>”). The terms “<strong>you</strong>” and “<strong>your</strong>”
        means you, your dependents if any, and any other person accessing your Plume Account.
      </p>
      <p>
        <strong>
          Your acceptance of, and compliance with, these Terms of Use is a condition to your use of
          the Site and Services and purchase of Products. If you do not agree to be bound by these
          terms, you are not authorized to access or use this Site or Services; promptly exit this
          Site.
        </strong>
      </p>
      <p>
        <strong>Binding Arbitration</strong>. These Terms of Use provide that all disputes between
        you and Plume that in any way relate to these Terms of Use or your use of the Site will be
        resolved by BINDING ARBITRATION. ACCORDINGLY, YOU AGREE TO GIVE UP YOUR RIGHT TO GO TO COURT
        (INCLUDING IN A CLASS ACTION PROCEEDING) to assert or defend your rights under these Terms
        of Use. Your rights will be determined by a NEUTRAL ARBITRATOR and NOT a judge or jury and
        your claims cannot be brought as a class action. Please review the Section below entitled{' '}
        <strong>Dispute Resolution; Arbitration Agreement</strong> for the details regarding your
        agreement to arbitrate any disputes with Plume.
      </p>
      <h2>
        <strong>Privacy Practices</strong>
      </h2>
      <p>
        You agree that information provided by you in connection with the Site and Services shall be
        governed by the{' '}
        <Link href={getPathWithUtm('/privacy')}>
          <strong>Plume Privacy Policy</strong>
        </Link>
        , which is hereby incorporated and made a part of this Agreement. You agree that information
        provided by you in connection with the receipt of clinical services shall also be governed
        by the Plume Health Medical{' '}
        <Link href={getPathWithUtm('/notice-of-privacy-practices')}>
          <strong>Notice of Privacy Practices</strong>
        </Link>
        , and is hereby incorporated and made a part of this Agreement.
      </p>
      <h2>Services Provided – No Medical Care or Advice by Plume</h2>
      <p>
        As an important note, there is no single provider of medical care called “Plume”. Rather,
        the Services include online communication platform for Providers and their patients to
        connect via the Site through the use of synchronous and asynchronous telecommunications
        technologies. The Site facilitates communication between patients and Providers.
      </p>
      <p>
        Plume does not provide medical advice or care. Plume contracts with Plume Health Medical, an
        independent, physician-owned medical group with a network of United States based Providers
        who provide the clinical services. Plume provides administrative and business support
        services to Plume Health Medical. Plume licenses the “PLUME HEALTH MEDICAL GROUP” brand name
        to the independently owned and operated medical practices that use its platform and its
        administrative, business support, and other services. Providers are independently contracted
        or employed by the Plume Health Medical. Providers are not contracted or employed by Plume.
        The Providers, and not Plume, are responsible for the quality and appropriateness of the
        care they render to you. Plume and Plume Health Medical do not provide any legal advice or
        representations in any way regarding any legal issues associated with advice, information,
        goods, or clinical services offered by a Provider, including but not limited to any
        compliance obligations or steps necessary to comply with any state or federal laws and
        regulations.
      </p>
      <p>
        The Providers are independent of Plume and are merely using the Site as a way to communicate
        with you. Any information or advice received from a Provider comes from them alone, and not
        from Plume. Your interactions with the Providers via the Site are not intended to take the
        place of your relationship with your regular health care practitioners or primary care
        physician. Neither Plume, nor any of its subsidiaries or affiliates or any third party who
        may promote the Site, the clinical services or provide a link to the Site, shall be liable
        for any professional advice obtained from a Provider, nor any information obtained on the
        Site. Plume does not recommend or endorse any specific Providers, treatments, tests,
        physicians, medications, prescription products, Products, or procedures. You acknowledge
        that your reliance on any Providers or information delivered by the Providers via the Site
        is solely at your own risk and you assume full responsibility for all risks associated
        herewith.
      </p>
      <p>
        Plume does not make any representations or warranties about the training or skill of any
        Providers. You will be provided with available Providers based solely on the information you
        submit to the Site.
      </p>
      <p>
        The content of the Site, including without limitation, text, copy, audio, video,
        photographs, illustrations, graphics, and other visuals, is for informational purposes only
        and does not constitute professional medical advice, diagnosis, treatment, or
        recommendations of any kind by Plume. You should always seek the advice of your qualified
        health care professionals with any questions or concerns you may have regarding your
        individual needs and any medical conditions. All information provided by Plume, or in
        connection with any communications supported by Plume, is intended to be for general
        information purposes only, and is in no way intended to create a provider-patient
        relationship as defined by state or federal law. While Plume facilitates your selection of,
        and communications with, Providers, Plume does not provide clincial or medical services, and
        the doctor-patient relationship is between you and the Plume Health Medical Provider.
      </p>
      <p>
        The clinical or medical services, treatment, and care you receive may vary depending on the
        Provider you interact with. Please contact your Provider or Plume Health Medical directly
        for any questions regarding your care or medical treatment.
      </p>
      <h2>Not for Emergencies</h2>
      <p>
        <strong>
          IF YOU ARE EXPERIENCING A MEDICAL EMERGENCY, YOU SHOULD DIAL “911” IMMEDIATELY. IF YOU ARE
          EXPERIENCING A MENTAL HEALTH CRISIS, YOU CAN DIAL “988” (NATIONAL SUICIDE AND CRISIS
          HOTLINE) or “911” if needed.
        </strong>
      </p>
      <p>
        Plume’s Site is <strong>not</strong> for medical emergencies or urgent situations, including
        mental health crises. You should not disregard or delay seeking medical advice based on
        anything that appears or does not appear on the Site. If you believe you have an emergency,
        call 9-1-1 immediately.
      </p>
      <p>
        You should seek emergency help or follow up care when recommended by a Provider or when
        otherwise needed. You should continue to consult with your primary provider and other
        healthcare professionals as recommended. Always seek the advice of a physician or other
        qualified healthcare provider concerning questions you have regarding a medical condition
        and before stopping, starting, or modifying any treatment or modification.
      </p>
      <p>
        If you are experiencing a mental health crisis or believe that you may harm yourself or
        others please do not use this platform. Instead, immediately call 9-8-8 (National Suicide
        and Crisis Hotline) or 9-1-1. Your well-being is of the utmost importance, and urgent
        situations require immediate, in-person attention from specialized professionals equipped to
        provide the necessary care.
      </p>
      <h2>
        <strong>Risks of Telehealth Services</strong>
      </h2>
      <p>
        Telehealth involves the delivery of healthcare services using electronic communications,
        information technology or other means between a healthcare provider and a patient who are
        not in the same physical location. While the provision of health care services using
        telehealth offers many benefits, such as convenience, increased access to care, and
        flexibility in managing health needs, there are also risks and situations where in-person
        care is essential to ensure favorable health outcomes. Telehealth services are not a
        substitute for in-person health care in all cases.
      </p>
      <p>
        In order to obtain the clinical services from Plume Health Medical,, you will be required to
        review and agree to an informed consent regarding the use of telehealth (the “
        <strong>Patient Consent</strong>”) that will be provided to you by Plume Health Medical and
        Providers through the Site. You agree that Plume is a third-party beneficiary of the Patient
        Consent and has the right to enforce it against you.
      </p>
      <h2>Prescription Policy</h2>
      <p>
        Certain products available through the Site require a valid prescription by a licensed
        healthcare provider. You will not be able to obtain a prescription product unless you have
        completed a consultation with one of the Providers through the Site, the Provider has
        determined the prescription product is appropriate for you and the Provider has written a
        prescription.
      </p>
      <p>
        If a Provider determines a prescription product is appropriate for you and writes a
        prescription, you may fill it through the Pharmacy by using the Site, or you may fill the
        prescription at any pharmacy of your choice. Prescriptions fulfilled by the Pharmacy may not
        use child-resistant packaging and prescription products may not be dispensed in
        child-resistant containers.
      </p>
      <p>
        If you complete a consultation with a Provider and fill a prescription through the Pharmacy,
        the prescription product will be shipped to you by the Pharmacy.
      </p>
      <p>
        Neither Plume nor Plume Health Medical endorse any specific medication, pharmacy, or
        pharmacologic product. If a Provider prescribes a medication, the Provider will limit supply
        based upon state regulations and will only prescribe a medication as determined in the
        Provider’s own discretion and professional judgment. There is no guarantee a prescription
        will be written. Providers reserve the right to deny care for actual or potential misuse of
        the Site or clinical services.
      </p>
      <p>
        You agree that any prescriptions that you acquire from a Provider will be solely for your
        personal use. You agree to fully and carefully read all provided product information and
        labels and to contact a physician or pharmacist if you have any questions regarding the
        prescription. Plume and Plume Health Medical fully honor patient freedom of choice and, if
        you receive a prescription for a medication, you always have the option to instruct Plume
        Health Medical to transmit that prescription to the pharmacy of your choice.
      </p>
      <h2>Not an Insurance Product</h2>
      <p>
        Neither Plume nor Plume Health Medical are insurers. The Site and the clinical services are
        not insurance products, and the amounts you pay to Plume or Plume Health Medical are not
        insurance premiums. If you desire any type of health or other insurance, you will need to
        purchase such insurance separately.
      </p>
      <h2>Availability of Services</h2>
      <p>
        Plume and Plume Health Medical operate subject to state and federal regulations, and may not
        be available in your state. You represent that you are not a person barred from enrolling
        for or receiving the Services or clinical services under the laws of the United States or
        other applicable jurisdictions in which you may be located. Access to and use of the Site is
        limited exclusively to users who are 18 years of age or older and that are located in States
        within the United States where the Services are available. The Site and Services are not
        available to users located outside the United States. Accessing the Site or Services from
        jurisdictions where content is illegal, or where we do not offer Site or Services, is
        prohibited.
      </p>
      <h2>Ordering and Purchasing of Services or Products</h2>
      <p>
        <strong>Order Acceptance and Shipment</strong>
      </p>
      <p>
        Your placement of an order does not necessarily ensure that we will accept your order. We
        may require additional information regarding your order if you have not provided all the
        information required by us. Once a properly completed order and authorization of your form
        of payment is received, we will process your order and Product for shipment. We do not
        accept orders from dealers, wholesalers, or other customers who intend to resell items
        offered on our Site.
      </p>
      <p>
        Plume makes no representations or guarantees relating to the Products purchased through the
        Site or the Pharmacy, including any warranties related to correctness, completeness, or
        timeliness of delivery. Please direct any questions relating to Products to the Pharmacy or
        your Provider. Please review the Pharmacy’s term of use (available at{' '}
        <a
          href="https://www.empowerpharmacy.com/terms-and-conditions"
          target="_blank"
          rel=" noopener noreferrer"
        >
          https://www.empowerpharmacy.com/terms-and-conditions
        </a>
        ) for more information about the offered Products, including the Pharmacy’s return policy.
      </p>
      <p>
        Plume may from time to time also offer information on and special promotions for
        third-parties products and services. This does not mean that we endorse or accept any
        responsibility for the content, or the use, of the third-party products or services. If you
        decide to purchase or use product or service from a third-party product or service, you do
        this entirely at your own risk.
      </p>
      <p>
        <strong>Typographical Errors and Incorrect Pricing</strong>
      </p>
      <p>
        In the event any product or service is listed at an incorrect price due to typographical
        error or error in pricing information received from a third party, we shall have the right
        to refuse or cancel any orders placed for the products or services listed at the incorrect
        price. We shall have the right to refuse or cancel any such orders whether or not the order
        has been confirmed and your credit or debit card charged. If your credit or debit card has
        already been charged for the purchase and your order is canceled, we will promptly issue a
        credit to your credit or debit card account in the amount of the charge.
      </p>
      <p>
        <strong>Plume Membership</strong>
      </p>
      <p>
        The Plume Membership include access to personal gender transition and wellness services,
        communication services, and facilitation of access to clinical services. The Services
        offered by Plume are not professional services, and do not include items or services that
        are covered by health insurance plans. Plume does not engage in the practice of medicine or
        provide any diagnostic, therapeutic or clinical services, and no act or service required or
        permitted to be rendered by Plume pursuant to these Terms should be construed or deemed to
        constitute the practice of medicine or any clinical profession for which a professional
        license is required. Plume Membership subscription fees support the platforms and
        technologies essential for delivering the Services.
      </p>
      <p>
        If you select one of the Plume Membership subscriptions described below (“Membership”), your
        Membership will automatically renew either (a) monthly, on the date that is one month from
        the day that you elected to subscribe (“Monthly Renewal Date”), or (b) monthly, on the date
        that is one month after the day of your initial consultation medical appointment (“First
        Appointment Renewal Date”), unless you cancel your Membership prior to the applicable
        Renewal Date, whichever applies to your selected Membership subscription package. Prior to
        your Membership expiration, you will be sent a reminder that includes your renewal rate. If
        you have previously provided a credit or debit card, including those associated with a
        Health Savings Account or Flexible Spending Account, where applicable, you authorize Plume
        to charge it on your Renewal Date. Should your card be unable to be charged, we will issue a
        billing notice.
      </p>
      <p>
        In the event the initial payment attempt fails, we will automatically retry to collect the
        outstanding payment according to the following schedule (subject to change):
      </p>
      <ul>
        <li>1 day after the initial attempt</li>
        <li>3 days after the initial attempt</li>
        <li>7 days after the initial attempt</li>
        <li>14 days after the initial attempt</li>
      </ul>
      <p>
        These retries aim to provide a grace period for resolving any issues with your payment
        method, ensuring continuous access to our Site and Services without interruption.
      </p>
      <p>
        <strong>How to Cancel Your Membership</strong>
      </p>
      <p>
        YOU MAY CANCEL YOUR MEMBERSHIP AT ANY TIME BY CONTACTING PLUME by email (
        <a href="mailto:members@getplume.co">members@getplume.co</a>), phone (720-897-3749), or by
        mail (303 S Broadway #200-357 Denver, CO 80209).
      </p>
      <p>
        Plume offers multiple types of Membership subscriptions at different price points, with
        different options offered in each Membership.
      </p>
      <ul>
        <li>
          “Self-Pay Membership” does not bill or accept health insurance to cover the cost of the
          Site or clinical services. If you have a Self-Pay Membership, and would like to use your
          insurance to cover some or all of the costs associated with your Plume Membership, Plume
          is not responsible for any reimbursement as an “out of network” provider.
        </li>
        <li>
          “Insured Membership” is available to people with select health insurance plans. Your
          eligibility for Insured Membership depends on your particular health insurance policy, and
          whether Plume Health Medical is credentialed and “in network” as a provider in your health
          insurance plan. Your eligibility for Insured Membership may change over time, based on the
          terms and contracts in place with your health insurance company. Your insured Membership
          fee does not cover or pay for any professional services provided by Plume Health Medical
          clinicians. Plume Health Medical clinicians participate with one or more health insurance
          plans, and accept payment from those health insurance plans, as payment in full for
          professional services provided by the Plume Health Medical clinicians, subject to
          applicable deductibles, co-payments, and co-insurance. The Plume Health Medical clinicians
          will separately bill you for your health insurance plan for any professional services
          rendered to you by the Plume Health Medical clinicians.
        </li>
      </ul>
      <p>
        If you enroll in an Insured Membership plan, you are responsible for ensuring your health
        insurance information is up-to-date and accurate at all times during your Membership at
        Plume. Plume may periodically re-confirm your eligibility for Insured Membership. If for any
        reason Plume is no longer able to accept your health insurance, or you are no longer
        enrolled in a particular health insurance plan that is accepted by Plume and eligible for
        Insured Membership, you are able to continue care with Plume in an Self-Pay Membership at an
        Self-Pay Membership rate. If you are an Insured Member but we are unable to accept your
        insurance at the time of your medical service for any reason, you may be charged the full
        price of clinical services provided, in addition to your Membership fee. If you wish to
        continue care with Plume but are no longer eligible for an Insured Membership, you may be
        automatically enrolled in a Self-Pay Membership at the end of your current billing period.
        If you reject the terms of an Insured Membership or a Self-Pay Membership, you may cancel
        your subscription at any time. Please see How To Cancel Your Membership above.
      </p>
      <p>
        You understand and agree that these Terms are not a contract of insurance. These Terms do
        not meet any individual health insurance mandate that may be required under state or federal
        law. While you may, in your discretion, submit the Membership fee for reimbursement to a
        flexible spending account, health reimbursement account, or medical savings account of your
        employer in which you participate, Plume makes no representation that any part of the
        Membership fee will qualify to be reimbursed from any such account.
      </p>
      <p>
        <strong>Online Payments </strong>
      </p>
      <p>
        You can purchase services and items on the Site. To simplify the user experience on the
        Site, you are able to pay for your purchases via the Site with Plume serving as payment
        processing agent on your behalf. If you elect to purchase clinical services from Plume
        Health Medical or an item (e.g., a prescription product) from the Pharmacy listed on our
        Site, then the total price you pay includes the amount charged by Plume Health Medical for
        the clinical services, as well as the amount charged by the Pharmacy. We also charge a
        subscription fee for you to use and access the Site and its features via your user account.
        We collect the amounts charged by the Pharmacy and Plume Health Medical on your behalf and
        pass through to them the payment for their actual charges. Before making a purchase, you
        will see an itemized invoice listing the actual charges by Plume Health Medical, the
        Pharmacy for the prescription products, and us for the online membership fee.
      </p>
      <p>
        Payment processing services for our Site are provided by a secure payment platform and are
        subject to the secure payment platform user agreement. As a condition of Plume enabling
        payment processing services through the secure payment platform you agree to provide Plume
        accurate and complete information about you and your business, and you authorize Plume to
        share it and transaction information related to your use of the payment processing services
        provided by the payment platform. You and Plume agree that the payment method you submit may
        be used automatically by Plume or its payment processors for any of your responsibilities
        for payment. If a credit card account is being used for a transaction, Plume may obtain
        preapproval for an amount up to the amount of the payment. If you enroll to make recurring
        payments automatically, all charges and fees will be billed to the payment method you
        designate during the setup process.
      </p>
      <p>
        If you have Insured Membership, the credit card submitted online and saved with Plume during
        the setup process can be used for payments related to your Membership fee. If your health
        insurance has an applicable “copay,” billing sent from Plume Health Medical clinicians may
        request that you re-enter your payment information or provide an alternative payment method
        to cover the cost of your copay in follow-up communications after the time of your
        appointment Your “copay” may also be referred to as a “patient responsibility,” “copayment,”
        or “coinsurance,” and reflects any “out-of-pocket” costs due to your Provider that are not
        paid for by your health insurance. If a deductible is required before insurance benefits can
        be applied to your clinical services at Plume Health Medical, based on the terms of your
        specific health insurance policy, Plume Health Medical may charge you the full amount for
        the clinical services provided so that it can be applied to your deductible. If you have an
        Insured Membership, your Membership fee does not include the copay due to the Provider for
        clinical services covered by your insurance policy. Based on the insurance billing and
        payment processes at the time of your appointment and the terms of your specific health
        insurance policy, Plume Health Medical may charge you the amount of your copay before or
        after the time of your clinical service(s) provided by Plume Health Medical providers. Plume
        Health Medical may charge you the full amount of the copayment or coinsurance at one time or
        over several payment periods, and may use your previously saved payment method on file or
        request that you re-enter your payment information or provide an alternative payment method
        to cover the cost of your copay. You have the right to revoke this authorization by
        contacting Plume via <a href="mailto:help@getplume.co">help@getplume.co</a> at least fifteen
        (15) days prior to the scheduled payment date. You understand and acknowledge that Services
        may be cancelled or withheld if you revoke this authorization, and that you are still
        responsible for all charges incurred by you or are otherwise owed to Plume. This
        authorization will remain in full force and effect until revoked by you or Plume. If you
        want to designate a different payment method or if there is a change in your payment method,
        you must change your information online or by contacting Plume via{' '}
        <a href="mailto:help@getplume.co">help@getplume.co</a>. This may temporarily delay your
        ability to make online payments while we verify your new payment information.
      </p>
      <p>
        You represent and warrant that if you are making online payments that (a) any credit card,
        debit card and bank account information you supply is true, correct, and complete, (b)
        charges incurred by you will be honored by your credit/debit card company or bank, (c) you
        will pay the charges incurred by you in the amounts posted, including, without limitation,
        any applicable taxes, and (d) you are the person in whose name the card was issued and you
        are authorized to make a purchase or other transaction with the relevant credit card and
        credit card information. If Plume is unable to secure funds from the payment method you
        provide for any reason, including insufficient funds in the payment method or insufficient
        or inaccurate information provided by you when submitting electronic payment, Plume may
        undertake further collection action, including application of fees to the extent permitted
        by law. You acknowledge and agree that you will not dispute the charges from Plume with the
        payment method company, provided the transactions correspond to the terms indicated in these
        Terms of Use.
      </p>
      <p>
        <strong>Subscription Terms </strong>
      </p>
      <p>
        If you purchase a subscription to our Services, your subscription is continuous and will be
        automatically renewed at the end of the applicable subscription period, unless you cancel
        your subscription before the end of the then-current subscription period. If you cancel your
        subscription, your account will automatically close at the end of your current billing
        period. Plume may change the price for your Plume subscription, from time to time and will
        communicate any price changes to you in advance and, if applicable, how to accept those
        changes. Price changes will take effect at the start of the next subscription period
        following the date of the price change. If you do not agree with a price change, you have
        the right to reject the change by unsubscribing from the Services prior to the price change
        going into effect.
      </p>
      <h2>Eligibility; Site Access, Security and Restrictions; Passwords</h2>
      <p>
        We reserve the right to withdraw or amend this Site, and any Services or material we provide
        on the Site, in our sole discretion without notice. We will not be liable if for any reason
        all or any part of the Site is unavailable at any time or for any period. From time to time,
        we may restrict access to some parts of the Site, or the entire Site, to users, including
        registered users.
      </p>
      <p>
        You agree to fully, accurately, and truthfully create your Plume Account (“Account”),
        including but not limited to your name, mailing address, phone number, email address, and
        password, which become your Plume ID and credentials. The Plume ID or credentials are
        personal to you, and you are solely responsible for maintaining the confidentiality of your
        Plume ID or credentials, and for all activities that occur under such Plume ID or
        credentials. You agree to prohibit anyone else from using your Plume ID or credentials and
        agree to immediately notify Plume of any actual or suspected unauthorized use of your Plume
        ID or credentials or other security concerns of which you become aware. Your access to the
        Site may be revoked by Plume at any time with or without cause.
      </p>
      <p>
        You are prohibited from violating or attempting to violate the security of the Site,
        including, without limitation: (a) accessing data not intended for such user or logging onto
        a server or an account which the user is not authorized to access; (b) attempting to probe,
        scan, or test the vulnerability of a system or network or to breach security or
        authentication measures without proper authorization; or (c) accessing or using the Site or
        any portion thereof without authorization, in violation of these Terms of Use or in
        violation of applicable law.
      </p>
      <p>
        You may not use any scraper, crawler, spider, robot, or other automated means of any kind to
        access or copy data on the Site, deep-link to any feature or content on the Site, bypass our
        robot exclusion headers, or other measures we may use to prevent or restrict access to the
        Site. Violations of system or network security may result in civil or criminal liability.
        Plume may investigate occurrences that may involve such violations and may involve, and
        cooperate with, law enforcement authorities in prosecuting users who are involved in such
        violations. You agree not to use any device, software, or routine to interfere or attempt to
        interfere with the proper working of this Site or any activity being conducted on this Site.
      </p>
      <h2>Electronic Communications</h2>
      <p>
        When you use the Site or Services, or send e-mails, messages, and other communications from
        your desktop or mobile device to us, you are communicating with us electronically. You
        consent to receive communications from us electronically. You agree that (a) all agreements
        and consents can be signed electronically and (b) all notices, disclosures, and other
        communications that we provide to you electronically satisfy any legal requirement that such
        notices and other communications be in writing. Plume, Plume Health Medical, or the Pharmacy
        may contact you by telephone, mail, or email to verify your Account information. Plume,
        Plume Health Medical, or the Pharmacy may request further information from you and you agree
        to provide such further information to ensure that you have not fraudulently created your
        Account. If you do not provide this information in the manner requested within 14 days of
        the request, we reserve the right to suspend, discontinue, or deny your access to and use of
        the Site and the Services until you provide the information to us as requested. Your
        electronic communications with Plume will be encrypted.
      </p>
      <h2>
        <strong>Consent to Receive Calls and Text Messages and Video Recording</strong>
      </h2>
      <p>
        After opting-in to the Plume SMS program, you are agreeing to be contacted by or on behalf
        of Plume at the mobile number you have provided using an automatic telephone dialing system
        or prerecorded message to receive informational, service related (e.g., an alert that you
        have a message from your provider, reminders, 2-factor authentication, etc.) messages, and
        communications relating to the Services. Our current communication platform is the Spruce
        app. You will receive a one-time download code via push message. After that, you will
        receive push notifications from the Spruce app when you have a new message in the app. You
        can turn on/off push notifications from within the app settings under “notification
        preferences”. If you are having trouble with notifications, email{' '}
        <a href="mailto:help@getplume.co">help@getplume.co</a>.
      </p>
      <p>
        If you want to stop receiving calls at any time, you can do so from the settings in your
        patient portal, or you can get help directly by calling 720-897-3749 or emailing{' '}
        <a href="mailto:help@getplume.co">help@getplume.co</a>.
      </p>
      <p>
        Message and data rates may apply. If you have any questions about your text plan or data
        plan, it is best to contact your wireless provider. Carriers are not liable for delayed or
        undelivered messages. If you have any questions regarding privacy, please read our privacy
        policy: <Link href={getPathWithUtm('/privacy')}>https://landing.getplume.co/privacy</Link>.
      </p>
      <p>
        Plume or your Provider may record (audio and video) all or part of your interaction with us
        or them (“Recordings”). Such Recordings are used for quality assurance purposes only, to
        better deliver to you the Products, Site and Services, and to help Plume improve the Site.
        Plume will keep such Recordings confidential, and we will not publicly display such
        recordings unless legally required to do so, such as if subject to a court order. By
        accessing and using the Site, you agree and consent to such Recordings for the purposes and
        uses set forth in these Terms of Use and as otherwise set forth in the Privacy Policy{' '}
        <Link href={getPathWithUtm('/privacy')}>https://landing.getplume.co/privacy</Link>. We
        reserve the right to remove you from a group therapy session or other event, and cancel your
        subscription, if you engage in inappropriate conduct during a group therapy session or
        event, such as using unlawful, offensive, harassing or inappropriate language, or engage in
        any other unlawful, offensive, harassing or inappropriate conduct.
      </p>
      <h2>Consent to SMS Two-Factor Authentication</h2>
      <p>
        By providing your number to Plume, you are agreeing to receive non-marketing text messages
        from Plume. These messages include messages about the Site, Services, and your account, as
        well as alerts that you have a secure message in your patient portal and messages designed
        to keep your account secure. Plume uses a SMS two-factor authentication service. We will
        send you a two-factor authentication code via SMS message at a rate of 1 message per
        request. Requests are made by the user. This service is used to send you a two-factor
        authentication code when logging in to view messages from your Healthcare team. You can
        cancel this service at any time. Just text “STOP” to 61939. After you send the message
        “STOP”, we will send you a reply message to confirm that you have been unsubscribed. After
        this, you will no longer receive messages from us. If you want to join again, send RESTART
        to 61939. If at any time you need help, just text “HELP” to 61939. After you send the
        message “HELP” to us, we will respond with instructions on how to contact us. Carriers are
        not liable for delayed or undelivered messages. Message and Data Rates May Apply for any
        messages sent to you from Plume’s two-factor authentication service. If you have questions
        about your text plan or data plan, contact your wireless provider. For all questions about
        the services provided by this short code, email members@getplume.co. If you have any
        questions regarding privacy, {''}
        <Link href={getPathWithUtm('/privacy')}>https://landing.getplume.co/privacy</Link>.
      </p>
      <h2>
        <strong>Ownership Of The Site And Related Materials; Additional Restrictions</strong>
      </h2>
      <p>
        All pages within this Site and any material made available for download are the property of
        Plume, or its licensors or suppliers, as applicable. The Site is protected by United States
        and international copyright and trademark laws.
      </p>
      <p>
        Subject to these Terms of Use and the payment of all applicable fees, Plume grants you a
        revocable, nontransferable (except as provided below), personal, nonexclusive license to use
        the object code version of the Site. All rights not expressly granted to you in these Terms
        of Use are reserved and retained by Plume or its licensors, suppliers, publishers, rights
        holders, or other content providers. Neither the Site and Services, nor any part of the Site
        and Services, may be reproduced, duplicated, copied, sold, resold, visited, or otherwise
        exploited for any commercial purpose without express written consent of Plume. You may not
        frame or utilize framing techniques to enclose any trademark, logo, or other proprietary
        information (including images, text, page layout, or form) of Plume without express written
        consent. You may not use any meta tags or any other “hidden text” utilizing Plume’s name or
        trademarks without the express written consent of Plume. You may not misuse the Site or
        Services. You may use the Site and Services only as permitted by law. The content of the
        Site, including without limitation the files, documents, text, photographs, images, audio,
        and video, and any materials accessed through or made available for use or download through
        this Site may not be copied, distributed, modified, reproduced, published, or used, in whole
        or in part, except for purposes authorized or approved in writing by Plume. You may not
        frame or utilize framing techniques to enclose, or deep linking to, any name, trademarks,
        service marks, logo, content, or other proprietary information (including, without
        limitation, images, text, page layout, or form) of Plume without our express written
        consent.
      </p>
      <h2>No Users Under 18 Years Old</h2>
      <p>
        In order to access the Site and the Services, you represent and warrant that you are older
        than 18 years old. If you are under the age of 18, please do not attempt to register with us
        at this Site or provide any personal information about yourself to us. If we learn that we
        have collected personal information from someone under the age of 18, we will promptly
        delete that information. If you believe we have collected personal information from someone
        under the age of 18, please contact us at{' '}
        <a href="mailto:help@getplume.co">help@getplume.co</a> or call us at 720-897-3749
      </p>
      <h2>Accuracy of Information; Functionality</h2>
      <p>
        Although Plume attempts to ensure the integrity and accurateness of the Site and Service
        descriptions, it makes no representations, warranties, or guarantees whatsoever as to the
        correctness or accuracy of the Site, Service descriptions and other content on the Site. It
        is possible that the Site could include typographical errors, inaccuracies or other errors,
        and that unauthorized additions, deletions, and alterations could be made to the Site by
        third parties. In the event that an inaccuracy arises, please inform Plume so that it can be
        corrected. Information contained on the Site may be changed or updated without notice.
        Additionally, Plume shall have no responsibility or liability for information or content
        posted to the Site from any non-Plume affiliated third party.
      </p>
      <p>
        Plume and Plume Health Medical each reserves complete and sole discretion with respect to
        the operation of the Site and the Services. We may withdraw, suspend, or discontinue any
        functionality or feature of the Site or the Services among other things. We are not
        responsible for transmission errors, corruption, or compromise of information carried over
        local or interchange telecommunications carrier. We are not responsible for maintaining
        information arising from use of the Site or with respect to the Services. We reserve the
        right to maintain, delete, or destroy all communications or information posted or uploaded
        to the Site or the Services in accordance with our internal record retention or destruction
        policies.
      </p>
      <h2>Links to Other Sites</h2>
      <p>
        Plume makes no representations whatsoever about any other website that you may access
        through this Site. When you access a non-Plume site, please understand that it is
        independent from Plume, and that Plume has no control over the content on that website. In
        addition, a link to a non-Plume website does not mean that Plume endorses or accepts any
        responsibility for the content, or the use, of the linked site. It is up to you to take
        precautions to ensure that whatever you select for your use or download is free of such
        items as viruses, worms, Trojan horses, and other items of a destructive nature. If you
        decide to access any of the third party sites linked to this Site, you do this entirely at
        your own risk.
      </p>
      <h2>User Information</h2>
      <p>
        If you submit, upload, post, or transmit any health information, medical history,
        conditions, problems, symptoms, personal information, consent forms, agreements, requests,
        comments, ideas, suggestions, information, files, videos, images, or other materials to us
        or our Site (“User Information”), you agree not to provide any User Information that (a) is
        false, inaccurate, defamatory, abusive, libelous, unlawful, obscene, threatening, harassing,
        fraudulent, pornographic, or harmful, or that could encourage criminal or unethical
        behavior, (b) violates or infringes the privacy, copyright, trademark, trade dress, trade
        secrets, or intellectual property rights of any person or entity, or (c) contains or
        transmits a virus or any other harmful component. You agree not to contact other Site users
        through unsolicited e-mail, telephone calls, mailings, or any other method of communication.
        You represent and warrant to Plume and Plume Health Medical that you have the legal right
        and authorization to provide all User Information to Plume and Plume Health Medical for use
        as set forth herein and required by Plume and the Plume Health Medical Provider.
      </p>
      <p>
        Plume or Plume Health Medical may de-identify your information such that it is no longer
        considered protected health information or personally identifiable information. Plume or
        Plume Health Medical may disclose, aggregate, sell, or otherwise use such de-identified
        information to third parties for analytics, research, or other purposes.
      </p>
      <p>
        You agree not to: (i) access the Site or use the Services in any unlawful way or for any
        unlawful purpose; (ii) post or transmit (1) a message under a false name, or (2) any data,
        materials, content, or information (including, without limitation, advice, and
        recommendations) (collectively “Information”) which is (A) libelous, defamatory, obscene,
        fraudulent, false, or contrary to the ownership or intellectual property rights of any other
        person, or (B) contains or promotes any virus, worm, Trojan horse, time bomb, malware, or
        other computer programing or code that is designed or intended to damage, destroy,
        intercept, download, interfere, manipulate, or otherwise interrupt or expropriate the Site
        or the Services, personal information, software, equipment, servers, or Information or
        facilitate or promote hacking or similar conduct; (iii) impersonate or misrepresent your
        identity or falsely state or misrepresent your affiliation with a person or entity; (iv)
        tamper, hack, spoof, copy, modify, or otherwise corrupt the administration, security, or
        proper function of the Site or the Services; (v) use robots or scripts with the Site; (vi)
        attempt to reverse engine, reverse assemble, reverse compile, decompile, disassemble,
        translate, or otherwise alter, defraud, or create false results from any executable code,
        information on, or received by this Site; (vii) to have any antivirus or antispyware
        software running that is set to override the internet browser’s cookies setting; (viii)
        incorrectly identify the sender of any message transmitted to Plume; (ix) alter the
        attribution or origin of electronic mail, messages, or posting; (x) harvest or collect
        personal health information about any other individual who uses the Site or the Services;
        and (xi) infringe or facilitate infringement on any copyright, patent, trademark, trade
        secret, or other proprietary, publicity, or privacy rights of any party, including but not
        limited to, such rights of third parties.
      </p>
      <p>
        You agree to defend, indemnify, and hold harmless Plume, Plume Health Medical, and the
        Providers from and against all third party claims, damages, and expenses (including, but not
        limited to, reasonable attorneys’ fees) against or incurred by us arising out of any User
        Information you upload to or transmit through the Site or any breach of this Section.
      </p>
      <h2>Confidentiality</h2>
      <p>
        If you participate in a group therapy session, event or other interaction, please respect
        the privacy and confidentiality of other user. Anything you learn about another user may not
        and should not be shared outside of Plume. If you wish to generally describe experiences to
        others, please do not use the names of any of our other users or the names of family
        members, friends or other individuals discussed during an online group therapy session,
        event or other interaction.
      </p>
      <h2>Claims of Copyright Infringement</h2>
      <p>
        We disclaim any responsibility or liability for copyrighted materials posted on our Site. If
        you believe that your work has been copied in a manner that constitutes copyright
        infringement, please follow the procedures set forth below.
      </p>
      <p>
        Plume respects the intellectual property rights of others and expects its users to do the
        same. In accordance with the Digital Millennium Copyright Act (“DMCA”), we will respond
        promptly to notices of alleged infringement that are reported to Plume’s Designated
        Copyright Agent, identified below.
      </p>
      <h2>Notices of Alleged Infringement for Content Made Available on the Site</h2>
      <p>
        If you are a copyright owner, authorized to act on behalf of one, or authorized to act under
        any exclusive right under copyright, please report alleged copyright infringements taking
        place on or through our Site by sending us a notice (“Copyright Notice”) complying with the
        following requirements.
      </p>
      <ol>
        <li>Identify the copyrighted works that you claim have been infringed.</li>
        <li>
          Identify the material or link you claim is infringing (or the subject of infringing
          activity) and that access to which is to be disabled, including at a minimum, if
          applicable, the URL of the link shown on the Site where such material may be found.
        </li>
        <li>Provide your mailing address, telephone number, and, if available, email address.</li>
        <li>Include both of the following statements in the body of the Copyright Notice:</li>
      </ol>
      <p>
        “I hereby state that I have a good faith belief that the disputed use of the copyrighted
        material is not authorized by the copyright owner, its agent, or the law (e.g., as a fair
        use).”
      </p>
      <p>
        “I hereby state that the information in this Copyright Notice is accurate and, under penalty
        of perjury, that I am the owner, or authorized to act on behalf of the owner, of the
        copyright or of an exclusive right under the copyright that is allegedly infringed.”
      </p>
      <ol>
        <li>Provide your full legal name and your electronic or physical signature.</li>
      </ol>
      <p>Deliver this Copyright Notice, with all items completed, to our Copyright Agent:</p>
      <address>
        <strong>Plume, Inc.</strong>
        <br />
        303 S. Broadway
        <br />
        #200-357
        <br />
        Denver, CO 80209
        <br />
        Telephone: <a href="tel:+18337980736">(833)-798-0736</a>
        <br />
        Email: <a href="mailto:help@getplume.co">help@getplume.co</a>
      </address>
      <h2>Intellectual Property</h2>
      <p>
        With the exception of your electronic medical record, Plume and Plume Health Medical, as
        applicable, retain all right, title, and interest in and to the Site, the Services and any
        information, products, documentation, software, or other materials on the Site, and any
        patent, copyright, trade secret, trademark, service mark, or other intellectual property, or
        proprietary right in any of the foregoing, except for information on the Site licensed by
        Plume or Plume Health Medical (in that case, the license provider retains all right, title,
        and interest therein). The information available through the Site and the Services is the
        property of Plume or Plume Health Medical, as applicable. You agree not to store, copy,
        modify, reproduce, retransmit, distribute, disseminate, rent, lease, loan, sell, publish,
        broadcast, display, or circulate such information to anyone. Use, reproduction, copying, or
        redistribution of Plume or Plume Health Medical trademarks, service marks, and logos are
        strictly prohibited without the prior written permission of Plume or Plume Health Medical,
        as applicable. The immediately foregoing sentence also applies to any third party
        trademarks, service marks, and logos posted on the Site. Nothing contained on the Site
        should be construed as granting, by implication, estoppel, waiver, or otherwise, any license
        or right to use any trademarks, service marks, or logos displayed on the Site without the
        written grant thereof by Plume, Plume Health Medical, or the third party owner of such
        trademarks, service marks, or logos. The Site may contain other proprietary notices and
        copyright information, the terms of which you agree to follow.
      </p>
      <p>
        Plume may delete any information provided by you that it deems in its sole discretion
        fraudulent, abusive, defamatory, obscene, or in violation of copyright, trademark, or other
        intellectual property or ownership right of any other person or entity.
      </p>
      <h2>CAN-SPAM Act and Telephone Consumer Protection Act Compliance</h2>
      <p>
        Plume and Plume Health Medical are committed to being compliant with the Controlling the
        Assault of Non-Solicited Pornography and Marketing Act (“CAN-SPAM ACT”) and the Telephone
        Consumer Protection Act (“TCPA”). You consent to receive text messages from us as set forth
        in the Section, above (“<strong>Consent to Receive Calls</strong>
        <strong>and Video Recordings</strong>”<strong>)</strong>. Emails, newsletters, and text
        messages received from us are intended to fully comply with the CAN-SPAM ACT and the TCPA.
        In the event you receive an email or text message from us which you do not believe is fully
        compliant with the CAN-SPAM ACT or the TCPA, please contact us immediately at the address
        listed below under the section “<strong>How to Contact Us</strong>.”
      </p>
      <p>
        You shall not use or permit any of your employees, agents, or affiliates to market, promote,
        or solicit Plume products or services in ways that would violate the CAN-SPAM ACT, the TCPA
        or any other laws. You shall not: (a) infringe on the rights of others; distribute chain
        letters or unsolicited bulk electronic mail (“spamming”); (b) propagate computer worms or
        viruses; (c) use a false identity; (d) attempt to gain unauthorized entry to any site or
        network; or (e) infringe copyrights, trademarks, or other intellectual property rights.
      </p>
      <p>
        You further agree to comply with U.S. export laws concerning the transmission of technical
        data and regulated materials via the Internet. You agree to indemnify and hold Plume and its
        affiliates harmless for any and all acts found or suspected to be in violation hereof. You
        shall indemnify and hold Plume and its affiliates harmless against and from losses, damages,
        costs, and reasonable attorney fees incurred in defending or resolving any suits brought
        against Plume or any of its affiliates by anyone arising out of any alleged violation of any
        anti-spamming rules, regulations, laws, statutes. Your Account will be terminated for any of
        the above infractions.
      </p>
      <h2>Disclaimer of Warranties</h2>
      <p>
        PLUME DOES NOT WARRANT THAT ACCESS TO OR USE OF THE SITE WILL BE UNINTERRUPTED OR ERROR-FREE
        OR THAT DEFECTS IN THE SITE WILL BE CORRECTED. THIS SITE, INCLUDING ANY CONTENT OR
        INFORMATION CONTAINED WITHIN IT OR ANY SITE-RELATED SERVICE, IS PROVIDED “AS IS,” WITH ALL
        FAULTS, WITH NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED,
        INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, QUALITY OF INFORMATION, QUIET ENJOYMENT, AND TITLE/NON-INFRINGEMENT.
        PLUME DOES NOT WARRANT THE ACCURACY, COMPLETENESS, OR TIMELINESS OF THE INFORMATION OBTAINED
        THROUGH THE SITE.
      </p>
      <p>
        YOU ASSUME TOTAL RESPONSIBILITY AND RISK FOR YOUR USE OF THIS SITE, SITE-RELATED SERVICES,
        AND LINKED WEBSITES. PLUME DOES NOT WARRANT THAT FILES AVAILABLE FOR DOWNLOAD WILL BE FREE
        OF VIRUSES, WORMS<strong>,</strong> TROJAN HORSES, OR OTHER DESTRUCTIVE PROGRAMMING. YOU ARE
        RESPONSIBLE FOR IMPLEMENTING PROCEDURES SUFFICIENT TO SATISFY YOUR NEEDS FOR DATA BACK UP
        AND SECURITY.
      </p>
      <p>
        WARRANTIES RELATING TO PRODUCTS OR SERVICES OFFERED, SOLD, AND DISTRIBUTED BY PLUME OR THE
        PHARMACY MAY BE SUBJECT TO SEPARATE WARRANTY TERMS AND CONDITIONS, IF ANY, PROVIDED BY PLUME
        OR THIRD PARTIES WITH OR IN CONNECTION WITH THE APPLICABLE PRODUCTS OR SERVICES. PLUME DOES
        NOT GUARANTEE THAT THROUGH USE OF OUR SERVICES ANY PRESCRIPTIONS WILL BE WRITTEN FOR YOU.
        YOU ACKNOWLEDGE AND UNDERSTAND THAT THE USE OR MISUSE OF THE PRODUCTS OBTAINED THROUGH OUR
        SITE OR FROM THE PHARMACY MAY RESULT IN UNDESIRABLE OR UNEXPECTED CONSEQUENCES. PLUME DOES
        NOT ACCEPT ANY LIABILITY FOR THE CONSEQUENCES ARISING FROM THE APPLICATION, USE, OR MISUSE
        OF ANY PRODUCTS OR SERVICES CONTAINED ON OR MADE AVAILABLE THROUGH THE SITE OR THE PHARMACY,
        INCLUDING ANY INJURY OR DAMAGE TO ANY PERSON OR PROPERTY AS A MATTER OF NEGLIGENCE, OR
        OTHERWISE, INCLUDING YOUR FAILURE TO COMPLY WITH ANY WARNING LABELS ATTACHED TO THE
        PRODUCTS.
      </p>
      <h2>Limitation of Liability Regarding Use of Site</h2>
      <p>EXCEPT AS PROVIDED BY LAW, AND WITHOUT LIMITATION:</p>
      <p>
        PLUME SHALL NOT BE LIABLE FOR THE ACTS OR OMISSIONS OF PLUME HEALTH MEDICAL, THE PHARMACY,
        OR THE PROVIDERS. PLUME AND ANY THIRD PARTIES MENTIONED ON THIS SITE ARE NEITHER RESPONSIBLE
        NOR LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY,
        PUNITIVE, OR OTHER DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, THOSE RESULTING FROM
        LOST PROFITS, LOST DATA, OR BUSINESS INTERRUPTION) ARISING OUT OF OR RELATING IN ANY WAY TO
        THE SITE, SITE-RELATED SERVICES, CONTENT OR INFORMATION CONTAINED WITHIN THE SITE, OR ANY
        LINKED WEBSITE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY AND
        WHETHER OR NOT ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. YOUR SOLE REMEDY FOR
        DISSATISFACTION WITH THE SITE, SITE-RELATED SERVICES, OR LINKED WEBSITES IS TO STOP USING
        THE SITE OR THOSE SERVICES. TO THE EXTENT ANY ASPECTS OF THE FOREGOING LIMITATIONS OF
        LIABILITY ARE NOT ENFORCEABLE, THE MAXIMUM LIABILITY OF PLUME TO YOU WITH RESPECT TO YOUR
        USE OF THIS SITE IS $500 (FIVE HUNDRED DOLLARS). YOU HEREBY AGREE TO WAIVE, TO THE FULLEST
        EXTENT PERMITTED BY LAW, ALL LAWS THAT LIMIT THE EFFICACY OF SUCH INDEMNIFICATIONS OR
        RELEASES.
      </p>
      <h2>No Third Party Rights</h2>
      <p>
        Unless expressly stated in the Terms of Use to the contrary, nothing herein is intended to
        confer any rights or remedies on any persons other than you, Plume, Plume Health Medical,
        and their affiliates. Nothing in the Terms of Use is intended to relieve or discharge the
        obligation or liability of any third persons to you, Plume, Plume Health Medical, and its
        affiliates, nor shall any provision give any third parties any right of subrogation or
        action over against you, Plume, Plume Health Medical, the Pharmacy and its affiliates.
      </p>
      <h2>Assignment</h2>
      <p>
        You may not assign, transfer, or delegate the Terms of Use or any part thereof without
        Plume’s prior written consent. Plume may freely transfer, assign, or delegate all or any
        part of the Terms of Use, and any rights or duties hereunder or thereunder. The Terms of Use
        will be binding upon and inure to the benefit of the heirs, successors, and permitted
        assignees of the parties.
      </p>
      <h2>Supplemental Terms Applicable to Providers</h2>
      <p>
        These supplemental terms apply to Providers in addition to the other provisions of these
        Terms of Use. In the event of a conflict between the supplemental terms and any other terms
        herein, the supplemental terms shall prevail.
      </p>
      <p>
        To be a healthcare provider using the Site (for purposes of this Section, “Provider” or
        “you”) you must be a licensed physician, nurse practitioner, physician assistant, or
        healthcare professional contracted or employed by Plume Health Medical, and must agree to
        comply with all laws, medical board rules, and other rules and regulations applicable to you
        as a Provider or otherwise. Your relationship with the Plume users (including, but not
        limited to, your Plume Health Medical patients) is directly between you and the patient. The
        patient will never have a physician-patient relationship with Plume. Plume does not practice
        medicine and offers no medical services. As set forth more fully below, Provider is solely
        responsible for all agreements, consents, notices, and other interactions with patients and
        other consumers. Without limiting the generality of the foregoing, Provider and Plume Health
        Medical is solely responsible for all billings and collections from patients and other
        consumers, and Plume shall have no liability whatsoever to Provider with respect to any
        amounts owed by any patient or other consumer to Provider.
      </p>
      <p>
        Plume does not provide any medical advice, legal advice, or representations in any way
        regarding any legal or medical issues associated with Provider, goods, or services offered
        by Provider, including but not limited to any compliance obligations or steps necessary to
        comply with any state or federal laws and regulations. Provider should seek legal counsel
        regarding any legal and compliance issues, and should not rely on any materials or content
        associated with the Services in determining Provider’s compliance obligations under law.
        Provider and Plume agree that Plume is not providing to customers, patients, or anyone else,
        medical advice or legal advice. THE PLUME SITE AND THE SERVICES ARE NOT MEANT TO SUBSTITUTE
        OR MODIFY YOUR PROFESSIONAL JUDGMENT IN ANY WAY.
      </p>
      <p>
        Provider will use the Site and Services only in accordance with applicable standards of good
        medical practice. While software products such as the Site and Services can facilitate and
        improve the quality of service that Provider can offer patients, many factors, including but
        not limited to the provider/patient relationship can affect a patient outcome, and with
        intricate and interdependent technologies and complex decision-making it is often difficult
        or impossible to accurately determine what the factors were and in what proportion they
        affected an outcome. Provider shall be solely responsible for its use of the Site and
        Services, and the provision of medical services to Provider’s patients. In this regard,
        Provider releases Plume and waives any and all potential claims against Plume as a result of
        Provider’s use of the Site and Services, and the provision of services to Provider’s
        patients.
      </p>
      <p>
        As a result of the complexities and uncertainties inherent in the patient care process,
        Provider agrees to defend, indemnify and hold Plume harmless from any claim by or on behalf
        of any patient of Provider, or by or on behalf of any other third party or person claiming
        damage by virtue of a familial or financial relationship with such a patient, which is
        brought against Plume, regardless of the cause if such claim arises for any reason
        whatsoever, out of Provider’s use or operation of the Site and Services. To the extent
        applicable, Provider will obtain Plume’s prior written consent to any settlement or judgment
        in which Provider agrees to any finding of fault of Plume or defect in the Site or Services.
        Plume will promptly notify Provider in writing of any claim subject to this indemnification,
        promptly provide Provider with the information reasonably required for the defense of the
        same, and grant to Provider exclusive control over its defense and settlement.
      </p>
      <p>
        If you submit, upload, transmit, or post any consents, notices, advice, recommendations,
        comments, files, videos, images, or other materials to us or our Site (“Provider Content”)
        or provide any Provider Content to patients or other consumers, you agree not to provide any
        Provider Content that (a) is defamatory, abusive, libelous, unlawful, obscene, threatening,
        harassing, fraudulent, pornographic, or harmful, or that could encourage criminal or
        unethical behavior, (b) violates or infringes the privacy, copyright, trademark, trade
        dress, trade secrets, or intellectual property rights of any person or entity, or (c)
        contains or transmits a virus or any other harmful component. Provider is solely responsible
        for obtaining all necessary agreements and consents from, and providing all required notices
        to, patients and other consumers. You agree not to contact other users through unsolicited
        e-mail, telephone calls, mailings, or any other method of communication. You represent and
        warrant to Plume that you have the legal right and authorization to upload all Provider
        Content at the Site. Plume shall have a royalty-free, irrevocable, transferable right and
        license to use the Provider Content however Plume desires, including without limitation, to
        copy, modify, delete in its entirety, adapt, publish, translate, create derivative works
        from or sell or distribute such Provider Content or incorporate such Provider Content into
        any form, medium, or technology throughout the world. Plume is and shall be under no
        obligation: (i) to maintain any Provider Content in confidence; (ii) to pay to you any
        compensation for any Provider Content; or (iii) to respond to any Provider Content.
      </p>
      <p>
        Plume does not regularly review Provider Content, but does reserve the right (but not the
        obligation) to monitor and edit or remove any Provider Content submitted to the Site. You
        grant Plume the right to use the name that you submit in connection with any Provider
        Content. You agree not to use a false email address, impersonate any person or entity, or
        otherwise mislead as to the origin of any Provider Content. You are and shall remain solely
        responsible for the content of any Provider Content you post to the Site or provide to
        patients or other consumers. Plume and its affiliates take no responsibility and assume no
        liability for any Provider Content submitted by you or any third party.
      </p>
      <h2>Dispute Resolution; Arbitration Agreement</h2>
      <p>
        We will try to work in good faith to resolve any issue you have with the Site, including
        without limitation, Products and Services ordered or purchased through the Site, if you
        bring that issue to the attention of our customer service department. However, we realize
        that there may be rare cases where we may not be able to resolve an issue to a customer’s
        satisfaction.
      </p>
      <p>
        You and Plume agree that any dispute, claim, or controversy arising out of or relating in
        any way to these Terms of Use or your use of the Site, including without limitation,
        Products and Services ordered or purchased through the Site, shall be determined by binding
        arbitration instead of in courts of general jurisdiction. Arbitration is more informal than
        bringing a lawsuit in court. Arbitration uses a neutral arbitrator instead of a judge or
        jury, and is subject to very limited review by courts. Arbitration allows for more limited
        discovery than in court, however, we agree to cooperate with each other to agree to
        reasonable discovery in light of the issues involved and amount of the claim. Arbitrators
        can award the same damages and relief that a court can award, but in so doing, the
        arbitrator shall apply substantive law regarding damages as if the matter had been brought
        in court, including without limitation, the law on punitive damages as applied by the United
        States Supreme Court. You agree that, by agreeing to these Terms of Use, the U.S. Federal
        Arbitration Act governs the interpretation and enforcement of this provision, and that you
        and Plume are each waiving the right to a trial by jury or to participate in a class action.
        This arbitration provision shall survive termination of these Terms of Use and any other
        contractual relationship between you and Plume.
      </p>
      <p>
        If you desire to assert a claim against Plume, and you therefore elect to seek arbitration,
        you must first send to Plume, by certified mail, a written notice of your claim (“Notice”).
        The Notice to Plume should be addressed to: Plume, Inc., Attn: Legal, 303 S. Broadway,
        #200-357, Denver, CO 80209 (“Notice Address”). If Plume desires to assert a claim against
        you and therefore elects to seek arbitration, it will send, by certified mail, a written
        Notice to the most recent address we have on file or otherwise in our records for you. A
        Notice, whether sent by you or by Plume, must (a) describe the nature and basis of the claim
        or dispute, and (b) set forth the specific relief sought (“Demand”). If Plume and you do not
        reach an agreement to resolve the claim within 30 days after the Notice is received, you or
        Plume may commence an arbitration proceeding or file a claim in small claims court. During
        the arbitration, the amount of any settlement offer made by Plume or you shall not be
        disclosed to the arbitrator. You may download or copy a form Notice and a form to initiate
        arbitration from the American Arbitration Association at www.adr.org. If you are required to
        pay a filing fee, after Plume receives notice at the Notice Address that you have commenced
        arbitration, it will promptly reimburse you for your payment of the filing fee, unless your
        claim is for more than US $2,000.
      </p>
      <p>
        The arbitration will be governed by the Commercial Arbitration Rules and the Supplementary
        Procedures for Consumer Related Disputes (collectively, “AAA Rules”) of the American
        Arbitration Association (“AAA”), as modified by these Terms of Use, and will be administered
        by the AAA. The AAA Rules and Forms are available online at www.adr.org, by calling the AAA
        at 1-800-778-7879, or by requesting them from us by writing to us at the Notice Address. The
        arbitrator is bound by the terms of these Terms of Use. All issues are for the arbitrator to
        decide, including, but not limited to, issues relating to the scope and enforceability of
        these Terms of Use, including, but not limited to, this arbitration agreement. Unless Plume
        and you agree otherwise, any arbitration hearings will take place in Denver, CO. (If you
        reside outside of the United States, any arbitration hearings will take place in your
        country of residence at a location reasonably convenient to you, but will remain subject to
        the AAA Rules including, but not limited to, the AAA rules regarding the selection of an
        arbitrator). If your claim is for US $10,000 or less, we agree that you may choose whether
        the arbitration will be conducted solely on the basis of documents submitted to the
        arbitrator, through a telephonic hearing, or by an in-person hearing as established by the
        AAA Rules. If your claim exceeds US $10,000, the right to a hearing will be determined by
        the AAA Rules. Regardless of the manner in which the arbitration is conducted, the
        arbitrator shall issue a reasoned written decision sufficient to explain the essential
        findings and conclusions on which the award is based. If the arbitrator issues you an award
        that is greater than the value of Plume’s last written settlement offer made before an
        arbitrator was selected (or if Plume did not make a settlement offer before an arbitrator
        was selected), then Plume will pay you the amount of the award or US $1,000, whichever is
        greater. Except as expressly set forth herein, the payment of all filing, administration,
        and arbitrator fees will be governed by the AAA Rules. Each party shall pay for its own
        costs and attorneys’ fees, if any. However, if any party prevails on a statutory claim that
        affords the prevailing party attorneys’ fees, or if there is a written agreement providing
        for payment or recovery attorneys’ fees, the arbitrator may award reasonable fees to the
        prevailing party, under the standards for fee shifting provided by law.
      </p>
      <p>
        YOU AND PLUME AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS
        INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
        REPRESENTATIVE PROCEEDING. Further, unless both you and Plume agree otherwise, the
        arbitrator may not consolidate more than one person’s claims with your claims, and may not
        otherwise preside over any form of a representative or class proceeding. The arbitrator may
        award declaratory or injunctive relief only in favor of the individual party seeking relief
        and only to the extent necessary to provide relief warranted by that party’s individual
        claim.
      </p>
      <p>
        If the arbitration terms and conditions of this Section are found to be unenforceable, then
        (i) the entirety of this arbitration provision shall be null and void, but the remaining
        provisions of these Terms of Use shall remain in full force and effect, and (ii) exclusive
        jurisdiction and venue for any claims will be in state or federal courts located in and for
        Denver, CO.
      </p>
      <h2>Force Majeure</h2>
      <p>
        We will not be deemed to be in breach of these terms or liable for any breach of these terms
        or our privacy policy due to any event or occurrence beyond our reasonable control,
        including without limitation, acts of God, terrorism, war, invasion, failures of any public
        networks, electrical shortages, earthquakes or floods, civil disorder, strikes, fire, or
        other disaster.
      </p>
      <h2>Indemnification</h2>
      <p>
        You agree to defend, indemnify, and hold harmless Plume, Plume Health Medical, and any
        affiliates from and against any and all rights, demands, losses, liabilities, damages,
        claims, causes of action, actions, and suits (no matter whether at law or equity), fees,
        costs, and attorney’s fees of any kind whatsoever arising directly or indirectly out of or
        in connection with: (i) your use or misuse of the Site, Products, Services or any
        information posted on the Site; (ii) your breach of the Terms of Use or Privacy Policy;
        (iii) the content or subject matter of any information you provide to Plume, Plume Health
        Medical, the Pharmacy, or any Provider or customer service agent; or (iv) any negligent or
        wrongful act or omission by you in your use or misuse of the Site, Products, Services, or
        any information on the Site, including without limitation, infringement of third party
        intellectual property rights, privacy rights, or negligent or wrongful conduct.
      </p>
      <h2>Revisions; General</h2>
      <p>
        Plume reserves the right, in its sole discretion, to terminate your access to all or part of
        this Site, with or without cause, and with or without notice. Plume reserves the right to
        modify these Terms of Use at any time, effective upon posting. Any use of this Site after
        such changes will be deemed an acceptance of those changes. You agree to review the Terms of
        Use each time you access this Site so that you may be aware of any changes to these Terms.
        In the event that any of the Terms of Use are held by a court or other tribunal of competent
        jurisdiction to be unenforceable, such provisions shall be limited or eliminated to the
        minimum extent necessary so that these Terms of Use shall otherwise remain in full force and
        effect. These Terms of Use constitute the entire agreement between Plume and you pertaining
        to the subject matter hereof. In its sole discretion, Plume may from time-to-time revise
        these Terms of Use by updating this posting. You should, therefore, periodically visit this
        page to review the current Terms of Use, so you are aware of any such revisions to which you
        are bound. Certain provisions of these Terms of Use may be superseded by expressly
        designated legal notices or terms located on particular pages within this Site. For purposes
        of these Terms of Use, (a) the words “include,” “includes,” and “including” are deemed to be
        followed by the words “without limitation”; (b) the word “or” is not exclusive; and (c) the
        words “herein,” “hereof,” “hereby,” “hereto,” and “hereunder” refer to these Terms of Use as
        a whole
      </p>
      <p>
        <strong>Copyright/Trademark Information</strong>.
      </p>
      <p>
        Copyright/Trademark Information. Copyright ©2020 Plume, Inc. All rights reserved. All
        trademarks, logos, and service marks (“Marks”) displayed on the Site are our property or the
        property of other third parties. You are not permitted to use these Marks without our prior
        written consent or the consent of such third party which may own the Marks.
      </p>
      <h2>How to Contact Us:</h2>
      <address>
        <p>Plume, Inc.</p>
        <p>
          303 S. Broadway
          <br />
          #200-357
          <br />
          Denver, CO 80209
        </p>
        <p>
          Telephone: <a href="tel:+18337980736">(833)-798-0736</a>
        </p>
        <p>
          Email: <a href="mailto:help@getplume.co">help@getplume.co</a>
        </p>
      </address>
    </>
  );
}
