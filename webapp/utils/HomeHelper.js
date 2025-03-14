sap.ui.define([
    "org/bootcamp/sapfioritest/utils/HomeService",
    "sap/ui/model/json/JSONModel",
], function(HomeService, JSONModel) {
    "use strict";
    return {
        init: function (oNorthwindModel) {
			this._oNorthwindModel = oNorthwindModel;
		},

		getDataProducts: async function() {
            let oFilters = [];
            return HomeService.readProducts(this._oNorthwindModel, oFilters);
        },

        setProductModel: async function (oController, oData) {
            let oListModel = oController.getOwnerComponent().getModel("ProductCollection");
            if (!oListModel) {
                const oModel = new JSONModel([]);
                oModel.setSizeLimit(10);
                oController.getOwnerComponent().setModel(oModel, "ProductCollection");
                oListModel = oController.getOwnerComponent().getModel("ProductCollection");
            }
            oListModel.setData(oData);
        }
    };
}); 