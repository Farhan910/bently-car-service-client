import React from "react";

const MakeAdmin = ({ user, refetch }) => {
  const { email, role } = user;
  const makeAnAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          alert.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          alert.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <div>
      <tr>
        <th>1</th>
        <td>{email}</td>
        <td>
          {role !== "admin" && (
            <button onClick={makeAnAdmin} className="btn btn-xs">
              Make Admin
            </button>
          )}
        </td>
        <td>
          <button className="btn btn-xs">Remove User</button>
        </td>
      </tr>
    </div>
  );
};

export default MakeAdmin;
