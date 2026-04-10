# LinkedIn Strategy & Automation Plan

## 1. Why LinkedIn, and what role the website plays

The website alone is **passive** — it converts leads but doesn't generate them. The real question is always traffic source.

For a B2B pharma company like COMIX, the buyer pool is small and specific — roughly **200-500 decision makers globally** (BD directors, licensing leads, regional GMs at mid-size European and Asian pharma companies). You're not marketing to millions. You're building relationships at scale with a very specific group of people.

The website's job is **credibility** — something people check after they hear about you, not the first touchpoint. LinkedIn is what creates the first touchpoint.

---

## 2. The core principle — you are the product

No pharma BD director signs a market access contract based on a website. They sign based on:
- A conversation with someone they trust
- A referral from someone they trust
- Evidence that you've done it before

LinkedIn marketing here isn't traditional marketing — it's **systematic relationship building at scale.**

---

## 3. The three-layer model

**Layer 1 — Credibility** (already have this)
The website, the numbers ($17.9M sales, 6+ GCC markets, 10+ global partners), the services breakdown. ✅

**Layer 2 — Awareness** (the gap)
Getting in front of the right 200 people. Channels: LinkedIn content, conference presence (CPhI, Arab Health, DUPHAT), and direct outreach to a targeted list of 50-100 companies.

**Layer 3 — Conversion** (addressed with the contact form)
The form is now live. Before, the friction between "I'm interested" and "I'm talking to COMIX" was too high.

---

## 4. Perplexity research findings

**The space is fragmented and unowned.**
GCC/Middle East pharma market access content exists on LinkedIn but is spread across in-house MA professionals, independent consultants, and event pages. Nobody has branded themselves as the dedicated "GCC market access pathfinder for global manufacturers."

**What performs best:**
- Regional growth data tied to commercial implications (IQVIA-style insights)
- Regulatory updates with a "what this means for you" angle — not just linking to SFDA news
- Vision 2030 / localization narratives
- Prescriptive "mistakes to avoid" content

**Format:** Short-to-medium text posts with bullet takeaways outperform link shares and long articles. Conversational but data-backed tone beats dry news-wire style.

**Five content angles benchmarked:**

| Angle | Gap found? |
|-------|-----------|
| EMA/FDA approvals → GCC registration pathway | Clear gap — nobody does this as a recurring series |
| IQVIA market data on therapy area growth | Others post about it, but nobody ties it to launch sequencing and access implications |
| GCC regulatory updates (SFDA, UAE MOH) | Covered but always stops at "here's the update" — nobody adds the operational impact brief |
| Mistakes foreign pharma makes entering Middle East | Largely unoccupied — no structured series exists |
| Deal spotlights / case studies | Done as PR announcements only — nobody unpacks the actual access pathway behind the deal |

**Verdict:** LinkedIn is viable for lead gen in this niche. 2-3 posts/week for 6-12 months could realistically build a recognized brand and generate 3-10 qualified lead conversations per quarter.

---

## 5. The content system

**Three rotating content pillars:**

| Pillar | Cadence | Data source | Example |
|--------|---------|-------------|---------|
| 🌍 Global → GCC Translator | 1x/week | EMA/FDA approval feeds | New molecule approved in EU → what the UAE/GCC registration path looks like, step by step |
| 📊 GCC Market Radar | 1x/week | In-house IQVIA data | Therapy area trends, growth data, manufacturer gaps in UAE |
| ⚠️ Mistakes & Playbooks | 1x/week | Internal experience | "3 assumptions European pharma companies make about UAE pricing that kill their GCC launch" |

**Positioning decision:** Commercial access strategy wins over pure regulatory navigation for lead generation. Regulatory steps are included within posts as the "added value" layer (making the opaque transparent), not the main angle. Regulatory content builds credibility, commercial content creates urgency to call.

---

## 6. The automation vision

Because the team is too busy to write posts manually, the full pipeline to build:

