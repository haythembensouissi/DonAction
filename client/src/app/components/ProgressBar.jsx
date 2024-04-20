"use client"
import React from 'react'
import zxcvbn from 'zxcvbn';
import "./styles.css"
const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = testResult.score * 100/4;

  const createPassLabel = () => {
    switch(testResult.score) {
      case 0:
        return 'Very weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fear';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return '';
    }
  }

  const funcProgressColor = () => {
    switch(testResult.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        return '#00b500';
      default:
        return 'none';
    }
  }

  const changePasswordColor = () => ({
    width: `${num}%`,
    backgroundColor: funcProgressColor(),
    height: '100px'
  })
  const colors=['rgb(255,214,161)',
  'rgb(255,175,163)',
  'rgb(108,115,148)',
  'rgb(141,181,145)'

]
const randomcolor=colors[Math.floor(Math.random()*colors.length)]
  return (
    <>
    
   
      <p style={{ color: funcProgressColor() }}>{createPassLabel()} password</p>
    </>
  )
}

export default PasswordStrengthMeter
