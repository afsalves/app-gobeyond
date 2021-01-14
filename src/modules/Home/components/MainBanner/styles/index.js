import styled from 'styled-components/native'


export const BannerContent = styled.SafeAreaView({
    padding:10,
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
    alignSelf:'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    width: 95,
    height: 28,
    position: 'absolute',
    backgroundColor: 'black'
})

export const BannerButtonText = styled.Text({
    color: '#FFF',
})