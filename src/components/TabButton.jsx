export default function TabButton({onSelect,children}){
   
    return(
        <li><button onClick={onSelect}>{children}</button></li>
    )
}



/*export default function Tabbuton({label}){

    return(
        <li><button>{label}<button><li>
    )
}
*/