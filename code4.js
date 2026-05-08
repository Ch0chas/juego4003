gdjs.GAME_32OVERCode = {};
gdjs.GAME_32OVERCode.localVariables = [];
gdjs.GAME_32OVERCode.idToCallbackMap = new Map();
gdjs.GAME_32OVERCode.GDTinyGreenButtonObjects1= [];
gdjs.GAME_32OVERCode.GDTinyGreenButtonObjects2= [];
gdjs.GAME_32OVERCode.GDRedButtonWithStoneFrameObjects1= [];
gdjs.GAME_32OVERCode.GDRedButtonWithStoneFrameObjects2= [];
gdjs.GAME_32OVERCode.GDperdiste_9595paObjects1= [];
gdjs.GAME_32OVERCode.GDperdiste_9595paObjects2= [];
gdjs.GAME_32OVERCode.GDTinyGreyLeaderboardDialogObjects1= [];
gdjs.GAME_32OVERCode.GDTinyGreyLeaderboardDialogObjects2= [];
gdjs.GAME_32OVERCode.GDGraveyard_9595BackgroundObjects1= [];
gdjs.GAME_32OVERCode.GDGraveyard_9595BackgroundObjects2= [];
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1= [];
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects2= [];
gdjs.GAME_32OVERCode.GDOperatorPlusBitmapTextObjects1= [];
gdjs.GAME_32OVERCode.GDOperatorPlusBitmapTextObjects2= [];
gdjs.GAME_32OVERCode.GDDinoObjects1= [];
gdjs.GAME_32OVERCode.GDDinoObjects2= [];
gdjs.GAME_32OVERCode.GDtrigger_9595arribaObjects1= [];
gdjs.GAME_32OVERCode.GDtrigger_9595arribaObjects2= [];
gdjs.GAME_32OVERCode.GDtrigger_9595abajoObjects1= [];
gdjs.GAME_32OVERCode.GDtrigger_9595abajoObjects2= [];
gdjs.GAME_32OVERCode.GDtrigger_9595derechaObjects1= [];
gdjs.GAME_32OVERCode.GDtrigger_9595derechaObjects2= [];
gdjs.GAME_32OVERCode.GDtrigger_9595izquierdaObjects1= [];
gdjs.GAME_32OVERCode.GDtrigger_9595izquierdaObjects2= [];
gdjs.GAME_32OVERCode.GDGoldObjects1= [];
gdjs.GAME_32OVERCode.GDGoldObjects2= [];
gdjs.GAME_32OVERCode.GDsubvidatituloObjects1= [];
gdjs.GAME_32OVERCode.GDsubvidatituloObjects2= [];
gdjs.GAME_32OVERCode.GDsubvidaObjects1= [];
gdjs.GAME_32OVERCode.GDsubvidaObjects2= [];
gdjs.GAME_32OVERCode.GDStar_9595GoldObjects1= [];
gdjs.GAME_32OVERCode.GDStar_9595GoldObjects2= [];
gdjs.GAME_32OVERCode.GDhud_9595coinObjects1= [];
gdjs.GAME_32OVERCode.GDhud_9595coinObjects2= [];
gdjs.GAME_32OVERCode.GDdinotxtObjects1= [];
gdjs.GAME_32OVERCode.GDdinotxtObjects2= [];
gdjs.GAME_32OVERCode.GDtxtmonedaObjects1= [];
gdjs.GAME_32OVERCode.GDtxtmonedaObjects2= [];
gdjs.GAME_32OVERCode.GDDino2Objects1= [];
gdjs.GAME_32OVERCode.GDDino2Objects2= [];
gdjs.GAME_32OVERCode.GDMonsterObjects1= [];
gdjs.GAME_32OVERCode.GDMonsterObjects2= [];
gdjs.GAME_32OVERCode.GDSIKEObjects1= [];
gdjs.GAME_32OVERCode.GDSIKEObjects2= [];
gdjs.GAME_32OVERCode.GDSECRETObjects1= [];
gdjs.GAME_32OVERCode.GDSECRETObjects2= [];
gdjs.GAME_32OVERCode.GDto_9595move_9595rightObjects1= [];
gdjs.GAME_32OVERCode.GDto_9595move_9595rightObjects2= [];
gdjs.GAME_32OVERCode.GDto_9595move_9595leftObjects1= [];
gdjs.GAME_32OVERCode.GDto_9595move_9595leftObjects2= [];
gdjs.GAME_32OVERCode.GDto_9595jumpObjects1= [];
gdjs.GAME_32OVERCode.GDto_9595jumpObjects2= [];
gdjs.GAME_32OVERCode.GDFireballObjects1= [];
gdjs.GAME_32OVERCode.GDFireballObjects2= [];
gdjs.GAME_32OVERCode.GDfireballObjects1= [];
gdjs.GAME_32OVERCode.GDfireballObjects2= [];
gdjs.GAME_32OVERCode.GDWalking_9595enemyObjects1= [];
gdjs.GAME_32OVERCode.GDWalking_9595enemyObjects2= [];
gdjs.GAME_32OVERCode.GDAREA_9595RIEGOObjects1= [];
gdjs.GAME_32OVERCode.GDAREA_9595RIEGOObjects2= [];
gdjs.GAME_32OVERCode.GDFloater_9595enemyObjects1= [];
gdjs.GAME_32OVERCode.GDFloater_9595enemyObjects2= [];


