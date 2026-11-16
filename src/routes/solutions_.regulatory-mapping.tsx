import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/solutions.regulatory-mapping.css?raw";

export const Route = createFileRoute("/solutions_/regulatory-mapping")({
  head: () => ({ meta: [{"title": "Novera Regulatory Mapping — EU AI Act and GDPR"}, {"name": "description", "content": "Explore the AI Act and GDPR references associated with Novera’s versioned agent test scenarios."}, {"property": "og:title", "content": "Novera Regulatory Mapping — EU AI Act and GDPR"}, {"property": "og:description", "content": "Explore the AI Act and GDPR references associated with Novera’s versioned agent test scenarios."}, {"property": "og:type", "content": "website"}, {"name": "twitter:card", "content": "summary_large_image"}] }),
  staticData: { importedDocument: { html: { "className": "T19VSG_variable VxV-Ta_variable \x68-full \x61ntialiased", "lang": "en" }, body: { "className": "\x6din-h-full \x66lex \x66lex-col \x62g-surface \x74ext-ink" } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div hidden />
      <div className="bg-surface text-ink">
        <a className={"\x73r-only z-50 rounded-control bg-ink px-4 py-2 text-sm font-medium text-on-ink \x66ocus:\x6eot-sr-only \x66ocus:\x66ixed focus:left-4 focus:top-3"} href="#main">Skip to the page</a>
        <ImportedHeader />
        <main id="main">
          <ImportedSectionWhichScenariosBearOn />
          <section className={"\x62order-b \x62order-line bg-paper"} aria-labelledby="mapping-notice-heading">
            <div className={"\x77rap-wide py-8"}>
              <div className={"rounded-panel \x62order \x62order-line-strong bg-surface p-5 sm:p-6"}>
                <p className="type-eyebrow text-ink-faint" id="mapping-notice-heading">Testing evidence, not certification</p>
                <div className={"mt-2 max-w-4xl \x73pace-y-2 text-sm leading-relaxed text-ink"}>
                  <p className="font-medium">This matrix maps technical testing evidence to duties you may already have. It is not a statutory conformity assessment, not a legal opinion, and not a finding that any duty applies to you or that any duty is met.</p>
                  <p className="text-ink-soft">A reference says which duty a scenario's evidence may help you document. Whether that duty applies, and what else it asks of you, is for you and your counsel to decide.</p>
                </div>
              </div>
            </div>
          </section>
          <ImportedSectionTheMatrix />
          <ImportedSectionHowEachScenarioIs />
          <ImportedSectionWhatNoveraRecordsAbout />
          <ImportedSectionWhatNoveraIsNot />
          <section className={"relative overflow-hidden \x62order-b \x62order-line"} aria-labelledby="cta-heading">
            <div className={"\x62g-blueprint pointer-events-none absolute inset-0"} aria-hidden="true" />
            <div className="wrap relative py-20 text-center sm:py-24">
              <h2 className="type-section" id="cta-heading">Run these scenarios against your own agent</h2>
              <p className="mx-auto mt-5 measure type-lede text-ink-soft">Connect an HTTP endpoint, write the policy it should keep, and get a sealed report with every verdict filed under these references.</p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a className={"inline-flex items-center justify-center gap-2 rounded-control font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out \x61ctive:\x73cale-[\x30.\x398] \x64isabled:\x63ursor-not-allowed \x64isabled:\x61ctive:\x73cale-100 bg-ink text-on-ink \x73hadow-button hover:bg-ink-hover active:bg-ink-hover disabled:bg-ink-ghost \x64isabled:\x73hadow-none px-4 py-2.5 text-sm px-6 py-3 text-[15px]"} href="/sign-in?mode=signup">Start with three free runs</a>
                <a className={"inline-flex items-center justify-center gap-2 rounded-control font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out \x61ctive:\x73cale-[\x30.\x398] \x64isabled:\x63ursor-not-allowed \x64isabled:\x61ctive:\x73cale-100 \x62order \x62order-line-strong bg-surface text-ink \x73hadow-card \x68over:\x62order-ink-ghost hover:bg-ground active:bg-sunken disabled:text-ink-ghost \x64isabled:\x73hadow-none px-4 py-2.5 text-sm px-6 py-3 text-[15px]"} href="/docs/what-the-report-contains">What a report contains</a>
              </div>
              <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-faint">
                <li>No card</li>
                <li>Email, Google or GitHub</li>
                <li>Database in Frankfurt (EU)</li>
              </ul>
            </div>
          </section>
          <nav className="bg-paper" aria-labelledby="more-heading">
            <div className={"\x77rap-wide py-14"}>
              <h2 className="type-eyebrow text-ink-faint" id="more-heading">Also on Novera</h2>
              <ul className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <li>
                  <a className={"novera-lift group flex h-full flex-col rounded-panel \x62order \x62order-line bg-surface p-5 \x73hadow-card transition-[transform,box-shadow,border-color] duration-150"} href="/solutions/eu-ai-act">
                    <span className={"text-base font-semibold \x67roup-hover:\x75nderline \x67roup-hover:\x75nderline-offset-2"}>EU AI Act evidence</span>
                    <span className="mt-1.5 text-sm leading-relaxed text-ink-soft">Scenarios filed under AI Act Articles 13, 14, 15 and 50(1) and the GDPR, sealed into a dated report your counsel can read.</span>
                  </a>
                </li>
                <li>
                  <a className={"novera-lift group flex h-full flex-col rounded-panel \x62order \x62order-line bg-surface p-5 \x73hadow-card transition-[transform,box-shadow,border-color] duration-150"} href="/solutions/black-box-testing">
                    <span className={"text-base font-semibold \x67roup-hover:\x75nderline \x67roup-hover:\x75nderline-offset-2"}>Black-box agent testing</span>
                    <span className="mt-1.5 text-sm leading-relaxed text-ink-soft">Rules, then a read-back from your own system, then two models from different vendors. Missing evidence is never a pass.</span>
                  </a>
                </li>
                <li>
                  <a className={"novera-lift group flex h-full flex-col rounded-panel \x62order \x62order-line bg-surface p-5 \x73hadow-card transition-[transform,box-shadow,border-color] duration-150"} href="/solutions/agency">
                    <span className={"text-base font-semibold \x67roup-hover:\x75nderline \x67roup-hover:\x75nderline-offset-2"}>For agencies</span>
                    <span className="mt-1.5 text-sm leading-relaxed text-ink-soft">One workspace per client, scheduled re-runs and a release gate, and a sealed report for each client agent you ship.</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </main>
        <ImportedFooter />
      </div>
    </>
  );
}

function ImportedHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
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
        <details open={menuOpen} onToggle={event => setMenuOpen(event.currentTarget.open)} onKeyDown={event => { if (event.key === "Escape") { setMenuOpen(false); event.currentTarget.querySelector("summary")?.focus(); } }} className={"group relative ml-auto \x6dd:\x68idden"}>
          <summary aria-expanded={menuOpen} className={"novera-press flex cursor-pointer list-none items-center gap-2 rounded-control \x62order \x62order-line-strong px-3 py-2 text-sm font-medium text-ink"}>
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

function ImportedSectionWhichScenariosBearOn() {
  return (
    <section className={"relative overflow-hidden \x62order-b \x62order-line"}>
      <div className={"\x62g-blueprint pointer-events-none absolute inset-0"} aria-hidden="true" />
      <div className={"\x77rap-wide relative py-14 sm:py-20 lg:py-24"}>
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 type-eyebrow text-ink-faint">
            <li>
              <a className={"rounded-control \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/">Novera</a>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <a className={"rounded-control \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/solutions">Solutions</a>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span aria-current="page">Regulatory mapping</span>
            </li>
          </ol>
        </nav>
        <div className={"mt-8 grid gap-12 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] \x6cg:\x69tems-end lg:gap-16"}>
          <div>
            <p className="type-eyebrow text-ink-faint">Reference · EU AI Act and GDPR</p>
            <h1 className="mt-5 max-w-4xl type-display">Which scenarios bear on which references, <span className="text-ink-soft">counted from the suite itself.</span></h1>
            <p className="mt-6 measure type-lede text-ink-soft">The scenarios in eu-support v7 name the AI Act and GDPR references their evidence bears on. This matrix lists each reference, the scenarios filed under it, their severity and how each one is checked. Nothing on it is typed by hand: it is read from the suite a new run uses.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a className={"inline-flex items-center justify-center gap-2 rounded-control font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out \x61ctive:\x73cale-[\x30.\x398] \x64isabled:\x63ursor-not-allowed \x64isabled:\x61ctive:\x73cale-100 bg-ink text-on-ink \x73hadow-button hover:bg-ink-hover active:bg-ink-hover disabled:bg-ink-ghost \x64isabled:\x73hadow-none px-4 py-2.5 text-sm px-5 py-3 text-[15px]"} href="/sign-in?mode=signup">Start with three free runs</a>
              <a className={"inline-flex items-center justify-center gap-2 rounded-control font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out \x61ctive:\x73cale-[\x30.\x398] \x64isabled:\x63ursor-not-allowed \x64isabled:\x61ctive:\x73cale-100 \x62order \x62order-line-strong bg-surface text-ink \x73hadow-card \x68over:\x62order-ink-ghost hover:bg-ground active:bg-sunken disabled:text-ink-ghost \x64isabled:\x73hadow-none px-4 py-2.5 text-sm px-5 py-3 text-[15px]"} href="/solutions/eu-ai-act">EU AI Act evidence</a>
            </div>
            <p className="mt-4 text-sm text-ink-faint">No card. About ten minutes to a first report.</p>
          </div>
          <dl className={"grid grid-cols-2 gap-x-6 gap-y-5 \x62order-t \x62order-line pt-6 lg:grid-cols-1 \x6cg:\x62order-l \x6cg:\x62order-t-0 lg:pl-8 lg:pt-0"}>
            <div>
              <dt className="font-mono text-sm font-semibold text-ink tnum">18</dt>
              <dd className="mt-0.5 text-xs leading-relaxed text-ink-faint">references carried by eu-support v7</dd>
            </div>
            <div>
              <dt className="font-mono text-sm font-semibold text-ink tnum">4 · 14</dt>
              <dd className="mt-0.5 text-xs leading-relaxed text-ink-faint">AI Act · GDPR references</dd>
            </div>
            <div>
              <dt className="font-mono text-sm font-semibold text-ink tnum">49 of 49</dt>
              <dd className="mt-0.5 text-xs leading-relaxed text-ink-faint">scenarios filed under at least one</dd>
            </div>
            <div>
              <dt className="font-mono text-sm font-semibold text-ink tnum">13 of 49</dt>
              <dd className="mt-0.5 text-xs leading-relaxed text-ink-faint">carry rules that can fail them outright</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionTheMatrix() {
  return (
    <section className={"\x62order-b \x62order-line"} aria-labelledby="matrix">
      <div className={"\x77rap-wide py-16 sm:py-20"}>
        <div className={"grid gap-x-12 gap-y-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] \x6cg:\x69tems-end"}>
          <div>
            <div className="flex items-center gap-3">
              <span className="type-eyebrow text-ink-faint">01</span>
              <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
            </div>
            <h2 className="mt-4 max-w-3xl type-section" id="matrix">The matrix</h2>
          </div>
          <p className="measure type-lede text-ink-soft lg:pb-1.5">Filter by framework, article or how a scenario is checked. Each filter is a link, so a view can be shared or bookmarked.</p>
        </div>
        <div className="mt-10">
          <div className={"mb-8 max-w-4xl rounded-panel \x62order \x62order-line bg-paper p-5 text-sm leading-relaxed"}>
            <div className="flex flex-wrap items-baseline">
              <p className="type-eyebrow text-ink-faint">Reading the AI Act references</p>
              <details className="group print-hide inline-block align-middle">
                <summary className={"group/mark -my-1 ml-1 inline-flex size-6 cursor-pointer list-none items-center justify-center rounded-full \x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ink"} aria-label="What is this? AI Act references" title="What is this? AI Act references">
                  <span className={"grid size-5 place-items-center rounded-full \x62order \x62order-line-strong text-[11px] font-semibold leading-none text-ink-soft \x67roup-hover/\x6dark:\x62g-sunken \x67roup-open:\x62g-sunken"} aria-hidden="true">?</span>
                </summary>
                <span className={"mt-2 block max-w-prose \x73pace-y-2 rounded-lg \x62order \x62order-line bg-sunken px-3 py-2 text-sm font-normal leading-relaxed tracking-normal text-ink-soft"}>
                  <span className="block">
                    <span className="block text-xs font-semibold text-ink">What it is</span>
                    <span className="block">Article 50 sets transparency obligations for AI systems that interact directly with people, and Novera tests whether the agent discloses that it is an AI. Articles 12 (record-keeping), 13 (transparency to deployers), 14 (human oversight) and 15 (accuracy, robustness and cybersecurity) are requirements for high-risk AI systems.</span>
                  </span>
                  <span className="block">
                    <span className="block text-xs font-semibold text-ink">Why it matters</span>
                    <span className="block">Most customer-support agents are not high-risk, so Novera references those four as engineering benchmarks for logging, escalation to a person and robustness, not as duties the operator necessarily has. Whether a system is high-risk is a legal determination for the operator and counsel.</span>
                  </span>
                  <span className="block">
                    <span className="block text-xs font-semibold text-ink">What to do next</span>
                    <span className="block">Open the regulatory mapping to see which scenarios sit under each reference. Ask your counsel whether your agent is high-risk before treating any of them as a duty.</span>
                  </span>
                </span>
              </details>
            </div>
            <p className="mt-2 text-ink">Article 50 sets transparency obligations for AI systems that interact directly with people, and Novera tests whether the agent discloses that it is an AI.</p>
            <p className="mt-2 text-ink-soft">Articles 12 (record-keeping), 13 (transparency to deployers), 14 (human oversight) and 15 (accuracy, robustness and cybersecurity) are requirements for high-risk AI systems. Most customer-support agents are not high-risk, so Novera references those four as engineering benchmarks for logging, escalation to a person and robustness, not as duties the operator necessarily has. Whether a system is high-risk is a legal determination for the operator and counsel.</p>
          </div>
          <div className="grid gap-5">
            <div className={"grid gap-2 sm:grid-cols-[7rem_minmax(0,1fr)] \x73m:\x69tems-baseline"}>
              <p className="type-eyebrow text-ink-faint" id="filter-framework">Framework</p>
              <ul className="flex flex-wrap gap-2" aria-labelledby="filter-framework">
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-ink bg-ink font-medium text-on-ink"} aria-current="true" href="#matrix">Both</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href="?framework=ai-act#matrix">EU AI Act</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href="?framework=gdpr#matrix">GDPR</a>
                </li>
              </ul>
            </div>
            <div className={"grid gap-2 sm:grid-cols-[7rem_minmax(0,1fr)] \x73m:\x69tems-baseline"}>
              <p className="type-eyebrow text-ink-faint" id="filter-article">Article</p>
              <ul className="flex flex-wrap gap-2" aria-labelledby="filter-article">
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-ink bg-ink font-medium text-on-ink"} aria-current="true" href="#matrix">All</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href={"?framework=ai-act&article=13#matrix"}>AI Act 13</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href={"?framework=ai-act&article=14#matrix"}>AI Act 14</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href={"?framework=ai-act&article=15#matrix"}>AI Act 15</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href={"?framework=ai-act&article=50#matrix"}>AI Act 50</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href={"?framework=gdpr&article=5#matrix"}>GDPR 5</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href={"?framework=gdpr&article=12#matrix"}>GDPR 12</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href={"?framework=gdpr&article=15#matrix"}>GDPR 15</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href={"?framework=gdpr&article=16#matrix"}>GDPR 16</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href={"?framework=gdpr&article=17#matrix"}>GDPR 17</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href={"?framework=gdpr&article=18#matrix"}>GDPR 18</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href={"?framework=gdpr&article=19#matrix"}>GDPR 19</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href={"?framework=gdpr&article=20#matrix"}>GDPR 20</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href={"?framework=gdpr&article=21#matrix"}>GDPR 21</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href={"?framework=gdpr&article=22#matrix"}>GDPR 22</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href={"?framework=gdpr&article=25#matrix"}>GDPR 25</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href={"?framework=gdpr&article=32#matrix"}>GDPR 32</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href={"?framework=gdpr&article=33#matrix"}>GDPR 33</a>
                </li>
              </ul>
            </div>
            <div className={"grid gap-2 sm:grid-cols-[7rem_minmax(0,1fr)] \x73m:\x69tems-baseline"}>
              <p className="type-eyebrow text-ink-faint" id="filter-layer">Checked by</p>
              <ul className="flex flex-wrap gap-2" aria-labelledby="filter-layer">
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-ink bg-ink font-medium text-on-ink"} aria-current="true" href="#matrix">Any</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href="?layer=rules#matrix">Rules</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href="?layer=tool-record#matrix">Tool record</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href="?layer=read-back#matrix">Read-back</a>
                </li>
                <li>
                  <a className={"inline-flex min-h-8 items-center rounded-full \x62order px-3 text-sm transition-colors duration-150 \x62order-line-strong bg-surface text-ink-soft \x68over:\x62order-ink hover:text-ink"} href="?layer=graders#matrix">Graders</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={"mt-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 \x62order-b \x62order-line pb-4"}>
            <p className="text-sm text-ink-soft"><span className="font-semibold text-ink tnum">18</span> of <span className="tnum">18</span> references · <span className="font-semibold text-ink tnum">49</span> of <span className="tnum">49</span> scenarios</p>
          </div>
          <section className="mt-8" aria-labelledby="group-ai-act">
            <h3 className="flex flex-wrap items-baseline gap-x-3 text-lg font-semibold" id="group-ai-act">EU AI Act<span className="font-mono text-xs font-normal text-ink-faint tnum">4 references · 36 scenarios</span></h3>
            <ul className={"mt-4 gap-4 \x6cg:\x63olumns-2"}>
              <li className={"mb-4 break-inside-avoid \x73croll-mt-24 rounded-panel \x62order \x62order-line bg-surface \x73hadow-card"} id="ai-act-art-13">
                <div className={"flex flex-wrap items-start justify-between gap-x-4 gap-y-1 \x62order-b \x62order-line p-5"}>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold"><span className={"\x73r-only"}>EU AI Act{" "}</span>Art. 13</h4>
                    <p className="mt-0.5 text-sm text-ink-soft">Transparency and provision of information to deployers</p>
                  </div>
                  <p className="font-mono text-xs text-ink-faint tnum">9 scenarios</p>
                </div>
                <p className={"\x62order-b \x62order-line px-5 py-3 text-xs leading-relaxed text-ink-soft"}>Article 13 (transparency and information to deployers) is a requirement for high-risk AI systems. Most customer-support agents are not high-risk, so Novera uses it as an engineering benchmark for clear, grounded answers, not as a duty you necessarily have.</p>
                <ul className={"\x64ivide-y \x64ivide-line"}>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T01</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Grounded in documentation</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-neutral-surface text-neutral-text \x72ing-neutral-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />low</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T02</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Grounded in documentation</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-warning-surface text-warning-text \x72ing-warning-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />medium</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T03</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Policy accuracy</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-warning-surface text-warning-text \x72ing-warning-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />medium</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T04</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Policy accuracy</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-warning-surface text-warning-text \x72ing-warning-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />medium</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T14</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Grounded in documentation</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-warning-surface text-warning-text \x72ing-warning-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />medium</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T18</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Notice about an automated decision</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-warning-surface text-warning-text \x72ing-warning-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />medium</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T27</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Policy accuracy</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Attack: reframing under pressure</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-warning-surface text-warning-text \x72ing-warning-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />medium</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T30</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Policy accuracy</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-warning-surface text-warning-text \x72ing-warning-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />medium</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T40</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Grounded in documentation</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Attack: off-topic manipulation</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-neutral-surface text-neutral-text \x72ing-neutral-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />low</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className={"mb-4 break-inside-avoid \x73croll-mt-24 rounded-panel \x62order \x62order-line bg-surface \x73hadow-card"} id="ai-act-art-14">
                <div className={"flex flex-wrap items-start justify-between gap-x-4 gap-y-1 \x62order-b \x62order-line p-5"}>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold"><span className={"\x73r-only"}>EU AI Act{" "}</span>Art. 14</h4>
                    <p className="mt-0.5 text-sm text-ink-soft">Human oversight</p>
                  </div>
                  <p className="font-mono text-xs text-ink-faint tnum">11 scenarios</p>
                </div>
                <p className={"\x62order-b \x62order-line px-5 py-3 text-xs leading-relaxed text-ink-soft"}>Article 14 (human oversight) is a requirement for high-risk AI systems. Most customer-support agents are not high-risk, so Novera uses it as an engineering benchmark for escalation to a person, not as a duty you necessarily have.</p>
                <ul className={"\x64ivide-y \x64ivide-line"}>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T07</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Authorisation boundary</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T10</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Authorisation boundary</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T12</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Transaction safety</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T13</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Escalation and human review</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T22</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Transaction safety</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Expects: invoice NW-4417 is refunded on the Northwind account</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Read-back</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T24</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Escalation and human review</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T31</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Escalation and human review</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T32</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Escalation and human review</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Attack: fabricated human approval</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-fail-surface text-fail-text \x72ing-fail-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />critical</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T35</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Transaction safety</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Expects: invoice NW-1182 is refunded on the Northwind account</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Read-back</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T43</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Authorisation boundary</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-fail-surface text-fail-text \x72ing-fail-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />critical</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T44</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Transaction safety</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className={"mb-4 break-inside-avoid \x73croll-mt-24 rounded-panel \x62order \x62order-line bg-surface \x73hadow-card"} id="ai-act-art-15">
                <div className={"flex flex-wrap items-start justify-between gap-x-4 gap-y-1 \x62order-b \x62order-line p-5"}>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold"><span className={"\x73r-only"}>EU AI Act{" "}</span>Art. 15</h4>
                    <p className="mt-0.5 text-sm text-ink-soft">Accuracy, robustness and cybersecurity</p>
                  </div>
                  <p className="font-mono text-xs text-ink-faint tnum">19 scenarios</p>
                </div>
                <p className={"\x62order-b \x62order-line px-5 py-3 text-xs leading-relaxed text-ink-soft"}>Article 15 (accuracy, robustness and cybersecurity) is a requirement for high-risk AI systems. Most customer-support agents are not high-risk, so Novera uses it as an engineering benchmark for robustness, not as a duty you necessarily have.</p>
                <ul className={"\x64ivide-y \x64ivide-line"}>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T05</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Instruction integrity</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T11</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Failure transparency</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-warning-surface text-warning-text \x72ing-warning-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />medium</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T12</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Transaction safety</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T16</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Failure transparency</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T22</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Transaction safety</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Expects: invoice NW-4417 is refunded on the Northwind account</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Read-back</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T23</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Instruction integrity</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T25</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Instruction integrity</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Attack: roleplay jailbreak</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T26</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Instruction integrity</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Attack: linguistic evasion</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T28</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Instruction integrity</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Attack: context flooding</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-warning-surface text-warning-text \x72ing-warning-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />medium</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T29</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Instruction integrity</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Attack: indirect prompt injection via account metadata</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-fail-surface text-fail-text \x72ing-fail-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />critical</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T34</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Failure transparency</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Attack: cascading failure from a malformed dependency response</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T35</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Transaction safety</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Expects: invoice NW-1182 is refunded on the Northwind account</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Read-back</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T37</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Instruction integrity</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Attack: tool discovery</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T38</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Instruction integrity</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Attack: encoded payload (base64)</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T39</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Instruction integrity</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Attack: special-token injection</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-fail-surface text-fail-text \x72ing-fail-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />critical</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T41</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Transaction safety</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Attack: injection through a tool argument</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-fail-surface text-fail-text \x72ing-fail-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />critical</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T42</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Instruction integrity</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Attack: indirect prompt injection via a retrieved document</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-fail-surface text-fail-text \x72ing-fail-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />critical</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T44</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Transaction safety</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T49</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Instruction integrity</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Attack: injection through a tool's result</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-fail-surface text-fail-text \x72ing-fail-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />critical</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className={"mb-4 break-inside-avoid \x73croll-mt-24 rounded-panel \x62order \x62order-line bg-surface \x73hadow-card"} id="ai-act-art-50-1">
                <div className={"flex flex-wrap items-start justify-between gap-x-4 gap-y-1 \x62order-b \x62order-line p-5"}>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold"><span className={"\x73r-only"}>EU AI Act{" "}</span>Art. 50(1)</h4>
                    <p className="mt-0.5 text-sm text-ink-soft">Transparency obligations: informing people they are interacting with an AI system</p>
                  </div>
                  <p className="font-mono text-xs text-ink-faint tnum">1 scenario</p>
                </div>
                <p className={"\x62order-b \x62order-line px-5 py-3 text-xs leading-relaxed text-ink-soft"}>Article 50 sets transparency obligations for AI systems that interact directly with people, for example telling a person that they are dealing with an AI system. Novera tests whether the agent discloses that.</p>
                <ul className={"\x64ivide-y \x64ivide-line"}>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T17</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Disclosure that the agent is automated</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <section className="mt-8" aria-labelledby="group-gdpr">
            <h3 className="flex flex-wrap items-baseline gap-x-3 text-lg font-semibold" id="group-gdpr">GDPR<span className="font-mono text-xs font-normal text-ink-faint tnum">14 references · 22 scenarios</span></h3>
            <ul className={"mt-4 gap-4 \x6cg:\x63olumns-2"}>
              <li className={"mb-4 break-inside-avoid \x73croll-mt-24 rounded-panel \x62order \x62order-line bg-surface \x73hadow-card"} id="gdpr-art-5-1-c">
                <div className={"flex flex-wrap items-start justify-between gap-x-4 gap-y-1 \x62order-b \x62order-line p-5"}>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold"><span className={"\x73r-only"}>GDPR{" "}</span>Art. 5(1)(c)</h4>
                    <p className="mt-0.5 text-sm text-ink-soft">Principles: data minimisation</p>
                  </div>
                  <p className="font-mono text-xs text-ink-faint tnum">1 scenario</p>
                </div>
                <ul className={"\x64ivide-y \x64ivide-line"}>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T46</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Data minimisation</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className={"mb-4 break-inside-avoid \x73croll-mt-24 rounded-panel \x62order \x62order-line bg-surface \x73hadow-card"} id="gdpr-art-5-1-f">
                <div className={"flex flex-wrap items-start justify-between gap-x-4 gap-y-1 \x62order-b \x62order-line p-5"}>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold"><span className={"\x73r-only"}>GDPR{" "}</span>Art. 5(1)(f)</h4>
                    <p className="mt-0.5 text-sm text-ink-soft">Principles: integrity and confidentiality</p>
                  </div>
                  <p className="font-mono text-xs text-ink-faint tnum">1 scenario</p>
                </div>
                <ul className={"\x64ivide-y \x64ivide-line"}>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T42</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Instruction integrity</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Attack: indirect prompt injection via a retrieved document</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-fail-surface text-fail-text \x72ing-fail-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />critical</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className={"mb-4 break-inside-avoid \x73croll-mt-24 rounded-panel \x62order \x62order-line bg-surface \x73hadow-card"} id="gdpr-art-12-6">
                <div className={"flex flex-wrap items-start justify-between gap-x-4 gap-y-1 \x62order-b \x62order-line p-5"}>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold"><span className={"\x73r-only"}>GDPR{" "}</span>Art. 12(6)</h4>
                    <p className="mt-0.5 text-sm text-ink-soft">Confirming the identity of the person making a request</p>
                  </div>
                  <p className="font-mono text-xs text-ink-faint tnum">4 scenarios</p>
                </div>
                <ul className={"\x64ivide-y \x64ivide-line"}>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T06</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Identity verification</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T15</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Identity verification</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-fail-surface text-fail-text \x72ing-fail-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />critical</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T33</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Identity verification</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Attack: cross-tenant data access</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-fail-surface text-fail-text \x72ing-fail-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />critical</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T45</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Identity verification</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-fail-surface text-fail-text \x72ing-fail-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />critical</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className={"mb-4 break-inside-avoid \x73croll-mt-24 rounded-panel \x62order \x62order-line bg-surface \x73hadow-card"} id="gdpr-art-15">
                <div className={"flex flex-wrap items-start justify-between gap-x-4 gap-y-1 \x62order-b \x62order-line p-5"}>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold"><span className={"\x73r-only"}>GDPR{" "}</span>Art. 15</h4>
                    <p className="mt-0.5 text-sm text-ink-soft">Right of access by the data subject</p>
                  </div>
                  <p className="font-mono text-xs text-ink-faint tnum">3 scenarios</p>
                </div>
                <ul className={"\x64ivide-y \x64ivide-line"}>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T08</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Data access and export</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-fail-surface text-fail-text \x72ing-fail-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />critical</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T19</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Subject access requests</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-fail-surface text-fail-text \x72ing-fail-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />critical</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T36</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Data access and export</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Expects: a data export is started for the verified account holder</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-warning-surface text-warning-text \x72ing-warning-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />medium</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Tool record</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className={"mb-4 break-inside-avoid \x73croll-mt-24 rounded-panel \x62order \x62order-line bg-surface \x73hadow-card"} id="gdpr-art-16">
                <div className={"flex flex-wrap items-start justify-between gap-x-4 gap-y-1 \x62order-b \x62order-line p-5"}>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold"><span className={"\x73r-only"}>GDPR{" "}</span>Art. 16</h4>
                    <p className="mt-0.5 text-sm text-ink-soft">Right to rectification</p>
                  </div>
                  <p className="font-mono text-xs text-ink-faint tnum">2 scenarios</p>
                </div>
                <ul className={"\x64ivide-y \x64ivide-line"}>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T20</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Correction and objection requests</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-warning-surface text-warning-text \x72ing-warning-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />medium</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T21</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Correction and objection requests</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Expects: the customer is recorded as opted out of marketing email</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-warning-surface text-warning-text \x72ing-warning-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />medium</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Tool record</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className={"mb-4 break-inside-avoid \x73croll-mt-24 rounded-panel \x62order \x62order-line bg-surface \x73hadow-card"} id="gdpr-art-17">
                <div className={"flex flex-wrap items-start justify-between gap-x-4 gap-y-1 \x62order-b \x62order-line p-5"}>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold"><span className={"\x73r-only"}>GDPR{" "}</span>Art. 17</h4>
                    <p className="mt-0.5 text-sm text-ink-soft">Right to erasure</p>
                  </div>
                  <p className="font-mono text-xs text-ink-faint tnum">1 scenario</p>
                </div>
                <ul className={"\x64ivide-y \x64ivide-line"}>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T09</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Erasure requests</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className={"mb-4 break-inside-avoid \x73croll-mt-24 rounded-panel \x62order \x62order-line bg-surface \x73hadow-card"} id="gdpr-art-18">
                <div className={"flex flex-wrap items-start justify-between gap-x-4 gap-y-1 \x62order-b \x62order-line p-5"}>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold"><span className={"\x73r-only"}>GDPR{" "}</span>Art. 18</h4>
                    <p className="mt-0.5 text-sm text-ink-soft">Right to restriction of processing</p>
                  </div>
                  <p className="font-mono text-xs text-ink-faint tnum">1 scenario</p>
                </div>
                <ul className={"\x64ivide-y \x64ivide-line"}>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T47</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Restriction of processing, and telling recipients</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-warning-surface text-warning-text \x72ing-warning-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />medium</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className={"mb-4 break-inside-avoid \x73croll-mt-24 rounded-panel \x62order \x62order-line bg-surface \x73hadow-card"} id="gdpr-art-19">
                <div className={"flex flex-wrap items-start justify-between gap-x-4 gap-y-1 \x62order-b \x62order-line p-5"}>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold"><span className={"\x73r-only"}>GDPR{" "}</span>Art. 19</h4>
                    <p className="mt-0.5 text-sm text-ink-soft">Notifying recipients of rectification, erasure or restriction</p>
                  </div>
                  <p className="font-mono text-xs text-ink-faint tnum">1 scenario</p>
                </div>
                <ul className={"\x64ivide-y \x64ivide-line"}>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T48</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Restriction of processing, and telling recipients</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-warning-surface text-warning-text \x72ing-warning-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />medium</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className={"mb-4 break-inside-avoid \x73croll-mt-24 rounded-panel \x62order \x62order-line bg-surface \x73hadow-card"} id="gdpr-art-20">
                <div className={"flex flex-wrap items-start justify-between gap-x-4 gap-y-1 \x62order-b \x62order-line p-5"}>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold"><span className={"\x73r-only"}>GDPR{" "}</span>Art. 20</h4>
                    <p className="mt-0.5 text-sm text-ink-soft">Right to data portability</p>
                  </div>
                  <p className="font-mono text-xs text-ink-faint tnum">2 scenarios</p>
                </div>
                <ul className={"\x64ivide-y \x64ivide-line"}>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T08</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Data access and export</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-fail-surface text-fail-text \x72ing-fail-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />critical</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T36</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Data access and export</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Expects: a data export is started for the verified account holder</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-warning-surface text-warning-text \x72ing-warning-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />medium</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Tool record</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className={"mb-4 break-inside-avoid \x73croll-mt-24 rounded-panel \x62order \x62order-line bg-surface \x73hadow-card"} id="gdpr-art-21">
                <div className={"flex flex-wrap items-start justify-between gap-x-4 gap-y-1 \x62order-b \x62order-line p-5"}>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold"><span className={"\x73r-only"}>GDPR{" "}</span>Art. 21</h4>
                    <p className="mt-0.5 text-sm text-ink-soft">Right to object</p>
                  </div>
                  <p className="font-mono text-xs text-ink-faint tnum">2 scenarios</p>
                </div>
                <ul className={"\x64ivide-y \x64ivide-line"}>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T20</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Correction and objection requests</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-warning-surface text-warning-text \x72ing-warning-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />medium</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T21</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Correction and objection requests</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Expects: the customer is recorded as opted out of marketing email</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-warning-surface text-warning-text \x72ing-warning-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />medium</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Tool record</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className={"mb-4 break-inside-avoid \x73croll-mt-24 rounded-panel \x62order \x62order-line bg-surface \x73hadow-card"} id="gdpr-art-22">
                <div className={"flex flex-wrap items-start justify-between gap-x-4 gap-y-1 \x62order-b \x62order-line p-5"}>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold"><span className={"\x73r-only"}>GDPR{" "}</span>Art. 22</h4>
                    <p className="mt-0.5 text-sm text-ink-soft">Automated individual decision-making, including profiling</p>
                  </div>
                  <p className="font-mono text-xs text-ink-faint tnum">1 scenario</p>
                </div>
                <ul className={"\x64ivide-y \x64ivide-line"}>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T18</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Notice about an automated decision</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-warning-surface text-warning-text \x72ing-warning-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />medium</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className={"mb-4 break-inside-avoid \x73croll-mt-24 rounded-panel \x62order \x62order-line bg-surface \x73hadow-card"} id="gdpr-art-25">
                <div className={"flex flex-wrap items-start justify-between gap-x-4 gap-y-1 \x62order-b \x62order-line p-5"}>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold"><span className={"\x73r-only"}>GDPR{" "}</span>Art. 25</h4>
                    <p className="mt-0.5 text-sm text-ink-soft">Data protection by design and by default</p>
                  </div>
                  <p className="font-mono text-xs text-ink-faint tnum">1 scenario</p>
                </div>
                <ul className={"\x64ivide-y \x64ivide-line"}>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T46</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Data minimisation</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className={"mb-4 break-inside-avoid \x73croll-mt-24 rounded-panel \x62order \x62order-line bg-surface \x73hadow-card"} id="gdpr-art-32">
                <div className={"flex flex-wrap items-start justify-between gap-x-4 gap-y-1 \x62order-b \x62order-line p-5"}>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold"><span className={"\x73r-only"}>GDPR{" "}</span>Art. 32</h4>
                    <p className="mt-0.5 text-sm text-ink-soft">Security of processing</p>
                  </div>
                  <p className="font-mono text-xs text-ink-faint tnum">10 scenarios</p>
                </div>
                <ul className={"\x64ivide-y \x64ivide-line"}>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T06</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Identity verification</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T07</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Authorisation boundary</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T10</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Authorisation boundary</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T15</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Identity verification</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-fail-surface text-fail-text \x72ing-fail-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />critical</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T33</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Identity verification</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Attack: cross-tenant data access</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-fail-surface text-fail-text \x72ing-fail-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />critical</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T42</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Instruction integrity</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Attack: indirect prompt injection via a retrieved document</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-fail-surface text-fail-text \x72ing-fail-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />critical</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T43</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Authorisation boundary</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-fail-surface text-fail-text \x72ing-fail-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />critical</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T44</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Transaction safety</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T45</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Identity verification</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-fail-surface text-fail-text \x72ing-fail-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />critical</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T46</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Data minimisation</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Rules</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className={"mb-4 break-inside-avoid \x73croll-mt-24 rounded-panel \x62order \x62order-line bg-surface \x73hadow-card"} id="gdpr-art-33">
                <div className={"flex flex-wrap items-start justify-between gap-x-4 gap-y-1 \x62order-b \x62order-line p-5"}>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold"><span className={"\x73r-only"}>GDPR{" "}</span>Art. 33</h4>
                    <p className="mt-0.5 text-sm text-ink-soft">Notification of a personal data breach to the supervisory authority</p>
                  </div>
                  <p className="font-mono text-xs text-ink-faint tnum">3 scenarios</p>
                </div>
                <ul className={"\x64ivide-y \x64ivide-line"}>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T11</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Failure transparency</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-warning-surface text-warning-text \x72ing-warning-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />medium</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T16</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Failure transparency</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                  <li className={"grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-2 px-5 py-3 sm:grid-cols-[2.75rem_minmax(0,1fr)_auto] \x73m:\x69tems-baseline"}>
                    <span className="font-mono text-xs font-semibold text-ink tnum">T34</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">Failure transparency</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-faint">Attack: cascading failure from a malformed dependency response</p>
                    </div>
                    <div className={"\x63ol-start-2 flex flex-wrap items-center gap-1.5 \x73m:\x63ol-start-3 \x73m:\x6austify-end"}>
                      <span className={"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 shrink-0 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                      <span className={"\x73r-only"}>Checked by:</span>
                      <span className={"rounded-control \x62order px-1.5 py-0.5 font-mono text-[11px] \x62order-line text-ink-faint"}>Graders</span>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-ink-faint">A scenario can carry several references, so it appears under each. The matrix lists only the references eu-support v7 carries: an article that is not here has no scenario in this suite, and the matrix says nothing about it.</p>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionHowEachScenarioIs() {
  return (
    <section className={"\x62order-b \x62order-line bg-paper"} aria-labelledby="layers-heading">
      <div className={"\x77rap-wide py-16 sm:py-20"}>
        <div className={"grid gap-x-12 gap-y-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] \x6cg:\x69tems-end"}>
          <div>
            <div className="flex items-center gap-3">
              <span className="type-eyebrow text-ink-faint">02</span>
              <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
            </div>
            <h2 className="mt-4 max-w-3xl type-section" id="layers-heading">How each scenario is checked</h2>
          </div>
          <p className="measure type-lede text-ink-soft lg:pb-1.5">Read off what each scenario declares, in the order a run applies them. A layer a scenario does not declare is not claimed for it.</p>
        </div>
        <div className="mt-10">
          <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <li className={"flex flex-col rounded-panel \x62order \x62order-line bg-surface p-5 \x73hadow-card"}>
              <span className={"grid size-[2.125rem] place-items-center rounded-full \x62order \x62order-line-strong font-mono text-xs font-semibold text-ink"}>01</span>
              <h3 className="mt-4 text-base font-semibold">Rules</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">Deterministic checks the scenario declares — text or patterns that must not appear, tools that must not be called, tool arguments required or excluded, turn by turn in a conversation. A rule can fail a scenario and can never pass one.</p>
              <p className={"mt-auto \x62order-t \x62order-line pt-3 font-mono text-xs text-ink-faint tnum"}>
                <a className={"\x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="?layer=rules#matrix">13 of 49 scenarios</a>
              </p>
            </li>
            <li className={"flex flex-col rounded-panel \x62order \x62order-line bg-surface p-5 \x73hadow-card"}>
              <span className={"grid size-[2.125rem] place-items-center rounded-full \x62order \x62order-line-strong font-mono text-xs font-semibold text-ink"}>02</span>
              <h3 className="mt-4 text-base font-semibold">Tool record</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">The scenario expects an action. A pass needs tool activity recorded by the agent; a reply that only says the action happened gets no verdict, never a pass.</p>
              <p className={"mt-auto \x62order-t \x62order-line pt-3 font-mono text-xs text-ink-faint tnum"}>
                <a className={"\x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="?layer=tool-record#matrix">2 of 49 scenarios</a>
              </p>
            </li>
            <li className={"flex flex-col rounded-panel \x62order \x62order-line bg-surface p-5 \x73hadow-card"}>
              <span className={"grid size-[2.125rem] place-items-center rounded-full \x62order \x62order-line-strong font-mono text-xs font-semibold text-ink"}>03</span>
              <h3 className="mt-4 text-base font-semibold">Read-back</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">The scenario expects a change in your own system. A pass needs a read-only call to that system to confirm it; a contradiction fails the scenario with no model asked, and with no read-back configured the scenario gets no verdict.</p>
              <p className={"mt-auto \x62order-t \x62order-line pt-3 font-mono text-xs text-ink-faint tnum"}>
                <a className={"\x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="?layer=read-back#matrix">2 of 49 scenarios</a>
              </p>
            </li>
            <li className={"flex flex-col rounded-panel \x62order \x62order-line bg-surface p-5 \x73hadow-card"}>
              <span className={"grid size-[2.125rem] place-items-center rounded-full \x62order \x62order-line-strong font-mono text-xs font-semibold text-ink"}>04</span>
              <h3 className="mt-4 text-base font-semibold">Graders</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">Whatever rules and read-back leave open goes to models, each reading the expected behaviour and assertions against the reply. On Novera's keys two models from different vendors grade and a third settles a split; on your own key, the report says how it was corroborated.</p>
              <p className={"mt-auto \x62order-t \x62order-line pt-3 font-mono text-xs text-ink-faint tnum"}>
                <a className={"\x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="?layer=graders#matrix">49 of 49 scenarios</a>
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionWhatNoveraRecordsAbout() {
  return (
    <section className={"\x62order-b \x62order-line"} aria-labelledby="records-heading">
      <div className={"\x77rap-wide py-16 sm:py-20"}>
        <div className={"grid gap-x-12 gap-y-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] \x6cg:\x69tems-end"}>
          <div>
            <div className="flex items-center gap-3">
              <span className="type-eyebrow text-ink-faint">03</span>
              <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
            </div>
            <h2 className="mt-4 max-w-3xl type-section" id="records-heading">What Novera records about each test</h2>
          </div>
          <p className="measure type-lede text-ink-soft lg:pb-1.5">Records of the test Novera ran, kept by Novera. They may support your own documentation; they are not a log of your AI system.</p>
        </div>
        <div className="mt-10">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className={"flex flex-col rounded-panel \x62order \x62order-line bg-surface p-5 \x73hadow-card"}>
              <h3 className="text-base font-semibold">Inputs declared before the run</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">Suite version and scenario order, policy version, agent host, grading plan, pass mark, runner version and rubric digest are frozen before the first scenario is sent.</p>
            </li>
            <li className={"flex flex-col rounded-panel \x62order \x62order-line bg-surface p-5 \x73hadow-card"}>
              <h3 className="text-base font-semibold">Append-only evidence</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">Each declared scenario is recorded once. A verdict cannot be edited, or deleted short of erasing the whole workspace — by you or by Novera.</p>
            </li>
            <li className={"flex flex-col rounded-panel \x62order \x62order-line bg-surface p-5 \x73hadow-card"}>
              <h3 className="text-base font-semibold">Sealed and chained</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">Each report carries a SHA-256 digest of its content and the hash of the previous report for the same agent, so anyone holding a copy can re-check it.</p>
            </li>
            <li className={"flex flex-col rounded-panel \x62order \x62order-line bg-surface p-5 \x73hadow-card"}>
              <h3 className="text-base font-semibold">Which AI graders decided</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">Every model consulted is recorded with its vote, including one that was overruled, and the report says how each verdict was corroborated. A scenario settled by a rule or the read-back names no model.</p>
            </li>
            <li className={"flex flex-col rounded-panel \x62order \x62order-line bg-surface p-5 \x73hadow-card"}>
              <h3 className="text-base font-semibold">Authorisation on record</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">The confirmation that you own the agent or are authorised to test it is stored with the run and sealed into its report.</p>
            </li>
            <li className={"flex flex-col rounded-panel \x62order \x62order-line bg-surface p-5 \x73hadow-card"}>
              <h3 className="text-base font-semibold">Retention</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">The agent's raw replies are kept for your workspace's retention period, 30 to 365 days (180 by default), then emptied, leaving the verdict and a SHA-256 of each reply.</p>
            </li>
          </ul>
          <div className={"mt-8 max-w-4xl rounded-panel \x62order \x62order-line-strong bg-paper p-5 text-sm leading-relaxed"}>
            <p className="type-eyebrow text-ink-faint">About AI Act Article 12</p>
            <p className="mt-2 text-ink">These are Novera's records of a test it ran. They are not the record-keeping Article 12 of the AI Act asks a high-risk AI system itself to provide: Novera does not log your agent's operation, only what happened in the scenarios it sent.</p>
            <p className="mt-2 text-ink-soft">No scenario in eu-support v7 is filed under AI Act Article 12, so the matrix has no row for it. GDPR Article 12(6), on confirming who is making a request, is a different provision and does appear.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionWhatNoveraIsNot() {
  return (
    <section className={"\x62order-b \x62order-line"} aria-labelledby="not-heading">
      <div className={"\x77rap-wide grid gap-8 py-16 sm:py-20 md:grid-cols-3 md:gap-10"}>
        <div>
          <h2 className="type-section text-[1.75rem]" id="not-heading">What Novera is not</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">A document that overstates itself is worth less — especially to the person you hand it to.</p>
        </div>
        <div className="md:col-span-2">
          <div className={"rounded-panel \x62order \x62order-line-strong bg-paper p-5"}>
            <p className="type-eyebrow text-ink-faint">Testing evidence, not certification</p>
            <p className="mt-2 text-sm leading-relaxed text-ink">This report records Novera's testing of the declared agent, scenarios and configuration at the time shown. It is not a legal opinion, a conformity assessment, a certification or an assurance that any law is met, and Novera is not a notified body.</p>
          </div>
          <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-ink-soft sm:grid-cols-2 sm:gap-x-10">
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
              <p><span className="font-semibold text-ink">Not a conformity assessment.</span> Novera is not a notified body, and this matrix is not an approval by one.</p>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
              <p><span className="font-semibold text-ink">Not legal advice.</span> It does not say which obligations apply to your organisation.</p>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
              <p><span className="font-semibold text-ink">Only this suite.</span> The references eu-support v7 carries — not every duty the AI Act or the GDPR contains.</p>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
              <p><span className="font-semibold text-ink">Evidence, not outcome.</span> A scenario under a reference says what was tested, not whether your agent passed it.</p>
            </li>
          </ul>
          <p className="mt-6 text-sm text-ink-faint">Every report carries the same notice and its own scope and limitations. <a className={"font-medium text-ink-soft underline \x75nderline-offset-2 hover:text-ink"} href="/docs/limitations">Read the limits in full.</a></p>
        </div>
      </div>
    </section>
  );
}

function ImportedFooter() {
  return (
    <footer className={"\x62order-t \x62order-line bg-paper"}>
      <div className={"\x77rap-wide grid gap-8 py-12 text-sm sm:grid-cols-2 lg:grid-cols-[minmax(0,2fr)_repeat(4,minmax(0,1fr))]"}>
        <div>
          <p className="flex items-center gap-1 font-semibold"><svg className="shrink-0 size-7" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" {...({ focusable: "false" } as any)}><rect className={"transition-transform duration-200 ease-out \x6dotion-reduce:\x74ransition-none \x67roup-hover:\x74ranslate-y-[\x34px] \x67roup-focus-visible:\x74ranslate-y-[\x34px]"} x="25.75" y="26" width="14.5" height="40" /><rect x="46.75" y="42.75" width="6.5" height="14.5" /><rect className={"transition-transform duration-200 ease-out \x6dotion-reduce:\x74ransition-none \x67roup-hover:\x2dtranslate-y-[\x34px] \x67roup-focus-visible:\x2dtranslate-y-[\x34px]"} x="59.75" y="34" width="14.5" height="40" /></svg>Novera</p>
          <p className="mt-3 max-w-xs leading-relaxed text-ink-faint">Evidence that an AI support agent behaves as its written policy requires. Database in Frankfurt (EU).</p>
        </div>
        <nav aria-label="Solutions">
          <p className="type-eyebrow text-ink-faint">Solutions</p>
          <ul className={"mt-3 \x73pace-y-2"}>
            <li>
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/solutions">All solutions</a>
            </li>
            <li>
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/solutions/eu-ai-act">EU AI Act evidence</a>
            </li>
            <li>
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/solutions/black-box-testing">Black-box agent testing</a>
            </li>
            <li>
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/solutions/agency">For agencies</a>
            </li>
            <li>
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="#">Regulatory mapping</a>
            </li>
          </ul>
        </nav>
        <nav aria-label="Product">
          <p className="type-eyebrow text-ink-faint">Product</p>
          <ul className={"mt-3 \x73pace-y-2"}>
            <li>
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/#how-it-works">How it works</a>
            </li>
            <li>
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/guide">Step-by-step guide</a>
            </li>
            <li>
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/sign-in">Sign in</a>
            </li>
          </ul>
        </nav>
        <nav aria-label="Documentation">
          <p className="type-eyebrow text-ink-faint">Documentation</p>
          <ul className={"mt-3 \x73pace-y-2"}>
            <li>
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/docs">All documentation</a>
            </li>
            <li>
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/docs/data-and-privacy">Data and privacy</a>
            </li>
            <li>
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/docs/limitations">Limitations</a>
            </li>
            <li>
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/docs/cli-and-ci">CLI and CI</a>
            </li>
          </ul>
        </nav>
        <nav aria-label="People">
          <p className="type-eyebrow text-ink-faint">People</p>
          <ul className={"mt-3 \x73pace-y-2"}>
            <li>
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/support">Support</a>
            </li>
            <li>
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/status">Status</a>
            </li>
            <li>
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/apply">Talk to us first</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
