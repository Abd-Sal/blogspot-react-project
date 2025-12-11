import { Col, Container, Row } from "react-bootstrap"
import { FaAngleDoubleRight } from "react-icons/fa";
import JoinUs from "../Components/JoinUs";

const Jobs = () => {
  return (
    <>
      <div>
        <Container>
          <Row className="pt-5 pb-5">
            <Col lg={6}>
              <div className="h-100 d-flex flex-column justify-content-center align-items-start gap-3">
                <h2>Join the most incredible & creative team.</h2>
                <p>Proin gravida enim augue, dapibus ultrices eros feugiat et. Pellentesque bibendum orci felis, sit amet efficitur felis lacinia ac. Mauris gravida justo ac nunc consectetur.</p>
                <button className="rounded-2 p-2 d-flex justify-content-between align-items-center gap-4 ps-4 pe-4 border border-black bg-white">
                  <span>View Open Positions</span>
                  <FaAngleDoubleRight />
                </button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="w-100">
                <img src="../../src/assets/jobs.png" alt="jobs" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-join-us">
        <Container className="pt-5 pb-5">
          <Row>
            <Col lg={10}>
              <div>
                <h2>Why you will join our team</h2>
                <p className="w-75">Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio. </p>
                <div className="d-flex justify-content-start align-items-center rounded-2 bg-white">
                  <JoinUs border={'border-end border-gay'}/>
                  <JoinUs border={'border-end border-gay'}/>
                  <JoinUs border={''}/>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container className="pt-5 pb-5">
          <Row>
            <Col lg={12}>
              <h2 className="our-benefits-title">Our Perks & <span>Benefits</span></h2>
            </Col>
          </Row>
          <Row className="pt-5 text-center">
            <Col lg={3}>
              <div className="d-flex flex-column bg-gray rounded-5 justify-content-center align-items-center gap-3 p-3">
                <div>
                  <svg width="148" height="148" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2" d="M124.875 60.125H23.125V87.875H124.875V60.125Z" fill="#564FFD"/>
                  <path d="M23.125 124.875V23.125" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M23.125 32.375H97.125V60.125" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M124.875 60.125H23.125V87.875H124.875V60.125Z" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M78.625 87.875V115.625H23.125" stroke="#564FFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h4>Personal Career Growth</h4>
                <p>Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio. </p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="d-flex flex-column justify-content-center align-items-center gap-3 p-3">
                <div>
                  <svg width="148" height="148" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2" d="M115.625 88.373L94.3517 109.646C93.7869 110.211 93.0855 110.62 92.3159 110.833C91.5462 111.046 90.7344 111.057 89.9596 110.863L56.4532 102.486C55.8248 102.329 55.2363 102.042 54.726 101.643L23.125 76.9321L41.9571 41.5034L71.6264 32.8538C72.6863 32.5448 73.8217 32.6251 74.8275 33.0802L94.8125 42.123H82.8532C82.2459 42.123 81.6445 42.2427 81.0833 42.4751C80.5222 42.7075 80.0123 43.0482 79.5829 43.4777L56.9583 66.1023C56.4897 66.5708 56.1273 67.1346 55.8956 67.7554C55.6639 68.3762 55.5683 69.0395 55.6153 69.7005C55.6622 70.3615 55.8507 71.0046 56.1679 71.5864C56.485 72.1682 56.9235 72.6751 57.4536 73.0726L60.5875 75.423C63.7898 77.8247 67.6847 79.123 71.6875 79.123C75.6903 79.123 79.5852 77.8247 82.7875 75.423L90.1875 69.873L115.625 88.373Z" fill="#E34444"/>
                  <path d="M139.165 70.4067L124.875 77.5516L106.375 42.123L120.81 34.9053C121.895 34.363 123.149 34.2683 124.303 34.6416C125.456 35.015 126.417 35.8264 126.978 36.9012L141.196 64.1292C141.481 64.6736 141.654 65.2693 141.705 65.8813C141.757 66.4933 141.686 67.1095 141.497 67.6939C141.308 68.2782 141.004 68.8191 140.604 69.2849C140.203 69.7506 139.714 70.132 139.165 70.4067V70.4067Z" stroke="#E34444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M23.1249 76.9325L8.83496 69.7876C8.28559 69.5129 7.79645 69.1315 7.39606 68.6658C6.99567 68.2 6.69207 67.6591 6.50297 67.0748C6.31387 66.4904 6.24306 65.8742 6.29468 65.2622C6.3463 64.6501 6.5193 64.0545 6.8036 63.5101L21.0214 36.2821C21.5826 35.2073 22.5435 34.3958 23.6972 34.0225C24.8508 33.6492 26.1049 33.7439 27.1895 34.2861L41.6249 41.5038L23.1249 76.9325Z" stroke="#E34444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M124.875 77.5513L115.625 88.3726L94.3517 109.646C93.7869 110.211 93.0855 110.62 92.3159 110.833C91.5462 111.046 90.7344 111.056 89.9596 110.862L56.4532 102.486C55.8248 102.329 55.2363 102.041 54.726 101.642L23.125 76.9316" stroke="#E34444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M115.625 88.3731L90.1874 69.8731L82.7874 75.4231C79.5851 77.8248 75.6902 79.1231 71.6874 79.1231C67.6845 79.1231 63.7897 77.8248 60.5874 75.4231L57.4535 73.0727C56.9234 72.6751 56.4849 72.1682 56.1678 71.5864C55.8506 71.0046 55.6621 70.3615 55.6152 69.7005C55.5682 69.0395 55.6638 68.3762 55.8955 67.7554C56.1272 67.1346 56.4896 66.5708 56.9581 66.1023L79.5827 43.4777C80.0122 43.0482 80.5221 42.7075 81.0832 42.4751C81.6443 42.2427 82.2458 42.123 82.8531 42.123H106.375" stroke="#E34444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M41.9561 41.5034L71.6254 32.8538C72.6853 32.5448 73.8207 32.6251 74.8265 33.0802L94.8115 42.1231" stroke="#E34444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M64.75 123.061L47.3256 118.704C46.6186 118.528 45.9633 118.186 45.4132 117.708L32.375 106.375" stroke="#E34444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h4>Personal Career Growth</h4>
                <p>Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio. </p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="d-flex flex-column bg-gray rounded-5 justify-content-center align-items-center gap-3 p-3">
                <div>
                  <svg width="148" height="148" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2" d="M120.25 92.4929V115.625C120.25 116.852 119.763 118.028 118.895 118.895C118.028 119.763 116.852 120.25 115.625 120.25H32.375C31.1484 120.25 29.972 119.763 29.1046 118.895C28.2373 118.028 27.75 116.852 27.75 115.625V92.5C22.8435 92.5 18.1379 90.5509 14.6685 87.0815C11.1991 83.612 9.25 78.9065 9.25 74C9.25 69.0935 11.1991 64.3879 14.6685 60.9185C18.1379 57.4491 22.8435 55.5 27.75 55.5V41.625C27.75 36.7185 29.6991 32.0129 33.1685 28.5435C36.6379 25.0741 41.3435 23.125 46.25 23.125H101.75C106.657 23.125 111.362 25.0741 114.831 28.5435C118.301 32.0129 120.25 36.7185 120.25 41.625V55.5C125.157 55.5 129.862 57.4491 133.331 60.9185C136.801 64.3879 138.75 69.0935 138.75 74C138.75 78.9065 136.801 83.612 133.331 87.0815C129.862 90.5509 125.157 92.5 120.25 92.5V92.4929Z" fill="#23BD33"/>
                  <path d="M46.25 78.625H101.75" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M27.75 55.5V41.625C27.75 36.7185 29.6991 32.0129 33.1685 28.5435C36.6379 25.0741 41.3435 23.125 46.25 23.125H101.75C106.657 23.125 111.362 25.0741 114.831 28.5435C118.301 32.0129 120.25 36.7185 120.25 41.625V55.5" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M46.25 97.125V74C46.25 70.3411 45.165 66.7643 43.1322 63.722C41.0994 60.6797 38.2101 58.3085 34.8297 56.9082C31.4492 55.508 27.7295 55.1417 24.1408 55.8555C20.5522 56.5693 17.2558 58.3313 14.6685 60.9185C12.0813 63.5058 10.3193 66.8022 9.60548 70.3908C8.89165 73.9795 9.25802 77.6992 10.6582 81.0797C12.0585 84.4601 14.4296 87.3494 17.472 89.3822C20.5143 91.415 24.0911 92.5 27.75 92.5V115.625C27.75 116.852 28.2373 118.028 29.1046 118.895C29.972 119.763 31.1484 120.25 32.375 120.25H115.625C116.852 120.25 118.028 119.763 118.895 118.895C119.763 118.028 120.25 116.852 120.25 115.625V92.5C123.909 92.5 127.486 91.415 130.528 89.3822C133.57 87.3494 135.942 84.4601 137.342 81.0797C138.742 77.6992 139.108 73.9795 138.395 70.3908C137.681 66.8022 135.919 63.5058 133.331 60.9185C130.744 58.3313 127.448 56.5693 123.859 55.8555C120.271 55.1417 116.551 55.508 113.17 56.9082C109.79 58.3085 106.901 60.6797 104.868 63.722C102.835 66.7643 101.75 70.3411 101.75 74V97.125" stroke="#23BD33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h4>Personal Career Growth</h4>
                <p>Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio. </p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="d-flex flex-column justify-content-center align-items-center gap-3 p-3">
                <div>
                  <svg width="148" height="148" viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M124.875 46.25H23.125C20.5707 46.25 18.5 48.3207 18.5 50.875V69.375C18.5 71.9293 20.5707 74 23.125 74H124.875C127.429 74 129.5 71.9293 129.5 69.375V50.875C129.5 48.3207 127.429 46.25 124.875 46.25Z" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M120.25 74V115.625C120.25 116.852 119.763 118.028 118.895 118.895C118.028 119.763 116.852 120.25 115.625 120.25H32.375C31.1484 120.25 29.972 119.763 29.1046 118.895C28.2373 118.028 27.75 116.852 27.75 115.625V74" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M74 46.25V120.25" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M100.163 39.7098C93.6222 46.2506 74 46.2506 74 46.2506C74 46.2506 74 26.6283 80.5407 20.0876C83.1433 17.488 86.6717 16.0283 90.3502 16.0293C94.0287 16.0303 97.5563 17.4921 100.157 20.0932C102.758 22.6943 104.22 26.2218 104.221 29.9003C104.222 33.5789 102.763 37.1072 100.163 39.7098V39.7098Z" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M47.8366 39.7098C54.3774 46.2506 73.9996 46.2506 73.9996 46.2506C73.9996 46.2506 73.9996 26.6283 67.4588 20.0876C64.8563 17.488 61.3279 16.0283 57.6494 16.0293C53.9709 16.0303 50.4433 17.4921 47.8422 20.0932C45.2411 22.6943 43.7794 26.2218 43.7783 29.9003C43.7773 33.5789 45.237 37.1072 47.8366 39.7098V39.7098Z" stroke="#FD8E1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path opacity="0.2" d="M120.25 74V115.625C120.25 116.852 119.763 118.028 118.895 118.895C118.028 119.763 116.852 120.25 115.625 120.25H32.375C31.1484 120.25 29.972 119.763 29.1046 118.895C28.2373 118.028 27.75 116.852 27.75 115.625V74H120.25Z" fill="#FD8E1F"/>
                  </svg>
                </div>
                <h4>Personal Career Growth</h4>
                <p>Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio. </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Jobs