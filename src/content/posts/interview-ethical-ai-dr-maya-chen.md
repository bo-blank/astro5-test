---
title: "Interview: Building Ethical AI with Dr. Maya Chen"
description: "A conversation with AI ethics researcher Dr. Maya Chen about the real challenges of building fair, transparent, and accountable AI systems—and why it's harder than most people think."
pubDate: 2024-05-03
author: "David Park"
image:
  url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  alt: "Professional headshot in discussion about artificial intelligence and ethics"
category: "Interview"
tags: ["ai", "ethics", "interview", "technology", "responsible-ai"]
featured: false
draft: false
---

Dr. Maya Chen is a leading voice in AI ethics research. With a PhD in Computer Science and a background in philosophy, she's spent the last decade investigating how we build AI systems that are fair, transparent, and accountable. She recently published "Values in Code: Ethics in an Algorithmic Age" and sat down with us to discuss what real AI ethics looks like—and why it's so much harder than the tech industry wants to admit.

---

## On the AI Ethics Industry

**Q: There's been an explosion in AI ethics initiatives over the last few years. How do you evaluate the real impact?**

**A:** Honestly? Most of it is theater. Don't get me wrong—there are serious people doing serious work. But there's also an enormous amount of what I call "ethics washing." Companies hire ethics officers, create ethics boards, publish principles about responsible AI. And then they ship products that violate those principles.

The problem is that ethics work has become decoupled from actual product decisions. You can have the best ethics research in the world, but if the incentive structure of your company is to maximize engagement and minimize costs, ethics becomes something you do to manage reputation, not something that shapes decisions.

I worked with one major tech company that had a 50-person ethics team. They did rigorous audits of algorithmic bias. But they had no veto power. When they found discriminatory patterns, they could recommend changes, but the product team could override them. Guess what happened?

**Q: What should real AI ethics infrastructure actually look like?**

**A:** First, ethics needs to be embedded in product development from the beginning, not bolted on at the end. That means involving ethicists, social scientists, and affected communities in the design phase, not just in auditing.

Second, ethics teams need real power. If an ethics team identifies a serious problem, there needs to be a mechanism to actually address it—not just to document it and move on.

Third—and this is crucial—we need external oversight. Internal ethics boards are important, but they're not sufficient. We need external audits, regulatory frameworks, and spaces where affected communities can actually contest algorithmic decisions.

---

## On Fairness and Its Limits

**Q: Fairness is one of the big concepts in AI ethics. How do you think about it?**

**A:** Fairness is tricky because it's not a technical problem—it's a values problem disguised as a technical one.

Take hiring algorithms. What does "fair" mean? Does it mean demographic parity—the same percentage of women and men are hired? Or does it mean equal opportunity—that gender isn't used in the decision? Or does it mean equal outcomes—that outcomes are statistically similar across groups?

These are fundamentally different definitions, and they can lead to contradictory decisions. You can't optimize for all of them simultaneously. So which one you choose is a values judgment, not a technical one.

What a lot of AI ethics work does is try to make these values choices seem technical. We talk about "fairness metrics" as if we're doing science, when really we're making political choices about what we think society should prioritize.

**Q: So is fairness even possible in AI systems?**

**A:** I think "fairness" is the wrong frame. I prefer to think about it in terms of reducing harm. Can we build AI systems that cause less harm than the systems they replace? That's a lower bar than perfect fairness, but it's more achievable and more honest.

That means asking: Who could be harmed by this system? How do we measure that harm? And are we comfortable with the level of harm we're causing?

For some applications—especially high-stakes ones like criminal justice or hiring or lending—I'd argue the bar should be very high. Maybe so high that you shouldn't use AI at all. For other applications, the tradeoffs might be worth it.

But you have to be explicit about that. You have to say: "We're using this algorithm. Here's who it might harm. Here's why we think the benefits outweigh the harms." And you have to actually listen when affected communities say, "No, you're wrong."

---

## On Transparency and the Limits of Explainability

