export default function Breadcrumb({page, activePage}){
    return(
        <nav className="py-5">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    {/* Breadcrumb */}
                    <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
                    <li className="breadcrumb-item">
                        <a className="text-gray-400" href="index.html">Home</a>
                    </li>
                    {
                        page ? (
                            <li className="breadcrumb-item">
                                <a className="text-gray-400" href="blog.html">{page}</a>
                            </li>
                        ):null
                    }
                    <li className="breadcrumb-item active">
                        {activePage}
                    </li>
                    </ol>
                </div>
                </div>
            </div>
        </nav>
    )
}