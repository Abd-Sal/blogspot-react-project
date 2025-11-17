import { Col, Container, Row, Spinner } from "react-bootstrap"
import ArticleCard from "./ArticleCard"
import { useContext, useEffect, useState } from "react"
import { BlogService } from "../Services/BlogService"
import { AuthContext } from "../Context/AuthContext"
import { Base64Converter } from "../HelpTools/Base64Converter"
import Alert from 'react-bootstrap/Alert';
import { SystemCredintials } from "../API/SystemCredintials"
import { APIConfig } from "../API/APIConfig"
import { NavLink } from "react-router-dom"

const LatestArticles = ({items=4}) => {
    const {isInitialized, authInfo} = useContext(AuthContext);
    const [latestArticles, setLatestArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [failedMsg, setFailedMsg] = useState('')
    const fakeImages = [
        "../../src/assets/article-1.png",
        "../../src/assets/article-2.png",
        "../../src/assets/article-3.png",
        "../../src/assets/article-4.png",
    ]
    const getLatestArticles = ()=>{
        let _options = {
            page: 0,
            pageSize: items < 5 ? 5 : items 
        }
        let _credintials = isInitialized ?
            authInfo.credintials
            :
            Base64Converter({username: SystemCredintials.username, password: SystemCredintials.password})
        setFailedMsg('')
        setIsLoading(true)
        BlogService.BLOG_LIST({
            credintials: _credintials,
            options: _options
        })
        .then((data)=>{
            setLatestArticles(data.rows)
        })
        .catch((err)=>{
            setFailedMsg(err.message);
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    useEffect(()=>{
        getLatestArticles()
    }, [])

    return (
        <>
        <div className="hight-lite position-relative">
            <Container className="pt-5 pb-5 latest-articles-container">
                <Row>
                    <Col>
                        <div className="latest-articles-title d-flex justify-content-center align-items-center w-25 mt-5 position-absolute">
                            <h2 className="mb-0 text-white">Latest Articles</h2>
                        </div>
                    </Col>
                </Row>
                <Row className="pt-5 pb-2">
                    {
                        isLoading &&
                        <Col lg={12} className="w-100 d-flex justify-content-center align-items-center">
                            <Spinner animation="grow" className="bg-main-color"/>
                        </Col>
                    }
                    {
                        failedMsg &&
                        <Col lg={12} className="w-100 d-flex justify-content-center align-items-center">
                            <Alert key={'danger'} variant={'danger'} className="">
                                {failedMsg} <button onClick={getLatestArticles} className="btn btn-danger">Try Again</button>
                            </Alert>
                        </Col>
                    }
                    {
                        Array.isArray(latestArticles) &&
                        latestArticles.length > 0 &&
                        latestArticles.map((item, index)=>(
                            index < items ?
                            <Col lg={3}>
                                <div className="w-100 h-100">
                                    <NavLink to={`/articles/${item.id}`} className={'text-decoration-none'}>
                                        <ArticleCard 
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            author={item.author}
                                            // field_image={`${APIConfig.BASE_DOMAIN}${item.field_image}`}    
                                            field_image={`${fakeImages[index]}`}    
                                            created={item.created}
                                        />
                                    </NavLink>
                                </div>
                            </Col>
                            :''
                        ))
                    }
                </Row>
                <Row>
                    <Col className="position-relative">
                        <div className="show-all-articles-title d-flex justify-content-lg-end align-items-center mt-5">
                            <NavLink to={'/articles'} className={'text-decoration-none btn rounded-4 ps-4 pe-4'}>View More</NavLink>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default LatestArticles