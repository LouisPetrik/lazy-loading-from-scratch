function lazyLoad() {
  const scriptTag = document.createElement('script'); 
  scriptTag.src = "lazy.js";
  const body = document.querySelector("body")
  body.appendChild(scriptTag);
}

const hiddenH1 = document.querySelector("#hiddenH1")
let observer = new IntersectionObserver(function(entry) {
  if (entry[0].isIntersecting) {
    console.log("visible now")

    setTimeout(function() {
      lazyLoad()
    }, 500)
    

    observer.unobserve(hiddenH1)
  }
  
});

observer.observe(hiddenH1)





