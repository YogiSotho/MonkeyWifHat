# Tokenomics

## Design Rule

If the token structure needs a detective board and red string, it is already wrong.

MonkeyWifHat should use tokenomics that a normal reader can understand in one pass and verify in public.

## Principles

- fixed supply
- visible allocations
- no mystery reserve buckets
- team vesting disclosed up front
- public explanation of wallet purpose

## Supply Model

MonkeyWifHat should use a permanently fixed supply.

- no post-launch inflation
- no rebasing
- no tax mechanics
- no hidden reserve wallets
- no secondary token used to bypass disclosures

If a future idea requires changing the supply model, the idea is probably worse than the current model.

## Final Allocation

Recommended long-term allocation:

- `72%` public/community distribution and liquidity
- `15%` creator rewards and community initiatives treasury
- `8%` team allocation with hard vesting
- `5%` operations and security multisig

This model keeps the dominant share in public and community-controlled circulation while still leaving enough room to fund real operations, creator programs, and long-term maintenance.

## Allocation Purpose

### `72%` Public/Community Distribution and Liquidity

This bucket exists to make the launch legible and fair.

It should cover:

- public distribution
- liquidity provisioning
- community-accessible circulation

This bucket should not become a disguised insider reserve.

Liquidity should be seeded from this bucket at launch rather than funded later by selling down treasury-controlled wallets.

If the project wants the structure to feel trust-minimized, the liquidity plan should be visible before launch:

- what wallet seeds liquidity
- how much of the bucket is committed to initial liquidity
- whether the liquidity position is locked, burned, or managed under a disclosed control process

Recommended default: seed the initial liquidity position at launch and burn the LP position rather than retaining ongoing control over it.

Recommended launch specification: commit roughly `18%` of total supply to the initial liquidity pool, sourced from the `72%` public and liquidity allocation and paired against `SOL`.

### `15%` Creator Rewards and Community Initiatives Treasury

This bucket exists to fund things the public can actually see.

Examples:

- creator bounties
- meme contest rewards
- art commissions
- campaign budgets
- community collaborations
- clearly disclosed ecosystem initiatives

This bucket should not be used as an all-purpose slush fund. Every spend should map to a public program, budget, or published explanation.

### `8%` Team Allocation With Hard Vesting

This bucket exists to compensate builders without turning the project into an insider game.

The team share is intentionally kept small enough that the structure still reads as community-first.

### `5%` Operations and Security Multisig

This bucket exists to cover the unglamorous but necessary work around launch and maintenance.

Examples:

- infrastructure
- moderation support
- security reviews
- legal or administrative costs if needed
- launch execution costs

This wallet should be disclosed as an operations wallet, not marketed as community money.

## Authority Posture

Before launch, the project should publish a plain-language statement covering the following:

- mint authority exists only if technically necessary to initialize supply, and is revoked immediately after final verification
- freeze authority should not exist at launch; if it exists temporarily for technical reasons, the holder and revocation timing must be published clearly
- there should be no hidden admin capability marketed as decentralization

The trust-minimized default is simple:

- fixed supply created once
- mint authority revoked
- freeze authority absent or revoked before public launch

## Wallet Map

Before launch, the project should publish the wallet addresses and roles for:

- public/liquidity wallet
- creator and community treasury wallet
- team vesting wallet
- operations multisig

Each wallet should answer three questions immediately:

- what it holds
- who controls it
- what it is allowed to be used for

## Team Vesting Standard

If the team receives tokens, the public should be able to answer four questions immediately:

- what wallet holds them
- what the unlock or vesting terms are
- when they become available
- what purpose they serve

Recommended vesting standard:

- `12-month cliff`
- `36-month` monthly linear vesting after the cliff
- no early unlocks without a public statement
- no undisclosed side allocations to insiders

If vesting is enforced on-chain, publish the contract or wallet details.

If vesting is not enforced on-chain, disclose that plainly and explain the control process.

## Treasury Spending Rules

The creator/community treasury and operations multisig should not move funds in a way that surprises the public.

Recommended rules:

- publish wallet addresses before launch
- publish the signer model for multisig-controlled wallets
- use written budget cycles for creator and campaign spending
- explain every large treasury movement in public
- avoid one-off discretionary dumps into the market
- do not use treasury wallets as a quiet substitute for proper launch liquidity seeding

Good treasury use looks like recurring, visible programs.

Bad treasury use looks like unexplained transfers, vague partnerships, or retroactive justifications.

## Expected Long-Term Budgeting Model

The token structure should support years of operation without forcing the project into panic spending, random treasury sales, or invented utility.

The budgeting rule is simple:

- budget slowly
- disclose early
- preserve runway
- spend on visible outputs

The project should budget the treasury in both token terms and plain-language program terms.

The cleaner trustless model is to separate these functions clearly:

