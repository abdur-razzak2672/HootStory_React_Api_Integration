import React from 'react'
import {Image, Container } from 'react-bootstrap'
import data from '../data'
function ShortStory() {
    return (
        <Container>
            
            {data.stories.map(story => (
            <div>
                <div className = "row bg-light text-start rounded mt-3 p-3">
                    <div className = "col-md-12">
                        <h2>{story.title}</h2>
                        <div className = "row mt-3">
                            <div className = "col-md-6 d-flex text-center">
                                <Image className = "rounded" src = {story.author.profileImage} style= {{width: '10%', height: '100%'}}/>
                                <h5 className = "pt-1">{story.author.name}</h5>
                            </div>
                            <div className = "col-md-6">
                            <h5 className = "text-end">{story.community.name}</h5>
                            </div>
                        </div>
                        <p className='text-secondary mt-4'>{story.created} | {story.readTime} Read  <span className = "p-2"> {story.hashtags} </span></p>
                    </div>
    
                </div>

                <div className = "row bg-light text-start rounded mt-3 p-3">
                    <div className = 'col-md-12'>
                        <p>{story.content}</p>
    
                        <div className = "row mt-5">
                            <div className = "col-md-4 d-flex">
                            <Image className = "rounded" src = {story.author.profileImage} style= {{width: '10%', height: '100%'}}/>
                                <h5 className = "pt-1">{story.author.name}</h5>
    
                            </div>
                            <div className = "col-md-4">
                                <p className='text-secondary '>{story.created}</p>
                            </div>
                            <div className = "col-md-4">
                                <h5 className = "text-end">{story.community.name}</h5>
    
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className = "row bg-light text-start rounded mt-3 p-3">
                    <div className = 'col-md-12'>
                    <Image className = "rounded" src = {story.coverImage}  style={{width: '100%'}}/>
                        <p>{story.content}</p>
    
                        <div className = "row mt-5">
                            <div className = "col-md-4 d-flex text-center">
                                <Image className = "rounded" src = {story.author.profileImage} style= {{width: '10%', height: '100%'}}/>
                                <h5 className = "pt-1">{story.author.name}</h5>
    
                            </div>
                            <div className = "col-md-4">
                                <p className='text-secondary '>{story.created}</p>
                            </div>
                            <div className = "col-md-4">
                                <h5 className = "text-end">{story.community.name}</h5>
    
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
            ))}
    
        
    
        </Container>
      )
}

export default ShortStory
