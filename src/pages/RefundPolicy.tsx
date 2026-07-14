const RefundPolicy = () => {
  return (
    <div className="bg-white pt-24 sm:pt-28">
      {/* Page header */}
      <section className="bg-stone-50 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-slate-500 text-sm">
            Inner Peace Holidays Private Limited &mdash; Last Updated: 14 July 2026
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-slate prose-headings:font-bold prose-h2:text-xl prose-h3:text-lg prose-a:text-blue-700 max-w-none">

          <p>
            This Policy is divided into two sections corresponding to our two business verticals. Please read
            the section relevant to your purchase carefully before booking/subscribing.
          </p>

          <hr />

          {/* ── Section A ── */}
          <h2>Section A: Tours &amp; Travel Bookings</h2>

          <h3>A.1 Cancellation by Customer</h3>
          <p>
            Cancellation charges (as a percentage of total package/booking cost) are as follows,{' '}
            <strong>in addition to non-refundable third-party charges</strong> (airline, hotel, or vendor
            cancellation fees, which follow their own individual policies):
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border border-slate-200 text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">
                    Cancellation Timing (before departure/service date)
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">
                    Cancellation Charge
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['30 days or more', '10% – 25% of package cost'],
                  ['15 – 29 days', '25% – 50% of package cost'],
                  ['7 – 14 days', '50% – 75% of package cost'],
                  ['Less than 7 days / No-show', '100% (No refund)'],
                ].map(([timing, charge]) => (
                  <tr key={timing} className="even:bg-stone-50">
                    <td className="px-4 py-3 text-slate-600">{timing}</td>
                    <td className="px-4 py-3 font-medium text-slate-800">{charge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-sm italic">
            Exact slabs may vary by package and will be specified at the time of booking confirmation.
          </p>

          <h3>A.2 Non-Refundable Components</h3>
          <ul>
            <li>
              Visa fees, travel insurance premiums, and service/convenience fees are{' '}
              <strong>non-refundable</strong> once processed, regardless of trip cancellation.
            </li>
            <li>
              Flight tickets, once issued, are subject to the airline&apos;s own fare rules &mdash; many are
              non-refundable or carry heavy rescheduling fees.
            </li>
          </ul>

          <h3>A.3 Cancellation by the Company</h3>
          <p>
            If the Company cancels a confirmed booking due to unavailability, force majeure, or operational
            reasons, customers will receive a full refund of amounts paid to the Company (excluding any
            third-party charges already incurred and non-recoverable) or the option to reschedule.
          </p>

          <h3>A.4 Amendments / Date Changes</h3>
          <p>
            Date or itinerary changes requested by the customer are treated as per applicable vendor policy
            and may attract rescheduling fees in addition to any fare difference.
          </p>

          <h3>A.5 Force Majeure</h3>
          <p>
            No refund shall be provided for inability to travel due to natural disasters, pandemics,
            government travel bans, political unrest, or similar events beyond the Company&apos;s control,
            though we will make reasonable efforts to help you rebook or claim through applicable travel
            insurance.
          </p>

          <h3>A.6 Refund Processing Time</h3>
          <p>
            Approved refunds will be processed within <strong>7–14 business days</strong> to the original
            mode of payment, subject to bank/payment gateway processing timelines.
          </p>

          <h3>A.7 Visa Rejection</h3>
          <p>
            In case of visa rejection, only the package cost minus visa processing fees, service charges, and
            any non-recoverable vendor costs already incurred will be refunded, subject to the cancellation
            slabs in A.1.
          </p>

          <hr />

          {/* ── Section B ── */}
          <h2>Section B: Software Services</h2>

          <h3>B.1 No Refund Policy</h3>
          <p>
            All payments made for Software Services (including but not limited to subscription fees, license
            fees, setup/onboarding charges, and custom development charges) are{' '}
            <strong>final and non-refundable</strong>, once the service has been activated/delivered, in line
            with standard industry practice.
          </p>

          <h3>B.2 Exceptions</h3>
          <p>
            Refunds may be considered <strong>solely</strong> at the Company&apos;s discretion in the
            following limited circumstances:
          </p>
          <ul>
            <li>
              <strong>Duplicate payment</strong> or a verified technical/billing error on our part
            </li>
            <li>
              <strong>Non-delivery</strong> of a paid service due to a proven fault entirely attributable to
              the Company
            </li>
            <li>As otherwise required by applicable Indian consumer protection law</li>
          </ul>
          <p>
            Refund requests under this clause must be raised in writing within <strong>7 days</strong> of the
            transaction, with supporting evidence, at{' '}
            <a href="mailto:billing@innerpeaceholidays.com">billing@innerpeaceholidays.com</a>.
          </p>

          <h3>B.3 Free Trials</h3>
          <p>
            If a free trial period is offered, no charges will apply during the trial. Once you upgrade to a
            paid plan, standard no-refund terms apply from the date of first billing.
          </p>

          <h3>B.4 Subscription Cancellation</h3>
          <p>
            You may cancel your subscription at any time to stop future billing. Cancellation does{' '}
            <strong>not</strong> entitle you to a refund for the current or prior billing cycle(s); you will
            retain access until the end of the paid term.
          </p>

          <h3>B.5 Service Credits (if applicable)</h3>
          <p>
            If a Service Level Agreement (SLA) is offered for enterprise/custom software engagements, any
            downtime credits will be governed by the specific SLA terms agreed in the individual client
            contract, not by this general policy.
          </p>

          <hr />

          <h2>How to Request a Cancellation / Refund</h2>
          <p>
            Email{' '}
            <a href="mailto:support@innerpeaceholidays.com">support@innerpeaceholidays.com</a> or call{' '}
            <a href="tel:+919934611463">+91-99346-11463</a> with your booking/invoice ID. Our team will
            respond within 24–48 hours.
          </p>
          <p>
            For unresolved grievances, contact our Grievance Officer: Piyush Ranjan,{' '}
            <a href="mailto:grievance@innerpeaceholidays.com">grievance@innerpeaceholidays.com</a>, as per
            our Terms and Conditions.
          </p>

          <p className="text-slate-500 text-sm italic">
            This Policy is subject to Company discretion in genuine exceptional cases and does not override
            statutory consumer protection rights available to you under Indian law.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
