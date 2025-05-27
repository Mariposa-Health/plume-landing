import type { Metadata } from 'next';
import Section from '@/components/common/Section';
import Wrapper from '@/components/common/Wrapper';

export const metadata: Metadata = {
  title: 'Plume Health - Notice of Privacy Practices',
  description:
    'Notice of Privacy Practices EFFECTIVE DATE: 08/25/2020 THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY. UNDERSTANDING YOUR HEALTH RECORD/INFORMATION Each time you visit a hospital, physician, dentist, or other healthcare provider, a record of your visit is […]',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicy() {
  return (
    <Section type="secondary" className="flex-1">
      <Wrapper className="text-block">
        <h1>Notice of Privacy Practices</h1>
        <p>
          <strong>EFFECTIVE DATE:</strong> 08/25/2020
        </p>
        <p>
          THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW
          YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.
        </p>
        <p>
          <strong>UNDERSTANDING YOUR HEALTH RECORD/INFORMATION</strong>
        </p>
        <p>
          Each time you visit a hospital, physician, dentist, or other healthcare provider, a record
          of your visit is made. Typically, this record contains your symptoms, examination and test
          results, diagnoses, treatment, and a plan for future care or treatment. This information
          often referred to as your health or medical record, serves as a basis for planning your
          care and treatment and serves as a means of communication among the many health
          professionals who contribute to your care. Understanding what is in your record and how
          your health information is used helps you to ensure its accuracy, better understand who,
          what, when, where, and why others may access your health information, and helps you make
          more informed decisions when authorizing disclosure to others.
        </p>
        <p>
          <strong>YOUR HEALTH INFORMATION RIGHTS</strong>
        </p>
        <p>
          Unless otherwise required by law, your health record is the physical property of the
          healthcare practitioner or facility that compiled it. However, you have certain rights
          with respect to the information. You have the right to:
        </p>
        <ol>
          <li>
            Receive a copy of this Notice of Privacy Practices from us upon enrolment or upon
            request.
          </li>
          <li>
            Request restrictions on our uses and disclosures of your protected health information
            for treatment, payment and health care operations. This includes your right to request
            that we not disclose your health information to a health plan for payment or health care
            operations if you have paid in full and out of pocket for the services provided. We
            reserve the right not to agree to a given requested restriction.
          </li>
          <li>Request to receive communications of protected health information in confidence.</li>
          <li>
            Inspect and obtain a copy of the protected health information contained in your medical
            and billing records and in any other Practice records used by us to make decisions about
            you. If we maintain or use electronic health records, you will also have the right to
            obtain a copy or forward a copy of your electronic health record to a third party. A
            reasonable copying/labor charge may apply.
          </li>
          <li>
            Request an amendment to your protected health information. However, we may deny your
            request for an amendment, if we determine that the protected health information or
            record that is the subject of the request: – was not created by us, unless you provide a
            reasonable basis to believe that the originator of the protected health information is
            no longer available to act on the requested amendment;
            <br />
            – is not part of your medical or billing records;
            <br />
            – is not available for inspection as set forth above; or
            <br />– is accurate and complete.
          </li>
        </ol>
        <p>
          In any event, any agreed upon amendment will be included as an addition to, and not a
          replacement of, already existing records.
        </p>
        <ol start={6}>
          <li>
            Receive an accounting of disclosures of protected health information made by us to
            individuals or entities other than to you, except for disclosures:
            <br />
            – to carry out treatment, payment and health care operations as provided above;
            <br />
            – to persons involved in your care or for other notification purposes as provided by
            law;
            <br />
            – to correctional institutions or law enforcement officials as provided by law;
            <br />
            – for national security or intelligence purposes;
            <br />
            – that occurred prior to the date of compliance with privacy standards (April 14, 2003);
            <br />
            – incidental to other permissible uses or disclosures;
            <br />
            – that are part of a limited data set (does not contain protected health information
            that directly identifies individuals);
            <br />
            – made to patient or their personal representatives;
            <br />
            -for which a written authorization form from the patient has been received
          </li>
        </ol>
        <ol start={7}>
          <li>
            Revoke your authorization to use or disclose health information except to the extent
            that we have already been taken action in reliance on your authorization, or if the
            authorization was obtained as a condition of obtaining insurance coverage and other
            applicable law provides the insurer that obtained the authorization with the right to
            contest a claim under the policy.
          </li>
          <li>Receive notification if affected by a breach of unsecured PHI</li>
        </ol>
        <p>
          <strong>HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED</strong>
        </p>
        <p>
          This organization may use and/or disclose your medical information for the following
          purposes:
        </p>
        <p>
          <span>
            Treatment: We may use and disclose protected health information in the provision,
            coordination, or management of your health care, including consultations between health
            care providers regarding your care and referrals for health care from one health care
            provider to another.
          </span>
        </p>
        <p>
          Payment: We may use and disclose protected health information to obtain reimbursement for
          the health care provided to you, including determinations of eligibility and coverage and
          other utilization review activities.
        </p>
        <p>
          Regular Healthcare Operations: We may use and disclose protected health information to
          support functions of our practice related to treatment and payment, such as quality
          assurance activities, case management, receiving and responding to patient complaints,
          physician reviews, compliance programs, audits, business planning, development, management
          and administrative activities.
        </p>
        <p>
          Appointment Reminders: We may use and disclose protected health information to contact you
          to provide appointment reminders.
        </p>
        <p>
          Treatment Alternatives: We may use and disclose protected health information to tell you
          about or recommend possible treatment alternatives or other health related benefits and
          services that may be of interest to you.
        </p>
        <p>
          Health-Related Benefits and Services: We may use and disclose protected health information
          to tell you about health-related benefits, services, or medical education classes that may
          be of interest to you.
        </p>
        <p>
          Individuals Involved in Your Care or Payment for Your Care: Unless you object, we may
          disclose your protected health information to your family or friends or any other
          individual identified by you when they are involved in your care or the payment for your
          care. We will only disclose the protected health information directly relevant to their
          involvement in your care or payment. We may also disclose your protected health
          information to notify a person responsible for your care (or to identify such person) of
          your location, general condition or death.
        </p>
        <p>
          Business Associates: There may be some services provided in our organization through
          contracts with Business Associates. Examples include physician services in the emergency
          department and radiology, certain laboratory tests, and a copy service we use when making
          copies of your health record. When these services are contracted, we may disclose some or
          all of your health information to our Business Associate so that they can perform the job
          we have asked them to do. To protect your health information, however, we require the
          Business Associate to appropriately safeguard your information.
        </p>
        <p>
          Organ and Tissue Donation: If you are an organ donor, we may release medical information
          to organizations that handle organ procurement or organ, eye or tissue transplantation or
          to an organ donation bank, as necessary to facilitate organ or tissue donation and
          transplantation.
        </p>
        <p>
          Worker’s Compensation: We may release protected health information about you for programs
          that provide benefits for work related injuries or illness.
        </p>
        <p>
          Communicable Diseases: We may disclose protected health information to notify a person who
          may have been exposed to a disease or may be at risk for contracting or spreading a
          disease or condition.
        </p>
        <p>
          Health Oversight Activities: We may disclose protected health information to federal or
          state agencies that oversee our activities.
        </p>
        <p>
          Law Enforcement: We may disclose protected health information as required by law or in
          response to a valid judge ordered subpoena. For example in cases of victims of abuse or
          domestic violence; to identify or locate a suspect, fugitive, material witness, or missing
          person; related to judicial or administrative proceedings; or related to other law
          enforcement purposes.
        </p>
        <p>
          Military and Veterans: If you are a member of the armed forces, we may release protected
          health information about you as required by military command authorities.
        </p>
        <p>
          Lawsuits and Disputes: We may disclose protected health information about you in response
          to a court or administrative order. We may also disclose medical information about you in
          response to a subpoena, discovery request, or other lawful process.
        </p>
        <p>
          Inmates: If you are an inmate of a correctional institution or under the custody of a law
          enforcement official, we may release protected health information about you to the
          correctional institution or law enforcement official. An inmate does not have the right to
          the Notice of Privacy Practices.
        </p>
        <p>
          Abuse or Neglect: We may disclose protected health information to notify the appropriate
          government authority if we believe a patient has been the victim of abuse, neglect or
          domestic violence. We will only make this disclosure if you agree or when required or
          authorized by law.
        </p>
        <p>
          Fund raising: Unless you notify us you object, we may contact you as part of a fund
          raising effort for our practice. You may opt out of receiving fund raising materials by
          notifying the practice’s privacy officer at any time at the telephone number or the
          address at the end of this document. This will also be documented and described in any
          fund raising material you receive.
        </p>
        <p>
          Coroners, Medical Examiners, and Funeral Directors: We may release protected health
          information to a coroner or medical examiner. This may be necessary to identify a deceased
          person or determine the cause of death. We may also release protected health information
          about patients to funeral directors as necessary to carry out their duties.
        </p>
        <p>
          Public Health Risks: We may disclose your protected health information for public health
          activities and purposes to a public health authority that is permitted by law to collect
          or receive the information. The disclosure will be made for the purpose such as
          controlling disease, injury or disability.
        </p>
        <p>
          Serious Threats: As permitted by applicable law and standards of ethical conduct, we may
          use and disclose protected health information if we, in good faith, believe that the use
          or disclosure is necessary to prevent or lessen a serious and imminent threat to the
          health or safety of a person or the public.
        </p>
        <p>
          Food and Drug Administration (FDA): As required by law, we may disclose to the FDA health
          information relative to adverse events with respect to food, supplements, product and
          product defects, or post marketing surveillance information to enable product recalls,
          repairs, or replacement.
        </p>
        <p>
          Research (inpatient): We may disclose information to researchers when an institutional
          review board that has reviewed the research proposal and established protocols to ensure
          the privacy of your health information has approved their research.
        </p>
        <p>
          <strong>OUR RESPONSIBILITIES</strong>
        </p>
        <p>
          We are required to maintain the privacy of your health information. In addition, we are
          required to provide you with a notice of our legal duties and privacy practices with
          respect to information we collect and maintain about you. We must abide by the terms of
          this notice. We reserve the right to change our practices and to make the new provisions
          effective for all the protected health information we maintain. If our information
          practices change, a revised notice will be mailed to the address you have supplied upon
          request. If we maintain a Web site that provides information about our patient/customer
          services or benefits, the new notice will be posted on that Web site.
        </p>
        <p>
          Your health information will not be used or disclosed without your written authorization,
          except as described in this notice. The following uses and disclosures will be made only
          with explicit authorization from you: (i) uses and disclosures of your health information
          for marketing purposes, including subsidized treatment communications; (ii) disclosures
          that constitute a sale of your health information; and (iii) other uses and disclosures
          not described in the notice. Except as noted above, you may revoke your authorization in
          writing at any time.
        </p>
        <p>
          <strong>FOR MORE INFORMATION OR TO REPORT A PROBLEM</strong>
        </p>
        <p>
          If you have questions about this notice or would like additional information, you may
          contact our Privacy Officer at the telephone or address below. If you believe that your
          privacy rights have been violated, you have the right to file a complaint with the Privacy
          Officer at Plume or with the Secretary of the Department of Health and Human Services. The
          complaint must be in writing, describe the acts or omissions that you believe violate your
          privacy rights, and be filed within 180 days of when you knew or should have known that
          the act or omission occurred. We will take no retaliatory action against you if you make
          such complaints.
        </p>
        <p>The contact information for both is included below.</p>
        <p>
          <strong>U.S. Department of Health and Human Services</strong>
          <br />
          Office of the Secretary
          <br />
          200 Independence Avenue, S.W.
          <br />
          Washington, D.C. 20201
          <br />
          Tel: <a href="tel:+12026190257">(202) 619-0257</a>
          <br />
          Toll Free: <a href="tel:+18776966775">1-877-696-6775</a>
          <br />
          <a href="https://www.hhs.gov/contacts" target="_blank" rel="noopener noreferrer">
            http://www.hhs.gov/contacts
          </a>
        </p>
        <address>
          <strong>Plume</strong>
          <br />
          Privacy Officer
          <br />
          303 South Broadway Denver, CO, 80209
          <br />
          <a href="tel:+18337980736">(833)-798-0736</a>
          <br />
          <a href="mailto:help@getplume.co">help@getplume.co</a>
        </address>
        <p>
          <strong>NOTICE OF PRIVACY PRACTICES AVAILABILITY</strong>
        </p>
        <p>
          This notice will be prominently posted in the office where registration occurs. You will
          be provided a hard copy, at the time we first deliver services to you. Thereafter, you may
          obtain a copy upon request, and the notice will be maintained on the organization’s Web
          site (if applicable Web site exists) for downloading.
        </p>
      </Wrapper>
    </Section>
  );
}
