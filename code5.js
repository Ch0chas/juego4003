gdjs.INSTRUCCIONESCode = {};
gdjs.INSTRUCCIONESCode.localVariables = [];
gdjs.INSTRUCCIONESCode.idToCallbackMap = new Map();
gdjs.INSTRUCCIONESCode.GDGraveyard_9595BackgroundObjects1= [];
gdjs.INSTRUCCIONESCode.GDGraveyard_9595BackgroundObjects2= [];
gdjs.INSTRUCCIONESCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.INSTRUCCIONESCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.INSTRUCCIONESCode.GDDpad_9595ButtonObjects1= [];
gdjs.INSTRUCCIONESCode.GDDpad_9595ButtonObjects2= [];
gdjs.INSTRUCCIONESCode.GDDpad_9595Button2Objects1= [];
gdjs.INSTRUCCIONESCode.GDDpad_9595Button2Objects2= [];
gdjs.INSTRUCCIONESCode.GDSmallWhiteButtonObjects1= [];
gdjs.INSTRUCCIONESCode.GDSmallWhiteButtonObjects2= [];
gdjs.INSTRUCCIONESCode.GDDinoObjects1= [];
gdjs.INSTRUCCIONESCode.GDDinoObjects2= [];
gdjs.INSTRUCCIONESCode.GDtrigger_9595arribaObjects1= [];
gdjs.INSTRUCCIONESCode.GDtrigger_9595arribaObjects2= [];
gdjs.INSTRUCCIONESCode.GDtrigger_9595abajoObjects1= [];
gdjs.INSTRUCCIONESCode.GDtrigger_9595abajoObjects2= [];
gdjs.INSTRUCCIONESCode.GDtrigger_9595derechaObjects1= [];
gdjs.INSTRUCCIONESCode.GDtrigger_9595derechaObjects2= [];
gdjs.INSTRUCCIONESCode.GDtrigger_9595izquierdaObjects1= [];
gdjs.INSTRUCCIONESCode.GDtrigger_9595izquierdaObjects2= [];
gdjs.INSTRUCCIONESCode.GDGoldObjects1= [];
gdjs.INSTRUCCIONESCode.GDGoldObjects2= [];
gdjs.INSTRUCCIONESCode.GDsubvidatituloObjects1= [];
gdjs.INSTRUCCIONESCode.GDsubvidatituloObjects2= [];
gdjs.INSTRUCCIONESCode.GDsubvidaObjects1= [];
gdjs.INSTRUCCIONESCode.GDsubvidaObjects2= [];
gdjs.INSTRUCCIONESCode.GDStar_9595GoldObjects1= [];
gdjs.INSTRUCCIONESCode.GDStar_9595GoldObjects2= [];
gdjs.INSTRUCCIONESCode.GDhud_9595coinObjects1= [];
gdjs.INSTRUCCIONESCode.GDhud_9595coinObjects2= [];
gdjs.INSTRUCCIONESCode.GDdinotxtObjects1= [];
gdjs.INSTRUCCIONESCode.GDdinotxtObjects2= [];
gdjs.INSTRUCCIONESCode.GDtxtmonedaObjects1= [];
gdjs.INSTRUCCIONESCode.GDtxtmonedaObjects2= [];
gdjs.INSTRUCCIONESCode.GDDino2Objects1= [];
gdjs.INSTRUCCIONESCode.GDDino2Objects2= [];
gdjs.INSTRUCCIONESCode.GDMonsterObjects1= [];
gdjs.INSTRUCCIONESCode.GDMonsterObjects2= [];
gdjs.INSTRUCCIONESCode.GDSIKEObjects1= [];
gdjs.INSTRUCCIONESCode.GDSIKEObjects2= [];
gdjs.INSTRUCCIONESCode.GDSECRETObjects1= [];
gdjs.INSTRUCCIONESCode.GDSECRETObjects2= [];
gdjs.INSTRUCCIONESCode.GDto_9595move_9595rightObjects1= [];
gdjs.INSTRUCCIONESCode.GDto_9595move_9595rightObjects2= [];
gdjs.INSTRUCCIONESCode.GDto_9595move_9595leftObjects1= [];
gdjs.INSTRUCCIONESCode.GDto_9595move_9595leftObjects2= [];
gdjs.INSTRUCCIONESCode.GDto_9595jumpObjects1= [];
gdjs.INSTRUCCIONESCode.GDto_9595jumpObjects2= [];
gdjs.INSTRUCCIONESCode.GDFireballObjects1= [];
gdjs.INSTRUCCIONESCode.GDFireballObjects2= [];
gdjs.INSTRUCCIONESCode.GDfireballObjects1= [];
gdjs.INSTRUCCIONESCode.GDfireballObjects2= [];
gdjs.INSTRUCCIONESCode.GDWalking_9595enemyObjects1= [];
gdjs.INSTRUCCIONESCode.GDWalking_9595enemyObjects2= [];
gdjs.INSTRUCCIONESCode.GDAREA_9595RIEGOObjects1= [];
gdjs.INSTRUCCIONESCode.GDAREA_9595RIEGOObjects2= [];
gdjs.INSTRUCCIONESCode.GDFloater_9595enemyObjects1= [];
gdjs.INSTRUCCIONESCode.GDFloater_9595enemyObjects2= [];


