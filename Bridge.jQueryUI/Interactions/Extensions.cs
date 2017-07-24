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

        public static void Draggable(this Node node)
        {
            new jQuery2.jQuery(node).ToDynamic().draggable();
        }
    }
}
