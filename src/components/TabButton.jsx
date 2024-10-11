export default function TabButton({onSelect,children,isSelected}){
   
    return(
        <li><button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
    )
}



/*export default function Tabbuton({label}){

    return(
        <li><button>{label}<button><li>
    )
}
*/