---
title: Clixpesa Overdraft
desc: Finalize that transaction even on low balances
slug: overdraft
---

## Jazisha: Transact even on low balances

**Jazisha** is an overdraft product built for that behaviour: it lets users temporarily overdraw their Clixpesa wallet (up to **\$100**) so they can complete purchases without making a formal loan request. Users pay a low access fee plus a small daily service charge, then repay when they top up — their limit is replenished for the next transaction.

![Sample Jazisha UI](/images/jazisha.png)

### Why Jazisha?

- **Keep spending flowing:** Users don’t lose sales or purchases because of a shortfall.
- **Better than small loans:** Lower friction and lower effective cost than repeatedly applying for tiny formal loans.
- **Increase merchant volume:** Users can complete more purchases, increasing transaction volume on the platform.
- **Fast & familiar:** Works like a mini, automatic loan tied to the wallet — no separate request each time.
- **Responsible limits:** Built-in caps and monitoring reduce systemic risk.

### How it works

1. **Subscribe / Opt-in:** A user opts into Jazisha and is given a borrowing limit (up to \$100) based on on-platform behaviour and credit signals.
2. **Make a purchase:** At checkout, if the wallet balance is insufficient, Jazisha tops up the shortfall so the transaction completes.
   - Example: needed = **8,500 cKES**, balance = **5,000 cKES** → Jazisha advances **3,500 cKES**.
3. **Access fee charged:** A one-time **1% access fee** is applied to the amount advanced.
4. **Daily service charge accrues:** Depending on the outstanding amount, daily charges apply as per the bracketed schedule (below).
5. **Repayment:** When the user tops up their Clixpesa wallet, incoming funds are first applied to settle Jazisha usage and fees. Partial or full repayments are accepted.
6. **Limit replenished:** After repayment, the user’s Jazisha limit becomes available again for future purchases.

### Fees (simple & predictable)

- **Access fee:** **1%** of the amount accessed (one-off).
- **Daily service charge (by outstanding amount):**
  - \$0 – \$1 → **Free**
  - \$1 – \$5 → **Free for first 3 days**, then **\$0.02/day** after
  - \$5 – \$10 → **Free for first 3 days**, then **\$0.0415/day** after
  - \$10 – \$15 → **\$0.08/day**
  - \$15 – \$25 → **\$0.125/day**
  - \$25 – \$50 → **\$0.165/day**
  - \$50 – \$100 → **\$0.2/day**

### Repayment terms & account rules

- **Full and partial settlement accepted.**
- **Regular inflows required:** Customers must maintain regular inflows into their Clixpesa account for **30 days** from first access.
- **Full repayment expected within 30 days.**
- **Settlement order:** Any incoming funds to the Clixpesa wallet will automatically be applied to Jazisha principal and related fees.

### What happens on non-repayment

- **After 30 days unpaid:** The outstanding Jazisha amount is converted into a formal loan bearing a **monthly rate of 7.5%**.
- **After 120 days unpaid:** Continued non-settlement leads to **service suspension for 4 months** and the borrower may be **listed with credit bureaus**.

### Who benefits?

- **Traders & small businesses** needing to complete quick purchases when stock or cash is low.
- **Consumers** who make frequent small purchases and prefer low-friction access to tiny advances.
- **Merchants** who avoid lost sales and gain predictable settlement behavior.

### How Clixpesa manages risk

- **Eligibility gating:** Limit sizes and access depend on credit signals, RoSCA behaviour, and transaction history.
- **Auto-settlement:** Incoming funds are applied to Jazisha first to recover advances quickly.
- **Monitoring & rules:** Daily service charges, 30-day conversion to a loan, and escalation to credit bureaus deter abuse.
- **Usage analytics:** We track patterns and adjust eligibility and limits to protect lenders and the platform.

### Our vision

Jazisha makes small, time-sensitive purchases frictionless while keeping costs low and risk controlled. It turns short-term credit needs into an integrated wallet capability — empowering users to keep trading, while Clixpesa keeps the system safe and sustainable.
