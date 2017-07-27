using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Widgets
{

    public class Position
    {
        //my postion
        public Enums.WindowPosition My { set; get; }

        //at position
        public Enums.WindowPosition At { set; get; }

        //of 
        public Html5.Node Of { set; get; }

        public Enums.Collision Collision { set; get; }

        public Position()
        {
            Collision = Enums.Collision.Flip;
            My = Enums.WindowPosition.Center;
            At = Enums.WindowPosition.Center;
            Of = null;
        }

    }
}
