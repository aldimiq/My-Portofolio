// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle?.addEventListener('click', ()=>{
    const open = navMenu.classList.toggle('show');
navToggle.setAttribute('aria-expanded', String(open));
});


// Year
document.getElementById('year').textContent = new Date().getFullYear();


// Theme toggle (localStorage)
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if(saved==='light') root.classList.add('light');


themeToggle?.addEventListener('click', ()=>{
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    });


// Tilt effect on hero image
const tilt = document.querySelector('.tilt');
    if(tilt){
    tilt.addEventListener('mousemove', (e)=>{
    const rect = tilt.getBoundingClientRect();
    const x = e.clientX - rect.left; const y = e.clientY - rect.top;
    const cx = x/rect.width - 0.5; const cy = y/rect.height - 0.5;
    tilt.style.transform = `rotateY(${cx*8}deg) rotateX(${-cy*8}deg)`;
    });
    tilt.addEventListener('mouseleave', ()=> tilt.style.transform = 'rotateY(0) rotateX(0)');
}


// Load projects
async function loadProjects(){
    try{
    const res = await fetch('projects.js');
    const text = await res.text();
    // projects.js defines window.__PROJECTS__
    const fn = new Function(text + '; return window.__PROJECTS__ || []');
    const projects = fn();
    const list = document.getElementById('projectList');
    projects.forEach(p=>{
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <p style="margin-top:8px; font-size:13px; color:#94a3b8"><strong>Tech:</strong> ${p.tech}</p>
    <div style="margin-top:10px; display:flex; gap:10px; flex-wrap:wrap">
    ${p.links.map(l=>`<a class="btn btn-ghost" href="${l.href}" target="_blank" rel="noreferrer">${l.label}</a>`).join('')}
    </div>`;
    el.style.opacity = 0;
    el.style.animation = 'reveal .6s ease forwards';
    el.style.animationDelay = `${0.05 * (1 + Math.random()*4)}s`;
    list.appendChild(el);
    });
    }catch(e){console.warn('Failed to load projects', e)}
}
loadProjects();