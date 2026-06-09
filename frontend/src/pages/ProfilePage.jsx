import{useOktaAuth} from "@okta/okta-react"
function ProfilePage() {
  const { oktaAuth  } = useOktaAuth();

  const handleLogout = async() => {
    await oktaAuth.signOut();
  };
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Authenticated User Information</p>
    <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default ProfilePage;