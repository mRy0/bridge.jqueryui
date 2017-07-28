using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Common
{
    [ObjectLiteral(ObjectCreateMode.Constructor)]
    public class Animation
    {
        public bool Disabled { set; get; }


        public int Speed { set; get; }
        public Easings Easing { set; get; }
        public int Delay { set; get; }
        public int Duration { set; get; }
        public EffectTypes Effect { set; get; }

        public Animation()
        {
            Disabled = false;        
        }

        public object ToJsObject()
        {
            if (Disabled) return false.ToDynamic();
               
            var obj = new object().ToDynamic();
            if (!Script.IsNaN(Speed)) obj.speed = Speed;
            if (!Script.IsNaN(Easing)) obj.easing = Easing.ToString();
            if (!Script.IsNaN(Delay)) obj.delay = Delay;
            if (!Script.IsNaN(Duration)) obj.duration = Duration;
            if (!Script.IsNaN(Effect)) obj.speed = Effect.ToString();

            return obj;
        }
    }
}
