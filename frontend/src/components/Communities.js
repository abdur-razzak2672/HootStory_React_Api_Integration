import React from 'react'
import {Image, Container } from 'react-bootstrap'
import data from '../data'
function Communities() {
  return (
    <Container>
        <h2 className = "text-start text-light mt-3"> Amazing Communities To Follow</h2>
        {data.communities.map(community => (
            <div className = "row bg-dark text-start text-light rounded mt-3 p-3">
                <div className = 'col-md-8 '>
                    <div className = 'd-flex '>
                        <Image className = "rounded p-1"  src= {community.profileImage} style= {{width: '10%', height: '10%'}}/>
                        <div className = "p-1">
                            <h5>{community.name} <span className='text-secondary'>{community.summary.stories} Stories</span></h5>
                            <p className='text-secondary'>{community.bio}</p>
                        </div>
                    </div>
  
                </div>

                <div className = 'col-md-4 d-flex text-end'>
                        <p className = 'p-3 text-end'>{community.summary.followers} Followers</p>
                        <a className = 'p-3 text-end' href = '/unfollow'> Follow</a>    
                </div>
            </div>
        ))}
            
    </Container>
  )
}

export default Communities