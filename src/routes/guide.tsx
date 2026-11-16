import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/guide.css?raw";

export const Route = createFileRoute("/guide")({
  head: () => ({ meta: [{ title: "How to use Novera: guide | Novera — EU AI Act \u0026 Agent Evaluation" }] }),
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
        <h1 className="text-3xl font-semibold tracking-tight">How to use Novera</h1>
        <p className="mt-3 text-lg leading-relaxed text-ink-soft">Seven steps from a connected agent to a report you can hand to a client. The first run usually takes about ten minutes, most of it writing the policy.</p>
        <ol className={"mt-10 \x73pace-y-6"}>
          <li className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-on-ink" aria-hidden="true">1</span>
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Connect the agent you want to test</h2>
              <p className="mt-1 leading-relaxed text-ink-soft">Give Novera the web address your support agent answers on, and confirm you own it or are authorised to test it. Novera sends it one harmless test message straight away, so you know the connection works before anything else.</p>
              <p className="mt-1.5 text-sm text-ink-faint">Where: Connect an agent</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-on-ink" aria-hidden="true">2</span>
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Write the policy it should follow</h2>
              <p className="mt-1 leading-relaxed text-ink-soft">Paste the rules your agent is meant to keep: refunds, identity checks, what it may and may not say. Every verdict is judged against this text. Saving a change creates a new version; old versions are kept, so every report says exactly which rules it was measured against.</p>
              <p className="mt-1.5 text-sm text-ink-faint">Where: The agent's page → Policy</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-on-ink" aria-hidden="true">3</span>
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Run the suite</h2>
              <p className="mt-1 leading-relaxed text-ink-soft">A suite is a fixed set of scenarios — ordinary requests, tricky ones and deliberate attacks. Novera sends each one to your agent and grades the answer. The newest suite version is picked for you. A run takes a few minutes and keeps going even if some scenarios fail.</p>
              <p className="mt-1.5 text-sm text-ink-faint">Where: The agent's page → Run the suite</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-on-ink" aria-hidden="true">4</span>
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Read the results</h2>
              <p className="mt-1 leading-relaxed text-ink-soft">Each scenario ends as passed, failed, or without a result. Without a result is never counted as a pass: it means the agent errored, the grading models could not agree, or an action the agent claimed could not be checked. The score is passes out of the scenarios that got a verdict, and the report says how many did not.</p>
              <p className="mt-1.5 text-sm text-ink-faint">Where: The run page</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-on-ink" aria-hidden="true">5</span>
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Fix, then rerun and compare</h2>
              <p className="mt-1 leading-relaxed text-ink-soft">On a failed scenario you can ask for a diagnosis: Novera proposes a change to your policy, quoting the exact passage. You approve or reject it — nothing changes on its own. Then rerun: the new run is compared with the old one, scenario by scenario, and flags any scenario that flips between runs on its own. To rerun on a calendar instead, add a schedule on the agent's page.</p>
              <p className="mt-1.5 text-sm text-ink-faint">Where: The run page → a failed scenario</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-on-ink" aria-hidden="true">6</span>
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Disagree with a verdict, if you do</h2>
              <p className="mt-1 leading-relaxed text-ink-soft">Record your own finding on any scenario, with a reason. It sits beside the automated verdict and never changes the score. If a client should see it, issue a new report that discloses it.</p>
              <p className="mt-1.5 text-sm text-ink-faint">Where: The run page → a scenario → Record your own finding</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-on-ink" aria-hidden="true">7</span>
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Share the report</h2>
              <p className="mt-1 leading-relaxed text-ink-soft">Every finished run produces a dated report with a private link. Its fingerprint (a SHA-256 hash) proves nothing was edited after it was issued. Send the link, print it to PDF, export it as Markdown, CSV, JSON (to verify a copy) or JUnit (for a CI pipeline), or withdraw it at any time.</p>
              <p className="mt-1.5 text-sm text-ink-faint">Where: The run page → Client report → View client report</p>
            </div>
          </li>
        </ol>
        <h2 className="mt-14 text-2xl font-semibold tracking-tight">Words you will see</h2>
        <dl className={"mt-5 \x64ivide-y \x64ivide-line \x62order-y \x62order-line"}>
          <div className="grid gap-1 py-3 sm:grid-cols-[12rem_1fr] sm:gap-4">
            <dt className="font-medium">Scenario</dt>
            <dd className="leading-relaxed text-ink-soft">One test: a message sent to your agent, what it should do, and what would count as failing.</dd>
          </div>
          <div className="grid gap-1 py-3 sm:grid-cols-[12rem_1fr] sm:gap-4">
            <dt className="font-medium">Suite</dt>
            <dd className="leading-relaxed text-ink-soft">A numbered set of scenarios. A published version never changes, so two reports on the same version are comparable.</dd>
          </div>
          <div className="grid gap-1 py-3 sm:grid-cols-[12rem_1fr] sm:gap-4">
            <dt className="font-medium">Policy</dt>
            <dd className="leading-relaxed text-ink-soft">Your written rules for the agent. Verdicts are judged against the version that was current when the run started.</dd>
          </div>
          <div className="grid gap-1 py-3 sm:grid-cols-[12rem_1fr] sm:gap-4">
            <dt className="font-medium">Verdict</dt>
            <dd className="leading-relaxed text-ink-soft">Passed or failed. A rule in the scenario can fail it on its own; otherwise two grading models from different companies decide, and a third settles any disagreement.</dd>
          </div>
          <div className="grid gap-1 py-3 sm:grid-cols-[12rem_1fr] sm:gap-4">
            <dt className="font-medium">No result</dt>
            <dd className="leading-relaxed text-ink-soft">The agent errored, the models could not agree, or a claimed action could not be checked. Counted separately — never as a pass.</dd>
          </div>
          <div className="grid gap-1 py-3 sm:grid-cols-[12rem_1fr] sm:gap-4">
            <dt className="font-medium">Assurance gap</dt>
            <dd className="leading-relaxed text-ink-soft">The share of the suite that produced no verdict. The larger it is, the less the score says.</dd>
          </div>
          <div className="grid gap-1 py-3 sm:grid-cols-[12rem_1fr] sm:gap-4">
            <dt className="font-medium">Read-back</dt>
            <dd className="leading-relaxed text-ink-soft">An optional read-only address in your own system that Novera checks to confirm an action the agent says it took, such as a refund.</dd>
          </div>
          <div className="grid gap-1 py-3 sm:grid-cols-[12rem_1fr] sm:gap-4">
            <dt className="font-medium">INCOMPLETE / WITHHELD</dt>
            <dd className="leading-relaxed text-ink-soft">INCOMPLETE: some scenarios never ran — run again. WITHHELD: everything ran but the evidence does not support a grade — fix what made it unusable.</dd>
          </div>
          <div className="grid gap-1 py-3 sm:grid-cols-[12rem_1fr] sm:gap-4">
            <dt className="font-medium">Report hash</dt>
            <dd className="leading-relaxed text-ink-soft">A fingerprint of the report. Anyone can recompute it; if one character changed, it would not match.</dd>
          </div>
        </dl>
        <p className="mt-10 text-sm leading-relaxed text-ink-faint">More detail in the <a className={"underline \x75nderline-offset-2"} href="/docs">documentation</a>. Novera is evidence of testing, not a legal certification.</p>
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
          <a className="rounded-control px-3 py-2 text-sm font-medium text-ink-soft transition-colors duration-150 hover:bg-sunken hover:text-ink" href="/docs">Documentation</a>
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
              <a className="rounded-control px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-sunken hover:text-ink" href="/docs">Documentation</a>
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
