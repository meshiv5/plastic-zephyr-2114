import { useState } from 'react'
import '../Styles/Home/Home.css'

const crauserImages = [
  'https://www.reliancedigital.in/medias/Audio-Fest-Carousel-Banner-07-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w4NzQyN3xpbWFnZS9qcGVnfGltYWdlcy9oNzEvaDc2Lzk5MTgyMDE0MzAwNDYuanBnfDgyOGRjYjJiN2E2MTgxM2ZmNGM1YTk5YmRmNzQ3YjFkMTZiMTQxNmJjN2U1NGY4ZTk1MGZjYzI2YzU3OTU4NWQ',
  'https://www.reliancedigital.in/medias/Digital-Big-Screen-Fest-Carousel-Banner-01-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMzA3Njd8aW1hZ2UvanBlZ3xpbWFnZXMvaDE1L2g4OS85OTE2MTg4MDAwMjg2LmpwZ3xlZGFlYjkxOTc2MTFiZDkzYTkwZDllNGU0YTYxYmNmM2UxNjRkMTZjMDQwMWM1ZGE3Yjk0M2E4MmI1OWI2MjM0',
  'https://www.reliancedigital.in/medias/Motorola-Carousel-Banner.jpg?context=bWFzdGVyfGltYWdlc3w2NjE5MXxpbWFnZS9qcGVnfGltYWdlcy9oZTIvaGUwLzk5MTgzMzYxNzIwNjIuanBnfDIzMzY2Y2ZjMTcyNWY4ZWUyZjIxNDk2YjZiNjdlYmY4YzE5MjM4ZTNlODAyZmNiOGI0ZGQ3NjhjYmQ5MmM5MjE',
  'https://www.reliancedigital.in/medias/Winter-Sale-Carousel-Banner-2022.jpg?context=bWFzdGVyfGltYWdlc3w3ODA1OXxpbWFnZS9qcGVnfGltYWdlcy9oOGMvaDU3Lzk5MTgzMzY0MzQyMDYuanBnfDkxOGNjMWJiMjExYWUzYTQ0ODMzMTk5MjQ0YzY0YmVhNTE5ZjQxZTZjNzc4ZTRhNDhjYjc3N2I3NmZjNmM2ZDI',
]

export default function Home() {
  const [count, setCount] = useState(0)

  const handlePrev = () => {
    if(count - 1 === -1){
      setCount(crauserImages.length-1)
    }else{
      setCount(count - 1)
    }
  }
  const handleNext = () => {
    if(count + 1 === crauserImages.length){
      setCount(0)
    }else{
      setCount(count + 1)
    }
  }

  return (
    <div id='home'>
      <div>
        <img id='firstImage' width='100%' src="https://www.reliancedigital.in/medias/20000-instant-Discount-Carousel-Banner-08-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w2MDk0OXxpbWFnZS9qcGVnfGltYWdlcy9oZmUvaGIwLzk5MTgzMzc3NDQ5MjYuanBnfDAwMzE2Mjg3YmFlMGM4MzA3OGNhZWZkZmRjZDQ1NzVhMWUyNzkxMmNjYzI0MGQwMjNjNWRkMjcxMGQ2MGY4ZGY" alt="firstPost" />
        <img id='secondImage' width='100%' src="https://www.reliancedigital.in/medias/20000-instant-Discount-Carousel-Banner-08-11-2022-Mobile-01.jpg?context=bWFzdGVyfGltYWdlc3w0OTI1NHxpbWFnZS9qcGVnfGltYWdlcy9oODEvaDEwLzk5MTgyMDM1NTk5NjYuanBnfGVmZTgzM2U4N2FkMzNhYWI0Y2IzY2UyNmIyNzk5N2Y3MzA0MjhjZjY2Y2M3Y2Q4NWJlYzhmNDMxMDBhYjE1OWQ" alt="secondPost" />
      </div>

      <div id='crauser'>
        <img width='100%' src={crauserImages[count]} alt="prodictImage" />
        <button id='prev' onClick={handlePrev}>‹</button>
        <button id='next' onClick={handleNext}>›</button>
      </div>


    </div>
  )
}
