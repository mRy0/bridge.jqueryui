/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 16.0.0
 */
Bridge.assembly("Datatables.net", function ($asm, globals) {
    "use strict";

    Bridge.define("Datatables.net.DataTableParameter", {
        $literal: true,
        methods: {
            ToJsObject: function () {
                return this;
            }
        }
    });

    Bridge.define("Datatables.net.Datatables", {
        statics: {
            methods: {
                DataTable: function (table) {
                    $(table).DataTable();
                    return table;
                },
                DataTable$1: function (table, parameter) {
                    $(table).DataTable(Bridge.unbox(Datatables.net.DataTableParameter.prototype.ToJsObject.call(parameter)));
                    return table;
                },
                DataTableDraw: function (table) {
                    $(table).DataTable().draw(false);
                    return table;
                }
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJEYXRhdGFibGVzLm5ldC5qcyIsCiAgInNvdXJjZVJvb3QiOiAiIiwKICAic291cmNlcyI6IFsiRGF0YVRhYmxlUGFyYW1ldGVyLmNzIiwiRGF0YXRhYmxlcy5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7O2dCQStCWUEsT0FBT0E7Ozs7Ozs7O3FDQ3hCOEJBO29CQUVyQ0EsRUFBMEJBO29CQUMxQkEsT0FBT0E7O3VDQUc4QkEsT0FBNkJBO29CQUVsRUEsRUFBMEJBLGlCQUE2QkE7b0JBQ3ZEQSxPQUFPQTs7eUNBRWtDQTtvQkFFekNBLEVBQTBCQTtvQkFDMUJBLE9BQU9BIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIEJyaWRnZTtcclxudXNpbmcgQnJpZGdlLkh0bWw1O1xyXG5cclxubmFtZXNwYWNlIERhdGF0YWJsZXMubmV0XHJcbntcclxuICAgIFtPYmplY3RMaXRlcmFsXVxyXG4gICAgcHVibGljIGNsYXNzIERhdGFUYWJsZVBhcmFtZXRlclxyXG4gICAge1xyXG4gICAgICAgIFtOYW1lKFwicGFnaW5nXCIpXVxyXG4gICAgICAgIHB1YmxpYyBib29sIFBhZ2luZyB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgW05hbWUoXCJvcmRlcmluZ1wiKV1cclxuICAgICAgICBwdWJsaWMgYm9vbCBPcmRlcmluZyB7IHNldDsgZ2V0OyB9XHJcbiAgICAgICAgW05hbWUoXCJpbmZvXCIpXVxyXG4gICAgICAgIHB1YmxpYyBib29sIEluZm8geyBzZXQ7IGdldDsgfVxyXG5cclxuICAgICAgICBbTmFtZShcInN0YXRlU2F2ZVwiKV1cclxuICAgICAgICBwdWJsaWMgYm9vbCBTdGF0ZVNhdmUgeyBzZXQ7IGdldDsgfVxyXG5cclxuICAgICAgICBbTmFtZShcInNjcm9sbFlcIildXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBTY3JvbGxZIHsgc2V0OyBnZXQ7IH1cclxuICAgICAgICBbTmFtZShcInNjcm9sbFhcIildXHJcbiAgICAgICAgcHVibGljIGJvb2wgU2Nyb2xsWCB7IHNldDsgZ2V0OyB9XHJcblxyXG4gICAgICAgIFtOYW1lKFwic2Nyb2xsQ29sbGFwc2VcIildXHJcbiAgICAgICAgcHVibGljIGJvb2wgU2Nyb2xsQ29sbGFwc2UgeyBzZXQ7IGdldDsgfVxyXG5cclxuICAgICAgICBbTmFtZShcInBhZ2VSZXNpemVcIildXHJcbiAgICAgICAgcHVibGljIGJvb2wgUGFnZVJlc2l6ZSB7IHNldDsgZ2V0OyB9XHJcblxyXG4gICAgICAgIGludGVybmFsIG9iamVjdCBUb0pzT2JqZWN0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLlRvRHluYW1pYygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIEJyaWRnZS5IdG1sNTtcclxuXHJcbm5hbWVzcGFjZSBEYXRhdGFibGVzLm5ldFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzIERhdGF0YWJsZXNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEhUTUxUYWJsZUVsZW1lbnQgRGF0YVRhYmxlKHRoaXMgSFRNTFRhYmxlRWxlbWVudCB0YWJsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBCcmlkZ2UualF1ZXJ5Mi5qUXVlcnkodGFibGUpLlRvRHluYW1pYygpLkRhdGFUYWJsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGFibGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIEhUTUxUYWJsZUVsZW1lbnQgRGF0YVRhYmxlKHRoaXMgSFRNTFRhYmxlRWxlbWVudCB0YWJsZSwgRGF0YVRhYmxlUGFyYW1ldGVyIHBhcmFtZXRlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5ldyBCcmlkZ2UualF1ZXJ5Mi5qUXVlcnkodGFibGUpLlRvRHluYW1pYygpLkRhdGFUYWJsZShwYXJhbWV0ZXIuVG9Kc09iamVjdCgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRhYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIEhUTUxUYWJsZUVsZW1lbnQgRGF0YVRhYmxlRHJhdyh0aGlzIEhUTUxUYWJsZUVsZW1lbnQgdGFibGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXcgQnJpZGdlLmpRdWVyeTIualF1ZXJ5KHRhYmxlKS5Ub0R5bmFtaWMoKS5EYXRhVGFibGUoKS5kcmF3KGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRhYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXQp9Cg==
