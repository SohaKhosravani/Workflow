"use client";

import Logo from "@/icon/logo";
import { removeUser } from "@/requests/users";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { TbLogout } from "react-icons/tb";
import { FaRegFolder } from "react-icons/fa";

interface IUsersList {
  users: IUser[];
}

export const UsersList: React.FC<IUsersList> = ({ users }) => {
  const handleOnDelete = (userId: string) => {
    removeUser(userId);
    window.location.reload();
  };

  return (
    <div className="flex">
    <div className="w-64 h-screen bg-primary-800 flex flex-col py-md px-sm">
        <div className="flex flex-col gap-2 items-start">
          <div className="flex gap-2 items-center">
          <Logo />
          <span className="font-bold text-white text-2xl">workflow</span>
          </div>
          <div className="flex gap-2 items-center mt-5">
          <HiOutlineUsers className="text-gray-400 text-xl"/>
          <button className="text-gray-300">User Managment</button>
          </div>
          <div className="flex gap-2 items-center mt-2">
          <FaRegFolder className="text-gray-400 text-xl" />
            <button className="text-gray-300">Companies</button>
          </div>
          <div className="flex gap-2 items-center mt-2">
          <TbLogout className="text-gray-400 text-xl"/>
            <button className="text-gray-300">Logout</button>
          </div>
        </div>
      </div>
    <div className="px-44 py-xl w-full">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Users List
          </h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="flex gap-2 items-center rounded-md bg-primary-700 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <AiOutlinePlus className="text-white mt-1 text-lg"/>New Account
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block w-full py-2 align-middle sm:px-6 lg:px-8 ">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg w-full">
              <table className="w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-500 sm:pl-6"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                    >
                      Password
                    </th>
                    <th scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500">
                        Role
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {users.map((user, index) => (
                    <tr key={user.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                        {user.username}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                        {user.password}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                        {user.isAdmin ? "Manager" : "Accountant"}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 flex gap-3 justify-end">
                        <button
                          onClick={() => handleOnDelete(user.id)}
                          className="text-danger bg-red-100 py-2 px-6 rounded-md hover:text-indigo-900"
                        >
                          Delete Account
                        </button>
                        <button
                          onClick={() => handleOnDelete(user.id)}
                          className="text-primary-700 bg-primary-100 py-2 px-6 rounded-md hover:text-indigo-900"
                        >
                          Edit Account
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
