(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.getElementById("menu__burger").addEventListener("click",function(){const n=document.getElementById("menu"),s=document.querySelector("main"),c=document.body;n.classList.contains("show")?(n.classList.remove("show"),s.classList.remove("main-blur"),c.style.overflow="auto",setTimeout(()=>{n.style.display="none"},300)):(n.style.display="flex",c.style.overflow="hidden",setTimeout(()=>{n.classList.add("show"),s.classList.add("main-blur")},10))});const l=document.querySelectorAll(".menu__item"),i=document.getElementById("menu"),d=document.querySelector("main");l.forEach(n=>{n.addEventListener("click",function(){i.classList.remove("show"),d.classList.remove("main-blur"),setTimeout(()=>{i.style.display="none"},300)})});document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("cart-icon"),s=document.getElementById("cart-popup"),c=document.getElementById("close-popup-btn");n.addEventListener("click",function(){s.classList.toggle("hidden")}),c.addEventListener("click",function(){s.classList.add("hidden")});function r(e,t){document.getElementById(e).textContent=t}window.increment=function(e){let t=document.getElementById(e),o=parseInt(t.textContent);o++,r(e,o)},window.decrement=function(e){let t=document.getElementById(e),o=parseInt(t.textContent);o>0&&(o--,r(e,o))}});