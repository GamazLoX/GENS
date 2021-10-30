"use strict";
var SDK = self.SDK;
{
    const BEHAVIOR_CLASS = SDK.Behaviors.skymen_Skymen_SpritefontDX;

    BEHAVIOR_CLASS.Instance = class Skymen_SpritefontDXInstance extends SDK.IBehaviorInstanceBase
    {
        constructor(sdkBehType, behInst)
        {
            super(sdkBehType, behInst);
        }

        Release()
        {}

        OnCreate()
        {}

        OnPropertyChanged(id, value)
        {}

        LoadC2Property(name, valueString)
        {
            return false; // not handled
        }
    };
}