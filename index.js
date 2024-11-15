import{i as a,S as l}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const c="47065564-a622eb5e999173b8ae38c4180",u="https://pixabay.com/api/";async function p(n){const t=document.getElementById("loadingSpinner");t.style.display="block";const s=`${u}?key=${c}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;try{const e=await(await fetch(s)).json();return e.hits.length===0?(a.warning({message:"Sorry, there are no images matching your search query. Please try again!"}),null):e.hits}catch(r){throw a.error({message:"An error occurred. Please try again."}),r}finally{t.style.display="none"}}function m(n){const t=document.querySelector(".gallery"),s=n.map(r=>`
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
    `).join("");t.innerHTML=s}let f=new l(".gallery a");document.querySelector(".form").addEventListener("submit",async function(n){n.preventDefault();const t=n.target.elements.query.value.trim();if(!t){a.warning({message:"Please enter a search query."});return}document.querySelector(".gallery").innerHTML="";try{const s=await p(t);if(!s)return;m(s),f.refresh()}catch(s){a.error({message:s.message||"An error occurred. Please try again."}),console.error("Error fetching images:",s)}});
//# sourceMappingURL=index.js.map
