const menuMobile = {
    init: function() {
        this.clickShowmenu('.humberger', '.menu__list', 'showmenu');
        this.clickShowmenu('#item2', '#item2 .drop__menu', 'showMenu');
        this.clickShowmenu('#item3', '#item3 .drop__menu', 'showMenu');
        this.clickShowmenu('#item4', '#item4 .drop__menu', 'showMenu');
        this.clickShowmenu('#item5', '#item5 .drop__menu', 'showMenu');
        this.clickShowmenu('#item6', '#item6 .drop__menu', 'showMenu');
    },
    clickShowmenu: function(button, menu, togeMenu) {
        let btn = document.querySelector(button);
        let navMenu = document.querySelector(menu);
        btn.addEventListener('click', () => {
            navMenu.classList.toggle(togeMenu);
        });
    }
}
menuMobile.init();