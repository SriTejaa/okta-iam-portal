import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";

function MyAccessRequestsPage() {
  const requests = [
    {
      application: "VPN Access",
      status: "Pending",
    },
    {
      application: "GitHub Admin",
      status: "Pending",
    },
    {
      application: "AWS Console",
      status: "Approved",
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="My Access Requests"
        subtitle="Manage and track your submitted access requests"
      />

      <Card title="Filters">
        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="Search requests..."
            className="
              border
              border-slate-300
              rounded-lg
              px-4
              py-2
              w-80
            "
          />

          <button className="px-4 py-2 rounded-lg border border-slate-300">
            All
          </button>

          <button className="px-4 py-2 rounded-lg border border-slate-300">
            Pending
          </button>

          <button className="px-4 py-2 rounded-lg border border-slate-300">
            Approved
          </button>

          <button className="px-4 py-2 rounded-lg border border-slate-300">
            Rejected
          </button>
        </div>
      </Card>

      <Card title="Access Requests">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="py-3">Application</th>
              <th className="py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((request, index) => (
              <tr
                key={index}
                className="border-b border-slate-100"
              >
                <td className="py-3">
                  {request.application}
                </td>

                <td className="py-3">
                  {request.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default MyAccessRequestsPage;