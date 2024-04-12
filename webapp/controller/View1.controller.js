sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("zcursoaaapp1.controller.View1", {
			onInit: function () {
 
			},


			onPress: function () {
				
				var that = this ;

				 var idusuario = this.byId("idusuario").getValue();
				 var idnome = this.byId("idnome").getValue();
				 var idemail = this.byId("idemail").getValue();

				//if (!idusuario){
					//sap.m.MessageToast("Campo Usuario Obrigatorio");
					//sap.m.MessageBox.error("Campo Usuario Obrigatorio");
					//return; 
				//}

				 var oDados = {
					Usuario: idusuario,
					Nome: idnome,
					Email: idemail
				 }
				


				this.getView().getModel().create("/Curso001Set", oDados, { 
					success: function (oData, resposta) {

						that.byId("idusuario").setValue("");
						that.byId("idnome").setValue("");
						that.byId("idemail").setValue("");

						//sap.m.MessageBox.success("Sucesso");
					  
					},
					error: function (e) {
						sap.m.MessageBox.error("Erro");
					}
				  });
				},


		});
	});
