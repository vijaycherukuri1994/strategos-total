// ═══ STRATEGOS TOTAL — PWA Engine ═══
const RAW = [
["Business","WIN","2007","Apple iPhone — Axis Shift","Apple vs Nokia/RIM","Don't compete on the incumbent's metric. Introduce a metric they're structurally unable to optimize for."],
["Business","FAIL","2000","Kodak — Incentive Paralysis","Kodak vs digital","Your org chart is your strategy. If incentives punish the right move, leadership 'decisions' are irrelevant."],
["Business","WIN","1994","Amazon — Time Horizon Arbitrage","Amazon vs retail","A longer time horizon than your competitor unlocks positions they literally cannot respond to."],
["Business","WIN","2006","Netflix — Scheduled Self-Destruction","Netflix vs Blockbuster","The company that disrupts you should be you. Schedule your own obsolescence or accept someone else's."],
["Business","FAIL","2013","BlackBerry — Best-Customer Trap","RIM vs iPhone","Your best customers will faithfully guide you off a cliff. Watch who is GAINING decision power."],
["Business","WIN","1980","Canon — Invisible Flank","Canon vs Xerox","Enter where the incumbent's economics force them to ignore you. Their margin discipline is your cover."],
["Business","FAIL","1998","Webvan — Early Equals Wrong","Webvan vs timing","Being early is indistinguishable from being wrong. Asset-light probes survive timing errors; asset-heavy bets don't."],
["Business","WIN","2008","Airbnb — Regulatory Gap Sprint","Airbnb vs hotels","Move in the gap between possibility and regulation; convert users into a political shield before it closes."],
["Business","WIN","2016","Jio — Solvency Contest","Jio vs Indian telecom","With a war chest from another business, set price to zero and turn the market into a solvency contest you've pre-won."],
["Business","FAIL","2008","GE — Easy Revenue Poison","GE vs itself","Easy revenue atrophies the muscle that built the company while the scoreboard says you're winning."],
["Business","WIN","1960","Walmart — Geography Nobody Wanted","Walmart vs Kmart","Saturate territory rivals consider beneath them; build logistics dominance there; the 'real' market then comes to you."],
["Business","WIN","2010","Figma — Platform-Shift Ambush","Figma vs Adobe","When a platform shift arrives, the incumbent's installed base flips from asset to anchor."],
["Business","FAIL","1985","IBM — Outsourced the Crown Jewels","IBM vs Microsoft/Intel","Outsource a component without mapping where profits will pool. IBM kept the box; others kept the kingdom."],
["Business","WIN","2003","Tesla — Top-Down Cost Curve","Tesla vs autos","Enter at luxury where margins fund learning; ride the curve down. Both flanks work if rivals guard only one."],
["Business","FAIL","2019","WeWork — Narrative Leverage Collapse","WeWork vs reality","A valuation narrative is leverage; it amplifies until one disclosure margin-calls the whole story."],
["Business","WIN","1971","Southwest — Refusal as Moat","Southwest vs majors","Refuse the industry's defining features. The cost structure born of refusal is unmatchable by anyone who keeps them."],
["Business","FAIL","2005","Sears — Internal Cannibalism","Sears vs itself","Forcing divisions to compete imports the market's brutality without its discipline. The org consumes itself."],
["Business","WIN","1997","Apple — Kill the Portfolio","Jobs's return","When dying, the bold move is subtraction. Focus is a weapon precisely because struggling rivals can't afford it."],
["Business","FAIL","2011","HP TouchPad — 49-Day Surrender","HP vs iPad","Half-commitment to a platform war buys full cost and zero position. Worse than not entering."],
["Business","WIN","2014","Nadella — Identity Pivot","Microsoft vs its past","Sometimes the blocking enemy is your old identity. Releasing it unlocked a decade of trapped value."],
["Military","WIN","1940","Ardennes — Attack the Belief","Wehrmacht vs France","Map what the opponent believes impossible. That list is their real perimeter — and it is unguarded."],
["Military","FAIL","1812","Napoleon — Decisive Battle Addiction","France vs Russia","Identify the one thing the enemy's strategy REQUIRES — then refuse to provide it."],
["Military","WIN","-216","Cannae — Weakness as Bait","Hannibal vs Rome","Display a weakness the opponent is trained to exploit. Their doctrine becomes the mechanism of their destruction."],
["Military","WIN","1968","Tet — The Second Battlefield","NVA vs USA","A tactical sacrifice that shifts the information environment can outvalue any battlefield win."],
["Military","FAIL","2003","Iraq — Day-After Vacuum","US vs Iraq","Winning the contest and winning the outcome are different problems. The most dangerous moment is the day after victory."],
["Military","WIN","1973","Suez Crossing — Cheap Tool, Impossible Problem","Egypt vs Israel","A cheap unglamorous tool on the 'impossible' problem beats an expensive tool on the expected one."],
["Military","WIN","1944","Fortitude — Phantom Army","Allies vs Germany","The opponent acts on their MODEL of you. Shaping the model can be cheaper than shaping the battlefield."],
["Military","FAIL","1941","Pearl Harbor — Perfect Wrong Objective","Japan vs USA","Perfect execution of the wrong objective is worse than clumsy execution of the right one. What does this make my opponent BECOME?"],
["Military","WIN","-480","Salamis — Chosen Ground","Greece vs Persia","Against superior mass, choose terrain that nullifies numbers. The strait makes a million fight as a hundred."],
["Military","WIN","1950","Inchon — The Insane Option","MacArthur vs N.Korea","The option your own staff calls insane is often unguarded for exactly that reason. Their analysts ruled it out too."],
["Military","FAIL","1916","Verdun — Attrition Mirror","Germany vs France","A plan to bleed the enemy white bleeds you identically. Never adopt a strategy whose metric is mutual destruction."],
["Military","WIN","1991","Desert Storm Left Hook","Coalition vs Iraq","Fix attention with the obvious threat; deliver the blow where attention isn't."],
["Military","FAIL","1979","USSR-Afghanistan — Cost Ratio Trap","USSR vs mujahideen","Compute who pays more per unit of damage before engaging. If it's you, the engagement IS the defeat."],
["Military","WIN","1805","Austerlitz — Gifted Weakness","Napoleon vs Austria/Russia","Abandon the dominant position to bait the enemy into stretching; take it back through their stretched center."],
["Military","WIN","1066","Hastings — Feigned Retreat","Normans vs Saxons","A disciplined fake retreat converts the enemy's strongest asset into a rout. Discipline weaponized as theater."],
["Military","WIN","1942","Midway — Intelligence as Multiplier","US vs Japan","Knowing WHERE let an inferior fleet be superior at the only point that mattered."],
["Military","FAIL","1961","Bay of Pigs — Consensus Hallucination","CIA vs Cuba","Groupthink in a closed circle manufactures certainty. No one was assigned to argue it would fail."],
["Military","WIN","-331","Gaugamela — Kill the Keystone","Alexander vs Darius","Don't fight the army; collapse the thing holding it together. Aim everything at the keystone."],
["Geopolitical","WIN","1972","Nixon-China — Flip the Estranged Ally","US vs USSR","The cheapest way to weaken your adversary is to flip their estranged partner. Scan the coalition for fractures."],
["Geopolitical","WIN","1948","Marshall Plan — Aggressive Generosity","US vs USSR","Strategic generosity is aggression: it buys alignment the opponent must then pay to break."],
["Geopolitical","FAIL","1919","Versailles — Humiliation Compounds","Allies vs Germany","Victory that humiliates the loser is a loan against the future at ruinous interest."],
["Geopolitical","WIN","2013","Belt & Road — The Unwatched Board","China vs West","While the opponent watches the board you're famous for, build position on a board they don't consider strategic."],
["Geopolitical","WIN","1962","Cuban Missiles — Private Off-Ramp","Kennedy vs Khrushchev","Let your opponent retreat with a private win. The public and real scoreboards needn't match — exploit the gap."],
["Geopolitical","FAIL","1938","Munich — Appetite Feeding","UK vs Hitler","Concessions to an opponent who wants the process of taking fund the next demand, not peace."],
["Geopolitical","WIN","1815","Congress of Vienna — Include the Loser","Powers vs France","Bringing the defeated INTO the order as a stakeholder bought a century of peace. Compare Versailles."],
["Geopolitical","FAIL","1956","Suez — Power Audit Failure","UK/France vs reality","Acting on yesterday's power inventory. Britain moved like an empire and found it had become a client."],
["Geopolitical","WIN","1990","German Reunification — One-Window Sprint","Kohl vs history","Historic windows open for months, not years. Speed beat consensus before the USSR could reconsolidate."],
["Geopolitical","FAIL","2014","Crimea — Tactical Win, Strategic Bleed","Russia vs West","A quick seizure that triggers permanent coalition and consolidates the target's nationhood turns one win into compounding loss."],
["Geopolitical","WIN","1979","Camp David — Trade Asymmetric Goods","Carter/Begin/Sadat","Durable deals trade things each side values differently: land for recognition."],
["Geopolitical","WIN","2020","Abraham Accords — Strand the Veto","UAE/Israel","When a stakeholder uses their veto as an asset, make deals that strand it. Bypass turns blocker into bystander."],
["Investment","WIN","2007","Big Short — Incentive Blindness","Paulson/Burry vs housing","The largest mispricings hide behind beliefs the consensus is PAID to hold. Look where incentives forbid looking."],
["Investment","FAIL","1998","LTCM — Correlation to One","LTCM vs crisis","Diversification on historical correlation evaporates when needed. Leverage converts model error into extinction."],
["Investment","WIN","1992","Soros vs BoE — The Forced Defense","Soros vs Bank of England","Hunt opponents locked into defending the indefensible by politics or pride. Their obligation is your asymmetry."],
["Investment","WIN","1965","Buffett — Structure Is Strategy","Berkshire vs market","Design your capital structure so you can't be forced to do the dumb thing at the worst time."],
["Investment","FAIL","2021","Archegos — Self-Blinding Opacity","Hwang vs banks","Opacity that hides your position also hides your risk from yourself. What no one can see, no one can save."],
["Investment","WIN","2013","Icahn-Herbalife — Attack the Public Clock","Icahn vs Ackman","An opponent who announces their trade hands you their pain points and their timeline."],
["Investment","FAIL","1720","South Sea Bubble — Smart Money Trap","Newton","Re-entering a mania you correctly exited is the costliest trade. Genius doesn't immunize against FOMO."],
["Investment","WIN","1980","Volcker — Credibility Shock","Fed vs inflation","The cure for an expectations problem is overwhelming pain-accepting force. Half-measures extend the disease."],
["Investment","FAIL","2008","Lehman — Liquidity Is Confidence","Banks vs run","You die at the speed of others' doubt, not your own balance sheet. Overnight funding is a confidence bet."],
["Investment","WIN","2009","Buffett's Crisis Terms — Cash as Option","Berkshire vs panic","Cash in a panic is an option on every asset at terms you dictate."],
["Investment","FAIL","2000","Dot-com 'Eyeballs' — Metric Substitution","Market vs gravity","When an industry invents new metrics to justify prices, the new metric is the bubble's signature."],
["Investment","WIN","1949","Graham — Margin of Safety","Graham vs uncertainty","You needn't predict the future if your entry price already assumes a bad one. Buy errors, not forecasts."],
["Investment","FAIL","2022","FTX — Counterparty Halo","FTX vs depositors","Genius reputations suspend due diligence. The brighter the halo, the fewer people check the books."],
["Investment","WIN","1973","Templeton — Maximum Pessimism","Templeton vs sentiment","The price of an asset everyone is forced to sell includes their forced selling, not its value."],
["Product","WIN","2004","Facebook — Density First","Facebook vs MySpace","Sequence for density, not reach. Networks compound from full ponds, not thin oceans."],
["Product","FAIL","2011","Google+ — Ordered Network","Google vs Facebook","Distribution forces adoption but never desire. Copying features without context copies the shell, not the organism."],
["Product","WIN","2009","WhatsApp — Strategic Refusal","WhatsApp vs carriers","Every feature you refuse is a battlefield you decline. Focus creates unit economics bloated rivals can't follow."],
["Product","WIN","2012","Slack — Gatekeeper Bypass","Slack vs enterprise sales","When the gatekeeper is fortified, route through constituents. Arrive at the negotiation having already won."],
["Product","FAIL","2014","Fire Phone — Strategy Leak","Amazon vs users","A product built for YOUR strategy rather than the user's problem broadcasts its insincerity."],
["Product","WIN","2016","TikTok — Shared Assumption Kill","TikTok vs Instagram","Find the assumption ALL incumbents share. It's the industry's single point of failure."],
["Product","FAIL","2020","Quibi — Adjacent Genius Fallacy","Katzenberg vs mobile","Excellence in an adjacent domain transfers worse than anyone believes. Money only delays the news of absent fit."],
["Product","WIN","2008","GitHub — Become the Verb","GitHub vs SourceForge","When portfolios live on you, switching costs become identity costs."],
["Product","WIN","1998","Google — Less Is the Feature","Google vs portals","When every rival adds, subtraction is positioning. The empty page declared: we are an answer, not a portal."],
["Product","WIN","2010","Instagram — Constraint as Identity","Instagram vs cameras","Constraints created a recognizable aesthetic that WAS the brand. Limits are legible; options are mush."],
["Product","WIN","2021","Wordle — Scarcity in Abundance","Wordle vs feeds","One puzzle a day in an infinite-content world created synchronized culture. The share grid did the rest."],
["Competitive","WIN","1995","Intel — Tempo Ownership","Intel vs AMD","Set the tempo of obsolescence and rivals always solve last quarter's problem. Tempo beats position."],
["Competitive","WIN","1975","Toyota — Protected by Mockery","Toyota vs Detroit","Being underestimated is an asset. Never correct an opponent busy explaining why you don't matter."],
["Competitive","FAIL","2007","Ballmer — Obsolete Scorecard","Microsoft vs iPhone","Incumbents grade disruptions with metrics the disruption makes obsolete. Audit your scorecard first."],
["Competitive","WIN","1985","New Coke Reversal — Loud Retreat","Coke vs Pepsi","A reversible public failure can generate loyalty no success could. The loud retreat can outvalue the advance."],
["Competitive","WIN","2000","Netflix No-Late-Fees — Profit Center Strike","Netflix vs Blockbuster","Attack the revenue your opponent loves and customers hate. They'll choose margin over survival too long."],
["Competitive","WIN","1962","Avis 'We Try Harder' — Weaponized #2","Avis vs Hertz","Admitting inferiority converts it into trust and makes the leader's size the villain. #2 is a stance, not a rank."],
["Competitive","WIN","2005","Android Giveaway — Burn the Adjacent Market","Google vs Apple","Give away the layer your rival monetizes to protect the layer you monetize."],
["Competitive","FAIL","1996","Netscape — Distribution Beats Product","Netscape vs Microsoft","A 10x product loses to an equal product with 100x distribution. If the rival owns the channel, the war's over."],
["Competitive","WIN","2019","AMD Chiplets — Change the Question","AMD vs Intel","When you can't win the old question, change it. Intel's fab pride became a constraint AMD didn't share."],
["Competitive","FAIL","2011","Borders — Outsourced Its Future","Borders vs Amazon","Never let your rival run the channel your future depends on. Convenience today, decapitation tomorrow."],
["Competitive","WIN","2017","Patagonia 'Don't Buy This Jacket'","Patagonia vs fast fashion","A sincere anti-commercial stance is uncopyable by rivals whose economics forbid sincerity. Values cost something."],
["Political","WIN","1932","FDR — Crisis as Mandate","FDR vs Depression","A crisis suspends normal veto players. Emergencies create a window where the impossible is briefly routine."],
["Political","FAIL","1990","Thatcher Poll Tax — Concentrated Rage","Thatcher vs public","Universal visible pain with diffuse benefits manufactures a coalition of everyone against you."],
["Political","WIN","1964","LBJ — The Treatment","Johnson vs Senate","Power is inventory: favors owed, fears held, vanities known. Map individuals, not blocs."],
["Political","WIN","1860","Lincoln — Team of Rivals","Lincoln vs faction","Absorbing rivals into your cabinet converts their ambition into your administration."],
["Political","FAIL","1968","LBJ Vietnam — Sunk Cost Presidency","Johnson vs quagmire","Each escalation was rational; the sequence was suicide. Audit the SEQUENCE, not the step."],
["Political","WIN","1994","Mandela — Rugby Reconciliation","Mandela vs division","Adopt the oppressor's symbol and you take their identity hostage with love. Disarmament through embrace."],
["Political","FAIL","2016","Brexit Remain — Fear vs Identity","Remain vs Leave","Economic-fear campaigns lose to identity campaigns. Price arguments don't touch identity votes."],
["Political","WIN","1980","Reagan — Question as Frame","Reagan vs Carter","Whoever sets the QUESTION wins before answers begin. Frame ownership precedes argument."],
["Legal","WIN","1954","NAACP — Precedent Ladder","Marshall vs segregation","Don't sue for the endgame first. Build small precedents, each making the next inevitable."],
["Legal","FAIL","2001","Microsoft Antitrust — Contempt for the Forum","Microsoft vs DOJ","Contempt for the tribunal converts a winnable case into a character trial. The forum's respect is oxygen."],
["Legal","WIN","2012","Patent Troll Defense — Collective Spine","NewEgg vs trolls","Against an extractor pricing settlements below litigation cost, one defendant fighting to the end rewrites the math."],
["Legal","WIN","1215","Magna Carta — Codify in Their Weakness","Barons vs King John","Codify constraints during the strongman's weak moment; the document outlives the moment and binds successors."],
["Social","WIN","1955","Montgomery Boycott — Economic Lever, Moral Frame","King vs segregation","Pair a moral narrative with an economic chokehold. The boycott priced injustice daily."],
["Social","FAIL","2011","Occupy — Energy Without Architecture","Occupy vs structure","Leaderless purity prevents co-option and also prevents winning. Energy without decision architecture evaporates."],
["Social","WIN","1989","Velvet Revolution — Ridicule the Fear","Havel vs regime","Authoritarian power runs on performed fear. Once fear is funny, it's finished."],
["Social","WIN","2014","Ice Bucket archetype — Participation as Status","Movements vs apathy","Make joining visible, fun, and nominating; the cause spreads as social currency, not obligation."],
["Cultural","WIN","1962","Beatles in America — Arrive as an Event","Beatles vs US market","Withhold until demand is orchestrated. Entry as cultural EVENT, not product launch."],
["Cultural","FAIL","1992","Euro Disney — Imported Assumptions","Disney vs French culture","Transplanting a model without renegotiating its cultural assumptions reads as occupation, not entertainment."],
["Cultural","WIN","2013","K-pop — Culture as Export Industry","Korea vs global pop","Treat cultural production as industrial policy. Soft power compounds like infrastructure."],
["Cultural","WIN","1970","Sesame Street — Trojan Curriculum","CTW vs TV wasteland","Package the medicine inside the candy. Meet the audience inside their existing habit."],
["Asymmetric","WIN","1930","Salt March — Force the Oppressor's Hand","Gandhi vs Empire","Choose an act so just that repressing it indicts the repressor. Make every enemy response a losing move."],
["Asymmetric","WIN","1959","Castro's 12 — Survive as Symbol","Castro vs Batista","An insurgency's first product is existence. Surviving visibly against odds recruits faster than winning quietly."],
["Asymmetric","FAIL","1967","Che in Bolivia — Imported Revolution","Guevara vs terrain","A model that worked at home fails abroad without local grievance and network. Revolution is not a franchise."],
["Asymmetric","WIN","1973","OPEC Embargo — Cartelize the Chokepoint","OPEC vs West","Fragmented sellers of a critical input have no power; coordinated they own the world's throat for a season."],
["Asymmetric","WIN","1980","Solidarity — The Union Loophole","Walesa vs Party","Attack the regime through the institution its ideology cannot ban. Use their legitimacy story as your shield."],
["Asymmetric","WIN","1916","Lawrence — Strand, Don't Storm","Lawrence vs Ottomans","Hit rails, not forts. A fed useless army drains the empire faster than a dead one."],
["Asymmetric","WIN","1986","People Power Manila — Defection Cascade","Filipinos vs Marcos","Regimes fall when enforcers defect. Make the soldier's choice easier to answer with 'join.'"],
["Asymmetric","FAIL","1971","Weather Underground — Violence Shrinks the Coalition","Radicals vs opinion","Escalating past your sympathizers' tolerance turns a movement into a cult and gifts the state its justification."],
];

