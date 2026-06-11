import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import StatCard from "../components/ui/StatCard";

function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back to IAM Portal"
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Pending Requests"
          value="2"
        />

        <StatCard
          title="Approved Requests"
          value="5"
        />

        <StatCard
          title="Rejected Requests"
          value="1"
        />
      </div>

      {/* Quick Actions */}
      <Card title="Quick Actions">
        <div className="flex flex-wrap gap-4">
          <button
            className="
              px-4 py-2
              bg-slate-900
              text-white
              rounded-lg
              hover:bg-slate-700
              transition
            "
          >
            Request Access
          </button>

          <button
            className="
              px-4 py-2
              border
              border-slate-300
              rounded-lg
              hover:bg-slate-100
              transition
            "
          >
            View Requests
          </button>
        </div>
      </Card>

      {/* Recent Activity */}
      <Card title="Recent Activity">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-3">Application</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-slate-100">
                <td className="py-3">VPN Access</td>
                <td className="py-3 text-amber-600">
                  Pending
                </td>
              </tr>

              <tr className="border-b border-slate-100">
                <td className="py-3">AWS Console</td>
                <td className="py-3 text-green-600">
                  Approved
                </td>
              </tr>

              <tr>
                <td className="py-3">JIRA Admin</td>
                <td className="py-3 text-red-600">
                  Rejected
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

export default DashboardPage;