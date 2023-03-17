import { IconBase, Path, Circle, Rect } from '@/components'
import PropTypes from 'prop-types'

function UserBoxLight({ color, ...props }) {
  return (
    <IconBase viewBox="0 0 18 18" {...props}>
      <Path
        d="M13.4501 15.9428C13.2878 15.0432 12.7387 14.2233 11.9049 13.636C11.0711 13.0487 10.0095 12.734 8.91798 12.7506C7.82642 12.7672 6.77932 13.1139 5.97177 13.7261C5.16422 14.3384 4.65128 15.1744 4.52853 16.0784"
        stroke={color}
      />
      <Circle cx="9" cy="7.5" r="2.25" stroke={color} stroke-linecap="round" />
      <Rect x="2" y="2" width="14" height="14" rx="3.5" stroke={color} />
    </IconBase>
  )
}

export default UserBoxLight

UserBoxLight.propTypes = {
  color: PropTypes.string,
}
UserBoxLight.defaultProps = {
  color: 'icon.lightPurple',
}
