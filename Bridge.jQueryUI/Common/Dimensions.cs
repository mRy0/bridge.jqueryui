using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Common
{
    [ObjectLiteral]
    public class Dimensions
    {
        [Name("height")]
        public int Height { set; get; }
        
        [Name("width")]
        public int Width { set; get; }
    }

}
