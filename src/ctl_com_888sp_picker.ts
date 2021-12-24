import { Module, ModulePicker } from "./ModulePicker"

// import "./style.css"
/****** CONSTANTS ******/
var PROPERTIES = {
    // <OmnisUpdateMarker_PropertyConstants_Begin>
    filter: "$::filter",
    // <OmnisUpdateMarker_PropertyConstants_End>
}

var EVENTS = {
    evNetOmnisControlOpened: 1,
    evModuleClick: 2,
}

export class ctrl_com_888sp_modulepicker extends ctrl_base {
    picker: ModulePicker
    autoUpdate: boolean = false

    constructor() {
        super()
        this.init_class_inst() // initialize our class
    }

    init_ctrl_inst(form, elem, rowCtrl, rowNumber) {
        super.init_ctrl_inst(form, elem, rowCtrl, rowNumber)

        var client_elem = this.getClientElem()
        var datapropsobj = JSON.parse(client_elem.getAttribute("data-props"))

        this.initModulePicker(client_elem)

        for (let propName in PROPERTIES) {
            const propValue = datapropsobj[propName] // L'oggetto è indicizzato per il nome senza $
            this.setProperty(PROPERTIES[propName], propValue)
        }

        this.update()
        return false
    }

    updateCtrl(what, row, col, mustUpdate) {
        var elem = this.getClientElem()

        // read $dataname value and display in control
        const dataname = this.getData()
        const datanameList = new omnis_list(dataname)

        this.mData = dataname

        if (dataname) {
            let modules: Module[] = []

            for (let index = 1; index <= datanameList.getRowCount(); index++) {
                modules.push({
                    id: datanameList.getData("id", index),
                    group: datanameList.getData("group", index),
                    name: datanameList.getData("name", index),
                })
            }

            this.picker.setModules(modules)
            this.picker.render()
        } else {
            elem.innerHTML = "MODULE PICKER"
        }
    }

    /**
     * This is called when an event registered using this.mEventFunction() is triggered.
     *
     * @param event The event object
     */
    handleEvent(event: any) {
        if (!this.isEnabled()) return true // If the control is disabled, don't process the event.

        switch (event.type) {
            case "click":
                return true
            // case "touchstart":
            //     this.lastTouch = new Date().getTime() // Note the time of the touch start.
            //     this.touchStartPos = {
            //         x: event.changedTouches0.clientX,
            //         y: event.changedTouches0.clientY,
            //     } // Note the starting position of the touch.
            //     break
            // case "touchend":
            //     var time = new Date().getTime()
            //     if (time - this.lastTouch < 500) {
            //         //Treat as a click if less than 500ms have elapsed since touchstart
            //         if (touchWithinRange(this.touchStartPos, event.changedTouches0, 20)) {
            //             //Only treat as a click if less than 20 pixels have been scrolled.
            //             return this.handleClick(event.changedTouches0.offsetX, event.changedTouches0.offsetY)
            //         }
            //     }
            //     break
        }

        super.handleEvent(event)
    }

    getCanAssign(propNumber: number | string) {
        return Object.values(PROPERTIES).includes(propNumber.toString()) || super.getCanAssign(propNumber)
    }

    setProperty(propNumber: number | string, propValue: any) {
        if (!this.getCanAssign(propNumber)) {
            return false
        }

        if (propNumber) {
            switch (propNumber) {
                case PROPERTIES.filter:
                    console.log("set filter")
                    this.picker.setFilter(propValue.toString())
                    this.picker.render()
                    return true
                //         // Main control
                //         case PROPERTIES.backgroundcolor:
                //             this.picker.backgroundColor = propValue as string
                //             return true
                //         // Active TAB
                //         case PROPERTIES.activetabbackgroundcolor:
                //             this.picker.activeTabBackgroundColor = propValue as string
                //             return true
                //         case PROPERTIES.activetabtextcolor:
                //             this.picker.activeTabTextColor = propValue as string
                //             return true
                //         // TAB
                //         case PROPERTIES.tabbackgroundcolor:
                //             this.picker.tabBackgroundColor = propValue as string
                //             return true
                //         case PROPERTIES.tabtextcolor:
                //             this.picker.textColor = propValue as string
                //             return true
                //         case PROPERTIES.tabbordercolor:
                //             this.picker.tabBorderColor = propValue as string
                //             return true
                //         case PROPERTIES.tabbordersize:
                //             this.picker.tabBorderSize = propValue as number
                //             return true
                //         case PROPERTIES.tabborderradius:
                //             this.picker.tabBorderRadius = propValue as number
                //             return true
                //         case PROPERTIES.tabspacing:
                //             this.picker.tabSpacing = propValue as number
                //             return true
                //         case PROPERTIES.tabwidth:
                //             this.picker.tabWidth = propValue as number
                //             return true
                //         case PROPERTIES.tabmaxwidth:
                //             this.picker.tabMaxWidth = propValue as number
                //             return true
                //         case PROPERTIES.tabminwidth:
                //             this.picker.tabMinWidth = propValue as number
                //             return true
                //         case PROPERTIES.tabpaddinghorz:
                //             this.picker.tabPaddingHorz = propValue as number
                //             return true
                //         case PROPERTIES.tabpaddingvert:
                //             this.picker.tabPaddingVert = propValue as number
                //             return true
                //         // BEHAVIOR
                //         case PROPERTIES.canaddtab:
                //             this.picker.canAddTab = propValue as boolean
                //             return true
                //         case PROPERTIES.canclosetab:
                //             this.picker.canCloseTab = propValue as boolean
                //             return true
                //         case PROPERTIES.autoupdate:
                //             this.autoUpdate = propValue as boolean
                //             return true
            }
        }

        return super.setProperty(propNumber, propValue)
    }

