export default {
	myVar1: [],
	myVar2: {},
	validateLoginAndnavigate () {
	if(appsmith.store.login.UserType.toLocaleLowerCase() === 'admin'){
		navigateTo('adminSheet')
	}else{
			navigateTo('Page2')
	}
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}