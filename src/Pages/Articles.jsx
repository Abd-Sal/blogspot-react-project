import { useContext, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { AuthContext } from "../Context/AuthContext"
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import ArticleFilter from "../Components/ArticleFilter";
import ArticleCard from "../Components/ArticleCard";
import ArticlePagination from "../Components/ArticlePagination";
import { EmptyObjectChecker } from "../HelpTools/EmptyObjectChecker";
import { APIConfig } from "../API/APIConfig";

const Articles = ({OnlyMyArticles=false}) => {
  const {authInfo, isInitialized} = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const [failedMsg, setFailedMsg] = useState("")
  const [articles, setArticles] = useState([])

  const [pager, setPager] = useState({})

  if(isInitialized)
    return (
      <>
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <Row>
                <ArticleFilter
                  setArticles={setArticles}
                  setIsLoading={setIsLoading}
                  setFailedMsg={setFailedMsg}
                  authInfo={authInfo}
                  pager={pager}
                  setPager={setPager}
                  OnlyMyArticles={OnlyMyArticles}
                />
              </Row>
            </Col>
            {
              isLoading &&
              <Col lg={8} className="w-100 h-100 d-flex justify-content-center align-items-center">
                <Spinner animation="grow" className="bg-main-color"/>
              </Col>
            }
            {
              failedMsg &&
              <Col lg={8} className="w-100 h-100 d-flex justify-content-center align-items-center">
                <Alert key={'danger'} variant={'danger'} className="">
                    {failedMsg}
                    <button 
                      className="btn btn-danger"
                      onClick={()=>{}}
                    >Try Again</button>
                </Alert>
              </Col>
            }
            {
              articles.length > 0 && !failedMsg && !isLoading ?
              <Col lg={9} className="mt-5">
                <Row>
                  {
                    articles.map((item, index)=>(
                      <Col lg={12} key={index} className="mb-4">
                        <ArticleCard 
                          key={item.id}
                          id={item.id}
                          author={item.author}
                          title={item.title}
                          desciption={item.body}
                          created={item.created}
                          field_image={`${APIConfig.BASE_DOMAIN}${item.field_image}`}
                          cardType={2}
                        />
                        {console.log(`${APIConfig.BASE_DOMAIN}${item.field_image}`)}                        
                      </Col>
                    ))
                  }
                </Row>
              </Col>
              :
              <Col lg={8}>
                <Alert key={'warning'} variant={'warning'} className="mt-5">
                    No Results
                </Alert>
              </Col>
            }
          </Row>
          <Row>
            <Col lg={8}>
              {/* Pagination Here */}
              <ArticlePagination 
                totalPages={!EmptyObjectChecker(pager) && pager.totalPages}
              />
            </Col>
          </Row>
        </Container>
      </>
    )
  return (
    <>
      <Container>
        <Row>
          <Col lg={12} className="w-100 h-100 d-flex justify-content-center align-items-center">
            <Spinner animation="grow" className="bg-main-color"/>
          </Col>
        </Row>
      </Container>      
    </>
  ) 
}

export default Articles