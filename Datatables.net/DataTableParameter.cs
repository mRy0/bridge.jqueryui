using Bridge;
using Bridge.Html5;

namespace Datatables.net
{
    [ObjectLiteral]
    public class DataTableParameter
    {
        [Name("paging")]
        public bool Paging { set; get; }
        [Name("ordering")]
        public bool Ordering { set; get; }
        [Name("info")]
        public bool Info { set; get; }

        [Name("stateSave")]
        public bool StateSave { set; get; }

        [Name("scrollY")]
        public string ScrollY { set; get; }
        [Name("scrollX")]
        public bool ScrollX { set; get; }

        [Name("scrollCollapse")]
        public bool ScrollCollapse { set; get; }

        [Name("pageResize")]
        public bool PageResize { set; get; }

        internal object ToJsObject()
        {
            return this.ToDynamic();
        }
    }
}
