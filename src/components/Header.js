import React from 'react'
import Button from './Button';

const Header = ({ title, onAddBtnClick, onCloseBtnClick, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        txt={showAdd ? "Close" : "Add"}
        color={showAdd ? "orange" : "green"}
        onBtnClick={showAdd? onCloseBtnClick: onAddBtnClick}
      />
    </header>
  );
};

Header.defaultProps = {
    title : "Default Title",
}
export default Header