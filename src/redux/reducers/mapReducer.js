export default function reducer(state={
	map:{auth:false,error:false},
},action) {
	switch (action.type){
		case "ADD_MAP":{
			return{...state,map:{map:action.payload,auth:true,error:false}}
		}
		case "ERR_MAP":{
			return{...state,map:{auth:false,error:true}}
		}
		
		
	}
	return state 
}
