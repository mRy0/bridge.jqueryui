using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI
{
    public enum EffectTypes
    {
        [Name("blind")]
        Blind = 1,
        [Name("bounce")]
        Bounce = 2,
        [Name("clip")]
        Clip = 3,
        [Name("drop")]
        Drop = 4,
        [Name("explode")]
        Explode = 5,
        [Name("fade")]
        Fade = 6,
        [Name("fold")]
        Fold = 7,
        [Name("highlight")]
        Highlight = 8,
        [Name("puff")]
        Puff = 9,
        [Name("pulsate")]
        Pulsate = 10,
        [Name("scale")]
        Scale = 11,
        [Name("snake")]
        Shake = 12,
        [Name("size")]
        Size = 13,
        [Name("slide")]
        Slide = 14,
        [Name("transfer")]
        Transfer = 15
    };

    public enum AnimationSpeeds
    {
        Fast = 200,
        Slow = 600
    };
    

        public enum Easings
        {
            [Name("linear")]
            Linear = 1,
            [Name("swing")]
            Swing = 2
        };
        public enum SnapModes
        {
            [Name("inner")]
            Inner = 1,
            [Name("outer")]
            Outer = 2,
            [Name("both")]
            Both = 3
        };
        public enum Axis
        {
            [Name("x")]
            X = 1,
            [Name("y")]
            Y = 2,
            [Name("both")]
            Both = 3
        };

        public enum WindowPositions
        {
            [Name("center")]
            Default = 0,
            [Name("left top")]
            TopLeft = 1,
            [Name("top")]
            Top = 2,
            [Name("right top")]
            TopRight = 3,
            [Name("left")]
            Left = 4,
            [Name("center")]
            Center = 5,
            [Name("right")]
            Right = 6,
            [Name("left bottom")]
            BottomLeft = 7,
            [Name("bottom")]
            Bottom = 8,
            [Name("right")]
            BottomRight = 9
        };
        public enum Collisions
        {
            [Name("flip")]
            Flip = 0,
            [Name("fit")]
            Fit = 1,
            [Name("fit flip")]
            FitFlip = 2,
            [Name("fit none")]
            FitNone = 3,

        };


        public enum HeightStyles
        {
            [Name("auto")]
            Auto = 0,
            [Name("fill")]
            Fill = 1,
            [Name("content")]
            Content = 2,
            
        };


    public enum IconPositons
    { 
        [Name("beginning")]
        Beginning = 0,
        [Name("end")]
        End = 1,
        [Name("top")]
        Top = 2,
        [Name("bottom")]
        Bottom = 3
    };



    public enum JqueryEvents
    {
        [Name("blur")]
        Blur = 0,
        [Name("focus")]
        Focus = 1,
        [Name("focusin")]
        Focusin = 2,
        [Name("focusout")]
        Focusout = 3,
        [Name("resize")]
        Resize = 3,
        [Name("scroll")]
        Scroll = 4,
        [Name("click")]
        Click = 5,
        [Name("dblclick")]
        Dblclick = 6,
        [Name("mousedown")]
        Mousedown = 7,
        [Name("mouseup")]
        Mouseup = 8,
        [Name("mousemove")]
        Mousemove = 9,
        [Name("mouseover")]
        Mouseover = 10,
        [Name("mouseout")]
        Mouseout = 11,
        [Name("mouseenter")]
        Mouseenter = 12,
        [Name("mouseleave")]
        Mouseleave = 13,
        [Name("change")]
        Change = 14,
        [Name("select")]
        Select = 15,
        [Name("submit")]
        Submit = 16,
        [Name("keydown")]
        Keydown = 17,
        [Name("keypress")]
        Keypress = 18,
        [Name("keyup")]
        Keyup = 19,
        [Name("contextmenu")]
        Contextmenu = 20,
        [Name("slide")]
        Slide = 21,
        [Name("load")]
        Load = 22,
        [Name("unload")]
        Unload = 23,
        [Name("beforeunload")]
        BeforeUnload = 24,

    };

    public enum Orientations
    {
        [Name("horizontal")]
        Horizontal = 0,
        [Name("vertical")]
        Vertical = 1
    };

    public enum Ranges
    {
        [Name("none")]
        None = 0,
        [Name("min")]
        Min = 1,
        [Name("max")]
        Max = 2,
        [Name("both")]
        Both = 3
    }

    public enum UIIcons
    {
        [Name("ui-icon-blank")]
        Blank = 1,
        [Name("ui-icon-caret-1-n")]
        Caret_1_N = 2,
        [Name("ui-icon-caret-1-ne")]
        Caret_1_Ne = 3,
        [Name("ui-icon-caret-1-e")]
        Caret_1_E = 4,
        [Name("ui-icon-caret-1-se")]
        Caret_1_Se = 5,
        [Name("ui-icon-caret-1-s")]
        Caret_1_S = 6,
        [Name("ui-icon-caret-1-sw")]
        Caret_1_Sw = 7,
        [Name("ui-icon-caret-1-w")]
        Caret_1_W = 8,
        [Name("ui-icon-caret-1-nw")]
        Caret_1_Nw = 9,
        [Name("ui-icon-caret-2-n-s")]
        Caret_2_N_S = 10,
        [Name("ui-icon-caret-2-e-w")]
        Caret_2_E_W = 11,
        [Name("ui-icon-triangle-1-n")]
        Triangle_1_N = 12,
        [Name("ui-icon-triangle-1-ne")]
        Triangle_1_Ne = 13,
        [Name("ui-icon-triangle-1-e")]
        Triangle_1_E = 14,
        [Name("ui-icon-triangle-1-se")]
        Triangle_1_Se = 15,
        [Name("ui-icon-triangle-1-s")]
        Triangle_1_S = 16,
        [Name("ui-icon-triangle-1-sw")]
        Triangle_1_Sw = 17,
        [Name("ui-icon-triangle-1-w")]
        Triangle_1_W = 18,
        [Name("ui-icon-triangle-1-nw")]
        Triangle_1_Nw = 19,
        [Name("ui-icon-triangle-2-n-s")]
        Triangle_2_N_S = 20,
        [Name("ui-icon-triangle-2-e-w")]
        Triangle_2_E_W = 21,
        [Name("ui-icon-arrow-1-n")]
        Arrow_1_N = 22,
        [Name("ui-icon-arrow-1-ne")]
        Arrow_1_Ne = 23,
        [Name("ui-icon-arrow-1-e")]
        Arrow_1_E = 24,
        [Name("ui-icon-arrow-1-se")]
        Arrow_1_Se = 25,
        [Name("ui-icon-arrow-1-s")]
        Arrow_1_S = 26,
        [Name("ui-icon-arrow-1-sw")]
        Arrow_1_Sw = 27,
        [Name("ui-icon-arrow-1-w")]
        Arrow_1_W = 28,
        [Name("ui-icon-arrow-1-nw")]
        Arrow_1_Nw = 29,
        [Name("ui-icon-arrow-2-n-s")]
        Arrow_2_N_S = 30,
        [Name("ui-icon-arrow-2-ne-sw")]
        Arrow_2_Ne_Sw = 31,
        [Name("ui-icon-arrow-2-e-w")]
        Arrow_2_E_W = 32,
        [Name("ui-icon-arrow-2-se-nw")]
        Arrow_2_Se_Nw = 33,
        [Name("ui-icon-arrowstop-1-n")]
        Arrowstop_1_N = 34,
        [Name("ui-icon-arrowstop-1-e")]
        Arrowstop_1_E = 35,
        [Name("ui-icon-arrowstop-1-s")]
        Arrowstop_1_S = 36,
        [Name("ui-icon-arrowstop-1-w")]
        Arrowstop_1_W = 37,
        [Name("ui-icon-arrowthick-1-n")]
        Arrowthick_1_N = 38,
        [Name("ui-icon-arrowthick-1-ne")]
        Arrowthick_1_Ne = 39,
        [Name("ui-icon-arrowthick-1-e")]
        Arrowthick_1_E = 40,
        [Name("ui-icon-arrowthick-1-se")]
        Arrowthick_1_Se = 41,
        [Name("ui-icon-arrowthick-1-s")]
        Arrowthick_1_S = 42,
        [Name("ui-icon-arrowthick-1-sw")]
        Arrowthick_1_Sw = 43,
        [Name("ui-icon-arrowthick-1-w")]
        Arrowthick_1_W = 44,
        [Name("ui-icon-arrowthick-1-nw")]
        Arrowthick_1_Nw = 45,
        [Name("ui-icon-arrowthick-2-n-s")]
        Arrowthick_2_N_S = 46,
        [Name("ui-icon-arrowthick-2-ne-sw")]
        Arrowthick_2_Ne_Sw = 47,
        [Name("ui-icon-arrowthick-2-e-w")]
        Arrowthick_2_E_W = 48,
        [Name("ui-icon-arrowthick-2-se-nw")]
        Arrowthick_2_Se_Nw = 49,
        [Name("ui-icon-arrowthickstop-1-n")]
        Arrowthickstop_1_N = 50,
        [Name("ui-icon-arrowthickstop-1-e")]
        Arrowthickstop_1_E = 51,
        [Name("ui-icon-arrowthickstop-1-s")]
        Arrowthickstop_1_S = 52,
        [Name("ui-icon-arrowthickstop-1-w")]
        Arrowthickstop_1_W = 53,
        [Name("ui-icon-arrowreturnthick-1-w")]
        Arrowreturnthick_1_W = 54,
        [Name("ui-icon-arrowreturnthick-1-n")]
        Arrowreturnthick_1_N = 55,
        [Name("ui-icon-arrowreturnthick-1-e")]
        Arrowreturnthick_1_E = 56,
        [Name("ui-icon-arrowreturnthick-1-s")]
        Arrowreturnthick_1_S = 57,
        [Name("ui-icon-arrowreturn-1-w")]
        Arrowreturn_1_W = 58,
        [Name("ui-icon-arrowreturn-1-n")]
        Arrowreturn_1_N = 59,
        [Name("ui-icon-arrowreturn-1-e")]
        Arrowreturn_1_E = 60,
        [Name("ui-icon-arrowreturn-1-s")]
        Arrowreturn_1_S = 61,
        [Name("ui-icon-arrowrefresh-1-w")]
        Arrowrefresh_1_W = 62,
        [Name("ui-icon-arrowrefresh-1-n")]
        Arrowrefresh_1_N = 63,
        [Name("ui-icon-arrowrefresh-1-e")]
        Arrowrefresh_1_E = 64,
        [Name("ui-icon-arrowrefresh-1-s")]
        Arrowrefresh_1_S = 65,
        [Name("ui-icon-arrow-4")]
        Arrow_4 = 66,
        [Name("ui-icon-arrow-4-diag")]
        Arrow_4_Diag = 67,
        [Name("ui-icon-extlink")]
        Extlink = 68,
        [Name("ui-icon-newwin")]
        Newwin = 69,
        [Name("ui-icon-refresh")]
        Refresh = 70,
        [Name("ui-icon-shuffle")]
        Shuffle = 71,
        [Name("ui-icon-transfer-e-w")]
        Transfer_E_W = 72,
        [Name("ui-icon-transferthick-e-w")]
        Transferthick_E_W = 73,
        [Name("ui-icon-folder-collapsed")]
        Folder_Collapsed = 74,
        [Name("ui-icon-folder-open")]
        Folder_Open = 75,
        [Name("ui-icon-document")]
        Document = 76,
        [Name("ui-icon-document-b")]
        Document_B = 77,
        [Name("ui-icon-note")]
        Note = 78,
        [Name("ui-icon-mail-closed")]
        Mail_Closed = 79,
        [Name("ui-icon-mail-open")]
        Mail_Open = 80,
        [Name("ui-icon-suitcase")]
        Suitcase = 81,
        [Name("ui-icon-comment")]
        Comment = 82,
        [Name("ui-icon-person")]
        Person = 83,
        [Name("ui-icon-print")]
        Print = 84,
        [Name("ui-icon-trash")]
        Trash = 85,
        [Name("ui-icon-locked")]
        Locked = 86,
        [Name("ui-icon-unlocked")]
        Unlocked = 87,
        [Name("ui-icon-bookmark")]
        Bookmark = 88,
        [Name("ui-icon-tag")]
        Tag = 89,
        [Name("ui-icon-home")]
        Home = 90,
        [Name("ui-icon-flag")]
        Flag = 91,
        [Name("ui-icon-calculator")]
        Calculator = 92,
        [Name("ui-icon-cart")]
        Cart = 93,
        [Name("ui-icon-pencil")]
        Pencil = 94,
        [Name("ui-icon-clock")]
        Clock = 95,
        [Name("ui-icon-disk")]
        Disk = 96,
        [Name("ui-icon-calendar")]
        Calendar = 97,
        [Name("ui-icon-zoomin")]
        Zoomin = 98,
        [Name("ui-icon-zoomout")]
        Zoomout = 99,
        [Name("ui-icon-search")]
        Search = 100,
        [Name("ui-icon-wrench")]
        Wrench = 101,
        [Name("ui-icon-gear")]
        Gear = 102,
        [Name("ui-icon-heart")]
        Heart = 103,
        [Name("ui-icon-star")]
        Star = 104,
        [Name("ui-icon-link")]
        Link = 105,
        [Name("ui-icon-cancel")]
        Cancel = 106,
        [Name("ui-icon-plus")]
        Plus = 107,
        [Name("ui-icon-plusthick")]
        Plusthick = 108,
        [Name("ui-icon-minus")]
        Minus = 109,
        [Name("ui-icon-minusthick")]
        Minusthick = 110,
        [Name("ui-icon-close")]
        Close = 111,
        [Name("ui-icon-closethick")]
        Closethick = 112,
        [Name("ui-icon-key")]
        Key = 113,
        [Name("ui-icon-lightbulb")]
        Lightbulb = 114,
        [Name("ui-icon-scissors")]
        Scissors = 115,
        [Name("ui-icon-clipboard")]
        Clipboard = 116,
        [Name("ui-icon-copy")]
        Copy = 117,
        [Name("ui-icon-contact")]
        Contact = 118,
        [Name("ui-icon-image")]
        Image = 119,
        [Name("ui-icon-video")]
        Video = 120,
        [Name("ui-icon-script")]
        Script = 121,
        [Name("ui-icon-alert")]
        Alert = 122,
        [Name("ui-icon-info")]
        Info = 123,
        [Name("ui-icon-notice")]
        Notice = 124,
        [Name("ui-icon-help")]
        Help = 125,
        [Name("ui-icon-check")]
        Check = 126,
        [Name("ui-icon-bullet")]
        Bullet = 127,
        [Name("ui-icon-radio-off")]
        Radio_Off = 128,
        [Name("ui-icon-radio-on")]
        Radio_On = 129,
        [Name("ui-icon-pin-w")]
        Pin_W = 130,
        [Name("ui-icon-pin-s")]
        Pin_S = 131,
        [Name("ui-icon-play")]
        Play = 132,
        [Name("ui-icon-pause")]
        Pause = 133,
        [Name("ui-icon-seek-next")]
        Seek_Next = 134,
        [Name("ui-icon-seek-prev")]
        Seek_Prev = 135,
        [Name("ui-icon-seek-end")]
        Seek_End = 136,
        [Name("ui-icon-seek-first")]
        Seek_First = 137,
        [Name("ui-icon-stop")]
        Stop = 138,
        [Name("ui-icon-eject")]
        Eject = 139,
        [Name("ui-icon-volume-off")]
        Volume_Off = 140,
        [Name("ui-icon-volume-on")]
        Volume_On = 141,
        [Name("ui-icon-power")]
        Power = 142,
        [Name("ui-icon-signal-diag")]
        Signal_Diag = 143,
        [Name("ui-icon-signal")]
        Signal = 144,
        [Name("ui-icon-battery-0")]
        Battery_0 = 145,
        [Name("ui-icon-battery-1")]
        Battery_1 = 146,
        [Name("ui-icon-battery-2")]
        Battery_2 = 147,
        [Name("ui-icon-battery-3")]
        Battery_3 = 148,
        [Name("ui-icon-circle-plus")]
        Circle_Plus = 149,
        [Name("ui-icon-circle-minus")]
        Circle_Minus = 150,
        [Name("ui-icon-circle-close")]
        Circle_Close = 151,
        [Name("ui-icon-circle-triangle-e")]
        Circle_Triangle_E = 152,
        [Name("ui-icon-circle-triangle-s")]
        Circle_Triangle_S = 153,
        [Name("ui-icon-circle-triangle-w")]
        Circle_Triangle_W = 154,
        [Name("ui-icon-circle-triangle-n")]
        Circle_Triangle_N = 155,
        [Name("ui-icon-circle-arrow-e")]
        Circle_Arrow_E = 156,
        [Name("ui-icon-circle-arrow-s")]
        Circle_Arrow_S = 157,
        [Name("ui-icon-circle-arrow-w")]
        Circle_Arrow_W = 158,
        [Name("ui-icon-circle-arrow-n")]
        Circle_Arrow_N = 159,
        [Name("ui-icon-circle-zoomin")]
        Circle_Zoomin = 160,
        [Name("ui-icon-circle-zoomout")]
        Circle_Zoomout = 161,
        [Name("ui-icon-circle-check")]
        Circle_Check = 162,
        [Name("ui-icon-circlesmall-plus")]
        Circlesmall_Plus = 163,
        [Name("ui-icon-circlesmall-minus")]
        Circlesmall_Minus = 164,
        [Name("ui-icon-circlesmall-close")]
        Circlesmall_Close = 165,
        [Name("ui-icon-squaresmall-plus")]
        Squaresmall_Plus = 166,
        [Name("ui-icon-squaresmall-minus")]
        Squaresmall_Minus = 167,
        [Name("ui-icon-squaresmall-close")]
        Squaresmall_Close = 168,
        [Name("ui-icon-grip-dotted-vertical")]
        Grip_Dotted_Vertical = 169,
        [Name("ui-icon-grip-dotted-horizontal")]
        Grip_Dotted_Horizontal = 170,
        [Name("ui-icon-grip-solid-vertical")]
        Grip_Solid_Vertical = 171,
        [Name("ui-icon-grip-solid-horizontal")]
        Grip_Solid_Horizontal = 172,
        [Name("ui-icon-gripsmall-diagonal-se")]
        Gripsmall_Diagonal_Se = 173,
        [Name("ui-icon-grip-diagonal-se")]
        Grip_Diagonal_Se = 174,
    }
}
