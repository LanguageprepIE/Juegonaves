const fs=require('fs'),vm=require('vm'),assert=require('assert');
const nodes={};const handlers={};function el(){return {textContent:'',innerHTML:'',value:'',open:false,children:[],append(...x){this.children.push(...x)},replaceChildren(){this.children=[]},showModal(){this.open=true},close(){this.open=false},focus(){},addEventListener(){},querySelectorAll(){return []},click(){}}}
const context=new Proxy({}, {get:()=>()=>{}});nodes.canvas={...el(),getContext:()=>context};const doc={querySelector(s){return nodes[s]??=el()},createElement:()=>el(),addEventListener(){},hidden:false};const sandbox={document:doc,window:{},performance:{now:()=>0},requestAnimationFrame(){},addEventListener:(e,f)=>handlers[e]=f,setTimeout(){},Blob,Uint8Array,URL,navigator:{},console};vm.createContext(sandbox);vm.runInContext(fs.readFileSync(require('path').join(__dirname,'../game.js'),'utf8'),sandbox);const run=s=>vm.runInContext(s,sandbox);
run('loadLevel(0);for(let i=0;i<60;i++)update(1/60)');assert.equal(run('p.y+p.h'),470);
run("keys={KeyD:true};for(let i=0;i<60;i++)update(1/60)");assert(run('p.x')>260);const before=run('p.x');run("keys={Space:true};pressed={Space:true};update(1/60);pressed={};for(let i=0;i<20;i++)update(1/60)");assert(run('p.y+p.h')<370,'jump must reach first platform');run('keys={};for(let i=0;i<90;i++)update(1/60)');assert.equal(run('p.y+p.h'),370,'land reliably on shelf');
run('state.score=100;inv=shield=0;hit("MB")');assert.equal(run('state.score'),70);run('inv=0;hit("UB")');assert.equal(run('p.hp'),4);run('inv=0;hit("HW")');assert.equal(run('slow'),4);
run('award("Respect","quiet");inv=0;hit("UB")');assert.equal(run('p.hp'),4);run('award("Kindness","helped")');assert.equal(run('p.hp'),5);run('award("Kindness","helped")');assert.equal(run('state.merits.length'),2);
run('checkpoint={x:1200,y:400};p.y=700;shield=0;update(1/60)');assert.equal(run('p.x'),1200);assert.equal(run('state.merits.length'),2);
for(let i=0;i<4;i++){run('loadLevel('+i+');solved=true;card=true;state.description="Celia es alegre. Tiene el pelo largo y moreno. Lleva una camiseta roja.";p.x=4250;interact()');if(i<3){let btn=nodes['#dialogBody'].children.find(x=>x.textContent==='Next world');assert(btn);btn.onclick();assert.equal(run('state.level'),i+1)}}assert.equal(run('state.completed.length'),4);assert.equal(run('mode'),'end');
run('report()');nodes['#name'].value='QA Student';nodes['#reflection'].value='Me gusta Celia porque es alegre.';nodes['#name'].oninput();assert(nodes['#preview'].textContent.includes('QA Student'));assert(nodes['#preview'].textContent.includes('Levels completed: 4/4'));
run('loadLevel(2)');assert(run('platforms.some(a=>a.move)'));run('loadLevel(0);p.x=600;keys={};for(let i=0;i<190;i++)update(1/60)');assert(run('state.merits.some(m=>m.kind==="Respect")'));
(async()=>{let blob=run('makePDF(reportText())');fs.writeFileSync(require('path').join(require('os').tmpdir(),'school-escape-qa-report.pdf'),Buffer.from(await blob.arrayBuffer()));console.log('PASS: movement, jump height, shelf landing, sanctions, shield, health, Merit deduplication, checkpoint preservation, 4 transitions, ending, report fields, moving platforms, silent zone, PDF serialization')})();
function button(name){return nodes['#dialogBody'].children.find(x=>x.textContent===name)}
for(let world=0;world<4;world++){
 run('loadLevel('+world+')');
 for(let clue=0;clue<3;clue++){
  run('p.x=npcs[currentMission().target].x;interact()');
  if(world===2&&clue===0){button('Identify this person').onclick();assert.equal(run('missionIndex'),0,'science card gates progress');run('card=true')}
  button('Identify this person').onclick();assert.equal(run('missionIndex'),clue+1);assert.equal(run('solved'),clue===2);
 }
 if(world===3){run('p.x=3970;interact()');nodes['#writing'].value='Es alegre.';button('Hand in description').onclick();assert.equal(run('mode'),'dialog');nodes['#writing'].value='Celia es alegre. Tiene el pelo largo y moreno. Lleva una camiseta roja.';button('Hand in description').onclick();assert(run('state.description').includes('Celia'))}
}
console.log('PASS: all twelve clue interactions; science card gating; own writing length and three-sentence gating');
