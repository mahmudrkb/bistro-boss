import React from 'react';

const MenuItem = ({item}) => {
    const {price,image,name,recipe,category}=item
  
    return (
        <div className='flex space-x-5 gap-5 '>
           <img className='w-[120px] rounded-r-full rounded-b-full  ' src={image} alt="" />
           <div>
            <h3 className='uppercase'>{name}</h3>
            <p>{recipe}</p>
           </div>
           <h4> ${price}</h4>
        </div>
    );
};

export default MenuItem;