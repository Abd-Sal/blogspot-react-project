import { BsFeather } from "react-icons/bs";

const ArticleCard = ({id, title, author, created, field_image, cardType=1}) => {
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
                        <h3 className="mt-2 home-art-title mb-0">{title}</h3>
                    </div>
                    <hr className="art-separator w-100"/>
                    <div className="d-flex justify-content-start align-items-center gap-3 w-100">
                        <BsFeather fontSize={25} className="color-purple"/>
                        <h4 className="home-author">{author}</h4>
                    </div>
                </div>
            </>
              )
        case 2:
            return(
                <div>

                </div>
            )
        default:
            return(<div></div>)
    }
}

export default ArticleCard