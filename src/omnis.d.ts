declare type DatanameChangedWhat = "" | "#COL" | "#LSEL" | "#L" | "#LSEL_ALL" | "#NCELL"

declare class ctrl_base {
    public mData: string | number | omnis_list
    /**
        This initializes the class, and must be called by the constructor.
        The default code should be left as is - it sets up the superclass.
        Use this method to
            - Initialize class variables.
     */
    init_class_inst(): void
    /**
     * Initializes the control instance from element attributes.
     * Must be called after control is constructed by the constructor.
     * Use this method to:
     *     - Read attributes from the element.
     *     - Read the $dataname data. <link to this.getData()>
     *     - Fine-tune/extend your control’s layout & appearance.
     *     - Setup event handlers. <link>
     *
     * @param form      Reference to the parent form.
     * @param elem      The html element the control belongs to.
     * @param rowCtrl   Pointer to a complex grid control if this control belongs to a cgrid.
     * @param rowNumber The row number this control belongs to if it belongs to a cgrid.
     * @returns {boolean}   True if the control is a container.
     */
    init_ctrl_inst(form, elem, rowCtrl, rowNumber): boolean

    /**
     * This method is called when the object is removed, typically when a form is closed.
     * You should override this function if there is some work to do prior to your control being deleted.
     * Make sure to end your call to this by calling the superclass version.
     * Implement this method to:
     *     Perform any custom clean-up when your control is destroyed.
     */
    delete_class_inst(): void

    /**
     * The control's data has changed. The contents may need to be updated.
     *
     * @param {String} what    Specifies which part of the data has changed:
     *                 ""              - The entire data has changed
     *                 "#COL"          - A single column in the $dataname list (specified by 'row' and 'col') or a row's column (specified by 'col')
     *                 "#LSEL"         - The selected line of the $dataname list has changed (specified by 'row')
     *                 "#L"            - The current line of the $dataname list has changed  (specified by 'row')
     *                 "#LSEL_ALL"     - All lines in the $dataname list have been selected.
     *                 "#NCELL"        - An individual cell in a (nested) list. In this case, 'row' is an array of row & column numbers.
     *                                  of the form "row1,col1,row2,col2,..."
     *
     * @param {Number} row             If specified, the row number in a list (range = 1..n) to which the change pertains.
     *                                 If 'what' is "#NCELL", this must be an array of row and col numbers. Optionally, a modifier may be
     *                                 added as the final array element, to change which part of the nested data is to be changed. (Currently only "#L" is supported)
     *
     * @param {Number|String} col      If specified, the column in a list row (range = 1..n or name) to which the change pertains.
     */
    updateCtrl(what: DatanameChangedWhat, row: number, col: number | string, mustUpdate): void

    /**
        Use this method to create a switch statement which returns true or false as to whether the passed property can be assigned to, if it’s a custom property (or a base property you wish to treat differently). Otherwise, let the superclass handle it.
        Implement this method to:
            Determine whether a custom property can be assigned to.

     * @param propNumber The Omnis property number.
     * @returns Whether the property can be assigned to.
     */
    getCanAssign(propNumber: number | string): boolean

    /**
    This is called when Omnis code attempts to get the value of a property of the control.
    If it is a custom property (or a base property you need to use special handling for), you should catch and handle this yourself. Otherwise, let the superclass handle it.
    The propNumbers of standard properties can be accessed via the eBaseProperties enumerated type.
    It is good practice to call this method from your JavaScript code when you want to get the value of a property.
    Implement this method to:
        Catch and handle requests for your custom properties, or properties you need to add special handling for.
    @param pPropNumber (Integer): The Omnis property number.
    @returns (Var): The value of the property.
    */
    getProperty(propNumber: number | string): any
    /**
    This is called when Omnis code attempts to set the value of a property of the control.
    If it is a custom property, you should catch and handle this yourself. Otherwise, let the superclass handle it for default properties.
    The propNumbers of standard properties can be accessed via the eBaseProperties enumerated type.
    It is good practice to call this method from your JavaScript code when you want to set a property.
    Implement this method to:
    - Catch and handle changes to your custom properties, or properties you need to add special handling for.
    - Begin by calling this.getCanAssign(pPropNumber), to respect rules set therein.

    ```
    ctrl.setProperty = function( propNumber, propValue ) {
    if (!this.getCanAssign(propNumber))
        return false;
    switch (propNumber) {
        case eBaseProperties.enabled:
        this.handleEnabled(propValue);
        return true;
    default:
        return this.superclass.setProperty.call( this, propNumber, propValue ); // call our superclass setProperty for other properties
    }
    };
    ```

    * @param propNumber The Omnis property number.
    * @param propValue The new value for the property.
    * @returns Whether the property was set successfully.
    */
    setProperty(propNumber: number | string, propValue: any): boolean

