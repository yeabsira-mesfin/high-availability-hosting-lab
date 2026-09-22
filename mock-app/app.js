
const qs=s=>document.querySelector(s);const qsa=s=>[...document.querySelectorAll(s)];
qsa('.nav button').forEach(b=>b.onclick=()=>{qsa('.nav button').forEach(x=>x.classList.remove('active'));b.classList.add('active')});
function stamp(msg){const t=qs('#terminal'); if(!t)return; const now=new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit',second:'2-digit'}); t.innerHTML += `\n<span style="color:#7890aa">[${now}]</span> ${msg}`; t.scrollTop=t.scrollHeight}

for(let i=0;i<15;i++){let b=document.createElement('i');b.style.height=(35+Math.random()*60)+'%';qs('#chart').appendChild(b)}
qs('#fail').onclick=()=>{qs('#node1 .dot').className='dot bad';qs('#n1badge').textContent='Stopped';qs('#healthy').textContent='1 / 2';stamp('<span style="color:#ff8e8e">app-01 unavailable</span> • traffic routed to app-02');};
qs('#recover').onclick=()=>{qs('#node1 .dot').className='dot';qs('#n1badge').textContent='Healthy';qs('#healthy').textContent='2 / 2';stamp('<span style="color:#85e7aa">app-01 restored</span> • redundancy recovered');};
setInterval(()=>{qs('#rpm').textContent=(1180+Math.floor(Math.random()*160)).toLocaleString()},1600);
