(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.getElementById("menu__burger").addEventListener("click",function(){const s=document.getElementById("menu"),o=document.querySelector("main");s.classList.contains("show")?(s.classList.remove("show"),o.classList.remove("main-blur"),setTimeout(()=>{s.style.display="none"},300)):(s.style.display="flex",setTimeout(()=>{s.classList.add("show"),o.classList.add("main-blur")},10))});const l=document.querySelectorAll(".menu__item"),i=document.getElementById("menu"),u=document.querySelector("main");l.forEach(s=>{s.addEventListener("click",function(){i.classList.remove("show"),u.classList.remove("main-blur"),setTimeout(()=>{i.style.display="none"},300)})});