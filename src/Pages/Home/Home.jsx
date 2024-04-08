
import { useContext } from 'react';
import { ApiContext } from './../../ContextApiData/ContextApiData';


const Home = () => {
    const {data} = useContext(ApiContext)
    console.log(data);

    return (
        <div>
            
        </div>
    );
};

export default Home;