import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
    <Row className='mt-5 mb-5 d-flex justify-content-center align-items-center'>
      <Col></Col>
      <Col lg={5}>
        <h3>Welcome to <span className='text-warning'>Meadia Player</span> </h3>
        <p className='mt-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vel reprehenderit quibusdam, minus repellat quisquam. Repellendus, tenetur? Voluptatem repudiandae quo ratione ea rerum, eos vel ex similique vitae optio voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. At explicabo esse quis, aliquam maiores iure quae voluptatum consequatur cum similique voluptas odio impedit ad accusantium sapiente ex iusto itaque harum.</p>
        <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-warning'>Get Started <i class="fa-solid fa-arrow-right"></i></button>
      </Col>
      <Col></Col>
      <Col lg={5}>
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
      </Col>
    </Row>
    <div className='container mt-5 mb-5 d-flex justify-content-center align-items-center flex-column'>
      <h3 className='mb-5'>Features</h3>
      <div className='cards d-flex justify-content-evenly align-items-center w-100'>
      <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'300px'}}  src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
    <div className='container border border-2 border-secondary rounded w-100 p-5 mt-5 mb-5 d-flex align-items-center justify-content-between'>
      <Row>
        <Col lg={5}>
          <h3 className='text-warning mb-5'>Simple fast and Powerful</h3>
          <h6 className='mb-3'><span className='fw-bolder fs-5'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis officiis, porro ratione autem ipsam architecto nisi molestiae voluptatem, provident soluta modi hic. Ipsum quas maxime, suscipit ipsa aspernatur fugiat.</h6>
          <h6 className='mb-3'><span className='fw-bolder fs-5'>Play Everything</span>:Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, cum, fugiat exercitationem minima maiores saepe inventore eligendi eveniet error laudantium, quam eaque dolor. Voluptatum ex asperiores ea vitae consequatur excepturi.</h6>
          <h6 className='mb-3'><span className='fw-bolder fs-5'>Play Everything</span>:Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, cum, fugiat exercitationem minima maiores saepe inventore eligendi eveniet error laudantium, quam eaque dolor. Voluptatum ex asperiores ea vitae consequatur excepturi.</h6>
        </Col>
        <Col></Col>
        <Col lg={6}><iframe width="100%" height="400" src="https://www.youtube.com/embed/IqwIOlhfCak?si=4b-w_qHIjGlyra2D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Col>
      </Row>
    </div>
    </>
  )
}

export default LandingPage