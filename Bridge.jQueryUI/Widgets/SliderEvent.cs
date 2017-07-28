using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{
    [ObjectLiteral]
    public class SliderEvent
    {
        public Html5.Node Handle { set; get; }
        public int HandleIndex { set; get; }
        public int Value { set; get; }
        public int[] Values { set; get; }
    }
}
