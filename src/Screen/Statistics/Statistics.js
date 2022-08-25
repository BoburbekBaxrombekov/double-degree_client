import React, { useEffect, useState } from 'react';
import AdminHeader from "../../Components/admin_header/admin_header";
import { Card } from 'antd';
import { MainApi } from "../../services/api";
import studentImg from "../../student.png";
import { listData } from "../../utils/data";

function Statistics({ language }) {
    const [allStudents, setAllStudents] = useState([])
    const [allStudents1, setAllStudents1] = useState([])
    const [tolov, setTolov] = useState(0)
    const [facultet1, setFacultet1] = useState(0)
    const [facultet2, setFacultet2] = useState(0)
    const [facultet3, setFacultet3] = useState(0)
    const [facultet4, setFacultet4] = useState(0)
    const [facultet5, setFacultet5] = useState(0)
    const [facultet6, setFacultet6] = useState(0)
    const [facultet7, setFacultet7] = useState(0)
    const [facultet8, setFacultet8] = useState(0)
    const [facultet9, setFacultet9] = useState(0)
    const [facultet10, setFacultet10] = useState(0)
    const [facultet11, setFacultet11] = useState(0)
    const [facultet12, setFacultet12] = useState(0)
    const [facultet13, setFacultet13] = useState(0)
    const [facultet14, setFacultet14] = useState(0)
    const [facultet15, setFacultet15] = useState(0)
    const [facultet16, setFacultet16] = useState(0)
    const [facultet17, setFacultet17] = useState(0)
    const [facultet18, setFacultet18] = useState(0)
    const [facultet19, setFacultet19] = useState(0)
    const [facultet20, setFacultet20] = useState(0)
    const [facultet21, setFacultet21] = useState(0)
    const [facultet22, setFacultet22] = useState(0)
    const [facultet23, setFacultet23] = useState(0)
    const [facultet24, setFacultet24] = useState(0)
    const [facultet25, setFacultet25] = useState(0)

    const [obj, setObj] = useState({
        degree: "",
        country: "",
        university: "",
        faculty: ""
    })
    const [chosen, setChosen] = useState(0)



    const handleDefine = () => {
        if (language === 0) {
            setAllStudents(allStudents1?.filter(
                i => (
                    i?.study_level.toString().toLowerCase()?.includes(obj?.degree.toString().toLowerCase()) &&
                    i?.facultet.toString().toLowerCase()?.includes(obj?.faculty.toString().toLowerCase()) &&
                    i?.university.toString().toLowerCase()?.includes(obj?.university.toString().toLowerCase()) &&
                    i?.country.toString().toLowerCase()?.includes(obj?.country.toString().toLowerCase())
                )
            ))
        } else {
            if (language === 1) {
                setAllStudents(allStudents1?.filter(
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
        fetch(`${MainApi}/students/all`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setAllStudents1(data)
            });
        fetch(`${MainApi}/tolov/all`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setTolov(data?.length)
            });
        fetch(`${MainApi}/students/v1`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet1(data?.total)
            });
        fetch(`${MainApi}/students/v2`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet2(data?.total)
            });
        fetch(`${MainApi}/students/v3`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet3(data?.total)
            });
        fetch(`${MainApi}/students/v4`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet4(data?.total)
            });
        fetch(`${MainApi}/students/v5`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet5(data?.total)
            });
        fetch(`${MainApi}/students/v6`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet6(data?.total)
            });
        fetch(`${MainApi}/students/v7`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet7(data?.total)
            });
        fetch(`${MainApi}/students/v18`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet8(data?.total)
            });
        fetch(`${MainApi}/students/v9`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet9(data?.total)
            });
        fetch(`${MainApi}/students/v10`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet10(data?.total)
            });
        fetch(`${MainApi}/students/v11`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet11(data?.total)
            });
        fetch(`${MainApi}/students/v12`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet12(data?.total)
            });
        fetch(`${MainApi}/students/v13`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet13(data?.total)
            });
        fetch(`${MainApi}/students/v14`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet14(data?.total)
            });
        fetch(`${MainApi}/students/v15`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet15(data?.total)
            });
        fetch(`${MainApi}/students/v16`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet16(data?.total)
            });
        fetch(`${MainApi}/students/v17`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet17(data?.total)
            });
        fetch(`${MainApi}/students/v18`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet18(data?.total)
            });
        fetch(`${MainApi}/students/v19`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet19(data?.total)
            });
        fetch(`${MainApi}/students/v20`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet20(data?.total)
            });
        fetch(`${MainApi}/students/v21`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet21(data?.total)
            });
        fetch(`${MainApi}/students/v22`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet22(data?.total)
            });
        fetch(`${MainApi}/students/v23`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet23(data?.total)
            });
        fetch(`${MainApi}/students/v24`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet24(data?.total)
            });
        fetch(`${MainApi}/students/v25`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet25(data?.total)
            });
        fetch(`${MainApi}/students/v26`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFacultet25(data?.total)
            });
    }, [])
    return (
        <div className='root_page'>
            <AdminHeader />

            <div className="left_spaced statistics">
                <Card title="Abiturientlar soni" style={{ width: 300 }}>
                    <p>{allStudents1?.length}</p>
                </Card>
                <Card title="To'lovlar soni" style={{ width: 300 }}>
                    <p>{tolov}</p>
                </Card>
                <Card title="Tanlovga mos abiturientlar" style={{ width: 300 }}>
                    <p>{allStudents?.length}</p>
                </Card>
            </div>
            <div className="container2">
                <div className="statistics_result">
                    <img src={studentImg} alt="img" width="80px" />
                    <h2>{(chosen > 0 &&
                        (!!obj?.degree || !!obj?.country || !!obj?.university || !!obj?.faculty)) ? allStudents?.length : 0} ta
                        talaba ro'yxatdan o'tgan</h2>
                </div>
                <table border="2" className='statistic__table'>
                    <span className='table__magstr'>Бакалавриат</span>
                    <tr>
                        <th >Ҳамкор хорижий олий таълим муассасаси номи</th>
                        <th>Таълим йўналишлари ва мутахассисликлар номи</th>
                        <th>Таълим йўналишлари ва мутахассисликларга тушган аризалар сони</th>
                    </tr>
                    <tr>
                        <td rowspan="4">Беларусь Республикаси, Белоруссия давлат озиқ-овқат ва кимёвий технологиялар университети</td>
                        <td >Технологик машиналар ва жиҳозлар (тармоқлар бўйича)</td>
                        <td >{`-`}</td>

                    </tr>
                    <tr>

                        <td>Озиқ-овқат технологияси (нон, макарон ва қандолатчилик маҳсулотлари)</td>
                        <td >{`${facultet1}`}</td>
                    </tr>
                    <tr>
                        <td>Озиқ-овқат технологияси (дон маҳсулотлари)</td>
                        <td >{`${facultet3}`}</td>

                    </tr>
                    <tr>
                        <td>Технологик машиналар ва жиҳозлар(совутиш, криоген техникаси ва мўътадиллаш тизимлари машиналари ҳамда агрегатлари)</td>
                        <td >{`${facultet4}`}</td>

                    </tr>

                    {/* 2 */}
                    <tr>
                        <td rowspan="5">Беларусь Республикаси, Белоруссия давлат технология университети</td>
                        <td >Технологик машиналар ва жиҳозлар (тармоқлар бўйича)</td>
                        <td >{`${facultet2}`}</td>
                    </tr>
                    <tr>
                        <td>Кимёвий технология (қурилиш материаллар)</td>
                        <td >{`${facultet6}`}</td>
                    </tr>
                    <tr>
                        <td>Технологик машиналар ва жиҳозлар (тармоқлар бўйича) </td>
                        <td >{`${facultet4}`}</td>
                    </tr>
                    <tr>
                        <td>Кимёвий технология (ишлаб чиқариш турлари бўйича) </td>
                        <td >{`${facultet8}`}</td>
                    </tr>
                    <tr>
                        <td>Технологик жараёнлар ва ишлаб чиқаришни автоматлаштириш ва бошқариш (тармоқлар бўйича) </td>
                        <td >{`${facultet9}`}</td>

                    </tr>
                    {/* 3 */}
                    <tr>
                        <td rowspan="3">Беларусь Республикаси, Полоцк давлат университети</td>
                        <td >Машинасозлик технологияси, машинасозлик ишлаб чиқаришини жиҳозлаш ва автоматлаштириш  </td>
                        <td >{`${facultet10}`}</td>
                    </tr>
                    <tr>

                        <td>Нефть ва нефть-газни қайта ишлаш технологияси</td>
                        <td >{`${facultet11}`}</td>
                    </tr>
                    <tr>
                        <td>Нефть ва газ қувурлари, база ва омборларини қуриш ва улардан фойдаланиш</td>
                        <td >{`${facultet12}`}</td>
                    </tr>

                    {/* 4 */}
                    <tr>
                        <td rowspan="1">Беларусь Республикаси, Янка Купала номидаги Гродно давлат университети</td>
                        <td >Менежмент (озиқ-овқат ва кимё саноати)</td>
                        <td >{`${facultet13}`}</td>
                    </tr>

                    {/* 5 */}
                    <tr>
                        <td rowspan="3">Россия Федерацияси, Қозон (Волгабўйи) Федерал университети</td>
                        <td>Мехатроника ва робототехника</td>
                        <td >{`${facultet11}`}</td>
                    </tr>
                    <tr>

                        <td>Материалшунослик ва янги материаллар технологияси (тармоқлар бўйича)</td>
                        <td >{`${facultet12}`}</td>
                    </tr>
                    <tr>
                        <td>Технологик жараёнлар ва ишлаб чиқаришни автоматлаштириш ва бошқариш (тармоқлар буйича)</td>
                        <td >{`${facultet13}`}</td>
                    </tr>
                {/* 6 */}
                    <tr>
                        <td rowspan="1">Латвия республикаси, Латвия табиий фанлар ва технология университети </td>
                        <td >Озиқ-овқат технологияси (маҳсулот турлари бўйича)</td>
                        <td >{`${facultet14}`}</td>
                    </tr>
                    {/* 7 */}
                    <tr>
                        <td rowspan="2">Туркия, Остим техника университети </td>
                        <td>Материалшунослик ва янги материаллар технологияси (тармоқлар бўйича)»</td>
                        <td >{`${facultet15}`}</td>
                    </tr>
                    <tr>
                        <td>Технологик жараёнларни бошқаришнинг ахборот – коммуникация тизимлари</td>
                        <td >{`${facultet16}`}</td>
                    </tr>
                    <span className='table__magstr'>Магистратура </span>

                    <tr>
                        <td rowspan="3">Беларусь Республикаси,
                            Белоруссия давлат технология университети</td>
                        <td>Кимёвий технология жараёнлари ва аппаратлари (ишлаб чиқариш тури бўйича)</td>
                        <td >{`${facultet17}`}</td>
                    </tr>
                    <tr>
                        <td>Ёғочга ишлов бериш технологияси ва ёғочшунослик</td>
                        <td >{`${facultet18}`}</td>
                    </tr>
                    <tr>
                        <td>Кимёвий технология(силикат ва қийин эрийдиган нометалл материаллар)</td>
                        <td >{`${facultet19}`}</td>
                    </tr>
                    {/* 2 */}
                    <tr>
                        <td rowspan="2">Беларусь Республикаси, Белоруссия давлат озиқ-овқат ва кимёвий технология университети</td>
                        <td>Озиқ-овқат маҳсулотларини ишлаб чиқариш ва қайта ишлаш технологияси (маҳсулот турлари бўйича)</td>
                        <td >{`${facultet20}`}</td>
                    </tr>
                    <tr>
                        <td>Озиқ-овқат саноати машиналари ва агрегатлари</td>
                        <td >{`${facultet21}`}</td>
                    </tr>
                    {/* 3 */}
                    <tr>
                        <td rowspan="2">Беларусь Республикаси, Полоцк давлат университети</td>
                        <td>Нефт ва газни қайта ишлаш ва кимёвий технологияси </td>
                        <td >{`${facultet22}`}</td>
                    </tr>
                    <tr>
                        <td>Нефть ва газ қувурлари, база ва омборларини қуриш ва улардан фойдаланиш</td>
                        <td >{`${facultet23}`}</td>
                    </tr>
                    <tr>
                        <td rowspan="1">Туркия, Остим техника университети </td>
                        <td>Технологик жараёнлар ва ишлаб чиқаришни автоматлаштириш (тармоқлар бўйича)</td>
                        <td >{`${facultet24}`}</td>
                    </tr>
                    <tr>
                        <td rowspan="1">Венгрия, Дебрецен университети </td>
                        <td>Озиқ-овқат хавфсизлиги ва сифати</td>
                        <td >{`${facultet25}`}</td>
                    </tr>
                    <tr>
                        <td rowspan="1">Латвия республикаси, Латвия табиий фанлар ва технология университети  </td>
                        <td>Озиқ-овқат маҳсулотларини ишлаб чиқариш ва қайта ишлаш технологияси (маҳсулот турлари бўйича)</td>
                        <td >{`${facultet5}`}</td>
                    </tr>


                </table>
                <div className="content_wrapper1">
                    <div className="width1001">
                        <label>
                            Darajani tanlang:
                        </label>
                        <select
                            onChange={event => setObj({
                                ...obj,
                                degree: event?.target?.value
                            })}
                            value={obj?.degree}
                            className="width100"
                        >
                            <option value=""></option>
                            <option value="bachelor">Bakalavr</option>
                            <option value="master">Magistr</option>
                        </select>
                    </div>
                    <div className="width1001">
                        <label>
                            Davlatni tanlang:
                        </label>
                        <select
                            onChange={event => setObj({
                                ...obj,
                                country: event?.target?.value
                            })}
                            value={obj?.country}
                            className="width100"
                        >
                            <option value=""></option>
                            {
                                language === 0 ?
                                    obj?.degree === "bachelor" &&
                                    listData[0]["bachelor"].map(p => {
                                        return (
                                            <option value={p.country_uz}>{p.country_uz}</option>
                                        )
                                    })
                                    :
                                    obj?.degree === "bachelor" &&
                                    listData[0]["bachelor"].map(p => {
                                        return (
                                            <option value={p.country_ru}>{p.country_ru}</option>
                                        )
                                    })
                            }
                            {
                                language === 0 ?
                                    (obj?.degree === "master" &&
                                        listData[0]["master"].map(p => {
                                            return (
                                                <option value={p.country_uz}>{p.country_uz}</option>
                                            )
                                        }))
                                    :
                                    (obj?.degree === "master" &&
                                        listData[0]["master"].map(p => {
                                            return (
                                                <option value={p.country_ru}>{p.country_ru}</option>
                                            )
                                        }))
                            }
                        </select>
                    </div>
                    <div className="width1001">
                        <label>
                            Universitetni tanlang:
                        </label>
                        <select
                            onChange={event => setObj({
                                ...obj,
                                university: event?.target?.value
                            })}
                            value={obj?.university}
                            className="width100"
                        >
                            <option value=""></option>
                            {
                                language === 0 ?
                                    (
                                        obj?.degree === "bachelor" &&
                                        listData[0]["bachelor"].find(l => l.country_uz === obj?.country)?.universities.map(p => {
                                            return (
                                                <option value={p.name_uz}>{p.name_uz}</option>
                                            )
                                        })
                                    )
                                    :
                                    (
                                        obj?.degree === "bachelor" &&
                                        listData[0]["bachelor"].find(l => l.country_ru === obj?.country)?.universities.map(p => {
                                            return (
                                                <option value={p.name_ru}>{p.name_ru}</option>
                                            )
                                        })
                                    )
                            }
                            {
                                language === 0 ?
                                    (
                                        obj?.degree === "master" &&
                                        listData[0]["master"].find(l => l.country_uz === obj?.country)?.universities.map(p => {
                                            return (
                                                <option value={p.name_uz}>{p.name_uz}</option>
                                            )
                                        })
                                    )
                                    :
                                    (
                                        obj?.degree === "master" &&
                                        listData[0]["master"].find(l => l.country_ru === obj?.country)?.universities.map(p => {
                                            return (
                                                <option value={p.name_ru}>{p.name_ru}</option>
                                            )
                                        })
                                    )
                            }
                        </select>
                    </div>

                    <div className="width1001">
                        <label>
                            Talim yo'nalishni tanlang:
                        </label>
                        <select
                            onChange={event => setObj({
                                ...obj,
                                faculty: event?.target?.value
                            })}
                            value={obj?.faculty}
                            className="width100"
                        >
                            <option value=""></option>
                            {
                                language === 0 ?
                                    (
                                        obj?.degree === "master" &&
                                        listData[0]["master"].find(l => l.country_uz === obj?.country)?.universities?.find(u => u.training_uz === obj?.university)?.faculties?.map(p => {
                                            return (
                                                <option value={p?.training_uz}>{p?.training_uz}</option>
                                            )
                                        })
                                    )
                                    :
                                    obj?.degree === "master" &&
                                    listData[0]["master"].find(l => l.country_ru === obj?.country)?.universities?.find(u => u.training_ru === obj?.university)?.faculties?.map(p => {
                                        return (
                                            <option value={p?.training_ru}>{p?.training_ru}</option>
                                        )
                                    })
                            }
                            {
                                language === 0 ?
                                    (
                                        obj?.degree === "bachelor" &&
                                        listData[0]["bachelor"].find(l => l.country_uz === obj?.country)?.universities?.find(u => u.name_uz === obj?.university)?.faculties?.map(p => {
                                            return (
                                                <option value={p?.name_uz}>{p?.name_uz}</option>
                                            )
                                        })
                                    )
                                    :
                                    obj?.degree === "bachelor" &&
                                    listData[0]["bachelor"].find(l => l.country_ru === obj?.country)?.universities?.find(u => u.name_ru === obj?.university)?.faculties?.map(p => {
                                        return (
                                            <option value={p?.name_ru}>{p?.name_ru}</option>
                                        )
                                    })
                            }
                        </select>
                    </div>

                    <div className="width1001">
                        <label>
                            Yo'nalishni tanlang:
                        </label>
                        <select
                            onChange={event => setObj({
                                ...obj,
                                faculty: event?.target?.value
                            })}
                            value={obj?.faculty}
                            className="width100"
                        >
                            <option value=""></option>
                            {
                                language === 0 ?
                                    (
                                        obj?.degree === "master" &&
                                        listData[0]["master"].find(l => l.country_uz === obj?.country)?.universities?.find(u => u.name_uz === obj?.university)?.faculties?.map(p => {
                                            return (
                                                <option value={p?.name_uz}>{p?.name_uz}</option>
                                            )
                                        })
                                    )
                                    :
                                    obj?.degree === "master" &&
                                    listData[0]["master"].find(l => l.country_ru === obj?.country)?.universities?.find(u => u.name_ru === obj?.university)?.faculties?.map(p => {
                                        return (
                                            <option value={p?.name_ru}>{p?.name_ru}</option>
                                        )
                                    })
                            }
                            {
                                language === 0 ?
                                    (
                                        obj?.degree === "bachelor" &&
                                        listData[0]["bachelor"].find(l => l.country_uz === obj?.country)?.universities?.find(u => u.name_uz === obj?.university)?.faculties?.map(p => {
                                            return (
                                                <option value={p?.name_uz}>{p?.name_uz}</option>
                                            )
                                        })
                                    )
                                    :
                                    obj?.degree === "bachelor" &&
                                    listData[0]["bachelor"].find(l => l.country_ru === obj?.country)?.universities?.find(u => u.name_ru === obj?.university)?.faculties?.map(p => {
                                        return (
                                            <option value={p?.name_ru}>{p?.name_ru}</option>
                                        )
                                    })
                            }
                        </select>
                    </div>
                    <br />
                </div>
                <div>
                    <button onClick={() => handleDefine()}>Aniqlash</button>
                </div>
            </div>
        </div>
    );
}

export default Statistics;
