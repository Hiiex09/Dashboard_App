import React from "react";
import Navbar from "../../components/Navbar";

interface userDetails {
  fullname: string;
  email: string;
  role: string;
  status: string;
}

const Users = () => {
  const users: userDetails[] = [
    {
      fullname: "Barangan Devon E.",
      email: "devonsample@gmail.com",
      role: "Super Admin",
      status: "Active",
    },
    {
      fullname: "John Doe",
      email: "johndoe@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      fullname: "Jane Smith",
      email: "janesmith@example.com",
      role: "Moderator",
      status: "Active",
    },
    {
      fullname: "Robert Brown",
      email: "robertbrown@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      fullname: "Emily White",
      email: "emilywhite@example.com",
      role: "Editor",
      status: "Pending",
    },
    {
      fullname: "Michael Johnson",
      email: "michaeljohnson@example.com",
      role: "Super Admin",
      status: "Active",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-5">
        <div className="card bg-base-100 shadow-xl p-5">
          <h1 className="text-2xl font-semibold mb-4">Users List</h1>

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {/* Table Head */}
              <thead>
                <tr>
                  <th>Fullname</th>
                  <th className="text-center">Email</th>
                  <th className="text-center">Role</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="hover">
                    <td>{user.fullname}</td>
                    <td className="text-center">{user.email}</td>
                    <td className="text-center">{user.role}</td>

                    {/* Status with DaisyUI Badges */}
                    <td className="text-center">
                      <span
                        className={`badge ${
                          user.status === "Active"
                            ? "badge-success"
                            : user.status === "Inactive"
                            ? "badge-error"
                            : "badge-warning"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="text-center">
                      <div className="btn-group space-x-2">
                        <button className="btn btn-sm btn-primary">
                          Activate
                        </button>
                        <button className="btn btn-sm btn-secondary">
                          Deactivate
                        </button>
                        <button className="btn btn-sm btn-error">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
