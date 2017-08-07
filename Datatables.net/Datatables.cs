using Bridge;
using Bridge.Html5;

namespace Datatables.net
{
    public static class Datatables
    {
        public static HTMLTableElement DataTable(this HTMLTableElement table)
        {
            new Bridge.jQuery2.jQuery(table).ToDynamic().DataTable();
            return table;
        }

        public static HTMLTableElement DataTable(this HTMLTableElement table, DataTableParameter parameter)
        {
            new Bridge.jQuery2.jQuery(table).ToDynamic().DataTable(parameter.ToJsObject());
            return table;
        }
        public static HTMLTableElement DataTableDraw(this HTMLTableElement table)
        {
            new Bridge.jQuery2.jQuery(table).ToDynamic().DataTable().draw(false);
            return table;
        }
    }
}
