import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const AboutUsPage = () => (
  <Layout>
    <Seo title="Clixpesa" />
    <section className="bg-teal-50">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          About Us
        </h2>
        <div className="max-w-none text-gray-600 text-justify">
          <p>
            Clixpesa is an effort to build a borderless, customer-centric, all in one platform to
            serve as a trusted companion to manage and grow money while giving back control to
            users. By simplifying web3 for the less tech and financial savvy, we intend to increase
            utilization of financial products across sub-saharan Africa. The “take it or leave it”
            approach to financial products and pricing has locked out many, esp in the informal
            sector from enjoying the benefits of current financial trends.
          </p>
          <h3 className="text-2xl tracking-tight font-bold py-4">Clixpesa Spaces</h3>
          <p>
            Clixpesa spaces is basically a savings feature where users can save for personal goals,
            participate in saving challenges and also save in groups through RoSCAs. With Rotating
            Savings & Credit Associations (RoSCAs) users can come together as a group to help each
            other stay financially resilient. Users contribute to a pot, and the target amount goes
            to one of the users in a particular order until everyone has received a pot and the
            cycle starts over. This utility commonly known in Kenya as Chamas, helps many raise
            funds for otherwise big financial goals such as business capital or bills. Within the
            RoSCAs members can also ask for financial support for financial needs outside of the pot
            allocations. Users can create a RoSCA easily by inviting their friends through their
            phone numbers. Once the RoSCAs is created they can select their admins and around can be
            started. Funds disbursement happens automatically once a pot deadline is reached.
            Signatories to the RoSCA funds are randomised by the platform in order to give all
            members equal control over their funds.
          </p>
          <h3 className="text-2xl tracking-tight font-bold py-4">Clixpesa P2P Lending</h3>
          <p>
            68% of loans in the alternative lending market in Africa are P2P loans. With Clixpesa
            P2P users are able to offer or request loans from each other at their own terms.
            Clixpesa Finance helps with monitoring the Credit scores of users and only recommending
            matches to users in order to minimize the risk of default among users. This feature is
            very useful for those who survive on day loans to run small businesses for purposes such
            as inventory purchases. This product greatly reduces the cost of loans as it
            democratises lending and also opens other earning avenues for users through interest.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Privacy Policy" />

export default AboutUsPage