```
1. Scan LinkedIn + internet for newly released / well-performing molecules
          ↓
2. Pull UAE performance from IQVIA data
          ↓
3. Identify the gap — strong global performance, low UAE presence, few manufacturers
          ↓
4. Generate post via Claude API
   (global context + UAE numbers + gap analysis + registration steps + CTA)
          ↓
5. WhatsApp approval — draft sent to phone, one-tap approve/reject
          ↓
6. Auto-post to LinkedIn on schedule (2-3x/week)
```

**Unfair advantage:** IQVIA data in-house. Nobody else posting in this space has access to real UAE sales figures. Posts contain numbers nobody else can publish.

---

## 7. The post format (proven example)

Built from real IQVIA data using **Rimegepant (Nurtec ODT)** as the example:

**Hook:** Number contrast — global sales vs UAE reality  
**IQVIA block:** AED figures, YoY growth, manufacturer count  
**Gap:** Which competitors are absent from UAE  
**Registration steps:** UAE MOH pathway, realistic timelines  
**CTA:** DM for full market access assessment  

### Real example post (Rimegepant):

> **The UAE migraine market just doubled in one year. One company is capturing all of it.**
>
> Rimegepant (Nurtec ODT) — a CGRP receptor antagonist for acute migraine:
>
> 📊 2022: AED 7.3M  
> 📊 2023: AED 36.7M  
> 📊 2024: AED 69.7M → +90% YoY, +860% since launch
>
> ~40,000 patient packs dispensed in 2024. One manufacturer: Pfizer.
>
> Atogepant (Qulipta – AbbVie) and ubrogepant (Ubrelvy – AbbVie) are approved in US/EU with comparable efficacy. Neither has meaningful UAE registration.
>
> **UAE MOH registration pathway for this class:**
> → Step 1 — Regulatory gap analysis & patency check: 2-3 weeks  
> → Step 2 — eCTD dossier prep (GCC Module 1): 6-8 weeks  
> → Step 3 — MOH submission + pharmacovigilance: 3-4 months  
> → Step 4 — Pricing approval: 4-6 weeks  
> → Step 5 — QCL clearance: 2-3 weeks  
> **Total: 6-8 months from decision to authorized.**
>
> 📩 DM us if you want the full UAE CNS market access assessment.

---

## 8. IQVIA data summary

File: `data/iqvia.csv` — 1.16M rows, UAE pharmaceutical sales 2020-2025.

**Key market facts (2024):**
- Total UAE pharma market: **AED 22.6 billion (+17% YoY)**
- 2,281 unique molecules, 919 manufacturers
- Two segments: Private Market and LPO (hospital/public sector)

**Top molecules by 2024 sales:**
| Molecule | 2024 Sales (AED) | Manufacturers | YoY |
|----------|-----------------|---------------|-----|
| Tirzepatide | 1.6B | 1 | +95% |
| Semaglutide | 514M | 1 | +34% |
| Metformin | 621M | 21 | +14% |
| Dupilumab | 292M | 1 | +31% |
| Pembrolizumab | 262M | 1 | +17% |

**566 molecules** with a single manufacturer and >AED 500K sales — these are the primary gap/opportunity signals for post generation.

**CSV parsing note:** Headers contain newline characters — always strip with `.replace('\n','').strip()` when parsing.

---

## 9. What's needed to build the pipeline

- [ ] Decide who posts — company page or personal profile (personal gets 5-10x more reach on LinkedIn)
- [ ] Claude API key for post generation
- [ ] EMA/FDA approval feed (RSS or web scraping)
- [ ] LinkedIn API access or scheduling tool (Buffer, Hootsuite)
- [ ] WhatsApp approval workflow (could use WhatsApp Business API or simple email approval)

---

## 10. Realistic timeline for results

| Period | Expected outcome |
|--------|-----------------|
| 0-3 months | Planting seeds, low direct return |
| 3-6 months | First conversations turning into proposals |
| 6-12 months | Pipeline filling consistently |

B2B pharma sales cycles are 3-9 months from first contact to signed contract. Start now, be consistent.

---

## 11. Next steps

1. Decide personal vs company page for posting
2. Build the automation pipeline (IQVIA signal detection → Claude post generation → approval → scheduling)
3. Start with manual posts using the proven format above while automation is being built
4. Target 50-100 companies for direct outreach in parallel
