import { Text, Img } from '@/ui'
import PropType from 'prop-types'

const AvatarOrTextSource = ({gallery}) => {
    if(gallery[0]?.url){
        return(
            <Img
            src={gallery[0].url}
            height={20}
            alt="alt"
          />  
        )
    }
    return(<Text>{gallery[0]?.text.toUpperCase()}</Text>)
}

AvatarOrTextSource.propTypes = {
    gallery: PropType.array
}

export default AvatarOrTextSource