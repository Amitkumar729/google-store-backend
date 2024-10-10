import React from "react";
import Storebanner from "../../components/storeBanner/storeBanner";
import StoreSlider from "../../components/storeSlider/storeSlider";
import NNStore from "../../components/storeNewNow/storeNewNow";
import Footer from "../../components/footer/footer";
import HomeAbout from "../../components/homeAbout/homeAbout";
import StoreMagic from "../../components/storeMagic/storeMagic";
import StorePhot from "../../components/storePhoto/storePhoto";
import StoreSlide2 from "../../components/storeSlider2/storeSlider2";
import StoreSlider3 from "../../components/storeSlider3/storeSlider3";
import Faq from "../../components/faq/faq";
 

const Store: React.FC = () => {
    return (
        <>
        <Storebanner/>
        <StoreSlider/>
        <NNStore/>
        <StoreMagic/>
        <StorePhot/>
        <StoreSlide2/>
        <StoreSlider3/>
        <Faq/>
        <HomeAbout/>
        <Footer/>
        </>
    )
}

export default Store;