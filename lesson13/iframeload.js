const frames=document.querySelectorAll("[data-src]");
function load(iframe) {
    const src=iframe.getAttribute('data-src');
    if(!src) {
        return;

    }
    iframe.src=src;
}
const imgOpt= {
    threshold:0,
    rootMargin:"0px 0px -100px 0px"
    };
    const imgObserver= new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                load(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })
    }, imgOpt);
 frames.forEach(frame => {
     imgObserver.observe(frame);
 })