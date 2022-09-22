gsap.utils.toArray(".section-parallax .parallax-content").forEach((section, i) => {
    const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;

gsap.fromTo(section,{ 
  y: -heightDiff
}, {
  scrollTrigger: {
    trigger: section.parentElement,
    scrub: true
  },
  y: 0,
  ease: "none"
});
  });