const themControlRefs = document.querySelector('#theme-switch-toggle')
const bodyRefs = document.querySelector('body')
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themControlRefs.addEventListener('change', changeThem)

bodyRefs.classList.add(localStorage.getItem('theme'))
themControlRefs.checked = localStorage.getItem('check')

console.dir(themControlRefs)


function changeThem(e) {
               if (e.target.checked) {
            bodyRefs.classList.add(Theme.DARK)
            if (bodyRefs.classList.contains(Theme.LIGHT)) {
                bodyRefs.classList.remove(Theme.LIGHT)
            }
               localStorage.setItem('theme', Theme.DARK)
               localStorage.setItem('check', false)
               

        } else {
            bodyRefs.classList.replace(Theme.DARK, Theme.LIGHT)
            localStorage.removeItem('theme')
            localStorage.setItem('theme', Theme.LIGHT)
            localStorage.removeItem('check')
            localStorage.setItem('check', true)
        }
    
    
}