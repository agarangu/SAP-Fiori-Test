sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], (Controller, JSONModel, MessageBox) => {
    "use strict";

    return Controller.extend("org.bootcamp.sapfioritest.controller.Home", {
        onInit() {
            const oModel = new JSONModel({"InputValue": ""});
            this.getView().setModel(oModel, "UserInput");
            const oModel2 = new JSONModel({"HelloWorld": false, "Products": true});
            this.getView().setModel(oModel2, "Display");
        },
        showMessage: function () {            
            var name = this.getView().getModel("UserInput").getProperty("/InputValue");
            if(!name) name = "world";
            var message = this.getView().getModel("i18n").getResourceBundle().getText("message", [name]);
            MessageBox.information(message);
        }
    });
});