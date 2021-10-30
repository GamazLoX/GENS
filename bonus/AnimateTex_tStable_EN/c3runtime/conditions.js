"use strict";
{
    self.C3.Behaviors.skymen_Skymen_SpritefontDX.Cnds = {
        IsTyping()
{
    return this.typewriterActive && !this.typewriterPaused
},

OnLetterTyped()
{
    return true;
},

OnTwPause()
{
    return true;
},

OnTwResume()
{
    return true;
},

OnTwStart()
{
    return true;
},

OnTwStop()
{
    return true;
}
    };
}