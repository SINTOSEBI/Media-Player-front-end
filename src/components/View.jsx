import VideoCard from './VideoCard'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI'
import { useEffect, useState } from 'react'


  function View({uploadVideoStatus}) {
    const [allvideo , setAllVideo]=useState([])

    const [deleteVideoStatus , setDeleteVideoStatus] =useState(false)

    const getAllUploadedVideos = async()=>{
      const response = await getAllVideos()
      /* console.log(response); */
      const {data} = response
      /* console.log(data); */
      setAllVideo(data)
    }
    
    console.log(allvideo);
    useEffect(()=>{
      getAllUploadedVideos()
      setDeleteVideoStatus(false)
    },[uploadVideoStatus,deleteVideoStatus])

   return (
    <>
    <Row>
       { allvideo.length>0?
       allvideo.map((video)=>(<Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard displayVideo={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
      </Col>))
        :
        <p>Nothing to display</p>
        }
    </Row>
    </>
  )
}


export default View