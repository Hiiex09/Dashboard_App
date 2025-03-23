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
    <div className="min-h-screen flex items-center justify-center p-10">
      <div className="p-10 shadow-lg max-w-4xl w-full rounded-md bg-white text-black">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Profile Details</h1>
        </div>
        {users.map((user, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-20"
          >
            <div className="relative">
              <Image
                src={"/Student.png"}
                height={120}
                width={120}
                alt="profile-image"
                className="rounded-full"
              />
              <div
                className={`absolute bottom-1 right-1 h-5 w-5 rounded-full border-2 border-white ${
                  user.status === "Active" ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-semibold">{user.fullname}</h1>
              <p className="text-lg text-gray-600">{user.email}</p>
              <span className="text-gray-500 text-md">{user.role}</span>
            </div>
          </div>
        ))}
        <div className="mt-6">
          <fieldset className="border border-gray-300 p-6 rounded-md text-black">
            <legend className="text-xl font-semibold px-2">
              Account Details
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <UserCircle className="size-6" />
                <span>{users[0].account_details.username}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-6" />
                <span>{users[0].account_details.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-6" />
                <span>{users[0].account_details.joined_date}</span>
              </div>
              <div className="flex items-center gap-2">
                <LogIn className="size-6" />
                <span>{users[0].account_details.last_login}</span>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="text-center m-5">
          <h1 className="text-2xl font-semibold">Quick Settings</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 text-black">
          <Link href={"/dashboard"} className="btn btn-sm btn-primary">
            Back to Dashboard
          </Link>
          <Link
            href={"/dashboard/edit-profile"}
            className="btn btn-sm btn-secondary"
          >
            Edit Profile
          </Link>
          <Link
            href={"/dashboard/notifications"}
            className="btn btn-sm btn-info"
          >
            Notifications
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
