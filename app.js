const hiddenH1 = document.querySelector("#hiddenH1")

function lazyLoad() {
  const scriptTag = document.createElement('script'); 
  scriptTag.src = "lazy.js";
  const body = document.querySelector("body")
  body.appendChild(scriptTag);
}

let observer = new IntersectionObserver(function(entries) {
  if (entries[0].isIntersecting) {
    setTimeout(function() {
      lazyLoad()
    }, 500)
    
    observer.unobserve(hiddenH1)
  }
  
});

observer.observe(hiddenH1)





