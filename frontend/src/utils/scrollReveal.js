// Utility function to handle scroll reveal animations
export const initScrollReveal = () => {
    const revealElements = document.querySelectorAll(".reveal")
  
    const reveal = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
  
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active")
        }
      })
    }
  
    window.addEventListener("scroll", reveal)
    // Call once on load
    reveal()
  
    // Return cleanup function
    return () => window.removeEventListener("scroll", reveal)
  }
  