import React from 'react';

const SectionsTitles = ({heading,subheading}) => {
    return (
        <div className='text-center mx-auto my-8 md:w-4/12 '>
           <p className='text-yellow-600 mb-2'>--- {subheading} ---</p>
           <h3 className='text-3xl uppercase border-y'>{heading}</h3>
           
        </div>
        
    );
};

export default SectionsTitles;