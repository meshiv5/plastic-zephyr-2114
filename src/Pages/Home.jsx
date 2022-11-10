import axios from 'axios';
import { useEffect, useRef, useState } from 'react'
import ProductsCard from '../Components/ProductsCard';
import '../Styles/Home/Home.css'

const crauserImages = [
  'https://www.reliancedigital.in/medias/Audio-Fest-Carousel-Banner-07-11-c+2022.jpg?context=bWFzdGVyfGltYWdlc3w4NzQyN3xpbWFnZS9qcGVnfGltYWdlcy9oNzEvaDc2Lzk5MTgyMDE0MzAwNDYuanBnfDgyOGRjYjJiN2E2MTgxM2ZmNGM1YTk5YmRmNzQ3YjFkMTZiMTQxNmJjN2U1NGY4ZTk1MGZjYzI2YzU3OTU4NWQ',
  'https://www.reliancedigital.in/medias/Digital-Big-Screen-Fest-Carousel-Banner-01-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMzA3Njd8aW1hZ2UvanBlZ3xpbWFnZXMvaDE1L2g4OS85OTE2MTg4MDAwMjg2LmpwZ3xlZGFlYjkxOTc2MTFiZDkzYTkwZDllNGU0YTYxYmNmM2UxNjRkMTZjMDQwMWM1ZGE3Yjk0M2E4MmI1OWI2MjM0',
  'https://www.reliancedigital.in/medias/Motorola-Carousel-Banner.jpg?context=bWFzdGVyfGltYWdlc3w2NjE5MXxpbWFnZS9qcGVnfGltYWdlcy9oZTIvaGUwLzk5MTgzMzYxNzIwNjIuanBnfDIzMzY2Y2ZjMTcyNWY4ZWUyZjIxNDk2YjZiNjdlYmY4YzE5MjM4ZTNlODAyZmNiOGI0ZGQ3NjhjYmQ5MmM5MjE',
  'https://www.reliancedigital.in/medias/Winter-Sale-Carousel-Banner-2022.jpg?context=bWFzdGVyfGltYWdlc3w3ODA1OXxpbWFnZS9qcGVnfGltYWdlcy9oOGMvaDU3Lzk5MTgzMzY0MzQyMDYuanBnfDkxOGNjMWJiMjExYWUzYTQ0ODMzMTk5MjQ0YzY0YmVhNTE5ZjQxZTZjNzc4ZTRhNDhjYjc3N2I3NmZjNmM2ZDI',
]
const crauserImages2 = [
  'https://www.reliancedigital.in/medias/iPad-10th-Gen-NPI-Banner-Available-now-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDYzNDB8aW1hZ2UvanBlZ3xpbWFnZXMvaGY2L2hiMS85OTEzNjU2NDEwMTQyLmpwZ3wxNTJiZjhiZDMxYTcyZWJmMGM4MzE4OTdlYjkzOGMwYWMzM2E0Mzk1YWFiNTQzZjdiYmJkOTJlNGQ3Yjk5MDBm',
  'https://www.reliancedigital.in/medias/iPad-Pro-NPI-Banner-Available-now-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDYwNjh8aW1hZ2UvanBlZ3xpbWFnZXMvaDNlL2gyMC85OTEzNjU2NTQxMjE0LmpwZ3wwOTcxYjg0MTc5NDQxNDcwNTRjMzcwNjkxYWJlNGI2NDk3ZjkyYzNhNzM5NWY3NzM0NTRiYjA3ODA1MzRiOWFk',
  'https://www.reliancedigital.in/medias/iPhone14-Pro-Buy-now-NPI-Banner-18-10-2022.jpg?context=bWFzdGVyfGltYWdlc3w4OTEzMnxpbWFnZS9qcGVnfGltYWdlcy9oOWUvaDhkLzk5MTM2NTcxMzEwMzguanBnfDVlNjcwMmQyZjhkZmVkNTg2NzY5ZWYwODQyODI3NDllZTZiZWM5ZDUxMjZkZGIzNzI4ZTBmODdmNGYxY2EwNTU',
  'https://www.reliancedigital.in/medias/Boat-Watch-NPI-Banner-07-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDI4Nzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGY1L2hmOS85OTE2OTExNTgzMjYyLmpwZ3xiYTlhMmVmNjdmNzRlNGQ5Y2EyN2Q3ZTZmNjkzYjVjYjU4MjllMzU1NGUyNjIzZjJiMjNhOWMzZGE0NDE3NTEz',
  'https://www.reliancedigital.in/medias/airpods-pro-2nd-gen-Buy-now-NPI-Banner-01-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDM4NjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDkwL2hiMy85OTE1MjAzNTE4NDk0LmpwZ3w1NzZjYjljZGY4M2E3OTMwZmFmOTExNmY3MzE4ZDczYTIxNzUyOWE3YmQyOWQ4YzA5MWRkZmU2NTY4YWMyYTUy',
  'https://www.reliancedigital.in/medias/Apple-Watch-Series-8-Buy-now-CLP-Banner-30-09-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDE0Mjh8aW1hZ2UvanBlZ3xpbWFnZXMvaGExL2gwNS85OTE1MjU1MzkwMjM4LmpwZ3wwMzIwY2NmMWUzODMyOTBjYTNiMDY0ZDJiN2YwMWNmMzBlMzViZGUzMGM2OGVjNzA0OTZiZGVkNWZlY2EwZjRk',
]
const electronicsImage = [
  'https://www.reliancedigital.in/medias/Printers-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w1NjMwNnxpbWFnZS9qcGVnfGltYWdlcy9oZWIvaDRjLzk5MTM3Nzc1ODYyMDYuanBnfGZkMDA2YTU3ZTUxMGNjZTAwNjQxNmE3ZGZjNjg4NDI4NTE1ZDBhZWJhMThiZjMxMTJkNjdmMTliOWQ5ODdiNGY',
  'https://www.reliancedigital.in/medias/Washing-Machines-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w0NDcwMHxpbWFnZS9qcGVnfGltYWdlcy9oNWIvaDUwLzk5MTM3Nzc3MTcyNzguanBnfGMyNWJhNDNiMTFkMjE4YmQ2OGRiMzdkMGIxNmZmZDhiYzViMTBjY2I1ZDllYzAyMWFjN2FlZTU1ZGVmMDk4MmU',
  'https://www.reliancedigital.in/medias/Smartwatches-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w0OTAwNHxpbWFnZS9qcGVnfGltYWdlcy9oNzUvaDMxLzk5MTM3Nzc2NTE3NDIuanBnfDc0ZjgyYjQzZjcxNGYxMWUxMDdkOTk1Y2RlNTg2MWJlMTdmMmJlYTcwNmUxN2NhNTAzM2JmZTQxNmFjNjgzYjU',
  'https://www.reliancedigital.in/medias/Televisions-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w4MTU1NXxpbWFnZS9qcGVnfGltYWdlcy9oNDEvaDYwLzk5MTM3Nzc1MjA2NzAuanBnfGIxMjNhZGFhN2FiYzVmMTRmNjExNDkyOTliNjZkYmNhNjk5NDI5Y2ZkODU2MmNjZmViMmQ3N2FlY2EyZDZjYjk',
  'https://www.reliancedigital.in/medias/Winter-Appliances-Small-banners.jpg?context=bWFzdGVyfGltYWdlc3w2ODA0M3xpbWFnZS9qcGVnfGltYWdlcy9oYTUvaDhmLzk5MTM3NzczMjQwNjIuanBnfDdjMTE5YzUzNjcyODZiNDljNGJlNDMzZTNkNGI5Nzg2ZjlhOTg0YmFhYTViOTZmOTFkNmY1MWRlZGQ4NWY5ZDY',
  'https://www.reliancedigital.in/medias/MackBook-Appliances-Small-banners.jpg?context=bWFzdGVyfGltYWdlc3w0Mjc0NXxpbWFnZS9qcGVnfGltYWdlcy9oNTYvaDkyLzk5MTkwODgzMjg3MzQuanBnfDcxYmMyMDMxMjdiMzUxYzE2NmJkYTU4ZDBlNTQxNjBkZWViYjQ1Mzc2Y2IyOWYwNTllODhkNmRlZjA0NjM3NmI',
  'https://www.reliancedigital.in/medias/True-Wireless-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w0NjcyOXxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDljLzk5MTM3NzcyNTg1MjYuanBnfGY3MDIxZDZlYTBhMjEwYjQ4NGIzMmQwZjdjMzQ2M2FhYzIwYWE0NGE4MzFmYjRlZjQwNzFlZjk2NWMwMzYxN2Y',
  'https://www.reliancedigital.in/medias/5G-smartphones-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w1NjI5MXxpbWFnZS9qcGVnfGltYWdlcy9oYTkvaDMwLzk5MTYxNzg1NjMxMDIuanBnfGNjMTViZWY2NDViY2YyYmI4MTc3YzhlNWU3NDViYzAwOTAzYWRiYmRmNzI2YzYzYTcwYTA5ZjVlNjQxZWJkYmQ',
]
const getData = async (prod) => {
  try {
    let res = await axios.get(`https://reliance-digital-backend.vercel.app/api/products?q=${prod}`);
    let resData = await res.data;
    return resData;
  } catch {
    console.log('server error');
  }
}

