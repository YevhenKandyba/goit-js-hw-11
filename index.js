import{i,S as l}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const c="47065564-a622eb5e999173b8ae38c4180",u="https://pixabay.com/api/";async function p(n){const t=document.getElementById("loadingSpinner");t.style.display="block";const o=`${u}?key=${c}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;try{const e=await(await fetch(o)).json();return e.hits.length===0?(i.error({message:"Sorry, there are no images matching your search query."}),[]):e.hits}catch(r){throw i.error({message:"An error occurred. Please try again."}),r}finally{t.style.display="none"}}function f(n){const t=document.querySelector(".gallery"),o=n.map(r=>`
        <li class="foto">
            <a href="${r.largeImageURL}">
                <img src="${r.webformatURL}" width="" height="" alt="${r.tags}">
            </a>
            <ul class="coments">
                <li>
                <p class="text">Likes</p>
                <p class="numb">${r.likes}</p>
                </li>
                <li>
                <p class="text">Views</p>
                <p class="numb">${r.views}</p>
                </li>
                <li>
                <p class="text">Comments</p>
                <p class="numb">${r.comments}</p>
                </li>
                <li>
                <p class="text">Downloads</p>
                <p class="numb">${r.downloads}</p>
                </li> 
            </ul>
        </li>
    `).join("");t.innerHTML=o}let m=new l(".gallery a");document.querySelector(".form").addEventListener("submit",async function(n){n.preventDefault();const t=n.target.elements.query.value.trim();if(!t){iziToast.warning({message:"Please enter a search query."});return}document.querySelector(".gallery").innerHTML="";try{const o=await p(t);f(o),m.refresh()}catch(o){console.error("Error fetching images:",o)}});
//# sourceMappingURL=index.js.map
