using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{
    [ObjectLiteral]
    public class DialogParameterCollection
    {
        public Html5.Node AppendTo { set; get; }
        public bool AutoOpen { set; get; }
        public DialogButton[] Buttons { set; get; }
        public string Classes { set; get; }
        public bool CloseOnEscape { set; get; }
        public string CloseText { set; get; }
        public string DialogClass { set; get; }
        public bool Draggable { set; get; }
        public int Height { set; get; }
        //public object Hide { set; get; }
        public int MaxHeight { set; get; }
        public int MaxWidht { set; get; }
        public int MinHeight { set; get; }
        public int MinWidth { set; get; }
        public bool Modal { set; get; }
        public Position Position { set; get; }
        public bool Resizable { set; get; }
        //public object Show { set; get; }
        public string Title { set; get; }
        public int Width { set; get; }


        public DialogParameterCollection()
        {
            AppendTo = null;
            AutoOpen = true;
            Buttons = null;
            Classes = "";
            CloseOnEscape = true;
            CloseText = "close";
            DialogClass = "";
            Draggable = true;
            Height = -1;
            //Hide = null;
            MaxHeight = -1;
            MaxWidht = -1;
            MinHeight = -1;
            MinWidth = -1;
            Modal = false;
            Position = null;
            Resizable = true;
            //Show = null;
            Title = null;
            Width = 300;
        }
    }
}
