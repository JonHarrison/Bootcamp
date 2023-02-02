import React from "react";

function List(props) {
  return (
    <ul className="list-group">
        {
          props.groceries.map(item => (
            console.log(item),
             <li className="list-group-item" key={item.id}>{item.name} - purchased {item.purchased ? 'yes':'no'}</li>
          ))
        }
    </ul>
  );
}

export default List;
