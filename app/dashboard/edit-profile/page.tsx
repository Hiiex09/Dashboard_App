import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Phone, Calendar, LogIn, UserCircle } from "lucide-react";

interface UserDetails {
  fullname: string;
  email: string;
  role: string;
  status: string;
  account_details: {
    username: string;
    phone: string;
    joined_date: string;
    last_login: string;
  };
}

const EditProfile = () => {
  const users: UserDetails[] = [
    {
      fullname: "Barangan Devon",
      email: "devonsample@gmail.com",
      role: "Super Admin",
      status: "Active",
      account_details: {
        username: "DevonPro",
        phone: "09876543210",
        joined_date: "January 1, 2024",
        last_login: "March 21, 2025, 09:30 P.M",
      },
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 bg-gray-50">
      <div className="bg-white shadow-xl rounded-lg p-6 md:p-8 w-full max-w-5xl">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Edit Profile
        </h1>

        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="relative mb-6">
            <Image
              src={"/Student.png"}
              height={100}
              width={100}
              alt="profile-image"
              className="rounded-full border-4 border-gray-300 md:w-32 md:h-32"
            />
            <div
              className={`absolute bottom-2 right-2 h-5 w-5 rounded-full border-2 border-white ${
                users[0].status === "Active" ? "bg-green-500" : "bg-red-500"
              }`}
            ></div>
          </div>

          {/* Profile Form */}
          <div className="w-full">
            {users.map((user, index) => (
              <div key={index} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-gray-600 text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue={user.fullname}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-600 text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-gray-600 text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue={user.account_details.phone}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Account Details Section */}
                <fieldset className="border  p-6 rounded-lg ">
                  <legend className="text-lg font-semibold text-gray-700 px-2">
                    Account Details
                  </legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <UserCircle className="size-6 text-gray-500" />
                      <span>{user.account_details.username}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="size-6 text-gray-500" />
                      <span>{user.account_details.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar className="size-6 text-gray-500" />
                      <span>{user.account_details.joined_date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <LogIn className="size-6 text-gray-500" />
                      <span>{user.account_details.last_login}</span>
                    </div>
                  </div>
                </fieldset>

                {/* Buttons Section */}
                <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
                  <Link
                    href={"/dashboard/profile"}
                    className="btn btn-md btn-primary"
                  >
                    Save Changes
                  </Link>
                  <Link
                    href={"/dashboard/edit-profile"}
                    className="btn btn-md btn-secondary"
                  >
                    Reset Changes
                  </Link>
                  <Link
                    href={"/dashboard/profile"}
                    className="btn btn-md btn-error"
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
