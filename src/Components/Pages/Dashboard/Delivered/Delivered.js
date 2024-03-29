import React from 'react';

const Delivered = ({ index, product }) => {
  return (
    <tr>
      <th>{index}</th>
      <th>
        <img
          className="h-10 w-10 rounded-full"
          src={product?.bookInfo?.img}
          alt=""
        />
      </th>
      <td>
        <div>
          {product?.bookInfo?.name} <br />
          <p className="text-red-500"> {product?.from}</p>
        </div>
      </td>
      <td>{product?.bookInfo?.booksCategory}</td>
      <td>{product?.quantity}</td>
      <td>{product?.bookInfo?.price}</td>
      <td>{product?.totalPrice}</td>
      <td>{product?.phone}</td>
      <td>{product?.time}</td>
    </tr>
  );
};

export default Delivered;
