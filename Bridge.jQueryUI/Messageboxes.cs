using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI
{
    public static class Messageboxes
    {
        public static void Highlight(this Html5.HTMLDivElement div, string title, string message, UIIcons icon = UIIcons.Info)
        {
            var para = new Html5.HTMLParagraphElement();

            para.AppendChild(new Html5.HTMLSpanElement() { ClassName = "ui-icon " + icon.ToString() });
            para.AppendChild(new Html5.HTMLElement("strong") { TextContent = title });
            para.AppendChild(new Html5.Text(message));
            div.AppendChild(para);
            div.ClassList.Add("ui-state-highlight");
            div.ClassList.Add("ui-corner-all");
        }

        public static void Error(this Html5.HTMLDivElement div, string title, string message, UIIcons icon = UIIcons.Alert)
        {
            var para = new Html5.HTMLParagraphElement();

            para.AppendChild(new Html5.HTMLSpanElement() { ClassName = "ui-icon " + icon.ToString() });
            para.AppendChild(new Html5.HTMLElement("strong") { TextContent = title });
            para.AppendChild(new Html5.Text(message));
            div.AppendChild(para);
            div.ClassList.Add("ui-state-error");
            div.ClassList.Add("ui-corner-all");
        }
    }
}
