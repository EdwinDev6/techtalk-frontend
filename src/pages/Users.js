import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:4000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        
      });
  }, []);

  return (
    <div className="p-4">
      <div className="bg-white p-4 rounded-md">
        <h2 className="mb-4 text-xl font-bold text-gray-700">
          Users List
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="py-2 px-4">Username</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Rol</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Edit</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="text-sm font-normal">
                  <td className="py-2 px-4">{user.username}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  
                  <td className="py-2 px-4">
                  <td className="py-2 px-4">{user.roles}</td>
                  </td>
                  <td className="py-2 px-4">{user.createdAt}</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-500 text-white py-1 px-2 rounded-md">
                      Save
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserList;
