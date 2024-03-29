
import React from 'react'
import Header from '../components/semantic_components/Header'
import Body from '../components/semantic_components/Body'
import Footer from '../components/semantic_components/Footer'

const values={a:2,b:3}
const contextapp=React.createContext(values);

const HomePage = () => {
    return (
        <div className="home_page">
    <contextapp.Provider value={values}>
        {/* Whatever the value you pass here will be available in child components and also causes re-renders */}
     <Header/>
		 <div className="heading-spacing"></div>
     <Body/>
     <Footer/>
     </contextapp.Provider>
        </div>
    )
}

export {contextapp}

export default HomePage
