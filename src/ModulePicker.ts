import "./style.css"

export class Module {
    id: number = 0
    group: string
    name: string

    constructor(data: { id: number; group: string; name: string }) {
        this.id = data.id
        this.group = data.group
        this.name = data.name
    }
}

export enum TextAlign {
    Left = 0,
    Right = 1,
    Center = 2,
}

declare type ModuleData = {
    visible: boolean
    module: Module
    element: HTMLElement
}

declare type ModulePickerEvent = "moduleclick"
declare type ModulePickerEventHandler = (event: Event, tabId: number, module: Module) => void

class ModuleGroup {
    group: string
    expanded: boolean
    visible: boolean
    element: HTMLElement
    modules: ModuleData[]
}

export class ModulePicker {
    filter: string = ""
    handlers: Map<ModulePickerEvent, ModulePickerEventHandler>

    private container: HTMLElement
    private rendered: Map<string, ModuleGroup> = new Map()

    public backgroundColor: string
    public fontSize: number
    public titleFontSize: number
    public boxColor: string
    public boxWidth: number
    public boxHeight: number
    public boxTextColor: string
    public defaultCollapsed: boolean = false

    public boxHasShadow: boolean = false
    public boxBorderWidth: number = 0
    public boxBorderRadius: number = 0
    public boxBorderColor: string
    public boxTitleAlign: TextAlign = TextAlign.Center

    public groupHorzScroll: boolean = false
    public showGroups: boolean = true

    constructor(container: HTMLElement) {
        this.container = container
        this.container.innerHTML = ""
        this.handlers = new Map()
    }
    addEventListener(evName: ModulePickerEvent, callback: ModulePickerEventHandler) {
        this.handlers.set(evName, callback)
    }

    setModules(modules: Module[]) {
        this.rendered = new Map()
        modules = [...modules]
        if (!this.showGroups) {
            modules.forEach((m) => {
                m.group = ""
            })
        }

        modules.forEach((v) => {
            let { group } = v
            if (this.rendered.has(group)) {
                let g = this.rendered.get(group)
                g.modules.push({
                    visible: true,
                    module: v,
                    element: null,
                })
            } else {
                let moduleGroup = new ModuleGroup()
                moduleGroup.group = v.group
                moduleGroup.expanded = !this.defaultCollapsed || !this.showGroups
                moduleGroup.visible = true
                moduleGroup.element = null
                moduleGroup.modules = [
                    {
                        visible: true,
                        module: v,
                        element: null,
                    },
                ]
                this.rendered.set(group, moduleGroup)
            }
        })

        // TODO: gestire cancellazione
    }

    setFilter(filter: string) {
        this.filter = filter
        if (this.filter == "0") {
            this.filter = ""
        }
    }

    private applyFilter() {
        let currData = this.rendered
        let filter = this.filter.toLocaleLowerCase()

        currData.forEach((group) => {
            group.visible = false
            group.modules.forEach((m) => {
                m.visible =
                    filter == "" ||
                    m.module.name.toLocaleLowerCase().includes(filter) ||
                    m.module.group.toLocaleLowerCase().includes(filter)
                group.visible = group.visible || m.visible // Group visible if at least one element in visible
            })
        })

        return currData
    }

    private createGroupElement(g: ModuleGroup) {
        let groupContainer = document.createElement("div")

        if (this.showGroups) {
            let title = document.createElement("p")
            title.style.fontWeight = "bold"

            title.style.cursor = "pointer"
            title.style.fontSize = `${this.titleFontSize}pt`

            let expandCollapse = document.createElement("span")
            expandCollapse.innerText = "+"
            expandCollapse.style.display = "inline-block"
            expandCollapse.style.width = `${this.titleFontSize + 1}pt`
            expandCollapse.style.height = `${this.titleFontSize + 1}pt`
            expandCollapse.style.textAlign = "center"

            title.appendChild(expandCollapse)

            let titleText = document.createElement("span")
            titleText.innerText = ""
            title.appendChild(titleText)

            groupContainer.appendChild(title)

            title.onclick = (e: MouseEvent) => {
                g.expanded = !g.expanded
                this.updateGroupElement(g)
                let ul = g.element.querySelector("ul")
                if (ul) {
                    ul.style.display = g.expanded ? "flex" : "none"

                    let lis = ul.getElementsByClassName("tab-ripple")
                    for (let i = 0; i < lis.length; i++) {
                        lis.item(i).remove()
                    }
                }
            }
        }

        let listContainer = document.createElement("ul")
        listContainer.style.display = g.expanded ? "flex" : "none"

        if (this.groupHorzScroll) {
            listContainer.style.flexWrap = "nowrap"
            listContainer.style.overflowX = "auto"
        } else {
            listContainer.style.flexWrap = "wrap"
        }

        listContainer.style.width = "100%"
        listContainer.style.listStyleType = "none"
        listContainer.style.padding = "0"
        // listContainer.style.transition = "display 0.2s ease-out"
        // transition: max-height 0.2s ease-out;

        groupContainer.appendChild(listContainer)

        return groupContainer
    }

