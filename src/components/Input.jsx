export default function Input({item}){

    return(  
        <input  name={item} type={item} id={`input-${item}`} className="input"
        placeholder={item=="email"?`Enter your ${item} address`:`Enter your ${item}`} />
        
    )
}