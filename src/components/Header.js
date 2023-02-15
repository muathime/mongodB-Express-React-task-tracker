import React from 'react'
import CustomButton from "./CustomButton";

const Header = ({ title, onAddBtnClick, onCloseBtnClick, showAdd, showBtn }) => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      {showBtn && (
        <>
          <CustomButton
            txt={showAdd ? "Close" : "Add"}
            color={showAdd ? "orange" : "green"}
            onBtnClick={showAdd ? onCloseBtnClick : onAddBtnClick}
          />

          <CustomButton txt={"logout"} color={"red"} onBtnClick={logout} />
        </>
      )}
    </header>
  );
};

Header.defaultProps = {
    title : "Default Title",
}
export default Header