import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import api from '../../Api/api.js';

const MemberList = () => {

const [members, setMembers] = useState([]);

const fetchMembers = async () => {
  try {
    const res = await api.get("/members");
    console.log(res.data.data);
    setMembers(res.data.data);
  } catch (error) {
    console.log(error.message);
  }
};

useEffect(() => {
  fetchMembers();
}, []);

const handleDelete = async (id) => {
  try {
    await api.delete(`/members/${id}`);
    fetchMembers();
  } catch (error) {
    console.log(error.message);
  }
};

return (
  <div className="max-w-5xl mx-auto p-6 space-y-6 bg-white shadow-sm border border-gray-100">

    <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 gap-4">

      <h2 className="text-2xl font-bold text-gray-500">
        Manage Members
      </h2>

      <Link
        to="/members/add"
        className="bg-blue-600 font-bold text-white p-3 rounded"
      >
        + Add New Members
      </Link>

    </div>

    <div className="overflow-x-auto border border-gray-200 rounded-md">

      <table className="w-full text-left border-collapse">

        <thead>
          <tr>
            <th className="p-4 font-semibold text-gray-700">
              Member Name
            </th>

            <th className="p-4 font-semibold text-gray-700">
              Email & Status
            </th>

            <th className="p-4 font-semibold text-gray-700">
              Membership
            </th>

            <th className="p-4 font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">

          {members.length > 0 ? (
            members.map((member) => (
              <tr key={member._id} className="hover:bg-gray-50">

                <td className="p-4 font-bold text-gray-800">
                  <div>{member.fname}</div>
                  
                </td>

                <td className="p-4 text-sm text-gray-500">
                  <div>{member.email}</div>
                  
                </td>

                <td className="p-4 text-sm">
                  {member.membershipStatus === "active"
                    ? "Active"
                    : "Inactive"}
                </td>

                <td className="p-4 space-x-3">
                  <Link
                    to={`/members/edit/${member._id}`}
                    className="text-blue-900"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(member._id)}
                    className="text-red-900"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-8 text-center text-gray-600 font-semibold">
                No Members Registered in the Category yet.
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>

  </div>
);
};

export default MemberList;