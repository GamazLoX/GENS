"use strict";
{
    self.C3.Behaviors.skymen_Skymen_SpritefontDX.Exps = {
        LastLetterIndex()
{
    return this.LastLetterID;
},

TypewriterEasing()
{
    return this.TWEasing;
},

TypewriterParams()
{
    return this.TWParams;
},

TypedTextWidth()
{
    let b
    if (C3.Plugins.Spritefont2 && this._inst._objectType._plugin instanceof C3.Plugins.Spritefont2)
    {
        if (this.typewriterActive)
        {
            let a = this._inst._sdkInst._text;
            this._inst._sdkInst.CallAction(C3.Plugins.Spritefont2.Acts.SetText, this.curTypedWidth)
            b = this._inst._sdkInst.CallExpression(C3.Plugins.Spritefont2.Exps.TextWidth);
            this._inst._sdkInst.CallAction(C3.Plugins.Spritefont2.Acts.SetText, a);
        }
        else
        {
            b = this._inst._sdkInst.CallExpression(C3.Plugins.Spritefont2.Exps.TextWidth);
        }
    }
    else if (C3.Plugins.Text && this._inst._objectType._plugin instanceof C3.Plugins.Text)
    {
        if (this.typewriterActive)
        {
            let a = this._inst._sdkInst._text;
            this._inst._sdkInst.CallAction(C3.Plugins.Text.Acts.SetText, this.curTypedWidth)
            b = this._inst._sdkInst.CallExpression(C3.Plugins.Text.Exps.TextWidth);
            this._inst._sdkInst.CallAction(C3.Plugins.Text.Acts.SetText, a);
        }
        else
        {
            b = this._inst._sdkInst.CallExpression(C3.Plugins.Text.Exps.TextWidth);
        }
    }
    return b
},

TypedTextHeight()
{
    let b
    if (C3.Plugins.Spritefont2 && this._inst._objectType._plugin instanceof C3.Plugins.Spritefont2)
    {
        if (this.typewriterActive)
        {
            let a = this._inst._sdkInst._text;
            this._inst._sdkInst.CallAction(C3.Plugins.Spritefont2.Acts.SetText, this.curTypedHeight)
            b = this._inst._sdkInst.CallExpression(C3.Plugins.Spritefont2.Exps.TextHeight);
            this._inst._sdkInst.CallAction(C3.Plugins.Spritefont2.Acts.SetText, a);
        }
        else
        {
            b = this._inst._sdkInst.CallExpression(C3.Plugins.Spritefont2.Exps.TextHeight);
        }
    }
    else if (C3.Plugins.Text && this._inst._objectType._plugin instanceof C3.Plugins.Text)
    {
        if (this.typewriterActive)
        {
            let a = this._inst._sdkInst._text;
            this._inst._sdkInst.CallAction(C3.Plugins.Text.Acts.SetText, this.curTypedHeight)
            b = this._inst._sdkInst.CallExpression(C3.Plugins.Text.Exps.TextHeight);
            this._inst._sdkInst.CallAction(C3.Plugins.Text.Acts.SetText, a);
        }
        else
        {
            b = this._inst._sdkInst.CallExpression(C3.Plugins.Text.Exps.TextHeight);
        }
    }
    return b
},

LastLetter()
{
    return this.LastLetter;
},

C2StrToC3Str(text)
{
	return this._C2StrToC3Str(text);
}
    };
}