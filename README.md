# bridge.jqueryui
jQueryUi Wrapper for bridge.NET

Demo: https://cdn.rawgit.com/mRy0/bridge.jqueryui/5e561cea/Test/Bridge/www/demo.html

Button:
```c#
HTMLButtonElement button = new HTMLButtonElement() { TextContent = "Menu" };
button.Button();
```

Dialogs:
```c#
HTMLDivElement myDiv = new HTMLDivElement();
myDiv.DialogOpen(new DialogParameterCollection() { 
    Title = "Menu" , 
    Position = Bridge.jQueryUI.Widgets.Enums.WindowPosition.BottomRight
});
```
