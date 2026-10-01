const spice=document.querySelector('#spice');
const spiceValue=document.querySelector('#spiceValue');
const verdict=document.querySelector('#verdict');
const description=document.querySelector('#description');
const result=document.querySelector('#result');
const bowl=document.querySelector('#bowl');
const names=['Classic','Bold','Chaos','Mysterious','Supreme','Questionable'];
const notes=['A respectable amount of spice. The guacamole has achieved equilibrium.','Enough kick to make the chips nervous.','You have crossed the line from recipe into experiment.','Nobody knows what is happening. The guac seems pleased.','Peak guacamole energy. Absolutely unnecessary.','This is no longer a side dish.'];
const reactions=['approved by the council','has achieved maximum dip potential','was assembled under questionable supervision','contains an irresponsible amount of avocado','is legally considered a guacamole event','has been certified chip-compatible'];
function update(){const n=+spice.value;spiceValue.textContent=n+'%';const i=n<20?0:n<40?1:n<60?2:n<75?3:n<90?4:5;verdict.textContent=names[i]+' Guacamole';description.textContent=notes[i];bowl.style.transform=`rotate(${(n-50)/5}deg) scale(${1+n/500})`}
spice.addEventListener('input',update);
document.querySelector('#remix').addEventListener('click',()=>{spice.value=Math.floor(Math.random()*101);update();result.textContent='RECIPE REMIXED ✓'});
document.querySelector('#copy').addEventListener('click',async()=>{const text=`${verdict.textContent}: ${description.textContent}`;try{await navigator.clipboard.writeText(text);result.textContent='VERDICT COPIED ✓'}catch{result.textContent=text}});
document.querySelector('#surprise').addEventListener('click',()=>{spice.value=Math.floor(Math.random()*101);update();document.querySelector('#play').scrollIntoView({behavior:'smooth'});result.textContent='SURPRISE GUAC ACTIVATED ✓'});
document.querySelectorAll('[data-action]').forEach(b=>b.addEventListener('click',()=>{const a=b.dataset.action;if(a==='generate'){const name=names[Math.floor(Math.random()*names.length)];result.textContent=name+' guacamole '+reactions[Math.floor(Math.random()*reactions.length)]+'.'}if(a==='meter'){const n=Math.floor(70+Math.random()*31);result.textContent='GUAC INTENSITY: '+n+'% '+(n>90?'🚨':'✓')}if(a==='secret'){result.textContent='🐀 A rat chewed through the code so you cant press it';}}));
update();