using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI
{



    //[AttributeUsage(AttributeTargets.Field, AllowMultiple = false)]
    //public class EnumJsNameAttribute : Attribute
    //{
    //    private readonly string jsName;
    //    public string JsName { get { return jsName; } }
    //    public EnumJsNameAttribute(string jsName)
    //    {
    //        this.jsName = jsName;
    //    }
    //}


    /// <summary>
    /// some special helper for internal use
    /// </summary>
    internal static class Helper
    {
        //helper because enum in bridge is numeric
        //public static string GetJsEnumName (Type enumType, Enum value)
        //{
        //    //if(!enumType.IsEnum){
        //    //    throw new Exception("not an enum");
        //    //}
        //    //else
        //    //{
        //    //    var name = Enum.GetName(enumType, value);
        //    //    var retVal = enumType.GetField(name) // I prefer to get attributes this way
        //    //        .GetCustomAttributes(false)
        //    //        .OfType<EnumJsNameAttribute>()
        //    //        .SingleOrDefault();
        //    //    if(retVal != null)
        //    //    {
        //    //        return retVal.JsName;
        //    //    }
        //    //    else
        //    //    {
        //    //        return name.ToLower();
        //    //    }
        //    //}
        //}
    }
}
