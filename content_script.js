function changeLogoHref() {
  const logoElement = document.getElementById("logo");
  if (logoElement) {
    logoElement.href = "/home";
  }
}

// Run the function once the page is fully loaded
window.addEventListener("load", changeLogoHref);
