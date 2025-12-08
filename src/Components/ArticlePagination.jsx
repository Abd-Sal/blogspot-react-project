import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ArticlePagination = ({totalPages}) => {
    if(totalPages > 1)
        return (
            <>
                <div className="w-100 h-100 d-flex justify-content-center align-items-center my-4 overflow-x-auto" >
                    <button className="btn btn-dark prev"><FaAngleLeft /></button>
                    {
                        Array.isArray(totalPages) &&
                        totalPages.map((item, index)=>(
                            <button 
                                id={index+1}
                                key={index+1}
                                className="btn btn-gray page"
                            >{index+1}</button>
                        ))
                    }
                    <button className="btn btn-dark next"><FaAngleRight /></button>
                </div>
            </>
        )
    return(
        <>
        </>
    )
}

export default ArticlePagination