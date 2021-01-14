import styled from 'styled-components/native'



export const SecBannerContent = styled.SafeAreaView({
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
})

export const SecondBanner = styled.Image({
    width: 380,
    height: 344,
})

export const SecBannerButton = styled.TouchableOpacity({
    marginTop:350,
    alignItems: 'center',
    justifyContent: 'center',
    width: 147,
    height: 33,
    backgroundColor: 'black',
    position: 'absolute',
})

export const SecBannerButtonText = styled.Text({
    
    color: '#FFF',
})