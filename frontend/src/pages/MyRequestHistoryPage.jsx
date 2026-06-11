import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";

function MyRequestHistoryPage() {
  const history = [
    {
      application: "VPN Access",
      status: "Approved",
      date: "01-Jun-2026",
    },
    {
      application: "AWS Console",
      status: "Approved",
      date: "03-Jun-2026",
    },
    {
      application: "JIRA Admin",
      status: "Rejected",
      date: "05-Jun-2026",
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="My Request History"
        subtitle="View previously submitted access requests"
      />

      <Card title="Request History">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="py-3">Application</th>
              <th className="py-3">Status</th>
              <th className="py-3">Requested Date</th>
            </tr>
          </thead>

          <tbody>
            {history.map((item, index) => (
              <tr
                key={index}
                className="border-b border-slate-100"
              >
                <td className="py-3">
                  {item.application}
                </td>

                <td className="py-3">
                  {item.status}
                </td>

                <td className="py-3">
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default MyRequestHistoryPage;