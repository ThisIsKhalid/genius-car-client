import React, { useEffect, useState } from "react";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const { _id, serviceName, customer, phone, price, service, status } = order;
  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-500 h-10 w-10 rounded-full"
          >
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {orderService?.img && <img src={orderService.img} alt="" />}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>Purple</td>
      <th onClick={() => handleStatusUpdate(_id)}>
        {status ? (
          <button className="btn btn-success btn-xs">{status}</button>
        ) : (
          <button className="btn btn-error btn-xs">Pending</button>
        )}
      </th>
    </tr>
  );
};

export default OrderRow;
