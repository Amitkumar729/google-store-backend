import React from "react"
import Banner from "../../components/banner/banner"
import Recommendations from "../../components/recommendations/recommendations"
import NewNow from "../../components/newNow/newNow"
import Signup from "../../components/signup/signup"
import HomeAbout from "../../components/homeAbout/homeAbout"
import Footer from "../../components/footer/footer"

const HomePage: React.FC = () => {
    return (
        <>
            <Banner />
            <Recommendations />
            <NewNow />
            <Signup />
            <HomeAbout/>
            <Footer/>
        </>

    )
}

export default HomePage;