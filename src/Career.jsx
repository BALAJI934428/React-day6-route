import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
function Career(props) {
 let value = props.data
  let data = []

  value.map((item) =>{
    if (item.id === 'c'){
      data.push(item)
    }
  })
  console.log(data)
  return (
    <div>
      
    <Navbar expand="lg"  className="bg-body-tertiary  ">
  
  
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="" className=" justify-content-center">
      <Nav  variant="underline" defaultActiveKey="/Career">
      <Nav.Link  href="/"> <h3>All</h3> </Nav.Link>
      <Nav.Link href="/FSD"><h3>FullStack Deveploment</h3></Nav.Link>
      <Nav.Link href="/DataScience"><h3>DataScience</h3></Nav.Link>
      <Nav.Link href="/CyberSecurity"><h3>CyberSecurity</h3></Nav.Link>
      <Nav.Link href="/Career"><h3>Career</h3></Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  
</Navbar>

<div className="row row-cols-1 row-cols-md-3 g-4 mx-5 my-2 justify-content-center">

  {data.map((item,index) => 
   (
    <div className="border card  ms-5 card__one" key={index} style={{width : '450px'}}>
    <img className='card__img' src="https://via.placeholder.com/350x150"  />
    <div className="card-body card__desc">
    <h3 className="card-title" style={{fontfamily : 'Electrolize'}}> {item.title}</h3>
    <div className='des'>
    {item.description}
    </div>
    <button type="button" class="text-start btn btn-outline-success border-0 ">Read More... </button>
      

    </div>
    </div>)


   )}</div> </div>
  )
}

export default Career