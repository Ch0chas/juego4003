gdjs.YOU_32WINCode = {};
gdjs.YOU_32WINCode.localVariables = [];
gdjs.YOU_32WINCode.idToCallbackMap = new Map();
gdjs.YOU_32WINCode.GDTinyGreenButtonObjects1= [];
gdjs.YOU_32WINCode.GDTinyGreenButtonObjects2= [];
gdjs.YOU_32WINCode.GDSmallGreyButtonObjects1= [];
gdjs.YOU_32WINCode.GDSmallGreyButtonObjects2= [];
gdjs.YOU_32WINCode.GDganarObjects1= [];
gdjs.YOU_32WINCode.GDganarObjects2= [];
gdjs.YOU_32WINCode.GDBlackDecoratedButtonObjects1= [];
gdjs.YOU_32WINCode.GDBlackDecoratedButtonObjects2= [];
gdjs.YOU_32WINCode.GDDinoObjects1= [];
gdjs.YOU_32WINCode.GDDinoObjects2= [];
gdjs.YOU_32WINCode.GDtrigger_9595arribaObjects1= [];
gdjs.YOU_32WINCode.GDtrigger_9595arribaObjects2= [];
gdjs.YOU_32WINCode.GDtrigger_9595abajoObjects1= [];
gdjs.YOU_32WINCode.GDtrigger_9595abajoObjects2= [];
gdjs.YOU_32WINCode.GDtrigger_9595derechaObjects1= [];
gdjs.YOU_32WINCode.GDtrigger_9595derechaObjects2= [];
gdjs.YOU_32WINCode.GDtrigger_9595izquierdaObjects1= [];
gdjs.YOU_32WINCode.GDtrigger_9595izquierdaObjects2= [];
gdjs.YOU_32WINCode.GDGoldObjects1= [];
gdjs.YOU_32WINCode.GDGoldObjects2= [];
gdjs.YOU_32WINCode.GDsubvidatituloObjects1= [];
gdjs.YOU_32WINCode.GDsubvidatituloObjects2= [];
gdjs.YOU_32WINCode.GDsubvidaObjects1= [];
gdjs.YOU_32WINCode.GDsubvidaObjects2= [];
gdjs.YOU_32WINCode.GDStar_9595GoldObjects1= [];
gdjs.YOU_32WINCode.GDStar_9595GoldObjects2= [];
gdjs.YOU_32WINCode.GDhud_9595coinObjects1= [];
gdjs.YOU_32WINCode.GDhud_9595coinObjects2= [];
gdjs.YOU_32WINCode.GDdinotxtObjects1= [];
gdjs.YOU_32WINCode.GDdinotxtObjects2= [];
gdjs.YOU_32WINCode.GDtxtmonedaObjects1= [];
gdjs.YOU_32WINCode.GDtxtmonedaObjects2= [];
gdjs.YOU_32WINCode.GDDino2Objects1= [];
gdjs.YOU_32WINCode.GDDino2Objects2= [];
gdjs.YOU_32WINCode.GDMonsterObjects1= [];
gdjs.YOU_32WINCode.GDMonsterObjects2= [];
gdjs.YOU_32WINCode.GDSIKEObjects1= [];
gdjs.YOU_32WINCode.GDSIKEObjects2= [];
gdjs.YOU_32WINCode.GDSECRETObjects1= [];
gdjs.YOU_32WINCode.GDSECRETObjects2= [];
gdjs.YOU_32WINCode.GDto_9595move_9595rightObjects1= [];
gdjs.YOU_32WINCode.GDto_9595move_9595rightObjects2= [];
gdjs.YOU_32WINCode.GDto_9595move_9595leftObjects1= [];
gdjs.YOU_32WINCode.GDto_9595move_9595leftObjects2= [];
gdjs.YOU_32WINCode.GDto_9595jumpObjects1= [];
gdjs.YOU_32WINCode.GDto_9595jumpObjects2= [];
gdjs.YOU_32WINCode.GDFireballObjects1= [];
gdjs.YOU_32WINCode.GDFireballObjects2= [];
gdjs.YOU_32WINCode.GDfireballObjects1= [];
gdjs.YOU_32WINCode.GDfireballObjects2= [];
gdjs.YOU_32WINCode.GDWalking_9595enemyObjects1= [];
gdjs.YOU_32WINCode.GDWalking_9595enemyObjects2= [];
gdjs.YOU_32WINCode.GDAREA_9595RIEGOObjects1= [];
gdjs.YOU_32WINCode.GDAREA_9595RIEGOObjects2= [];
gdjs.YOU_32WINCode.GDFloater_9595enemyObjects1= [];
gdjs.YOU_32WINCode.GDFloater_9595enemyObjects2= [];


