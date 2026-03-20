# Liquidity Seeding Plan

## Purpose

This page explains how MonkeyWifHat should seed launch liquidity without turning treasury management into a hidden source of trust.

The goal is simple: create market structure once, disclose it clearly, and avoid retaining unnecessary control afterward.

## Preferred Method

MonkeyWifHat should seed the initial liquidity position at launch and burn the LP position.

This is the preferred method because it is easier for a normal reader to verify and harder for the project to manipulate later.

## Source Of Liquidity

Initial liquidity should come from the `72%` public and community distribution and liquidity allocation.

It should not come from:

- the creator and community treasury
- the operations and security multisig
- the team vesting allocation

Those wallets have different purposes and should stay separate.

## Recommended Launch Specification

If the goal is a strict and defensible launch, the default recommendation is:

- commit `18%` of total supply to the initial liquidity pool
- treat that as `25%` of the `72%` public and liquidity bucket
- pair the token against `SOL` or wrapped `SOL`
- burn the LP position immediately after pool creation

This is a strong default because it is large enough to make the initial market feel intentional, while still leaving most of the public and liquidity bucket outside the seed pool for distribution and community-accessible circulation.

Under that structure, the remaining public and liquidity allocation still retains `54%` of total supply for circulation, launch distribution, and later community-facing use.

## Paired Asset Assumption

The default paired asset should be `SOL`.

Reasons:

- it matches the chain the project is launching on
- it is easier for a normal reader to understand than a more engineered pairing setup
- it avoids implying that the token is pegged, redeemed, or treasury-backed by a stable asset
- it keeps the launch story aligned with a simple community token rather than a synthetic financial product

If a launch venue technically uses wrapped `SOL`, the public explanation should still describe the pair in plain language as a `SOL` pair.

## Disclosure Standard

Before launch, the project should publish:

- the wallet used to seed initial liquidity
- the token amount committed to the initial pool
- the paired asset used for the pool
- the transaction creating the pool
- the transaction burning the LP position

Recommended launch-day disclosure set:

- total token supply
- exact token amount committed to initial liquidity
- exact `SOL` amount paired against it
- percentage of total supply used for the initial pool
- wallet address that created the pool
- pool address
- transaction for pool creation
- transaction for LP burn
- statement confirming treasury wallets were not used for liquidity seeding

If any part of that is not available yet, launch is not ready.

## Why Burn The LP Position

Burning the LP position creates a stricter trust model.

It reduces the risk that the project quietly reclaims or manages launch liquidity while publicly describing the structure as community-first.

It also keeps the treasury logic clean:

- market liquidity is seeded at launch
- treasury wallets fund programs and operations
- later spending decisions are not disguised as liquidity management

## Deviation Rule

If the LP position cannot be burned for a real technical reason, that deviation should be disclosed before launch, not justified after launch.

Any deviation should answer:

- why the burn method is not being used
- what wallet will retain control instead
- what signer model controls that wallet
- what limitations prevent misuse

If those answers are weak, the deviation should not happen.

## What This Does Not Mean

Burning the LP position does not make the token safe, valuable, or guaranteed to succeed.

It only means the launch liquidity structure is easier to verify and harder to manipulate.

## Launch Checklist

Before launch, confirm:

- initial liquidity source is documented
- liquidity wallet is published
- exact initial pool size is published
- exact paired `SOL` amount is published
- pool creation transaction is published
- LP burn transaction is published
- the treasury wallets remain separate from the liquidity workflow

## Related Articles

- [Tokenomics](./Tokenomics.md)
- [Launch Plan](./Launch-Plan.md)
- [Annual Budget 2026-2027](./Annual-Budget-2026-2027.md)
- [Risk and Transparency](./Risk-and-Transparency.md)