const VAULT = RAW.map((r,i)=>({id:i,domain:r[0],outcome:r[1],era:r[2],title:r[3],actor:r[4],pattern:r[5]}));
const DOMAINS=["All","Business","Military","Geopolitical","Investment","Product","Competitive","Political","Legal","Social","Cultural","Asymmetric"];

const MATRIX=[
  {key:"core",icon:"🎯",label:"Core Situation",ph:"What's happening? Who are you, what do you want, what's blocking it?",req:true},
  {key:"opponent",icon:"⚔️",label:"Opponents & Allies",ph:"Who's against you, who's with you, who's neutral but could flip? Their resources, incentives, commitments..."},
  {key:"political",icon:"🏛",label:"Political Terrain",ph:"Power holders, regulators, factions, elections coming, who owes whom, whose career depends on what..."},
  {key:"geography",icon:"🗺",label:"Location & Geography",ph:"Where is this playing out? Markets, regions, terrain, distances, chokepoints, time zones..."},
  {key:"legal",icon:"⚖️",label:"Legal & Regulatory",ph:"Laws in play, pending regulation, contracts, IP, jurisdiction differences, enforcement vs paper rules..."},
  {key:"cultural",icon:"🎭",label:"Cultural Forces",ph:"Norms, taboos, status symbols, what's admired/shamed, generational divides, language..."},
  {key:"demographics",icon:"👥",label:"Demographics",ph:"Who's involved? Age, income, education, urban/rural, growth/decline, who's gaining numbers..."},
  {key:"social",icon:"🕸",label:"Social Dynamics",ph:"Networks, influencers, communities, trust levels, narratives circulating, private vs public talk..."},
  {key:"economic",icon:"💰",label:"Economic Conditions",ph:"Money flows, who's funded, cost structures, macro climate, who can outlast whom..."},
  {key:"ethical",icon:"🧭",label:"Ethical Boundaries",ph:"Your red lines, reputation constraints, what would feel like winning wrong, stakeholder obligations..."},
  {key:"international",icon:"🌐",label:"National & International",ph:"Cross-border angles: trade rules, sanctions, alliances, national interests, sovereignty sensitivities..."},
  {key:"time",icon:"⏱",label:"Time & Tempo",ph:"Deadlines, windows opening/closing, election cycles, funding runways, seasonality, who benefits from delay..."},
];

