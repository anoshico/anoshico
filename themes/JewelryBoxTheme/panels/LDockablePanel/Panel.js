// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:themes/JewelryBoxTheme/panels/LDockablePanel/Panel.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"jimu-container" data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \t\x3cdiv class\x3d"empty-tip"\x3e${nls.emptyDocablePanelTip}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv role\x3d"button" class\x3d"bar" data-dojo-attach-point\x3d"barNode" data-dojo-attach-event\x3d"onclick:_onBarClick"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html require dojo/on dojo/keys dojo/topic dijit/_TemplatedMixin dojo/text!./Panel.html jimu/BaseWidgetPanel jimu/dijit/LoadingIndicator jimu/utils".split(" "),function(h,f,a,n,g,c,d,k,l,m,p,e){return h([m,k],{baseClass:"jimu-panel jimu-ldockable-panel",templateString:l,width:0,postCreate:function(){this.inherited(arguments);this.maxWidth=this.position.width;a.setAttr(this.domNode,"tabindex",this.config.tabIndex);this.own(g(this.domNode,"keydown",
f.hitch(this,function(b){if(!this.widget){var d=this.config.widgets[0];this.widget=this.widgetManager.getWidgetById(d.id);a.setAttr(this.widget.domNode,"aria-label",d.label);a.setAttr(this.widget.domNode,"tabindex",0);this.own(g(this.widget.domNode,"keydown",f.hitch(this,function(a){a.target===this.widget.domNode?a.keyCode===c.ENTER?(a.preventDefault(),e.focusFirstFocusNode(this.widget.domNode)):a.keyCode===c.ESCAPE?this.domNode.focus():a.keyCode===c.TAB&&a.preventDefault():a.keyCode===c.ESCAPE&&
(a.stopPropagation(),this.widget.domNode.focus())})))}a.hasClass(b.target,this.baseClass)&&(b.keyCode===c.ENTER?this.widget.domNode.focus():b.keyCode===c.ESCAPE&&e.trapToNextFocusContainer(this.domNode))})))},startup:function(){var b=this.getAllWidgetConfigs(),b=Array.isArray(this.config.widgets)?this.config.widgets:[this.config];0<b.length&&a.empty(this.containerNode);this.inherited(arguments)},onOpen:function(){this._setPostionWidthAndLeft();a.setStyle(this.domNode,{width:this.position.width+"px"});
0===this.position.width?this.panelManager.minimizePanel(this):this.panelManager.maximizePanel(this)},setPosition:function(a){this.inherited(arguments);d.publish("changeMapPosition",{left:this.position.left+this.position.width})},onMaximize:function(){a.addClass(this.barNode,"max");a.removeClass(this.barNode,"min");this.position.left=0;this.setPosition(this.position);this.inherited(arguments)},onMinimize:function(){a.removeClass(this.barNode,"max");a.addClass(this.barNode,"min");this.position.left=
0-this.position.width;this.setPosition(this.position);this.inherited(arguments)},resize:function(){this._setPostionWidthAndLeft();var b=e.getPositionStyle(this.position);b.position="absolute";a.setStyle(this.domNode,b);d.publish("changeMapPosition",{left:this.position.left+this.position.width})},_setPostionWidthAndLeft:function(){if(window.appInfo.isRunInMobile){var b=a.getMarginBox(window.jimuConfig.layoutId);this.position.width=.8*b.w;this.position.width>this.maxWidth&&(this.position.width=this.maxWidth)}else this.position.width=
this.position.width},_onBarClick:function(){"maximized"===this.windowState?this.panelManager.minimizePanel(this):this.panelManager.maximizePanel(this)}})});