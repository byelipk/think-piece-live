import React, { Component, createContext } from "react";
import { auth, createUserProfileDocument } from "../firebase";

export const CurrentUserContext = createContext({ user: null });

class CurrentUserProvider extends Component {

  state = {
    user: null
  };

  unsubscribeFromAuth = null;
  
  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          const data = snapshot.data();
          this.setState({ user: { uid: snapshot.id, ...data }})
        });

      }
      this.setState({ user: userAuth });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };

  render() {
    const { user } = this.state;
    const { children } = this.props;

    return (
      <CurrentUserContext.Provider value={user}>
        {children}
      </CurrentUserContext.Provider>
    );
  }
}

export default CurrentUserProvider;
