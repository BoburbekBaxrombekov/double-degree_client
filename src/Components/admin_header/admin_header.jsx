import newsIcon from '../../images/newspaper-solid.png'
import pageIcon from '../../images/file-lines-solid.png'
import announcementIcon  from '../../images/scroll-solid.png'
import uploadIcon from '../../images/photo-film-solid.png'
import photoIcon from '../../images/image-solid.png'
import videoIcon from '../../images/film-solid.png'
import fileIcon from '../../images/file-solid.png'
import chartIcon from '../../images/chart-line-solid.png'
import './admin_header.css'
import {Link} from 'react-router-dom'

function AdminHeader() {
    return (
        <>
            <div id="wrapper">
                <div className="topbar">
                    <div className="topbar-left">
                        <Link to="/" className="logo">
                            <span className="logo-light">
                                <h1>TKTI</h1>
                            </span>
                            <span className="logo-sm">
                                <i className="fa-solid fa-newspaper"></i>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="left side-menu">
                    <div className="slimscroll-menu" id="remove-scroll">
                        <div id="sidebar-menu">
                            <ul className="metismenu" id="side-menu">
                            <li className="menu-title">Menu</li>
                                <li>
                                    <a href="/qabul" className="waves-effect">
                                        <i
                                        className="mdi  mdi-message-text-outline text-white bg-warning"><img src={newsIcon} alt="" width={18} /></i>
                                        <span> Barcha Talabalar </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/paid" className="waves-effect">
                                        <i
                                        className="mdi  mdi-message-text-outline text-white bg-warning"><img src={pageIcon} alt="" width={15} /></i>
                                        <span> To'lov qilgan talabalar </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/statistics" className="waves-effect">
                                        <i
                                        className="mdi mdi-trending-up bg-success text-white"><img src={chartIcon} alt="" width={18} /></i>
                                        <span> Statistika </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/paidpages" className="waves-effect">
                                        <i
                                        className="mdi mdi-trending-up bg-success text-white"><img src={pageIcon} alt="" width={15} /></i>
                                        <span> To'lov varaqalari </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminHeader;
