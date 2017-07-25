namespace Bridge.jQueryUI.Interactions
{
    [ObjectLiteral]
    public class ResizeablePrameterCollection
    {
        //public System.Collections.Generic.IEnumerable<Node> AlsoResize { set; get; }
        public bool Animate { set; get; }
        public int AnimateDuration { set; get; }
        public Enums.Easing AnimateEasing { set; get; }
        //public bool AspectRatio { set; get; }
        public bool AutoHide { set; get; }
        //public System.Collections.Generic.IEnumerable<System.Type> Cancel { set; get; }
        public string Classes { set; get; }
        //public string Containment { set; get; }
        public int Delay { set; get; }
        public bool Disabled { set; get; }
        //public int Distance { set; get; }
        //public string Ghost { set; get; }
        //public string Grid { set; get; }
        public int MaxHeight { set; get; }
        public int MaxWidht { set; get; }
        public int MinHeight { set; get; }
        public int MinWidth { set; get; }

        public ResizeablePrameterCollection()
        {
            var test = new Html5.HTMLDivElement()
            {

            };
            
            Animate = false;
            AnimateDuration = Enums.AnimationSpeedFast;
            AnimateEasing = Enums.Easing.Swing;
            AutoHide = false;
            Classes = null;
            Delay = 0;
            Disabled = false;
            MaxHeight = -1;
            MaxWidht = -1;
            MinWidth = -1;
            MinHeight = -1;

        }
    }
}
