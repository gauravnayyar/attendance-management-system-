export default {
	myVar1: [],
	myVar2: {},
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
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}