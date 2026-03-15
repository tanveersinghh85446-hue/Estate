/* MOBILE MENU */
function toggleMenu(){
  const m=document.getElementById('mobileMenu');
  const o=m.classList.toggle('open');
  document.querySelector('.hamburger').setAttribute('aria-expanded',o);
  document.body.style.overflow=o?'hidden':'';
}

/* SCROLL REVEAL */
const revealObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('visible');revealObs.unobserve(e.target);}
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el));

/* COUNTER ANIMATION */
function animateCounter(el,target){
  let cur=0,step=Math.ceil(target/60);
  const t=setInterval(()=>{
    el.textContent=(cur=Math.min(cur+step,target)).toLocaleString()+'+';
    if(cur>=target)clearInterval(t);
  },25);
}

const statsEl=document.querySelector('.hero-stats');
if(statsEl)new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('[data-target]').forEach(el=>animateCounter(el,+el.dataset.target));
      statsObs.unobserve(e.target);
    }
  });
},{threshold:.5}).observe(statsEl);

/* WISHLIST */
function toggleFav(btn){
  const a=btn.classList.toggle('active');
  btn.textContent=a?'♥':'♡';
  btn.setAttribute('aria-label',a?'Remove from wishlist':'Add to wishlist');
}

/* SCROLL TO CONTACT */
function scrollToContact(){
  document.getElementById('contact').scrollIntoView({behavior:'smooth'});
}

/* SEARCH */
function handleSearch(){
  const btn=document.querySelector('.search-bar button');
  btn.textContent='Searching...';
  btn.disabled=true;
  setTimeout(()=>{
    btn.textContent='Search';
    btn.disabled=false;
    document.getElementById('featured').scrollIntoView({behavior:'smooth'});
  },800);
}