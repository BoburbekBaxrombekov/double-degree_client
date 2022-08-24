import {useEffect, useState} from "react";
import {MainApi} from "../../services/api";
import {Checkbox, Modal, Table} from "antd";

function PaidPapers() {
    const [tolov, setTolov] = useState([])

    useEffect(() => {
        fetch(`${MainApi}/tolov/all`)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              setTolov(data)
            });
    }, [])
    const columns = [
        {
            title: `To'lov varaqasiga havola`,
            dataIndex: 'img',
            key: 'img',
            render: text => <a href={`${text}`}>{text}</a>
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: "Ariza id",
            key: 'arizaId',
            dataIndex: `arizaId`,
            render: text => <a href={`/user/${text}`}>{text}</a>
        }
    ];
   
    return (
        <>
            <div className="left_spaced">
                <div className="row pt-5 students_list">
                    <div className="col-xl-12">
                        <div className="card ">
                            <div className="card-body">
                                {/* <div className="box">
                                    <form name="search" className="search_form">
                                        <input
                                            type="text"
                                            className="input"
                                            name="txt"
                                            onmouseout="document.search.txt.value = ''"
                                            onChange={(e) => {
                                                setSearchTerm(e.target.value);
                                            }}
                                        />{" "}
                                        <span className="deff">Search</span>
                                    </form>
                                </div> */}
                                {/* <h4 className="mt-0 mb-4 pt-2">Barcha e`lonlar ro'yhati</h4> */}
                                <div className="table-responsive mt-5">
                                    <Table scroll={{x: "max-content"}} columns={columns} dataSource={tolov}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PaidPapers;
