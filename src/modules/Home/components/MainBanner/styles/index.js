import styled from 'styled-components/native'


export const BannerContent = styled.SafeAreaView({
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
})

export const FirstBanner = styled.Image({
    width: 380,
    height: 90,
})

export const BannerButton = styled.TouchableOpacity({
    width: 100,
    height: 50,
    position: 'absolute',
    color: 'black'
})