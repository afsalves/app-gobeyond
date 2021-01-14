import React from 'react'
import {BannerContent, FirstBanner, BannerButton, BannerButtonText} from './styles'

const MainBanner = () => (
    <BannerContent>
        <FirstBanner source ={{uri: 'http://ec2-54-237-155-186.compute-1.amazonaws.com/storage/images//banners/s9OhVEL3UqqNydOtUL7CIQARwE3V47VdZCPIwgH7.png'}}/>
        <BannerButton onPress={() =>{}}>
            <BannerButtonText>CONFIRA</BannerButtonText>
        </BannerButton>
        
    </BannerContent>

)
  

export default  MainBanner