import React from "react";
import PropTypes from "prop-types";
import {
  Transaction,
  Type,
  Amount,
  Currency,
  Section,
} from "./TransactionHistory.styled";

export const TransactionHistory = ({ transactions }) => {
  return (
    <Section>
      <thead
        style={{
          color: "white",
          backgroundColor: `#25b3cc`,
          height: "30px",
        }}
      >
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((item, idx) => (
          <Transaction key={item.id} id={item.id} index={idx}>
            <Type>{item.type}</Type>
            <Amount>{item.amount}</Amount>
            <Currency>{item.currency}</Currency>
          </Transaction>
        ))}
      </tbody>
    </Section>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
