const ItemRow = ({item}) =>
    <div>
       <li
            className="list-group-item"
            key={item.id}>
            <img height="40px" src={item.img}/>
            {item.name}
        </li>
    </div>