gdjs.GAME_32OVERCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithStoneFrame"), gdjs.GAME_32OVERCode.GDRedButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OVERCode.GDRedButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32OVERCode.GDRedButtonWithStoneFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OVERCode.GDRedButtonWithStoneFrameObjects1[k] = gdjs.GAME_32OVERCode.GDRedButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.GAME_32OVERCode.GDRedButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ESCENA1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1[k] = gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "INSTRUCCIONES", false);
}
}

}


};

gdjs.GAME_32OVERCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GAME_32OVERCode.GDTinyGreenButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTinyGreenButtonObjects2.length = 0;
gdjs.GAME_32OVERCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.GAME_32OVERCode.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.GAME_32OVERCode.GDperdiste_9595paObjects1.length = 0;
gdjs.GAME_32OVERCode.GDperdiste_9595paObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTinyGreyLeaderboardDialogObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTinyGreyLeaderboardDialogObjects2.length = 0;
gdjs.GAME_32OVERCode.GDGraveyard_9595BackgroundObjects1.length = 0;
gdjs.GAME_32OVERCode.GDGraveyard_9595BackgroundObjects2.length = 0;
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.GAME_32OVERCode.GDOperatorPlusBitmapTextObjects1.length = 0;
gdjs.GAME_32OVERCode.GDOperatorPlusBitmapTextObjects2.length = 0;
gdjs.GAME_32OVERCode.GDDinoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDDinoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDGoldObjects1.length = 0;
gdjs.GAME_32OVERCode.GDGoldObjects2.length = 0;
gdjs.GAME_32OVERCode.GDsubvidatituloObjects1.length = 0;
gdjs.GAME_32OVERCode.GDsubvidatituloObjects2.length = 0;
gdjs.GAME_32OVERCode.GDsubvidaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDsubvidaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDStar_9595GoldObjects1.length = 0;
gdjs.GAME_32OVERCode.GDStar_9595GoldObjects2.length = 0;
gdjs.GAME_32OVERCode.GDhud_9595coinObjects1.length = 0;
gdjs.GAME_32OVERCode.GDhud_9595coinObjects2.length = 0;
gdjs.GAME_32OVERCode.GDdinotxtObjects1.length = 0;
gdjs.GAME_32OVERCode.GDdinotxtObjects2.length = 0;
gdjs.GAME_32OVERCode.GDtxtmonedaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDtxtmonedaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDDino2Objects1.length = 0;
gdjs.GAME_32OVERCode.GDDino2Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMonsterObjects1.length = 0;
gdjs.GAME_32OVERCode.GDMonsterObjects2.length = 0;
gdjs.GAME_32OVERCode.GDSIKEObjects1.length = 0;
gdjs.GAME_32OVERCode.GDSIKEObjects2.length = 0;
gdjs.GAME_32OVERCode.GDSECRETObjects1.length = 0;
gdjs.GAME_32OVERCode.GDSECRETObjects2.length = 0;
gdjs.GAME_32OVERCode.GDto_9595move_9595rightObjects1.length = 0;
gdjs.GAME_32OVERCode.GDto_9595move_9595rightObjects2.length = 0;
gdjs.GAME_32OVERCode.GDto_9595move_9595leftObjects1.length = 0;
gdjs.GAME_32OVERCode.GDto_9595move_9595leftObjects2.length = 0;
gdjs.GAME_32OVERCode.GDto_9595jumpObjects1.length = 0;
gdjs.GAME_32OVERCode.GDto_9595jumpObjects2.length = 0;
gdjs.GAME_32OVERCode.GDFireballObjects1.length = 0;
gdjs.GAME_32OVERCode.GDFireballObjects2.length = 0;
gdjs.GAME_32OVERCode.GDfireballObjects1.length = 0;
gdjs.GAME_32OVERCode.GDfireballObjects2.length = 0;
gdjs.GAME_32OVERCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.GAME_32OVERCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.GAME_32OVERCode.GDAREA_9595RIEGOObjects1.length = 0;
gdjs.GAME_32OVERCode.GDAREA_9595RIEGOObjects2.length = 0;
gdjs.GAME_32OVERCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.GAME_32OVERCode.GDFloater_9595enemyObjects2.length = 0;