    /**
    Called when the size of the control has changed (e.g. due to a screen size change).
    Implement this method to:
        Add special handling for when the size of the control has changed
    */
    sizeChanged(): void

    /**
    This is called when an event handler which was assigned this.mEventFunction is triggered.
    Implement this method to:
        - Create a switch statement based on pEvent.type to handle multiple events.
        - If multiple elements in your control can trigger the same kind of event (e.g. "click"), you may like to use jOmnis.getEventCurrentTarget() to determine which element was clicked.
    @param pEvent (Object): The standard JavaScript event object, pertaining to this event.
     */
    handleEvent(pEvent: Event): void

    getClientElem: () => HTMLElement
    update: () => void
    mEventFunction: () => void
    usesTouch: boolean
    isEnabled: () => boolean
    lastTouch: number
    touchStartPos: {
        x: number
        y: number
    }
    canSendEvent: (evName: OmnisEventName) => boolean
    eventParamsAdd: (name: string, value: any) => void
    sendEvent: (event: any) => void
    getData(): any

    getTheme(): any
}

/**
 * The omnis_list is the client-side representation of an Omnis list or row variable.
 */
declare class omnis_list {
    /**
     * Constructor for an omnis_list object.
     * @param omnisList Pass null to create a new, empty, omnis_list. Or pass an omnis_raw_list instance to create a copy of it.
     */
    constructor(omnisList: null | omnis_raw_list)
    /**
     * Returns character data for the specified column and row.
     * @param pCol  Can be either the column name, or the column number (1-indexed).
     * @param pRowNumber The row number (1-indexed). If zero, the current line will be used.
     * @param pZeroEmpty If true, zero values are returned as an empty string.
     */
    getChar(pCol: string | number, pRowNumber: number, pZeroEmpty: boolean): string

    /**
     * Returns the data in the cell specified by the column and row.
     * @param pCol  Can be either the column name, or the column number (1-indexed).
     * @param pRowNumber The row number (1-indexed). If zero, the current line will be used.
     */
    getData(pCol: string | number, pRowNumber: number): any

    /**
        Sets the data in the specified row and column.
        @param pCol (String or Integer): Can be either the column name, or the column number (1-indexed).
        @param pRowNumber (Integer): The row number (1-indexed). If empty or zero, the current line will be used.
        @param pNewData(Var): The new data to apply to the cell.
        @return(Boolean): Whether the new value was successfully applied.
     */
    setData(pCol: string | number, pRowNumber: number, pNewData: any): boolean

    /**
        Searches a column in the list and returns the first matching row.
        @param pCol (String or Integer): Can be either the column name, or the column number (1-indexed).
        @param pSearchValue (Var): The value to search for.
        @param pSetCurrentRow (Boolean): Whether the list's current row should be set to the returned row.
        @param pSelectMatches (Boolean): If true, all matching rows are selected.
        @param pDeselectNonMatches (Boolean): If true, all non-matching rows are de-selected.
        @returns (Integer): The first matching row number (1-indexed), or zero if no match is found.
     */
    search(
        pCol: string | number,
        pSearchValue: any,
        pSetCurrentRow: boolean,
        pSelectMatches: boolean,
        pDeSelectNonMatches: boolean
    ): number

    /**
     *
     * @param pRowNumber The row number (1-indexed). If zero, the current line will be used.
     * @readonly 1 or 0
     */
    getRowSelectionState(pRowNumber: number): 0 | 1
    /**
     *
     * @param pRowNumber
     * @param pNewSelectionState
     */
    setRowSelectionState(pRowNumber: number, pNewSelectionState: 0 | 1): boolean