**Q: A lot of emphasis in AI ethics is on making systems "explainable"—so people understand how decisions are made. How important is that?**

**A:** It's important, but it's not a panacea. And there's something almost naive about the assumption that if we just explain the algorithm better, people will accept it.

There's this fetish in AI ethics for interpretability and explainability. And sure, understanding how a system works is better than not understanding it. But here's what that misses: a transparent algorithm that's unjust is still unjust.

Let me give you an example. A lending algorithm that explicitly uses zip code as a proxy for creditworthiness is explainable. You understand exactly why the decision was made. But the zip code is correlated with race, so the algorithm is using a proxy for discrimination. Explaining that doesn't make it better. It just makes the discrimination transparent.

So transparency is necessary but not sufficient. We also need accountability—mechanisms where people harmed by the algorithm can actually challenge it.

**Q: What does accountability actually look like?**

**A:** It's labor-intensive and not scalable in the way that tech companies want. It means:

- Humans actually reviewing appeals of algorithmic decisions
- External audits by people not employed by the company
- Legal frameworks where companies can be held liable for harms
- Affected communities having input on what fairness metrics even mean for their use case

None of this is automated. It requires resources. It requires acknowledging that the algorithm is a tool that should serve people, not the other way around.

---

## On the Real Barriers to Ethical AI

**Q: What's the biggest barrier to building more ethical AI systems?**

**A:** Honestly? Economics. The companies with the most computational power and data to train sophisticated AI systems also have the most to gain from deploying them rapidly. And the incentive structure rewards speed over carefulness.

If you're an AI researcher at a major company, your success is measured by model performance, by speed to market, by engagement metrics. Your success is not measured by whether your system causes harm to vulnerable populations. So ethically-minded people find themselves in systems that reward the opposite of ethical behavior.

That needs to change. We need business models that aren't entirely dependent on engagement, on growth, on scale. We need regulatory frameworks that make harm-causing expensive. We need government investment in AI research that isn't motivated by extracting value.

**Q: Is regulation the answer?**

**A:** Regulation is necessary but not sufficient. You need well-designed regulation that actually addresses the problems instead of just making companies hire more compliance officers. That's hard to do because the technology is moving faster than governance, and companies have far more resources to lobby than communities do.

But more fundamentally, we need a culture shift. We need to stop treating AI as an unalloyed good. We need to ask hard questions about whether we should automate certain decisions at all. And we need to give serious weight to the people who say, "This system harms my community. We don't want it."

---

## On Hope and Realism

**Q: Are you optimistic about the future of AI ethics?**

**A:** I try to be. I see smart, dedicated people working on these problems. I see affected communities organizing and demanding accountability. I see regulations starting to emerge, however imperfectly.

But I'm also realistic. The incentives are stacked toward moving fast and breaking things—or in the case of AI, moving fast and harming people. And moving fast has been profitable. It's hard to get companies to slow down when speed is working economically.

What gives me hope is that there's growing awareness that this is unsustainable. That we can't just ship systems that harm people and apologize afterward. That there are real human costs to optimization.

**Q: What should people do if they care about ethical AI?**

**A:** A few things:

First, be skeptical. When someone tells you an algorithm is "objective" or "neutral," be very skeptical. Every algorithm reflects values. Ask whose values. Ask who benefits.

Second, demand transparency and accountability. If a system affects you—in hiring, in lending, in what content you see—you should be able to understand how and why it works, and you should have recourse if you think it's wrong.

Third, support research and activism that's independent of the companies building the systems. Universities, nonprofits, community organizations—these are where the most honest work on AI ethics is happening.

And finally: remember that AI is not destiny. We can choose not to automate certain decisions. We can choose to deploy technology more cautiously. We can choose to prioritize human flourishing over optimization metrics. But only if we demand it.

---

**Dr. Maya Chen's latest book, "Values in Code: Ethics in an Algorithmic Age," is available wherever books are sold. She regularly publishes research through the Stanford Internet Observatory and speaks internationally on AI ethics and governance.**