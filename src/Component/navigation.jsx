import { Header } from '@mantine/core';
import react from 'react';
import "../Css/navigation.css"
import { Grid, Image, Stack, Title, Anchor } from '@mantine/core';



export default function Navigation() {
    return <div>
        <Stack spacing="xl" justify="space-between" style={{ minHeight: 300 }}>
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
                        <li className="nav-bar__item">Đội ngủ</li>
                        <li className="nav-bar__item">FAQ</li>
                        <li className="nav-bar__item nav-bar__item--image">Khám phá ngay</li>
                    </ul>
                </Grid.Col>
            </Grid>
            <Title style={{ textAlign: 'center', fontWeight: '500' }} order={2}>Khoá Huấn Luyện Thể Chất Và Trải Nghiệm Thực Tế</Title>
        </Stack>
        <Title className="title" order={1}>AYP Adventure</Title>
        <Title className="slogan" order={1}>XÂY DỰNG LỐI SỐNG NĂNG ĐỘNG VÀ LÀNH MẠNH HƠN</Title>
        <Anchor href="/" target="_blank" style={{ textDecoration: 'none' }}>
            <p className="nav-bar__item nav-bar__item--image button--animation">Khám phá ngay</p>
        </Anchor>
    </div >
}