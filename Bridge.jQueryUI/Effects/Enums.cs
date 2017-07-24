using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Effects
{
    public static class Enums
    {
        public enum EffectTypes { Bldind =1, Bounce =2, Clip =3, Drop = 4, Explode = 5, Fade = 6, Fold =7, Highlight =8, Puff = 9, Pulsate = 10, Scale =11, Shake =12, Size =13, Slide = 14, Transfer =15};
        internal static string GetEffectNameFromEffect(EffectTypes type)
        {
            return type.ToString().ToLower();
        }
    }
}
