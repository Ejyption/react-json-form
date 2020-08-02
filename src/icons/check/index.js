import React from 'react'
import PropTypes from 'prop-types'

const AlertTriangleIcon = ({ weight, size, className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      width={size}
      height={size}
      strokeWidth={weight}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      preserveAspectRatio='xMidYMid meet'
    >
      <polyline points='20 6 9 17 4 12' />
    </svg>
  )
}

AlertTriangleIcon.defaultProps = {
  size: 24,
  color: '#000',
  weight: 2
}

AlertTriangleIcon.propTypes = {
  size: PropTypes.number,
  weight: PropTypes.number,
  className: PropTypes.string
}

export default AlertTriangleIcon
