gdjs.MENUCode = {};
gdjs.MENUCode.localVariables = [];
gdjs.MENUCode.idToCallbackMap = new Map();
gdjs.MENUCode.GDGraveyard_9595BackgroundObjects1= [];
gdjs.MENUCode.GDGraveyard_9595BackgroundObjects2= [];
gdjs.MENUCode.GDBlackDecoratedButtonObjects1= [];
gdjs.MENUCode.GDBlackDecoratedButtonObjects2= [];
gdjs.MENUCode.GDNotJamOldStyle11Objects1= [];
gdjs.MENUCode.GDNotJamOldStyle11Objects2= [];
gdjs.MENUCode.GDSmallGreenButtonObjects1= [];
gdjs.MENUCode.GDSmallGreenButtonObjects2= [];
gdjs.MENUCode.GDDinoObjects1= [];
gdjs.MENUCode.GDDinoObjects2= [];
gdjs.MENUCode.GDtrigger_9595arribaObjects1= [];
gdjs.MENUCode.GDtrigger_9595arribaObjects2= [];
gdjs.MENUCode.GDtrigger_9595abajoObjects1= [];
gdjs.MENUCode.GDtrigger_9595abajoObjects2= [];
gdjs.MENUCode.GDtrigger_9595derechaObjects1= [];
gdjs.MENUCode.GDtrigger_9595derechaObjects2= [];
gdjs.MENUCode.GDtrigger_9595izquierdaObjects1= [];
gdjs.MENUCode.GDtrigger_9595izquierdaObjects2= [];
gdjs.MENUCode.GDGoldObjects1= [];
gdjs.MENUCode.GDGoldObjects2= [];
gdjs.MENUCode.GDsubvidatituloObjects1= [];
gdjs.MENUCode.GDsubvidatituloObjects2= [];
gdjs.MENUCode.GDsubvidaObjects1= [];
gdjs.MENUCode.GDsubvidaObjects2= [];
gdjs.MENUCode.GDStar_9595GoldObjects1= [];
gdjs.MENUCode.GDStar_9595GoldObjects2= [];
gdjs.MENUCode.GDhud_9595coinObjects1= [];
gdjs.MENUCode.GDhud_9595coinObjects2= [];
gdjs.MENUCode.GDdinotxtObjects1= [];
gdjs.MENUCode.GDdinotxtObjects2= [];
gdjs.MENUCode.GDtxtmonedaObjects1= [];
gdjs.MENUCode.GDtxtmonedaObjects2= [];
gdjs.MENUCode.GDDino2Objects1= [];
gdjs.MENUCode.GDDino2Objects2= [];
gdjs.MENUCode.GDMonsterObjects1= [];
gdjs.MENUCode.GDMonsterObjects2= [];
gdjs.MENUCode.GDSIKEObjects1= [];
gdjs.MENUCode.GDSIKEObjects2= [];
gdjs.MENUCode.GDSECRETObjects1= [];
gdjs.MENUCode.GDSECRETObjects2= [];
gdjs.MENUCode.GDto_9595move_9595rightObjects1= [];
gdjs.MENUCode.GDto_9595move_9595rightObjects2= [];
gdjs.MENUCode.GDto_9595move_9595leftObjects1= [];
gdjs.MENUCode.GDto_9595move_9595leftObjects2= [];
gdjs.MENUCode.GDto_9595jumpObjects1= [];
gdjs.MENUCode.GDto_9595jumpObjects2= [];
gdjs.MENUCode.GDFireballObjects1= [];
gdjs.MENUCode.GDFireballObjects2= [];
gdjs.MENUCode.GDfireballObjects1= [];
gdjs.MENUCode.GDfireballObjects2= [];
gdjs.MENUCode.GDWalking_9595enemyObjects1= [];
gdjs.MENUCode.GDWalking_9595enemyObjects2= [];
gdjs.MENUCode.GDAREA_9595RIEGOObjects1= [];
gdjs.MENUCode.GDAREA_9595RIEGOObjects2= [];
gdjs.MENUCode.GDFloater_9595enemyObjects1= [];
gdjs.MENUCode.GDFloater_9595enemyObjects2= [];


