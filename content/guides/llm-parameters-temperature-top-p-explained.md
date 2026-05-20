---
title: LLM Parameters Explained: Temperature, Top-p, and the Rest
description: What temperature, top-p, frequency penalty, and presence penalty actually do — with metaphors, examples, and when to use which settings.
published: 2026-05-20
tags:
  - AI
  - LLM
  - guide
  - parameters
  - prompt-engineering
---

You type a prompt, hit send, and the model answers. But somewhere between the prompt and the response, there is a layer of knobs that most people leave on default and never touch.

Temperature. Top-p. Frequency penalty. Presence penalty. Max tokens. The names sound like settings on an industrial printer. Most people ignore them. The people who do touch them usually just crank temperature to "make it more creative" and call it a day.

That is like owning a kitchen and only knowing the microwave.

## Who This Is For

If you are a regular user who asks ChatGPT questions, writes emails, or brainstorms ideas — you can close this tab. You do not need this. The defaults work fine for what you are doing. The providers have tuned them for general use, and they are good.

This guide is for people who hit a wall. You are building something specific — an automation pipeline, a content generator, a classification system — and the output is wrong in a consistent way. Too repetitive. Too random. Too scattered. Too boring. And you do not know which knob to turn.

It is also for people who work with models through an API and want to understand what they are actually controlling when they set these values.

If that is not you, the defaults will serve you well. Come back when they do not.

---

## The One-Minute Version

Every time an LLM generates a word, it does not pick the "right" word. It picks from a probability distribution — a ranked list of candidates, each with a likelihood score.

**Temperature** controls how flat or spiky that distribution is. Low temperature: the model plays it safe and picks from the top candidates. High temperature: it gives weaker candidates a real chance.

**Top-p** (nucleus sampling) controls how many candidates are in the running at all. Low top-p: only the most likely words make the cut. High top-p: the pool is wider.

**Frequency penalty** discourages the model from repeating words it has already used.

**Presence penalty** discourages the model from repeating topics it has already covered.

Everything below is just making those four sentences useful.

---

## Temperature: How Brave the Model Is

### The Metaphor

Imagine you are hiring someone to write for you.

At **temperature 0**, you are hiring a legal reviewer. They will pick the safest, most defensible word every time. The output will be consistent, predictable, and a little dry. If you ask the same question twice, you will get the same answer.

At **temperature 0.7**, you are hiring a solid mid-level writer. They know the material, they make reasonable choices, and they occasionally surprise you with a good turn of phrase. This is the default for most models, and for good reason.

At **temperature 1.5**, you are hiring a poet at 2am. Some sentences will be brilliant. Some will be nonsense. You will not know which until you read them.

At **temperature 2.0**, the poet is on fire. The building might be on fire too.

### What Actually Happens

The model assigns a probability to every possible next word. At temperature 0, it always picks the highest-probability word. At temperature 1, it samples according to the original probabilities. Above 1, it flattens the distribution — unlikely words become more likely.

```txt
# Temperature 0 — same prompt, same answer, every time
"The capital of France is Paris."

# Temperature 0.7 — slight variation, same facts
"Paris is the capital of France."

# Temperature 1.5 — more varied phrasing, occasional odd choices
"France's capital? That would be Paris, of course."
"Well, if we're talking about France, the capital city is Paris."

# Temperature 2.0 — creative, sometimes unhinged
"Ah, the City of Light! Paris, that romantic capital where croissants dream of butter."
```

### When to Use What

```txt
Temperature 0 — 0.3
├── Code generation
├── Data extraction
├── Classification tasks
├── Anything where consistency matters more than style
└── "I need the same answer if I ask this 100 times"

Temperature 0.5 — 0.8
├── General writing
├── Summarization
├── Most business use cases
├── The "it just works" range
└── Default for a reason

Temperature 0.9 — 1.2
├── Brainstorming
├── Creative writing
├── Generating varied examples
├── When you want the model to surprise you
└── Accept that some outputs will be bad

Temperature 1.3 — 2.0
├── Experimental creative work
├── Generating ideas you will filter manually
├── When you want to see what the model "knows" at the edges
└── Do not use this in production
```

>[!warning] The common mistake
>People crank temperature to "make the AI more creative" for tasks that need precision.
>
>If you are generating SQL queries, you do not want creative. You want correct.
>
>Temperature does not control quality. It controls how much risk the model takes with each word.

---

## Top-p: How Many Candidates Get to Play

