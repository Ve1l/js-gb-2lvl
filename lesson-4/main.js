let block = document.querySelector('.text')
document.querySelector('.replace').addEventListener('click', () => {
  // block.textContent = block.textContent.replace(/'/g, '"')
  block.textContent = block.textContent.replace(/\B'|'\B/g, '"')
})
