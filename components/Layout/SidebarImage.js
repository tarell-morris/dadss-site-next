import { Paper, styled } from '@mui/material'
import theme from '../../src/theme'

const SidebarImage = ({ image }) => {
  const ImageHolder = styled('div')({
    height: '100%',
    width: '100%',
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  })

  return (
    <ImageWrap>
      <ImageHolder />
    </ImageWrap>
  )
}

export default SidebarImage

const ImageWrap = styled(Paper)({
  overflow: 'hidden',
  height: 150,
  width: 225,
  margin: theme.spacing(1),
  marginRight: 0,
})
