import { useState, useEffect } from "react";
import { Col, Row, Spinner } from "react-bootstrap"
import { useSearchParams } from "react-router-dom";
import { CategoryService } from "../Services/CategoryService";
import Alert from 'react-bootstrap/Alert';

const FAQsCategories = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [failedMsg, setFailedMsg] = useState('');
  const [FAQsCategories, setFAQsCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentCategory = searchParams.get('category');

  const getFAQsCategories = () => {
    setIsLoading(true);
    setFailedMsg('');
    CategoryService.FAQ_CATEGORIES()
      .then((data) => {
        setFAQsCategories(data);
      })
      .catch((err) => {
        setFailedMsg(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCategoryChange = (categoryId) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('category', categoryId);
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    if (FAQsCategories.length === 0) {
      getFAQsCategories();
    }
  }, []);

  return (
    <Row>
      {
        isLoading && (
        <Col
          lg={12}
          style={{height: 300}}
          className="d-flex justify-content-center align-items-center">
          <Spinner animation="grow" className="bg-main-color" />
        </Col>
      )}

      {
        failedMsg && (
        <Col lg={12} className="h-100 d-flex justify-content-center align-items-center">
          <Alert key={'danger'} variant={'danger'} className="">
            {failedMsg}
          </Alert>
        </Col>
      )}

      {
        FAQsCategories.length > 0 && (
        <Col lg={12}>
          <div className="border border-gray rounded-3">
            {/* Category list */}
            {FAQsCategories.map((item) => (
              <div
                key={item.id}
                className={`ques cursor-pointer p-3 w-100 border-bottom ${currentCategory === item.id.toString() ? 'bg-main-color text-white' : ''}`}
                onClick={() => handleCategoryChange(item.id)}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="mb-0">
                    <input
                      type="radio"
                      id={`cat-${item.id}`}
                      name="faq-category"
                      hidden
                      value={item.id}
                      checked={currentCategory === item.id.toString()}
                      readOnly
                    />
                    <label htmlFor={`cat-${item.id}`} className="cursor-pointer mb-0">
                      {item.name}
                    </label>
                  </h5>
                  {currentCategory === item.id.toString() && (
                    <span className="text-main-color">✓</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Col>
      )}
    </Row>
  );
};

export default FAQsCategories;