import React from 'react';
import useAuth from '../../Hooks/useAuth';

const AdminHome = () => {
    const { user } = useAuth();
    return (
      <div className='mt-5'>
        <h2 className="text-3xl">
          <span>Hi,Welcome </span>  
           {user?.displayName ?  user?.displayName :  " Back"}
        </h2>
      </div>
    );
};

export default AdminHome;