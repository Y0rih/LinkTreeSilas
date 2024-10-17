function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag image
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, ativar a img light
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  //trocar o alt
  if (html.classList.contains("light")) {
    // Se tiver light mode, ativar a img light
    img.setAttribute("alt", "Foto de Pedro Guedes tocando violão, light mode")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("alt", "Foto de Pedro Guedes tocando violão, dark mode")
  }
}
