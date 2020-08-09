import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from
'mdbreact';

const CardExample = () => {
  return (
    <MDBRow>

<MDBCol col='6'>
        <MDBCard>
          <MDBCardImage
            className='peach-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
            tag='div'
          >
            <h2><MDBIcon icon="user" /></h2>
            <p>Deserves her own card</p>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center'>
            <MDBCardText>
             Number Of Active Users
            </MDBCardText>
            <hr />
            <div className='text-center'>
              <MDBIcon fab icon='twitter' className='tw-ic mr-3' size='lg' />
              <MDBIcon
                fab
                icon='linkedin-in'
                className='li-ic my-3'
                size='lg'
              />
              <MDBIcon fab icon='facebook-f' className='fb-ic ml-3' size='lg' />
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol col='6'>
        <MDBCard>
          <MDBCardImage
            className='purple-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
            tag='div'
          >
            <h2><MDBIcon icon="users" /></h2>
            <p>Deserves her own card</p>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center'>
            <MDBCardText>
             Number Of Visitors
            </MDBCardText>
            <hr />
            <div className='text-center'>
              <MDBIcon fab icon='twitter' className='tw-ic mr-3' size='lg' />
              <MDBIcon
                fab
                icon='linkedin-in'
                className='li-ic my-3'
                size='lg'
              />
              <MDBIcon fab icon='facebook-f' className='fb-ic ml-3' size='lg' />
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default CardExample;