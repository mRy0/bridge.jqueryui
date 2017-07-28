using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{
    [ObjectLiteral]
    public class SliderParamter
    {
        public Common.Animation Animate { set; get; }
        public Common.ClassSelector[] Classes { set; get; }
        /// <summary>
        /// Disables the slider if set to true.
        /// </summary>
        public bool Disabled { set; get; }
        /// <summary>
        /// The maximum value of the slider.
        /// </summary>
        public int Max { set; get; }
        /// <summary>
        /// The minimum value of the slider.
        /// </summary>
        public int Min { set; get; }
        /// <summary>
        /// Determines whether the slider handles move horizontally (min on left, max on right) or vertically (min on bottom, max on top). Possible values: "horizontal", "vertical".
        /// </summary>
        public Orientations Orientation { set; get; }
        /// <summary>
        /// Whether the slider represents a range.
        /// </summary>
        public Ranges Range { set; get; }
        /// <summary>
        /// Determines the size or amount of each interval or step the slider takes between the min and max. The full specified value range of the slider (max - min) should be evenly divisible by the step.
        /// </summary>
        public int Step { set; get; }
        /// <summary>
        /// Determines the value of the slider, if there's only one handle. If there is more than one handle, determines the value of the first handle.
        /// </summary>
        public int Value { set; get; }
        /// <summary>
        /// This option can be used to specify multiple handles. If the range option is set to true, the length of values should be 2.
        /// </summary>
        public int[] Values { set; get; }


        public object ToJsObject()
        {
            var jObj = this.ToDynamic();
            if (!Script.IsNaN(Animate)) jObj.animate = Animate.ToJsObject();
            if (!Script.IsNaN(Orientation)) jObj.orientation = Orientation.ToString();
            if (!Script.IsNaN(Range)) jObj.range = Range.ToString();
            return jObj;
        }
    }
}