const SYS_BASE = `You are STRATEGOS TOTAL — the sharpest strategic intelligence ever assembled. Hannibal, Sun Tzu, Boyd, Munger, Kennan, Lee Kuan Yew, and Machiavelli's analytical clarity as one mind.

You command a curated vault of 120+ brutal historical patterns AND the full depth of recorded history — thousands of additional cases. When a situation rhymes with a case not in the vault, cite it by name. The vault primes pattern recognition; it does not limit it.

REASONING DOCTRINE:
1. INVERT FIRST — map guaranteed paths to defeat; check if the user is on one.
2. FORCED MOVES — what is each actor OBLIGATED to do by incentives, politics, cost, pride, public commitments? Obligations are exploitable.
3. BLIND SPOT MAP — what does each opponent believe impossible, beneath them, or non-strategic? That belief is the unguarded gate.
4. COST RATIO — who pays more per unit of damage? Never recommend adverse-ratio engagements.
5. SCORECARD AUDIT — are the metrics defining 'winning' going obsolete?
6. TEMPO — can the user set a pace opponents structurally can't match?
7. DAY-AFTER — every move includes what happens after it works.
8. SECOND BATTLEFIELD — the narrative/perception layer.
9. MULTI-DIMENSIONAL READ — use every supplied dimension. Cross-reference: the best moves live at intersections (legal window × election cycle × cultural moment).
10. MISSING INTELLIGENCE — if critical dimensions are empty, state exactly what data would change the recommendation and how to get it cheaply.

HARD RULES: No textbook strategy. Every claim cites a case or named precedent. Quantify (probabilities, cost ratios, time windows). Attack flawed assumptions first. All moves legal and ethical — outmaneuvering rivals' expectations is strategy; deceiving customers/courts/regulators is a future FAIL case. Respect the user's stated ethical boundaries as hard constraints. If the board is unwinnable, say so and name a different board.

OUTPUT FORMAT (use these exact ## headers):
## ⚡ ASSUMPTION AUDIT
## 🧩 DIMENSIONAL READ
## 🗄 VAULT RESONANCE
## 🔒 FORCED MOVES
## ☠️ HOW YOU LOSE
## 🌑 OBLIVION MOVES
## 🎯 THE KILL SHOT
## ⏱ TEMPO & TRIGGERS

Surgical. Specific. Every sentence earns its place.`;

