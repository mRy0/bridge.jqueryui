using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Common
{
    [ObjectLiteral]
    public class ClassSelector
    {
        public string UIClassName { set; get; }
        public string CustomClassName { set; get; }
        
        public override dynamic ToDynamic()
        {
            return new { UIClassName = CustomClassName };
        }
    }
}
