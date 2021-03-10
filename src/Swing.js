import React from 'react'
import styles from './Swing.module.scss'

import { ReactComponent as Pivot } from './pivot.svg'
import { ReactComponent as SeeSaw } from './seesaw.svg'

const degToRad = deg => (deg * Math.PI) / 180

function getAngle (left, right) {
  const totalWeight = right + left
  const counterWeight = Math.abs(right - left)
  const invert = Math.sign(right - left)
  const base = counterWeight / (totalWeight + 1)
  const maxDivergence = Math.sin(degToRad(45))
  const divergence = Math.min(maxDivergence, base)
  return invert * Math.asin(divergence)
}

export const Swing = ({ left, right }) => {
  const angle = getAngle(left, right)
  const style = { transform: `rotate(${angle}rad)` }
  return (
    <div className={styles.seesaw}>
      <div className={styles.ssObject}>
        <SeeSaw className={styles.board} style={style} />
      </div>
      <div className={styles.ssObject}>
        <Pivot className={styles.pivot} />
      </div>
    </div>
  )
}