- the public and liquidity bucket seeds market structure
- the creator treasury funds visible community programs
- the operations multisig funds necessary support work

If those functions blur together, the public loses track of what supply is for.

For maximum defensibility, the launch should prefer burned launch liquidity over a retained LP management structure.

## Treasury Release Pace

The `15%` creator and community treasury should not be treated as instantly spendable just because it exists.

Recommended planning pace:

- Year 1: plan for up to `20%` of the treasury bucket
- Year 2: plan for up to `20%` of the treasury bucket
- Year 3: plan for up to `20%` of the treasury bucket
- Year 4 and later: preserve the remaining `40%` for later growth, exceptional opportunities, or periods where community momentum remains real

This is a planning ceiling, not a spending requirement. If less needs to be used, less should be used.

The `5%` operations and security multisig should be paced even more conservatively.

Recommended planning pace:

- Year 1: plan for up to `25%` of the operations bucket
- Year 2: plan for up to `20%` of the operations bucket
- Year 3: plan for up to `15%` of the operations bucket
- Year 4 and later: preserve the remaining `40%` for maintenance, security, and periods where outside costs rise unexpectedly

Again, this is a ceiling, not an obligation to spend.

## Annual Budget Structure

The creator and community treasury should be split into named annual budgets rather than one generic number.

Recommended annual community-budget categories:

- `35%` creator rewards and contests
- `25%` recurring community campaigns and meme programs
- `15%` art, design, and content production
- `15%` collaborations, integrations, and special initiatives that are already documented
- `10%` reserve for small experiments or contingency use

Recommended annual operations-budget categories:

- `30%` infrastructure and tooling
- `25%` moderation and community operations
- `20%` security, audits, and technical verification
- `15%` launch and publishing support
- `10%` legal, administrative, or emergency reserve

These mixes can change over time, but the categories should remain legible.

## Runway Rule

Token projects usually get less trustworthy when they have to spend reactively.

MonkeyWifHat should therefore aim for:

- at least `18 months` of planned operating runway at any given time
- a preferred downside runway of `30 months` for core operations if market conditions weaken
- no commitment to recurring programs that cannot be supported through the next planning cycle

If the budget no longer supports the current pace, the right move is to shrink the program list, not to hide spending or invent new narratives.

## Budget Cycle

The treasury should be managed on a recurring cycle.

Recommended cadence:

- one annual budget framework
- one quarterly spending update
- one public explanation for any material change in budget direction

Each budget cycle should answer:

- what is being funded
- how much is allocated
- which wallet is spending it
- what visible output the public should expect

## Treasury Sale Discipline

If treasury-controlled tokens ever need to be sold, the process should be treated as a disclosure event.

Recommended rules:

- do not sell treasury-controlled tokens without a stated purpose
- prefer planned, disclosed treasury movements over reactive selling
- report meaningful treasury disposals or conversions quickly
- do not allow team vesting or treasury activity to become hidden supply pressure

The project does not need to promise that treasury tokens will never move. It does need to promise that those movements will not be disguised.

## Budgeting Standard For Community Programs

Community mechanics should be funded like a small media operation, not like a speculative protocol.

Good budgeting examples:

- a published monthly meme contest reward pool
- a disclosed bounty for a content pack or art series
- a fixed seasonal budget for creator spotlights
- a limited campaign budget with a start, end, and stated output

Bad budgeting examples:

- open-ended incentive promises
- vague ecosystem grants with no review criteria
- large partnership allocations with no public deliverable
- reward promises that depend on future hype rather than current treasury capacity

## Long-Term Budgeting Test

Before approving any treasury use, the project should ask five questions:

- does this spending create something the public can actually see
- does it fit a disclosed category and budget cycle
- does it reduce runway below a safe level
- would the explanation still sound honest if posted publicly in one sentence
- would a normal reader understand why this spend exists

If the answer to two or more of those questions is no, the spend probably should not happen.

## Launch State

At launch, MonkeyWifHat should be described honestly as:

- a meme and community token
- a culture and participation asset
- a documented launch with visible structure

At launch, it should not be sold as:

- a guaranteed-return vehicle
- a complex governance protocol
- a fake infrastructure token
- a product suite that does not yet exist

## Later Utility Standard

Future utility should only be introduced if it is real, documented, and easy to explain.

Acceptable later utility may include:

- creator rewards
- campaign bounties
- community signaling or voting on published programs
- cosmetic or access-based community perks
- partner integrations that are already live and documented

Each later utility should pass three tests:

- it can be explained in one sentence
- it is funded from a disclosed wallet or budget
- it already exists before it is marketed

## Fixed Supply Versus Gimmick Deflation

MonkeyWifHat should not try to look sophisticated by adding transfer taxes, automatic burns, or pseudo-casino math at launch.