### The Metaphor

Temperature controls how brave the model is. Top-p controls how big the playground is.

At **top-p 0.1**, only the top 10% of probable words are allowed. The model is confined to a small, safe set of choices. Output is very focused, very repetitive, and very boring.

At **top-p 0.9**, the model can pick from a wide pool. More variety, more risk, more interesting output.

At **top-p 1.0**, every word the model knows is in play. Even the weird ones.

### Temperature vs Top-p: The Difference

People confuse these because they both control "randomness." They do not.

- **Temperature** reshapes the probability distribution. It changes how the model weighs its options.
- **Top-p** truncates the distribution. It decides which options exist at all.

```txt
# Low temperature + low top-p
# = Very safe, very narrow
"The cat sat on the mat."

# Low temperature + high top-p
# = Safe but varied word choice
"The cat settled onto the mat."

# High temperature + low top-p
# = Risky but from a small pool
"The feline perched upon the mat."

# High temperature + high top-p
# = Full chaos mode
"That whiskered sovereign claimed its rightful throne atop the woven territory."
```

### Practical Advice

Most of the time, adjust temperature and leave top-p at 0.9–1.0. Top-p is useful when you want to constrain vocabulary without making the output robotic.

```txt
Top-p 0.1 — 0.3
├── Very constrained output
├── When you need specific terminology
└── Rarely useful in practice

Top-p 0.5 — 0.7
├── Focused but not rigid
├── Good for technical writing
└── A reasonable middle ground

Top-p 0.9 — 1.0
├── Default range
├── Lets the model use its full vocabulary
└── Leave it here unless you have a reason
```

>[!tip] Don't adjust both at once
>If you change temperature and top-p simultaneously, you will not know which one caused the effect.
>
>Change one at a time. See what happens. Then adjust the other.

---

## Frequency Penalty: Stop Repeating Yourself

### The Problem It Solves

LLMs love to repeat themselves. Not because they are broken, but because the word they just used is statistically likely to be relevant to the next word. The model drifts into loops.

```txt
# Without frequency penalty (typical behavior)
"AI is transforming the way we work. AI is also transforming the way we think.
AI is fundamentally changing how we approach problems. AI is..."

# The model is not broken. It just really likes the word "AI" right now.
```

### What It Does

Frequency penalty reduces the probability of words the model has already used in this conversation. The more times a word appears, the more it gets suppressed.

```txt
Frequency penalty 0.0 (default)
├── No suppression
├── Words can repeat freely
└── Fine for short outputs

Frequency penalty 0.5 — 1.0
├── Moderate suppression
├── Good for longer-form writing
└── Reduces obvious repetition

Frequency penalty 1.5 — 2.0
├── Aggressive suppression
├── Words get "used up" fast
└── Can make output feel forced
```

### When to Use It

Turn it up when you are generating long-form content and notice the model circling back to the same words. Turn it down (or off) for short outputs where repetition is not a problem.

```txt
# Good use case: long article generation
frequency_penalty: 0.7
# The model will naturally vary its vocabulary

# Bad use case: code generation
frequency_penalty: 0.0
# In code, you WANT the same variable name repeated
```

---

## Presence Penalty: Stop Repeating Yourself (But for Topics)

### The Difference from Frequency Penalty

Frequency penalty suppresses specific words. Presence penalty suppresses topics — it discourages the model from revisiting things it has already said, even if it uses different words.

```txt
# Frequency penalty: "Stop saying 'AI' so much"
# Presence penalty: "Stop talking about AI altogether, even if you use synonyms"
```

### What It Does

Presence penalty is applied once per token that appears at all. Unlike frequency penalty, it does not scale with how many times the word appears. It just says: "You already mentioned this. Move on."

```txt
Presence penalty 0.0 (default)
├── No topic suppression
├── Model can stay on the same topic
└── Fine for focused, deep responses

Presence penalty 0.5 — 1.0
├── Encourages topic diversity
├── Good for brainstorming
└── Model will naturally broaden the discussion

Presence penalty 1.5 — 2.0
├── Aggressive topic shifting
├── Model will avoid anything it already mentioned
└── Can make output feel scattered
```

### When to Use It

```txt
# Brainstorming: you want variety
presence_penalty: 0.8
# "Give me 10 marketing ideas" — each idea should be different

# Deep explanation: you want focus
presence_penalty: 0.0
# "Explain how SSL works" — stay on topic, go deep

# Conversation: you want natural flow
presence_penalty: 0.3 — 0.5
# Slight nudge to not repeat what was already said
```

