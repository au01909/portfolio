# AI engineering standards

The practices I apply, each tied to where it appears in my projects. A standard marked *gap* is one I have not yet met in that project.

## Secure coding
- **Validate at the boundary.** Schema-validate every external input (Zod in TradeMirror). Restrict any free-text field that reaches a prompt to a safe charset.
- **Resolve, then check.** Resolve real paths and reject anything outside the allowed root before reading (Repo Copilot `read_repository_file`).
- **Bound everything.** Request size, file size, file count, retries and timeouts. *Gap:* TradeMirror has no explicit model-call timeout; Repo Copilot does not clamp search `top_k`.
- **Secrets** live in environment variables, are gitignored, and never reach the browser or logs. Scan repos before publishing. *Gap:* no CI secret scanning yet.
- **Rate-limit** endpoints that cost money or CPU (TradeMirror: 5/min per IP, per endpoint). *Gap:* Repo Copilot has none.
- **Auth and authorization** are server-side. *Gap:* both demos have none; neither should hold real user data.
- **Test the hostile case**, not only the happy path (injection-shaped IDs, path traversal, duplicate rows).

## Agent permissions
1. Start read-only with typed tools, each validating its own arguments and returning structured errors.
2. Scope tools to one session's data. Never accept an arbitrary path or URL without an allowlist.
3. Never execute retrieved content. Keep code execution off by default and allowlisted.
4. Before an agent can write files, run a shell or call external systems: require human approval per action, run in a sandbox with no secrets, use scoped short-lived credentials, and log every call.

## Prompt-injection defenses
- Treat retrieved text, uploaded files and user questions as data, and say so in the system prompt.
- Keep untrusted text out of prompts where possible (TradeMirror sends only validated IDs and computed values).
- Validate output and drop anything outside the allowed set (invented trade IDs).
- Limit what a successful injection could do: read-only tools, no secrets in context.
- These reduce risk. They do not make a system immune, and I do not claim that.

## Output validation
Require structured output, re-validate it with a schema, check identifiers against the real source set, and cite file and line for factual claims. *Gap:* Repo Copilot does not yet check that cited lines support the sentence.

## Evaluation
- Deterministic checks for what can be checked exactly: numeric grounding, forbidden language, ID integrity.
- Gold datasets with planted answers for the deterministic layer.
- Adversarial cases (prompt injection, out-of-scope questions) in every LLM eval.
- Report what is not evaluated (explanation quality, retrieval benchmarks).

## Human review
Humans approve consequential actions and review generated artifacts before they run (generated tests at Zeta). A person remains the decision-maker where the output affects money, health or access.

## Failure handling
Design the fallback first. A model outage, quota error or invalid output should reduce richness, not break the product (TradeMirror templates; Repo Copilot extractive mode and ADK-to-workflow fallback). Log failures server-side so a fallback is not mistaken for success, without logging sensitive data.
