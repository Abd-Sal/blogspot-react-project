import { Col, Row, Spinner } from "react-bootstrap"
import CategoryCard from "./CategoryCard"
import { useEffect, useState } from "react"
import { CategoryService } from "../Services/CategoryService"
import Alert from 'react-bootstrap/Alert';
import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const TopCategories = ({items=6}) => {
  
  const [isLoading, setIsLoading] = useState(false)
  const [failedMsg, setFailedMsg] = useState('')
  const [categories, setCategories] = useState([])
  const getCategories = ()=>{
    setIsLoading(true);
    setFailedMsg('')
    CategoryService.CATEGORIES()
    .then((data)=>{
      setCategories(data);
    })
    .catch((err)=>{
      setFailedMsg(err.message);
    })
    .finally(()=>{
      setIsLoading(false);
    })
  }

  useEffect(()=>{
    getCategories();
  }, [])

  return (
    <>
      <Row className="pt-5 mt-5">
        <Col lg={6} className="d-flex justify-content-lg-start">
          <p className="browse-cates"><NavLink to={'/articles'} className={'color-purple'}><FaArrowLeft /> Browse All</NavLink> We have more category & subcategory.</p>
        </Col>
        <Col lg={6} className="d-flex justify-content-lg-end">
          <h2>Browse Our Articles <span className="border-bottom-purple">Categories</span></h2>
        </Col>
      </Row>
      <Row className="pt-5 pb-5">
        {
          Array.isArray(categories) &&
          categories.length > 0 &&
          categories.map((item, index)=>(
            index < items ?
            <Col lg={4} className="h-100 category-card " key={`category-${item.id}`}>
              <NavLink to={`/articles?category=${item.name}`} className={'text-decoration-none text-black'}>
                <CategoryCard title={item.name} description={"Discover high-quality articles written by experts and creators."} />
              </NavLink>
            </Col>
            :''
          ))
        }
        {
          isLoading &&
          <Col lg={12} className="d-flex justify-content-center align-items-center">
            <Spinner animation="grow" className="bg-main-color"/>
          </Col>
        }
        {
          failedMsg &&
          <Col lg={12} className="">
            <Alert key={'danger'} variant={'danger'} className="">
                {failedMsg} <button onClick={getCategories} className="btn btn-danger">Try Again</button>
            </Alert>
          </Col>
        }
      </Row>
    </>
  )
}

export default TopCategories