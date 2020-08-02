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
      <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' />
      <line x1='12' y1='9' x2='12' y2='13' />
      <line x1='12' y1='17' x2='12' y2='17' />
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
