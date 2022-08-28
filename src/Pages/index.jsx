import React from 'react';
import "../Css/page.css"
import { Grid, Image, Stack } from '@mantine/core';
import Navigation from '../Component/navigation'
import Footer from '../Component/footer'
import Body from '../Component/body';
import Intro from '../Component/intro';


export default function Page() {
    return (
        <div className="page">
            <Image className="background" src="https://ayp.vn/wp-content/uploads/2022/05/Group-39-min.png" />
            <Navigation />
            <Intro />
            <Body />
            <Footer />
        </div>
    );
}
