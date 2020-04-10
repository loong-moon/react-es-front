/****
 * 数字滚动组件
****/
import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const checkIsNumber = value => {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  return numbers.includes(value)
}

function IndexItem (props) {
  const { number = 0, height = 50 } = props
  const numberList = number.toString().split('')

  const wrapStyle = {
    height: height,
    lineHeight: height + 'px'
  }
  
  return (
    <div 
      className="number-roll-wrap" 
      style={wrapStyle}>
      {numberList.map(number => {
        const isNumber = checkIsNumber(number)
        let el
        if (isNumber) {
          const boxStyle = {
            marginTop: '-' + parseInt(number) * height + 'px'
          }
          el = 
          <div className="number-roll-item">
            <div className="number-box" style={boxStyle}>
              <span>0</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
            </div>
          </div>
        } else {
          el = <span>{number}</span>
        }
        return el
      })}
      
    </div>
  )
}

// 参数类型验证
IndexItem.propTypes = {
  number: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.number,
}


export default IndexItem