using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Common
{

    [ObjectLiteral(ObjectCreateMode.Constructor)]
    public class Position
    {
        //my postion
        public WindowPositions My { set; get; }

        //at position
        public WindowPositions At { set; get; }

        //of 
        public Html5.Node Of { set; get; }

        public Collisions Collision { set; get; }

        public Position()
        {
            Collision = Collisions.Flip;
            My = WindowPositions.Center;
            At = WindowPositions.Center;
            Of = null;
        }

        public object ToJsObject()
        {           
            var jObj = new object().ToDynamic();
            jObj.my = My.ToString();
            jObj.at = At.ToString();
            jObj.collision = Collision.ToString();
            if (Of != null) jObj.of = new jQuery2.jQuery(Of);;
            return jObj;
        }



    }
}