gdjs.YOU_32WINCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.YOU_32WINCode.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.YOU_32WINCode.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.YOU_32WINCode.GDBlackDecoratedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.YOU_32WINCode.GDBlackDecoratedButtonObjects1[k] = gdjs.YOU_32WINCode.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.YOU_32WINCode.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ESCENA1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreyButton"), gdjs.YOU_32WINCode.GDSmallGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.YOU_32WINCode.GDSmallGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.YOU_32WINCode.GDSmallGreyButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.YOU_32WINCode.GDSmallGreyButtonObjects1[k] = gdjs.YOU_32WINCode.GDSmallGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.YOU_32WINCode.GDSmallGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}
}

}


};

gdjs.YOU_32WINCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.YOU_32WINCode.GDTinyGreenButtonObjects1.length = 0;
gdjs.YOU_32WINCode.GDTinyGreenButtonObjects2.length = 0;
gdjs.YOU_32WINCode.GDSmallGreyButtonObjects1.length = 0;
gdjs.YOU_32WINCode.GDSmallGreyButtonObjects2.length = 0;
gdjs.YOU_32WINCode.GDganarObjects1.length = 0;
gdjs.YOU_32WINCode.GDganarObjects2.length = 0;
gdjs.YOU_32WINCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.YOU_32WINCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.YOU_32WINCode.GDDinoObjects1.length = 0;
gdjs.YOU_32WINCode.GDDinoObjects2.length = 0;
gdjs.YOU_32WINCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.YOU_32WINCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.YOU_32WINCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.YOU_32WINCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.YOU_32WINCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.YOU_32WINCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.YOU_32WINCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.YOU_32WINCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.YOU_32WINCode.GDGoldObjects1.length = 0;
gdjs.YOU_32WINCode.GDGoldObjects2.length = 0;
gdjs.YOU_32WINCode.GDsubvidatituloObjects1.length = 0;
gdjs.YOU_32WINCode.GDsubvidatituloObjects2.length = 0;
gdjs.YOU_32WINCode.GDsubvidaObjects1.length = 0;
gdjs.YOU_32WINCode.GDsubvidaObjects2.length = 0;
gdjs.YOU_32WINCode.GDStar_9595GoldObjects1.length = 0;
gdjs.YOU_32WINCode.GDStar_9595GoldObjects2.length = 0;
gdjs.YOU_32WINCode.GDhud_9595coinObjects1.length = 0;
gdjs.YOU_32WINCode.GDhud_9595coinObjects2.length = 0;
gdjs.YOU_32WINCode.GDdinotxtObjects1.length = 0;
gdjs.YOU_32WINCode.GDdinotxtObjects2.length = 0;
gdjs.YOU_32WINCode.GDtxtmonedaObjects1.length = 0;
gdjs.YOU_32WINCode.GDtxtmonedaObjects2.length = 0;
gdjs.YOU_32WINCode.GDDino2Objects1.length = 0;
gdjs.YOU_32WINCode.GDDino2Objects2.length = 0;
gdjs.YOU_32WINCode.GDMonsterObjects1.length = 0;
gdjs.YOU_32WINCode.GDMonsterObjects2.length = 0;
gdjs.YOU_32WINCode.GDSIKEObjects1.length = 0;
gdjs.YOU_32WINCode.GDSIKEObjects2.length = 0;
gdjs.YOU_32WINCode.GDSECRETObjects1.length = 0;
gdjs.YOU_32WINCode.GDSECRETObjects2.length = 0;
gdjs.YOU_32WINCode.GDto_9595move_9595rightObjects1.length = 0;
gdjs.YOU_32WINCode.GDto_9595move_9595rightObjects2.length = 0;
gdjs.YOU_32WINCode.GDto_9595move_9595leftObjects1.length = 0;
gdjs.YOU_32WINCode.GDto_9595move_9595leftObjects2.length = 0;
gdjs.YOU_32WINCode.GDto_9595jumpObjects1.length = 0;
gdjs.YOU_32WINCode.GDto_9595jumpObjects2.length = 0;
gdjs.YOU_32WINCode.GDFireballObjects1.length = 0;
gdjs.YOU_32WINCode.GDFireballObjects2.length = 0;
gdjs.YOU_32WINCode.GDfireballObjects1.length = 0;
gdjs.YOU_32WINCode.GDfireballObjects2.length = 0;
gdjs.YOU_32WINCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.YOU_32WINCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.YOU_32WINCode.GDAREA_9595RIEGOObjects1.length = 0;
gdjs.YOU_32WINCode.GDAREA_9595RIEGOObjects2.length = 0;
gdjs.YOU_32WINCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.YOU_32WINCode.GDFloater_9595enemyObjects2.length = 0;

