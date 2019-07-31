import { http } from './config'

export default	{

	salvar:(client)=>{
		return http.post('client',client);
  },
    
	atualizar:(client)=>{
		return http.put('client',client);
  },

  listar:()=>{
		return http.get('client')
  },
    
	apagar:(client)=>{
		return http.delete('client',client);
	}
}