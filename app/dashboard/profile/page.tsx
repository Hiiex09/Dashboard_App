import { Phone, Calendar, LogIn, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

const Profile = () => {
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
    <div className="min-h-screen shadow-lg p-7">
      <div className="p-5 shadow-lg max-w-full rounded-md">
        <div className="p-2">
          <h1 className="text-3xl">Profile Details</h1>
        </div>
        <div className="p-1 flex flex-col justify-between">
          <div className="flex flex-col justify-start items-start max-w-full">
            {users.map((user, index) => (
              <div key={index} className="w-full">
                <div className="flex flex-row items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={"/Student.png"}
                      height={80}
                      width={80}
                      alt="profile-image"
                      className="rounded-full"
                    />
                    <div
                      className={`absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white ${
                        user.status === "Active" ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></div>
                  </div>
                  <div className="m-2">
                    <h1 className="text-2xl">{user.fullname}</h1>
                    <p className="text-sm ml-1">{user.email}</p>
                    <span className="text-gray-500 text-sm ml-1">
                      {user.role}
                    </span>
                  </div>
                </div>
                <div className="mt-2 p-2">
                  <div className="flex justify-center items-center">
                    <fieldset className="border border-gray-300 p-4 rounded-md w-full">
                      <legend className="text-lg font-semibold px-2">
                        Account Details
                      </legend>

                      <div className="mb-4 flex flex-row justify-start items-center gap-2">
                        <UserCircle className="size-6" />
                        <span>{user.account_details.username}</span>
                      </div>

                      <div className="mb-4 flex flex-row justify-start items-center gap-2">
                        <Phone className="size-6" />
                        <span>{user.account_details.phone}</span>
                      </div>

                      <div className="mb-4 flex flex-row justify-start items-center gap-2">
                        <Calendar className="size-6" />
                        <span>{user.account_details.joined_date}</span>
                      </div>

                      <div className="mb-4 flex flex-row justify-start items-center gap-2">
                        <LogIn className="size-6" />
                        <span>{user.account_details.last_login}</span>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 mt-6">
          <h1 className="text-2xl text-center">Quick Navigation</h1>
          <div className="flex justify-center items-center gap-8">
            <Link href={"/dashboard"} className="btn btn-sm btn-primary">
              Back to Dashboard
            </Link>
            <Link
              href={"/dashboard/edit-profile"}
              className="btn btn-sm btn-primary"
            >
              Edit Profile
            </Link>
            <Link
              href={"/dashboard/notifications"}
              className="btn btn-sm btn-primary"
            >
              Notifications
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
