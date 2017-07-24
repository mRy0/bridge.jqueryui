Bridge.assembly("Bridge.jQueryUI", function ($asm, globals) {
    "use strict";

    Bridge.define("Bridge.jQueryUI.Widgets.AutocompleteTextbox", {
        inherits: [HTMLInputElement],
        _tags: null,
        ctor: function () {
            this.$initialize();
            this._tags = System.Array.init(0, null, String);
            this.type = "text";
            $(this).autocomplete(this._tags);
        },
        getAutocompleteTags: function () {
            return this._tags;
        },
        setAutocompleteTags: function (value) {
            this._tags = value;
            this.updateTags();
        },
        updateTags: function () {
            $(this).autocomplete(this._tags);
        }
    });
});