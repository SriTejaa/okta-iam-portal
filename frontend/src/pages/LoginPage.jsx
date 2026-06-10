import oktaAuth from "../services/oktaConfig";

function LoginPage() {
  const handleLogin = () => {
    oktaAuth.signInWithRedirect();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            IAM Portal
          </h1>

          <p className="mt-2 text-slate-500">
            Sign in using your Okta account
          </p>
        </div>

        <button
          onClick={handleLogin}
          className="
            w-full
            mt-8
            bg-slate-900
            text-white
            py-3
            rounded-lg
            hover:bg-slate-700
            transition
          "
        >
          Sign In
        </button>

      </div>
    </div>
  );
}

export default LoginPage;