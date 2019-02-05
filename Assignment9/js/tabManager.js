class TabManager{
    constructor(tabElem, tabCont){
        this.tabElement = tabElem;
        this.tabContent = tabCont;
    }
    ///Скрыть элемент таба с номером tabIndex
    hideTabContent(tabIndex){
        this.tabContent[tabIndex].classList.remove('show');
        this.tabContent[tabIndex].classList.add('hide');
    }

    ///Отобразить элемент таба с номером tabIndex
    showTabContent(tabIndex){
        this.tabContent[tabIndex].classList.remove('hide');
        this.tabContent[tabIndex].classList.add('show');
    }

    showConcreteTab(tabIndex){
        this.showTabContent(tabIndex);
        for (let i = 0; i < this.tabElement.length; i++){
            if (i !== tabIndex){
                this.hideTabContent(i);
            }
        }
    }
}