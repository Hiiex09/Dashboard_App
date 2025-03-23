import Link from "next/link";

const Notifications = () => {
  return (
    <div className="min-h-screen  p-5">
      <div className="max-w-full p-10 shadow">
        <div className="m-2">
          <h1 className="text-2xl font-semibold">Notifications</h1>
        </div>
        <div className="flex flex-col justify-start gap-3 w-full">
          <label>Email Notifications</label>
          <select defaultValue="Disable" className="select w-full">
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
          <label>SMS Notifications</label>
          <select defaultValue="Disable" className="select w-full">
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
          <label>Push Notifications</label>
          <select defaultValue="Disable" className="select w-full">
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </div>
        <div className="flex justify-end gap-2 mt-5">
          <Link href="/dashboard/profile" className="btn btn-md btn-error">
            Cancel
          </Link>
          <Link href="/dashboard/profile" className="btn btn-md btn-primary">
            Save Changes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
