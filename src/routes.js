import AutoConfigColumns from "./cases/AutoConfigColumns.jsx";
import BasicInit from "./cases/BasicInit.jsx";
import CollapsibleColumns from "./cases/CollapsibleColumns.jsx";
import ColumnsToContent from "./cases/ColumnsToContent.jsx";
import ContextMenu from "./cases/ContextMenu.jsx";
import CustomCells from "./cases/CustomCells.jsx";
import DynamicData from "./cases/DynamicData.jsx";
import EventHandling from "./cases/EventHandling.jsx";
import Export from "./cases/Export.jsx";
import ExportCustomStyles from "./cases/ExportCustomStyles.jsx";
import FillspaceColumns from "./cases/FillspaceColumns.jsx";
import FixedColumns from "./cases/FixedColumns.jsx";
import InlineEditors from "./cases/InlineEditors.jsx";
import MultilineRows from "./cases/MultilineRows.jsx";
import Overlay from "./cases/Overlay.jsx";
import Resize from "./cases/Resize.jsx";
import RestBackend from "./cases/RestBackend.jsx";
import RowMultiSelection from "./cases/RowMultiSelection.jsx";
import RowSelection from "./cases/RowSelection.jsx";
import ScrollTable from "./cases/ScrollTable.jsx";
import SizeToContainer from "./cases/SizeToContainer.jsx";
import SizeToContent from "./cases/SizeToContent.jsx";
import Sort from "./cases/Sort.jsx";
import StaticData from "./cases/StaticData.jsx";
import Styling from "./cases/Styling.jsx";
import TableAPI from "./cases/TableAPI.jsx";
import TableHeaderFooterSpans from "./cases/TableHeaderFooterSpans.jsx";
import TableHeaderFooterVertical from "./cases/TableHeaderFooterVertical.jsx";
import TreeTable from "./cases/TreeTable.jsx";
import VisibilityColumns from "./cases/VisibilityColumns.jsx";

export const links = [
  ["/base/:skin", "Basic DataGrid", BasicInit],
  ["/auto-config/:skin", "Automatically generated columns", AutoConfigColumns],
  ["/spans/:skin", "Header and footer spans", TableHeaderFooterSpans],
  ["/fillspace/:skin", "Flexible column widths", FillspaceColumns],
  ["/columns-to-content/:skin", "Column widths to content", ColumnsToContent],
  ["/resize/:skin", "Resize columns", Resize],
  ["/collapsible-columns/:skin", "Collapse columns", CollapsibleColumns],
  ["/visibility/:skin", "Hide/show columns", VisibilityColumns],
  ["/fixed/:skin", "Fixed columns", FixedColumns],
  [
    "/header-vertical/:skin",
    "Vertical text in header",
    TableHeaderFooterVertical,
  ],

  ["/size-container/:skin", "Size to container", SizeToContainer],
  ["/size-content/:skin", "Size to content", SizeToContent],

  ["/styling/:skin", "Styling", Styling],

  ["/multiline-row/:skin", "Multi-line rows", MultilineRows],
  ["/selection/:skin", "Row selection", RowSelection],
  ["/multi-selection/:skin", "Multiple row selection", RowMultiSelection],
  ["/custom/:skin", "Custom cells", CustomCells],
  ["/editors/:skin", "Cell editors", InlineEditors],
  ["/sort/:skin", "Sort data", Sort],

  ["/context/:skin", "Context menu", ContextMenu],
  
  ["/overlay/:skin", "Overlay", Overlay],
  ["/bigdata/:skin", "Render big data", StaticData],
  ["/dynamic/:skin", "Dynamic loading", DynamicData],
  ["/rest/:skin", "REST backend", RestBackend],

  ["/treetable/:skin", "Tree structure", TreeTable],

  ["/export/:skin", "Export to Excel/CSV", Export],
  [
    "/export-custom-styles/:skin",
    "Export to Excel with custom styles",
    ExportCustomStyles,
  ],

  ["/api/:skin", "API calls", TableAPI],
  ["/events/:skin", "Event handling", EventHandling],
  ["/scroll/:skin", "Scroll by API", ScrollTable],
];
