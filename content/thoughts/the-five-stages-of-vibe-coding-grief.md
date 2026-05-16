---
title: The Five Stages of Vibe-Coding Grief
description: AI killed the cost of writing code. It did not kill the cost of running it.
published: 2026-02-18
tags:
  - vibe-coding
  - AI
  - startups
  - software
  - product
  - founder
---

AI killed the cost of writing code. It did not kill the cost of running it.

There is a specific kind of post flooding the timeline right now. A founder, grinning and triumphant, announces they spent a weekend building their own SaaS replacement and cancelled a $400/month subscription. The replies are full of fire emojis. The founder feels like a genius.

> And somewhere, a production bug is quietly loading the gun.

This is not a story about AI being bad. AI is extraordinary. Cursor, Claude, Copilot, and tools like them have genuinely compressed the cost of going from idea to working prototype in ways that felt like science fiction two years ago. The code writes itself. The UI assembles. The demo is ready by Sunday afternoon.

The problem is what happens Monday.

What follows is a predictable journey. Not universal. Some people dodge certain stages. But it is recognizable enough that it might as well be a map.

```txt
Five stages.
One direction of travel.
```

---

## Stage 01: The High

It works.

It actually works.

The thing you described in plain English is running in a browser tab, doing the thing you needed it to do. You cancel the subscription. You feel the dopamine of saving money hit immediately, which is a different and better feeling than actually saving money.

In this stage, the tool you replaced looks embarrassing in retrospect. Bloated. Overpriced. Built by a faceless company that charged you monthly for features you never used. Your version is leaner, faster, exactly what you needed.

You post about it. People cheer.

> The code is done. The product is not. These are not the same thing, and the distance between them is where most of your next six months will live.

The category error is already present, but invisible. You measured value in lines of code. The thing you cancelled was not, primarily, lines of code.

>[!warning] The category error
>You measured value in lines of code.
>
>The thing you cancelled was not, primarily, lines of code.

## Stage 02: The First Bug That Does Not Make Sense

It comes two weeks in, or three, or a month.

Something breaks in a way the code has no right to break. The logic is fine. You have read it four times. The AI wrote it, the AI reviewed it, and nothing is wrong with it, except it is definitely wrong, because production is telling you so in no uncertain terms.

```txt
# 3:47 AM. Prod.
UnhandledPromiseRejectionWarning: Cannot read properties of undefined
  at processWebhook (/app/handlers/stripe.js:84)

[This error happened 1,847 times in the last hour]
```

The $400/month tool you replaced had seen this exact failure mode in 2021. A developer who no longer works there fixed it in an afternoon. The fix is in a commit message nobody will ever read, in a codebase you do not have access to, protecting you from a problem you did not know existed until right now.

This is edge case debt. Every production system accumulates it over time, through pain. You have inherited none of it. You are starting fresh, which means you are starting from zero, which means you are about to learn every lesson the hard way.

>[!note] Edge case debt
>Every production system accumulates edge cases through pain.
>
>When you rebuild from scratch, you inherit none of that pain. You just inherit the future bill.

## Stage 03: The Users

This stage is different from the others because it is not about the software.

It is about people. And people are worse than software in every measurable way when it comes to doing what you expect.

They will:

- Upload a 4GB file to a field that says "profile photo"
- Click the delete button and then ask where their data went
- Use your app in a browser version from 2019 that you did not know still existed
- Enter characters into text fields that your validation never imagined
- Find the one combination of actions that produces a state your code considers impossible
- Do all of the above and then message you at 11pm because it is urgent

The $400/month tool had a support team. The support team had documentation. The documentation existed because other humans, before your users, had already done all of these things. The institutional knowledge of ten thousand edge cases was packaged into a system that handled them quietly, invisibly, on your behalf.

You are now:

- the support team
- the developer
- the QA
- the DevOps engineer
- the person who answers the 11pm message

> You did not hire yourself. You conscripted yourself. There is a difference, and it mostly shows up on weekends.

## Stage 04: The Security Incident That Might Be One

This stage does not always arrive as a catastrophe.

Sometimes it is a quiet dread. A log entry that looks wrong. An API call that should not have succeeded. A question from a user about whether their data is safe that you cannot answer with full confidence.

The $400/month tool had a security team, or at least someone whose job description included thinking about these things. They ran penetration tests, or paid someone to. They filed CVEs. They patched dependencies when zero-days emerged. They had a process for the moment something went wrong: who to call, what to say, how to contain it.

Your weekend project has none of this.

It has what the AI wrote, which is generally reasonable code generated without knowledge of your specific threat model, your user base, or what a breach would cost you.

In most cases, nothing happens. The odds are in your favor, especially at small scale. But the odds were also in your favor when you cancelled the subscription, and here you are, reading a log entry at midnight, wondering.

>[!warning] The quiet version
>A security incident does not have to look like a movie.
>
>Sometimes it is just a log line you cannot explain and a question you cannot answer with full confidence.

## Stage 05: The Accounting

This is the stage that arrives quietly, without drama.

No catastrophe, necessarily. Just a moment of honesty with a spreadsheet.

Hours spent debugging production issues. Hours spent on support tickets. Hours spent maintaining infrastructure. Hours lost to context switching: the deep work interrupted by the shallow emergency. Hours spent worrying about the system at 2am when you should be sleeping.

Multiply those hours by what your time is worth. Not what you pay yourself. What it would cost you to hire someone else to do the thing you should actually be doing instead.

```txt
# The math nobody does in advance

Hours/month on maintenance:     ~12
Your effective hourly rate:     $X
Hidden monthly cost:            $X * 12

# Compare to:
Cancelled subscription:         $400

Savings: recalculate.
```

This is not an argument that software subscriptions are always worth it. Some of them are not. Some are genuinely overpriced, poorly built, and replaceable with something better. The vibe-coding revolution is real, and it will displace real tools that failed to justify their cost.

But the calculus is not:

```txt
code cost vs. subscription cost
```

The code is free now. The code was never the expensive part.

## What $400/month Actually Bought You

What $400/month actually bought you:

- uptime guarantees backed by infrastructure teams
- a support queue staffed by humans
- a changelog that means someone is still working on the thing
- security posture tested against real adversaries
- a decade of edge cases already handled
- the right to be angry at someone else when it breaks

That last one sounds like a joke. It is not.

Operational accountability is a real product. When the tool goes down, they fix it. When there is a breach, they own it. When something does not work, there is a channel, a ticket, a person. The cognitive load of that whole system, of knowing that it is not your problem to solve, is worth something significant.

AI has done something remarkable: it has made the hardest part of software cheap. Writing code used to be the bottleneck. Now it is not. The bottleneck is everything that comes after the code: the running of it, the securing of it, the supporting of it, the fixing of it at 3am when three paying customers are losing their minds.

Build if building makes sense. Cancel subscriptions that do not earn their keep.

But do the full accounting first, not the satisfying one. The satisfying one leaves out most of the cost.

> AI killed the cost of code. It just has not killed the cost of everything else yet.

And production, patient, indifferent, unglamorous, is waiting to show you the difference.
