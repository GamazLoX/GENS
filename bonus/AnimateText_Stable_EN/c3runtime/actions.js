"use strict";
{
    self.C3.Behaviors.skymen_Skymen_SpritefontDX.Acts = {
        SetAlias(name, params, body)
{
    this.DefineAlias(name, params, body);
},

SetText(text)
{
    this.text = text;
    this.SetTextCall = true
    this.parseText()
    this.animated = true;
},

LinkDictionary(dictionary)
{
    this.linkedDictionnary = dictionary.GetInstanceByIID(0)._sdkInst.GetDataMap()
    this.linkedDictionnaryUID = dictionary.GetInstanceByIID(0)._uid
},

PauseTw()
{
    this.typewriterPaused = true
    this.Trigger(self.C3.Behaviors.skymen_Skymen_SpritefontDX.Cnds.OnTwPause)
},

ResumeTw()
{
    this.typewriterPaused = false
    this.Trigger(self.C3.Behaviors.skymen_Skymen_SpritefontDX.Cnds.OnTwResume)
},

SetTwEasing(easing)
{
	this._SetTwEasing(easing);
},

SetTwParams(params)
{
    this.TWParams = params;
    this.TWParamsOBJ = this.parseTypewriterParams(this.TWParams);
},

SkipTw(mode)
{
    this.SkipTypewriterToNextPause(mode === 0)
},

Typewrite(text)
{
    this.Typewriter(text)
},

SetTwEasingString(easing)
{
    this.TWEasing = easing;
}
    };
}