function Button({txt, color, onBtnClick}) {
  return <button className="btn" style={{backgroundColor: color}} onClick={onBtnClick}>{txt}</button>;
}

Button.defaultProps = {
    color: 'steelblue'
}
export default Button