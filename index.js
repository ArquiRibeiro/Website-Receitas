observer_options = {
    root: null,
    threshold: 0.25,
    rootmargin: "0px"
}

observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry=> entry.isIntersecting ? entry.target.style.animationPlayState="running" : "");
}, observer_options)

for (let i=0; i< document.getElementsByTagName("h2").length; i++){
    observer.observe(document.getElementsByTagName("h2")[i]);
}

for (let i=0; i< document.getElementsByTagName("span").length; i++){
    observer.observe(document.getElementsByTagName("span")[i]);
}

observer.observe(document.getElementById("left-point"));