    getProperty(propNumber: string | number) {
        switch (propNumber) {
            case PROPERTIES.filter:
                return this.picker.filter
        }
        //     // Main control
        //     case PROPERTIES.backgroundcolor:
        //         return this.picker.backgroundColor
        //     // Active TAB
        //     case PROPERTIES.activetabbackgroundcolor:
        //         return this.picker.activeTabBackgroundColor
        //     case PROPERTIES.activetabtextcolor:
        //         return this.picker.activeTabTextColor
        //     // TAB
        //     case PROPERTIES.tabbackgroundcolor:
        //         return this.picker.tabBackgroundColor
        //     case PROPERTIES.tabtextcolor:
        //         return this.picker.textColor
        //     case PROPERTIES.tabbordercolor:
        //         return this.picker.tabBorderColor
        //     case PROPERTIES.tabbordersize:
        //         return this.picker.tabBorderSize
        //     case PROPERTIES.tabborderradius:
        //         return this.picker.tabBorderRadius
        //     case PROPERTIES.tabspacing:
        //         return this.picker.tabSpacing
        //     case PROPERTIES.tabwidth:
        //         return this.picker.tabWidth
        //     case PROPERTIES.tabmaxwidth:
        //         return this.picker.tabMaxWidth
        //     case PROPERTIES.tabminwidth:
        //         return this.picker.tabMinWidth
        //     case PROPERTIES.tabpaddinghorz:
        //         return this.picker.tabPaddingHorz
        //     case PROPERTIES.tabpaddingvert:
        //         return this.picker.tabPaddingVert
        //     // BEHAVIOR
        //     case PROPERTIES.canaddtab:
        //         return this.picker.canAddTab
        //     case PROPERTIES.canclosetab:
        //         return this.picker.canCloseTab
        //     case PROPERTIES.autoupdate:
        //         return this.autoUpdate
        // }

        return super.getProperty(propNumber)
    }

    private initModulePicker(client_elem) {
        this.picker = new ModulePicker(client_elem)

        this.picker.addEventListener("moduleclick", (event, id, module) => {
            if (this.canSendEvent(EVENTS.evModuleClick)) {
                this.eventParamsAdd("pModuleId", id)
                this.eventParamsAdd("pModuleName", module.name)
                this.eventParamsAdd("pModuleGroup", module.group)
                this.sendEvent("evModuleClick")
            }
        })
    }

    // /**
    //  * Assigns the specified property's value to the control.
    //  * @param propNumber    The Omnis property number
    //  * @param propValue     The new value for the property
    //  * @returns {boolean}   success
    //  */
    // handleClick(pX, pY) {
    //     // send event to Omnis
    //     if (this.canSendEvent(eBaseEvent.evClick)) {
    //         this.eventParamsAdd("pXPos", pX)
    //         this.eventParamsAdd("pYPos", pY)

    //         this.sendEvent(eBaseEvent.evClick)
    //     }
    // }

    // /**
    //  * Called when the size of the control has changed.
    //  */
    // sizeChanged() {
    //     super.sizeChanged()

    //     // // center any text vertically
    //     // var elem = this.getClientElem()
    //     // elem.style.lineHeight = elem.style.height
    // }
}
