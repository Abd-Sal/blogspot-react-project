import { BsFeather } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const ArticleCard = ({id, title, desciption, author, created, field_image, cardType=1}) => {
    switch (cardType) {
        case 1:
            return (
            <>
                <div className="w-100 h-100 rounded-3 bg-white d-flex flex-column justify-content-center align-items-center gap-2 p-3">
                    <div className="d-flex justify-content-center align-items-center h-50 rounded-4 ">
                        <img src={field_image} alt="article image" className="art-home-img rounded-2"/>
                    </div>
                    <div className="w-100 d-flex flex-column justify-content-center align-items-start pt-3">
                        <button className="btn sience rounded-4 ps-5 pe-5">Sience</button>
                        <h3 className="mt-2 home-art-title mb-0">
                            {
                                title.length > 20 ?
                                    title.substring(0, 20) + '...'
                                :
                                    title
                            }
                        </h3>
                    </div>
                    <hr className="art-separator w-100"/>
                    <div className="d-flex justify-content-start align-items-center gap-3 w-100">
                        <BsFeather fontSize={25} className="color-purple"/>
                        <h4 className="home-author">
                            {
                                author.length > 15 ?
                                    author.substring(0, 15) + '...'
                                :
                                    author
                            }
                        </h4>
                    </div>
                </div>
            </>
              )
        case 2:
            return(
                <div
                    id={id} 
                    className="p-2 w-100 d-flex flex-wrap justify-content-start align-items-center gap-3 rounded-4 border border-gray"
                >
                    <div className="w-100 h-100 d-flex justify-content-center align-items-center ">
                        <img 
                            src={field_image} 
                            alt="article image"
                            className="art-list-img rounded-2"
                        />
                    </div>

                    <div className="w-100 d-flex flex-column justify-content-center align-items-start gap-3">
                        <h3>
                            {
                                title.length > 100 ?
                                    title.slice(0, 100) + "..."
                                :
                                    title
                            }
                        </h3>
                        <p>
                            {
                                desciption.length > 350 ?
                                    desciption.slice(0, 350) + "..."
                                :
                                    desciption
                            }
                        </p>
                        <div className="w-100 d-flex justify-content-between align-items-center">
                            <h5>Writer : {author}</h5>
                            <h5>{created}</h5>
                        </div>
                        <NavLink
                            to={`/articles/${id}`}
                            className="border border-white btn btn-purple rounded-2 w-100 pt-2 pb-2 d-flex justify-content-center align-items-center text-white"
                        >
                            Read More
                        </NavLink>
                    </div>
                </div>
            )
        default:
            return(<div></div>)
    }
}

export default ArticleCard