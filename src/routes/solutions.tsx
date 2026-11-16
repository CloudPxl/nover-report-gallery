import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/solutions.css?raw";

export const Route = createFileRoute("/solutions")({
  head: () => ({ meta: [{"title": "Novera Solutions — Agent testing and regulatory evidence"}, {"name": "description", "content": "Explore Novera testing evidence for agencies, black-box agent evaluation, and EU AI Act references."}, {"property": "og:title", "content": "Novera Solutions — Agent testing and regulatory evidence"}, {"property": "og:description", "content": "Explore Novera testing evidence for agencies, black-box agent evaluation, and EU AI Act references."}, {"property": "og:type", "content": "website"}, {"name": "twitter:card", "content": "summary_large_image"}] }),
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
          <ImportedSectionOneProductThreeReasons />
          <ImportedSectionWhereNoveraFits />
          <ImportedSectionWhatNoveraIsNot />
          <section className={"relative overflow-hidden \x62order-b \x62order-line"} aria-labelledby="cta-heading">
            <div className={"\x62g-blueprint pointer-events-none absolute inset-0"} aria-hidden="true" />
            <div className="wrap relative py-20 text-center sm:py-24">
              <h2 className="type-section" id="cta-heading">Run it against your own agent</h2>
              <p className="mx-auto mt-5 measure type-lede text-ink-soft">Three free runs, graded on Novera's keys or your own. About ten minutes to a first report.</p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a className={"inline-flex items-center justify-center gap-2 rounded-control font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out \x61ctive:\x73cale-[\x30.\x398] \x64isabled:\x63ursor-not-allowed \x64isabled:\x61ctive:\x73cale-100 bg-ink text-on-ink \x73hadow-button hover:bg-ink-hover active:bg-ink-hover disabled:bg-ink-ghost \x64isabled:\x73hadow-none px-4 py-2.5 text-sm px-6 py-3 text-[15px]"} href="/sign-in?mode=signup">Start with three free runs</a>
                <a className={"inline-flex items-center justify-center gap-2 rounded-control font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out \x61ctive:\x73cale-[\x30.\x398] \x64isabled:\x63ursor-not-allowed \x64isabled:\x61ctive:\x73cale-100 \x62order \x62order-line-strong bg-surface text-ink \x73hadow-card \x68over:\x62order-ink-ghost hover:bg-ground active:bg-sunken disabled:text-ink-ghost \x64isabled:\x73hadow-none px-4 py-2.5 text-sm px-6 py-3 text-[15px]"} href="/guide">Read the step-by-step guide</a>
              </div>
              <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-faint">
                <li>No card</li>
                <li>Email, Google or GitHub</li>
                <li>Database in Frankfurt (EU)</li>
              </ul>
            </div>
          </section>
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

function ImportedSectionOneProductThreeReasons() {
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
              <span aria-current="page">Solutions</span>
            </li>
          </ol>
        </nav>
        <div className={"mt-8 grid gap-12 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] \x6cg:\x69tems-end lg:gap-16"}>
          <div>
            <p className="type-eyebrow text-ink-faint">Who reads the report</p>
            <h1 className="mt-5 max-w-4xl type-display">One product, <span className="text-ink-soft">three reasons to run it.</span></h1>
            <p className="mt-6 measure type-lede text-ink-soft">Novera runs a versioned scenario suite against an AI support agent you operate and seals a dated report of what it did. Who reads that report differs: your counsel, your pipeline, or your client.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a className={"inline-flex items-center justify-center gap-2 rounded-control font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out \x61ctive:\x73cale-[\x30.\x398] \x64isabled:\x63ursor-not-allowed \x64isabled:\x61ctive:\x73cale-100 bg-ink text-on-ink \x73hadow-button hover:bg-ink-hover active:bg-ink-hover disabled:bg-ink-ghost \x64isabled:\x73hadow-none px-4 py-2.5 text-sm px-5 py-3 text-[15px]"} href="/sign-in?mode=signup">Start with three free runs</a>
              <a className={"inline-flex items-center justify-center gap-2 rounded-control font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out \x61ctive:\x73cale-[\x30.\x398] \x64isabled:\x63ursor-not-allowed \x64isabled:\x61ctive:\x73cale-100 \x62order \x62order-line-strong bg-surface text-ink \x73hadow-card \x68over:\x62order-ink-ghost hover:bg-ground active:bg-sunken disabled:text-ink-ghost \x64isabled:\x73hadow-none px-4 py-2.5 text-sm px-5 py-3 text-[15px]"} href="/docs/what-novera-does">What Novera does</a>
            </div>
            <p className="mt-4 text-sm text-ink-faint">No card. About ten minutes to a first report.</p>
          </div>
          <dl className={"grid grid-cols-2 gap-x-6 gap-y-5 \x62order-t \x62order-line pt-6 lg:grid-cols-1 \x6cg:\x62order-l \x6cg:\x62order-t-0 lg:pl-8 lg:pt-0"}>
            <div>
              <dt className="font-mono text-sm font-semibold text-ink tnum">49</dt>
              <dd className="mt-0.5 text-xs leading-relaxed text-ink-faint">scenarios in every run of eu-support v7</dd>
            </div>
            <div>
              <dt className="font-mono text-sm font-semibold text-ink tnum">2 vendors</dt>
              <dd className="mt-0.5 text-xs leading-relaxed text-ink-faint">grade each verdict on Novera's keys</dd>
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
      </div>
    </section>
  );
}

function ImportedSectionWhereNoveraFits() {
  return (
    <section className={"\x62order-b \x62order-line"} aria-labelledby="list-heading">
      <div className={"\x77rap-wide py-16 sm:py-20"}>
        <h2 className="type-section" id="list-heading">Where Novera fits</h2>
        <ul className="mt-10 grid gap-4 lg:grid-cols-3">
          <li>
            <a className={"novera-lift group flex h-full flex-col rounded-panel \x62order \x62order-line bg-surface p-6 \x73hadow-card transition-[transform,box-shadow,border-color] duration-150"} href="/solutions/eu-ai-act">
              <span className="type-eyebrow text-ink-faint">01</span>
              <span className={"mt-3 text-lg font-semibold \x67roup-hover:\x75nderline \x67roup-hover:\x75nderline-offset-2"}>EU AI Act evidence</span>
              <span className="mt-2 text-sm leading-relaxed text-ink-soft">Scenarios filed under AI Act Articles 13, 14, 15 and 50(1) and the GDPR, sealed into a dated report your counsel can read.</span>
              <span className="mt-auto pt-5 text-sm font-medium text-ink" aria-hidden="true">Read more →</span>
            </a>
          </li>
          <li>
            <a className={"novera-lift group flex h-full flex-col rounded-panel \x62order \x62order-line bg-surface p-6 \x73hadow-card transition-[transform,box-shadow,border-color] duration-150"} href="/solutions/black-box-testing">
              <span className="type-eyebrow text-ink-faint">02</span>
              <span className={"mt-3 text-lg font-semibold \x67roup-hover:\x75nderline \x67roup-hover:\x75nderline-offset-2"}>Black-box agent testing</span>
              <span className="mt-2 text-sm leading-relaxed text-ink-soft">Rules, then a read-back from your own system, then two models from different vendors. Missing evidence is never a pass.</span>
              <span className="mt-auto pt-5 text-sm font-medium text-ink" aria-hidden="true">Read more →</span>
            </a>
          </li>
          <li>
            <a className={"novera-lift group flex h-full flex-col rounded-panel \x62order \x62order-line bg-surface p-6 \x73hadow-card transition-[transform,box-shadow,border-color] duration-150"} href="/solutions/agency">
              <span className="type-eyebrow text-ink-faint">03</span>
              <span className={"mt-3 text-lg font-semibold \x67roup-hover:\x75nderline \x67roup-hover:\x75nderline-offset-2"}>For agencies</span>
              <span className="mt-2 text-sm leading-relaxed text-ink-soft">One workspace per client, scheduled re-runs and a release gate, and a sealed report for each client agent you ship.</span>
              <span className="mt-auto pt-5 text-sm font-medium text-ink" aria-hidden="true">Read more →</span>
            </a>
          </li>
        </ul>
        <h2 className="mt-14 type-eyebrow text-ink-faint" id="reference-heading">Reference</h2>
        <ul className="mt-5 grid gap-4" aria-labelledby="reference-heading">
          <li>
            <a className={"novera-lift group flex flex-col gap-x-10 gap-y-2 rounded-panel \x62order \x62order-line bg-surface p-6 \x73hadow-card transition-[transform,box-shadow,border-color] duration-150 \x6dd:\x66lex-row \x6dd:\x69tems-center \x6dd:\x6austify-between"} href="/solutions/regulatory-mapping">
              <span>
                <span className={"block text-lg font-semibold \x67roup-hover:\x75nderline \x67roup-hover:\x75nderline-offset-2"}>Regulatory mapping</span>
                <span className="mt-2 block text-sm leading-relaxed text-ink-soft">Every AI Act and GDPR reference in the suite, the scenarios filed under it, and how each one is checked — counted from the suite itself.</span>
              </span>
              <span className="shrink-0 text-sm font-medium text-ink" aria-hidden="true">Open the matrix →</span>
            </a>
          </li>
        </ul>
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
              <p><span className="font-semibold text-ink">Only the suite.</span> Not your agent's behaviour on every conversation.</p>
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
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="#">All solutions</a>
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
              <a className={"text-ink-soft \x75nderline-offset-2 hover:text-ink \x68over:\x75nderline"} href="/solutions/regulatory-mapping">Regulatory mapping</a>
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