    /**
     * Sets the selection state for all rows in a list.
     * @param pNewSelectionState
     */
    setRowSelectionStateAllRows(pNewSelectionState: 0 | 1): void

    /**
     * Returns the current row number for the list.
     */
    getCurrentRow(): number

    /**
     *
     * @param pNewCurrentRow
     */
    setCurrentRow(pNewCurrentRow: number): boolean

    /**
     * Gets the number of rows in the list.
     */
    getRowCount(): number

    /**
     * Gets the number of columns in the list.
     */
    getColumnCount(): number

    /**
    Adds an empty row to the list.
    Note that you can only add a row to a list (not a row).
    @param pBeforeRowNumber (Integer): The row number the new row will be inserted before. If 0, it will be added to the end of the list.
    @param pColumnCount (Integer): The initial number of columns for the new row.
    @returns (Integer): The row number of the newly added row, or INVALID_LIST_OPERATION (-1), if the action failed.
     */
    addRow(pBeforeRowNumber: number, pColumnCount: number): number

    /**
    Deletes the specified rows from the list.
    @private pActionOrRow (Integer): One of: Row number to delete. Or An eListDeleteRow enumerated type. (Current, Selected or Deselected members)
    @returns (Type): Row number deleted, or number of rows deleted for eListDeleteRow.Selected or Deselected action.
     */
    deleteRows(pActionOrRow: number): number

    /**
    ets the specified column's column number in the list or row.
    @parampCol (String or Integer): One of:
    The column number.
    The column name.
    The column number, prefixed by "C". E.g. "C4".
    @param pBeginsWith (Boolean): If true, it will return the first column whose name begins with the string passed in pCol. Defaults to false.
        @returns The column number (1-indexed)
    */
    findColumn(pCol: string | number, pBeginsWith?: boolean): number

    /**
     * Returns a row's data as an array. Each element of the array being a column of the row.
     * @param pRowNumber
     * @returns The row's data. Each element of the array corresponds to the value of a column in the row.
     */
    getRowArray(pRowNumber: number): any[]

    /**
     * Returns the raw list data (an omnis_raw_list object), from the list. This is needed to pass into many of the row/col methods.
     */
    getListData(): omnis_raw_list
}

declare class omnis_raw_list {}

declare type OmnisEventName = string | number // numero per le proprietà interne di Omnis, stringa per quelle user-defined

declare type OmnisPropName = string | number // numero per le proprietà interne di Omnis, stringa per quelle user-defined

declare var eBaseProperties: any
declare var eBaseEvent: any

declare var touchWithinRange: any

type OmnisRGBInt = number

declare class JOmnisEffects {
    /**
     * Adds a ripple effect to the passed element.
     * Only add once - once added, the ripple effect will be triggered whenever the element is clicked (or optional keys are pressed while it has focus).
     * @param elem The HTML element to apply the ripple to.
     * @param theme The theme instance to use to resolve themed colors.
     * @param hasContainer If true, the ripple is applied to the container element. If false, it is applied to elem.
     * @param elemColor The color of the element to which the ripple will be applied. A tinted color will be generated from this for the ripple (unless directColor is provided).
     * @param keys An array of keyboard key names, which should fire the ripple when pressed. E.g. ["Enter", " "]
     * @param keyElement The element which receives keyboard events. Defaults to elem.
     * @param directColor If specified, a color to apply directly to the ripple, rather than calculated from the 'elemColor'.
     */
    addRippleToElem(
        elem: HTMLElement,
        theme: any,
        hasContainer: boolean,
        elemColor: OmnisRGBInt,
        keys: string[],
        keyElement: HTMLElement,
        directColor: OmnisRGBInt
    ): JOmnisEffects

    /**
     * Updates the color of a previously created ripple element.
     * @param elem The HTML element which already has a ripple applied.
     * @param theme The theme instance to use to resolve themed colors.
     * @param elemColor The color of the element to which the ripple will be applied. A tinted color will be generated from this for the ripple (unless directColor is provided).
     * @param directColor If specified, a color to apply directly to the ripple, rather than calculated from the 'elemColor'.
     */
    setRippleColor(elem: HTMLElement, theme: any, elemColor: OmnisRGBInt, directColor: OmnisRGBInt): void
}
declare var jOmnisEffects: JOmnisEffects
