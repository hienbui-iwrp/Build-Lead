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
                    <Text className="who__title1">B???n c???n kho?? hu???n luy???n th??? ch???t th???c t???</Text>
                    <Title className="who__title2">AYP Adventure</Title>
                    <Text className="who__title3">GI???I PH??P ????? L???P TR??NH M???T L???I S???NG N??NG ?????NG, KH???E M???NH V?? G???N G??I THI??N NHI??N</Text>
                    <span className="line-vertical"></span>
                    <Text className="intro__text"> KHO?? H???C N??Y D??NH CHO AI?</Text>
                    <Grid className="who__condition">
                        <Grid.Col xs="12" sm="6" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="who__condition-card who__condition-card--color1">
                                <Image src="https://ayp.vn/wp-content/uploads/2022/05/Rectangle-4-min.png" />
                                <span >Mu???n</span>
                                <ul>
                                    <li>T???p luy???n th??? thao 1 c??ch b???n v???ng, tho???i m??i v?? t??? nhi??n</li>
                                    <li>C?? mindset ????ng v??? vi???c x??y d???ng l???i s???ng l??nh m???nh, k???t h???p gi???a r??n luy???n th??? ch???t v?? dinh d?????ng</li>
                                    <li>Hi???u v?? y??u th????ng c?? th??? m??nh ????ng c??ch h??n</li>
                                    <li>Bi???n vi???c r??n luy???n s???c kh???e th??nh ni???m vui v?? th??i quen h???ng ng??y</li>
                                </ul>
                            </div>
                        </Grid.Col>
                        <Grid.Col xs="12" sm="6" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="who__condition-card who__condition-card--color2">
                                <Image src="https://ayp.vn/wp-content/uploads/2022/05/Rectangle-5-min.png" />
                                <span >Mu???n</span>
                                <ul>
                                    <li>T???p luy???n th??? thao 1 c??ch b???n v???ng, tho???i m??i v?? t??? nhi??n</li>
                                    <li>C?? mindset ????ng v??? vi???c x??y d???ng l???i s???ng l??nh m???nh, k???t h???p gi???a r??n luy???n th??? ch???t v?? dinh d?????ng</li>
                                    <li>Hi???u v?? y??u th????ng c?? th??? m??nh ????ng c??ch h??n</li>
                                    <li>Bi???n vi???c r??n luy???n s???c kh???e th??nh ni???m vui v?? th??i quen h???ng ng??y</li>
                                </ul>
                            </div>
                        </Grid.Col>
                    </Grid>
                    <span className="line-vertical"></span>
                </Stack>
                <Stack className="founder">
                    <Text className="intro__text"> NG?????I S??NG L???P AYP ADVENTURE</Text>
                    <Grid>
                        <Grid.Col md="12" lg="2" className="founder__name">
                            Anh
                            <Title className="founder__name--big">Nguy???n H???u Tr??</Title>
                            L?? ai?
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
                            Nh?? s??ng l???p <b>h???c vi???n k??? n??ng Awaken Your Power</b>
                            <ul>
                                <li>
                                    <b>L??nh ?????o tr??? tu???i xu???t s???c nh???t</b> c???a Kumon Ch??u ?? Th??i B??nh D????ng.
                                </li>
                                <li>
                                    <b>Hu???n luy???n gi???ng vi??n</b> ?????i h???c V??n Lang, l??nh ?????o c???a T???p ??o??n Johnson
                                    & Johnson, Vinamilk, Sony, HSBC, Ph?? Qu?? Corporation, Oriflame???
                                </li>
                                <li>
                                    <b>C??? ????ng chi???n l?????c</b> c???a Windmills Hospitality Corporation ??? <b> ?????ng s??ng l???p</b>
                                    h??? th???ng c??c c???a h??ng, ti???m b??nh C???i xay gi??, Windmills Coffee, Vu??ng Pizza,
                                    Chungking Express, C??t K??t BBQ & Beer, Yam ??? ChiangMai in DaLat, Datbike???
                                </li>
                                <li>
                                    <b>Di???n gi??? Tedx, Youtuber</b> k??nh gi??o d???c, k??? n??ng, g??c nh??n ??a chi???u v???i h??n 500.000 followers
                                </li>
                                <li>
                                    V???n ?????ng vi??n marathon nhi???u n??m kinh nghi???m: ???? ho??n th??nh c??c c??? ly <b>21km-42km-70km-100km</b>
                                    ??? c??c gi???i marathon danh gi?? nh?? HCM Marathon, Vietnam Trail Marathon, Vietnam Mountain Marathon,???
                                </li>
                            </ul>
                        </Grid.Col>
                    </Grid>
                    <Stack className="founder__detail">
                        <Title className="founder__detail-title">Anh Tr?? ???? T???ng Gi???ng B???n???</Title>
                        <Text className="founder__detail-text">
                            T??? C???U B?? CH??? ???????C V??O ?????I C??? V?? B??NG ???? C???A TR?????NG
                        </Text>
                        <Text className="founder__detail-text">
                            Nghe th???t kh?? tin ????ng kh??ng? Nh??ng anh Nguy???n H???u Tr?? ch???y h??n 100km c??c b???n bi???t b??y gi??? ???? t???ng
                            KH??NG H??? C?? KH??? N??NG CH??I B???T K??? M??N TH??? THAO N??O.
                        </Text>
                        <Text className="founder__detail-text">
                            B???n kh??ng nghe l???m ????u.
                        </Text>
                        <Text className="founder__detail-text">
                            C??? tu???i th?? c???a anh Tr?? l?? chu???i nh???ng ng??y th??ng v?? c??ng t??? ti khi h??nh th??? kh??ng t???t: ???m y???u v?? nh??? con h??n h???n so v???i c??c b???n ?????ng trang l???a.
                            <br />
                            Th??m v??o ????, th??? l???c anh c??ng kh??ng t???t v?? kh??ng c?? khi???u ch??i m??n th??? thao n??o.
                        </Text>
                        <Text className="founder__detail-text">
                            Ngay c??? m??n th??? thao vua ??? b??ng ???? ??? m??n m?? t???t c??? nh???ng th???ng con trai ?????u ao ?????c c?? th??? ch??i ???????c, anh c??ng kh??ng th???.
                            <br />
                            Kh??ng v??o ???????c ?????i ???? ch??nh th???c ???? ????nh, anh Tr?? th???m ch?? c??n kh??ng th??? ng???i ??? gh??? d??? b???, ch??? c?? th??? ?????ng c??? v?? c??ng c??c b???n n??? ??? h??ng gh??? kh??n gi???.
                        </Text>
                        <Text className="founder__detail-text">
                            C???m gi??c t??? ti, m???c c???m ???? tr??? th??nh ?????ng l???c cho c???u b?? ???m y???u n??m n??o
                            <br />
                            tr??? th??nh m???t v???n ?????ng vi??n marathon c?? th??? chinh ph???c nh???ng c???t m???c m?? b???n ???? bi???t ??? hi???n t???i
                        </Text>
                        <Text className="founder__detail-text">
                            V???y b?? m???t ?????ng sau ???? l?? g??? V?? ????u m?? anh Tr?? t??m ???????c m??n th??? thao ph?? h???p nh???t v???i m??nh? L??m sao anh gi??? ???????c k??? lu???t ????? duy tr?? m???t b??? m??n ??a ph???n
                            <br />
                            m???i ng?????i ?????u ???th???y ch??n khi tham gia??? nh?? ch???y b???? Ch???y b??? ???? t??c ?????ng t??ch c???c ?????n ?????i s???ng tinh th???n v?? s???c kh???e th??? ch???t c???a anh nh?? th??? n??o?
                        </Text>
                        <Text className="founder__detail-text">
                            V?? QUAN TR???NG NH???T: L??M SAO ????? V???N R??N LUY???N TH??? THAO ?????U ?????N KHI PH???I C??N B???NG V???I ??P L???C C??NG VI???C, ?????I S???NG GIA ????NH B???N R???N?
                        </Text>
                        <Text className="founder__detail-text">
                            ???? c??ng ch??nh l?? tr??n tr??? c???a r???t nhi???u b???n tr??? hi???n nay. Tham gia kh??a hu???n luy???n n??y, anh Tr?? s??? gi??p b???n gi???i quy???t ???????c tr??n tr??? ????.
                        </Text>
                    </Stack>
                    <span className="line-vertical"></span>
                </Stack>
                <Stack className="benefit">
                    <Text className="intro__text">
                        T???T C??? NH???NG G?? B???N C???N G??I G???N TRONG 8 TU???N C??NG H???C PH????NG PH??P T??? ANH TR??, TH???C CHI???N N??I R???NG, REVIEW C??NG TR??? GI???NG CHUY??N NGHI???P:
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
                                                Ki???n th???c to??n di???n trong vi???c ch???y b???, trekking, dinh d?????ng, set up l???u tr???i, s?? c???p c???u ????? chinh ph???c b???t k?? cu???c ch??i
                                                th??? thao, du l???ch tr???i nghi???m n??o trong t????ng lai
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
                                                T?? duy ????? lu??n gi??? ???????c s??? ki??n tr?? v?? ni???m vui trong vi???c luy???n t???p th??? thao
                                                m?? v???n c??n b???ng v???i ?????i s???ng c??ng vi???c, gia ????nh
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
                                                Th??? th??ch gi???i h???n b???n th??n, c?? ?????i ng?? hu???n luy???n vi??n ????nh gi?? s???c kho???,
                                                s???c b???n c???a b???n
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
                                                Tr???i nghi???m h??nh th???c Back-yard t???i ???? L???t v?? nh???ng ?????a ??i???m v???i c???nh quan ngo???n m???c t???i Vi???t Nam:
                                                Sapa, M???c Ch??u, P?? Lu??ng,??? ????? ch???m ?????n gi???i h???n c???a b???n th??n
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
                                                K??? n??ng t??? l??n quy tr??nh t???p luy???n d???a tr??n th??? l???c c???a b???n th??n
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
                                                Ki???n th???c ????? l??n th???c ????n theo nhi???u lo???i h??nh dinh d?????ng cho ch??nh m??nh
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
                                                K??? n??ng ph???i h???p ?????i nh??m hi???u qu???, ???????c thi ?????u th???c chi???n trong su???t kho?? h???c
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
                                                Gia nh???p c???ng ?????ng n??ng ?????ng AYP Adventure ?????ng h??nh xuy??n su???t trong v?? sau kh??a h???c
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

