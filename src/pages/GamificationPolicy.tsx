import React from "react";

const GamificationPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg my-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">ZORDR Gamification & Loyalty Program Policy</h1>
      <p className="text-sm text-gray-500 mb-4 text-center">Effective Date: April 2025 | Version 1.0</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">1. Introduction</h2>
        <p className="text-gray-600 leading-relaxed">
          The Zordr Gamification and Loyalty Program is designed to enhance user engagement, increase order frequency, and optimize demand distribution across different time slots within campus environments.
        </p>
        <p className="text-gray-600 leading-relaxed mt-2">
          The program operates through two core mechanisms:
        </p>
        <ul className="list-disc list-inside text-gray-600 ml-4">
          <li>Z‑Coins — our in‑platform reward currency</li>
          <li>Rank‑Based Progression System — tiered status rewards</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mt-2">
          This program is applicable exclusively to student users on the Zordr platform within partnered campus environments.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">2. Eligibility</h2>
        <ul className="list-disc list-inside text-gray-600 ml-4">
          <li>The program is available only to registered users of Zordr.</li>
          <li>Currently limited to students within partnered campuses.</li>
          <li>Users may be segmented internally (e.g., heavy users, casual users) for optimization purposes, but all registered users are eligible to participate.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">3. Z‑Coins (Reward Currency)</h2>
        <h3 className="text-xl font-medium text-gray-800 mt-4">3.1 Earning Z‑Coins</h3>
        <p className="text-gray-600 leading-relaxed">
          Users earn Z‑Coins based on their activity on the platform:
        </p>
        <ul className="list-disc list-inside text-gray-600 ml-4">
          <li>Base Reward: Users earn 10% of the order value as Z‑Coins. Example: ₹150 order → 15 Z‑Coins.</li>
          <li>Additional Z‑Coins may be earned through:
            <ul className="list-disc list-inside ml-6">
              <li>Ordering during low‑demand time slots</li>
              <li>Placing bulk or group orders</li>
              <li>Pre‑ordering (as opposed to instant ordering)</li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-600 leading-relaxed mt-2">
          Zordr may modify earning rates dynamically for specific campaigns or time slots.
        </p>
        <h3 className="text-xl font-medium text-gray-800 mt-4">3.2 Validity of Z‑Coins</h3>
        <ul className="list-disc list-inside text-gray-600 ml-4">
          <li>Z‑Coins are valid for 30 days or until the end of the calendar month, whichever is earlier.</li>
          <li>Expired Z‑Coins will be automatically removed from the user's account without prior notice.</li>
        </ul>
        <h3 className="text-xl font-medium text-gray-800 mt-4">3.3 Nature of Z‑Coins</h3>
        <ul className="list-disc list-inside text-gray-600 ml-4">
          <li>Z‑Coins have no monetary value and cannot be transferred, withdrawn, or converted into cash.</li>
          <li>Z‑Coins are strictly for use within the Zordr platform.</li>
          <li>Z‑Coins are not redeemable for cash or any equivalent outside the platform.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">4. Redemption of Z‑Coins</h2>
        <h3 className="text-xl font-medium text-gray-800 mt-4">4.1 What You Can Unlock</h3>
        <ul className="list-disc list-inside text-gray-600 ml-4">
          <li>Exclusive menu items</li>
          <li>Special combos</li>
          <li>Platform‑sponsored discounts</li>
          <li>Offers and promotional deals</li>
        </ul>
        <h3 className="text-xl font-medium text-gray-800 mt-4">4.2 Redemption Rules</h3>
        <ul className="list-disc list-inside text-gray-600 ml-4">
          <li>Rewards unlocked using Z‑Coins are non‑transferable.</li>
          <li>Each reward is valid for one‑time use per user, unless otherwise specified.</li>
          <li>Redemption is limited to once per month unless a specific offer states otherwise.</li>
          <li>Rewards are applied based on the specific terms and conditions associated with each offer.</li>
          <li>Z‑Coins may not be combinable with certain external offers or third‑party discounts.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">5. Mystery Rewards System</h2>
        <p className="text-gray-600 leading-relaxed">
          Zordr may offer a predefined set of Mystery Rewards that users can unlock at various Z‑Coin thresholds (e.g., 10, 20, 30, 50 Z‑Coins unlock tiers).
        </p>
        <ul className="list-disc list-inside text-gray-600 ml-4">
          <li>Once a mystery reward is redeemed, it cannot be accessed again.</li>
          <li>Mystery rewards are limited to one‑time usage per user.</li>
          <li>Availability of specific mystery rewards may vary by campus or vendor.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">6. Rank‑Based Progression System</h2>
        <h3 className="text-xl font-medium text-gray-800 mt-4">6.1 Rank Tiers</h3>
        <table className="w-full text-left border-collapse mt-2">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Rank</th>
              <th className="p-2 border">Points Required</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">🥈 Silver</td>
              <td className="p-2">0 – 50 points</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">🥇 Gold</td>
              <td className="p-2">50 – 120 points</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">💎 Platinum</td>
              <td className="p-2">120 – 200 points</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">🔷 Diamond</td>
              <td className="p-2">200 – 300 points</td>
            </tr>
          </tbody>
        </table>
        <h3 className="text-xl font-medium text-gray-800 mt-4">6.2 Rank Benefits</h3>
        <ul className="list-disc list-inside text-gray-600 ml-4">
          <li>Priority access to offers and promotions</li>
          <li>Exclusive rewards and deals</li>
          <li>Enhanced combos not available to lower‑ranked users</li>
          <li>Early access to limited‑time campaigns</li>
        </ul>
        <h3 className="text-xl font-medium text-gray-800 mt-4">6.3 Rank Calculation</h3>
        <p className="text-gray-600 leading-relaxed">
          User ranks are determined using a weighted scoring system based on order timing and frequency:
        </p>
        <ul className="list-disc list-inside text-gray-600 ml-4">
          <li>Morning orders (8 AM – 11 AM): Higher weight assigned</li>
          <li>Lunch orders (11 AM – 2 PM): Moderate weight assigned</li>
          <li>Evening orders (2 PM – 5 PM): Balanced weight assigned</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mt-2">
          A composite score is calculated using time‑based ordering behavior and total number of orders. This ensures users who contribute to low‑demand slot utilization are rewarded more effectively.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">7. Funding of Rewards</h2>
        <ul className="list-disc list-inside text-gray-600 ml-4">
          <li>Rewards offered through the Zordr Loyalty Program may be funded by:
            <ul className="list-disc list-inside ml-6">
              <li>Zordr directly</li>
              <li>Participating vendors</li>
              <li>A combination of Zordr and vendor contributions</li>
            </ul>
          </li>
          <li>Vendors may participate in promotional campaigns but do not have access to full platform‑level reward mechanics or user data beyond what is necessary for offer fulfillment.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">8. Fair Usage Policy</h2>
        <p className="text-gray-600 leading-relaxed">
          To maintain the integrity of the program and protect all users, the following rules apply:
        </p>
        <ul className="list-disc list-inside text-gray-600 ml-4">
          <li>Users may not create multiple accounts to exploit or accumulate rewards.</li>
          <li>Fraudulent transactions, unjustified cancellations, or abuse of offers are prohibited.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mt-2">
          Violations may result in:
        </p>
        <ul className="list-disc list-inside text-gray-600 ml-4">
          <li>Cancellation of accrued rewards and Z‑Coins</li>
          <li>Temporary or permanent suspension of account</li>
          <li>Permanent disqualification from the Gamification & Loyalty Program</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mt-2">
          Zordr reserves the right to audit user activity at any time and take appropriate action against abusive behaviour.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">9. Modifications and Termination</h2>
        <ul className="list-disc list-inside text-gray-600 ml-4">
          <li>Zordr reserves the right to:
            <ul className="list-disc list-inside ml-6">
              <li>Modify reward structures, earning rates, and redemption rules</li>
              <li>Introduce new features or discontinue existing ones</li>
              <li>Suspend or terminate the Loyalty Program entirely</li>
            </ul>
          </li>
          <li>Changes may be implemented without prior notice but will be communicated through updates within the app and/or on our website at www.zordr.com.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">10. Liability Disclaimer</h2>
        <ul className="list-disc list-inside text-gray-600 ml-4">
          <li>Zordr shall not be held liable for:
            <ul className="list-disc list-inside ml-6">
              <li>Loss of Z‑Coins due to expiry or account inactivity</li>
              <li>Technical errors, system downtime, or failures affecting reward redemption</li>
              <li>Changes to vendor‑specific offers, their unavailability, or cancellation</li>
              <li>Any indirect or consequential losses arising from participation in the program</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">11. Contact & Support</h2>
        <p className="text-gray-600 leading-relaxed">
          For any queries, disputes, or feedback related to the Zordr Gamification & Loyalty Program, users may:
        </p>
        <ul className="list-disc list-inside text-gray-600 ml-4">
          <li>Contact Zordr Support directly through the in‑app support feature</li>
          <li>Visit our website: <a href="https://www.zordr.com" className="text-blue-600 hover:underline">www.zordr.com</a></li>
        </ul>
        <p className="text-gray-600 leading-relaxed mt-2">
          We aim to respond to all support queries within 2 business days.
        </p>
      </section>
    </div>
  );
};

export default GamificationPolicy;
