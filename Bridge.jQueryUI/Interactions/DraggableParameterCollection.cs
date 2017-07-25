using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.jQueryUI.Interactions
{
    [ObjectLiteral]
    public class DraggableParameterCollection
    {
        /// <summary>
        /// If set to false, will prevent the ui-draggable class from being added. This may be desired as a performance optimization when calling .draggable() on hundreds of elements.
        /// </summary>
        public bool AddClasses { set; get; }
        /// <summary>
        /// Which element the draggable helper should be appended to while dragging.
        /// Note: The appendTo option only works when the helper option is set to not use the original element.
        /// </summary>
        public Html5.Node AppendTo { set; get; }
        /// <summary>
        /// Constrains dragging to either the horizontal (x) or vertical (y) axis. Possible values: "x", "y".
        /// </summary>
        public Enums.Axis Axis { set; get; }
        /// <summary>
        /// Prevents dragging from starting on specified elements.
        /// </summary>
        public string Cancel { set; get; }
        /// <summary>
        /// Specify additional classes to add to the widget's elements. 
        /// Any of classes specified in the Theming section can be used as keys to override their value. 
        /// To learn more about this option, check out the learn article about the classes option.
        /// </summary>
        public string Classes { set; get; }
        /// <summary>
        /// Allows the draggable to be dropped onto the specified sortables. 
        /// If this option is used, a draggable can be dropped onto a sortable list and then becomes part of it. 
        /// Note: The helper option must be set to "clone" in order to work flawlessly. 
        /// Requires the jQuery UI Sortable plugin to be included.
        /// </summary>
        public string ConnectToSortable { set; get; }
        /// <summary>
        /// Constrains dragging to within the bounds of the specified element or region.
        /// Multiple types supported:
        /// Selector: The draggable element will be contained to the bounding box of the first element found by the selector.If no element is found, no containment will be set.
        /// Element: The draggable element will be contained to the bounding box of this element.
        /// String: Possible values: "parent", "document", "window".
        /// Array: An array defining a bounding box in the form [x1, y1, x2, y2].
        /// </summary>
        public string Containment { set; get; }
        /// <summary>
        /// The CSS cursor during the drag operation.
        /// </summary>
        public Bridge.Html5.Cursor Cursor { set; get; }
        /// <summary>
        /// Sets the offset of the dragging helper relative to the mouse cursor. 
        /// Coordinates can be given as a hash using a combination of one or two keys: { top, left, right, bottom }.
        /// </summary>
        public CursorPostition CursorAt { set; get; }
        /// <summary>
        /// Time in milliseconds after mousedown until dragging should start. 
        /// This option can be used to prevent unwanted drags when clicking on an element.
        /// </summary>
        [System.Obsolete("version deprecated: 1.12")]
        public int Delay { set; get; }
        /// <summary>
        /// Disables the draggable if set to true.
        /// </summary>
        public bool Disabled { set; get; }
        /// <summary>
        /// Distance in pixels after mousedown the mouse must move before dragging should start. 
        /// This option can be used to prevent unwanted drags when clicking on an element.
        /// </summary>
        [System.Obsolete("version deprecated: 1.12")]
        public int Distance { set; get; }
        /// <summary>
        /// Snaps the dragging helper to a grid, every x and y pixels. The array must be of the form [ x, y ]
        /// </summary>
        public Grid Grid { set; get; }
        /// <summary>
        /// If specified, restricts dragging from starting unless the mousedown occurs on the specified element(s). 
        /// Only elements that descend from the draggable element are permitted.
        /// </summary>
        public Html5.Node Handle { set; get; }
        /// <summary>
        /// Allows for a helper element to be used for dragging display.
        /// Multiple types supported:
        /// String: If set to "clone", then the element will be cloned and the clone will be dragged.
        /// Function: A function that will return a DOMElement to use while dragging.
        /// </summary>
        public string Helper { set; get; }
        /// <summary>
        /// Prevent iframes from capturing the mousemove events during a drag. 
        /// Useful in combination with the cursorAt option, or in any case where the mouse cursor may not be over the helper.
        /// Multiple types supported:
        /// Boolean: When set to true, transparent overlays will be placed over all iframes on the page.
        /// Selector: Any iframes matching the selector will be covered by transparent overlays.
        /// </summary>
        public bool IFrameFix { set; get; }
        /// <summary>
        /// Opacity for the helper while being dragged.
        /// </summary>
        public int Opacity { set; get; }
        /// <summary>
        /// If set to true, all droppable positions are calculated on every mousemove. 
        /// Caution: This solves issues on highly dynamic pages, but dramatically decreases performance.
        /// </summary>
        public bool RefreshPosititions { set; get; }
        /// <summary>
        /// Whether the element should revert to its start position when dragging stops.
        /// Multiple types supported:
        /// Boolean: If set to true the element will always revert.
        /// String: If set to "invalid", revert will only occur if the draggable has not been dropped on a droppable.
        /// For "valid", it's the other way around.
        /// Function: A function to determine whether the element should revert to its start position.The function must return true to revert the element.
        /// </summary>
        public string Revert { set; get; }
        /// <summary>
        /// The duration of the revert animation, in milliseconds. Ignored if the revert option is false.
        /// </summary>
        public int RevertDuration { set; get; }
        /// <summary>
        /// Used to group sets of draggable and droppable items, in addition to droppable's accept option. 
        /// A draggable with the same scope value as a droppable will be accepted by the droppable.
        /// </summary>
        public string Scope { set; get; }
        /// <summary>
        /// If set to true, container auto-scrolls while dragging.
        /// </summary>
        public bool Scroll { set; get; }
        /// <summary>
        /// Distance in pixels from the edge of the viewport after which the viewport should scroll. 
        /// Distance is relative to pointer, not the draggable. Ignored if the scroll option is false.
        /// </summary>
        public int ScrollSensivity { set; get; }
        /// <summary>
        /// The speed at which the window should scroll once the mouse pointer gets within the scrollSensitivity distance. 
        /// Ignored if the scroll option is false.
        /// </summary>
        public int ScrollSpeed { set; get; }
        /// <summary>
        /// Whether the element should snap to other elements.
        /// Multiple types supported:
        /// Boolean: When set to true, the element will snap to all other draggable elements.
        /// Selector: A selector specifying which elements to snap to.
        /// </summary>
        public bool Snap { set; get; }
        /// <summary>
        /// Determines which edges of snap elements the draggable will snap to. 
        /// Ignored if the snap option is false. Possible values: "inner", "outer", "both".
        /// </summary>
        public Enums.SnapModes SnapMode { set; get; }
        /// <summary>
        /// The distance in pixels from the snap element edges at which snapping should occur. 
        /// Ignored if the snap option is false.
        /// </summary>
        public int SnapTolerance { set; get; }
        /// <summary>
        /// Controls the z-index of the set of elements that match the selector, always brings the currently dragged item to the front. 
        /// Very useful in things like window managers.
        /// </summary>
        public IEnumerable<Html5.Node> Stack { set; get; }
        /// <summary>
        /// Z-index for the helper while being dragged.
        /// </summary>
        public int ZIndex { set; get; }


        public DraggableParameterCollection()
        {
            AddClasses = true;
            AppendTo = null;
            Axis = Enums.Axis.Both;
            Cancel = null;
            Classes = null;
            ConnectToSortable =null;
            Containment = null;
            Cursor = Html5.Cursor.Auto;
            CursorAt = null;
            Delay = 0;
            Disabled = false;
            Distance = 1;
            Grid = null;
            Handle = null;
            Helper = null;
            IFrameFix = false;
            Opacity = -1;
            RefreshPosititions = false;
            Revert = null;
            RevertDuration = 500;
            Scope = null;
            Scroll = true;
            ScrollSensivity = 20;
            ScrollSpeed = 20;
            Snap = false;
            SnapMode = Enums.SnapModes.Both;
            SnapTolerance = 20;
            Stack = null;
            ZIndex = -1;
        }

    }
}