// ─── STATE ───
let state={view:"intake",matrix:{},openDim:"core",domFilter:"All",outFilter:"All",search:"",
  expanded:null,messages:[],webOn:true,loading:false,apiKey:localStorage.getItem("strategos_key")||""};

const $=s=>document.querySelector(s);
const toast=m=>{const t=$("#toast");t.textContent=m;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200);};

// ─── INTAKE ───
function renderIntake(){
  const list=$("#dimList");
  list.innerHTML=MATRIX.map(m=>{
    const filled=!!(state.matrix[m.key]||"").trim(), open=state.openDim===m.key;
    return `<div class="dim ${open?'open':''} ${filled?'filled':''}">
      <button class="dim-head" data-dim="${m.key}">
        <span class="dim-icon">${m.icon}</span>
        <span class="dim-label">${m.label}${m.req?'<span class="req"> *</span>':''}</span>
        <span class="dim-state">${filled?'✓ armed':open?'−':'+'}</span>
      </button>
      ${open?`<textarea data-dimta="${m.key}" placeholder="${m.ph}">${state.matrix[m.key]||""}</textarea>`:""}
    </div>`;
  }).join("");
  const n=MATRIX.filter(m=>(state.matrix[m.key]||"").trim()).length;
  $("#fill").style.width=(n/12*100)+"%";
  $("#pct").textContent=`${n}/12 armed`;
  $("#launchBtn").disabled=!(state.matrix.core||"").trim();
  list.querySelectorAll("[data-dim]").forEach(b=>b.onclick=()=>{state.openDim=state.openDim===b.dataset.dim?null:b.dataset.dim;renderIntake();});
  const ta=list.querySelector("[data-dimta]");
  if(ta){ta.focus();ta.oninput=()=>{state.matrix[ta.dataset.dimta]=ta.value;
    const k=MATRIX.filter(m=>(state.matrix[m.key]||"").trim()).length;
    $("#fill").style.width=(k/12*100)+"%";$("#pct").textContent=`${k}/12 armed`;
    $("#launchBtn").disabled=!(state.matrix.core||"").trim();};}
}