gdjs.MENUCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenButton"), gdjs.MENUCode.GDSmallGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MENUCode.GDSmallGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.MENUCode.GDSmallGreenButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MENUCode.GDSmallGreenButtonObjects1[k] = gdjs.MENUCode.GDSmallGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.MENUCode.GDSmallGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ESCENA1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.MENUCode.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MENUCode.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.MENUCode.GDBlackDecoratedButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MENUCode.GDBlackDecoratedButtonObjects1[k] = gdjs.MENUCode.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.MENUCode.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "INSTRUCCIONES", false);
}
}

}


};

gdjs.MENUCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MENUCode.GDGraveyard_9595BackgroundObjects1.length = 0;
gdjs.MENUCode.GDGraveyard_9595BackgroundObjects2.length = 0;
gdjs.MENUCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.MENUCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.MENUCode.GDNotJamOldStyle11Objects1.length = 0;
gdjs.MENUCode.GDNotJamOldStyle11Objects2.length = 0;
gdjs.MENUCode.GDSmallGreenButtonObjects1.length = 0;
gdjs.MENUCode.GDSmallGreenButtonObjects2.length = 0;
gdjs.MENUCode.GDDinoObjects1.length = 0;
gdjs.MENUCode.GDDinoObjects2.length = 0;
gdjs.MENUCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.MENUCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.MENUCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.MENUCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.MENUCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.MENUCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.MENUCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.MENUCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.MENUCode.GDGoldObjects1.length = 0;
gdjs.MENUCode.GDGoldObjects2.length = 0;
gdjs.MENUCode.GDsubvidatituloObjects1.length = 0;
gdjs.MENUCode.GDsubvidatituloObjects2.length = 0;
gdjs.MENUCode.GDsubvidaObjects1.length = 0;
gdjs.MENUCode.GDsubvidaObjects2.length = 0;
gdjs.MENUCode.GDStar_9595GoldObjects1.length = 0;
gdjs.MENUCode.GDStar_9595GoldObjects2.length = 0;
gdjs.MENUCode.GDhud_9595coinObjects1.length = 0;
gdjs.MENUCode.GDhud_9595coinObjects2.length = 0;
gdjs.MENUCode.GDdinotxtObjects1.length = 0;
gdjs.MENUCode.GDdinotxtObjects2.length = 0;
gdjs.MENUCode.GDtxtmonedaObjects1.length = 0;
gdjs.MENUCode.GDtxtmonedaObjects2.length = 0;
gdjs.MENUCode.GDDino2Objects1.length = 0;
gdjs.MENUCode.GDDino2Objects2.length = 0;
gdjs.MENUCode.GDMonsterObjects1.length = 0;
gdjs.MENUCode.GDMonsterObjects2.length = 0;
gdjs.MENUCode.GDSIKEObjects1.length = 0;
gdjs.MENUCode.GDSIKEObjects2.length = 0;
gdjs.MENUCode.GDSECRETObjects1.length = 0;
gdjs.MENUCode.GDSECRETObjects2.length = 0;
gdjs.MENUCode.GDto_9595move_9595rightObjects1.length = 0;
gdjs.MENUCode.GDto_9595move_9595rightObjects2.length = 0;
gdjs.MENUCode.GDto_9595move_9595leftObjects1.length = 0;
gdjs.MENUCode.GDto_9595move_9595leftObjects2.length = 0;
gdjs.MENUCode.GDto_9595jumpObjects1.length = 0;
gdjs.MENUCode.GDto_9595jumpObjects2.length = 0;
gdjs.MENUCode.GDFireballObjects1.length = 0;
gdjs.MENUCode.GDFireballObjects2.length = 0;
gdjs.MENUCode.GDfireballObjects1.length = 0;
gdjs.MENUCode.GDfireballObjects2.length = 0;
gdjs.MENUCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.MENUCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.MENUCode.GDAREA_9595RIEGOObjects1.length = 0;
gdjs.MENUCode.GDAREA_9595RIEGOObjects2.length = 0;
gdjs.MENUCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.MENUCode.GDFloater_9595enemyObjects2.length = 0;

