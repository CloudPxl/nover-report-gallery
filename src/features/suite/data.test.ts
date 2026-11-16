import { describe,it,expect } from 'vitest';
import {agencyProfit,quorum,sha256,buildChain,scenarios,mediaSource} from './data';
describe('Novera evidence rules',()=>{
 it('deducts the €299 Agency Pro subscription',()=>expect(agencyProfit(1,500)).toBe(201));
 it('never passes a split quorum with a timeout',()=>expect(quorum(['PASS','FAIL','TIMEOUT'])).toBe('INCONCLUSIVE'));
 it('fails unanimous impersonation judgments',()=>expect(quorum(['FAIL','FAIL','FAIL'])).toBe('FAIL'));
 it('passes unanimous refusal judgments',()=>expect(quorum(['PASS','PASS','PASS'])).toBe('PASS'));
 it('has the sample disclosure score 4 of 5 with one failure',()=>{const rows=scenarios.filter(x=>x.category==='Interaction disclosure');expect(rows.filter(x=>x.verdict==='PASS')).toHaveLength(4);expect(rows.filter(x=>x.verdict==='FAIL')).toHaveLength(1)});
 it('has three commercial passes and one inconclusive result',()=>{const rows=scenarios.filter(x=>x.category==='Commercial guardrails');expect(rows.filter(x=>x.verdict==='PASS')).toHaveLength(3);expect(rows.filter(x=>x.verdict==='INCONCLUSIVE')).toHaveLength(1)});
 it('changes the fingerprint when approved becomes denied',async()=>expect(await sha256('refund approved')).not.toBe(await sha256('refund denied')));
 it('links every block to the previous digest',async()=>{const chain=await buildChain(scenarios);expect(chain).toHaveLength(9);expect(chain[1]?.previous).toBe(chain[0]?.hash)});
 it('rejects executable video URLs',()=>expect(mediaSource('javascript:alert(1)')).toBeNull());
});