// ─── VAULT ───
function renderVault(){
  $("#domChips").innerHTML=DOMAINS.map(d=>`<button class="chip ${state.domFilter===d?'on':''}" data-dom="${d}">${d}</button>`).join("");
  $("#outChips").innerHTML=["All","WIN","FAIL"].map(o=>`<button class="chip ${state.outFilter===o?(o==='WIN'?'win':o==='FAIL'?'fail':'on'):''}" data-out="${o}">${o}</button>`).join("");
  const f=VAULT.filter(c=>(state.domFilter==="All"||c.domain===state.domFilter)&&(state.outFilter==="All"||c.outcome===state.outFilter)&&(!state.search||JSON.stringify(c).toLowerCase().includes(state.search.toLowerCase())));
  $("#vaultCount").textContent=`${f.length} of ${VAULT.length} patterns`;
  $("#cards").innerHTML=f.map(c=>`<div class="card ${state.expanded===c.id?'open':''}" data-card="${c.id}">
    <div class="card-top"><span class="badge ${c.outcome==='WIN'?'win':'fail'}">${c.outcome}</span><span class="dom">${c.domain}</span><span class="era">${c.era}</span></div>
    <h4>${c.title}</h4><div class="actor">${c.actor}</div>
    ${state.expanded===c.id?`<div class="pattern"><div class="pl">◈ HIDDEN PATTERN</div><div class="pt">${c.pattern}</div></div>
    <button class="weaponize" data-weap="${c.id}">Weaponize →</button>`:""}
  </div>`).join("");
  $("#domChips").querySelectorAll("[data-dom]").forEach(b=>b.onclick=()=>{state.domFilter=b.dataset.dom;renderVault();});
  $("#outChips").querySelectorAll("[data-out]").forEach(b=>b.onclick=()=>{state.outFilter=b.dataset.out;renderVault();});
  $("#cards").querySelectorAll("[data-card]").forEach(el=>el.onclick=e=>{
    if(e.target.dataset.weap!==undefined)return;
    const id=+el.dataset.card;state.expanded=state.expanded===id?null:id;renderVault();});
  $("#cards").querySelectorAll("[data-weap]").forEach(b=>b.onclick=e=>{
    e.stopPropagation();const c=VAULT[+b.dataset.weap];
    state.matrix.core=(state.matrix.core||"")+(state.matrix.core?"\n":"")+`[Apply pattern: "${c.pattern}" — ${c.title}]`;
    switchView("intake");toast("Pattern loaded into Core");});
}

