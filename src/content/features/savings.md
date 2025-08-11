---
title: Clixpesa Savings
desc: Earn yield with your stables daily
slug: savings
---

## Clixpesa Savings

Clixpesa’s savings feature continuously optimizes your savings to get the best net yield while keeping safety front and center. Everyday our system runs a full evaluation of the supported protocols and — only when it’s worthwhile after fees and risk — reallocates funds to improve the pools net return.

![Sample savings UI](/images/savings.png)

### How the daily evaluation works

Every 24 hours, our system performs a full, automated evaluation of the protocols we support. The evaluation checks whether moving funds would **increase our net yield after transaction costs and risk adjustments**. If the move improves the outcome, Clixpesa will reallocate. If not, we hold steady and only act when it’s worth it.

#### What we analyze

- **Base and boosted APYs** — current yields on Base and any temporary boosts or incentives.
- **Liquidity depth and utilization** — can the market handle the size of the move without slippage or rate collapse.
- **On-chain risk signals** — protocol health, audit status, exploit alerts and other safety indicators.
- **Time-sensitive rewards and ecosystem incentives** — short-term boosts that may make a move profitable.
- **Gas costs vs expected gain** — transaction costs weighed against projected yield improvements.

### How it works for you

1. **Create a saving goal:** Easily set up a new saving goal on our app.
2. **Onchain Conversions:** Deposit any USD stable asset and this will be converted to USDC for saving protocal.
3. **Earn yield:** You assets start earning yield 24 hours after deposit.
4. **Cash out at any time:** Your funds are not locked. You can cash out at anytime.

### Earnings based on different tiers

Depending on your total deposit size - the cummulative amount across all your saving goals - you unlock one of three yield tiers:

| Tier         | Deposit (USDC/USDT) | Typical APY uplift\* |
| ------------ | ------------------: | -------------------: |
| **Silver**   |       \$1 – \$2,500 |             baseline |
| **Gold**     |  \$2,500 – \$10,000 |     +4.13% APY boost |
| **Platinum** |           \$10,000+ |     +8.72% APY boost |

\*APY boost figures reflect how execution and access to incentives can tighten optimization — actual yield varies with market conditions.

**Why tiering matters:** higher tiers let us react more often to fleeting opportunities, enabling tighter optimization, faster rebalancing, and better capture of dynamic incentives.

### Monitoring & safety

Clixpesa continuously monitors and reallocates saved USDC across vetted DeFi protocols on Base while operating within strict security boundaries. Safety controls include risk-signal thresholds, protocol whitelisting, and conservative reallocation rules so your funds aren’t moved for marginal gains or when risk is high.

### Where yield comes from

Clixpesa combines multiple, complementary yield sources to diversify returns and control risk.

#### 🔵 Morpho Vaults

Morpho’s vaults automate lending decisions across high-quality markets. Clixpesa allocates to a curated set of vaults to access diversified, strategy-optimized lending yields without losing composability or safety:

- **Seamless USDC Vault** — curated by Gauntlet; targets high-demand lending markets and dynamic rates.
- **Spark USDC Vault** — operated by SparkDAO; efficient liquidity provisioning for Morpho Blue pools.
- **Steakhouse USDC Vault** — Steakhouse Financial; lends USDC against blue-chip crypto and RWA collateral.
- **Gauntlet USDC Prime** — Gauntlet-curated; optimizes for risk-adjusted yield in high-liquidity markets.
- **Clearstar OpenEden USDC** — managed by Clearstar; targets USDO markets (regulated, treasury-backed).

These vaults let Clixpesa access diversified lending performance with mature risk tooling.

#### 🟣 Aave v3

Aave v3 offers advanced risk management and capital efficiency:

- **Efficiency Mode (eMode)** for higher effective LTVs on correlated assets.
- **Isolation Mode** to contain risk when onboarding newer assets.
  Clixpesa routes to Aave when its market structure and incentives outperform other options — especially during periods of high utilization.

#### 🌕 Moonwell

Moonwell is a native Base lending market with deep liquidity and stable rewards:

- **Single-sided lending pools** — lend USDC without managing LP pairs.
- **Cross-chain USDC lending** — leverages CCTP for broader optionality.
  When markets are simple and stable, Moonwell often delivers the best net return with minimal complexity.

#### 💧 Fluid

Built by Instadapp, Fluid is a lending aggregator that blends performance and risk tooling:

- **Aggregated liquidity** across markets for better rate efficiency.
- **Advanced risk controls**, including partial liquidations and higher safe LTVs.
  Clixpesa uses Fluid when flexible routing can improve performance without adding unnecessary risk.

### Our workflow is simple

1. Clixpesa scans — collects APYs, liquidity, on-chain signals, incentives and gas estimates.
2. Decision engine simulates net outcomes (after fees & slippage).
3. If net gain > threshold and risk profile acceptable → execute reallocation.
4. If not → hold and re-evaluate at the next scheduled scan.

### Final note

Clixpesa’s savings feature is designed to capture meaningful yield intelligently and safely — combining automated daily evaluation, personalized execution, and diversified, vetted yield sources so your stablecoin savings work harder for you without unnecessary risk.
