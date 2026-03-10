const RefundPolicy = () => {
  return (
    <main className="section-padding pt-24 pb-24">
      <div className="container-tight max-w-3xl">
        <h1 className="text-4xl font-black mb-2">Refund & Cancellation Policy</h1>
        <p className="text-sm text-muted-foreground mb-2">Last Updated: March 07, 2026</p>
        <p className="text-sm text-muted-foreground mb-4">
          This Refund and Cancellation Policy explains the conditions under which orders placed through the Zordr platform may be cancelled, and refunds may be issued.
        </p>
        <p className="text-sm text-muted-foreground mb-12">
          Zordr is operated by:<br />
          ZORDR FOOD PRIVATE LIMITED<br />
          Flat 101, Diamond Hills<br />
          Shaikpet, Hyderabad<br />
          Telangana, India
        </p>
        <p className="text-muted-foreground leading-relaxed mb-10">
          By placing an order through the Zordr platform, users agree to the terms outlined in this policy.
        </p>

        <div className="space-y-10 text-foreground">

          <section className="space-y-3">
            <h2 className="text-xl font-bold">1. Order Cancellation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Users may cancel an order only before the vendor begins preparing the order. Once the vendor starts preparing the order, cancellation may no longer be possible.
            </p>
            <p className="text-muted-foreground leading-relaxed">The platform may display order status such as:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              <li>Order Placed</li>
              <li>Accepted by Vendor</li>
              <li>Preparing</li>
              <li>Ready for Pickup</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Cancellation is permitted only before the order reaches the "Preparing" stage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">2. Vendor Initiated Cancellations</h2>
            <p className="text-muted-foreground leading-relaxed">
              A vendor may cancel an order under certain circumstances, including:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              <li>Item unavailable</li>
              <li>Vendor capacity limitations</li>
              <li>Operational constraints</li>
              <li>Technical issues</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              If a vendor cancels an order after payment has been successfully completed, the user will be eligible for a full refund.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">3. Platform-Initiated Cancellations</h2>
            <p className="text-muted-foreground leading-relaxed">
              In rare situations, Zordr may cancel an order due to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              <li>Technical system errors</li>
              <li>Payment processing failures</li>
              <li>Suspected fraudulent activity</li>
              <li>Platform malfunction</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              If such cancellation occurs after payment has been processed, the user will receive a full refund.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">4. Refund Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">Refunds may be issued under the following circumstances:</p>
            <p className="text-sm font-semibold text-foreground mt-2">Eligible cases include:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              <li>Order cancelled before vendor preparation</li>
              <li>Vendor unable to fulfill the order</li>
              <li>Payment processed but order not confirmed</li>
              <li>Duplicate payment</li>
              <li>Technical platform errors</li>
            </ul>
            <p className="text-sm font-semibold text-foreground mt-4">Refunds may not be issued in the following cases:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              <li>The order has already entered the Preparing stage</li>
              <li>The order has been prepared by the vendor</li>
              <li>The user fails to collect the order after it is ready</li>
              <li>Incorrect item selection by the user during ordering</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">5. Food Quality Concerns</h2>
            <p className="text-muted-foreground leading-relaxed">
              Food preparation and quality are the responsibility of the vendor operating within the institution. If a user experiences an issue related to food quality:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              <li>The issue should be reported through Zordr support</li>
              <li>Zordr may investigate the matter with the vendor</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Refunds for food quality concerns may be issued on a case-by-case basis, depending on the circumstances.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">6. Platform Fees</h2>
            <p className="text-muted-foreground leading-relaxed">
              If Zordr charges any platform convenience fees or service charges, such fees may be non-refundable once the order is confirmed, unless the order is cancelled due to vendor or platform failure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">7. Failed or Pending Payments</h2>
            <p className="text-muted-foreground leading-relaxed">
              If a payment is deducted but the order is not confirmed due to a technical issue, the amount is typically automatically reversed by the payment gateway. If the refund is not received within 1 business day, users may contact Zordr support.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">8. Refund Processing Time</h2>
            <p className="text-muted-foreground leading-relaxed">
              Refunds are processed through the original payment method used during the order. Typical processing timelines:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              <li>UPI payments: 1–3 business days</li>
              <li>Debit/Credit card payments: 5–7 business days</li>
              <li>Wallet refunds (if applicable): within 24 hours</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Actual timelines may vary depending on the payment provider.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">9. Abuse of Refund Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Zordr reserves the right to deny refunds or suspend user accounts in cases of:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              <li>Repeated refund abuse</li>
              <li>Fraudulent complaints</li>
              <li>Misuse of the platform</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Users found abusing the refund system may have their accounts restricted or permanently suspended.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold">10. Contact for Refund Queries</h2>
            <p className="text-muted-foreground leading-relaxed">
              For refund or cancellation issues, users may contact:
            </p>
            <div className="text-muted-foreground text-sm leading-relaxed">
              <p className="font-semibold text-foreground">ZORDR FOOD PRIVATE LIMITED</p>
              <p className="mt-2">Email: <a href="mailto:admin@zordr.in" className="text-primary hover:underline">admin@zordr.in</a></p>
              <p>Phone: 98495 73492</p>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-2">Please include the following details when contacting support:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              <li>Order ID</li>
              <li>Date of order</li>
              <li>Description of the issue</li>
            </ul>
          </section>

        </div>
      </div>
    </main>
  );
};

export default RefundPolicy;