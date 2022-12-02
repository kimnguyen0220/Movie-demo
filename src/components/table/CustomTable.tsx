import React from "react";
import Table from "react-bootstrap/Table";

type CustomTableProps = {
  columns?: {headerName: string, fieldName: string}[];
  rows?: any[];

  dataTable?: {name: string, value: string}[];
};
export const CustomTable = ({ columns, rows }: CustomTableProps) => {
  const renderHeader = () => {
    return (
      <tr>
        {columns && columns.map((item) => (
          <td key={`${item}`}>{item.fieldName}</td>
        ))}
      </tr>
    );
  };

  const renderBody = () => {
    rows && rows?.map( item => {
        return <tr>
            <td>{item['']}</td>
        </tr>
    })

  }

  return (
    <Table striped>
      <thead>{renderHeader()}</thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
};
