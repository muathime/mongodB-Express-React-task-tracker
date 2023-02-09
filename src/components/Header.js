import React from 'react'
import Button from './Button';

const Header = ({ title, onAddBtnClick, onCloseBtnClick, showAdd, showBtn }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      {showBtn && (
        <>
          <Button
            txt={showAdd ? "Close" : "Add"}
            color={showAdd ? "orange" : "green"}
            onBtnClick={showAdd ? onCloseBtnClick : onAddBtnClick}
          />

          <Button
            txt={"logout"}
            color={"red"}
            onBtnClick={localStorage.removeItem("user")}
          />
        </>
      )}
    </header>
  );
};

Header.defaultProps = {
    title : "Default Title",
}
export default Header