gdjs.MENUCode.eventsList0(runtimeScene);
gdjs.MENUCode.GDGraveyard_9595BackgroundObjects1.length = 0;
gdjs.MENUCode.GDGraveyard_9595BackgroundObjects2.length = 0;
gdjs.MENUCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.MENUCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.MENUCode.GDNotJamOldStyle11Objects1.length = 0;
gdjs.MENUCode.GDNotJamOldStyle11Objects2.length = 0;
gdjs.MENUCode.GDSmallGreenButtonObjects1.length = 0;
gdjs.MENUCode.GDSmallGreenButtonObjects2.length = 0;
gdjs.MENUCode.GDDinoObjects1.length = 0;
gdjs.MENUCode.GDDinoObjects2.length = 0;
gdjs.MENUCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.MENUCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.MENUCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.MENUCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.MENUCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.MENUCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.MENUCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.MENUCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.MENUCode.GDGoldObjects1.length = 0;
gdjs.MENUCode.GDGoldObjects2.length = 0;
gdjs.MENUCode.GDsubvidatituloObjects1.length = 0;
gdjs.MENUCode.GDsubvidatituloObjects2.length = 0;
gdjs.MENUCode.GDsubvidaObjects1.length = 0;
gdjs.MENUCode.GDsubvidaObjects2.length = 0;
gdjs.MENUCode.GDStar_9595GoldObjects1.length = 0;
gdjs.MENUCode.GDStar_9595GoldObjects2.length = 0;
gdjs.MENUCode.GDhud_9595coinObjects1.length = 0;
gdjs.MENUCode.GDhud_9595coinObjects2.length = 0;
gdjs.MENUCode.GDdinotxtObjects1.length = 0;
gdjs.MENUCode.GDdinotxtObjects2.length = 0;
gdjs.MENUCode.GDtxtmonedaObjects1.length = 0;
gdjs.MENUCode.GDtxtmonedaObjects2.length = 0;
gdjs.MENUCode.GDDino2Objects1.length = 0;
gdjs.MENUCode.GDDino2Objects2.length = 0;
gdjs.MENUCode.GDMonsterObjects1.length = 0;
gdjs.MENUCode.GDMonsterObjects2.length = 0;
gdjs.MENUCode.GDSIKEObjects1.length = 0;
gdjs.MENUCode.GDSIKEObjects2.length = 0;
gdjs.MENUCode.GDSECRETObjects1.length = 0;
gdjs.MENUCode.GDSECRETObjects2.length = 0;
gdjs.MENUCode.GDto_9595move_9595rightObjects1.length = 0;
gdjs.MENUCode.GDto_9595move_9595rightObjects2.length = 0;
gdjs.MENUCode.GDto_9595move_9595leftObjects1.length = 0;
gdjs.MENUCode.GDto_9595move_9595leftObjects2.length = 0;
gdjs.MENUCode.GDto_9595jumpObjects1.length = 0;
gdjs.MENUCode.GDto_9595jumpObjects2.length = 0;
gdjs.MENUCode.GDFireballObjects1.length = 0;
gdjs.MENUCode.GDFireballObjects2.length = 0;
gdjs.MENUCode.GDfireballObjects1.length = 0;
gdjs.MENUCode.GDfireballObjects2.length = 0;
gdjs.MENUCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.MENUCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.MENUCode.GDAREA_9595RIEGOObjects1.length = 0;
gdjs.MENUCode.GDAREA_9595RIEGOObjects2.length = 0;
gdjs.MENUCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.MENUCode.GDFloater_9595enemyObjects2.length = 0;


return;

}

gdjs['MENUCode'] = gdjs.MENUCode;
