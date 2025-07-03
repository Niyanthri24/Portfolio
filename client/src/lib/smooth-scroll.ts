export function smoothScrollTo(target: string) {
  const element = document.querySelector(target);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80; // Account for fixed header
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}
