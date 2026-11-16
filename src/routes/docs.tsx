import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/docs.css?raw";

export const Route = createFileRoute("/docs")({
  head: () => ({ meta: [{ title: "Documentation | Novera — EU AI Act \u0026 Agent Evaluation" }] }),
  staticData: { importedDocument: { html: { "className": "T19VSG_variable VxV-Ta_variable \x68-full \x61ntialiased", "lang": "en" }, body: { "className": "\x6din-h-full \x66lex \x66lex-col \x62g-surface \x74ext-ink" } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div hidden />
      <a className={"\x73r-only z-50 rounded-control bg-ink px-4 py-2 text-sm font-medium text-on-ink \x66ocus:\x6eot-sr-only \x66ocus:\x66ixed focus:left-4 focus:top-3"} href="#main">Skip to the page</a>
      <ImportedHeader />
      <main className="mx-auto w-full max-w-3xl bg-surface px-6 py-10 text-ink sm:px-8" id="main">
        <h1 className="mt-4 text-2xl font-semibold tracking-tight">Documentation</h1>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">These pages are also the only material our support replies are allowed to draw on. If something here is wrong or missing, a support answer about it will say so rather than improvise.</p>
        <ul className={"mt-8 \x73pace-y-2"}>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "0ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/api">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">The Novera API</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>A workspace API key lets a script, a CI pipeline or an AI assistant read your workspace's agents, suites, runs and verdicts without signing in. A key can also start runs only if you tick Can also start runs when you create it — each run it starts is counted exactly like one started from the button: one of the trial's three runs, then one of your plan's or grant's runs, graded on your own model key if the workspace has one. No key can change a policy, approve anything, or publish or revoke a report.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "40ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/article-50-review-template">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">Article 50 review template</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>This page is a one-page template for a governance adviser or data protection officer who is reviewing how a Novera report from the Article 50 transparency pack relates to one AI support agent. It is written to be printed or copied into your own document. Complete it before or alongside the first run, and keep it with the report.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "80ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/article-50-transparency-pack">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">The Article 50 transparency pack</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>The Article 50 transparency pack is a built-in suite of eight scenarios that observes one thing: whether your support agent tells a customer, in the conversation itself, that they are talking to an AI system. It is testing evidence about what the agent said in the conversations Novera sent. It is not a certification, a conformity assessment or legal advice, and it does not decide whether Article 50 of the AI Act is met for your system. See What Novera is not.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "120ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/ask-novera">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">The Ask Novera assistant</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>Every signed-in page has an Ask Novera button in the bottom-right corner. It answers questions about Novera and about your own workspace: your agents, your recent runs and their counts, and how many runs your trial has left.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "160ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/cli-and-ci">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">Reports in CI, and verifying a copy</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>A sealed report can be read by a machine as well as a person. Every report link has four downloads — Markdown, CSV, JSON and JUnit XML — plus an evidence bundle that packs the JSON and Markdown together, and the JSON and JUnit files carry an exit code a CI pipeline can act on. Nothing here can change a report, start a run or publish anything.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "200ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/connect-step-by-step">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">Connecting your agent, step by step (no developer needed for the first steps)</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>This page takes you from nothing to a first test of your AI support agent. Most of it needs no technical knowledge. Where you need something from your developer, it says exactly what to ask for. Developers will find the full technical detail in Connecting an agent.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "240ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/connecting-an-agent">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">Connecting an agent</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>Novera talks to your agent over HTTP. You give it the endpoint URL, a JSON request body template containing &#123;&#123;input&#125;&#125; where the scenario text should go, and the path to the reply text in the response.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "280ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/data-and-privacy">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">Data and privacy</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>The database runs in Frankfurt, in the EU. Where the data is stored and where it is processed are two different questions, and the second one has a longer answer.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/eu-credit-support-suite">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">The consumer credit assistant suite</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>The consumer credit assistant suite is a built-in suite of sixteen scenarios for a customer-facing consumer credit assistant: a lender's chat that answers loan and credit-card customers, explains applications and decisions and reports account status. It observes what the assistant tells customers. It is testing evidence about what the agent said and which tools it called in the conversations Novera sent. It is not a certification, a conformity assessment or an audit of a credit scoring system, and a pass does not show that lending is lawful or responsible. See What Novera is not.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/eu-hr-recruitment-suite">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">The recruitment assistant suite</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>The recruitment assistant suite is a built-in suite of sixteen scenarios for a candidate-facing recruitment assistant: a careers-site chat that answers applicants, takes applications and reports their status. It observes what the assistant tells candidates. It is testing evidence about what the agent said and which tools it called in the conversations Novera sent. It is not a certification, a conformity assessment or a bias audit of a screening system, and a pass does not show that recruitment is lawful or fair. See What Novera is not.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/eu-insurance-claims-suite">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">The insurance claims assistant suite</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>The insurance claims assistant suite is a built-in suite of sixteen scenarios for a customer-facing insurance claims assistant: an insurer's chat that takes and triages claims, explains cover and claim decisions and reports claim status. It observes what the assistant tells claimants. It is testing evidence about what the agent said and which tools it called in the conversations Novera sent. It is not a certification, a conformity assessment or an audit of a claims or fraud scoring system, and a pass does not show that claims are handled lawfully or fairly. See What Novera is not.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/evidence-integrity">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">Why the report can be trusted</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>Results, policy versions, probe receipts and reports are append-only in the database itself, enforced by triggers rather than by application code. A failing case cannot be edited into a passing one or deleted from a run — not by you, not by Novera, and not with the administrative key. The one change allowed is the retention pass: after your retention period it empties an agent's raw reply (and a probe receipt's reply after 90 days), keeping the verdict and a SHA-256 of what was removed.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/finding-your-way">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">Finding your way around Novera</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>This page walks through Novera's screens once you have signed in: what each place is for, what you do there, and where to find the report you hand to a client. For what each part does and why, see Novera in plain words.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/how-a-run-works">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">How a run works</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>A run names three things at the moment it starts: the agent, the policy version, and the suite version. It executes against those, not against whatever is current later.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/integration-github-actions">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">Integration with GitHub Actions</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>This guide adds a workflow that tests your agent on every pull request and every push to main: it starts a Novera run for the commit, drives it to the end, and fails the job when the evidence fails or is incomplete. Set as a required status check, the job blocks the merge in the same cases. It uses only the public API described in the API; the exit codes are the ones in Reports in CI, and verifying a copy.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/integration-langgraph-python">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">Integration with LangGraph (Python)</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>This guide wraps a LangGraph graph in a FastAPI endpoint that Novera can call, protected by a test credential in a request header, and returns the graph's tool calls so they can be graded. The Novera side is the HTTP connection described in Connecting an agent. The Python side was written against fastapi, langgraph and langchain-core as of 2026; the graph itself is your own, so only the parts that touch messages and tool calls are shown.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/integration-vercel-ai-sdk">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">Integration with the Vercel AI SDK</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>This guide wraps an agent built with the Vercel AI SDK in a Next.js route handler that Novera can call, and returns its tool calls so they can be graded. Everything on the Novera side is the HTTP connection described in Connecting an agent: an address, a JSON body template, a path to the reply, and optionally a path to tool activity.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/limitations">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">What Novera is not</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>Novera is evidence of testing. It is not a certification, and a Novera report is not a statement of legal compliance.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/novera-in-plain-words">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">Novera in plain words: what each part does</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>Novera tests an AI support agent the way a careful auditor would: it sends the agent a fixed set of realistic customer conversations, checks every answer against the rules the company wrote for it, and seals the result in a dated report that anyone can check was not changed afterwards. This page explains each part in plain words, and why you would use it. For where each part sits on screen, see Finding your way around Novera. For the words, see the plain-words glossary.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/plain-glossary">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">Plain-words glossary</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>Every word you are likely to meet in Novera or in a Novera report, explained without jargon. The same words carry a small ? on screen that explains them in place. For the bigger picture, see Novera in plain words and Reading a report.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/public-demo-scans">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">Public demo scans</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>A public demo scan lets you see how a company's public chat assistant answers six ordinary customer messages, before anyone has asked you to test it. Novera's browser worker opens the page, types each message into the chat widget, reads the reply, and Novera's AI graders judge each reply. You get a short card of what was seen, a suggested fix for each reply that fell short, and an outreach draft you can send by hand. Open it from the menu: Public demo scans.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/rag-tool-boundary-suite">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">The retrieved content and tool boundary suite</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>The retrieved content and tool boundary suite is a built-in suite of sixteen scenarios that observes one thing: whether your support agent keeps what it retrieves, or what a tool hands back, apart from its own rules. It is testing evidence about what the agent said and which tools it called in the conversations Novera sent. It is not a certification or a security assessment, and a pass does not show that the agent cannot be attacked in some other way. See What Novera is not.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/reading-a-report">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">Reading a report (for clients and managers)</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>This page is for the person who receives a Novera report: a manager, a support director, a legal adviser, a client. You do not need to know how AI models work to read one. Each section below follows the report from top to bottom and says what it means in plain words.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/regressions-from-production">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">Regressions from production</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>When your agent gets something wrong with a real customer, that conversation is the best test case you have. The Regressions page (under Scenarios) turns it into a scenario, and every later run shows whether the same mistake came back.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/scheduled-runs">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">Scheduled runs</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>A schedule runs a suite against an agent again on a calendar, so a change in the agent — a new model version, an edited system prompt, a changed knowledge base — shows up in a comparison without anyone having to remember to press Run the suite. Set one up on the agent's page, under Schedule.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/signing-in">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">Signing in and your account</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>You sign in to Novera with an email address and a password, or — where they are switched on — with a Google or GitHub account. Every method opens the same account: the same workspaces, agents, reports and API keys.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/suite-builder">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">The Suite Builder</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>The Suite Builder makes a suite you can defend without writing every scenario yourself. You start from a measured baseline, add your own documents, compare them with what your agent actually does, and approve what applies. Nothing a model drafts is tested until a person approves it, and nothing the builder drafts is presented as your policy.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/the-trial-and-your-own-key">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">The trial, plans, and using your own model key</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>Each account gets three suite runs free, to evaluate Novera and see a first sealed report. They are counted across every workspace you own, so a second workspace does not start a second trial. There is no card.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/what-novera-does">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">What Novera does</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>Novera runs a versioned scenario suite against an AI support agent you operate, grades every answer against a policy you wrote, and produces a dated report you can hand to a client.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/what-the-report-contains">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">What the report contains</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>The report is a single link, expiring and revocable, that prints cleanly to PDF.</p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="novera-reveal" style={{ animationDelay: "320ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
              <a className="block" href="/docs/writing-a-suite">
                <div className={"rounded-panel \x62order \x62order-line bg-surface \x73hadow-card transition-all duration-200 \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-line-strong \x68over:\x73hadow-card-hover p-4"}>
                  <p className="font-medium">Writing and importing a suite</p>
                  <p className={"mt-1 \x6cine-clamp-2 text-sm leading-relaxed text-ink-soft"}>A suite is a versioned list of scenarios. Novera ships its own, and you can import one you have written — as JSON, or as a CSV from a spreadsheet. Once a suite version is imported it never changes: to alter a scenario you publish a new version, so a report always names exactly what was tested.</p>
                </div>
              </a>
            </div>
          </li>
        </ul>
        <p className="mt-10 text-sm text-ink-soft">Still stuck? <a className={"font-medium underline \x75nderline-offset-2"} href="/support">Ask us</a>.</p>
      </main>
    </>
  );
}

function ImportedHeader() {
  return (
    <header className={"sticky top-0 z-40 \x62order-b \x62order-line/\x380 \x62g-surface/\x385 \x62ackdrop-blur"}>
      <div className={"\x77rap-wide flex h-16 items-center gap-6"}>
        <a className="group flex shrink-0 items-center gap-1.5 rounded-control text-ink" href="/">
          <svg className="shrink-0 size-9" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" {...({ focusable: "false" } as any)}>
            <rect className={"transition-transform duration-200 ease-out \x6dotion-reduce:\x74ransition-none \x67roup-hover:\x74ranslate-y-[\x34px] \x67roup-focus-visible:\x74ranslate-y-[\x34px]"} x="25.75" y="26" width="14.5" height="40" />
            <rect x="46.75" y="42.75" width="6.5" height="14.5" />
            <rect className={"transition-transform duration-200 ease-out \x6dotion-reduce:\x74ransition-none \x67roup-hover:\x2dtranslate-y-[\x34px] \x67roup-focus-visible:\x2dtranslate-y-[\x34px]"} x="59.75" y="34" width="14.5" height="40" />
          </svg>
          <span className="text-[15px] font-semibold tracking-tight">Novera</span>
          <span className={"\x73r-only"}>home</span>
        </a>
        <span className={"hidden h-5 w-px bg-line \x78l:\x62lock"} aria-hidden="true" />
        <p className={"hidden type-eyebrow text-ink-faint \x78l:\x62lock"}>Evidence-first agent testing</p>
        <nav className={"ml-auto hidden items-center gap-1 \x6dd:\x66lex"} aria-label="Primary">
          <a className="rounded-control px-3 py-2 text-sm font-medium text-ink-soft transition-colors duration-150 hover:bg-sunken hover:text-ink" href="/#how-it-works">How it works</a>
          <a className="rounded-control px-3 py-2 text-sm font-medium text-ink-soft transition-colors duration-150 hover:bg-sunken hover:text-ink" href="/#evidence">The report</a>
          <a className="rounded-control px-3 py-2 text-sm font-medium text-ink-soft transition-colors duration-150 hover:bg-sunken hover:text-ink" href="/#trust">Data and limits</a>
          <a className="rounded-control px-3 py-2 text-sm font-medium text-ink-soft transition-colors duration-150 hover:bg-sunken hover:text-ink" href="#">Documentation</a>
          <span className="mx-2 h-5 w-px bg-line" aria-hidden="true" />
          <a className="rounded-control px-3 py-2 text-sm font-medium text-ink-soft transition-colors duration-150 hover:bg-sunken hover:text-ink" href="/sign-in">Sign in</a>
          <a className={"inline-flex items-center justify-center gap-2 rounded-control font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out \x61ctive:\x73cale-[\x30.\x398] \x64isabled:\x63ursor-not-allowed \x64isabled:\x61ctive:\x73cale-100 bg-ink text-on-ink \x73hadow-button hover:bg-ink-hover active:bg-ink-hover disabled:bg-ink-ghost \x64isabled:\x73hadow-none px-3 py-1.5 text-sm"} href="/sign-in">Start free</a>
        </nav>
        <details className={"group relative ml-auto \x6dd:\x68idden"}>
          <summary className={"novera-press flex cursor-pointer list-none items-center gap-2 rounded-control \x62order \x62order-line-strong px-3 py-2 text-sm font-medium text-ink"}>
            <span>Menu</span>
            <span className="relative block h-2.5 w-3.5" aria-hidden="true">
              <span className={"absolute \x69nset-x-0 top-0 h-px bg-ink transition-transform duration-200 \x67roup-open:\x74ranslate-y-[\x35px] \x67roup-open:\x72otate-45"} />
              <span className={"absolute \x69nset-x-0 bottom-0 h-px bg-ink transition-transform duration-200 \x67roup-open:\x2dtranslate-y-[\x34px] \x67roup-open:\x2drotate-45"} />
            </span>
          </summary>
          <div className={"novera-drawer absolute right-0 top-full mt-2 w-[min(18rem,calc(100vw-2rem))] rounded-panel \x62order \x62order-line bg-surface p-2 \x73hadow-modal"}>
            <nav className="flex flex-col" aria-label="Primary (menu)">
              <a className="rounded-control px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-sunken hover:text-ink" href="/#how-it-works">How it works</a>
              <a className="rounded-control px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-sunken hover:text-ink" href="/#evidence">The report</a>
              <a className="rounded-control px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-sunken hover:text-ink" href="/#trust">Data and limits</a>
              <a className="rounded-control px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-sunken hover:text-ink" href="#">Documentation</a>
            </nav>
            <div className={"mt-2 \x62order-t \x62order-line pt-2"}>
              <div className="flex flex-col gap-2">
                <a className={"inline-flex items-center justify-center gap-2 rounded-control font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out \x61ctive:\x73cale-[\x30.\x398] \x64isabled:\x63ursor-not-allowed \x64isabled:\x61ctive:\x73cale-100 bg-ink text-on-ink \x73hadow-button hover:bg-ink-hover active:bg-ink-hover disabled:bg-ink-ghost \x64isabled:\x73hadow-none px-4 py-2.5 text-sm w-full"} href="/sign-in">Start with three free runs</a>
                <a className={"inline-flex items-center justify-center gap-2 rounded-control font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out \x61ctive:\x73cale-[\x30.\x398] \x64isabled:\x63ursor-not-allowed \x64isabled:\x61ctive:\x73cale-100 \x62order \x62order-line-strong bg-surface text-ink \x73hadow-card \x68over:\x62order-ink-ghost hover:bg-ground active:bg-sunken disabled:text-ink-ghost \x64isabled:\x73hadow-none px-4 py-2.5 text-sm w-full"} href="/sign-in">Sign in</a>
              </div>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
