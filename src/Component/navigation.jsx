import { Header } from '@mantine/core';
import { useState, useEffect } from 'react';
import "../Css/navigation.css"
import { Grid, Image, Stack, Title, Anchor } from '@mantine/core';
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6


export default function Navigation() {
    const [titleFont, setTitleFont] = new useState(10);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            // for (const entry of entries) { // Loop over all elements that either enter or exit the view.
            //     if (entry.isIntersecting) { // This is true when the element is in view.
            //         entry.target.classList.add('title--animation'); // Add a class.
            //         // console.log(document.documentElement.scrollTop)
            //     }
            //     if (!entry.isIntersecting) { // This is true when the element is in view.
            //         //entry.target.classList.remove('title--animation'); // Add a class.
            //         // console.log(document.documentElement.scrollTop)

            //     }
            // }
        });
        const items = document.querySelectorAll('.title');
        for (const item of items) {
            observer.observe(item);
        }
    }, [])

    window.onscroll = () => {
        var scrollTop = document.documentElement.scrollTop - 220;
        var size = 10 - ((scrollTop > 0) ? scrollTop / 70 : 0);
        setTitleFont(size)
    }


    return <div className="navigation">
        <Stack spacing="xl" justify="space-between" style={{ minHeight: 400 }}>
            <Grid>
                <Grid.Col xs={6} sm={3} style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Image
                        radius="md"
                        src="https://ayp.vn/wp-content/uploads/2022/05/Thumb-adventure2.png"
                        alt="image"
                        width={180}
                        height={100}
                    />
                </Grid.Col>
                <Grid.Col xs={6} sm={9}>
                    <ul className="nav-bar__list">
                        <li className="nav-bar__item">Khóa học</li>
                        <li className="nav-bar__item">Đối tượng</li>
                        <li className="nav-bar__item">Lợi ích</li>
                        <li className="nav-bar__item">Lộ trình</li>
                        <li className="nav-bar__item">Đội ngũ</li>
                        <li className="nav-bar__item">FAQ</li>
                        <li className="nav-bar__item nav-bar__item--image">Khám phá ngay</li>
                    </ul>
                </Grid.Col>
            </Grid>
            <Title style={{ textAlign: 'center', fontWeight: '500' }} order={2}>Khoá Huấn Luyện Thể Chất Và Trải Nghiệm Thực Tế</Title>
        </Stack>
        <Title className="title title--animation" order={1} style={{ fontSize: titleFont + "rem" }}>AYP Adventure</Title>
        <Title className="slogan" order={1}>XÂY DỰNG LỐI SỐNG NĂNG ĐỘNG VÀ LÀNH MẠNH HƠN</Title>
        <Anchor href="." target="_blank" style={{ textDecoration: 'none' }}>
            <p className="nav-bar__item nav-bar__item--image button--animation">Khám phá ngay</p>
        </Anchor>
    </div >
}