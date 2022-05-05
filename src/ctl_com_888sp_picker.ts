import { Module, ModulePicker, TextAlign } from "./ModulePicker"

// import "./style.css"
/****** CONSTANTS ******/
var PROPERTIES = {
    // <OmnisUpdateMarker_PropertyConstants_Begin>
    filter: "$::filter",
    titlefontsize: "$titlefontsize",
    fontsize: "$::fontsize",
    boxwidth: "$boxwidth",
    boxheight: "$boxheight",
    boxcolor: "$boxcolor",
    boxtextcolor: "$boxtextcolor",
    backgroundcolor: "$::backgroundcolor",
    defaultcollapsed: "$defaultcollapsed",
    boxhasshadow: "$boxhasshadow",
    boxborderwidth: "$boxborderwidth",
    boxborderradius: "$boxborderradius",
    boxbordercolor: "$boxbordercolor",
    showgroups: "$showgroups",
    boxtitlealign: "$boxtitlealign",
    grouphorzscroll: "$grouphorzscroll",
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
                    this.picker.setFilter(propValue.toString())
                    this.picker.render()
                    return true
                case PROPERTIES.defaultcollapsed:
                    this.picker.defaultCollapsed = propValue as boolean
                    return true
                // Main control
                case PROPERTIES.backgroundcolor:
                    this.picker.backgroundColor = this.getTheme().getColorString(propValue)
                    return true
                case PROPERTIES.fontsize:
                    this.picker.fontSize = propValue as number
                    return true
                case PROPERTIES.titlefontsize:
                    this.picker.titleFontSize = propValue as number
                    return true
                // BOX
                case PROPERTIES.boxcolor:
                    this.picker.boxColor = this.getTheme().getColorString(propValue)
                    return true
                case PROPERTIES.boxheight:
                    this.picker.boxHeight = propValue as number
                    return true
                case PROPERTIES.boxwidth:
                    this.picker.boxWidth = propValue as number
                    return true
                case PROPERTIES.boxtextcolor:
                    this.picker.boxTextColor = this.getTheme().getColorString(propValue)
                    return true
                case PROPERTIES.boxhasshadow:
                    this.picker.boxHasShadow = propValue as boolean
                    return true
                case PROPERTIES.boxborderwidth:
                    this.picker.boxBorderWidth = propValue as number
                    return true
                case PROPERTIES.boxborderradius:
                    this.picker.boxBorderRadius = propValue as number
                    return true
                case PROPERTIES.boxbordercolor:
                    this.picker.boxBorderColor = this.getTheme().getColorString(propValue)
                    return true
                case PROPERTIES.boxtitlealign:
                    this.picker.boxTitleAlign = propValue as TextAlign
                    return true
                case PROPERTIES.showgroups:
                    this.picker.showGroups = propValue as boolean
                    return true
                case PROPERTIES.grouphorzscroll:
                    this.picker.groupHorzScroll = propValue as boolean
                    return true
            }
        }

        return super.setProperty(propNumber, propValue)
    }

    getProperty(propNumber: string | number) {
        switch (propNumber) {
            case PROPERTIES.filter:
                return this.picker.filter
            // Main control
            case PROPERTIES.backgroundcolor:
                return this.picker.backgroundColor
            case PROPERTIES.fontsize:
                return this.picker.fontSize
            case PROPERTIES.titlefontsize:
                return this.picker.titleFontSize
            // BOX
            case PROPERTIES.boxcolor:
                return this.picker.boxColor
            case PROPERTIES.boxheight:
                return this.picker.boxHeight
            case PROPERTIES.boxwidth:
                return this.picker.boxWidth
            case PROPERTIES.boxtextcolor:
                return this.picker.boxTextColor
            case PROPERTIES.boxhasshadow:
                return this.picker.boxHasShadow
            case PROPERTIES.boxborderwidth:
                return this.picker.boxBorderWidth
            case PROPERTIES.boxborderradius:
                return this.picker.boxBorderRadius
            case PROPERTIES.boxbordercolor:
                return this.picker.boxBorderColor
            case PROPERTIES.boxtitlealign:
                return this.picker.boxTitleAlign
            case PROPERTIES.grouphorzscroll:
                return this.picker.groupHorzScroll
        }
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
