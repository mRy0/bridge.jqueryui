using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Effects
{
    public static class Extensions
    {
        public static void Effect(this Bridge.Html5.Node node, Enums.EffectTypes effect, EffectPrameter options = null, int duration= 400, Action complete = null)
        {
            string name = effect.ToString();
            new jQuery2.jQuery(node).ToDynamic().effect(name);

        }
    }
}