    private updateGroupElement(g: ModuleGroup) {
        g.element.style.display = g.visible ? "block" : "none"
        if (this.showGroups) {
            let title = g.element.querySelector("p")

            let titleContent = Array.from(title.querySelectorAll("span"))
            let [expandCollapse, titleText] = titleContent

            expandCollapse.innerText = g.expanded ? "-" : "+"
            titleText.innerText = g.group
        }

        // text.innerText = g.group
    }

    private createModuleElement(m: ModuleData) {
        let item = document.createElement("li")
        item.style.cursor = "pointer"
        item.style.display = m.visible ? "flex" : "none"
        item.style.position = "relative"
        item.style.overflow = "hidden"
        item.style.alignItems = "center"
        item.style.justifyContent = "center"
        item.style.width = `${this.boxWidth}px`
        item.style.height = `${this.boxHeight}px`
        item.style.color = this.boxTextColor
        item.style.backgroundColor = this.boxColor
        item.style.fontSize = `${this.fontSize}pt`
        item.style.minWidth = item.style.width
        item.style.minHeight = item.style.height

        if (this.showGroups) {
            item.style.margin = "16px"
        } else {
            // Senza gruppi l'indentazione a sinistra non serve
            item.style.margin = "0 16px 16px 0"
        }

        if (this.boxHasShadow) {
            item.style.boxShadow = `
        0 2px 8px 0 rgba(var(--shadow-color), 0.14), 
        0 1px 8px 0 rgba(var(--shadow-color), 0.12),
        0 1px 2px -1px rgba(var(--shadow-color), 0.2)`
        }

        if (this.boxBorderWidth > 0) {
            item.style.borderColor = this.boxBorderColor
            item.style.borderStyle = "solid"
            item.style.borderWidth = `${this.boxBorderWidth}px`
        }
        if (this.boxBorderRadius) {
            item.style.borderRadius = `${this.boxBorderRadius}px`
        }

        item.style.animation = "append-animate .3s linear"

        let text = document.createElement("span")
        text.innerText = m.module.name
        text.style.flex = "1"
        text.style.overflow = "hidden"
        text.style.textOverflow = "ellipsis"

        switch (this.boxTitleAlign) {
            case TextAlign.Left:
                text.style.textAlign = "left"
                break
            case TextAlign.Right:
                text.style.textAlign = "right"
                break
            case TextAlign.Center:
                text.style.textAlign = "center"
                break
        }

        text.style.padding = "8px"
        item.appendChild(text)

        item.onclick = (e: MouseEvent) => {
            this.onModuleClick(e, m.module.id, m.module)
        }

        return item
    }

    private updateModuleElement(m: ModuleData) {
        m.element.style.display = m.visible ? "flex" : "none"
        let text = m.element.querySelector("span")
        text.innerText = m.module.name
        let ripple = m.element.getElementsByClassName("tab-ripple")[0]
        if (ripple) {
            ripple.remove()
        }
    }

    render() {
        this.container.style.backgroundColor = this.backgroundColor
        this.container.style.whiteSpace = "initial"
        let groupedData = this.applyFilter()
        let groupNames = Array.from(groupedData.keys())

        for (let j = groupNames.length - 1; j >= 0; j--) {
            let g = groupedData.get(groupNames[j])

            if (!g.element) {
                g.element = this.createGroupElement(g)
                if (j == 0) {
                    // Inserimento alla fine
                    this.container.insertBefore(g.element, this.container.firstChild)
                } else if (j == groupNames.length - 1) {
                    this.container.appendChild(g.element)
                } else {
                    let nextGroupData = groupedData.get(groupNames[j + 1])
                    let nextGroupElement = nextGroupData.element
                    this.container.insertBefore(g.element, nextGroupElement)
                }
            }

            this.updateGroupElement(g)

            for (let i = g.modules.length - 1; i >= 0; i--) {
                let m = g.modules[i]
                if (!m.element) {
                    m.element = this.createModuleElement(m)
                    let container = g.element.querySelector("ul")
                    if (container) {
                        if (i == 0) {
                            // Inserimento alla fine
                            container.insertBefore(m.element, container.firstChild)
                        } else if (i == g.modules.length - 1) {
                            container.appendChild(m.element)
                        } else {
                            let nextModuleData = g.modules[i + 1]
                            let nextModuleElement = nextModuleData.element
                            container.insertBefore(m.element, nextModuleElement)
                        }
                    }
                }

                this.updateModuleElement(m)
            }
        }
    }

    private onModuleClick(event: MouseEvent, tabId: number, module: Module) {
        const button = event.currentTarget as HTMLElement
        const circle = document.createElement("span")
        const diameter = Math.max(button.clientWidth, button.clientHeight)
        const radius = diameter / 2
        circle.style.width = circle.style.height = `${diameter}px`
        circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`
        circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`
        circle.classList.add("tab-ripple")
        const ripple = button.getElementsByClassName("tab-ripple")[0]
        if (ripple) {
            ripple.remove()
        }
        button.appendChild(circle)

        event.preventDefault()
        event.stopPropagation()
        const handler = this.handlers.get("moduleclick")
        if (handler) {
            handler(event, tabId, module)
        }
    }
}
