const icons = document.querySelectorAll('i')

const observeIcons = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('fade')
    }else {
      entry.target.classList.remove('fade')
    }
  })
})

icons.forEach(el => {
  observeIcons.observe(el)
})