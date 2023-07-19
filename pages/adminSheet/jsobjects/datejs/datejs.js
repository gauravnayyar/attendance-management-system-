export default {
	myVar1: [],
	myVar2: {},
	dataFetchFromMain:[],
	todaydate: moment().toISOString() ,
	minmumDate () {
		return 	moment(this.todaydate).add('days', -7).toISOString() ;
	},
	maximumDate(){
		return 	moment(this.todaydate).add('days', 7).toISOString() ;
	},
	deafultdate(){
		return this.todaydate
	},
	cleartable(){
		this.dataFetchFromMain =[]

	},
removeDuplicates(data) { 
const uniqueData = [];

for (let i = 0; i < data.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < i; j++) {
    if (
      data[i].BadgeNumber === data[j].BadgeNumber &&
      data[i].FromDate === data[j].FromDate &&
      data[i].ToDate === data[j].ToDate
    ) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    uniqueData.push(data[i]);
  }
}
  return uniqueData;
     },
	getBadgeNumberFromAdmin(){
		adminReport.run()
		this.dataFetchFromMain =[];
		let sn =0;
		let reportdata = this.removeDuplicates(adminReport.data)
		console.log(reportdata)
		reportdata.forEach((ele) => {
	if(ele.SewadarType === 'OPEN'){
					let person = {
						sno:sn+1,
						name: ele.BadgeNumber,
						BadgeNumber: ele.SewadarType,
						phoneAllowed: ele.PhoneAllowed,
						vehicleAllowed: ele.VehicleAllowed,
						fromDate: ele.FromDate,
						toDate: ele.ToDate,
						mobileVaccinationNo: '',
						firstDose: '',
						secondDose: ''

					};

					this.dataFetchFromMain.push(person);
					sn =sn+1;
				}else{
			getMainDataByBadgeId.data.forEach((element)=>{
			
						if(ele.BadgeNumber === element.BadgeNumber){
					let person = {
						sno:sn+1,
						name: element.Name,
						BadgeNumber: element.BadgeNumber,
						phoneAllowed: ele.PhoneAllowed,
						vehicleAllowed: ele.VehicleAllowed,
						fromDate: ele.FromDate,
						toDate: ele.ToDate,
						mobileVaccinationNo: element.MobileVaccinationNo,
						firstDose: element["Vaccination 1st dose"],
						secondDose: element["Vaccination 2nd dose"]

					};

					this.dataFetchFromMain.push(person);
					sn =sn+1;
				}
				
			
			})
				}
		})
		return this.dataFetchFromMain;
	},
	async myFun2 () {

	}
}