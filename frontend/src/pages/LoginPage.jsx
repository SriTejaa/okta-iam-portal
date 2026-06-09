import oktaAuth from "../services/oktaConfig";

function LoginPage() {
  const handleLogin = () => {
  oktaAuth.signInWithRedirect();
  };

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;