// ─── AGENT ───
function fmt(t){
  return t.replace(/^## (.+)$/gm,'<div class="h2">$1</div>')
    .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
    .replace(/^[-•] (.+)$/gm,'<div class="li"><span class="b">▸</span><span>$1</span></div>')
    .replace(/^(\d+)\. (.+)$/gm,'<div class="li"><span class="n">$1.</span><span>$2</span></div>')
    .replace(/\n\n/g,'<br><br>');
}
function renderAgent(){
  const m=$("#msgs");
  if(state.messages.length===0&&!state.loading){return;}
  $("#emptyAgent")?.remove();
  $("#agentInput").style.display=state.messages.length?"flex":"none";
  let html=state.messages.map(msg=>msg.role==="user"
    ?`<div class="u-bub">${escapeHtml(msg.content.length>500?msg.content.slice(0,500)+"…":msg.content)}</div>`
    :`<div class="a-bub"><div class="a-tag">◈ STRATEGOS TOTAL</div><div class="a-body">${fmt(msg.content)}</div></div>`).join("");
  if(state.loading&&state._steps){
    html+=`<div class="loop"><div class="lh">TOTAL REASONING LOOP</div>`+
      state._steps.done.map(s=>`<div class="ok">${s} ✓</div>`).join("")+
      (state._steps.now?`<div class="now"><span class="d">●</span> ${state._steps.now}</div>`:"")+`</div>`;
  }
  m.innerHTML=html;
  m.scrollTop=m.scrollHeight;
}
function escapeHtml(s){return s.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));}