let id;

export default function Home() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const [headphoneLoading, setHeadphoneLoading] = useState(false);
  const [televisionLoading, setTelevisionLoading] = useState(false);
  const [monitorLoading, setMonitorLoading] = useState(false);
  const [mouseLoading, setMouseLoading] = useState(false);

  const [c, setC] = useState(0);
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);

  const [headphonesData, setHeadphonesData] = useState([]);
  const [televisionData, setTelevisionData] = useState([]);
  const [monitorData, setMonitorData] = useState([]);
  const [mouseData, setMouseData] = useState([]);

  useEffect(() => {
    getData('earphones').then((res) => {
      setHeadphonesData(res.results)
    }).catch((err) => {

    }).finally(() => {
      setHeadphoneLoading(true)
    })
    getData('television').then((res) => {
      setTelevisionData(res.results)
    }).catch((err) => {

    }).finally(() => {
      setTelevisionLoading(true)
    })
  }, [])

  useEffect(() => {
    getData('monitor').then((res) => {
      setMonitorData(res.results)
    }).catch((err) => {

    }).finally(() => {
      setMonitorLoading(true)
    })
    getData('mouse').then((res) => {
      setMouseData(res.results)
    }).catch((err) => {

    }).finally(() => {
      setMouseLoading(true)
    })

  }, [])

  // if (id) {
  //   clearInterval(id)
  // }
  // id = setInterval(() => {

  //   if (count + 1 == crauserImages.length) {
  //     setCount(0)
  //     setCount1(0)
  //   } else {
  //     setCount(prev => prev + 1)
  //     setCount1(prev => prev + 1)
  //   }

  // }, 4000)



  const handlePrev = () => {
    if (count - 1 === -1) {
      setCount(crauserImages.length - 1)
    } else {
      setCount(count - 1)
    }
  }

  const handleNext = () => {
    if (count + 1 === crauserImages.length) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
  }

  const handlePrev1 = () => {
    if (count1 - 1 === -1) {
      setCount1(crauserImages2.length - 1)
    } else {
      setCount1(count1 - 1)
    }
  }

  const handleNext1 = () => {
    if (count1 + 1 === crauserImages2.length) {
      setCount1(0)
    } else {
      setCount1(count1 + 1)
    }
  }

  const handleNextState = () => {
    if (c + 5 === headphonesData.length) {
      setC(0)
    } else
      setC(c + 1)
  }

  const handlePrevState = () => {
    if (c - 1 < 0) {
      setC(headphonesData.length - 6)
    } else
      setC(c - 1)
  }
  const handleNextState1 = () => {
    if (c1 + 5 === televisionData.length) {
      setC1(0)
    } else
      setC1(c1 + 1)
  }
  const handlePrevState1 = () => {
    if (c1 - 1 < 0) {
      setC1(televisionData.length - 6)
    } else
      setC1(c1 - 1)
  }
  const handleNextState2 = () => {
    if (c2 + 5 === monitorData.length) {
      setC2(0)
    } else
      setC2(c2 + 1)
  }

  const handlePrevState2 = () => {
    if (c2 - 1 < 0) {
      setC2(monitorData.length - 6)
    } else
      setC2(c2 - 1)
  }
  const handleNextState3 = () => {
    if (c3 + 5 === mouseData.length) {
      setC3(0)
    } else
      setC3(c3 + 1)
  }

  const handlePrevState3 = () => {
    if (c3 - 1 < 0) {
      setC3(mouseData.length - 6)
    } else
      setC3(c3 - 1)
  }

  return (
    <div id='home'>
      <div>
        <img id='firstImage' width='100%' src="https://www.reliancedigital.in/medias/20000-instant-Discount-Carousel-Banner-08-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w2MDk0OXxpbWFnZS9qcGVnfGltYWdlcy9oZmUvaGIwLzk5MTgzMzc3NDQ5MjYuanBnfDAwMzE2Mjg3YmFlMGM4MzA3OGNhZWZkZmRjZDQ1NzVhMWUyNzkxMmNjYzI0MGQwMjNjNWRkMjcxMGQ2MGY4ZGY" alt="firstPost" />
        <img id='secondImage' width='100%' src="https://www.reliancedigital.in/medias/20000-instant-Discount-Carousel-Banner-08-11-2022-Mobile-01.jpg?context=bWFzdGVyfGltYWdlc3w0OTI1NHxpbWFnZS9qcGVnfGltYWdlcy9oODEvaDEwLzk5MTgyMDM1NTk5NjYuanBnfGVmZTgzM2U4N2FkMzNhYWI0Y2IzY2UyNmIyNzk5N2Y3MzA0MjhjZjY2Y2M3Y2Q4NWJlYzhmNDMxMDBhYjE1OWQ" alt="secondPost" />
      </div>

      <div className='crauser'>
        <img width='100%' src={crauserImages[count]} alt="prodictImage" />
        <button id='prev' onClick={handlePrev}>‹</button>
        <button id='next' onClick={handleNext}>›</button>
      </div>

      <div className='digitalAudioFest'>
        <div>
          <p>DIGITAL AUDIO FEST</p>
          <hr />
          <p>VIEW ALL</p>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <div className='headphones'>
          {
            headphoneLoading &&
            <ProductsCard key={Math.random()} url={headphonesData[c].media[0].productImageUrl} title={headphonesData[c].name} dealPrice={headphonesData[c].price.value} mrp={headphonesData[c].price.mrp} youSave={headphonesData[c].price.discount} />
          }
          {
            headphoneLoading &&
            <ProductsCard key={Math.random()} url={headphonesData[c + 1].media[0].productImageUrl} title={headphonesData[c + 1].name} dealPrice={headphonesData[c + 1].price.value} mrp={headphonesData[c + 1].price.mrp} youSave={headphonesData[c + 1].price.discount} />
          }
          {
            headphoneLoading &&
            <ProductsCard key={Math.random()} url={headphonesData[c + 2].media[0].productImageUrl} title={headphonesData[c + 2].name} dealPrice={headphonesData[c + 2].price.value} mrp={headphonesData[c + 2].price.mrp} youSave={headphonesData[c + 2].price.discount} />
          }
          {
            headphoneLoading &&
            <ProductsCard key={Math.random()} url={headphonesData[c + 3].media[0].productImageUrl} title={headphonesData[c + 3].name} dealPrice={headphonesData[c + 3].price.value} mrp={headphonesData[c + 3].price.mrp} youSave={headphonesData[c + 3].price.discount} />
          }
          {
            headphoneLoading &&
            <ProductsCard key={Math.random()} url={headphonesData[c + 4].media[0].productImageUrl} title={headphonesData[c + 4].name} dealPrice={headphonesData[c + 4].price.value} mrp={headphonesData[c + 4].price.mrp} youSave={headphonesData[c + 4].price.discount} />
          }
        </div>
        <button className='p' onClick={handlePrevState}>‹</button>
        <button className='n' onClick={handleNextState}>›</button>
      </div>

      <hr className='homeDivider' />

      <div className='digitalAudioFest'>
        <div>
          <p>BEST SELLERS FROM TV</p>
          <hr />
          <p>VIEW ALL</p>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <div className='headphones'>
          {
            televisionLoading &&
            <ProductsCard key={Math.random()} url={televisionData[c1].media[0].productImageUrl} title={televisionData[c1].name} dealPrice={televisionData[c1].price.value} mrp={televisionData[c1].price.mrp} youSave={televisionData[c1].price.discount} />
          }
          {
            televisionLoading &&
            <ProductsCard key={Math.random()} url={televisionData[c1 + 1].media[0].productImageUrl} title={televisionData[c1 + 1].name} dealPrice={televisionData[c1 + 1].price.value} mrp={televisionData[c1 + 1].price.mrp} youSave={televisionData[c1 + 1].price.discount} />
          }
          {
            televisionLoading &&
            <ProductsCard key={Math.random()} url={televisionData[c1 + 2].media[0].productImageUrl} title={televisionData[c1 + 2].name} dealPrice={televisionData[c1 + 2].price.value} mrp={televisionData[c1 + 2].price.mrp} youSave={televisionData[c1 + 2].price.discount} />
          }
          {
            televisionLoading &&
            <ProductsCard key={Math.random()} url={televisionData[c1 + 3].media[0].productImageUrl} title={televisionData[c1 + 3].name} dealPrice={televisionData[c1 + 3].price.value} mrp={televisionData[c1 + 3].price.mrp} youSave={televisionData[c1 + 3].price.discount} />
          }
          {
            televisionLoading &&
            <ProductsCard key={Math.random()} url={televisionData[c1 + 4].media[0].productImageUrl} title={televisionData[c1 + 4].name} dealPrice={televisionData[c1 + 4].price.value} mrp={televisionData[c1 + 4].price.mrp} youSave={televisionData[c1 + 4].price.discount} />
          }
        </div>
        <button className='p' onClick={handlePrevState1}>‹</button>
        <button className='n' onClick={handleNextState1}>›</button>
      </div>

      <hr className='homeDivider' />

      <div className='digitalAudioFest'>
        <div>
          <p>GREAT DEALS ON ELECTRONICS</p>
        </div>
      </div>

      <div id='electronics'>
        {
          electronicsImage.map((ele) => {
            return <div key={Math.random()}>
              <img src={ele} alt="elecImage" />
            </div>
          })
        }
      </div>

      <div className='crauser' style={{ marginTop: '5vh' }}>
        <img width='100%' src={crauserImages2[count1]} alt="prodictImage" />
        <button style={{ backgroundColor: 'white' }} id='prev' onClick={handlePrev1}>‹</button>
        <button style={{ backgroundColor: 'white' }} id='next' onClick={handleNext1}>›</button>
      </div>

      <hr className='homeDivider' />

      <div className='digitalAudioFest'>
        <div>
          <p>UPTO 75% OFF ON MONITORS</p>
          <hr />
          <p>VIEW ALL</p>
        </div>
      </div>

      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
        <div className='headphones' style={{ paddingLeft: '6vw' }}>
          {
            monitorLoading &&
            <ProductsCard key={Math.random()} url={monitorData[c2].media[0].productImageUrl} title={monitorData[c2].name} dealPrice={monitorData[c2].price.value} mrp={monitorData[c2].price.mrp} youSave={monitorData[c2].price.discount} />
          }
          {
            monitorLoading &&
            <ProductsCard key={Math.random()} url={monitorData[c2 + 1].media[0].productImageUrl} title={monitorData[c2 + 1].name} dealPrice={monitorData[c2 + 1].price.value} mrp={monitorData[c2 + 1].price.mrp} youSave={monitorData[c2 + 1].price.discount} />
          }
          {
            monitorLoading &&
            <ProductsCard key={Math.random()} url={monitorData[c2 + 2].media[0].productImageUrl} title={monitorData[c2 + 2].name} dealPrice={monitorData[c2 + 2].price.value} mrp={monitorData[c2 + 2].price.mrp} youSave={monitorData[c2 + 2].price.discount} />
          }
          {
            monitorLoading &&
            <ProductsCard key={Math.random()} url={monitorData[c2 + 3].media[0].productImageUrl} title={monitorData[c2 + 3].name} dealPrice={monitorData[c2 + 3].price.value} mrp={monitorData[c2 + 3].price.mrp} youSave={monitorData[c2 + 3].price.discount} />
          }
        </div>
        <button className='p hide' style={{ left: '2vw', top: '22vh' }} onClick={handlePrevState2}>‹</button>
        <button className='n hide' style={{ right: '35vw', top: '22vh' }} onClick={handleNextState2}>›</button>
        <img className='hideImage' width='350px' height='350px' style={{ marginRight: '5vw', marginTop: '5vh' }} src="https://www.reliancedigital.in/medias/Best-of-Monitors-Producst-Carousel-27-10-2022-02.jpg?context=bWFzdGVyfGltYWdlc3w5ODgyMHxpbWFnZS9qcGVnfGltYWdlcy9oNDIvaDcxLzk5MTM3NzY4NjUzMTAuanBnfDlmMzFmY2EyNDljZGUzZTQ1ZDhhYTM3YWU4MzE4OThhNzViZjExZDE4ZWNmN2FiMDI1MTllNmMzZmNiNjAyNzA" alt="image" />
      </div>

      <hr className='homeDivider' />

      <div className='digitalAudioFest'>
        <div>
          <p>IT ACCESSORIES STARTING FROM RS. 109</p>
          <hr />
          <p>VIEW ALL</p>
        </div>
      </div>

      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between',width:'95%',margin:'auto' }}>
        <img className='hideImage' width='350px' height='350px' style={{ marginRight: '5vw', marginTop: '5vh' }} src="https://www.reliancedigital.in/medias/IT-Accessories-Producst-Carousel-10-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDAwMDV8aW1hZ2UvanBlZ3xpbWFnZXMvaDE5L2g0Zi85OTE5MTg2MTQxMjE0LmpwZ3xiODE1NTlmNDdmOWJlMjM5MTRiYWI3NzZkOGJjZjI5MWY3MDJmMjRkMmI3YjhmMWQyYmYwNDA5ZTM4MjE1MTg0" alt="image" />
        <div className='headphones' style={{ paddingLeft: '7vw' }}>
          {
            mouseLoading &&
            <ProductsCard key={Math.random()} url={mouseData[c3].media[0].productImageUrl} title={mouseData[c3].name} dealPrice={mouseData[c3].price.value} mrp={mouseData[c3].price.mrp} youSave={mouseData[c3].price.discount} />
          }
          {
            mouseLoading &&
            <ProductsCard key={Math.random()} url={mouseData[c3 + 1].media[0].productImageUrl} title={mouseData[c3 + 1].name} dealPrice={mouseData[c3 + 1].price.value} mrp={mouseData[c3 + 1].price.mrp} youSave={mouseData[c3 + 1].price.discount} />
          }
          {
            mouseLoading &&
            <ProductsCard key={Math.random()} url={mouseData[c3 + 2].media[0].productImageUrl} title={mouseData[c3 + 2].name} dealPrice={mouseData[c3 + 2].price.value} mrp={mouseData[c3 + 2].price.mrp} youSave={mouseData[c3 + 2].price.discount} />
          }
          {
            mouseLoading &&
            <ProductsCard key={Math.random()} url={mouseData[c3 + 3].media[0].productImageUrl} title={mouseData[c3 + 3].name} dealPrice={mouseData[c3 + 3].price.value} mrp={mouseData[c3 + 3].price.mrp} youSave={mouseData[c3 + 3].price.discount} />
          }
        </div>
        <button className='p hide' style={{ left: '30vw', top: '22vh' }} onClick={handlePrevState3}>‹</button>
        <button className='n hide' style={{ right: '0vw', top: '22vh' }} onClick={handleNextState3}>›</button>
      </div>



    </div>
  )
}
