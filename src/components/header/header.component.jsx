import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  IconsContainer,
  Options,
  Option,
  DisplayName,
  DisplayName2,
} from "./header.styles";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
// import Button from "../button/button";
import UserIcon from "../icons-components/user-icon/user-icon";
import IsUserIcon from "../icons-components/isUser-icon/is-user";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import searchicon from "../../assets/images/search.svg";

const Header = ({ currentUser }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <Options>

      <Option>
        <img src={searchicon} alt="" />
        {/* <DisplayName2>search</DisplayName2> */}
      </Option>
      <Option>
        {currentUser ? (
          <div onClick={() => auth.signOut()}>
            <IsUserIcon />
            <DisplayName>{currentUser.displayName}</DisplayName>
          </div>
        ) : (
          <Link to="/signin">
            <UserIcon />
            <DisplayName2>signIn</DisplayName2>
          </Link>
        )}
      </Option>
      <Option> <Link to="/contribute">contribute</Link></Option>

    </Options>

  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
// export default Header;
