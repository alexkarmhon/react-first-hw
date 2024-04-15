import React from 'react';
import PropTypes from 'prop-types';
import {
  TableBody,
  TableBodyRow,
  TableData,
  TableDataType,
  TableHeadRow,
  TableHeaderCell,
  TransTableHead,
  TransactionTable,
} from './Transactions.styled';

export const Transactions = ({ items }) => {
  return (
    <TransactionTable>
      <TransTableHead>
        <TableHeadRow>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </TableHeadRow>
      </TransTableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableBodyRow key={id}>
            <TableDataType>{ type }</TableDataType>
            <TableData>{ amount }</TableData>
            <TableData>{ currency }</TableData>
          </TableBodyRow>
        ))}
      </TableBody>
    </TransactionTable>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}