import React from 'react';
import Breeds from './Breeds';


const DogList=({filteredList})=> {
    return(
        <div>
            {filteredList.map((user, i)=> {
                return <Breeds  key={i} name={user}/>;
            })}
        </div>
       
    );
};


export default DogList;