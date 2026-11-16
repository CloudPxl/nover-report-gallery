import { createFileRoute } from '@tanstack/react-router';
import { InvestorSuite } from '@/features/suite/suite';
export const Route = createFileRoute('/')({
 head:()=>({meta:[{title:'Novera — Investor, Governance & Enterprise Suite'},{name:'description',content:'An interactive Novera investment thesis, illustrative behavioral evidence report, and product walkthrough. Technical evidence, not legal certification.'},{property:'og:title',content:'Novera — Evidence for the agents you ship'},{property:'og:description',content:'Explore the 14-slide Novera pitch, inspect graded sample evidence, and verify a real SHA-256 demonstration.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 validateSearch:(search:Record<string,unknown>):{mode:'pitch'|'report'|'video';slide:number}=>({mode:search['mode']==='report'?'report':search['mode']==='video'?'video':'pitch',slide:Math.min(14,Math.max(1,Math.floor(Number(search['slide'])||1)))}),
 component:Index,
});
function Index(){const {mode,slide}=Route.useSearch();return <InvestorSuite mode={mode} index={slide-1}/>}
