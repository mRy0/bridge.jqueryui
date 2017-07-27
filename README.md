# bridge.jqueryui
jQueryUi Wrapper for bridge.NET

Demo: https://rawgit.com/mRy0/bridge.jqueryui/master/Test/Bridge/www/demo.html

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
