import AdminHeader from '../../Components/admin_header/admin_header'
import PaidPapers from '../../Components/paid_papers/paid_papers'


function PaidUserPage() {
    return (
       <div className='root_page'>
            <AdminHeader />
            <PaidPapers />
       </div>
    )
}

export default PaidUserPage
