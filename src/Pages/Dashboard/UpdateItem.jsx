
import { useLoaderData } from 'react-router-dom';
import SectionsTitles from './../../Shared/SectionsTitles';


const UpdateItem = () => {
    const item=useLoaderData()
    console.log(item)
    
    return (
        <div>
            <SectionsTitles heading={'update item'} subheading={'Refresh Info'} ></SectionsTitles>
            <div>
            <h1>{item.name}</h1>
                
            </div>
        </div>
    );
};

export default UpdateItem;