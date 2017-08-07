Bridge.assembly("Test", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = [System,Test];
    $m($n[1].Demo, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void},{"a":1,"n":"ShowDemo","is":true,"t":8,"sn":"ShowDemo","rt":$n[0].Void},{"a":1,"n":"ShowMenu","is":true,"t":8,"sn":"ShowMenu","rt":$n[0].Void},{"a":1,"n":"ThemeChanger","is":true,"t":8,"sn":"ThemeChanger","rt":$n[0].Void},{"a":1,"n":"_demoButton","is":true,"t":4,"rt":HTMLButtonElement,"sn":"_demoButton"}]}; });
    $m($n[1].TableDemo, function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"ShowTableDemo","is":true,"t":8,"sn":"ShowTableDemo","rt":$n[0].Void}]}; });
});
