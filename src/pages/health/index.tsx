import React from "react";
import "isomorphic-fetch";
import { GetServerSideProps } from "next";
import Error from "next/error";

import * as styles from "../../styles.module.css";
import * as t from "./types";

const Health: React.FC<t.IProps> = ({ errorCode, healthCheck }) => {
  if (errorCode === 504) {
    return <Error statusCode={errorCode} />;
  }
  return (
    <div>
      <p data-testid="message-status">
        {healthCheck.message} | {healthCheck.status}
      </p>
      <style jsx global>{`
        body {
          margin: 0;
          overflow: hidden;
          background: ${healthCheck.status === 200 ? "#027ad3" : "#df564c"};
          font: 64px Helvetica, Arial, sans-serif;
          color: white;
          text-align: center;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_SHIPAY_URL}/health`
  );
  const errorCode = response.ok ? false : 504;
  const healthCheck = await response.json();

  return { props: { errorCode, healthCheck } };
};

export default Health;
