const toggleSwitch = document.querySelector('#toggle-switch')

toggleSwitch.addEventListener('click', (event) => {
  const html = document.documentElement
  html.classList.toggle('dark')
})