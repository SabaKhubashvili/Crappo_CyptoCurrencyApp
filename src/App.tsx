import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

import React from 'react'
import { Earns, Features, Footer, MainBanner, Navbar,  SubBanner, TradeSecurely } from './scenes'
import { NewsLetterSection } from './scenes/NewsLetterSection/NewsLetterSection';
import { navbar } from './types/types';


const App = () => {

  const client = new QueryClient({

  });
  const [isTopOfPage,setIsTopOfPage] = React.useState<boolean>(true);


  const [ActiveSection,setActiveSection] = React.useState<navbar>(navbar.Home);

  
  React.useEffect(()=>{
    function handleScroll(){
      if(window.scrollY > 90){
        setIsTopOfPage(false);
      }else{
        setIsTopOfPage(true)
      }
    }
    

    window.addEventListener('scroll',handleScroll)
    return ()=> window.addEventListener('scroll',handleScroll)
  },[])

  



  return (
    <React.Fragment>
      <Navbar isTopOfPage={isTopOfPage} activeSection={ActiveSection} />
      <MainBanner setActiveSelection={setActiveSection} />
      <SubBanner setActiveSelection={setActiveSection}/>

    <QueryClientProvider client={client}>
          <Earns setActiveSelection={setActiveSection} />
    </QueryClientProvider>      
     
      <TradeSecurely setActiveSelection={setActiveSection} />
      <Features setActiveSelection={setActiveSection} />
      <NewsLetterSection setActiveSelection={setActiveSection} />
      <Footer />
    </React.Fragment>
  )
}

export default App