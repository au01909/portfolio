# Portfolio artifact manifest

Checked 2026-10-11. "HTTP 200" means the URL responded. It does not prove the content is correct or publicly readable. This file is internal and is not shown on the site.

## On the site

| Artifact | URL | Type | Verification | Supports | Notes |
|---|---|---|---|---|---|
| TradeMirror live | https://trademirror-g4gj.onrender.com/ | Live app | 200; sample review loaded in a browser | Flagship | Render free tier cold-starts |
| TradeMirror source | https://github.com/au01909/trademirror | Repo | Cloned; `npm ci`, 14/14 server tests, `tsc --noEmit` clean | Flagship | LLM guardrail eval (README: 23/23) needs an API key, not re-run |
| Repo Copilot source | https://github.com/au01909/repo-copilot-agentic | Repo | Cloned and read; tests not re-run (a dependency would not install locally) | Flagship | README reports 31/33 tests passing |
| CardioVision live | https://au01909.github.io/CardioVision-Predictive-Analytics-for-Cardiovascular-Health/ | Live app | 200; redirects to a Streamlit Community Cloud app that can be slow to wake | Flagship | Educational project |
| CardioVision source | https://github.com/au01909/CardioVision-Predictive-Analytics-for-Cardiovascular-Health | Repo | Cloned; metrics from `artifacts/metrics.json` (83.6% accuracy, 86.5% F1, ROC AUC 0.918, recall 97.0%) | Flagship | README still says 80.3%; update it to match |
| Full-Stack Event Ops live | https://3-111-38-220.sslip.io | Live app | 200 | Key project | Works only while the EC2 instance runs |
| Full-Stack Event Ops source | https://github.com/au01909/full_stack_event_ops | Repo | Cloned; README and screenshots read; tests not run | Key project | Screenshot on the site is the repo's own |
| Rever Pendant source | https://github.com/au01909/Rever-Pendant | Repo | Cloned; README and file layout read | Key project | Thin README |
| Action Prediction (LSTM) source | https://github.com/au01909/real_time_violence_detection | Repo | Cloned; README read | Key project | Repo name differs from the project title |
| YourNearBest Plumbing | https://yournearbestplumbingservices.com | Client site | 200; content and metadata read | Client work | Site's own "2,400+ jobs / 98%" figures are not repeated |
| TRS Office of Foreign Affairs | https://trsoofa.com | Client site | 200; content read | Client work | Political organisation's site; confirm you want it public |
| Playwright framework | https://github.com/au01909/playwright-automation-framework | Repo | Cloned; README read; tests not run | Supporting | Targets the plumbing site |
| Qwen QLoRA | https://github.com/au01909/qwen2.5-3b-qlora-customer-support | Repo | Cloned; `RESULTS.md` has no generated results | Supporting | No performance claim on the site |
| Network Performance Analyzer | https://github.com/au01909/network-performance-analyzer | Repo | Cloned; tests present, not run | Supporting | |
| Chatbots, MCP assistant | https://github.com/au01909/chatbots, https://github.com/au01909/AI-assisstant-MCP | Repos | Cloned; READMEs read | Supporting | |
| Sudoku solver | https://sudoku-solver-lvng.onrender.com | Live app | 200 | Supporting | |
| GitHub profile | https://github.com/au01909 | Profile | 200 | Contact | |
| LinkedIn | https://www.linkedin.com/in/aryan-uppuganti-9079b425a/ | Profile | Taken from resume.pdf and the Notion hub; LinkedIn blocks bots (999) | Contact | Not opened in a browser |
| LeetCode | https://leetcode.com/u/au01909/ | Profile | Given by you and in resume.pdf; bot-blocked (403) | Contact | Not opened in a browser |
| Medium profile | https://medium.com/@au01909 | Profile | RSS feed returned your stories; page is bot-blocked (403) | Contact | |
| Swiggy "Help Me Decide" | https://medium.com/@au01909/help-me-decide-turning-swiggy-from-a-marketplace-into-a-decision-assistant-88a055e64db1 | Article | URL appears in the Medium RSS feed and the Notion hub | Product case study | Full article not read (403); the site summarizes your Notion page |
| Google Maps case study | https://app.notion.com/p/3ece722e7e2781d3bb7af2fe35c50a89 | Notion | Read via the Notion connector | Product case study | |
| Paper Boat Zero case study | https://app.notion.com/p/3dee722e7e27815cb4f2d969cf01ac55 | Notion | Read via the Notion connector | Product case study | |
| TradeMirror full case study | https://app.notion.com/p/3dee722e7e2781fbb370dbf75acd5a0f | Notion | Read via the Notion connector | Flagship | |
| Notion hub | https://app.notion.com/p/3dee722e7e2781d39356eabbe8fc3490 | Notion | Read via the connector; anonymous requests only return the JS shell | Contact | **Confirm every Notion page is shared to the web**, or visitors hit a login wall |

## Not on the site

| Item | Status |
|---|---|
| Resume PDF (https://raw.githubusercontent.com/au01909/Resume-Software-Engineer/main/resume.pdf, 200) | Removed from the site at your request. The PDF is stale (says Zeta "Present"); update before linking again |
| Portfolio source link | Removed from the site at your request |
| AI product teardowns (OpenAI, YouTube, WhatsApp) | In progress; Notion page https://app.notion.com/p/3dee722e7e27815ba6efff9322f1dfa7. Add when live |
| Product Analytics RCA, Voice of Customer Copilot | Not found in Notion, Drive or Downloads |
| AI QA assistant case study (private PDF) | Internal to Zeta; only a public-safe summary is on the site |
