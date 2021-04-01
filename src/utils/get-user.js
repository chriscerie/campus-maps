export default function authenticate() {
  if (window.gapi) {
    const authInstance = window.gapi.auth2.getAuthInstance();
    const isSignedIn = authInstance.isSignedIn.get();
    
    if (isSignedIn === false) {
      return {};
    }
    
    const user = authInstance.currentUser.get();
    const profile = { 
      ...user.getBasicProfile(),
      signOut: authInstance.signOut
    };

    return (profile);
  }
}