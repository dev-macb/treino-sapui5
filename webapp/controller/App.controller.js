sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
   "use strict";

   return Controller.extend("ui5.walkthrough.controller.App", {
      onInit() {
         const oData = { recipient : { name : "Mundo" }};
         const oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
      },

      onMostrarAlerta() {
         MessageToast.show("Olá Mundo!!!");
      }
   });
});