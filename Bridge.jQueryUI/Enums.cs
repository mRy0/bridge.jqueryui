using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI
{
    public enum EffectTypes
    {
        [Name("blind")]
        Blind = 1,
        [Name("bounce")]
        Bounce = 2,
        [Name("clip")]
        Clip = 3,
        [Name("drop")]
        Drop = 4,
        [Name("explode")]
        Explode = 5,
        [Name("fade")]
        Fade = 6,
        [Name("fold")]
        Fold = 7,
        [Name("highlight")]
        Highlight = 8,
        [Name("puff")]
        Puff = 9,
        [Name("pulsate")]
        Pulsate = 10,
        [Name("scale")]
        Scale = 11,
        [Name("snake")]
        Shake = 12,
        [Name("size")]
        Size = 13,
        [Name("slide")]
        Slide = 14,
        [Name("transfer")]
        Transfer = 15
    };

    public enum AnimationSpeeds
    {
        Fast = 200,
        Slow = 600
    };
    

        public enum Easings
        {
            [Name("linear")]
            Linear = 1,
            [Name("swing")]
            Swing = 2
        };
        public enum SnapModes
        {
            [Name("inner")]
            Inner = 1,
            [Name("outer")]
            Outer = 2,
            [Name("both")]
            Both = 3
        };
        public enum Axis
        {
            [Name("x")]
            X = 1,
            [Name("y")]
            Y = 2,
            [Name("both")]
            Both = 3
        };

        public enum WindowPositions
        {
            [Name("center")]
            Default = 0,
            [Name("left top")]
            TopLeft = 1,
            [Name("top")]
            Top = 2,
            [Name("right top")]
            TopRight = 3,
            [Name("left")]
            Left = 4,
            [Name("center")]
            Center = 5,
            [Name("right")]
            Right = 6,
            [Name("left bottom")]
            BottomLeft = 7,
            [Name("bottom")]
            Bottom = 8,
            [Name("right")]
            BottomRight = 9
        };
        public enum Collisions
        {
            [Name("flip")]
            Flip = 0,
            [Name("fit")]
            Fit = 1,
            [Name("fit flip")]
            FitFlip = 2,
            [Name("fit none")]
            FitNone = 3,

        };


        public enum HeightStyles
        {
            [Name("auto")]
            Auto = 0,
            [Name("fill")]
            Fill = 1,
            [Name("content")]
            Content = 2,
            
        };


    public enum IconPositons
    { 
        [Name("beginning")]
        Beginning = 0,
        [Name("end")]
        End = 1,
        [Name("top")]
        Top = 2,
        [Name("bottom")]
        Bottom = 3
    };



    public enum JqueryEvents
    {
        [Name("blur")]
        Blur = 0,
        [Name("focus")]
        Focus = 1,
        [Name("focusin")]
        Focusin = 2,
        [Name("focusout")]
        Focusout = 3,
        [Name("resize")]
        Resize = 3,
        [Name("scroll")]
        Scroll = 4,
        [Name("click")]
        Click = 5,
        [Name("dblclick")]
        Dblclick = 6,
        [Name("mousedown")]
        Mousedown = 7,
        [Name("mouseup")]
        Mouseup = 8,
        [Name("mousemove")]
        Mousemove = 9,
        [Name("mouseover")]
        Mouseover = 10,
        [Name("mouseout")]
        Mouseout = 11,
        [Name("mouseenter")]
        Mouseenter = 12,
        [Name("mouseleave")]
        Mouseleave = 13,
        [Name("change")]
        Change = 14,
        [Name("select")]
        Select = 15,
        [Name("submit")]
        Submit = 16,
        [Name("keydown")]
        Keydown = 17,
        [Name("keypress")]
        Keypress = 18,
        [Name("keyup")]
        Keyup = 19,
        [Name("contextmenu")]
        Contextmenu = 20,
        [Name("slide")]
        Slide = 21,
        [Name("load")]
        Load = 22,
        [Name("unload")]
        Unload = 23,
        [Name("beforeunload")]
        BeforeUnload = 24,

    };

    public enum Orientations
    {
        [Name("horizontal")]
        Horizontal = 0,
        [Name("vertical")]
        Vertical = 1
    };

    public enum Ranges
    {
        [Name("none")]
        None = 0,
        [Name("min")]
        Min = 1,
        [Name("max")]
        Max = 2,
        [Name("both")]
        Both = 3
    }
}