gdjs.GAME_32OVERCode.eventsList0(runtimeScene);
gdjs.GAME_32OVERCode.GDTinyGreenButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTinyGreenButtonObjects2.length = 0;
gdjs.GAME_32OVERCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.GAME_32OVERCode.GDRedButtonWithStoneFrameObjects2.length = 0;
gdjs.GAME_32OVERCode.GDperdiste_9595paObjects1.length = 0;
gdjs.GAME_32OVERCode.GDperdiste_9595paObjects2.length = 0;
gdjs.GAME_32OVERCode.GDTinyGreyLeaderboardDialogObjects1.length = 0;
gdjs.GAME_32OVERCode.GDTinyGreyLeaderboardDialogObjects2.length = 0;
gdjs.GAME_32OVERCode.GDGraveyard_9595BackgroundObjects1.length = 0;
gdjs.GAME_32OVERCode.GDGraveyard_9595BackgroundObjects2.length = 0;
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.GAME_32OVERCode.GDOperatorPlusBitmapTextObjects1.length = 0;
gdjs.GAME_32OVERCode.GDOperatorPlusBitmapTextObjects2.length = 0;
gdjs.GAME_32OVERCode.GDDinoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDDinoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.GAME_32OVERCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.GAME_32OVERCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDGoldObjects1.length = 0;
gdjs.GAME_32OVERCode.GDGoldObjects2.length = 0;
gdjs.GAME_32OVERCode.GDsubvidatituloObjects1.length = 0;
gdjs.GAME_32OVERCode.GDsubvidatituloObjects2.length = 0;
gdjs.GAME_32OVERCode.GDsubvidaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDsubvidaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDStar_9595GoldObjects1.length = 0;
gdjs.GAME_32OVERCode.GDStar_9595GoldObjects2.length = 0;
gdjs.GAME_32OVERCode.GDhud_9595coinObjects1.length = 0;
gdjs.GAME_32OVERCode.GDhud_9595coinObjects2.length = 0;
gdjs.GAME_32OVERCode.GDdinotxtObjects1.length = 0;
gdjs.GAME_32OVERCode.GDdinotxtObjects2.length = 0;
gdjs.GAME_32OVERCode.GDtxtmonedaObjects1.length = 0;
gdjs.GAME_32OVERCode.GDtxtmonedaObjects2.length = 0;
gdjs.GAME_32OVERCode.GDDino2Objects1.length = 0;
gdjs.GAME_32OVERCode.GDDino2Objects2.length = 0;
gdjs.GAME_32OVERCode.GDMonsterObjects1.length = 0;
gdjs.GAME_32OVERCode.GDMonsterObjects2.length = 0;
gdjs.GAME_32OVERCode.GDSIKEObjects1.length = 0;
gdjs.GAME_32OVERCode.GDSIKEObjects2.length = 0;
gdjs.GAME_32OVERCode.GDSECRETObjects1.length = 0;
gdjs.GAME_32OVERCode.GDSECRETObjects2.length = 0;
gdjs.GAME_32OVERCode.GDto_9595move_9595rightObjects1.length = 0;
gdjs.GAME_32OVERCode.GDto_9595move_9595rightObjects2.length = 0;
gdjs.GAME_32OVERCode.GDto_9595move_9595leftObjects1.length = 0;
gdjs.GAME_32OVERCode.GDto_9595move_9595leftObjects2.length = 0;
gdjs.GAME_32OVERCode.GDto_9595jumpObjects1.length = 0;
gdjs.GAME_32OVERCode.GDto_9595jumpObjects2.length = 0;
gdjs.GAME_32OVERCode.GDFireballObjects1.length = 0;
gdjs.GAME_32OVERCode.GDFireballObjects2.length = 0;
gdjs.GAME_32OVERCode.GDfireballObjects1.length = 0;
gdjs.GAME_32OVERCode.GDfireballObjects2.length = 0;
gdjs.GAME_32OVERCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.GAME_32OVERCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.GAME_32OVERCode.GDAREA_9595RIEGOObjects1.length = 0;
gdjs.GAME_32OVERCode.GDAREA_9595RIEGOObjects2.length = 0;
gdjs.GAME_32OVERCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.GAME_32OVERCode.GDFloater_9595enemyObjects2.length = 0;


return;

}

gdjs['GAME_32OVERCode'] = gdjs.GAME_32OVERCode;
