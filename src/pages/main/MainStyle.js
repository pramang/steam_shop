import styled from 'styled-components'

export const VisualWrap = styled.section`
    width:100%; position:relative;
    .swiper {
  width: 100%;
  height: 100%;
  
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
}

.swiper-slide img {
  width: 1400px;
  height: 600px;
  object-fit: contain;
  background: #333;
}
`

export const MainWrap = styled.div`
    &.main{}
    .inner { padding:100px 0 }
    h2 { font-size:30px; font-weight:700 }
`