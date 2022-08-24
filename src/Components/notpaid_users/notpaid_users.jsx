import {  useState, useEffect } from 'react'
import {MainApi} from "../../services/api";

function NotPaidUsers() {
    const [searchTerm, setSearchTerm] = useState([])
    const [allStudents, setAllStudents] = useState([])
    useEffect(() => {
        fetch(`${MainApi}/students/notpaid`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setAllStudents(data)
            });
    }, [])
    return (
        <>
            <div className="left_spaced">
                <div className="row pt-5 students_list">
                    <div className="col-xl-12">
                        <div className="card ">
                            <div className="card-body">
                                <div className="box">
                                    <form name="search" className='search_form'>
                                        <input type="text" className="input" name="txt" onmouseout="document.search.txt.value = ''" onChange={e => {
                                            setSearchTerm(e.target.value)
                                        }} /> <span className="deff">Search</span>
                                    </form>
                                </div>
                                <h4 className="mt-0 mb-4 pt-2">Barcha e`lonlar ro'yhati</h4>
                                <div className="table-responsive mt-5">
                                    <table className="table table-hover">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">Rasm</th>
                                                <th scope="col">ID</th>
                                                <th scope="col">Ismi</th>
                                                <th scope="col">Familiyasi</th>
                                                <th scope="col">Otasining ismi</th>
                                                <th scope="col">Universiteti</th>
                                                <th scope="col">Fakulteti</th>
                                                <th scope="col">Darajasi </th>
                                                <th scope="col">To'lov qilgan </th>
                                            </tr>
                                        </thead>
                                        {allStudents.reverse().filter((val) => {
                                            if (searchTerm == "") {
                                                return val
                                            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                return val
                                            } else if (val.surename.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                return val
                                            }
                                        }).map(item => (
                                            <tbody className="list_item_2">
                                                <td><img src={`${MainApi}/getfiles/${item.bio_img}`} className="sizeArticleImage" alt="" width={50} /></td>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.surename}</td>
                                                <td className='list_body'>{item.father_name}</td>
                                                <td className="">{item.university}</td>
                                                <td className="">{item.facultet}</td>
                                                <td className="">{item.study_level}</td>
                                                <td className=""><input type="checkbox" checked={item.checked} onClick={() => {
                                                    fetch(`${MainApi}/students/checked/${item.id}`, {
                                                        method: 'PUT',
                                                        headers: {
                                                            'Accept': 'application/json',
                                                            'Content-Type': 'application/json'
                                                        },
                                                        body: JSON.stringify(
                                                            {
                                                                checked: !item.checked
                                                            }
                                                        )
                                                    }).then(function (res) { return res.json(); })
                                                        .then(function (data) { console.log(data); })
                                                    window.location.reload()
                                                }} /></td>
                                            </tbody>
                                        ))}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotPaidUsers;
