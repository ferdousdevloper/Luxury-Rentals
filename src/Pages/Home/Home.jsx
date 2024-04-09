
import { useContext } from 'react';
import { ApiContext } from './../../ContextApiData/ContextApiData';
import Banner from './../../components/Banner/Banner';
import OurServices from '../../components/OurServices/OurServices';
import Cards from '../../components/Cards/Cards';
import Reviews from '../../components/Reviews/Reviews';


const Home = () => {
    const {data} = useContext(ApiContext)
    console.log(data);

    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <Cards></Cards>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;