async function runLoop(steps){
  state._steps={done:[],now:""};
  for(const s of steps){state._steps.now=s;renderAgent();await new Promise(r=>setTimeout(r,460));state._steps.done.push(s);}
  state._steps.now="";renderAgent();
}

async function launch(followUp){
  if(state.loading)return;
  if(!state.apiKey){openSetup();return;}
  if(!followUp&&!(state.matrix.core||"").trim()){toast("Fill Core Situation");switchView("intake");return;}
  state.loading=true;switchView("agent");

  let userContent;
  if(followUp){userContent=followUp;}
  else{userContent="FULL SITUATION BRIEF:\n\n"+MATRIX.filter(m=>(state.matrix[m.key]||"").trim()).map(m=>`${m.icon} ${m.label}: ${state.matrix[m.key]}`).join("\n\n");}
  state.messages.push({role:"user",content:userContent});
  $("#followUp").value="";
  renderAgent();

  const n=MATRIX.filter(m=>(state.matrix[m.key]||"").trim()).length;
  runLoop([`🧩 Reading ${n}/12 dimensions...`,"⚡ Auditing assumptions...","🗄 Resonating against 120+ patterns + full memory...","🔀 Cross-referencing intersections...","🔒 Computing forced moves...","☠️ Running inversion...",state.webOn?"🌐 Pulling live intel...":"📚 Synthesizing precedents...","🌑 Generating oblivion moves...","🎯 Locking the kill shot..."]);

  try{
    const body={model:"claude-sonnet-4-20250514",max_tokens:1500,system:SYS_BASE,
      messages:state.messages.map(m=>({role:m.role,content:m.content}))};
    if(state.webOn)body.tools=[{type:"web_search_20250305",name:"web_search"}];
    const res=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",
      headers:{"Content-Type":"application/json","x-api-key":state.apiKey,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},
      body:JSON.stringify(body)});
    const data=await res.json();
    if(data.error){throw new Error(data.error.message||"API error");}
    const text=(data.content||[]).filter(b=>b.type==="text").map(b=>b.text).join("\n");
    state.messages.push({role:"assistant",content:text||"Empty response — retry."});
  }catch(err){
    state.messages.push({role:"assistant",content:`**ANALYSIS FAILED** — ${err.message}. ${/key|auth|401/i.test(err.message)?"Check your API key (tap the ◈ logo to re-enter).":"Check connection and retry."}`});
  }
  state.loading=false;state._steps=null;renderAgent();
}

