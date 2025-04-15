// src/components/dashboard/TableList.jsx
import React from 'react';

const TableList = ({ items, columns }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            {columns.map(column => (
              <th key={column} className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-t">
              {columns.map(column => (
                <td key={column} className="px-6 py-4 whitespace-nowrap">
                  {item[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;