import React from "react"
import Navbar from "../components/Navbar"
import styles from "./css/Home.module.css"
import MultiCarousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const Home = () => {
  const responsiveTwo = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1499,
      },
      items: 6,
    },
    desktop2: {
      breakpoint: {
        max: 1500,
        min: 1111,
      },
      items: 5,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 850,
      },
      items: 4,
    },
    tabet2: {
      breakpoint: {
        max: 890,
        min: 400,
      },
      items: 3,
    },
    mobile: {
      breakpoint: {
        max: 685,
        min: 464,
      },
      items: 2,
    },
    mobile2: {
      breakpoint: {
        max: 464,
        min: 400,
      },
      items: 1.7,
    },
    mobile3: {
      breakpoint: {
        max: 400,
        min: 0,
      },
      items: 1,
    },
  }

  return (
    <>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.one}>
          <div className={styles.oneLeft}>
            <h3 className={styles.oneLeftTitle}>
              Stay Updated On Waste Collection
            </h3>
            <p className={styles.oneLeftPara}>
              Never miss a waste collection day with our app. Get notified about
              upcoming schedules and any changes in your neighborhood's waste
              collection routine.
            </p>
          </div>
          <div className={styles.oneRight}>
            <img
              src="https://images.unsplash.com/photo-1528323273322-d81458248d40?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image1"
              className={styles.oneImage}
            />
          </div>
        </div>
        <div className={styles.two}>
          <MultiCarousel
            className={styles.twoCarouselOne}
            autoPlay
            autoPlaySpeed={1}
            centerMode={false}
            customTransition="all 1s linear"
            infinite
            pauseOnHover={false}
            responsive={responsiveTwo}
            rewind={false}
            rewindWithAnimation={false}
            slidesToSlide={0}
            arrows={false}
            transitionDuration={1000}
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2FzdGUlMjB0cmFja2VyfGVufDB8fDB8fHww"
                alt="offers"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1610725079793-6c7dfd7f2150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyeSUyMHdhc3RlfGVufDB8fDB8fHww"
                alt="offers"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1620509048004-415ebb9e2755?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGRyeSUyMHdhc3RlfGVufDB8fDB8fHww"
                alt="offers"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHJ5JTIwd2FzdGUlMjBhbmQlMjB3ZXQlMjB3YXN0ZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="offers"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1664455687732-8c5e114baed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FzdGUlMjBjb2xsZWN0JTIwdmFufGVufDB8fDB8fHww"
                alt="offers"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1661963024527-c855211ad31d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhc3RlJTIwY29sbGVjdCUyMHZhbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="offers"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1671031353817-3d89beefec2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdhc3RlfGVufDB8fDB8fHww"
                alt="offers"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1679689587787-18fafbe7c695?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdhc3RlfGVufDB8fDB8fHww"
                alt="offers"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHdhc3RlfGVufDB8fDB8fHww"
                alt="offers"
                loading="lazy"
              />
            </div>
          </MultiCarousel>
          <MultiCarousel
            className={styles.twoCarouselTwo}
            autoPlay
            autoPlaySpeed={1}
            centerMode={false}
            customTransition="all 1s linear"
            infinite
            pauseOnHover={false}
            responsive={responsiveTwo}
            rewind={false}
            rewindWithAnimation={false}
            slidesToSlide={0}
            arrows={false}
            transitionDuration={1000}
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2FzdGUlMjB0cmFja2VyfGVufDB8fDB8fHww"
                alt="offers"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1610725079793-6c7dfd7f2150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyeSUyMHdhc3RlfGVufDB8fDB8fHww"
                alt="offers"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1620509048004-415ebb9e2755?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGRyeSUyMHdhc3RlfGVufDB8fDB8fHww"
                alt="offers"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHJ5JTIwd2FzdGUlMjBhbmQlMjB3ZXQlMjB3YXN0ZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="offers"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1664455687732-8c5e114baed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FzdGUlMjBjb2xsZWN0JTIwdmFufGVufDB8fDB8fHww"
                alt="offers"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1661963024527-c855211ad31d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhc3RlJTIwY29sbGVjdCUyMHZhbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="offers"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1671031353817-3d89beefec2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdhc3RlfGVufDB8fDB8fHww"
                alt="offers"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1679689587787-18fafbe7c695?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdhc3RlfGVufDB8fDB8fHww"
                alt="offers"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHdhc3RlfGVufDB8fDB8fHww"
                alt="offers"
                loading="lazy"
              />
            </div>
          </MultiCarousel>
        </div>
        <div className={styles.three}>
          <div className={styles.threeLeft}>
            <img
              src="https://images.unsplash.com/photo-1528323273322-d81458248d40?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image1"
              className={styles.threeImage}
            />
          </div>
          <div className={styles.threeRight}>
            <div className={styles.threeRightTop}>
              <h3 className={styles.threeRightTitle}>
                Waste Collection Schedule Updates
              </h3>
              <p className={styles.threeRightPara}>
                Receive real-time notifications and updates on waste collection
                schedules to never miss a pickup.
              </p>
            </div>
            <div className={styles.threeRightMiddle}>
              <h3 className={styles.threeRightTitle}>
                Missed Pickup Reporting
              </h3>
              <p className={styles.threeRightPara}>
                Easily report missed waste pickups through the app for quick
                resolution by local services.
              </p>
            </div>
            <div className={styles.threeRightBottom}>
              <h3 className={styles.threeRightTitle}>
                Efficient Complaint Submission
              </h3>
              <p className={styles.threeRightPara}>
                Submit complaints regarding waste management efficiently through
                the app for prompt resolution.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.four}>Download the app now</div>
        <div className={styles.five}>
          <div className={styles.fiveRight}>
            <div className={styles.fiveRightTop}>
              <h3 className={styles.fiveRightTitle}>
                Waste Collection Schedule Updates
              </h3>
              <p className={styles.fiveRightPara}>
                Receive real-time notifications and updates on waste collection
                schedules to never miss a pickup.
              </p>
            </div>
            <div className={styles.fiveRightMiddle}>
              <h3 className={styles.fiveRightTitle}>
                Missed Pickup Reporting
              </h3>
              <p className={styles.fiveRightPara}>
                Easily report missed waste pickups through the app for quick
                resolution by local services.
              </p>
            </div>
            <div className={styles.fiveRightBottom}>
              <h3 className={styles.fiveRightTitle}>
                Efficient Complaint Submission
              </h3>
              <p className={styles.fiveRightPara}>
                Submit complaints regarding waste management efficiently through
                the app for prompt resolution.
              </p>
            </div>
          </div>
          <div className={styles.fiveLeft}>
            <img
              src="https://images.unsplash.com/photo-1528323273322-d81458248d40?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image1"
              className={styles.fiveImage}
            />
          </div> 
        </div>
        <div className={styles.six}></div>
        <div className={styles.seven}></div>
      </div>
    </>
  )
}

export default Home
