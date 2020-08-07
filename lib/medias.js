export const imagesLoaded = (parentNode) => {
  const imgElements = [...parentNode.querySelectorAll('img')]
  
  for (let i = 0; i < imgElements.length; i += 1) {
    const img = imgElements[i]

    if (!img.complete && img.naturalHeight === 0) {
      return false
    }
  }

  return true
}