gdjs.YOU_32WINCode.eventsList0(runtimeScene);
gdjs.YOU_32WINCode.GDTinyGreenButtonObjects1.length = 0;
gdjs.YOU_32WINCode.GDTinyGreenButtonObjects2.length = 0;
gdjs.YOU_32WINCode.GDSmallGreyButtonObjects1.length = 0;
gdjs.YOU_32WINCode.GDSmallGreyButtonObjects2.length = 0;
gdjs.YOU_32WINCode.GDganarObjects1.length = 0;
gdjs.YOU_32WINCode.GDganarObjects2.length = 0;
gdjs.YOU_32WINCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.YOU_32WINCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.YOU_32WINCode.GDDinoObjects1.length = 0;
gdjs.YOU_32WINCode.GDDinoObjects2.length = 0;
gdjs.YOU_32WINCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.YOU_32WINCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.YOU_32WINCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.YOU_32WINCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.YOU_32WINCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.YOU_32WINCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.YOU_32WINCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.YOU_32WINCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.YOU_32WINCode.GDGoldObjects1.length = 0;
gdjs.YOU_32WINCode.GDGoldObjects2.length = 0;
gdjs.YOU_32WINCode.GDsubvidatituloObjects1.length = 0;
gdjs.YOU_32WINCode.GDsubvidatituloObjects2.length = 0;
gdjs.YOU_32WINCode.GDsubvidaObjects1.length = 0;
gdjs.YOU_32WINCode.GDsubvidaObjects2.length = 0;
gdjs.YOU_32WINCode.GDStar_9595GoldObjects1.length = 0;
gdjs.YOU_32WINCode.GDStar_9595GoldObjects2.length = 0;
gdjs.YOU_32WINCode.GDhud_9595coinObjects1.length = 0;
gdjs.YOU_32WINCode.GDhud_9595coinObjects2.length = 0;
gdjs.YOU_32WINCode.GDdinotxtObjects1.length = 0;
gdjs.YOU_32WINCode.GDdinotxtObjects2.length = 0;
gdjs.YOU_32WINCode.GDtxtmonedaObjects1.length = 0;
gdjs.YOU_32WINCode.GDtxtmonedaObjects2.length = 0;
gdjs.YOU_32WINCode.GDDino2Objects1.length = 0;
gdjs.YOU_32WINCode.GDDino2Objects2.length = 0;
gdjs.YOU_32WINCode.GDMonsterObjects1.length = 0;
gdjs.YOU_32WINCode.GDMonsterObjects2.length = 0;
gdjs.YOU_32WINCode.GDSIKEObjects1.length = 0;
gdjs.YOU_32WINCode.GDSIKEObjects2.length = 0;
gdjs.YOU_32WINCode.GDSECRETObjects1.length = 0;
gdjs.YOU_32WINCode.GDSECRETObjects2.length = 0;
gdjs.YOU_32WINCode.GDto_9595move_9595rightObjects1.length = 0;
gdjs.YOU_32WINCode.GDto_9595move_9595rightObjects2.length = 0;
gdjs.YOU_32WINCode.GDto_9595move_9595leftObjects1.length = 0;
gdjs.YOU_32WINCode.GDto_9595move_9595leftObjects2.length = 0;
gdjs.YOU_32WINCode.GDto_9595jumpObjects1.length = 0;
gdjs.YOU_32WINCode.GDto_9595jumpObjects2.length = 0;
gdjs.YOU_32WINCode.GDFireballObjects1.length = 0;
gdjs.YOU_32WINCode.GDFireballObjects2.length = 0;
gdjs.YOU_32WINCode.GDfireballObjects1.length = 0;
gdjs.YOU_32WINCode.GDfireballObjects2.length = 0;
gdjs.YOU_32WINCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.YOU_32WINCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.YOU_32WINCode.GDAREA_9595RIEGOObjects1.length = 0;
gdjs.YOU_32WINCode.GDAREA_9595RIEGOObjects2.length = 0;
gdjs.YOU_32WINCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.YOU_32WINCode.GDFloater_9595enemyObjects2.length = 0;


return;

}

gdjs['YOU_32WINCode'] = gdjs.YOU_32WINCode;