The cleaner default is:

- fixed supply
- no transfer tax
- no rebasing
- no hidden burn mechanic
- no promise that scarcity tricks will create value

The supply number itself is mostly a denomination choice. What matters more is:

- how much supply is actually circulating
- how liquidity is seeded
- how treasury wallets behave
- whether participation loops are real

That means a large supply can still be clean tokenomics, and a small supply can still be bad tokenomics.

The project should therefore avoid fake precision like a supposedly magical deflation rate.

## Token Sinks Versus Token Taxes

If MonkeyWifHat ever wants a slight economic edge similar to a game or casino house edge, it should come from optional participation loops, not from penalizing every transfer.

Bad version:

- every transfer loses a small percentage
- every trade pays a tax that the project markets as tokenomics genius
- burns happen automatically even when no real product action occurred

Better version:

- an optional contest entry uses tokens
- a paid submission or themed event uses tokens
- a cosmetic, naming, or access mechanic uses tokens
- a small portion of that activity is burned or retired from circulation

That is the correct place for a slight edge because the user is paying for an action, not being taxed for merely holding or moving the token.

If the project ever adds a sink, it should stay narrow and understandable.

Recommended design rule:

- at least `90%` of any token spent in a future participation loop should still map to visible utility, reward pools, or disclosed program use
- no more than `10%` of that loop should be treated as a burn, retirement, or friction component unless the project can explain the reason plainly

This keeps the mechanism small enough to feel honest rather than extractive.

## Simple Long-Term Participation Model

If MonkeyWifHat later grows into a lightweight game or community loop, the simplest defensible model is:

1. keep the launch tokenomics fixed and trust-minimized
2. add optional token-paid actions only after they exist in public
3. route most spent tokens into visible rewards, pools, or community programs
4. allow a small documented sink only inside those optional actions
5. never make ordinary wallet transfers the source of the edge

Example structure:

- a themed event charges `100` tokens to enter
- `90` tokens go to the event pool, rewards, or visible program budget
- `10` tokens are burned or permanently retired

That is economically closer to a small house edge, but it stays attached to a real activity.

The point is not aggressive deflation. The point is to create optional, repeatable participation loops where some tokens leave active circulation for a visible reason.

If the project cannot point to the actual activity, it should not add the sink.

For future faucet and sink design, see [Future Game-Loop Mechanics](./Future-Game-Loop-Mechanics.md).

If the token later enters a game environment, the cleaner model is to let the token handle optional economic actions while a separate reputation layer tracks standing, canon recognition, and long-term contribution inside the series.

## Governance Path

MonkeyWifHat should not start with heavy on-chain governance theater.

Recommended governance path:

1. launch with team-led execution and full disclosure
2. add public signaling on creator programs or community campaigns
3. publish execution reports showing how community input was used
4. consider narrow on-chain governance only if the process remains clear and useful

Early governance, if any, should be advisory and limited to visible community programs rather than irreversible protocol-style control.

## Reporting Standard

Trust is maintained by recurring disclosure, not one launch thread.

Recommended reporting standard:

- publish one official token details page
- publish one official wallet map
- publish one official allocation explanation
- publish one annual budget framework and quarterly treasury or reward updates
- publish one reusable treasury reporting template
- post corrections quickly when something changes or a mistake is found

If the project cannot keep the disclosures current, it should simplify the model rather than asking the public for more trust.

## Permissions and Controls

Before launch, the project should state clearly:

- whether mint authority exists
- who controls it and when it is revoked
- whether freeze authority exists and why
- which wallets are team-controlled
- how vesting is enforced or disclosed

## Things That Corrupt Trust Fast

- stealth wallet concentration
- undisclosed insiders
- price-promise language
- fake scarcity narratives
- confusing taxes or gimmick mechanics

## Summary Statement

MonkeyWifHat should use a fixed and disclosed token structure with public-majority distribution, a small vested team allocation, a visible creator/community treasury, and a narrow operations multisig. Any future utility or governance should be phased in only after it exists, is documented, and remains simple enough for a normal reader to verify.

## Public Statement

> MonkeyWifHat should use a fixed and disclosed token structure. The largest share should remain in public and community-facing circulation. Team-controlled allocations, if any, should be small, visible, explained, and subject to a published lock or vesting schedule. Community and operations wallets should have disclosed purposes, and future utility should only be announced after it actually exists.

## Related Articles

- [Launch Plan](./Launch-Plan.md)
- [Glossary](./Glossary.md)
- [Future Game-Loop Mechanics](./Future-Game-Loop-Mechanics.md)
- [Canonical Game Reputation Model](./Canonical-Game-Reputation-Model.md)
- [Risk and Transparency](./Risk-and-Transparency.md)
- [Treasury Reporting Template](./Treasury-Reporting-Template.md)
