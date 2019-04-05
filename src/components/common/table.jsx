import React, { Component } from "react";
import TableBody from "./common/tableBody";
import TableHeader from "./common/tableHeader";

const Table = props => {
  const { columns, sortColumn, onSort, data } = props;
  return (
    <table className="table">
      <TableHeader
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      <TableBody columns={this.columns} data={data} />
    </table>
  );
};

export default Table;
