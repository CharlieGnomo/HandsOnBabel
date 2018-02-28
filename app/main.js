export class Main {
    constructor() {
        console.log("Main loaded")
        this.vista = {
            aBtnsMenu: document.querySelectorAll('nav a'),
            eMain: document.querySelector('main'),
            eBtnMenuMob: document.querySelector('#menuBtn'),
            eMenuMob: document.querySelector('.menuMob ul'),
            aImports: document.querySelectorAll('link[rel="import"]'),
            oImports: {}
        }
        // Manejador de eventos del menu
        this.vista.aBtnsMenu.forEach((item) => {
            item.addEventListener('click', this.menuItems.bind(this), false)
        })
        // el array de selectores de los templates se convierte en un objeto
        // con claves el title de los templates y valores los propios elementos
        this.vista.aImports.forEach((elem) => {
            this.vista.oImports[elem.title] = elem.import
        })

        this.vista.eBtnMenuMob.addEventListener('click', this.desplegarMenu.bind(this), false);
        console.log(this.vista.oImports)
        //this._cargarTemplate('trivial')
    }

    menuItems(oEv) {
        oEv.preventDefault()
        console.log(`Pulsado ${oEv.target.id}`)
        if (!this.vista.oImports[oEv.target.id]) {
            // Si no existe template
            document.location.href = `./${oEv.target.id}.html`;
        } else {
            this._cargarTemplate(oEv.target.id)
        }
    }


    _cargarTemplate(id) {
        // Se selecciona el import adecuado segun su nombre (title)
        const IMPORT = this.vista.oImports[id]
        console.log(IMPORT)
        // del import se selecciona el template que contiene
        const ELEM = IMPORT.querySelector(`#${id}`)
        console.log(`#${id}`)
        console.log(ELEM)
        // el HTML del elemnto se añade en el punto adecuado
        this.vista.eMain.innerHTML = ELEM.innerHTML
    }

    desplegarMenu() {
        if (!this.vista.eMenuMob.style.display || this.vista.eMenuMob.style.display==='none') {
            this.vista.eMenuMob.style.display = 'list-item';
        } else {
            this.vista.eMenuMob.style.display = 'none';
        }
    }

}