using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{
    [ObjectLiteral]
    public class DialogButton
    {
        public string Text { set; get; }
        public string Icon { set; get; }
        public Action Click { set; get; }       

    }
}
