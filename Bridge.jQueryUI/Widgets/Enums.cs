using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{
    public static class Enums
    {
        public enum WindowPosition
        {
            [Name("center")]
            Default = 0,
            [Name("left top")]
            TopLeft =1,
            [Name("top")]
            Top =2,
            [Name("right top")]
            TopRight =3,
            [Name("left")]
            Left =4,
            [Name("center")]
            Center = 5,
            [Name("right")]
            Right = 6,
            [Name("left bottom")]
            BottomLeft = 7,
            [Name("bottom")]
            Bottom =8,
            [Name("right")]
            BottomRight = 9
        };
        public enum Collision
        {
            [Name("flip")]
            Flip = 0,
            [Name("fit")]
            Fit = 1,
            [Name("fit flip")]
            FitFlip = 2,
            [Name("fit none")]
            FitNone = 3,

        }

        
    }
}
