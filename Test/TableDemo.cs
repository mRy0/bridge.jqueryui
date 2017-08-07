using Bridge.Html5;
using Bridge;
using Bridge.jQueryUI.Widgets;
using Datatables.net;

namespace Test
{
    public static class TableDemo
    {
        public static void ShowTableDemo()
        {
            var div = new HTMLDivElement();

            var table = new HTMLTableElement();
            table.CreateTHead();
            var tHeadRow = new HTMLTableRowElement();
            tHeadRow.AppendChild(new HTMLTableHeaderCellElement() { TextContent = "Name" });
            tHeadRow.AppendChild(new HTMLTableHeaderCellElement() { TextContent = "Position" });
            tHeadRow.AppendChild(new HTMLTableHeaderCellElement() { TextContent = "Office" });
            tHeadRow.AppendChild(new HTMLTableHeaderCellElement() { TextContent = "Age" });
            tHeadRow.AppendChild(new HTMLTableHeaderCellElement() { TextContent = "StartDate" });
            tHeadRow.AppendChild(new HTMLTableHeaderCellElement() { TextContent = "Salary" });
            table.THead.AppendChild(tHeadRow);
            var tBody = new HTMLTableSectionElement(TableSectionType.Body);
            table.AppendChild(tBody);
            div.AppendChild(table);

            var data = Script.Get("tabledemoJsonData").ToDynamic();
            foreach(var dataRow in data)
            {
                var row = new HTMLTableRowElement();
                row.OnMouseEnter = (ev) => { row.ClassList.Add("highlight"); };
                row.OnMouseLeave = (ev) => { row.ClassList.Remove("highlight"); };

                row.OnMouseDown = (ev) => {
                    if (row.ClassList.Contains("selected"))
                    {
                        row.ClassList.Remove("selected");
                    }
                    else
                    {
                        row.ClassList.Add("selected");
                    }
                };

                row.AppendChild(new HTMLTableDataCellElement() { TextContent = dataRow.Name });
                row.AppendChild(new HTMLTableDataCellElement() { TextContent = dataRow.Position });
                row.AppendChild(new HTMLTableDataCellElement() { TextContent = dataRow.Office });
                row.AppendChild(new HTMLTableDataCellElement() { TextContent = dataRow.Age });
                row.AppendChild(new HTMLTableDataCellElement() { TextContent = dataRow.StartDate });
                row.AppendChild(new HTMLTableDataCellElement() { TextContent = dataRow.Salary });
                tBody.AppendChild(row);
            }
            div.Dialog(new DialogParameter() { Title = "Datatable Demo", Width = 960, Height = 600 });

            div.DialogEventResize(
                (ev, ui) =>
                {
                    
                    table.DataTableDraw();
                }
            );
            


            table.DataTable(new DataTableParameter() { ScrollCollapse = true, ScrollY = "100%" });


            table.DataTableDraw();

            //Bridge.jQuery2.jQuery.Ajax(new Bridge.jQuery2.AjaxOptions
            //{
            //    Url = "TextFile1.txt",
            //    ContentType = "application/json; charset=utf-8",
            //    Success = delegate (dynamic data, string str, Bridge.jQuery2.jqXHR jqxhr)
            //    {
            //        var row = new HTMLTableRowElement();
            //        row.AppendChild(new HTMLTableColElement() { TextContent = data.Name });
            //        row.AppendChild(new HTMLTableColElement() { TextContent = data.Position });
            //        row.AppendChild(new HTMLTableColElement() { TextContent = data.Office });
            //        row.AppendChild(new HTMLTableColElement() { TextContent = data.Age });
            //        row.AppendChild(new HTMLTableColElement() { TextContent = data.StartDate });
            //        row.AppendChild(new HTMLTableColElement() { TextContent = data.Salary });
            //        tBody.AppendChild(row);
            //    }
            //});



        }
        
    }
}
