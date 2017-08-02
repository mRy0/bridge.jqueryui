# bridge.jqueryui
jQueryUi Wrapper for bridge.NET.
Using extension methods directly on the html nodes.
each element has its individual paramter collection, unsetted parameter are NaN.

Demo: https://rawgit.com/mRy0/bridge.jqueryui/master/Test/Bridge/www/demo.html

Using:

Button:
```c#
HTMLButtonElement button = new HTMLButtonElement() { TextContent = "Menu" };
button.Button();
```

Dialogs with more paramter:
```c#
HTMLDivElement myDiv = new HTMLDivElement();
myDiv.DialogOpen(new DialogParameter() { 
    Title = "Menu" , 
    Position = Bridge.jQueryUI.Enums.WindowPosition.BottomRight
});
```
