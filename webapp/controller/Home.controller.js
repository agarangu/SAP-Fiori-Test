sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], (Controller, JSONModel, MessageBox) => {
    "use strict";

    return Controller.extend("org.bootcamp.sapfioritest.controller.Home", {
        onInit() {
            const oModel = new JSONModel({"InputValue": ""});
            this.getView().setModel(oModel);
        },
        showMessage: function () {
            var message = this.getView().getModel("i18n").getResourceBundle().getText("message");
            var name = this.getView().getModel().getProperty("/InputValue");
            if(name) message +=name;
            else message += "world";
            MessageBox.information(message);
        }
    });
});