function ItemTech(props){
    return(
        <div>
            <strong>{props.name}</strong>
            <img src={props.src} alt={props.alt}/>
        </div>
    );
}

function ItemContact(props){
    return(
        <a href={props.href} target="_blank" rel="noreferrer">
            <img src={props.img} alt={props.alt}/>
        </a>
    );
}

// export default Item;
export { ItemTech, ItemContact }