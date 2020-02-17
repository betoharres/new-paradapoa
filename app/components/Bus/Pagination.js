import React from 'react'
import {array, number} from 'prop-types'
import {Pagination as RNPagination} from './Pagination.styles'

export default function Pagination({entries, activeIndex}) {
  return (
    <RNPagination
      dotsLength={entries.length}
      activeDotIndex={activeIndex}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  )
}

Pagination.propTypes = {
  entries: array.isRequired,
  activeIndex: number.isRequired,
}
