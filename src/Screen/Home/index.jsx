import {useEffect, useState} from "react"
import homeImg from "../../home-img.png"
import studentImg from "../../student.png"
import ParticlesBg from "particles-bg"
import {Ariza} from "../../Components/Language"
import {Card, Col} from "antd";
import firstPhoto from '../../images/news/1.jpeg'
import secondPhoto from '../../images/news/2.jpeg'
import thirdPhoto from '../../images/news/3.jpeg'
import fourPhoto from '../../images/news/4jpeg.jpeg'
import fivePhoto from '../../images/announcement/5.jpg'
import sixPhoto from '../../images/announcement/6.jpg'
import sevenPhoto from '../../images/announcement/7.jpg'
import {EnvironmentFilled, MailFilled, PhoneFilled, YoutubeFilled} from "@ant-design/icons";
import {MainApi} from "../../services/api";
import {listData} from "../../utils/data";

const Home = ({setUserName, language}) => {
    const {news, announcement, router} = Ariza
    const [allStudents, setAllStudents] = useState(0)
    const [chosen, setChosen] = useState(0)
    const [changeFaculty, setChangeFaculty] = useState([])
    const [obj, setObj] = useState({
        degree: "",
        country: "",
        university: "",
        faculty: "",
        smena: ""
    })

    useEffect(() => {
        fetch(`${MainApi}/students/all`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let a = []
                for (let i = 0; i < data?.length; i++) {
                    if (!!data[i].name) {
                        a = [...a, data[i]]
                    }
                }
                setAllStudents(a)
            });
    }, [])

    const style = {
        padding: '10px',
    };


    const handleDefine = () => {
        if (language === 0) {
            setAllStudents(allStudents?.filter(
                i => (
                    i?.study_level.toString().toLowerCase()?.includes(obj?.degree.toString().toLowerCase()) &&
                    i?.facultet.toString().toLowerCase()?.includes(obj?.faculty.toString().toLowerCase()) &&
                    i?.university.toString().toLowerCase()?.includes(obj?.university.toString().toLowerCase()) &&
                    i?.country.toString().toLowerCase()?.includes(obj?.country.toString().toLowerCase())
                )
            ))
        } else {
            if (language === 1) {
                setAllStudents(allStudents?.filter(
                    i => (
                        i?.study_level.toString().toLowerCase()?.includes(obj?.degree.toString().toLowerCase()) &&
                        i?.facultet.toString().toLowerCase()?.includes(obj?.faculty.toString().toLowerCase()) &&
                        i?.university.toString().toLowerCase()?.includes(obj?.university.toString().toLowerCase()) &&
                        i?.country.toString().toLowerCase()?.includes(obj?.country.toString().toLowerCase())
                    )
                ))
            }
        }

        setChosen(chosen + 1)
    }

    useEffect(() => {
        if (obj?.degree === 'bachelor') {
            setChangeFaculty(['Mehnat muhofazasi va yangi materiallar texnologiyasi (tarmoqlar boyicha)', 'Neft?? va neft??-gazni qayta ishlash texnologiyasi', 'Neft?? va gaz quvurlari, baza va omborlarini qurish va ulardan foydalanish', 'Transport logistikasi (avtomobil transporti)', 'Funksional ovqatlanish va bolalar maxsulotlari texnologiyasi', 'Oziq-ovqat texnologiyasi (non, makron va kandolatchilik mahsulotlari)', 'Oziq-ovqat sanoati mashina va jihozlari', 'Texnologik mashinalar va jihozlar (sovutish, kriogen texnikasi va mo??tadillash tizimlari mashinalari hamda agregatlari)', 'Texnologik mashinalar va jihozlar (tarmoqlar bo??yicha)', 'Materialshunoslik va yangi materiallar texnologiyasi (tarmoqlar bo??yicha)', 'Kimyoviy texnologiya (qurilish materiallar)', 'Neft?? gazkimyo sanoati texnologiyasi', 'Mexatronika va robototexnika', 'Mashinasozlik texnologiyasi, mashinasozlik ishlab chiqarishini jihozlash va avtomatlashtirish', 'Oziq-ovqat texnologiyasi (mahsulot turlari bo??yicha)'])
        } else if (obj?.degree === 'bachelor') {
            setChangeFaculty(['Oziq-ovqat texnologiyasi (don mahsulotlari)', 'Vinochilik texnologiyasi, bijg??ish mahsulotlari va alkogolsiz ichimliklar texnologiyasi', 'Texnologik mashinalar va jihozlar (tarmoqlar bo??yicha)', 'Kimyoviy texnologiya (ishlab chiqarish turlari bo??yicha)', 'Texnologik jarayonlar va ishlab chiqarishni avtomatlashtirish va boshqarish (tarmoqlar bo??yicha)'])
        } else if (obj?.degree === 'bachelor') {
            setChangeFaculty(['Oziq-ovqat texnologiyasi (mahsulot turlari bo??yicha)'])
        } else if (obj?.degree === 'magister') {
            setChangeFaculty(['Neft va gazni qayta ishlash va kimyoviy texnologiyasi', 'Neft?? va gaz quvurlari, baza va omborlarini qurish va ulardan foydalanish|Neft?? va gaz quvurlari, baza va omborlarini qurish va ulardan foydalanish', 'Oziq-ovqat mahsulotlarini ishlab chiqarish va qayta ishlash texnologiyasi (mahsulot turlari bo??yicha)', 'Xizmatlar sohasi (faoliyat turlari va yo??nalishlari bo??yicha)', 'Oziq-ovqat sanoati mashina va agregatlari', 'Kimyoviy texnologiya jarayonlari va apparatlari (ishlab chiqarish turi bo??yicha)'])
        } else if (obj?.degree === 'magister') {
            setChangeFaculty(['Oziq-ovqat xavfsizligi va sifati|Oziq-ovqat xavfsizligi va sifati', 'Latviya', 'Yog??ochga ishlov berish texnologiyasi va yog??ochshunoslik|Yog??ochga ishlov berish texnologiyasi va yog??ochshunoslik'])
        } else {
            setChangeFaculty([])
        }
    }, [obj?.degree])

    const {
        day,
        night
    } = Ariza

    useEffect(() => {
        console.log(listData[0][obj?.degree]?.find(l => l.country_uz === obj?.country)?.universities?.find(u => u.name_uz === obj?.university)?.facs?.[obj?.smena], "obj")
    }, [obj])

    return (
        <div>
            <ParticlesBg color="#0d3b66" type="cobweb" num={35} bg={true}/>

            <div className={"home-img"} style={{marginTop: 120}}>
                <img src={homeImg} alt=""/>
            </div>

            <div className={"rectangle"}>
                <div className={"home-title"}>
                    <h1 style={{color: "#00a0e9", marginTop: 15}}>
                        {news[language]}
                    </h1>
                </div>

                <div>
                    <div className="row" style={{marginBottom: 30}}>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                                <Card
                                    hoverable
                                    style={{
                                        height: 350,
                                        width: 250,
                                    }}
                                    cover={
                                        <img alt="" style={{height: 180}} src={firstPhoto}/>
                                    }
                                >
                                    <div style={{height: 100}}>
                                        <a href="/">
                                            Toshkent kimyo-texnologiyalari instituti rektori
                                            Toshkent kimyo-texnologiyalar instituti Yangiyer
                                            filialiga tashrif buyurdi
                                        </a>
                                    </div>

                                    <h4>13.04.2022</h4>
                                </Card>
                            </div>
                        </Col>

                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                                <Card
                                    hoverable
                                    style={{
                                        height: 350,
                                        width: 250,
                                    }}
                                    cover={
                                        <img style={{height: 180}} alt="" src={secondPhoto}/>
                                    }
                                >
                                    <div style={{height: 100}}>
                                        <a href="/">
                                            Najot - maktabda, najot - ta'limda, najot - bilimda!
                                        </a>
                                    </div>

                                    <h4>13.04.2022</h4>
                                </Card>
                            </div>
                        </Col>

                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                                <Card
                                    hoverable
                                    style={{
                                        height: 350,
                                        width: 250,
                                    }}
                                    cover={
                                        <img alt="" style={{height: 180}} src={thirdPhoto}/>
                                    }
                                >
                                    <div style={{height: 100}}>
                                        <a href="/">"Korrupsiyasiz soha" loyihasi amalda</a>
                                    </div>

                                    <h4>13.04.2022</h4>
                                </Card>
                            </div>
                        </Col>

                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                                <Card
                                    hoverable
                                    style={{
                                        height: 350,
                                        width: 250,
                                    }}
                                    cover={
                                        <img alt="" style={{height: 180}} src={fourPhoto}/>
                                    }
                                >
                                    <div style={{height: 100}}>
                                        <a href="/">
                                            Vinochilik texnologiyasi va sanoat uzumchilik fakulteti
                                            "Karyera kuni" bo'lib o'tdi
                                        </a>
                                    </div>

                                    <h4>13.04.2022</h4>
                                </Card>
                            </div>
                        </Col>
                    </div>
                </div>
            </div>

            <div className={"announcement"}>
                <div className={"home-title"}>
                    <h1 style={{color: "#00a0e9", marginTop: 15}}>
                        {announcement[language]}
                    </h1>
                </div>

                <div>
                    <div className="row">
                        <div className="row-4-3">
                            <Col className="gutter-row" span={8}>
                                <div style={style}>
                                    <Card
                                        hoverable
                                        style={{
                                            height: 350,
                                            width: 300,
                                        }}
                                        cover={
                                            <img alt="" style={{height: 180}} src={fivePhoto}/>
                                        }
                                    >
                                        <div style={{height: 100}}>
                                            <a href="/">
                                                ABITURIYENTLAR DIQQATIGA! TOSHKENT
                                                KIMYO-TEXNOLOGIYALAR INSTITUTIDA 2022-2023 O'QUV YILI
                                                UCHUN QO'SHMA TA'LIM DASTURLARI BO'YICHA QABUL
                                                BOSHLANDI!!!
                                            </a>
                                        </div>
                                    </Card>
                                </div>
                            </Col>
                        </div>
                        <div className="row-4-3">
                            <Col className="gutter-row" span={8}>
                                <div style={style}>
                                    <Card
                                        hoverable
                                        style={{
                                            height: 350,
                                            width: 300,
                                        }}
                                        cover={
                                            <img alt="" style={{height: 180}} src={sixPhoto}/>
                                        }
                                    >
                                        <div style={{height: 100}}>
                                            <a href="/">
                                                20-may "Marketing va talabalar amaliyoti" bo'limi va
                                                "Menejment va kasb ta'limi" fakulteti tomonidan
                                                "Karyera kuni" tashkil qilindi
                                            </a>
                                        </div>
                                    </Card>
                                </div>
                            </Col>
                        </div>
                        <div className="row-4-3">
                            <Col className="gutter-row " span={8}>
                                <div style={style}>
                                    <Card
                                        hoverable
                                        style={{
                                            height: 350,
                                            width: 300,
                                        }}
                                        cover={
                                            <img alt="" style={{height: 180}} src={sevenPhoto}/>
                                        }
                                    >
                                        <div style={{height: 100}}>
                                            <a href="/">
                                                20-may Marketing va talabalar amaliyoti bo'limi hamda
                                                Noorganik moddalar kimyoviy texnologiyasi fakulteti
                                                tomonidan navbatdagi Karyera kuni o'tkazildi
                                            </a>
                                        </div>
                                    </Card>
                                </div>
                            </Col>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"rectangle"}>
                <div className={"home-title"}>
                    <h1 style={{color: "#00a0e9", marginTop: 15}}>
                        {router[language]}
                    </h1>
                </div>

                <div className="row">
                    <Col span={6} gutter={[6, 12, 12, 24]} className="gutter-row">
                        <div style={{width: 300, textAlign: "center"}}>
                            <div className="numbers">
                                <b>1</b>
                            </div>

                            <div>
                                <h1 style={{color: "#00a0e9"}}>Arizani to'ldiring</h1>
                            </div>
                            <div>
                                <h3 style={{color: "#00a0e9"}}>
                                    Ariza formasini to'ldiring va kerakli hujjatlarni tizimga
                                    yuklang
                                </h3>
                            </div>
                        </div>
                    </Col>

                    <Col span={6} gutter={[6, 12, 12, 24]} className="gutter-row">
                        <div style={{width: 300, textAlign: "center"}}>
                            <div className="numbers">
                                <b>2</b>
                            </div>

                            <div>
                                <h1 style={{color: "#00a0e9"}}>Yo'nalishni tanlang</h1>
                                <h3 style={{color: "#00a0e9"}}>
                                    Ariza topshirmoqchi bo'lgan ta'lim yo'nalishlaridan birini
                                    tanlang
                                </h3>
                            </div>
                        </div>
                    </Col>

                    <Col span={6} gutter={[6, 12, 12, 24]} className="gutter-row">
                        <div style={{width: 300, textAlign: "center"}}>
                            <div className="numbers">
                                <b>3</b>
                            </div>

                            <div>
                                <h1 style={{color: "#00a0e9"}}>Arizani tasdiqlang</h1>
                                <h3 style={{color: "#00a0e9"}}>
                                    Ariza va hujjatlaringiz universitet qabul komissiyasi
                                    tomonidan ko'rib chiqilib tasdiqlanadi
                                </h3>
                            </div>
                        </div>
                    </Col>
                    <div className="gutter-row">
                        <Col span={6} gutter={[6, 12, 12, 24]} className="gutter-row">
                            <div style={{width: 300, textAlign: "center", marginTop: 25}}>
                                <div className="numbers">
                                    <b>4</b>
                                </div>

                                <div>
                                    <h1 style={{color: "#00a0e9"}}>
                                        Qaydnomani yuklab oling
                                    </h1>
                                </div>
                                <div>
                                    <h3 style={{color: "#00a0e9"}}>
                                        Login va parol orqali tizimga kiring hamda abituriyent
                                        qaydnomasini yuklab oling
                                    </h3>
                                </div>
                            </div>
                        </Col>
                    </div>
                </div>
                <div className="youtube">
                    <button className="youtube-btn">
                        <a style={{color: "red"}} href="/">
                            <YoutubeFilled/> <b>TO'LIQ YO'RIQNOMA</b>
                        </a>
                    </button>
                </div>
            </div>
            <div className="statistics">
                <div className="container1">
                    <div className="statistics_result">
                        <img src={studentImg} alt="img" width="80px"/>
                        <h2>
                            {chosen > 0 &&
                            (!!obj?.degree ||
                                !!obj?.country ||
                                !!obj?.university ||
                                !!obj?.faculty)
                                ? allStudents?.length
                                : 0}{" "}
                            ta talaba ro'yxatdan o'tgan
                        </h2>
                    </div>
                    <div className="content_wrapper">
                        <div className="first_select_form select_form">
                            <label className="select_label">Darajani tanlang:</label>
                            <select
                                onChange={(event) =>
                                    setObj({
                                        ...obj,
                                        degree: event?.target?.value,
                                    })
                                }
                                value={obj?.degree}
                            >
                                <option value=""></option>
                                <option value="bachelor">Bakalavr</option>
                                <option value="master">Magistr</option>
                            </select>
                        </div>
                        <div className="second_select_form select_form">
                            <label className="select_label">Davlatni tanlang:</label>
                            <select
                                onChange={(event) =>
                                    setObj({
                                        ...obj,
                                        country: event?.target?.value,
                                    })
                                }
                                value={obj?.country}
                            >
                                <option value=""></option>
                                {language === 0
                                    ? obj?.degree === "bachelor" &&
                                    listData[0]["bachelor"].map((p) => {
                                        return (
                                            <option value={p.country_uz}>{p.country_uz}</option>
                                        );
                                    })
                                    : obj?.degree === "bachelor" &&
                                    listData[0]["bachelor"].map((p) => {
                                        return (
                                            <option value={p.country_ru}>{p.country_ru}</option>
                                        );
                                    })}
                                {language === 0
                                    ? obj?.degree === "master" &&
                                    listData[0]["master"].map((p) => {
                                        return (
                                            <option value={p.country_uz}>{p.country_uz}</option>
                                        );
                                    })
                                    : obj?.degree === "master" &&
                                    listData[0]["master"].map((p) => {
                                        return (
                                            <option value={p.country_ru}>{p.country_ru}</option>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className="third_select_form select_form">
                            <label className="select_label">Universitetni tanlang:</label>
                            <select
                                onChange={(event) =>
                                    setObj({
                                        ...obj,
                                        university: event?.target?.value,
                                    })
                                }
                                value={obj?.university}
                            >
                                <option value=""></option>
                                {language === 0
                                    ? obj?.degree === "bachelor" &&
                                    listData[0]["bachelor"]
                                        .find((l) => l.country_uz === obj?.country)
                                        ?.universities.map((p) => {
                                        return <option value={p.name_uz}>{p.name_uz}</option>;
                                    })
                                    : obj?.degree === "bachelor" &&
                                    listData[0]["bachelor"]
                                        .find((l) => l.country_ru === obj?.country)
                                        ?.universities.map((p) => {
                                        return <option value={p.name_ru}>{p.name_ru}</option>;
                                    })}
                                {language === 0
                                    ? obj?.degree === "master" &&
                                    listData[0]["master"]
                                        .find((l) => l.country_uz === obj?.country)
                                        ?.universities.map((p) => {
                                        return <option value={p.name_uz}>{p.name_uz}</option>;
                                    })
                                    : obj?.degree === "master" &&
                                    listData[0]["master"]
                                        .find((l) => l.country_ru === obj?.country)
                                        ?.universities.map((p) => {
                                        return <option value={p.name_ru}>{p.name_ru}</option>;
                                    })}
                            </select>
                        </div>
                        <div className="fourth_select_form select_form">
                            <label className="select_label">
                                Smenani tanlang:
                            </label>
                            <select onChange={(e) =>
                                setObj({
                                    ...obj,
                                    smena: e.target.value,
                                })
                            }
                                    value={obj.smena}
                            >
                                <option value=""></option>
                                <option value="day">
                                    {day[language]}
                                </option>
                                <option value="night">
                                    {night[language]}
                                </option>
                            </select>
                        </div>
                        <div className="fourth_select_form select_form">
                            <label className="select_label">
                                Ta'lim yo'nalishni tanlang:
                            </label>
                            <select
                                onChange={(event) =>
                                    setObj({
                                        ...obj,
                                        faculty: event.target.value,
                                    })
                                }
                                value={obj?.faculty}
                            >
                                <option value=""></option>
                                {
                                    language === 0 ?
                                        (obj.degree === "master" &&
                                            listData[0]["master"].find(l => l.country_uz === obj?.country)?.universities?.find(u => u.name_uz === obj?.university)?.facs?.[obj.smena]?.map(p => {
                                                return (
                                                    <option value={p?.name_uz}>{p?.name_uz}</option>
                                                )
                                            })) :
                                        (obj.degree === "master" &&
                                            listData[0]["master"].find(l => l.country_ru === obj?.country)?.universities?.find(u => u.name_ru === obj?.university)?.facs?.[obj.smena]?.map(p => {
                                                return (
                                                    <option value={p?.name_ru}>{p?.name_ru}</option>
                                                )
                                            }))
                                }
                                {
                                    language === 0 ?
                                        (obj.degree === "bachelor" &&
                                            listData[0]["bachelor"].find(l => l.country_uz === obj?.country)?.universities?.find(u => u.name_uz === obj?.university)?.facs?.[obj.smena]?.map(p => {
                                                return (
                                                    <option value={p?.name_uz}>{p?.name_uz}</option>
                                                )
                                            })) :
                                        (obj.degree === "bachelor" &&
                                            listData[0]["bachelor"].find(l => l.country_ru === obj?.country)?.universities?.find(u => u.name_ru === obj?.university)?.facs?.[obj.smena]?.map(p => {
                                                return (
                                                    <option value={p?.name_ru}>{p?.name_ru}</option>
                                                )
                                            }))
                                }
                            </select>
                        </div>

                    </div>
                    <div className="search_result_button">
                        <button onClick={() => handleDefine()}>Aniqlash</button>
                    </div>
                </div>
            </div>
            <div className={"rectangle2"}>
                <div>
                    <h3 style={{color: "white"}}>
                        <EnvironmentFilled/> <b>Manzil:</b>{" "}
                        <a target="_blank" href="https://goo.gl/maps/yTkSZdFJnDFJiZDj8">
                            <b style={{color: "white"}}>
                                {" "}
                                Toshkent sh. Navoiy ko'chasi, 32-uy, 100011
                            </b>{" "}
                        </a>
                    </h3>
                    <h3 style={{color: "white"}}>
                        <PhoneFilled/> Telefon:{" "}
                        <a style={{color: "white"}} href="tel:+998712447915">
                            {" "}
                            (998-97) 997-90-93{" "}
                        </a>
                        ,{" "}
                        <a style={{color: "white"}} href="tel:+998712447918">
                            {" "}
                            (998-99) 722-67-65{" "}
                        </a>

                    </h3>
                    <h3 style={{color: "white"}}>
                        <MailFilled/> Email:{" "}
                        <a style={{color: "white"}} href="mailto:info@tcti.uz">
                            {" "}
                            info@tcti.uz
                        </a>
                    </h3>
                </div>

            </div>
            <br/>
        </div>
    );
}

export default Home
