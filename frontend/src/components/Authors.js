import React from 'react'
import {Image, Container } from 'react-bootstrap'
import data from '../data'

function Authors() {
  return (
    <Container>
        <h2 className = "text-start text-light mt-3"> Amazing Authors To Follow</h2>
        {data.users.map(user => (
            <div className = "row bg-dark text-start text-light rounded mt-3 p-3">
                <div className = 'col-md-8 '>
                    <div className = 'd-flex '>
                        <Image className = "rounded p-1"src = {user.profileImage} style= {{width: '10%', height: '10%'}}/>
                        <div className ="p-1">
                            <h5 className = "">{user.name} <span className='text-secondary'>{user.summary.stories} Stories</span></h5>
                            <p className='text-secondary'>{user.bio}</p>
                        </div>
                    </div>
                    
                   
                </div>

                <div className = 'col-md-4 d-flex text-end '>
                        <p className = 'p-3 text-end'>{user.summary.followers} Followers</p>
                        <a className = 'p-3 text-end' href = '/unfollow'> Follow</a>    
                </div>
            </div>

        ))}
            
    </Container>
  )
}

export default Authors