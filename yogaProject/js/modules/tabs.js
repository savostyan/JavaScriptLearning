function tabs(){
        let tab = document.querySelectorAll('.info-header-tab'),
            info = document.querySelector('.info-header'),
            tabContent = document.querySelectorAll('.info-tabcontent');

        let tabMgr = new TabManager(tab, tabContent);

        info.addEventListener('click', function(event){
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')){
                for (let i = 0; i < tab.length; i++){
                    if(target == tab[i]){       
                        tabMgr.showConcreteTab(i);
                        break;
                    }
                }
            }
        });

        tabMgr.showConcreteTab(0);

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
}

module.exports = tabs;
