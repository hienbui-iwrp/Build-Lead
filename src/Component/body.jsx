import { useEffect } from 'react';
import "../Css/body.css"
import { Grid, Title, Stack, Text, Image, Center } from '@mantine/core';
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

        const observerFounder1 = new IntersectionObserver((entries) => {
            for (const entry of entries) { // Loop over all elements that either enter or exit the view.
                if (entry.isIntersecting) { // This is true when the element is in view.
                    entry.target.classList.add('founder__name--animation'); // Add a class.
                }
            }
        });
        for (const item of document.querySelectorAll('.founder__name')) {
            observerFounder1.observe(item);
        }

        const observerFounder2 = new IntersectionObserver((entries) => {
            for (const entry of entries) { // Loop over all elements that either enter or exit the view.
                if (entry.isIntersecting) { // This is true when the element is in view.
                    entry.target.classList.add('founder__image--animation'); // Add a class.
                }
            }
        });
        for (const item of document.querySelectorAll('.founder__image')) {
            observerFounder2.observe(item);
        }
        const observerFounder3 = new IntersectionObserver((entries) => {
            for (const entry of entries) { // Loop over all elements that either enter or exit the view.
                if (entry.isIntersecting) { // This is true when the element is in view.
                    entry.target.classList.add('founder__list--animation'); // Add a class.
                }
            }
        });
        for (const item of document.querySelectorAll('.founder__list')) {
            observerFounder3.observe(item);
        }

        const observerBenefit1 = new IntersectionObserver((entries) => {
            for (const entry of entries) { // Loop over all elements that either enter or exit the view.
                if (entry.isIntersecting) { // This is true when the element is in view.
                    entry.target.classList.add('benefit-card--animation1'); // Add a class.
                }

            }
        });
        for (const item of document.querySelectorAll('.benefit-card1')) {
            observerBenefit1.observe(item);
        }

        const observerBenefit2 = new IntersectionObserver((entries) => {
            for (const entry of entries) { // Loop over all elements that either enter or exit the view.
                if (entry.isIntersecting) { // This is true when the element is in view.
                    entry.target.classList.add('benefit-card--animation2'); // Add a class.
                }

            }
        });
        for (const item of document.querySelectorAll('.benefit-card2')) {
            observerBenefit2.observe(item);
        }

    }, [])
    return (
        <div className="body">
            <Stack className="container">
                <Stack className="who">
                    <Text className="who__title1">Bạn cần khoá huấn luyện thể chất thực tế</Text>
                    <Title className="who__title2">AYP Adventure</Title>
                    <Text className="who__title3">GIẢI PHÁP ĐỂ LẬP TRÌNH MỘT LỐI SỐNG NĂNG ĐỘNG, KHỎE MẠNH VÀ GẦN GŨI THIÊN NHIÊN</Text>
                    <span className="line-vertical"></span>
                    <Text className="intro__text"> KHOÁ HỌC NÀY DÀNH CHO AI?</Text>
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
                <Stack className="founder">
                    <Text className="intro__text"> NGƯỜI SÁNG LẬP AYP ADVENTURE</Text>
                    <Grid>
                        <Grid.Col md="12" lg="2" className="founder__name">
                            Anh
                            <Title className="founder__name--big">Nguyễn Hữu Trí</Title>
                            Là ai?
                        </Grid.Col>
                        <Grid.Col md="12" lg="5" className="founder__image" style={{}}>
                            <Image
                                radius="md"
                                src="https://ayp.vn/wp-content/uploads/2022/05/2-min.png"
                                alt="image"
                                style={{ width: "80%" }}
                            />
                        </Grid.Col>
                        <Grid.Col md="12" lg="5" className="founder__list">
                            Nhà sáng lập <b>học viện kỹ năng Awaken Your Power</b>
                            <ul>
                                <li>
                                    <b>Lãnh đạo trẻ tuổi xuất sắc nhất</b> của Kumon Châu Á Thái Bình Dương.
                                </li>
                                <li>
                                    <b>Huấn luyện giảng viên</b> Đại học Văn Lang, lãnh đạo của Tập đoàn Johnson
                                    & Johnson, Vinamilk, Sony, HSBC, Phú Quý Corporation, Oriflame…
                                </li>
                                <li>
                                    <b>Cổ đông chiến lược</b> của Windmills Hospitality Corporation – <b> đồng sáng lập</b>
                                    hệ thống các cửa hàng, tiệm bánh Cối xay gió, Windmills Coffee, Vuông Pizza,
                                    Chungking Express, Cút Kít BBQ & Beer, Yam – ChiangMai in DaLat, Datbike…
                                </li>
                                <li>
                                    <b>Diễn giả Tedx, Youtuber</b> kênh giáo dục, kỹ năng, góc nhìn đa chiều với hơn 500.000 followers
                                </li>
                                <li>
                                    Vận động viên marathon nhiều năm kinh nghiệm: đã hoàn thành các cự ly <b>21km-42km-70km-100km</b>
                                    ở các giải marathon danh giá như HCM Marathon, Vietnam Trail Marathon, Vietnam Mountain Marathon,…
                                </li>
                            </ul>
                        </Grid.Col>
                    </Grid>
                    <Stack className="founder__detail">
                        <Title className="founder__detail-title">Anh Trí Đã Từng Giống Bạn…</Title>
                        <Text className="founder__detail-text">
                            TỪ CẬU BÉ CHỈ ĐƯỢC VÀO ĐỘI CỔ VŨ BÓNG ĐÁ CỦA TRƯỜNG
                        </Text>
                        <Text className="founder__detail-text">
                            Nghe thật khó tin đúng không? Nhưng anh Nguyễn Hữu Trí chạy hơn 100km các bạn biết bây giờ đã từng
                            KHÔNG HỀ CÓ KHẢ NĂNG CHƠI BẤT KỲ MÔN THỂ THAO NÀO.
                        </Text>
                        <Text className="founder__detail-text">
                            Bạn không nghe lầm đâu.
                        </Text>
                        <Text className="founder__detail-text">
                            Cả tuổi thơ của anh Trí là chuỗi những ngày tháng vô cùng tự ti khi hình thể không tốt: ốm yếu và nhỏ con hơn hẳn so với các bạn đồng trang lứa.
                            <br />
                            Thêm vào đó, thể lực anh cũng không tốt và không có khiếu chơi môn thể thao nào.
                        </Text>
                        <Text className="founder__detail-text">
                            Ngay cả môn thể thao vua – bóng đá – môn mà tất cả những thằng con trai đều ao ước có thể chơi được, anh cũng không thể.
                            <br />
                            Không vào được đội đá chính thức đã đành, anh Trí thậm chí còn không thể ngồi ở ghế dự bị, chỉ có thể đứng cổ vũ cùng các bạn nữ ở hàng ghế khán giả.
                        </Text>
                        <Text className="founder__detail-text">
                            Cảm giác tự ti, mặc cảm đã trở thành động lực cho cậu bé ốm yếu năm nào
                            <br />
                            trở thành một vận động viên marathon có thể chinh phục những cột mốc mà bạn đã biết ở hiện tại
                        </Text>
                        <Text className="founder__detail-text">
                            Vậy bí mật đằng sau đó là gì? Vì đâu mà anh Trí tìm được môn thể thao phù hợp nhất với mình? Làm sao anh giữ được kỷ luật để duy trì một bộ môn đa phần
                            <br />
                            mọi người đều “thấy chán khi tham gia” như chạy bộ? Chạy bộ đã tác động tích cực đến đời sống tinh thần và sức khỏe thể chất của anh như thế nào?
                        </Text>
                        <Text className="founder__detail-text">
                            VÀ QUAN TRỌNG NHẤT: LÀM SAO ĐỂ VẪN RÈN LUYỆN THỂ THAO ĐỀU ĐẶN KHI PHẢI CÂN BẰNG VỚI ÁP LỰC CÔNG VIỆC, ĐỜI SỐNG GIA ĐÌNH BẬN RỘN?
                        </Text>
                        <Text className="founder__detail-text">
                            Đó cũng chính là trăn trở của rất nhiều bạn trẻ hiện nay. Tham gia khóa huấn luyện này, anh Trí sẽ giúp bạn giải quyết được trăn trở đó.
                        </Text>
                    </Stack>
                    <span className="line-vertical"></span>
                </Stack>
                <Stack className="benefit">
                    <Text className="intro__text">
                        TẤT CẢ NHỮNG GÌ BẠN CẦN GÓI GỌN TRONG 8 TUẦN CÙNG HỌC PHƯƠNG PHÁP TỪ ANH TRÍ, THỰC CHIẾN NÚI RỪNG, REVIEW CÙNG TRỢ GIẢNG CHUYÊN NGHIỆP:
                    </Text>
                    <Grid>
                        <Grid.Col md="12" lg="6">
                            <Stack justify="space-between" spacing="xl">
                                <Center>
                                    <Grid className="benefit-card1">
                                        <Grid.Col className="benefit-card__image" span={2}>
                                            <Image src="https://ayp.vn/wp-content/uploads/2022/05/Rectangle-74.png" />
                                        </Grid.Col>
                                        <Grid.Col span={10} className="benefit-card__text">
                                            <Text>
                                                Kiến thức toàn diện trong việc chạy bộ, trekking, dinh dưỡng, set up lều trại, sơ cấp cứu để chinh phục bất kì cuộc chơi
                                                thể thao, du lịch trải nghiệm nào trong tương lai
                                            </Text>
                                        </Grid.Col>
                                    </Grid>
                                </Center>
                                <Center>
                                    <Grid className="benefit-card1">
                                        <Grid.Col className="benefit-card__image" span={2}>
                                            <Image src="https://ayp.vn/wp-content/uploads/2022/05/Rectangle-74-1.png" />
                                        </Grid.Col>
                                        <Grid.Col span={10} className="benefit-card__text">
                                            <Text>
                                                Tư duy để luôn giữ được sự kiên trì và niềm vui trong việc luyện tập thể thao
                                                mà vẫn cân bằng với đời sống công việc, gia đình
                                            </Text>
                                        </Grid.Col>
                                    </Grid>
                                </Center>
                                <Center>
                                    <Grid className="benefit-card1">
                                        <Grid.Col className="benefit-card__image" span={2}>
                                            <Image src="https://ayp.vn/wp-content/uploads/2022/05/Rectangle-74-2.png" />
                                        </Grid.Col>
                                        <Grid.Col span={10} className="benefit-card__text">
                                            <Text>
                                                Thử thách giới hạn bản thân, có đội ngũ huấn luyện viên đánh giá sức khoẻ,
                                                sức bền của bạn
                                            </Text>
                                        </Grid.Col>
                                    </Grid>
                                </Center>
                                <Center>
                                    <Grid className="benefit-card1">
                                        <Grid.Col className="benefit-card__image" span={2}>
                                            <Image src="https://ayp.vn/wp-content/uploads/2022/05/Rectangle-74-3.png" />
                                        </Grid.Col>
                                        <Grid.Col span={10} className="benefit-card__text">
                                            <Text>
                                                Trải nghiệm hình thức Back-yard tại Đà Lạt và những địa điểm với cảnh quan ngoạn mục tại Việt Nam:
                                                Sapa, Mộc Châu, Pù Luông,… để chạm đến giới hạn của bản thân
                                            </Text>
                                        </Grid.Col>
                                    </Grid>
                                </Center>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col md="12" lg="6">
                            <Stack justify="space-between" spacing="xl">
                                <Center>
                                    <Grid className="benefit-card2">
                                        <Grid.Col className="benefit-card__image" span={2}>
                                            <Image src="https://ayp.vn/wp-content/uploads/2022/05/Rectangle-74-4.png" />
                                        </Grid.Col>
                                        <Grid.Col span={10} className="benefit-card__text">
                                            <Text>
                                                Kỹ năng tự lên quy trình tập luyện dựa trên thể lực của bản thân
                                            </Text>
                                        </Grid.Col>
                                    </Grid>
                                </Center>
                                <Center>
                                    <Grid className="benefit-card2">
                                        <Grid.Col className="benefit-card__image" span={2}>
                                            <Image src="https://ayp.vn/wp-content/uploads/2022/05/Rectangle-74-5.png" />
                                        </Grid.Col>
                                        <Grid.Col span={10} className="benefit-card__text">
                                            <Text>
                                                Kiến thức để lên thực đơn theo nhiều loại hình dinh dưỡng cho chính mình
                                            </Text>
                                        </Grid.Col>
                                    </Grid>
                                </Center>
                                <Center>
                                    <Grid className="benefit-card2">
                                        <Grid.Col className="benefit-card__image" span={2}>
                                            <Image src="https://ayp.vn/wp-content/uploads/2022/05/Rectangle-74-6.png" />
                                        </Grid.Col>
                                        <Grid.Col span={10} className="benefit-card__text">
                                            <Text>
                                                Kỹ năng phối hợp đội nhóm hiệu quả, được thi đấu thực chiến trong suốt khoá học
                                            </Text>
                                        </Grid.Col>
                                    </Grid>
                                </Center>
                                <Center>
                                    <Grid className="benefit-card2">
                                        <Grid.Col className="benefit-card__image" span={2}>
                                            <Image src="https://ayp.vn/wp-content/uploads/2022/05/Rectangle-74-7.png" />
                                        </Grid.Col>
                                        <Grid.Col span={10} className="benefit-card__text">
                                            <Text>
                                                Gia nhập cộng động năng động AYP Adventure đồng hành xuyên suốt trong và sau khóa học
                                            </Text>
                                        </Grid.Col>
                                    </Grid>
                                </Center>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                    <span className="line-vertical"></span>
                </Stack>
                <Stack className="experience">

                </Stack>
            </Stack>
        </div>
    );
}

