// DarkMode -> https://bre.is/WNjnEf8H
let darkMode = localStorage.getItem('darkMode')
const toggle_darkMode = document.querySelector('.toggle_darkMode')
const darkModeToggle = document.querySelector('.toggle_darkMode')
const enableDarkMode = () => {
  console.log("Add")
  document.body.classList.add('darkMode')
  toggle_darkMode.classList.add('darkMode')
  localStorage.setItem('darkMode', 'enable')
}
const disableDarkMode = () => {
  console.log("Rm")
  document.body.classList.remove('darkMode')
  toggle_darkMode.classList.remove('darkMode')
  localStorage.setItem('darkMode', null)
}
if (darkMode === "enable") {
  enableDarkMode()
}
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem('darkMode')
  if (darkMode !== 'enable') {
    enableDarkMode()
  } else {
    disableDarkMode()
  }
})