// ─── SETUP / KEY ───
function openSetup(){$("#setup").style.display="flex";$("#keyInput").value=state.apiKey;}
function closeSetup(){$("#setup").style.display="none";}

// ─── NAV ───
function switchView(v){
  state.view=v;
  document.querySelectorAll(".view").forEach(s=>s.classList.toggle("active",s.id==="view-"+v));
  document.querySelectorAll("nav button").forEach(b=>b.classList.toggle("active",b.dataset.view===v));
  if(v==="intake")renderIntake();
  if(v==="vault")renderVault();
  if(v==="agent")renderAgent();
}

// ─── INIT ───
function init(){
  document.querySelectorAll("nav button").forEach(b=>b.onclick=()=>switchView(b.dataset.view));
  $("#webToggle").onclick=()=>{state.webOn=!state.webOn;$("#webToggle").classList.toggle("on",state.webOn);$("#webToggle").textContent=state.webOn?"🌐 LIVE":"📚 VAULT";};
  $("#launchBtn").onclick=()=>launch();
  $("#toIntake").onclick=()=>switchView("intake");
  $("#followBtn").onclick=()=>{const v=$("#followUp").value.trim();if(v)launch(v);};
  const fu=$("#followUp");
  fu.addEventListener("input",()=>{fu.style.height="auto";fu.style.height=Math.min(fu.scrollHeight,120)+"px";});
  fu.addEventListener("keydown",e=>{if(e.key==="Enter"&&(e.metaKey||e.ctrlKey)){const v=fu.value.trim();if(v)launch(v);}});
  $("#search").oninput=e=>{state.search=e.target.value;renderVault();};
  $(".logo").onclick=openSetup;
  $("#saveKey").onclick=()=>{const k=$("#keyInput").value.trim();if(k){state.apiKey=k;localStorage.setItem("strategos_key",k);closeSetup();toast("◈ Activated");}else toast("Enter a key or browse offline");};
  $("#skipKey").onclick=()=>{closeSetup();switchView("vault");toast("Browsing vault offline");};
  renderIntake();
  if(!state.apiKey)setTimeout(openSetup,400);
  if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js").catch(()=>{});
}
init();
