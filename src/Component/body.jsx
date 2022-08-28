import { useEffect } from 'react';
import "../Css/body.css"
import { Grid, Title, Stack, Text, Image } from '@mantine/core';
import Navigation from '../Component/navigation'
import Footer from '../Component/footer'


export default function Body() {
    useEffect(() => {
        const observerCard1 = new IntersectionObserver((entries) => {
            for (const entry of entries) { // Loop over all elements that either enter or exit the view.
                if (entry.isIntersecting) { // This is true when the element is in view.
                    entry.target.classList.add('who__condition-card--color1-animation'); // Add a class.
                }
            }
        });
        for (const item of document.querySelectorAll('.who__condition-card--color1')) {
            observerCard1.observe(item);
        }
        const observerCard2 = new IntersectionObserver((entries) => {
            for (const entry of entries) { // Loop over all elements that either enter or exit the view.
                if (entry.isIntersecting) { // This is true when the element is in view.
                    entry.target.classList.add('who__condition-card--color2-animation'); // Add a class.
                }
            }
        });
        for (const item of document.querySelectorAll('.who__condition-card--color2')) {
            observerCard2.observe(item);
        }
    }, [])
    return (
        <Stack spacing="0" className="body">
            <Stack className="who">
                <Text className="who__title1">Bạn cần khoá huấn luyện thể chất thực tế</Text>
                <Title className="who__title2">AYP Adventure</Title>
                <Text className="who__title3">GIẢI PHÁP ĐỂ LẬP TRÌNH MỘT LỐI SỐNG NĂNG ĐỘNG, KHỎE MẠNH VÀ GẦN GŨI THIÊN NHIÊN</Text>
                <span className="line-vertical"></span>
                <Text className="intro__text intro__text--italic"> KHOÁ HỌC NÀY DÀNH CHO AI?</Text>
                <Grid className="who__condition">
                    <Grid.Col xs="12" sm="6" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="who__condition-card who__condition-card--color1">
                            <Image src="https://ayp.vn/wp-content/uploads/2022/05/Rectangle-4-min.png" />
                            <span >Muốn</span>
                            <ul>
                                <li>Tập luyện thể thao 1 cách bền vững, thoải mái và tự nhiên</li>
                                <li>Có mindset đúng về việc xây dựng lối sống lành mạnh, kết hợp giữa rèn luyện thể chất và dinh dưỡng</li>
                                <li>Hiểu và yêu thương cơ thể mình đúng cách hơn</li>
                                <li>Biến việc rèn luyện sức khỏe thành niềm vui và thói quen hằng ngày</li>
                            </ul>
                        </div>
                    </Grid.Col>
                    <Grid.Col xs="12" sm="6" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="who__condition-card who__condition-card--color2">
                            <Image src="https://ayp.vn/wp-content/uploads/2022/05/Rectangle-5-min.png" />
                            <span >Muốn</span>
                            <ul>
                                <li>Tập luyện thể thao 1 cách bền vững, thoải mái và tự nhiên</li>
                                <li>Có mindset đúng về việc xây dựng lối sống lành mạnh, kết hợp giữa rèn luyện thể chất và dinh dưỡng</li>
                                <li>Hiểu và yêu thương cơ thể mình đúng cách hơn</li>
                                <li>Biến việc rèn luyện sức khỏe thành niềm vui và thói quen hằng ngày</li>
                            </ul>
                        </div>
                    </Grid.Col>
                </Grid>
                <span className="line-vertical"></span>
            </Stack>
        </Stack>
    );
}

