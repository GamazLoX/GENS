"use strict";
var SDK = self.SDK;
{

    const BEHAVIOR_ID = "skymen_Skymen_SpritefontDX";
    const BEHAVIOR_VERSION = "1.0.3.5";
    const BEHAVIOR_CATEGORY = "general";

    const BEHAVIOR_CLASS = SDK.Behaviors.skymen_Skymen_SpritefontDX = class Skymen_SpritefontDXBehavior extends SDK.IBehaviorBase
    {
        constructor()
        {
            super(BEHAVIOR_ID);

            SDK.Lang.PushContext("behaviors." + BEHAVIOR_ID.toLowerCase());

            this._info.SetName(lang(".name"));
            this._info.SetDescription(lang(".description"));
            this._info.SetVersion(BEHAVIOR_VERSION);
            this._info.SetCategory(BEHAVIOR_CATEGORY);
            this._info.SetAuthor("skymen");
            this._info.SetHelpUrl(lang(".help-url"));
            this._info.SetIsOnlyOneAllowed(true);

            this._info.SetSupportedRuntimes(["c3"]);

            SDK.Lang.PushContext(".properties");

            this._info.SetProperties([
            	new SDK.PluginProperty("longtext", "tw-params", "value offsety -10; duration type 0.1; duration fade 0.1"),
            	new SDK.PluginProperty("combo", "tw-easing",
	            {
	                initialValue: "linear",
	                items: ["linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInSine", "easeOutSine", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo"]
	            }),
            	new SDK.PluginProperty("text", "tw-custom-easing", ""),
				new SDK.PluginProperty("check", "enable-default-functions", true),
            ]);

            SDK.Lang.PopContext(); //.properties
            SDK.Lang.PopContext();
        }
    };

    BEHAVIOR_CLASS.Register(BEHAVIOR_ID, BEHAVIOR_CLASS);
}