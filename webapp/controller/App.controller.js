sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], (Controller, MessageToast, JSONModel, ResourceModel) => {
   "use strict";

   return Controller.extend("ui5.walkthrough.controller.App", {
      onInit() {
         // Definir modelo de dados em exibição
         const oData = { recipient : { name : "Mundo" }};
         const oModel = new JSONModel(oData);
         this.getView().setModel(oModel);

         // Definir modelo i18n na exibição
         const i18nModel = new ResourceModel({ bundleName: "ui5.walkthrough.i18n.i18n" });
         this.getView().setModel(i18nModel, "i18n");
      },

      onMostrarAlerta() {
         // Lê a mensagem do modelo i18n
         const oBundle = this.getView().getModel("i18n").getResourceBundle();
         const sRecipient = this.getView().getModel().getProperty("/recipient/name");
         const sMsg = oBundle.getText("helloMsg", [sRecipient]);

         // Mostrar mensagem
         MessageToast.show(sMsg);
      }
   });
});