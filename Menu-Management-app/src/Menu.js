import React from "react";

const Menu = ({ items }) => {
    return(
        <div className='item-center'>
            {items.map((item)=>{
                const { id, title, img, description, price } = item;
                return (
                    <div className="card" style="width: 18rem;" key={ id }>
                        <img className="card-img-top" src={ img } alt={ title }/>
                         <div className="card-body">
                            <p className="card-text">{ description }. ${ price }</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
        
};

export default Menu;