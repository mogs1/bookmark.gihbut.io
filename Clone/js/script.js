const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')

//tabs menu event Listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

//Hamburger button Listener
btn.addEventListener('click', navToggle)

function onTabClick(e) {
    // remove all tabs borders
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            'border-softRed',
            'border-b-4',
            'md:border-b-0'
        )
    })

    //hide all panels
    panels.forEach((panel) =>  panel.classList.add('hidden'))

    // Activate a new tab and panel
    e.target.classList.add('border-softRed', 'border-b-4')
    const classString = e.target.getAttribute('data-target')
    document.getElementById('panels').getElementsByClassName(classString)[0]
    .classList.remove('hidden')
}

function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')

    if (menu.classList.contains('flex')) {
        logo.setAttribute('src', './images/logo-bookmark-footer.svg')
    }else {
        logo.setAttribute('src', './images/logo-bookmark.svg')
    }
}