gdjs.INSTRUCCIONESCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.INSTRUCCIONESCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.INSTRUCCIONESCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.INSTRUCCIONESCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.INSTRUCCIONESCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.INSTRUCCIONESCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.INSTRUCCIONESCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}
}

}


};

gdjs.INSTRUCCIONESCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.INSTRUCCIONESCode.GDGraveyard_9595BackgroundObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDGraveyard_9595BackgroundObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDDpad_9595ButtonObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDDpad_9595ButtonObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDDpad_9595Button2Objects1.length = 0;
gdjs.INSTRUCCIONESCode.GDDpad_9595Button2Objects2.length = 0;
gdjs.INSTRUCCIONESCode.GDSmallWhiteButtonObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDSmallWhiteButtonObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDDinoObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDDinoObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDGoldObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDGoldObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDsubvidatituloObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDsubvidatituloObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDsubvidaObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDsubvidaObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDStar_9595GoldObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDStar_9595GoldObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDhud_9595coinObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDhud_9595coinObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDdinotxtObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDdinotxtObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDtxtmonedaObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDtxtmonedaObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDDino2Objects1.length = 0;
gdjs.INSTRUCCIONESCode.GDDino2Objects2.length = 0;
gdjs.INSTRUCCIONESCode.GDMonsterObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDMonsterObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDSIKEObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDSIKEObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDSECRETObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDSECRETObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDto_9595move_9595rightObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDto_9595move_9595rightObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDto_9595move_9595leftObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDto_9595move_9595leftObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDto_9595jumpObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDto_9595jumpObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDFireballObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDFireballObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDfireballObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDfireballObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDAREA_9595RIEGOObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDAREA_9595RIEGOObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDFloater_9595enemyObjects2.length = 0;

gdjs.INSTRUCCIONESCode.eventsList0(runtimeScene);
gdjs.INSTRUCCIONESCode.GDGraveyard_9595BackgroundObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDGraveyard_9595BackgroundObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDDpad_9595ButtonObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDDpad_9595ButtonObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDDpad_9595Button2Objects1.length = 0;
gdjs.INSTRUCCIONESCode.GDDpad_9595Button2Objects2.length = 0;
gdjs.INSTRUCCIONESCode.GDSmallWhiteButtonObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDSmallWhiteButtonObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDDinoObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDDinoObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDtrigger_9595arribaObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDtrigger_9595arribaObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDtrigger_9595abajoObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDtrigger_9595abajoObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDtrigger_9595derechaObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDtrigger_9595derechaObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDtrigger_9595izquierdaObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDtrigger_9595izquierdaObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDGoldObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDGoldObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDsubvidatituloObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDsubvidatituloObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDsubvidaObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDsubvidaObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDStar_9595GoldObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDStar_9595GoldObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDhud_9595coinObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDhud_9595coinObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDdinotxtObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDdinotxtObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDtxtmonedaObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDtxtmonedaObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDDino2Objects1.length = 0;
gdjs.INSTRUCCIONESCode.GDDino2Objects2.length = 0;
gdjs.INSTRUCCIONESCode.GDMonsterObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDMonsterObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDSIKEObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDSIKEObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDSECRETObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDSECRETObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDto_9595move_9595rightObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDto_9595move_9595rightObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDto_9595move_9595leftObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDto_9595move_9595leftObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDto_9595jumpObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDto_9595jumpObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDFireballObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDFireballObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDfireballObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDfireballObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDWalking_9595enemyObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDWalking_9595enemyObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDAREA_9595RIEGOObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDAREA_9595RIEGOObjects2.length = 0;
gdjs.INSTRUCCIONESCode.GDFloater_9595enemyObjects1.length = 0;
gdjs.INSTRUCCIONESCode.GDFloater_9595enemyObjects2.length = 0;


return;

}

gdjs['INSTRUCCIONESCode'] = gdjs.INSTRUCCIONESCode;
