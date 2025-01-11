import React from 'react';
import Banner from '../home/Banner'
import PopularService from './PopularService';
import ReviewCards from './ReviewCards';
import HeavyDutyTrivia from './HeavyDutyTrivia';
import Faq from './Faq';

const Home = () => {
    
    return (
        <div >
            <Banner></Banner>
            <PopularService></PopularService>
            <ReviewCards></ReviewCards>
            <HeavyDutyTrivia></HeavyDutyTrivia>
            <Faq></Faq>
        </div>
    );
};

export default Home;