# Portfolio audit and quality report

Updated 2026-10-11. Branch `portfolio-v2`. Stack unchanged: React 19, TypeScript, Vite, Tailwind 3, React Router `HashRouter`, GitHub Pages.

## 1. Original issues

| Area | Finding |
|---|---|
| Identity | Hero said "AI systems and test automation frameworks"; a terminal panel and the About card showed Zeta as a current role. You have graduated. |
| Links | LinkedIn, GitHub and LeetCode pointed to platform homepages; the MCP link had a leading space. |
| Duplicates | "AI Document Analyst" and "AI Chatbot Suite" linked to the same repo. |
| Unsupported or wrong metrics | CardioVision "98% accuracy" (repo: 83.6%); Playwright "60%", Rever "100% / 24/7", chatbots "80%", MCP "70%", LSTM "96%, under 100 ms": none had a source in its repo. |
| Overstated | Qwen "evaluated multiple configurations" although the repo ships no results; Zeta text named internal domains and tooling. |
| Structure | Seven equal project cards, no case studies tied to evidence, no product or leadership content. |
| Accessibility | No skip link, unlabeled nav, nav broken from detail pages under `HashRouter`. |
| Missing | Screenshots, diagrams, docs, social metadata, per-route titles, a real favicon (it was the default Vite logo). |

## 2. Current state of the site

Order: hero → projects (3 case studies, 3 more key projects, 2 client sites) → engineering principles → product case studies → technical deep dives → experience → supporting projects → education and skills → leadership and sports → about → contact.

- **Projects:** TradeMirror, Repo Copilot and CardioVision have case-study routes with screenshot or diagram, highlights and detailed sections. Full-Stack Event Ops (with live link and screenshot), Rever Pendant and Action Prediction (LSTM) are key projects. YourNearBest Plumbing and TRS Office of Foreign Affairs are client work with live links.
- **CardioVision metrics** now come from the repo's latest `artifacts/metrics.json`: 83.6% accuracy, 86.5% F1, ROC AUC 0.918, recall 97.0%.
- **Leadership and sports:** hackathons, Social Media Lead, NCC and Scouts, table tennis captaincy, free-time activities. Facts come from the previous site text; the one-line takeaways are written copy.
- **Removed at your request:** resume links, portfolio-source links, the control-status tables and verified/not-verified tables, negative and incomplete-work copy, the AI product teardowns.
- **Contact:** email, phone (added at your request), LinkedIn, GitHub, LeetCode, Medium, Notion.
- **Design:** per-route titles, Open Graph metadata, new "au" favicon, skip link, semantic markup, nav switches to a menu below 1024 px, type and content scale up on screens over 1800 px.
- Removed earlier: the terminal panel, hobbies tag cloud, interests list.

## 3. Security and privacy review of the site

- Secret scan (common key formats and the phone number pattern, before the phone was added) of this repo and every cloned repo: nothing found.
- The site is static with no API calls. Third-party requests are font CSS (Fontshare, Google Fonts) and outbound links.
- Your phone number and email are public on the page by your choice.
- Zeta content: resume-level bullets only; the internal QA assistant has no page and no architecture detail. The private case-study PDF is not published.
- **Needs your decision:** the Zeta figures "198 tickets", "96 scenarios, 48 automated", "25% fewer re-deployments" and "~90%" are not in your resume. 198 defects and 60% coverage also appear in your Notion hub; the rest are only from your earlier site text. I kept them unchanged and did not verify them. Check them against your employer's disclosure expectations.
- The TRS client site belongs to a political organisation; decide whether you want it listed under your name.
- Security findings in your own repos (not shown on the site): Repo Copilot passes a user-supplied URL to `git clone` with no allowlist; TradeMirror and Repo Copilot have no auth and open CORS; TradeMirror has no explicit model-call timeout; Repo Copilot has no malicious-repository-content test.

## 4. Accessibility and responsive checks

- **Responsive:** programmatic check of home plus three case-study routes at 11 widths from 320 to 2560 px: no horizontal overflow, no layout collisions. Screenshots reviewed at 320, 390, 768, 1024, 1360 and 2560 px. The mobile menu opens, navigates and closes.
- **Contrast:** ink/bg 14.4, muted/bg 5.3, muted/surface 4.7, primary/bg 6.1, footer text 4.6, Contact eyebrow raised above 4.5.
- **Keyboard:** native links and buttons, global focus ring, reduced-motion rule retained, no blinking animation.
- **Not done:** screen reader, axe or Lighthouse, Safari or Firefox, real devices. Sections fade in on scroll, so printing or a full-page capture shows blank areas until scrolled.

## 5. Build, lint, tests

| Check | Result (2026-10-11) |
|---|---|
| `npm ci` | Succeeded |
| `npm run lint` | No findings |
| `npm run build` | Succeeded; JS 292 kB (92 kB gzip) |
| Portfolio automated tests | None exist; none added |
| Preview and routes | Home and case-study routes render; console shows no errors |
| Source-project tests | TradeMirror 14/14 pass (run by me). Others not run, see the manifest |

## 6. Links and blockers

- All repo, live-app and client-site URLs return 200. Medium, LeetCode and LinkedIn block bots (403/999) and were verified another way.
- Notion pages return 200 but I cannot tell if they are public. Several links on the site go to them.
- CardioVision's live app can be slow to wake (a Streamlit sleep screen), so it has no screenshot.
- Event Ops live link works only while the EC2 instance runs.
- Not found, so not on the site: Product Analytics RCA, Voice of Customer Copilot.
- The resume PDF is out of date; it is no longer linked from the site.

## 7. Deployment status

Not deployed. Nothing is committed or pushed. The Pages workflow (`.github/workflows/deploy.yml`) deploys on pushes to `main` and was not changed. No deployment of this version has been verified.

## 8. Hiring-manager critique

- **Identity in ten seconds?** Mostly. Name, headline, intro and three evidence links fit on the first screen; the intro is long.
- **Strong software engineering?** Yes: TradeMirror (typed validation, tests, deployment), Event Ops (real concurrency, locks, containers, live), plus two live client sites. Weakest signal: nothing shows real end users.
- **Meaningful AI engineering?** Yes: deterministic core with LLM explanation and schema-checked output, hybrid retrieval, a bounded agent workflow, typed tools.
- **Product judgment visible?** Yes in TradeMirror, Swiggy, Maps and Paper Boat Zero. The summaries are short; the full text sits behind Medium and Notion links.
- **Security evidenced in code?** In the repos, partly (injection and path-traversal tests, rate limits). The site shows the practices, not an audit.
- **Easy to verify?** Yes: live app and source one click from most cards.
- **Metrics substantiated?** For the projects, yes. For Zeta only 60% coverage, 40% and 198 defects have a second source.
- **Behavioral signal?** The leadership section gives specific, checkable stories (hackathons, captaincy, 40% engagement). Add one or two concrete anecdotes if you want it stronger.

**Top three improvements**
1. Fix the real gaps in the repos: clone-URL allowlist and a malicious-content test for Repo Copilot, auth for both demos, a timeout in TradeMirror, green tests in CI.
2. Make the product work verifiable: share the Notion pages publicly, add the RCA and VoC artifacts, run one small real validation.
3. Reconcile the Zeta numbers with your resume, update the resume PDF, add a CardioVision screenshot and run axe or Lighthouse.
