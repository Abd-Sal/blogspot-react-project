import { Col, Spinner } from "react-bootstrap"
import { BlogService } from "../Services/BlogService"
import { useEffect, useMemo, useState } from "react"
import { EmptyObjectChecker } from "../HelpTools/EmptyObjectChecker"
import Alert from 'react-bootstrap/Alert';
import { CategoryService } from "../Services/CategoryService"
import {  useLocation } from "react-router-dom";

const ArticleFilter = ({setIsLoading, setFailedMsg, setArticles, authInfo, setPager, pager, OnlyMyArticles = false}) => {
  const [isLoadingCategories, setIsLoadingCategories] = useState(false)
  const [failedMsgCategories, setFailedMsgCategories] = useState('')
  const [categories, setCategories] = useState([])
  const [isLoadingTags, setIsLoadingTags] = useState(false)
  const [failedMsgTags, setFailedMsgTags] = useState('')
  const [tags, setTags] = useState([])
  const [filter, setFilter] = useState({});

  const location = useLocation();
  
  const callAPI = ()=>{
    setIsLoading(true)
    setFailedMsg("")
    const pathParts = window.location.pathname.split('/');
    let apiUrl = null
    if(pathParts.includes('me')) apiUrl = BlogService.CURRENT_USER_ARTICLES
    else apiUrl = BlogService.BLOG_LIST
    apiUrl({
      credintials: authInfo.credintials,
      options: filter
    })
    .then((data)=>{
      setArticles(data.rows)
      setPager(data.pager)
    })
    .catch((err)=>{
      setFailedMsg(err.message)
    })
    .finally(()=>{
      setIsLoading(false)
    })
  }

  const getCategories = useMemo(()=>{
        setIsLoadingCategories(true);
        setFailedMsgCategories('')
        CategoryService.CATEGORIES()
        .then((data)=>{
            setCategories(data);
        })
        .catch((err)=>{
            setFailedMsgCategories(err.message)
        })
        .finally(()=>{
            setIsLoadingCategories(false);
        })
    }, [])

  const getTags = useMemo(()=>{
      setIsLoadingTags(true);
      setFailedMsgTags('')
      CategoryService.TAGS()
      .then((data)=>{
          setTags(data);
      })
      .catch((err)=>{
          setFailedMsgTags(err.message)
      })
      .finally(()=>{
          setIsLoadingTags(false);
      })
  }, [])

  useEffect(()=>{
    if(!EmptyObjectChecker(pager)){
      const totalPages = Math.ceil(pager.total_items / pager.filtered_items_per_page);
      const startIndex = (filter.page - 1) * pager.filtered_items_per_page;
      const endIndex = Math.min(startIndex + pager.filtered_items_per_page - 1, pager.total_items - 1);
    }
    if(!EmptyObjectChecker(pager) && filter.pageSize >= pager.total_items && filter.page !== 0){
      setFilter({
        ...filter,
        page: 0
      })
    }else{
      if(EmptyObjectChecker(filter))
        setFilter({
          page: 1,
          pageSize: 5
        })
      else
        callAPI();
    }
  }, [filter, location])

  return (
    <Col lg={12}>
      <form 
        action=""
        onSubmit={(e)=>{
          e.preventDefault()
        }}
      >
        <div className="mt-5 mb-5 d-flex flex-column justfiy-content-center align-items-start gap-3 w-100">
          {/* Search field */}
          <div className="w-100">
            <label htmlFor="search-field">Search Field: </label>
            <input 
              type="text"
              name="search-field"
              id="search-field"
              placeholder="Search..."
              className="form-control"
              onChange={(e)=>{
                setFilter({
                  ...filter,
                  search: e.target.value
                })
              }}
            />
          </div>

          {/* items per page */}
          <div className="d-flex flex-column justify-content-start align-items-start gap-2 w-100">
            <label htmlFor="items-per-page">Items per page: </label>
            <select 
              name="items-per-page"
              id="items-per-page"
              defaultChecked={5}
              className="form-select"
              onChange={(e)=>{
                setFilter({
                  ...filter,
                  pageSize: e.target.value
                })
              }}
            >
              <option value="5">5 Items</option>
              <option value="10">10 Items</option>
              <option value="15">15 Items</option>
              <option value="20">20 Items</option>
            </select>
          </div>

          {/* Sort Field */}
          <div className="d-flex flex-column justify-content-start align-items-start gap-2 w-100">
            <label htmlFor="sort-field">Sort By: </label>
            <select 
              name="sort-field"
              id="sort-field"
              className="form-select"
              defaultChecked={"created_date"}
              onChange={(e)=>{
                setFilter({
                  ...filter,
                  sort_by: e.target.value
                })
              }}
            >
              <option value="created_date">Created Date</option>
              <option value="title">Title</option>
              <option value="author">Author</option>
            </select>
          </div>

          {/* Order By */}
          <div className="d-flex flex-column justify-content-start align-items-start gap-2 w-100">
            <label htmlFor="sort-order">Sort Order: </label>
            <select 
              name="sort-order"
              id="sort-order"
              defaultChecked={"DESC"}
              className="form-select"
              onChange={(e)=>{
                setFilter({
                  ...filter,
                  sort_order: e.target.value
                })
              }}
            >
              <option value="ASC">Acending</option>
              <option value="DESC">Descending</option>
            </select>
          </div>

          {/* category field */}
          <div className="w-100">
              <label 
                  htmlFor="category"
                  className="form-label"    
              >Article Category: </label>
              {
                  isLoadingCategories &&
                  <div className="w-100 d-flex justify-content-center align-items-center pt-3 pb-3">
                      <Spinner animation="grow" className="bg-main-color"/>
                  </div>
              }
              {
                  failedMsgCategories &&
                  <div className="w-100 d-flex justify-content-center align-items-center pt-3 pb-3">
                      <Alert key={'danger'} variant={'danger'} className="">
                          {failedMsgCategories}
                          <button 
                            className="btn btn-danger"
                            onClick={getCategories}  
                          >Try Again</button>
                      </Alert>
                  </div>
              }
              {
                  categories.length > 0 &&
                  <select 
                      name="category"
                      id="category"
                      className="form-select"
                      defaultChecked={``}
                      onChange={(e)=>{
                          setFilter({
                              ...filter,
                              category: e.target.value
                          })
                      }}
                  >
                      <option 
                          key={`empty-category`}
                          value=""
                      >...</option>
                      {
                          categories.map((item)=>(
                              <option 
                                  key={`category-${item.id}`}
                                  value={`${item.id}`}
                              >{item.name}</option>
                          ))
                      }
                  </select>
              }
          </div>

          {/* Tags Field */}
          <div className="w-100">
              <label htmlFor="tags">Select Tags</label>
              {
                  isLoadingTags &&
                  <div className="w-100 d-flex justify-content-center align-items-center pt-3 pb-3">
                      <Spinner animation="grow" className="bg-main-color"/>
                  </div>
              }
              {
                  failedMsgTags &&
                  <div className="w-100 d-flex justify-content-center align-items-center pt-3 pb-3">
                      <Alert key={'danger'} variant={'danger'} className="">
                          {failedMsgTags}
                          <button 
                          className="btn btn-danger"
                          onClick={getTags}  
                          >Try Again</button>
                      </Alert>
                  </div>
              }
              {
                  tags.length > 0 &&
                  <select
                      id="tags"
                      name="tags"
                      className="form-select"
                      defaultChecked={''}
                      value={``}
                      onChange={(e)=>{
                            setFilter({
                                ...filter,
                                tag: e.target.value
                            })
                        }}
                      >
                      <option value="">...</option>
                      {
                          tags.map((item)=>(
                              <option 
                                  id={item.id}
                                  key={`tag-${item.id}`}
                                  value={`${JSON.stringify({target_id: item.id, name: item.name})}`}
                              >{item.name}</option>
                          ))
                      }
                  </select>
              }
          </div>
        </div>
      </form>
    </Col>
  )
}

export default ArticleFilter