import React from 'react'
import {SecBannerContent, SecondBanner, SecBannerButton, SecBannerButtonText} from './styles'

const SecBanner = () => (
    <SecBannerContent>
        <SecondBanner source ={{uri: 'http://ec2-54-237-155-186.compute-1.amazonaws.com/storage/images/banners/Fyy8pg6wMdgPeYnwZqZpywGdJDR29y5c2UAUevkP.jpg'}}/>
        <SecBannerButton onPress={() =>{}}>
            <SecBannerButtonText>CONFERIR</SecBannerButtonText>
        </SecBannerButton>
    </SecBannerContent>

)
  

export default  SecBanner