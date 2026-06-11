import { useOktaAuth } from "@okta/okta-react";

import Card from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";
import { getGroups } from "../utils/jwtUtils";

function ProfilePage() {
  const { authState, oktaAuth } = useOktaAuth();

  const claims = authState?.idToken?.claims;
  const groups = getGroups(authState.accessToken.accessToken);
  console.log("groups");
  console.log(groups);

  const handleLogout = async () => {
    await oktaAuth.signOut();
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-8">

        <PageHeader
          title="User Profile"
          subtitle="Identity information received from Okta"
        />

        <div className="grid gap-6">

          <Card title="Identity Information">
            <div className="space-y-4">

              <div className="flex justify-between">
                <span className="font-medium text-slate-600">
                  Name
                </span>
                <span>{claims?.name}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-slate-600">
                  Email
                </span>
                <span>{claims?.email}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-slate-600">
                  Username
                </span>
                <span>{claims?.preferred_username}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-slate-600">
                  Subject ID
                </span>
                <span className="text-sm">
                  {claims?.sub}
                </span>
              </div>

            </div>
          </Card>

          <Card title="Authentication Information">

            <div className="space-y-4">

              <div className="flex justify-between">
                <span className="font-medium text-slate-600">
                  Status
                </span>

                <span className="text-green-600 font-semibold">
                  Authenticated
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-slate-600">
                  Issuer
                </span>

                <span className="text-sm">
                  {claims?.iss}
                </span>
              </div>

            </div>

          </Card>

          <Card title="Token Information">

            <div className="space-y-4">

              <div className="flex justify-between">
                <span className="font-medium text-slate-600">
                  Scopes
                </span>

                <span>
                  {authState?.accessToken?.scopes?.join(", ")}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-slate-600">
                  Token Type
                </span>

                <span>
                  {authState?.accessToken?.tokenType}
                </span>
              </div>

            </div>

          </Card>

          <div>
            <button
              onClick={handleLogout}
              className="
                px-5
                py-2
                rounded-lg
                bg-slate-900
                text-white
                hover:bg-slate-700
                transition
              "
            >
              Logout
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProfilePage;