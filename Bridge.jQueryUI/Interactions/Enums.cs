using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Bridge.jQueryUI.Interactions
{
    public static class Enums
    {
        public enum Easing
        {
            [Name("linear")]
            Linear = 1,
            [Name("swing")]
            Swing = 2,
            [Name("default")]
            Default = 3
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

        public const int AnimationSpeedFast = 200;
        public const int AnimationSpeedSlow = 600;
    }

}
