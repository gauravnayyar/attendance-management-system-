export default {
	userList:[],
	rowSelectData: [],
	getSelectedDataFromTable () {
		this.rowSelectData =[];
		userListTbl.selectedRows.forEach(data=>{
			console.log(data)
			let selectedRowsObject ={
				"BadgeNumber":data.BadgeNumber,
				"FromDate":DatePicker1.formattedDate.toString(),
				"ToDate":DatePicker1.formattedDate,
				"PhoneAllowed":data.DeafultPhone === false ? "":data.MobileNumber,
				"VehicleAllowed" :data.DeafultVehicle === false ? "":data.VehicleNumber,
			}

			this.rowSelectData.push(selectedRowsObject)

		})
		return this.rowSelectData;
	},
	getvehicleAvailable(index){
		if(userListTbl.tableData[index].VehicleNumber != ''){
			return true;
		}else{
			return false;
		}
	},
	allowPhone(data){
		console.log(data);
	},
	getPhoneeAvailable(index){
		if(userListTbl.tableData[index].MobileNumber != ''){
			return  true;
		}else{
			return false;
		}
	},
	getUserList(){
		this.userList=[];
		fetchData.data.forEach((ele)=>{
			let selectedRowsObject ={
				"Name":ele.Name,
				"BadgeNumber":ele.BadgeNumber,
				"MobileNumber":ele.MobileNumber,
				"VehicleNumber":ele.VehicleNumber,
				"DeafultPhone":false,
				"DeafultVehicle":false			}
			this.userList.push(selectedRowsObject)
		} )
		
		return this.userList;

	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}