---

## Max Tokens: The Leash

This one is simple. Max tokens is the maximum length of the response.

```txt
max_tokens: 50
├── Very short response
├── Good for classification, extraction
└── Will cut off mid-sentence if the model has more to say

max_tokens: 500
├── Short paragraph
├── Good for concise answers
└── Most "chat" use cases

max_tokens: 2000 — 4000
├── Long-form content
├── Articles, detailed explanations
└── Watch your API costs

max_tokens: 8000+
├── Very long output
├── Full documents, codebases
└── Expensive and slow
```

>[!warning] Max tokens cuts off, it does not summarize
>If you set max_tokens too low, the model will just stop mid-sentence.
>
>It does not know it is being cut off. It does not try to wrap up.
>
>It just stops. Like someone pulling the plug.

---

## Putting It All Together: Common Recipes

### Recipe 1: Code Generation

```txt
temperature:     0.1
top-p:           0.5
frequency_penalty: 0.0
presence_penalty:  0.0
max_tokens:      2000
```

Why: Code needs to be correct, not creative. Low temperature for consistency. Low top-p to stay in "code vocabulary" territory. No penalties — in code, repetition is fine (you want the same variable name).

### Recipe 2: Creative Writing

```txt
temperature:     0.9
top-p:           0.95
frequency_penalty: 0.6
presence_penalty:  0.3
max_tokens:      3000
```

Why: You want variety and surprise. Higher temperature for risk-taking. High top-p for vocabulary range. Frequency penalty to avoid repetitive phrasing. Light presence penalty to keep the narrative moving.

### Recipe 3: Business Email

```txt
temperature:     0.4
top-p:           0.7
frequency_penalty: 0.3
presence_penalty:  0.2
max_tokens:      500
```

Why: Professional but not robotic. Low-ish temperature for clarity. Moderate top-p. Light penalties to keep it clean without making it feel forced.

### Recipe 4: Brainstorming

```txt
temperature:     1.0
top-p:           0.95
frequency_penalty: 0.5
presence_penalty:  0.8
max_tokens:      2000
```

Why: Maximum variety. High temperature for unexpected ideas. High presence penalty so the model does not keep restating the same concept in different words. You want breadth, not depth.

### Recipe 5: Data Extraction

```txt
temperature:     0.0
top-p:           0.3
frequency_penalty: 0.0
presence_penalty:  0.0
max_tokens:      500
```

Why: You want the same structured output every time. Zero temperature means deterministic results. Low top-p keeps the model in "safe" territory. No penalties needed.

### Recipe 6: Chat / Conversation

```txt
temperature:     0.7
top-p:           0.9
frequency_penalty: 0.3
presence_penalty:  0.3
max_tokens:      1000
```

Why: The "it just works" setting. Natural-sounding but not wild. Light penalties to keep the conversation from looping. This is what most chat apps use under the hood.

---

## The Settings Nobody Talks About

### Seed

Some APIs let you set a `seed` value. Same seed + same prompt + same parameters = same output. Useful for testing and reproducibility.

```txt
seed: 42
# Run 1: "The quick brown fox jumps over the lazy dog."
# Run 2: "The quick brown fox jumps over the lazy dog."
# Run 3: "The quick brown fox jumps over the lazy dog."
```

Without a seed, even temperature 0 can produce slightly different results across different model versions or API hosts.

### Stop Sequences

Tell the model where to stop. If you are generating a list, you might set the stop sequence to `\n` so it stops after one line.

```txt
stop: ["\n", "###"]
# The model will stop generating when it hits a newline or "###"
```

### System Message Temperature

Some APIs let you set different temperatures for the system message vs the user message. In practice, almost nobody uses this. But it exists.

---

## The Honest Truth

Most of the time, the defaults are fine. Temperature 0.7, top-p 0.9, no penalties. The model providers have tuned these for general use, and they work.

The reason to learn these parameters is not because you need to tweak them every time. It is because when something goes wrong — the output is too repetitive, too random, too scattered, too boring — you will know which knob to turn and in which direction.

The value is not optimization. It is diagnosis.

>[!note] The real skill
>The real skill is not knowing the perfect settings.
>
>It is knowing what "too hot" and "too cold" look like, and how to adjust.
>
>Start with defaults. Change one thing at a time. See what happens.
>
>After a dozen iterations, you will have better intuition than any guide can give you.
