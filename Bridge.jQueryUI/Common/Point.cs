using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Common
{
    [ObjectLiteral]
    public class Point
    {
        [Name("top")]
        public int Top { set; get; }
        [Name("left")]
        public int Left { set; get; }
    }
}
