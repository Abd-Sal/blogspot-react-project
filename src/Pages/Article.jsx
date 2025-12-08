import { useContext, useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { AuthContext } from "../Context/AuthContext"
import { BlogService } from "../Services/BlogService"
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Article = () => {
    const {authInfo, isInitialized} = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)
    const [failedMsg, setFailedMsg] = useState("")
    const [article, setArticle] = useState(null)
    const [articleID, setArticleID] = useState(null)
    const navigate = useNavigate();

    const getArticleIDFromURL = () => {
        const pathParts = window.location.pathname.split('/');
        setArticleID(pathParts[pathParts.length - 1]);
        return pathParts[pathParts.length - 1];
    }
    const getArticle = () => {
        setIsLoading(true)
        setFailedMsg("")
        BlogService.ARTICLE_DETAILS({
            credintials: authInfo.credintials,
            articleID: articleID
        })
        .then((data)=>{
            setArticle(data)
        })
        .catch((error)=>{
            setFailedMsg(error.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    useEffect(()=>{
        getArticleIDFromURL()
    }, [])

    useEffect(()=>{
        if(articleID)
        getArticle()
    }, [articleID])

    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
        });
        return () => {
            Fancybox.destroy();
        };
    }, []);

    if(isInitialized)
        return (
            <Container className="read-article-body rounded-2 mt-5 mb-5">
                <Row>
                    <Col lg={12} className="mt-3">
                        <button
                            className="btn btn-dark ps-3 pe-3"
                            onClick={()=>{
                                navigate('/articles', {replace : true})
                            }}
                        ><FaAngleLeft /></button>                    
                    </Col>
                    {
                        isLoading &&
                        <Col lg={12} className="w-100 h-100 d-flex justify-content-center align-items-center">
                            <Spinner animation="grow" className="bg-main-color"/>
                        </Col>
                    }
                    {
                        failedMsg &&
                        <Col lg={12} className="w-100 h-100 d-flex justify-content-center align-items-center">
                            <Alert key={'danger'} variant={'danger'} className="">
                                {failedMsg}
                                <button 
                                className="btn btn-danger"
                                onClick={getArticle}
                                >Try Again</button>
                            </Alert>
                        </Col>
                    }
                    {
                        article &&
                        <Col lg={12} className="mt-5 mb-5">
                            <div className="w-100 d-flex justify-content-between align-items-center">
                                <p><strong>Post Date: </strong>
                                    {
                                        function(){
                                            const options = { 
                                              year: 'numeric', 
                                              month: 'long', 
                                              day: 'numeric',
                                              hour: '2-digit',
                                              minute: '2-digit',
                                              timeZoneName: 'short'
                                              };
                                              return new Date(article.created[0].value).toLocaleString('en-US', options);
                                        }()
                                    }</p>
                                <p><strong>Category: </strong>{article.field_category[0].target_type.split('_').join(" ")}</p>
                            </div>
                            <div className="w-100">
                                <img
                                    data-fancybox="primary"
                                    src={`${article.field_image[0].url}`} 
                                    alt={article.field_image[0].alt} 
                                    className="w-100 rounded-4 mb-4 d-flex justify-content-center align-items-center"
                                />
                            </div>
                            <h3>{article.title[0].value}</h3>
                            <p>{article.body[0].value}</p>

                            <h4>Gallery: </h4>
                            {
                                Array.isArray(article.field_gallery) &&
                                article.field_gallery.length > 0 &&
                                article.field_gallery.map((item, index)=>(
                                    <div
                                        key={`gallery-image-${index}`} 
                                        className="cursor-pointer mb-4 w-100 d-flex justify-content-center align-items-center"
                                    >
                                        <img 
                                            data-fancybox="gallery"
                                            src={`${item.url}`}
                                            alt={item.alt}
                                        />
                                    </div>
                                ))
                            }
                            <div 
                                className="d-flex justify-content-start align-items-center gap-3">
                            Tags: 
                            {
                                Array.isArray(article.field_tags) &&
                                article.field_tags.length > 0 &&
                                article.field_tags.map((item, index)=>(
                                    <div
                                        key={`tag-${index}`}
                                        className="d-flex justify-content-center align-items-center ps-2 pe-2 pt-1 pb-1 border border-dark rounded-4">
                                        #{item.target_type}
                                    </div>
                                ))
                            }
                            </div>
                        </Col>
                    }
                </Row>
            </Container>
        )
    return (<></>)
}

export default Article