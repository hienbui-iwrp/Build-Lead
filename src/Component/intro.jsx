import { Header } from '@mantine/core';
import { useState, useEffect } from 'react';
import "../Css/intro.css"
import { Grid, Image, Stack, Text } from '@mantine/core';


export default function Intro() {

    useEffect(() => {
        const observerCard1 = new IntersectionObserver((entries) => {
            for (const entry of entries) { // Loop over all elements that either enter or exit the view.
                if (entry.isIntersecting) { // This is true when the element is in view.
                    entry.target.classList.add('intro__text--animation'); // Add a class.
                }
            }
        });
        for (const item of document.querySelectorAll('.intro__text--italic')) {
            observerCard1.observe(item);
        }
    }, [])



    return <Stack spacing="0" className="intro">
        <Stack spacing="xs" className="intro__main">
            <div className="intro__text--background">
                <Text className="intro__text" style={{ paddingBottom: "1.5rem" }}>TƯỞNG TƯỢNG MỘT BUỔI SÁNG THỨC DẬY</Text>
                <Text className="intro__text intro__text--italic">
                    BẠN KHÔNG CÒN MỆT MỎI VÌ ÁP LỰC CÔNG VIỆC, KHÓI BỤI THÀNH PHỐ
                    <br />
                    KHUNG CẢNH NGAY TRƯỚC MẶT BẠN LÚC NÀY LÀ NÚI NON ĐẤT TRỜI HÙNG VĨ
                </Text>
            </div>
        </Stack>
        <Stack className="intro-more" justify="space-between" spacing="5rem">
            <Text className="intro-more__text" >Bạn có hào hứng không?</Text>
            <Grid className="intro-more__list">
                <Grid.Col xs="12" sm="4" className="intro-more__child intro-more__child--frist">
                    HÃY CHO BẢN THÂN MÌNH CƠ HỘI <b>THOÁT KHỎI VÒNG VÂY CỦA CUỘC SỐNG BỘN BỀ</b>
                </Grid.Col>
                <Grid.Col xs="12" sm="4" className="intro-more__child">
                    TÌM LẠI NIỀM VUI TRONG <b>VIỆC RÈN LUYỆN THỂ CHẤT</b>
                </Grid.Col>
                <Grid.Col xs="12" sm="4" className="intro-more__child">
                    TÌM VỀ VỚI <b>THIÊN NHIÊN</b>
                </Grid.Col>
            </Grid>
        </Stack>
        <Stack className="intro-story">
            <div className="intro-story__bg">
                <ul>
                    <li>Ở những năm 20 của cuộc đời, ra trường đi làm được vài năm, đã nếm trải được áp lực của cuộc sống công sở</li>
                    <li>Nhưng “cái máu” khám phá, trải nghiệm của một người trẻ cuồng đi của bạn vẫn còn len lỏi trong đôi chân đó</li>
                    <li>Có thu nhập ổn định, nhưng lại thấy vô nghĩa khi chỉ tiêu tiền vào việc sắm sửa, ăn nhậu với bạn bè/ đồng nghiệp</li>
                    <li>Đôi khi cũng muốn tập luyện thể thao để cơ thể dẻo dai, khoẻ khoắn như cái hồi còn 18 20 nhưng tập luyện được vài ngày lại bị công việc cuốn đi, không giữ được sự đều đặn và kỷ luật</li>
                    <li>Cuối tuần muốn đi phượt nhưng rủ bạn bè ai cũng bận, nên lại nằm nhà luyện vài bộ phim</li>
                </ul>
                <b>Những dòng trên có “phác hoạ” hình ảnh của bạn không?</b>
            </div>
        </Stack>
    </Stack>
}