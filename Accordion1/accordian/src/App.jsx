import './App.css'
import Accordian from './component/accordian'
import ImageSlider from './component/ImageSlider'
import RandomColor from './component/RandomColor'
import StarRating from './component/starRating'

function App() {

  return (
    <>
   {/* <Accordian/> */}


   {/* <RandomColor/> */}

   {/* <StarRating numberOfStars={6}/> */}

   <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"} />
    </>
  )
}

export default App
