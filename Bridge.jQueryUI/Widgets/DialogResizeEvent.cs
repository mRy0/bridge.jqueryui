using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{
    [ObjectLiteral]
    public class DialogResizeEvent
    {
        [Name("originalPosition")]
        public Common.Point OriginalPosition { set; get; }

        [Name("position")]
        public Common.Point Position { set; get; }

        [Name("originalSize")]
        public Common.Dimensions OriginalSize { set; get; }

        [Name("size")]
        public Common.Dimensions Size { set; get; }

    }
}
