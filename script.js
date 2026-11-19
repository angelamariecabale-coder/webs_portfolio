var PHOTO="formalphoto.jpeg";            
var IMG=["HTML_Essentials.jpg","CSS_Essentials.jpg","Python1_Essentials.jpg","Screenshot_20261118_210927_Chrome.jpg"];        


var P=[
{l:"Web Foundations",t:"HTML Essential",d:"Core HTML: page structure, semantic tags, links, images, lists, tables, and forms.",u:["Focus: semantic, accessible markup","Tools: HTML5, VS Code","Outcome: well-structured web pages"],g:"linear-gradient(135deg,#4F7C78,#7aa39e)"},
{l:"Styling & Layout",t:"CSS Essential",d:"Styling the web: colors, typography, spacing, Flexbox, Grid, and responsive layouts.",u:["Focus: clean, responsive design","Tools: CSS3, Flexbox, Grid","Outcome: polished, mobile-friendly styling"],g:"linear-gradient(135deg,#c48d86,#D9A29B)"},
{l:"Programming",t:"Python Essential",d:"Python basics: variables, loops, functions, data structures, and simple problem solving.",u:["Focus: logic and automation","Tools: Python 3","Outcome: small working scripts"],g:"linear-gradient(135deg,#6b8c86,#a9c3b9)"},
{l:"Web Design & Development",t:"Website Portfolio",d:"This portfolio: a calm, accessible, responsive site with lavender moving background, built from my design book.",u:["Focus: soft minimalist design","Tools: HTML, CSS","Outcome: another site"],g:"linear-gradient(135deg,#4F7C78,#D9A29B)",
 url:"https://angelamariecabale-coder.github.io/my_web_portfolio/"}];
var D=document.getElementById("dlg");
function $(i){return document.getElementById(i)}
if(PHOTO){var pt=document.querySelector(".portrait");pt.classList.add("has-img");pt.removeAttribute("role");pt.innerHTML='<img src="'+PHOTO+'" alt="Photo of Angela Cabale">'}
document.querySelectorAll(".proj .thumb").forEach(function(t,i){if(IMG[i]){t.innerHTML='<img src="'+IMG[i]+'" alt="">'}});
document.querySelectorAll(".open").forEach(function(b){b.addEventListener("click",function(){
  var p=P[+b.dataset.p];
  $("dl").textContent=p.l;$("dt").textContent=p.t;$("dd").textContent=p.d;
  $("du").innerHTML=p.u.map(function(s){return"<li>"+s+"</li>"}).join("");
  var im=IMG[+b.dataset.p];if(im){$("dth").style.background="none";$("dth").innerHTML='<img src="'+im+'" alt="">'}else{$("dth").style.background=p.g;$("dth").textContent=p.t}
  var v=$("visit");if(p.url){v.href=p.url;v.hidden=false}else{v.hidden=true}
  D.showModal();
});});
var R=document.documentElement,SUN='<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',MOON='<path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/>';
function cur(){return R.getAttribute("data-theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}
function sync(){var d=cur()==="dark";$("theme").setAttribute("aria-pressed",d);$("theme").setAttribute("aria-label",d?"Switch to light mode":"Switch to dark mode");$("ti").innerHTML=d?SUN:MOON;$("tl").textContent=d?"Light":"Dark"}
try{var s=localStorage.getItem("theme");if(s)R.setAttribute("data-theme",s)}catch(e){}
sync();
$("theme").addEventListener("click",function(){var n=cur()==="dark"?"light":"dark";R.setAttribute("data-theme",n);try{localStorage.setItem("theme",n)}catch(e){}sync()});
$("x").addEventListener("click",function(){D.close()});
$("dlink").addEventListener("click",function(){D.close()});
D.addEventListener("click",function(e){if(e.target===D)D.close()});