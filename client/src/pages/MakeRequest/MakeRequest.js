import React from 'react'
import PostSection from '../../components/Post/Post'
import img from '../../../src/images/request-img.jpg'

function MakeRequest() {
    return (
        <>
           <img src={ img } alt="request-img" /> 
        <PostSection /> 
        </>
    )
}

export default MakeRequest
