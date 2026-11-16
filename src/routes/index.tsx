import { useState, useEffect, type CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/index.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{"title": "Novera — Evidence-first agent testing"}, {"name": "description", "content": "Test AI support agents against versioned scenarios and share sealed reports with evidence and clear limits."}, {"property": "og:title", "content": "Novera — Evidence-first agent testing"}, {"property": "og:description", "content": "Test AI support agents against versioned scenarios and share sealed reports with evidence and clear limits."}, {"property": "og:type", "content": "website"}, {"name": "twitter:card", "content": "summary_large_image"}] }),
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
          <ImportedSectionWhenYourClientAsks />
          <ImportedSectionWhatOneScenarioGoes />
          <ImportedSectionManualSpotCheckingCovers />
          <ImportedSectionAReportIsOnly />
          <ImportedSectionFourStepsAboutTen />
          <ImportedSectionWhatHappensAfterA />
          <ImportedSectionFitsTheWayYou />
          <ImportedSectionWhereYourDataGoes />
          <ImportedSectionRunItAgainstYour />
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

function ImportedSectionWhenYourClientAsks() {
  const [tab, setTab] = useState('Summary');
  const [evidence, setEvidence] = useState(false);
  const [paused, setPaused] = useState(false);
  const [sealed, setSealed] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setTab(t => t === 'Summary' ? 'Findings' : t === 'Findings' ? 'Since last run' : 'Summary'), 7000);
    return () => window.clearInterval(timer);
  }, [paused]);
  return (
    <section className={"relative overflow-hidden \x62order-b \x62order-line"} id="evidence">
      <div className={"\x62g-blueprint pointer-events-none absolute inset-0"} aria-hidden="true" />
      <div className={"\x77rap-wide relative grid gap-12 py-14 sm:py-20 lg:grid-cols-[minmax(0,6fr)_minmax(0,7fr)] \x6cg:\x69tems-center lg:gap-14 lg:py-24"}>
        <div className="novera-reveal" style={{ animationDelay: "0ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
          <p className="type-eyebrow text-ink-faint">For agencies and teams who ship AI support agents to clients</p>
          <h1 className="mt-5 type-display">When your client asks how the agent behaves, send them <span className="text-ink-soft">the document.</span></h1>
          <p className="mt-6 measure type-lede text-ink-soft">Novera runs a versioned scenario suite against an agent you operate, checks what it claimed against what actually happened, and seals a dated report that says what was tested, what was judged, what was verified — and what remains unknown.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className={"inline-flex items-center justify-center gap-2 rounded-control font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out \x61ctive:\x73cale-[\x30.\x398] \x64isabled:\x63ursor-not-allowed \x64isabled:\x61ctive:\x73cale-100 bg-ink text-on-ink \x73hadow-button hover:bg-ink-hover active:bg-ink-hover disabled:bg-ink-ghost \x64isabled:\x73hadow-none px-4 py-2.5 text-sm px-5 py-3 text-[15px]"} href="/sign-in">Start with three free runs</a>
            <a className={"inline-flex items-center justify-center gap-2 rounded-control font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out \x61ctive:\x73cale-[\x30.\x398] \x64isabled:\x63ursor-not-allowed \x64isabled:\x61ctive:\x73cale-100 \x62order \x62order-line-strong bg-surface text-ink \x73hadow-card \x68over:\x62order-ink-ghost hover:bg-ground active:bg-sunken disabled:text-ink-ghost \x64isabled:\x73hadow-none px-4 py-2.5 text-sm px-5 py-3 text-[15px]"} href="#how-it-works">See how it works</a>
          </div>
          <p className="mt-4 text-sm text-ink-faint">No card. About ten minutes to a first report. Three free runs, then a plan for recurring testing.</p>
          <dl className={"mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-4 \x62order-t \x62order-line pt-6"}>
            <div>
              <dt className="font-mono text-sm font-semibold text-ink tnum">49</dt>
              <dd className="mt-0.5 text-xs leading-relaxed text-ink-faint">scenarios in every run, fixed per suite version</dd>
            </div>
            <div>
              <dt className="font-mono text-sm font-semibold text-ink tnum">2 vendors</dt>
              <dd className="mt-0.5 text-xs leading-relaxed text-ink-faint">grade each verdict on our key</dd>
            </div>
            <div>
              <dt className="font-mono text-sm font-semibold text-ink tnum">SHA-256</dt>
              <dd className="mt-0.5 text-xs leading-relaxed text-ink-faint">seals every report to its evidence</dd>
            </div>
            <div>
              <dt className="font-mono text-sm font-semibold text-ink tnum">Frankfurt</dt>
              <dd className="mt-0.5 text-xs leading-relaxed text-ink-faint">where the database runs</dd>
            </div>
          </dl>
        </div>
        <div className="novera-reveal" style={{ animationDelay: "120ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
          <div className={"overflow-hidden rounded-shell \x62order \x62order-line-strong bg-surface \x73hadow-[\x30_40px_90px_-50px_rgb(\x328_25_23/\x30.\x345)]"}>
            <div className={"flex flex-wrap items-center justify-between gap-x-3 gap-y-2 \x62order-b \x62order-line bg-paper px-4 py-2.5 sm:px-5"}>
              <p className="flex items-center gap-2 text-xs font-medium text-ink">
                <span className={"whitespace-nowrap rounded-full \x62order \x62order-warning-text/\x340 bg-warning-surface px-2 py-0.5 text-warning-text"}>Illustrative data</span>
                <span className="text-ink-soft">Not a real agent — what a client receives</span>
              </p>
              <div className="flex items-center gap-3">
                <span className="type-mono text-[11px] text-ink-faint">eu-support v7 · 49 scenarios</span>
                <button className={"novera-press rounded-full \x62order \x62order-line-strong px-2 py-0.5 text-[11px] font-medium text-ink-soft \x68over:\x62order-ink-ghost hover:text-ink"} type="button" aria-pressed={paused} onClick={() => setPaused(v => !v)}>{paused ? "Resume motion" : "Pause motion"}</button>
              </div>
            </div>
            <div className={"flex gap-1 overflow-x-auto \x62order-b \x62order-line px-3 pt-2 sm:px-4"} role="tablist" aria-label="Report sections">
              <button className={"relative shrink-0 \x72ounded-t-control px-3 py-2 text-sm font-medium transition-colors duration-150 text-ink"} type="button" role="tab" id="preview-tab-Summary" aria-selected={tab === "Summary"} onClick={() => { setTab("Summary"); setPaused(true); }} aria-controls="preview-panel">Summary<span className={"novera-line-x absolute \x69nset-x-2 -bottom-px h-0.5 rounded-full bg-ink"} style={{ transform: "scaleX(1)" }} aria-hidden="true" data-play="true" /></button>
              <button className={"relative shrink-0 \x72ounded-t-control px-3 py-2 text-sm font-medium transition-colors duration-150 text-ink-faint hover:text-ink"} type="button" role="tab" id="preview-tab-Findings" aria-selected={tab === "Findings"} onClick={() => { setTab("Findings"); setPaused(true); }} aria-controls="preview-panel">Findings</button>
              <button className={"relative shrink-0 \x72ounded-t-control px-3 py-2 text-sm font-medium transition-colors duration-150 text-ink-faint hover:text-ink"} type="button" role="tab" id="preview-tab-Since last run" aria-selected={tab === "Since last run"} onClick={() => { setTab("Since last run"); setPaused(true); }} aria-controls="preview-panel">Since last run</button>
            </div>
            <div className="p-4 sm:p-5" id="preview-panel" role="tabpanel" aria-labelledby="preview-tab-Summary">
              {tab === "Summary" ? <div className="novera-fade" style={{ opacity: "1" }}>
                <div className={"grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] \x73m:\x69tems-center"}>
                  <div className="flex items-center gap-4">
                    <div className={"grid size-[4.5rem] shrink-0 place-items-center rounded-panel \x62order-2 \x62order-pass-border bg-pass-surface text-pass-text"}>
                      <span className="text-4xl font-bold leading-none tracking-tight">A</span>
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline">
                        <p className="type-eyebrow text-ink-faint">Grade</p>
                      </div>
                      <p className="mt-1 text-sm font-semibold text-ink">48 of 49 scenarios passed</p>
                      <p className="mt-0.5 max-w-xs text-xs leading-relaxed text-ink-soft">Every scenario has a verdict. Meets the pass mark set for this evaluation.</p>
                    </div>
                  </div>
                  <dl className="grid grid-cols-3 gap-2 text-center sm:w-60">
                    <div className={"flex flex-col-reverse rounded-panel \x62order \x62order-line px-2 py-2"}>
                      <dt className="text-[11px] text-ink-faint">passed</dt>
                      <dd className="text-2xl font-semibold text-pass-text">
                        <span className="tnum">48</span>
                      </dd>
                    </div>
                    <div className={"flex flex-col-reverse rounded-panel \x62order \x62order-line px-2 py-2"}>
                      <dt className="text-[11px] text-ink-faint">failed</dt>
                      <dd className="text-2xl font-semibold text-fail-text">
                        <span className="tnum">1</span>
                      </dd>
                    </div>
                    <div className={"flex flex-col-reverse rounded-panel \x62order \x62order-line px-2 py-2"}>
                      <dt className="text-[11px] text-ink-faint">no verdict</dt>
                      <dd className="text-2xl font-semibold text-ink-faint">
                        <span className="tnum">0</span>
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="type-eyebrow text-ink-faint">Every scenario</p>
                    <p className="flex items-center gap-3 text-[11px] text-ink-faint" aria-hidden="true">
                      <span className="flex items-center gap-1"><span className={"size-2.5 rounded-[3px] \x62order bg-pass-surface \x62order-pass-border"} />passed</span>
                      <span className="flex items-center gap-1"><span className={"size-2.5 rounded-[3px] \x62order bg-fail-text \x62order-fail-text"} />failed</span>
                      <span className="flex items-center gap-1"><span className={"size-2.5 rounded-[3px] \x62order bg-warning-surface \x62order-warning-text \x62order-dashed"} />no verdict</span>
                    </p>
                  </div>
                  <ol className="mt-2 grid grid-cols-[repeat(13,minmax(0,1fr))] gap-1 sm:grid-cols-[repeat(25,minmax(0,1fr))]" aria-label="49 scenarios by verdict. Failed and no-verdict scenarios open their evidence.">
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T01 passed">
                        <span className={"\x73r-only"}>T01 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T02 passed">
                        <span className={"\x73r-only"}>T02 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T03 passed">
                        <span className={"\x73r-only"}>T03 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T04 passed">
                        <span className={"\x73r-only"}>T04 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T05 passed">
                        <span className={"\x73r-only"}>T05 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T06 passed">
                        <span className={"\x73r-only"}>T06 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T07 passed">
                        <span className={"\x73r-only"}>T07 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T08 passed">
                        <span className={"\x73r-only"}>T08 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T09 passed">
                        <span className={"\x73r-only"}>T09 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T10 passed">
                        <span className={"\x73r-only"}>T10 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T11 passed">
                        <span className={"\x73r-only"}>T11 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T12 passed">
                        <span className={"\x73r-only"}>T12 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T13 passed">
                        <span className={"\x73r-only"}>T13 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T14 passed">
                        <span className={"\x73r-only"}>T14 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T15 passed">
                        <span className={"\x73r-only"}>T15 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T16 passed">
                        <span className={"\x73r-only"}>T16 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T17 passed">
                        <span className={"\x73r-only"}>T17 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T18 passed">
                        <span className={"\x73r-only"}>T18 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T19 passed">
                        <span className={"\x73r-only"}>T19 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T20 passed">
                        <span className={"\x73r-only"}>T20 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T21 passed">
                        <span className={"\x73r-only"}>T21 passed</span>
                      </span>
                    </li>
                    <li>
                      <button className={"block aspect-square w-full rounded-[4px] \x62order bg-fail-text \x62order-fail-text novera-press \x68over:\x73cale-110"} type="button" aria-expanded="false" aria-controls="preview-evidence" title="T22 failed — open the evidence">
                        <span className={"\x73r-only"}>T22{" "}failed, open the evidence</span>
                      </button>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T23 passed">
                        <span className={"\x73r-only"}>T23 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T24 passed">
                        <span className={"\x73r-only"}>T24 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T25 passed">
                        <span className={"\x73r-only"}>T25 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T26 passed">
                        <span className={"\x73r-only"}>T26 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T27 passed">
                        <span className={"\x73r-only"}>T27 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T28 passed">
                        <span className={"\x73r-only"}>T28 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T29 passed">
                        <span className={"\x73r-only"}>T29 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T30 passed">
                        <span className={"\x73r-only"}>T30 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T31 passed">
                        <span className={"\x73r-only"}>T31 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T32 passed">
                        <span className={"\x73r-only"}>T32 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T33 passed">
                        <span className={"\x73r-only"}>T33 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T34 passed">
                        <span className={"\x73r-only"}>T34 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T35 passed">
                        <span className={"\x73r-only"}>T35 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T36 passed">
                        <span className={"\x73r-only"}>T36 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T37 passed">
                        <span className={"\x73r-only"}>T37 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T38 passed">
                        <span className={"\x73r-only"}>T38 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T39 passed">
                        <span className={"\x73r-only"}>T39 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T40 passed">
                        <span className={"\x73r-only"}>T40 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T41 passed">
                        <span className={"\x73r-only"}>T41 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T42 passed">
                        <span className={"\x73r-only"}>T42 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T43 passed">
                        <span className={"\x73r-only"}>T43 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T44 passed">
                        <span className={"\x73r-only"}>T44 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T45 passed">
                        <span className={"\x73r-only"}>T45 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T46 passed">
                        <span className={"\x73r-only"}>T46 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T47 passed">
                        <span className={"\x73r-only"}>T47 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T48 passed">
                        <span className={"\x73r-only"}>T48 passed</span>
                      </span>
                    </li>
                    <li>
                      <span className={"block aspect-square w-full rounded-[4px] \x62order bg-pass-surface \x62order-pass-border"} title="T49 passed">
                        <span className={"\x73r-only"}>T49 passed</span>
                      </span>
                    </li>
                  </ol>
                </div>
                <div className={"mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-panel \x62order \x62order-line bg-ground px-3.5 py-2.5"}>
                  <div className="flex min-w-0 flex-wrap items-center gap-x-2 text-xs">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-ink text-[10px] text-on-ink" aria-hidden="true">✓</span>
                    <span className="font-semibold text-ink">Sealed</span>
                    <span className="type-mono break-all text-[11px] text-ink-soft">SHA-256 9f2c…e41a</span>
                    <details className="group print-hide inline-block align-middle">
                      <summary className={"group/mark -my-1 ml-1 inline-flex size-6 cursor-pointer list-none items-center justify-center rounded-full \x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ink"} aria-label="What is this? SHA-256 seal" title="What is this? SHA-256 seal">
                        <span className={"grid size-5 place-items-center rounded-full \x62order \x62order-line-strong text-[11px] font-semibold leading-none text-ink-soft \x67roup-hover/\x6dark:\x62g-sunken \x67roup-open:\x62g-sunken"} aria-hidden="true">?</span>
                      </summary>
                      <span className={"mt-2 block max-w-prose \x73pace-y-2 rounded-lg \x62order \x62order-line bg-sunken px-3 py-2 text-sm font-normal leading-relaxed tracking-normal text-ink-soft"}>
                        <span className="block">
                          <span className="block text-xs font-semibold text-ink">What it is</span>
                          <span className="block">A SHA-256 digest is a fingerprint of the report's sealed content. Change one figure or one word in it and the digest no longer matches.</span>
                        </span>
                        <span className="block">
                          <span className="block text-xs font-semibold text-ink">Why it matters</span>
                          <span className="block">It lets anyone check that a report was not edited after it was issued, without taking Novera's word for it. It records what was tested; it is not a certification.</span>
                        </span>
                        <span className="block">
                          <span className="block text-xs font-semibold text-ink">What to do next</span>
                          <span className="block">Paste the digest into the seal check at /verify, or check a downloaded JSON export there. The Seal button on the run page shows the command that recomputes it yourself.</span>
                        </span>
                        <span className="block">
                          <a className={"font-medium text-ink underline \x75nderline-offset-2"} href="/docs/evidence-integrity">Read more in the docs</a>
                        </span>
                      </span>
                    </details>
                  </div>
                  <div className="flex flex-wrap items-center">
                    <p className="text-[11px] text-ink-faint tnum">Ran 49 of 49 · verdicts 49 of 49 · actions checked 4 of 4</p>
                    <details className="group print-hide inline-block align-middle">
                      <summary className={"group/mark -my-1 ml-1 inline-flex size-6 cursor-pointer list-none items-center justify-center rounded-full \x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ink"} aria-label="What is this? Coverage" title="What is this? Coverage">
                        <span className={"grid size-5 place-items-center rounded-full \x62order \x62order-line-strong text-[11px] font-semibold leading-none text-ink-soft \x67roup-hover/\x6dark:\x62g-sunken \x67roup-open:\x62g-sunken"} aria-hidden="true">?</span>
                      </summary>
                      <span className={"mt-2 block max-w-prose \x73pace-y-2 rounded-lg \x62order \x62order-line bg-sunken px-3 py-2 text-sm font-normal leading-relaxed tracking-normal text-ink-soft"}>
                        <span className="block">
                          <span className="block text-xs font-semibold text-ink">What it is</span>
                          <span className="block">Coverage is three numbers: how much of the suite ran, how much of what ran has an accountable outcome, and how much of the proof the scenarios asked for was observed. A figure is left empty rather than shown as 0 or 100 when the run holds nothing to compute it from.</span>
                        </span>
                        <span className="block">
                          <span className="block text-xs font-semibold text-ink">Why it matters</span>
                          <span className="block">One percentage cannot show how much of an evaluation is missing. Scenarios that errored or never ran are counted on their own lines and never as passes.</span>
                        </span>
                        <span className="block">
                          <span className="block text-xs font-semibold text-ink">What to do next</span>
                          <span className="block">Read the counts beside it, then open the Cases tab and choose No result to see the scenarios behind the gap.</span>
                        </span>
                        <span className="block">
                          <a className={"font-medium text-ink underline \x75nderline-offset-2"} href="/docs/what-the-report-contains">Read more in the docs</a>
                        </span>
                      </span>
                    </details>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                  <div className="flex min-w-0 flex-wrap items-center gap-2 text-xs">
                    <span className="font-semibold text-ink">1 finding</span>
                    <span className={"inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[11px] font-medium \x72ing-1 \x72ing-inset bg-high-surface text-high-text \x72ing-high-border"}><span className={"size-1.5 rounded-full \x62g-current"} aria-hidden="true" />high</span>
                    <span className="text-ink-soft">Transaction safety · T22</span>
                    <details className="group print-hide inline-block align-middle">
                      <summary className={"group/mark -my-1 ml-1 inline-flex size-6 cursor-pointer list-none items-center justify-center rounded-full \x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ink"} aria-label="What is this? Your own system disagrees" title="What is this? Your own system disagrees">
                        <span className={"grid size-5 place-items-center rounded-full \x62order \x62order-line-strong text-[11px] font-semibold leading-none text-ink-soft \x67roup-hover/\x6dark:\x62g-sunken \x67roup-open:\x62g-sunken"} aria-hidden="true">?</span>
                      </summary>
                      <span className={"mt-2 block max-w-prose \x73pace-y-2 rounded-lg \x62order \x62order-line bg-sunken px-3 py-2 text-sm font-normal leading-relaxed tracking-normal text-ink-soft"}>
                        <span className="block">
                          <span className="block text-xs font-semibold text-ink">What it is</span>
                          <span className="block">The agent said it did something, and the read-only check of your own system does not show it. The scenario fails on that basis alone, with no grading model asked.</span>
                        </span>
                        <span className="block">
                          <span className="block text-xs font-semibold text-ink">Why it matters</span>
                          <span className="block">A claimed action is not a verified one. This finding rests on your system's record, not on how the reply was worded, so it is the strongest one a run can make.</span>
                        </span>
                        <span className="block">
                          <span className="block text-xs font-semibold text-ink">What to do next</span>
                          <span className="block">Check the action in your own system. If it did not happen, fix the agent. If the read-back path or the expectation is wrong, correct it under Verifying what the agent does on the agent's page, then retest.</span>
                        </span>
                        <span className="block">
                          <a className={"font-medium text-ink underline \x75nderline-offset-2"} href="/docs/evidence-integrity">Read more in the docs</a>
                        </span>
                      </span>
                    </details>
                  </div>
                  <button className={"novera-press inline-flex items-center gap-1 rounded-control \x62order \x62order-line-strong px-2.5 py-1 text-xs font-medium text-ink \x68over:\x62order-ink-ghost"} type="button" aria-expanded={evidence} onClick={() => setEvidence(v => !v)} aria-controls="preview-evidence">Show evidence<span className="transition-transform duration-150" aria-hidden="true">▾</span></button>
                </div>
              </div> : tab === "Findings" ? <><ul className="space-y-2"><li><button type="button" aria-expanded="false" aria-controls="preview-evidence" className="novera-press w-full rounded-panel border px-3.5 py-2.5 text-left border-line hover:border-line-strong"><span className="flex flex-wrap items-center gap-2"><span className="inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[11px] font-medium ring-1 ring-inset bg-high-surface text-high-text ring-high-border"><span aria-hidden="true" className="size-1.5 rounded-full bg-current"></span>{"high"}</span><span className="type-mono text-xs text-ink-faint">{"T22"}</span><span className="text-sm font-medium">{"Transaction safety"}</span></span><span className="mt-1 block text-[13px] leading-relaxed text-ink-soft">{"Failed \u2014 the agent's claim was contradicted by the system of record."}</span></button></li><li className="pt-1 text-xs leading-relaxed text-ink-faint">{"One finding this run; the last run had five. A finding states what went wrong. It never reproduces the customer conversation and never quotes your policy."}</li></ul></> : <><div><p className="text-sm text-ink-soft">{"Policy v3 \u2192 v4, same suite version, same 49 scenarios."}</p><div className="mt-3 space-y-2"><div><p className="text-xs text-ink-faint">{"Last run (baseline)"}</p><ol aria-hidden="true" className="mt-1 grid grid-cols-[repeat(13,minmax(0,1fr))] gap-1 sm:grid-cols-[repeat(25,minmax(0,1fr))] [perspective:400px]"><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-fail-text border-fail-text outline-1 outline-offset-1 outline-trace"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-fail-text border-fail-text outline-1 outline-offset-1 outline-trace"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-fail-text border-fail-text outline-1 outline-offset-1 outline-trace"></li><li className="block aspect-square rounded-[4px] border bg-fail-text border-fail-text outline-1 outline-offset-1 outline-trace"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-fail-text border-fail-text"></li><li className="block aspect-square rounded-[4px] border bg-warning-surface border-warning-text border-dashed outline-1 outline-offset-1 outline-trace"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-warning-surface border-warning-text border-dashed outline-1 outline-offset-1 outline-trace"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-warning-surface border-warning-text border-dashed outline-1 outline-offset-1 outline-trace"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li></ol></div><div><p className="text-xs text-ink-faint">{"This run"}</p><ol aria-hidden="true" className="mt-1 grid grid-cols-[repeat(13,minmax(0,1fr))] gap-1 sm:grid-cols-[repeat(25,minmax(0,1fr))] [perspective:400px]"><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border outline-1 outline-offset-1 outline-trace"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border outline-1 outline-offset-1 outline-trace"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border outline-1 outline-offset-1 outline-trace"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border outline-1 outline-offset-1 outline-trace"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-fail-text border-fail-text"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border outline-1 outline-offset-1 outline-trace"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border outline-1 outline-offset-1 outline-trace"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border outline-1 outline-offset-1 outline-trace"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li><li className="block aspect-square rounded-[4px] border bg-pass-surface border-pass-border"></li></ol></div></div><dl className="mt-4 grid gap-2 sm:grid-cols-2"><div className="rounded-panel border border-line px-3 py-2"><dt className="text-xs font-semibold text-pass-text">{"Fixed"}</dt><dd className="type-mono mt-0.5 text-xs text-ink-soft">{"T04, T07, T14, T15"}</dd></div><div className="rounded-panel border border-line px-3 py-2"><dt className="text-xs font-semibold text-fail-text">{"Newly broken"}</dt><dd className="type-mono mt-0.5 text-xs text-ink-soft">{"none"}</dd></div><div className="rounded-panel border border-line px-3 py-2"><dt className="text-xs font-semibold text-ink">{"Still failing"}</dt><dd className="type-mono mt-0.5 text-xs text-ink-soft">{"T22"}</dd></div><div className="rounded-panel border border-line px-3 py-2"><dt className="text-xs font-semibold text-warning-text">{"No verdict last run, a pass now"}</dt><dd className="type-mono mt-0.5 text-xs text-ink-soft">{"T23, T35, T38"}</dd></div></dl><div className="mt-3 flex flex-wrap items-center justify-between gap-2"><p className="text-xs leading-relaxed text-ink-faint">{"\u201cNewly broken\u201d is stated even when it is empty."}</p><button type="button" className="novera-press rounded-control border border-line-strong px-2.5 py-1 text-xs font-medium text-ink hover:border-ink-ghost">{"Open last run's report"}</button></div></div></>}
              {evidence && <><section id="preview-evidence" aria-label="Evidence for T22" className="mt-4 rounded-panel border border-line bg-ground"><div className="flex flex-wrap items-start justify-between gap-2 border-b border-line px-3.5 py-2.5"><div className="min-w-0"><p className="flex flex-wrap items-center gap-2"><span className="type-mono text-xs text-ink-faint">{"T22"}</span><span className="text-sm font-semibold">{"Refund for invoice NW-4417"}</span></p><p className="mt-0.5 text-xs leading-relaxed text-ink-soft">{"Failed \u2014 the agent's claim was contradicted by the system of record."}</p></div><div className="flex shrink-0 items-center gap-1"><button type="button" className="novera-press rounded-control px-2 py-1 text-xs font-medium text-ink-soft hover:bg-sunken hover:text-ink" onClick={() => setEvidence(false)}>{"Close"}</button></div></div><ol className="relative grid gap-x-5 px-3.5 py-3 sm:grid-cols-2"><span aria-hidden="true" className="absolute bottom-5 left-[1.3rem] top-5 w-px bg-line sm:hidden"></span><li className="relative flex gap-3 py-1"><span aria-hidden="true" className="relative z-10 mt-1 grid size-3 shrink-0 place-items-center rounded-full ring-4 ring-ground transition-colors duration-200 bg-ink"></span><div className="min-w-0"><div className="flex flex-wrap items-baseline"><p className="text-xs font-semibold transition-colors duration-200 text-ink">{"Scenario sent "}<span className="font-normal text-ink-faint">{"\u00b7 done"}</span></p></div><p className="text-xs leading-relaxed transition-colors duration-200 text-ink-soft">{"\u201cPlease refund invoice NW-4417, it was charged twice.\u201d"}</p></div></li><li className="relative flex gap-3 py-1"><span aria-hidden="true" className="relative z-10 mt-1 grid size-3 shrink-0 place-items-center rounded-full ring-4 ring-ground transition-colors duration-200 bg-ink"></span><div className="min-w-0"><div className="flex flex-wrap items-baseline"><p className="text-xs font-semibold transition-colors duration-200 text-ink">{"Agent replied "}<span className="font-normal text-ink-faint">{"\u00b7 done"}</span></p></div><p className="text-xs leading-relaxed transition-colors duration-200 text-ink-soft">{"\u201cDone \u2014 your refund has been processed.\u201d Tool call: refund_invoice."}</p></div></li><li className="relative flex gap-3 py-1"><span aria-hidden="true" className="relative z-10 mt-1 grid size-3 shrink-0 place-items-center rounded-full ring-4 ring-ground transition-colors duration-200 bg-ink"></span><div className="min-w-0"><div className="flex flex-wrap items-baseline"><p className="text-xs font-semibold transition-colors duration-200 text-ink">{"Rules checked "}<span className="font-normal text-ink-faint">{"\u00b7 done"}</span></p></div><p className="text-xs leading-relaxed transition-colors duration-200 text-ink-soft">{"4 rules, none broken. Rules can fail a case; they never pass one."}</p></div></li><li className="relative flex gap-3 py-1"><span aria-hidden="true" className="relative z-10 mt-1 grid size-3 shrink-0 place-items-center rounded-full ring-4 ring-ground transition-colors duration-200 bg-fail-text"></span><div className="min-w-0"><div className="flex flex-wrap items-baseline"><p className="text-xs font-semibold transition-colors duration-200 text-ink">{"Read-back "}<span className="font-normal text-ink-faint">{"\u00b7 failed"}</span></p></div><p className="text-xs leading-relaxed transition-colors duration-200 text-ink-soft">{"GET /invoices/NW-4417 \u2192 status: open. The refund did not happen."}</p></div></li><li className="relative flex gap-3 py-1"><span aria-hidden="true" className="relative z-10 mt-1 grid size-3 shrink-0 place-items-center rounded-full ring-4 ring-ground transition-colors duration-200 bg-ink-ghost"></span><div className="min-w-0"><div className="flex flex-wrap items-baseline"><p className="text-xs font-semibold transition-colors duration-200 text-ink">{"Graders "}<span className="font-normal text-ink-faint">{"\u00b7 not needed"}</span></p></div><p className="text-xs leading-relaxed transition-colors duration-200 text-ink-soft">{"Not asked. A contradicted claim is settled by the read-back alone."}</p></div></li><li className="relative flex gap-3 py-1"><span aria-hidden="true" className="relative z-10 mt-1 grid size-3 shrink-0 place-items-center rounded-full ring-4 ring-ground transition-colors duration-200 bg-ink"></span><div className="min-w-0"><div className="flex flex-wrap items-baseline"><p className="text-xs font-semibold transition-colors duration-200 text-ink">{"Sealed "}<span className="font-normal text-ink-faint">{"\u00b7 done"}</span></p></div><p className="text-xs leading-relaxed transition-colors duration-200 text-ink-soft">{"Recorded as failed, with the read-back as its evidence."}</p></div></li></ol><div className="flex flex-wrap items-center gap-2 border-t border-line px-3.5 py-2.5"><span className="type-eyebrow text-ink-faint">{"Decided by"}</span><span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium border-fail-border text-fail-text">{"Read-back: fail"}</span><span className="ml-auto text-xs font-medium text-ink">{"Settled without a model"}</span></div></section></>}
              {sealed && <p className="mt-3 text-sm text-pass-text" role="status">Digest matches the sealed run.</p>}
            </div>
            <div className={"flex flex-wrap items-center justify-between gap-2 \x62order-t \x62order-line bg-paper px-4 py-2.5 sm:px-5"}>
              <p className="min-w-0 text-[11px] text-ink-faint">Illustrative digest · covers every verdict and its evidence</p>
              <button className={"novera-press rounded-full \x62order \x62order-line-strong px-2.5 py-0.5 text-[11px] font-medium text-ink-soft \x68over:\x62order-ink-ghost hover:text-ink"} type="button" onClick={() => setSealed(v => !v)}>Check the seal</button>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-ink-faint">Open the finding for its evidence chain, or compare it with the last run.</p>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionWhatOneScenarioGoes() {
  return (
    <section className={"\x62order-b \x62order-line"} aria-labelledby="trace-heading">
      <div className={"\x77rap-wide py-20 sm:py-24"}>
        <div className={"novera-reveal grid gap-x-12 gap-y-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] \x6cg:\x69tems-end"} style={{ animationDelay: "0ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
          <div>
            <div className="flex items-center gap-3">
              <span className="type-eyebrow text-ink-faint">01</span>
              <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
            </div>
            <h2 className="mt-4 max-w-3xl type-section" id="trace-heading">What one scenario goes through</h2>
          </div>
          <p className="measure type-lede text-ink-soft lg:pb-1.5">Six stages, in order, for every scenario. Each is stored, so a report shows which one decided the verdict.</p>
        </div>
        <div className="novera-reveal mt-12" style={{ animationDelay: "0ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
          <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            <span className={"novera-line-x absolute left-0 right-0 top-[1.0625rem] hidden h-px bg-line-strong \x6cg:\x62lock"} style={{ transform: "scaleX(1)" }} aria-hidden="true" data-site-import-responsive="284" />
            <li className="relative">
              <span className={"relative z-10 grid size-[2.125rem] place-items-center rounded-full \x62order \x62order-line-strong bg-surface font-mono text-xs font-semibold text-ink novera-pop"} style={{ "--delay": "200ms", transform: "scale(1)", opacity: "1" } as CSSProperties}>01</span>
              <h3 className="mt-4 text-base font-semibold">Scenario sent</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">A fixed input from a versioned suite — ordinary, tricky or an attack — over its declared channel.</p>
            </li>
            <li className="relative">
              <span className={"relative z-10 grid size-[2.125rem] place-items-center rounded-full \x62order \x62order-line-strong bg-surface font-mono text-xs font-semibold text-ink novera-pop"} style={{ "--delay": "310ms", transform: "scale(1)", opacity: "1" } as CSSProperties}>02</span>
              <h3 className="mt-4 text-base font-semibold">Reply recorded</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">The answer and reported tool calls, stored as received, with a SHA-256 fingerprint.</p>
            </li>
            <li className="relative">
              <span className={"relative z-10 grid size-[2.125rem] place-items-center rounded-full \x62order \x62order-line-strong bg-surface font-mono text-xs font-semibold text-ink novera-pop"} style={{ "--delay": "420ms", transform: "scale(1)", opacity: "1" } as CSSProperties}>03</span>
              <h3 className="mt-4 text-base font-semibold">Rules checked</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">Deterministic checks first. They can fail a scenario, never pass one.</p>
            </li>
            <li className="relative">
              <span className={"relative z-10 grid size-[2.125rem] place-items-center rounded-full \x62order \x62order-line-strong bg-surface font-mono text-xs font-semibold text-ink novera-pop"} style={{ "--delay": "530ms", transform: "scale(1)", opacity: "1" } as CSSProperties}>04</span>
              <h3 className="mt-4 text-base font-semibold">Effect read back</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">A claimed action is confirmed or contradicted by a read-only call to your system.</p>
            </li>
            <li className="relative">
              <span className={"relative z-10 grid size-[2.125rem] place-items-center rounded-full \x62order \x62order-line-strong bg-surface font-mono text-xs font-semibold text-ink novera-pop"} style={{ "--delay": "640ms", transform: "scale(1)", opacity: "1" } as CSSProperties}>05</span>
              <h3 className="mt-4 text-base font-semibold">Graders vote</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">What is left goes to models: on our key, two from different vendors, a third to settle a split.</p>
            </li>
            <li className="relative">
              <span className={"relative z-10 grid size-[2.125rem] place-items-center rounded-full \x62order \x62order-line-strong bg-surface font-mono text-xs font-semibold text-ink novera-pop"} style={{ "--delay": "750ms", transform: "scale(1)", opacity: "1" } as CSSProperties}>06</span>
              <h3 className="mt-4 text-base font-semibold">Evidence sealed</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">Verdict, evidence and unknowns go into a dated report; its digest covers all of it.</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionManualSpotCheckingCovers() {
  return (
    <section className={"\x62order-b \x62order-line bg-paper"} aria-labelledby="problem-heading">
      <div className={"\x77rap-wide py-20 sm:py-24"}>
        <div className={"novera-reveal grid gap-x-12 gap-y-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] \x6cg:\x69tems-end"} style={{ animationDelay: "0ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
          <div>
            <div className="flex items-center gap-3">
              <span className="type-eyebrow text-ink-faint">02</span>
              <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
            </div>
            <h2 className="mt-4 max-w-3xl type-section" id="problem-heading">Manual spot-checking covers a fraction of what your agent does</h2>
          </div>
          <p className="measure type-lede text-ink-soft lg:pb-1.5">A prompt changed on Tuesday and the client noticed first. “We think so” is not an answer to “is it still behaving?”</p>
        </div>
        <div className={"mt-12 grid gap-4 lg:grid-cols-[minmax(0,5fr)_auto_minmax(0,7fr)] \x6cg:\x69tems-stretch"}>
          <div className={"novera-reveal flex flex-col rounded-shell \x62order \x62order-dashed \x62order-line-strong \x62g-surface/\x360 p-6"} style={{ animationDelay: "0ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
            <p className="type-eyebrow text-ink-faint">What teams usually have</p>
            <ul className="novera-stagger mt-5 flex flex-wrap gap-2.5">
              <li className={"rounded-control \x62order \x62order-line bg-surface px-3 py-2 text-sm text-ink-soft \x73hadow-card"} style={{ "--i": "0", rotate: "-1.5deg", transform: "translateY(0px)", opacity: "1" } as CSSProperties}>A screenshot from Tuesday</li>
              <li className={"rounded-control \x62order \x62order-line bg-surface px-3 py-2 text-sm text-ink-soft \x73hadow-card"} style={{ "--i": "1", rotate: "1deg", transform: "translateY(0px)", opacity: "1" } as CSSProperties}>“Seems fine” in a chat thread</li>
              <li className={"rounded-control \x62order \x62order-line bg-surface px-3 py-2 text-sm text-ink-soft \x73hadow-card"} style={{ "--i": "2", rotate: "-0.5deg", transform: "translateY(0px)", opacity: "1" } as CSSProperties}>Ten prompts tried by hand</li>
              <li className={"rounded-control \x62order \x62order-line bg-surface px-3 py-2 text-sm text-ink-soft \x73hadow-card"} style={{ "--i": "3", rotate: "1.5deg", transform: "translateY(0px)", opacity: "1" } as CSSProperties}>The policy in one person's head</li>
              <li className={"rounded-control \x62order \x62order-line bg-surface px-3 py-2 text-sm text-ink-soft \x73hadow-card"} style={{ "--i": "4", rotate: "-1deg", transform: "translateY(0px)", opacity: "1" } as CSSProperties}>No record of what failed last month</li>
              <li className={"rounded-control \x62order \x62order-line bg-surface px-3 py-2 text-sm text-ink-soft \x73hadow-card"} style={{ "--i": "5", rotate: "0.5deg", transform: "translateY(0px)", opacity: "1" } as CSSProperties}>“The agent said it refunded it”</li>
            </ul>
            <p className="mt-auto pt-6 text-sm leading-relaxed text-ink-faint">Nothing here can be handed to a client, compared with last month, or shown to an auditor.</p>
          </div>
          <div className={"hidden items-center justify-center px-2 \x6cg:\x66lex"} aria-hidden="true">
            <span className={"grid size-10 place-items-center rounded-full \x62order \x62order-line-strong bg-surface text-ink-soft"}>→</span>
          </div>
          <div className={"novera-reveal rounded-shell \x62order \x62order-line-strong bg-surface p-6 \x73hadow-card"} style={{ animationDelay: "120ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
            <p className="type-eyebrow text-ink-faint">What Novera produces</p>
            <ul className={"novera-stagger mt-5 \x64ivide-y \x64ivide-line"}>
              <li className="flex gap-4 py-3.5 first:pt-0 last:pb-0" style={{ "--i": "2", transform: "translateY(0px)", opacity: "1" } as CSSProperties}>
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-ink text-[11px] text-on-ink" aria-hidden="true">✓</span>
                <div>
                  <p className="text-[15px] font-semibold">Forty-nine scenarios, every time</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">Identity, erasure, refund limits, escalation, jailbreaks, injected instructions. A suite version never changes, so reports compare.</p>
                </div>
              </li>
              <li className="flex gap-4 py-3.5 first:pt-0 last:pb-0" style={{ "--i": "3", transform: "translateY(0px)", opacity: "1" } as CSSProperties}>
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-ink text-[11px] text-on-ink" aria-hidden="true">✓</span>
                <div>
                  <p className="text-[15px] font-semibold">Stored evidence for every verdict</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">Reply, tool calls, read-back and every vote — append-only, so a failure cannot be deleted to flatter a score.</p>
                </div>
              </li>
              <li className="flex gap-4 py-3.5 first:pt-0 last:pb-0" style={{ "--i": "4", transform: "translateY(0px)", opacity: "1" } as CSSProperties}>
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-ink text-[11px] text-on-ink" aria-hidden="true">✓</span>
                <div>
                  <p className="text-[15px] font-semibold">Unknowns named, not hidden</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">No reply, an unreadable grader or an unchecked action is its own state — listed, never counted as a pass.</p>
                </div>
              </li>
              <li className="flex gap-4 py-3.5 first:pt-0 last:pb-0" style={{ "--i": "5", transform: "translateY(0px)", opacity: "1" } as CSSProperties}>
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-ink text-[11px] text-on-ink" aria-hidden="true">✓</span>
                <div>
                  <p className="text-[15px] font-semibold">A sealed report with a revocable link</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">Hashed to its run and your policy version; the link expires and can be revoked. No policy text, keys or raw transcript.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionAReportIsOnly() {
  const [version, setVersion] = useState('v4');
  const [consensus, setConsensus] = useState('Split');
  const [tampered, setTampered] = useState(false);
  const [refused, setRefused] = useState(false);
  const [reading, setReading] = useState(false);
  return (
    <section className={"\x62order-b \x62order-line"} aria-labelledby="instruments-heading">
      <div className={"\x77rap-wide py-20 sm:py-24"}>
        <div className={"novera-reveal grid gap-x-12 gap-y-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] \x6cg:\x69tems-end"} style={{ animationDelay: "0ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
          <div>
            <div className="flex items-center gap-3">
              <span className="type-eyebrow text-ink-faint">03</span>
              <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
            </div>
            <h2 className="mt-4 max-w-3xl type-section" id="instruments-heading">A report is only worth sending if it cannot be quietly improved</h2>
          </div>
          <p className="measure type-lede text-ink-soft lg:pb-1.5">Enforced in the database, not promised in a brochure. Try each one: the data is illustrative, the behaviour is the product's.</p>
        </div>
        <div className="mt-12">
          <div className="grid gap-4 lg:grid-cols-6">
            <article className={"flex flex-col rounded-shell \x62order \x62order-line bg-surface p-5 \x73hadow-card sm:p-6 lg:col-span-3"}>
              <p className="type-eyebrow text-ink-faint">01</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">A policy is versioned, never edited</h3>
              <p className="mt-1.5 measure text-sm leading-relaxed text-ink-soft">Saving a change creates a new version. The old one is kept as it was, and every report names the version it was measured against.</p>
              <div className="mt-5 flex-1">
                <div className={"flex h-full flex-col rounded-panel \x62order \x62order-line bg-ground p-4"} role="group" aria-label="Policy versions, illustrative">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className={"inline-flex self-start rounded-control \x62order \x62order-line-strong bg-surface p-0.5"} role="radiogroup" aria-label="Policy version">
                      <button className="novera-press rounded-[0.375rem] px-2.5 py-1 text-xs font-medium text-ink-soft hover:text-ink" type="button" role="radio" aria-checked={version === "v3"} onClick={() => setVersion("v3")}>v3</button>
                      <button className="novera-press rounded-[0.375rem] px-2.5 py-1 text-xs font-medium bg-ink text-on-ink" type="button" role="radio" aria-checked={version === "v4"} onClick={() => setVersion("v4")}>v4</button>
                    </div>
                    <span className="type-mono text-[11px] text-ink-faint">{version === "v4" ? "saved after T15 failed" : "kept, unchanged"}</span>
                  </div>
                  <div className={"novera-fade mt-3 overflow-hidden rounded-control \x62order \x62order-line bg-surface font-mono text-[12px] leading-relaxed"} style={{ opacity: "1" }}>
                    <span className="diff-line text-ink-soft">Verify identity before any account change.</span>
                    <span className="diff-line text-ink-soft">Never promise a refund above EUR 200 without a person.</span>
                    <span className="diff-line text-ink-soft">Hand over to a person when asked.</span>
                    {version === "v4" && <span className="diff-line diff-line-added">+ A job title or claimed role is never proof of identity.</span>}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-ink-soft">{version === "v4" ? "Version 4 adds one line. Version 3 still exists exactly as it was, so last month’s report still verifies." : "Version 3, as it was when the earlier runs were sealed. Nothing can edit it."}</p>
                </div>
              </div>
            </article>
            <article className={"flex flex-col rounded-shell \x62order \x62order-line bg-surface p-5 \x73hadow-card sm:p-6 lg:col-span-3"}>
              <p className="type-eyebrow text-ink-faint">02</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">A verdict is two vendors agreeing</h3>
              <p className="mt-1.5 measure text-sm leading-relaxed text-ink-soft">On our key, two models from different vendors grade each scenario. A third settles a split; a split nobody can settle is reported as unresolved, never guessed.</p>
              <div className="mt-5 flex-1">
                <div className={"flex h-full flex-col rounded-panel \x62order \x62order-line bg-ground p-4"} role="group" aria-label="Grader consensus, illustrative">
                  <div className={"inline-flex self-start rounded-control \x62order \x62order-line-strong bg-surface p-0.5"} role="radiogroup" aria-label="Case">
                    <button className="novera-press rounded-[0.375rem] px-2.5 py-1 text-xs font-medium text-ink-soft hover:text-ink" type="button" role="radio" aria-checked={consensus === "Agreed"} onClick={() => setConsensus("Agreed")}>Agreed</button>
                    <button className="novera-press rounded-[0.375rem] px-2.5 py-1 text-xs font-medium bg-ink text-on-ink" type="button" role="radio" aria-checked={consensus === "Split"} onClick={() => setConsensus("Split")}>Split</button>
                    <button className="novera-press rounded-[0.375rem] px-2.5 py-1 text-xs font-medium text-ink-soft hover:text-ink" type="button" role="radio" aria-checked={consensus === "Unsettled"} onClick={() => setConsensus("Unsettled")}>Unsettled</button>
                  </div>
                  <ol className="mt-4 flex flex-wrap items-center gap-2">
                    <li className="novera-pop flex items-center gap-2" style={{ "--delay": "0ms", transform: "scale(1)", opacity: "1" } as CSSProperties}>
                      <span className={"rounded-full \x62order px-2.5 py-1 text-xs font-medium \x62order-pass-border bg-pass-surface text-pass-text"}>{consensus === "Agreed" ? "Vendor A: fail" : "Vendor A: pass"}</span>
                    </li>
                    <li className="novera-pop flex items-center gap-2" style={{ "--delay": "160ms", transform: "scale(1)", opacity: "1" } as CSSProperties}>
                      <span className={"rounded-full \x62order px-2.5 py-1 text-xs font-medium \x62order-fail-border bg-fail-surface text-fail-text"}>Vendor B: fail</span>
                    </li>
                    <li hidden={consensus === "Agreed"} className="novera-pop flex items-center gap-2" style={{ "--delay": "320ms", transform: "scale(1)", opacity: "1" } as CSSProperties}>
                      <span className="text-ink-ghost" aria-hidden="true">→</span>
                      <span className={"rounded-full \x62order px-2.5 py-1 text-xs font-medium \x62order-fail-border bg-fail-surface text-fail-text"}>{consensus === "Unsettled" ? "Vendor C: no answer" : "Vendor C: fail"}</span>
                    </li>
                  </ol>
                  <p className="novera-fade mt-auto pt-4 text-sm font-semibold text-fail-text" style={{ opacity: "1" }}>{consensus === "Agreed" ? "Failed — two vendors agreed." : consensus === "Unsettled" ? "Unresolved — no verdict, named in the report." : "Failed — split, settled by a third vendor."}</p>
                </div>
              </div>
            </article>
            <article className={"flex flex-col rounded-shell \x62order \x62order-line bg-surface p-5 \x73hadow-card sm:p-6 lg:col-span-3"}>
              <p className="type-eyebrow text-ink-faint">03</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">A claimed action is checked, not believed</h3>
              <p className="mt-1.5 measure text-sm leading-relaxed text-ink-soft">When the agent says it acted, a read-only call to your system of record confirms or contradicts it — and a contradiction is settled without asking a model.</p>
              <div className="mt-5 flex-1">
                <div className={"flex h-full flex-col rounded-panel \x62order \x62order-line bg-ground p-4"} role="group" aria-label="Read-back of a claimed action, illustrative">
                  <div className={"grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] \x73m:\x69tems-center"}>
                    <div className={"rounded-control \x62order \x62order-line bg-surface p-3"}>
                      <p className="type-eyebrow text-ink-faint">The agent said</p>
                      <p className="mt-1 text-sm">“Your refund for NW-4417 has been processed.”</p>
                    </div>
                    <span className={"hidden text-ink-ghost \x73m:\x62lock"} aria-hidden="true">⟷</span>
                    <div className={"rounded-control \x62order bg-surface p-3 \x62order-fail-border"}>
                      <p className="type-eyebrow text-ink-faint">Your billing system</p>
                      <p className="mt-1 font-mono text-[12px] leading-relaxed">GET /invoices/NW-4417<br /><span className="text-fail-text">status: "open"</span></p>
                    </div>
                  </div>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-4">
                    <p className="text-sm font-semibold text-fail-text">{reading ? "Claim recorded, not yet verified." : "Contradicted — failed, no model asked."}</p>
                    <button className={"novera-press rounded-control \x62order \x62order-line-strong bg-surface px-2.5 py-1 text-xs font-medium \x68over:\x62order-ink-ghost"} type="button" onClick={() => { setReading(true); window.setTimeout(() => setReading(false), 1400); }}>Read it back again</button>
                  </div>
                </div>
              </div>
            </article>
            <article className={"flex flex-col rounded-shell \x62order \x62order-line bg-surface p-5 \x73hadow-card sm:p-6 lg:col-span-3"}>
              <p className="type-eyebrow text-ink-faint">04</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">A sealed report cannot be quietly improved</h3>
              <p className="mt-1.5 measure text-sm leading-relaxed text-ink-soft">The report carries a SHA-256 digest of its own contents. Change one figure and the digest no longer matches.</p>
              <div className="mt-5 flex-1">
                <div className={"flex h-full flex-col rounded-panel \x62order \x62order-line bg-ground p-4"} role="group" aria-label="Tamper check, illustrative">
                  <dl className="grid grid-cols-3 gap-2 text-center">
                    <div className={"rounded-control \x62order bg-surface px-2 py-1.5 \x62order-line"}>
                      <dd className="text-lg font-semibold tnum">{tampered ? 43 : 41}</dd>
                      <dt className="text-[11px] text-ink-faint">passed</dt>
                    </div>
                    <div className={"rounded-control \x62order bg-surface px-2 py-1.5 \x62order-line"}>
                      <dd className="text-lg font-semibold tnum">5</dd>
                      <dt className="text-[11px] text-ink-faint">failed</dt>
                    </div>
                    <div className={"rounded-control \x62order bg-surface px-2 py-1.5 \x62order-line"}>
                      <dd className="text-lg font-semibold tnum">3</dd>
                      <dt className="text-[11px] text-ink-faint">no verdict</dt>
                    </div>
                  </dl>
                  <div className={"mt-3 \x73pace-y-1 font-mono text-[11px] leading-relaxed"}>
                    <p className="text-ink-faint">sealed  sha256:d8b1b07559…1494b2</p>
                    <p className="novera-scan text-pass-text">{tampered ? "now    sha256:96794f34f3…e66ace" : "now    sha256:d8b1b07559…1494b2"}</p>
                  </div>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-4">
                    <p className="text-sm font-semibold text-pass-text" role="status">{tampered ? "Digest does not match — rejected." : "Digest matches the sealed run."}</p>
                    <button className={"novera-press rounded-control \x62order \x62order-line-strong bg-surface px-2.5 py-1 text-xs font-medium \x68over:\x62order-ink-ghost"} type="button" onClick={() => setTampered(v => !v)}>{tampered ? "Restore the figure" : "Change 41 to 43"}</button>
                  </div>
                </div>
              </div>
            </article>
            <article className={"flex flex-col rounded-shell \x62order \x62order-line bg-surface p-5 \x73hadow-card sm:p-6 lg:col-span-6"}>
              <p className="type-eyebrow text-ink-faint">05</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">No result is never a pass</h3>
              <p className="mt-1.5 measure text-sm leading-relaxed text-ink-soft">A timeout, an unreadable grader or an action nobody could check produces no verdict. It is named in the report and kept out of the score — and the database refuses to store it as a pass.</p>
              <div className="mt-5 flex-1">
                <div className={"flex h-full flex-col rounded-panel \x62order \x62order-line bg-ground p-4"} role="group" aria-label="Scenarios with no verdict, illustrative">
                  <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
                    <div>
                      <p className="type-eyebrow text-ink-faint">The score counts</p>
                      <p className="mt-1 text-sm"><span className="text-2xl font-semibold tnum">41</span> passed of <span className="font-semibold tnum">46</span> with a verdict</p>
                      <ol className="mt-3 grid grid-cols-[repeat(16,minmax(0,1fr))] gap-1 md:grid-cols-[repeat(23,minmax(0,1fr))]" aria-hidden="true">
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-pass-border bg-pass-surface"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-fail-text bg-fail-text"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-fail-text bg-fail-text"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-fail-text bg-fail-text"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-fail-text bg-fail-text"} />
                        <li className={"aspect-square rounded-[3px] \x62order \x62order-fail-text bg-fail-text"} />
                      </ol>
                    </div>
                    <div className={"rounded-control \x62order \x62order-dashed \x62order-warning-text/\x360 \x62g-warning-surface/\x360 p-3"}>
                      <p className="type-eyebrow text-warning-text">Named, never counted · 3</p>
                      <ul className={"mt-2 \x73pace-y-1.\x35"}>
                        <li className="novera-pop flex gap-2 text-xs leading-relaxed" style={{ "--delay": "0ms", transform: "scale(1)", opacity: "1" } as CSSProperties}>
                          <span className="type-mono shrink-0 text-ink-faint">T23</span>
                          <span className="text-ink-soft">The agent did not answer within 30 seconds.</span>
                        </li>
                        <li className="novera-pop flex gap-2 text-xs leading-relaxed" style={{ "--delay": "120ms", transform: "scale(1)", opacity: "1" } as CSSProperties}>
                          <span className="type-mono shrink-0 text-ink-faint">T35</span>
                          <span className="text-ink-soft">A refund was claimed; the read-back did not answer.</span>
                        </li>
                        <li className="novera-pop flex gap-2 text-xs leading-relaxed" style={{ "--delay": "240ms", transform: "scale(1)", opacity: "1" } as CSSProperties}>
                          <span className="type-mono shrink-0 text-ink-faint">T38</span>
                          <span className="text-ink-soft">Graders split and a third could not settle it.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm text-ink-soft" role="status">{refused ? "Refused. A case with an error cannot be stored as a pass — the database rejects the row, even for an administrator." : "The report shows these three as loudly as a grade, because a quiet footnote is how a partial run passes for a clean one."}</p>
                    <button className={"novera-press rounded-control \x62order \x62order-line-strong bg-surface px-2.5 py-1 text-xs font-medium \x68over:\x62order-ink-ghost"} type="button" onClick={() => setRefused(v => !v)}>{refused ? "Back" : "Try to count them as passes"}</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionFourStepsAboutTen() {
  const [step, setStep] = useState(1);
  return (
    <section className={"\x73croll-mt-16 \x62order-b \x62order-line bg-paper"} id="how-it-works" aria-labelledby="how-heading">
      <div className={"\x77rap-wide py-20 sm:py-24"}>
        <div className={"novera-reveal grid gap-x-12 gap-y-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] \x6cg:\x69tems-end"} style={{ animationDelay: "0ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
          <div>
            <div className="flex items-center gap-3">
              <span className="type-eyebrow text-ink-faint">04</span>
              <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
            </div>
            <h2 className="mt-4 max-w-3xl type-section" id="how-heading">Four steps, about ten minutes</h2>
          </div>
          <p className="measure type-lede text-ink-soft lg:pb-1.5">An HTTP endpoint you operate, the rules it should keep, and a run. Choose a step to see its screen.</p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
            <ol className={"relative \x73pace-y-2"}>
              <span className="absolute bottom-6 left-[1.0625rem] top-6 w-px bg-line" aria-hidden="true" />
              <li className="relative">
                <button className={"novera-press group flex w-full gap-4 rounded-panel \x62order p-3 text-left \x62order-line-strong bg-surface \x73hadow-card"} type="button" aria-pressed={step === 1} onClick={() => setStep(1)}>
                  <span className="relative z-10 grid size-[2.125rem] shrink-0 place-items-center rounded-full text-sm font-semibold tnum transition-colors duration-200 bg-ink text-on-ink">1</span>
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-baseline gap-x-2">
                      <span className="text-base font-semibold">Connect the agent</span>
                      <span className="type-mono text-[11px] text-ink-faint">2 minutes</span>
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-soft">Point Novera at an HTTP endpoint you operate and confirm you are authorised to test it. One harmless request goes first, and its reply is saved as a receipt.</span>
                  </span>
                </button>
              </li>
              <li className="relative">
                <button className={"novera-press group flex w-full gap-4 rounded-panel \x62order p-3 text-left \x62order-transparent \x68over:\x62g-surface/\x370"} type="button" aria-pressed={step === 2} onClick={() => setStep(2)}>
                  <span className={"relative z-10 grid size-[2.125rem] shrink-0 place-items-center rounded-full text-sm font-semibold tnum transition-colors duration-200 bg-surface text-ink-soft \x72ing-1 \x72ing-line-strong"}>2</span>
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-baseline gap-x-2">
                      <span className="text-base font-semibold">Write the policy</span>
                      <span className="type-mono text-[11px] text-ink-faint">5 minutes</span>
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-soft">The rules the agent should keep, in plain sentences. Saving creates a version that is never edited, so a report always names what it was measured against.</span>
                  </span>
                </button>
              </li>
              <li className="relative">
                <button className={"novera-press group flex w-full gap-4 rounded-panel \x62order p-3 text-left \x62order-transparent \x68over:\x62g-surface/\x370"} type="button" aria-pressed={step === 3} onClick={() => setStep(3)}>
                  <span className={"relative z-10 grid size-[2.125rem] shrink-0 place-items-center rounded-full text-sm font-semibold tnum transition-colors duration-200 bg-surface text-ink-soft \x72ing-1 \x72ing-line-strong"}>3</span>
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-baseline gap-x-2">
                      <span className="text-base font-semibold">Run the suite</span>
                      <span className="type-mono text-[11px] text-ink-faint">a few minutes</span>
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-soft">Every scenario goes to your agent and comes back with a verdict, its evidence and which AI graders decided it — or with the reason there is none.</span>
                  </span>
                </button>
              </li>
              <li className="relative">
                <button className={"novera-press group flex w-full gap-4 rounded-panel \x62order p-3 text-left \x62order-transparent \x68over:\x62g-surface/\x370"} type="button" aria-pressed={step === 4} onClick={() => setStep(4)}>
                  <span className={"relative z-10 grid size-[2.125rem] shrink-0 place-items-center rounded-full text-sm font-semibold tnum transition-colors duration-200 bg-surface text-ink-soft \x72ing-1 \x72ing-line-strong"}>4</span>
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-baseline gap-x-2">
                      <span className="text-base font-semibold">Prepare and share the report</span>
                      <span className="type-mono text-[11px] text-ink-faint">when it is ready</span>
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-soft">Novera says whether the report is ready to send, and what stands in the way if not. Then one private link — expiring and revocable — or an export.</span>
                  </span>
                </button>
              </li>
            </ol>
            <div className={"\x6cg:\x73ticky lg:top-24 lg:self-start"}>
              <div className={"overflow-hidden rounded-shell \x62order \x62order-line-strong bg-surface \x73hadow-[\x30_30px_70px_-45px_rgb(\x328_25_23/\x30.\x345)]"}>
                <div className={"flex items-center justify-between \x62order-b \x62order-line bg-paper px-4 py-2.5"}>
                  <p className="type-eyebrow text-ink-faint">{`Step ${step} of 4 · ${["Connect the agent", "Write the policy", "Run the suite", "Prepare and share the report"][step - 1]}`}</p>
                  <span className={"rounded-full \x62order \x62order-warning-text/\x340 bg-warning-surface px-2 py-0.5 text-[11px] font-medium text-warning-text"}>Illustrative</span>
                </div>
                <div className="min-h-[19rem] p-5 sm:p-6 novera-drawer" style={{ transform: "translateY(0px) scale(1)", opacity: "1" }}>
{step === 1 ?                   <div className={"\x73pace-y-4"}>
                    <div>
                      <p className="text-xs font-medium text-ink">Endpoint</p>
                      <div className={"mt-1 rounded-control \x62order \x62order-line-strong bg-surface px-3 py-2 text-sm font-mono text-[13px]"}>https://support.example.com/chat</div>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-[4px] bg-ink text-[10px] text-on-ink" aria-hidden="true">✓</span>
                      <span className="text-ink-soft">I own this agent or am authorised to test it. <span className="text-ink-faint">Stored with every run.</span></span>
                    </div>
                    <div className={"rounded-panel \x62order \x62order-pass-border bg-pass-surface p-3"}>
                      <p className="text-sm font-semibold text-pass-text">Connection check answered · 200 in 420 ms</p>
                      <p className="mt-1 font-mono text-[12px] text-ink-soft">reply: "Hi! How can I help with your order today?"</p>
                      <p className="mt-1 text-xs text-ink-faint">Saved as a receipt, so you can see what Novera is talking to before a full run.</p>
                    </div>
                  </div> : step === 2 ? <><div className="space-y-4"><div><p className="text-xs font-medium text-ink">{"Policy"}</p><div className="mt-1 space-y-1 rounded-control border border-line-strong bg-surface px-3 py-2.5 text-sm leading-relaxed text-ink-soft"><p>{"Verify identity before any account change."}</p><p>{"Never promise a refund above EUR 200 without a person."}</p><p>{"Hand over to a person when asked."}</p><p className="text-ink-faint">{"Never quote prices that are not on the pricing page."}</p></div></div><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-ink px-2.5 py-1 text-xs font-medium text-on-ink">{"Saved as version 1"}</span><span className="text-xs text-ink-faint">{"Editing later creates version 2; version 1 stays as it is."}</span></div></div></> : step === 3 ? <><div><div className="flex items-baseline justify-between"><p className="text-xs font-medium text-ink">{"eu-support v7 against support.example.com"}</p><span className="type-mono text-xs text-ink-faint tnum">{"49 of 49"}</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-sunken"><div className="h-full rounded-full bg-trace transition-[width] duration-100"></div></div><ol aria-hidden="true" className="mt-4 grid grid-cols-[repeat(13,minmax(0,1fr))] gap-1"><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-fail-text bg-fail-text"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-fail-text bg-fail-text"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-fail-text bg-fail-text"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-fail-text bg-fail-text"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-fail-text bg-fail-text"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-dashed border-warning-text bg-warning-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-dashed border-warning-text bg-warning-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-dashed border-warning-text bg-warning-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li><li className="aspect-square rounded-[3px] border transition-colors duration-150 border-pass-border bg-pass-surface"></li></ol><p className="mt-4 text-sm text-ink-soft tnum"><span className="font-semibold text-pass-text">{"41 passed"}</span>{" \u00b7 "}<span className="font-semibold text-fail-text">{"5 failed"}</span>{" \u00b7 "}<span className="font-semibold text-warning-text">{"3 no verdict"}</span></p></div></> : <><div className="space-y-4"><div className="flex flex-wrap items-center justify-between gap-2"><p className="text-xs font-medium text-ink">{"Before you send it"}</p><span className="rounded-full border border-warning-border bg-warning-surface px-2.5 py-0.5 text-xs font-semibold text-warning-text">{"Grade withheld: fix the evidence first"}</span></div><ul className="space-y-1.5"><li className="flex items-center gap-2 text-sm"><span aria-hidden="true" className="grid size-4 place-items-center rounded-full text-[10px] bg-pass-surface text-pass-text">{"\u2713"}</span><span className="text-ink-soft">{"Sealed, and the digest verifies"}</span></li><li className="flex items-center gap-2 text-sm"><span aria-hidden="true" className="grid size-4 place-items-center rounded-full text-[10px] bg-pass-surface text-pass-text">{"\u2713"}</span><span className="text-ink-soft">{"Every scenario ran"}</span></li><li className="flex items-center gap-2 text-sm"><span aria-hidden="true" className="grid size-4 place-items-center rounded-full text-[10px] bg-warning-surface text-warning-text">{"!"}</span><span className="font-medium text-ink">{"Three scenarios have no verdict"}</span></li><li className="flex items-center gap-2 text-sm"><span aria-hidden="true" className="grid size-4 place-items-center rounded-full text-[10px] bg-pass-surface text-pass-text">{"\u2713"}</span><span className="text-ink-soft">{"No reviewer finding left undisclosed"}</span></li></ul><p className="text-xs leading-relaxed text-ink-faint">{"Retest T23, T35 and T38 once their cause is fixed; readiness is computed from the sealed document, never switched on by hand."}</p><div className="flex flex-wrap gap-1.5"><span className="rounded-control border border-line px-2 py-1 text-xs text-ink-soft">{"Private link"}</span><span className="rounded-control border border-line px-2 py-1 text-xs text-ink-soft">{"PDF"}</span><span className="rounded-control border border-line px-2 py-1 text-xs text-ink-soft">{"Markdown"}</span><span className="rounded-control border border-line px-2 py-1 text-xs text-ink-soft">{"CSV"}</span><span className="rounded-control border border-line px-2 py-1 text-xs text-ink-soft">{"JSON"}</span><span className="rounded-control border border-line px-2 py-1 text-xs text-ink-soft">{"JUnit"}</span></div></div></>}
                </div>
                <div className={"flex items-center justify-between \x62order-t \x62order-line px-4 py-2.5"}>
                  <button className="novera-press rounded-control px-2.5 py-1 text-sm font-medium text-ink-soft hover:bg-sunken hover:text-ink disabled:opacity-40" type="button" disabled={step === 1} onClick={() => setStep(v => Math.max(1, v - 1))}>← Back</button>
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="h-1.5 rounded-full transition-all duration-300 w-6 bg-ink" />
                    <span className="h-1.5 rounded-full transition-all duration-300 w-1.5 bg-line-strong" />
                    <span className="h-1.5 rounded-full transition-all duration-300 w-1.5 bg-line-strong" />
                    <span className="h-1.5 rounded-full transition-all duration-300 w-1.5 bg-line-strong" />
                  </div>
                  <button className="novera-press rounded-control px-2.5 py-1 text-sm font-medium text-ink-soft hover:bg-sunken hover:text-ink disabled:opacity-40" type="button" disabled={step === 4} onClick={() => setStep(v => Math.min(4, v + 1))}>Next →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionWhatHappensAfterA() {
  return (
    <section className={"\x62order-b \x62order-line"} aria-labelledby="after-heading">
      <div className={"\x77rap-wide py-20 sm:py-24"}>
        <div className={"novera-reveal grid gap-x-12 gap-y-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] \x6cg:\x69tems-end"} style={{ animationDelay: "0ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
          <div>
            <div className="flex items-center gap-3">
              <span className="type-eyebrow text-ink-faint">05</span>
              <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
            </div>
            <h2 className="mt-4 max-w-3xl type-section" id="after-heading">What happens after a scenario fails</h2>
          </div>
          <p className="measure type-lede text-ink-soft lg:pb-1.5">A failure has a path, and every step that changes something waits for a person.</p>
        </div>
        <div className="novera-reveal mt-12" style={{ animationDelay: "0ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            <li className={"relative flex flex-col rounded-panel \x62order \x62order-line bg-surface p-4 \x73hadow-card"}>
              <span className="font-mono text-[11px] text-ink-faint">01</span>
              <p className="mt-2 text-sm font-semibold">Failed scenario</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-soft">Its evidence chain shows which stage decided it.</p>
              <span className={"absolute -right-2.5 top-1/2 z-10 hidden size-5 \x2dtranslate-y-1/\x32 place-items-center rounded-full \x62order \x62order-line bg-surface text-[10px] text-ink-faint \x6cg:\x67rid"} aria-hidden="true">→</span>
            </li>
            <li className={"relative flex flex-col rounded-panel \x62order \x62order-line bg-surface p-4 \x73hadow-card"}>
              <span className="font-mono text-[11px] text-ink-faint">02</span>
              <p className="mt-2 text-sm font-semibold">Review queue</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-soft">Grouped with everything else that needs a person.</p>
              <span className={"absolute -right-2.5 top-1/2 z-10 hidden size-5 \x2dtranslate-y-1/\x32 place-items-center rounded-full \x62order \x62order-line bg-surface text-[10px] text-ink-faint \x6cg:\x67rid"} aria-hidden="true">→</span>
            </li>
            <li className={"relative flex flex-col rounded-panel \x62order \x62order-line bg-surface p-4 \x73hadow-card"}>
              <span className="font-mono text-[11px] text-ink-faint">03</span>
              <p className="mt-2 text-sm font-semibold">Ask why</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-soft">A proposed policy change, quoting the passage it would replace.</p>
              <span className={"absolute -right-2.5 top-1/2 z-10 hidden size-5 \x2dtranslate-y-1/\x32 place-items-center rounded-full \x62order \x62order-line bg-surface text-[10px] text-ink-faint \x6cg:\x67rid"} aria-hidden="true">→</span>
            </li>
            <li className={"relative flex flex-col rounded-panel \x62order \x62order-line bg-surface p-4 \x73hadow-card"}>
              <span className="font-mono text-[11px] text-ink-faint">04</span>
              <p className="mt-2 text-sm font-semibold">Approve</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-soft">Becomes a new policy version. Nothing changes on its own.</p>
              <span className="mt-auto flex items-center gap-1.5 pt-3 text-[11px] font-medium text-ink"><span className="size-1.5 rounded-full bg-ink" aria-hidden="true" />Waits for a person</span>
              <span className={"absolute -right-2.5 top-1/2 z-10 hidden size-5 \x2dtranslate-y-1/\x32 place-items-center rounded-full \x62order \x62order-line bg-surface text-[10px] text-ink-faint \x6cg:\x67rid"} aria-hidden="true">→</span>
            </li>
            <li className={"relative flex flex-col rounded-panel \x62order \x62order-line bg-surface p-4 \x73hadow-card"}>
              <span className="font-mono text-[11px] text-ink-faint">05</span>
              <p className="mt-2 text-sm font-semibold">Retest</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-soft">The one scenario again, against the new version.</p>
              <span className={"absolute -right-2.5 top-1/2 z-10 hidden size-5 \x2dtranslate-y-1/\x32 place-items-center rounded-full \x62order \x62order-line bg-surface text-[10px] text-ink-faint \x6cg:\x67rid"} aria-hidden="true">→</span>
            </li>
            <li className={"relative flex flex-col rounded-panel \x62order \x62order-line bg-surface p-4 \x73hadow-card"}>
              <span className="font-mono text-[11px] text-ink-faint">06</span>
              <p className="mt-2 text-sm font-semibold">Rerun and compare</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-soft">Fixed, still failing, newly broken — and why each moved.</p>
              <span className={"absolute -right-2.5 top-1/2 z-10 hidden size-5 \x2dtranslate-y-1/\x32 place-items-center rounded-full \x62order \x62order-line bg-surface text-[10px] text-ink-faint \x6cg:\x67rid"} aria-hidden="true">→</span>
            </li>
            <li className={"relative flex flex-col rounded-panel \x62order \x62order-line bg-surface p-4 \x73hadow-card"}>
              <span className="font-mono text-[11px] text-ink-faint">07</span>
              <p className="mt-2 text-sm font-semibold">Reissue</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-soft">A new sealed report that names the old one by hash.</p>
              <span className="mt-auto flex items-center gap-1.5 pt-3 text-[11px] font-medium text-ink"><span className="size-1.5 rounded-full bg-ink" aria-hidden="true" />Waits for a person</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionFitsTheWayYou() {
  return (
    <section className={"\x62order-b \x62order-line bg-paper"} aria-labelledby="ship-heading">
      <div className={"\x77rap-wide grid grid-cols-1 gap-12 py-20 sm:py-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] \x6cg:\x69tems-center [&>*]:\x6din-w-0"}>
        <div>
          <div className="novera-reveal" style={{ animationDelay: "0ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
            <div>
              <div className="flex items-center gap-3">
                <span className="type-eyebrow text-ink-faint">06</span>
                <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
              </div>
              <h2 className="mt-4 max-w-3xl type-section" id="ship-heading">Fits the way you already ship</h2>
            </div>
            <p className="measure type-lede text-ink-soft mt-4">Gate a release, rerun on a schedule, or start a run from n8n. A missing verdict fails the gate like a failed one.</p>
          </div>
          <ul className={"mt-8 \x73pace-y-3 text-sm"}>
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
              <p><a className={"font-semibold \x75nderline-offset-2 \x68over:\x75nderline"} href="/docs/cli-and-ci">Release gate</a> <span className="text-ink-soft">— A REST call starts a run; five exit codes tell a pass from a failure from missing evidence.</span></p>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
              <p><a className={"font-semibold \x75nderline-offset-2 \x68over:\x75nderline"} href="/docs/scheduled-runs">Schedules</a> <span className="text-ink-soft">— A pinned suite at a fixed UTC time; a schedule that cannot start pauses and says why.</span></p>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
              <p><a className={"font-semibold \x75nderline-offset-2 \x68over:\x75nderline"} href="/docs/api">n8n and webhooks</a> <span className="text-ink-soft">— Signed webhooks and four importable n8n workflows, each run in n8n before it shipped.</span></p>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
              <p><a className={"font-semibold \x75nderline-offset-2 \x68over:\x75nderline"} href="/docs/regressions-from-production">Production failures</a> <span className="text-ink-soft">— Send a real failure in; it comes back as a draft scenario a person approves.</span></p>
            </li>
          </ul>
        </div>
        <div className="novera-reveal" style={{ animationDelay: "80ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
          <div className={"overflow-hidden rounded-shell \x62order \x62order-ink/\x390 bg-ink text-on-ink \x73hadow-[\x30_30px_70px_-40px_rgb(\x328_25_23/\x30.\x36)]"}>
            <div className={"flex items-center gap-1.5 \x62order-b \x62order-white/\x310 px-4 py-2.5"}>
              <span className={"size-2.5 rounded-full \x62g-white/\x320"} aria-hidden="true" />
              <span className={"size-2.5 rounded-full \x62g-white/\x320"} aria-hidden="true" />
              <span className={"size-2.5 rounded-full \x62g-white/\x320"} aria-hidden="true" />
              <span className={"ml-2 font-mono text-[11px] \x74ext-white/\x360"}>release-gate.sh · a sketch; the full script is in the docs</span>
            </div>
            <pre className={"overflow-x-auto p-5 \x6futline-offset-[\x2d4px] \x66ocus-visible:\x6futline-white font-mono text-[12.5px] leading-relaxed \x74ext-white/\x385"} tabIndex={0} aria-label="Release gate script">
              <code>auth="Authorization: Bearer $NOVERA_KEY"
    run=$(curl -fsS -X POST "$api/runs" -H "$auth" \
      -H "Idempotency-Key: $GITHUB_SHA" -H 'content-type: application/json' \
      -d '&#123;"agent_id":"…","suite_id":"…"&#125;' | jq -r .run.id)

    # advance it (POST $api/runs/$run/execute) until done, then:
    case $(curl -fsS "$api/runs/$run" -H "$auth" | jq -r .run.outcome) in
      pass) exit 0 ;;
      fail) exit 1 ;;   # a scenario failed
      *)    exit 2 ;;   # missing evidence stops the release too
    esac</code>
            </pre>
            <dl className={"grid grid-cols-5 \x62order-t \x62order-white/\x310 text-center font-mono text-[11px]"}>
              <div className={"\x62order-r \x62order-white/\x310 px-1 py-2.5 \x6cast:\x62order-r-0"}>
                <dt className="text-sm font-semibold text-white">0</dt>
                <dd className={"\x74ext-white/\x360"}>pass</dd>
              </div>
              <div className={"\x62order-r \x62order-white/\x310 px-1 py-2.5 \x6cast:\x62order-r-0"}>
                <dt className="text-sm font-semibold text-white">1</dt>
                <dd className={"\x74ext-white/\x360"}>fail</dd>
              </div>
              <div className={"\x62order-r \x62order-white/\x310 px-1 py-2.5 \x6cast:\x62order-r-0"}>
                <dt className="text-sm font-semibold text-white">2</dt>
                <dd className={"\x74ext-white/\x360"}>incomplete</dd>
              </div>
              <div className={"\x62order-r \x62order-white/\x310 px-1 py-2.5 \x6cast:\x62order-r-0"}>
                <dt className="text-sm font-semibold text-white">3</dt>
                <dd className={"\x74ext-white/\x360"}>config</dd>
              </div>
              <div className={"\x62order-r \x62order-white/\x310 px-1 py-2.5 \x6cast:\x62order-r-0"}>
                <dt className="text-sm font-semibold text-white">4</dt>
                <dd className={"\x74ext-white/\x360"}>infra</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionWhereYourDataGoes() {
  return (
    <section className={"\x73croll-mt-16 \x62order-b \x62order-line"} id="trust" aria-labelledby="trust-heading">
      <div className={"\x77rap-wide py-20 sm:py-24"}>
        <div className={"novera-reveal grid gap-x-12 gap-y-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] \x6cg:\x69tems-end"} style={{ animationDelay: "0ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
          <div>
            <div className="flex items-center gap-3">
              <span className="type-eyebrow text-ink-faint">07</span>
              <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
            </div>
            <h2 className="mt-4 max-w-3xl type-section" id="trust-heading">Where your data goes, and what a report does not say</h2>
          </div>
          <p className="measure type-lede text-ink-soft lg:pb-1.5">The limits, before you find them. Each is also in every report's limitations block.</p>
        </div>
        <div className="novera-reveal mt-12" style={{ animationDelay: "0ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
          <ol className={"grid gap-10 md:grid-cols-3 \x6dd:\x69tems-stretch"}>
            <li className={"relative flex h-full flex-col rounded-shell \x62order p-5 \x62order-line bg-surface"}>
              <p className="text-base font-semibold">Your agent</p>
              <p className="type-eyebrow mt-1 text-ink-faint">Your infrastructure</p>
              <ul className={"mt-3 \x73pace-y-1.\x35 text-sm leading-relaxed text-ink-soft [&>\x6ci]:\x72elative [&>\x6ci]:\x70l-3.\x35 [&>\x6ci]:\x62efore:\x61bsolute [&>\x6ci]:\x62efore:\x6ceft-0 [&>\x6ci]:\x62efore:\x74op-[\x30.\x36em] [&>\x6ci]:\x62efore:\x73ize-1 [&>\x6ci]:\x62efore:\x72ounded-full [&>\x6ci]:\x62efore:\x62g-ink-ghost"}>
                <li>An endpoint you own or are authorised to test</li>
                <li>That authorisation is recorded with every run</li>
              </ul>
              <span className={"absolute left-1/2 top-full flex h-10 \x2dtranslate-x-1/\x32 items-center gap-2 whitespace-nowrap text-ink-faint md:left-full md:top-1/2 md:h-auto md:w-10 \x6dd:\x74ranslate-x-0 \x6dd:\x2dtranslate-y-1/\x32 \x6dd:\x6austify-center"} aria-hidden="true">
                <span className={"grid size-7 \x72otate-90 place-items-center rounded-full \x62order \x62order-line bg-surface text-sm \x6dd:\x72otate-0"}>⇄</span>
                <span className={"text-[11px] \x6dd:\x68idden"}>scenarios out, replies back</span>
              </span>
            </li>
            <li className={"relative flex h-full flex-col rounded-shell \x62order p-5 \x62order-ink bg-surface \x73hadow-card"}>
              <p className="text-base font-semibold">Novera</p>
              <p className="type-eyebrow mt-1 text-ink-faint">Database in Frankfurt (EU)</p>
              <ul className={"mt-3 \x73pace-y-1.\x35 text-sm leading-relaxed text-ink-soft [&>\x6ci]:\x72elative [&>\x6ci]:\x70l-3.\x35 [&>\x6ci]:\x62efore:\x61bsolute [&>\x6ci]:\x62efore:\x6ceft-0 [&>\x6ci]:\x62efore:\x74op-[\x30.\x36em] [&>\x6ci]:\x62efore:\x73ize-1 [&>\x6ci]:\x62efore:\x72ounded-full [&>\x6ci]:\x62efore:\x62g-ink-ghost"}>
                <li>Stores verdicts, evidence, policy versions and reports</li>
                <li>Model keys encrypted, decrypted only on the server</li>
                <li>Raw replies emptied after your retention period; the verdict and a fingerprint stay</li>
              </ul>
              <span className={"absolute left-1/2 top-full flex h-10 \x2dtranslate-x-1/\x32 items-center gap-2 whitespace-nowrap text-ink-faint md:left-full md:top-1/2 md:h-auto md:w-10 \x6dd:\x74ranslate-x-0 \x6dd:\x2dtranslate-y-1/\x32 \x6dd:\x6austify-center"} aria-hidden="true">
                <span className={"grid size-7 \x72otate-90 place-items-center rounded-full \x62order \x62order-line bg-surface text-sm \x6dd:\x72otate-0"}>⇄</span>
                <span className={"text-[11px] \x6dd:\x68idden"}>replies out to be graded</span>
              </span>
            </li>
            <li className={"relative flex h-full flex-col rounded-shell \x62order p-5 \x62order-line bg-surface"}>
              <p className="text-base font-semibold">Grading providers</p>
              <p className="type-eyebrow mt-1 text-ink-faint">May be outside the EU</p>
              <ul className={"mt-3 \x73pace-y-1.\x35 text-sm leading-relaxed text-ink-soft [&>\x6ci]:\x72elative [&>\x6ci]:\x70l-3.\x35 [&>\x6ci]:\x62efore:\x61bsolute [&>\x6ci]:\x62efore:\x6ceft-0 [&>\x6ci]:\x62efore:\x74op-[\x30.\x36em] [&>\x6ci]:\x62efore:\x73ize-1 [&>\x6ci]:\x62efore:\x72ounded-full [&>\x6ci]:\x62efore:\x62g-ink-ghost"}>
                <li>Receive the agent's replies to grade them</li>
                <li>Each gets only the data its published terms allow; personal data becomes placeholders where needed</li>
                <li>Every report names the models that graded it</li>
              </ul>
            </li>
          </ol>
          <p className="mt-4 text-sm text-ink-faint">Database residency and model processing are two different questions. <a className={"font-medium text-ink-soft underline \x75nderline-offset-2 hover:text-ink"} href="/docs/data-and-privacy">What goes where, exactly.</a></p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-10">
          <div className={"novera-reveal flex h-full flex-col rounded-shell \x62order p-6 \x62order-line bg-surface text-ink"} style={{ animationDelay: "0ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
            <p className="type-eyebrow">Recorded</p>
            <p className="mt-1 text-sm text-ink-soft">Observed by Novera during the run</p>
            <ul className={"mt-4 \x73pace-y-2 text-sm"}>
              <li className="flex gap-2.5">
                <span className={"mt-2 size-1 shrink-0 rounded-full \x62g-current opacity-60"} aria-hidden="true" />
                <span className="text-ink">Each reply and the tool calls the agent reported</span>
              </li>
              <li className="flex gap-2.5">
                <span className={"mt-2 size-1 shrink-0 rounded-full \x62g-current opacity-60"} aria-hidden="true" />
                <span className="text-ink">Read-back results: confirmed, contradicted, unavailable</span>
              </li>
              <li className="flex gap-2.5">
                <span className={"mt-2 size-1 shrink-0 rounded-full \x62g-current opacity-60"} aria-hidden="true" />
                <span className="text-ink">Every grader's vote and how it was settled</span>
              </li>
              <li className="flex gap-2.5">
                <span className={"mt-2 size-1 shrink-0 rounded-full \x62g-current opacity-60"} aria-hidden="true" />
                <span className="text-ink">Timings, timeouts and errors</span>
              </li>
            </ul>
          </div>
          <div className={"novera-reveal flex h-full flex-col rounded-shell \x62order p-6 \x62order-line bg-surface text-ink"} style={{ animationDelay: "80ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
            <p className="type-eyebrow">Declared</p>
            <p className="mt-1 text-sm text-ink-soft">Stated by you, and labelled as yours</p>
            <ul className={"mt-4 \x73pace-y-2 text-sm"}>
              <li className="flex gap-2.5">
                <span className={"mt-2 size-1 shrink-0 rounded-full \x62g-current opacity-60"} aria-hidden="true" />
                <span className="text-ink">The policy text, frozen per version</span>
              </li>
              <li className="flex gap-2.5">
                <span className={"mt-2 size-1 shrink-0 rounded-full \x62g-current opacity-60"} aria-hidden="true" />
                <span className="text-ink">That you are authorised to test the agent</span>
              </li>
              <li className="flex gap-2.5">
                <span className={"mt-2 size-1 shrink-0 rounded-full \x62g-current opacity-60"} aria-hidden="true" />
                <span className="text-ink">A release or knowledge-base revision, if you give one</span>
              </li>
              <li className="flex gap-2.5">
                <span className={"mt-2 size-1 shrink-0 rounded-full \x62g-current opacity-60"} aria-hidden="true" />
                <span className="text-ink">Whether the agent is production</span>
              </li>
            </ul>
          </div>
          <div className={"novera-reveal flex h-full flex-col rounded-shell \x62order p-6 \x62order-dashed \x62order-warning-text/\x350 \x62g-warning-surface/\x350 text-warning-text"} style={{ animationDelay: "160ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
            <p className="type-eyebrow">Not verified</p>
            <p className="mt-1 text-sm text-ink-soft">Outside what a run can show</p>
            <ul className={"mt-4 \x73pace-y-2 text-sm"}>
              <li className="flex gap-2.5">
                <span className={"mt-2 size-1 shrink-0 rounded-full \x62g-current opacity-60"} aria-hidden="true" />
                <span className="text-ink">Any action no read-back covered</span>
              </li>
              <li className="flex gap-2.5">
                <span className={"mt-2 size-1 shrink-0 rounded-full \x62g-current opacity-60"} aria-hidden="true" />
                <span className="text-ink">Behaviour on conversations outside the suite</span>
              </li>
              <li className="flex gap-2.5">
                <span className={"mt-2 size-1 shrink-0 rounded-full \x62g-current opacity-60"} aria-hidden="true" />
                <span className="text-ink">Which legal obligations apply to you</span>
              </li>
              <li className="flex gap-2.5">
                <span className={"mt-2 size-1 shrink-0 rounded-full \x62g-current opacity-60"} aria-hidden="true" />
                <span className="text-ink">Anything after the report's date</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="novera-reveal mt-12" style={{ animationDelay: "0ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
          <div className={"grid gap-6 \x62order-t \x62order-line-strong pt-10 md:grid-cols-3 md:gap-10"}>
            <div>
              <h3 className="type-section text-[1.75rem]">What Novera is not</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">A document that overstates itself is worth less — especially to the person you hand it to.</p>
            </div>
            <ul className="grid gap-3 text-sm leading-relaxed text-ink-soft sm:grid-cols-2 md:col-span-2 md:gap-x-10">
              <li className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
                <p><span className="font-semibold text-ink">Not a certification.</span> Novera is evidence of testing.</p>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
                <p><span className="font-semibold text-ink">Not legal advice.</span> It does not say which obligations apply to your organisation.</p>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
                <p><span className="font-semibold text-ink">One dated run.</span> One suite version against one policy version.</p>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
                <p><span className="font-semibold text-ink">Only the suite.</span> Not your agent's behaviour on every conversation, nor anything outside it.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionRunItAgainstYour() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="cta-heading">
      <div className={"\x62g-blueprint pointer-events-none absolute inset-0"} aria-hidden="true" />
      <div className="wrap relative py-24 text-center sm:py-28">
        <div className="novera-reveal" style={{ animationDelay: "0ms", transform: "translateY(0px)", opacity: "1" } as CSSProperties} data-shown="true">
          <h2 className="type-section" id="cta-heading">Run it against your own agent</h2>
          <p className="mx-auto mt-5 measure type-lede text-ink-soft">Three free runs, on our key or yours. Then a plan: Team BYOK grades on your own model key; Agency Pro adds runs graded on ours.</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a className={"inline-flex items-center justify-center gap-2 rounded-control font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out \x61ctive:\x73cale-[\x30.\x398] \x64isabled:\x63ursor-not-allowed \x64isabled:\x61ctive:\x73cale-100 bg-ink text-on-ink \x73hadow-button hover:bg-ink-hover active:bg-ink-hover disabled:bg-ink-ghost \x64isabled:\x73hadow-none px-4 py-2.5 text-sm px-6 py-3 text-[15px]"} href="/sign-in">Start with three free runs</a>
            <a className={"inline-flex items-center justify-center gap-2 rounded-control font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out \x61ctive:\x73cale-[\x30.\x398] \x64isabled:\x63ursor-not-allowed \x64isabled:\x61ctive:\x73cale-100 \x62order \x62order-line-strong bg-surface text-ink \x73hadow-card \x68over:\x62order-ink-ghost hover:bg-ground active:bg-sunken disabled:text-ink-ghost \x64isabled:\x73hadow-none px-4 py-2.5 text-sm px-6 py-3 text-[15px]"} href="/apply">Talk to us first</a>
          </div>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-faint">
            <li>No card</li>
            <li>Email, Google or GitHub</li>
            <li>About ten minutes to a first report</li>
          </ul>
          <p className="mt-6 text-sm text-ink-faint">An agency, or several clients' agents? “Talk to us first” reaches a person.</p>
        </div>
      </div>
    </section>
  );
}

function ImportedFooter() {
  return (
    <footer className={"\x62order-t \x62order-line bg-paper"}>
      <div className={"\x77rap-wide grid gap-8 py-12 text-sm sm:grid-cols-2 lg:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))]"}>
        <div>
          <p className="flex items-center gap-1 font-semibold"><svg className="shrink-0 size-7" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" {...({ focusable: "false" } as any)}><rect className={"transition-transform duration-200 ease-out \x6dotion-reduce:\x74ransition-none \x67roup-hover:\x74ranslate-y-[\x34px] \x67roup-focus-visible:\x74ranslate-y-[\x34px]"} x="25.75" y="26" width="14.5" height="40" /><rect x="46.75" y="42.75" width="6.5" height="14.5" /><rect className={"transition-transform duration-200 ease-out \x6dotion-reduce:\x74ransition-none \x67roup-hover:\x2dtranslate-y-[\x34px] \x67roup-focus-visible:\x2dtranslate-y-[\x34px]"} x="59.75" y="34" width="14.5" height="40" /></svg>Novera</p>
          <p className="mt-3 max-w-xs leading-relaxed text-ink-faint">Evidence that an AI support agent behaves as its written policy requires. Database in Frankfurt (EU).</p>
        </div>
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
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/solutions">Solutions</a>
            </li>
            <li>
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/solutions/regulatory-mapping">Regulatory mapping</a>
            </li>
            <li>
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/verify">Verify a report</a>
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
