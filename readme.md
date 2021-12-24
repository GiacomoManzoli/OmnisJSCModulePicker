## Set up

1. Copy the content of `controls/com.888sp.tabstrip` into Omnis `html` folder
2. Copy `dist/ctl_com_888sp_tabstrip.bundle.js` into Omnis `html/script` folder
3. Add the `<script>` to `jsctempl.htm` to load  `ctl_com_888sp_tabstrip.bundle.js`

## Usage

Set the dataname of the element to a list defined has:

-   `id` tab id
-   `titolo` tab display text
-   `activeColor` optional, HEX RGB color (starting with `#`) to highlight the active tab.
-   `canClose` optional, shows the close button for this tab. Works only if `$canclose=kTrue`

Sample list:

```
Do iTabList.$define()
Do iTabList.$cols.$add('id',kInteger,k32bitint)
Do iTabList.$cols.$add('title',kCharacter,kSimplechar)
Do iTabList.$cols.$add('activeColor',kCharacter,kSimplechar)
Do iTabList.$cols.$add('canClose',kBoolean)

Do iTabList.$add(1,'A1 - Navigator','#99CCCC',kFalse)
Do iTabList.$add(2,'A2 - Dashboard','#33CC33',kFalse)
Do iTabList.$add(3,'A3 - Tab 1',,kTrue)
Do iTabList.$add(4,'A4 - Tab 2',,kTrue)
Calculate iTabList.$line as 3 ## Sets the active tab
```
