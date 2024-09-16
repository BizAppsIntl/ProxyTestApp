import React, { useState } from 'react'
import axios from 'axios'

// const pic = "C3RforKera230614010042739.png"
// const imageUrl = 'https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2022/04/Untitled-design-2022-04-14T155317.295.jpg.webp'
//  const imageUrl = 'http://192.168.1.100:8088/Api/Doctors/GetFile/DrFatima230619124249603.png';

// const CurrentURL4API = 'http://localhost:7088/Api'
const CurrentURL4API = 'http://72.255.36.49:8088/Api'
// const CurrentURL4API = 'https://wavelaz.kozow.com:8088/Api'

export default function ProductInfo() {
  const [Recs, setRecs] = useState('')
  
  const [PicAPI, setPicAPI] = useState("C3RforKera230614010042739.png")
  const [InputPicAPI, setInputPicAPI] = useState("C3RforKera230614010042739.png")

  // const [PicURL, setPicURL] = useState('https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2022/04/Untitled-design-2022-04-14T155317.295.jpg.webp')
  // const [PicURL, setPicURL] = useState('http://192.168.1.100:3001/Api/Doctors/GetFile/DrFatima230619124249603.png')
  const [PicURL, setPicURL] = useState(`${CurrentURL4API}/Doctors/GetFile/DrFatima230619124249603.png`)
  const [InputPicURL, setInputPicURL] = useState(`${CurrentURL4API}/Doctors/GetFile/DrFatima230619124249603.png`)
  
  // const [InputDataURL, setInputDataURL] = useState('http://localhost:3001/Api/cats')
  const [InputDataURL, setInputDataURL] = useState(`${CurrentURL4API}/procedures`)

  const DataFetchAll = async (url) => {

    try {
      // const result = await axios.get(process.env.REACT_APP_API_URL + `Procedures`)
      // const result = await axios.get(`${CurrentURL4API}/Procedures`)
      const result = await axios.get(url)
      // console.log('*****************result: ', result); alert(result.data)                    
      setRecs(result.data)
    } catch (error) {
      console.log('ERROR in fetching...\n', error)
    }
  }

  return (
    <>
      <h3>Product Information</h3>

      {/* <h2>Image from URL</h2> */}

      <div className='d-flex gap-4 w-100 px-4'>
        {/* col-1 for Pics display */}
        <div className='d-flex flex-column  w-50'>
          <div className='d-flex' >
            <label className='btn btn-primary' onClick={(e) => { setPicAPI(InputPicAPI); console.log('CALLED: ' + {InputPicAPI})} } > Fetch Image From API/Items</label>
          <input type="text" className='w-100' name='PicAPI' value={InputPicAPI} onChange={(e) => setInputPicAPI(e.target.value)} />
          {/* <button className='btn btn-success' onClick={(e) => setPicAPI(InputPicAPI)} >Fetch Image</button> */}
        </div>

        {/* <label >{process.env.REACT_APP_API_URL + `Procedures`} ----- {PicAPI}</label> */}
        <label >{CurrentURL4API + `/Items`}/{PicAPI}</label>
        {/* <img src={process.env.REACT_APP_API_URL + `Procedures/GetFile/${PicAPI}`} style={{ width: "300px", height: '300px' }} alt="..." /> */}
        <img src={CurrentURL4API + `/Procedures/GetFile/${PicAPI}`} style={{ width: "200px", height: '200px' }} alt="..." />

        <br />
        <label className='btn btn-info btn-sm' style={{ width: '200px' }} onClick={(e) =>  setPicURL(InputPicURL)}  >Fetch Image From URL</label>
      <input type="text" name='PicURL' value={InputPicURL} onChange={(e) => {setInputPicURL(e.target.value); console.log('CALLED: ' + {InputPicURL})}} />
      <label >{PicURL}</label>

      <img src={PicURL} alt="Example" style={{ width: "200px", height: '200px' }} />
    </div >

      {/* col-2 for Recs display */ }
      < div className = 'w-50' >
          <div className='d-flex' >
            <div className='btn btn-success' onClick={() => DataFetchAll(InputDataURL)}>Fetch Records from URL </div>
            <input className='w-100' type="text" name='DataURL' value={InputDataURL} onChange={(e) => setInputDataURL(e.target.value)} />
          </div>

          <br />
          <label >{InputDataURL}</label>
          <br />

          <pre>Response: {JSON.stringify({ Recs }, null, 2)}</pre>
        </div >
      </div >


    </>
  )
}
