using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{
    [ObjectLiteral]
    public class DialogParameter
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
        public Common.Position Position { set; get; }
        public bool Resizable { set; get; }
        //public object Show { set; get; }
        public string Title { set; get; }
        public int Width { set; get; }


        internal object ToJsObject()
        {
            var jObj = this.ToDynamic();

            if (AppendTo != null) jObj["appendTo"] = new jQuery2.jQuery(AppendTo);

            if (Buttons != null)
            {
                var btns = new object[Buttons.Length];
                for (int i = 0; i < btns.Length; i++)
                {
                    var btn = new object().ToDynamic();
                    btn.text = Buttons[i].Text;
                    btn.icon = Buttons[i].Icon;
                    btn.click = Buttons[i].Click;
                    btns[i] = btn;
                }
                jObj["buttons"] = btns.ToDynamic();
            }

            if (Position != null) jObj["position"] = Position.ToJsObject();

            return jObj;
        }


      /*  public object ToJsObject()
        {
            var defaultParameter = new DialogParameter();
            var sendedParameter = new object().ToDynamic();

            if (AppendTo != defaultParameter.AppendTo) sendedParameter["appendTo"] = new jQuery2.jQuery(AppendTo);
            if (AutoOpen != defaultParameter.AutoOpen) sendedParameter["autoOpen"] = AutoOpen;
            if (Buttons != defaultParameter.Buttons)
            {

                var btns = new object[Buttons.Length];
                for (int i = 0; i < btns.Length; i++)
                {
                    var btn = new object().ToDynamic();
                    btn.text = Buttons[i].Text;
                    btn.icon = Buttons[i].Icon;
                    btn.click = Buttons[i].Click;
                    btns[i] = btn;
                }
                sendedParameter["buttons"] = btns.ToDynamic();

            }

            if (Classes != defaultParameter.Classes) sendedParameter["classes"] = Classes;
            if (CloseOnEscape != defaultParameter.CloseOnEscape) sendedParameter["closeOnEscape"] = CloseOnEscape;
            if (CloseText != defaultParameter.CloseText) sendedParameter["closeText"] = CloseText;
            if (DialogClass != defaultParameter.DialogClass) sendedParameter["dialogClass"] = DialogClass;
            if (Draggable != defaultParameter.Draggable) sendedParameter["draggable"] = Draggable;
            if (Height != defaultParameter.Height) sendedParameter["height"] = Height;
            if (MaxHeight != defaultParameter.MaxHeight) sendedParameter["maxHeight"] = MaxHeight;
            if (MaxWidht != defaultParameter.MaxWidht) sendedParameter["maxWidht"] = MaxWidht;
            if (MinHeight != defaultParameter.MinHeight) sendedParameter["minHeight"] = MinHeight;
            if (MinWidth != defaultParameter.MinWidth) sendedParameter["minWidth"] = MinWidth;
            if (Modal != defaultParameter.Modal) sendedParameter["modal"] = Modal;
            if (Position != defaultParameter.Position)
            {
                sendedParameter["position"] = new object().ToDynamic();
                sendedParameter["position"]["my"] = Position.My.ToString();
                sendedParameter["position"]["at"] = Position.At.ToString();
                if (Position.Of != null) sendedParameter["position"]["at"] = new jQuery2.jQuery(Position.Of);
            }
            if (Resizable != defaultParameter.Resizable) sendedParameter["resizable"] = Resizable;
            if (Title != defaultParameter.Title) sendedParameter["title"] = Title;
            if (Width != defaultParameter.Width) sendedParameter["width"] = Width;

            return sendedParameter;
            
        }*/
    }
}
