export default function reducer(state={
	user:{isAuth:false},
	log:"login",
},action) {
	switch (action.type){
		
		
		case "ADD_USER":{
			return{
				...state,
				user:action.payload,
				log:"logout",

			}
		}
		case "DELETE_USER":{
			return{
				...state,
				user:action.payload,
				log:"login",
			}
		}
	}
	return state 
}
