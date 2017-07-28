using Bridge;
using Bridge.Html5;


namespace Bridge.jQueryUI.Interactions
{
    
    public static class Extensions
    {
       
        public static void Resizable(this Node node, ResizeablePrameterCollection parameter = null)
        {
            new jQuery2.jQuery(node).ToDynamic().resizable();
        }

        #region draggable
        public static void Draggable(this Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().draggable();
        }
        public static void Draggable(this Node node, DraggableParameter parameter)
        {
            //todo make me better           
            var pramDefault = new DraggableParameter();

            var jParam = new { }.ToDynamic();
            #region generate options
            if(parameter.AddClasses != pramDefault.AddClasses) jParam["addClasses"] = false;
            if (parameter.AppendTo != pramDefault.AppendTo) jParam["appendTo"] = new jQuery2.jQuery(parameter.AppendTo);
            if (parameter.Axis != pramDefault.Axis) jParam["axis"] = parameter.Axis;
            if (parameter.Cancel != pramDefault.Cancel) jParam["cancel"] = parameter.Cancel;
            if (parameter.Classes != pramDefault.Classes) jParam["classes"] = parameter.Classes;
            if (parameter.ConnectToSortable != pramDefault.ConnectToSortable) jParam["connectToSortable"] = parameter.ConnectToSortable;
            if (parameter.Containment != pramDefault.Containment) jParam["containment"] = parameter.Containment;
            if (parameter.Cursor != pramDefault.Cursor) jParam["cursor"] = parameter.Cursor.ToString();
            if (parameter.CursorAt != pramDefault.CursorAt) jParam["cursorAt"] = new
            {
                left = parameter.CursorAt.Left,
                right = parameter.CursorAt.Right,
                top = parameter.CursorAt.Top,
                bottom = parameter.CursorAt.Bottom
            };
            if (parameter.Delay != pramDefault.Delay) jParam["delay"] = parameter.Delay;
            if (parameter.Disabled != pramDefault.Disabled) jParam["disabled"] = parameter.Disabled;
            if (parameter.Distance != pramDefault.Distance) jParam["distance"] = parameter.Distance;
            if (parameter.Grid != pramDefault.Grid) jParam["grid"] = new { x = parameter.Grid.X, y = parameter.Grid.Y };
            if (parameter.Handle != pramDefault.Handle) jParam["handle"] = new jQuery2.jQuery(parameter.Handle);
            if (parameter.Helper != pramDefault.Helper) jParam["helper"] = parameter.Helper;
            if (parameter.IFrameFix != pramDefault.IFrameFix) jParam["iframeFix"] = parameter.IFrameFix;
            if (parameter.Opacity != pramDefault.Opacity) jParam["opacity"] = parameter.Opacity;
            if (parameter.RefreshPosititions != pramDefault.RefreshPosititions) jParam["refreshPositions"] = parameter.RefreshPosititions;
            if (parameter.Revert != pramDefault.Revert) jParam["revert"] = parameter.Revert;
            if (parameter.RevertDuration != pramDefault.RevertDuration) jParam["revertDuration"] = parameter.RevertDuration;
            if (parameter.Scope != pramDefault.Scope) jParam["scope"] = parameter.Scope;
            if (parameter.Scroll != pramDefault.Scroll) jParam["scroll"] = parameter.Scroll;
            if (parameter.ScrollSensivity != pramDefault.ScrollSensivity) jParam["scrollSensitivity"] = parameter.ScrollSensivity;
            if (parameter.ScrollSpeed != pramDefault.ScrollSpeed) jParam["scrollSpeed"] = parameter.ScrollSpeed;
            if (parameter.Snap != pramDefault.Snap) jParam["snap"] = parameter.Snap;
            if (parameter.SnapMode != pramDefault.SnapMode) jParam["snapMode"] = parameter.SnapMode.ToString();
            if (parameter.SnapTolerance != pramDefault.SnapTolerance) jParam["snapTolerance"] = parameter.SnapTolerance;
            if (parameter.Stack != pramDefault.Stack) jParam["stack"] = parameter.Stack;
            if (parameter.ZIndex != pramDefault.ZIndex) jParam["zIndex "] = parameter.ZIndex;
            #endregion
            
            new jQuery2.jQuery(node).ToDynamic().draggable();
        }
        public static void DraggableDestroy (this Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().draggable("destroy");
        }
        public static void DraggableDisable(this Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().draggable("disable");
        }
        public static void DraggableEnable(this Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().draggable("enable");
        }
        #endregion
    }
}
