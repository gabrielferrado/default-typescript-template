"use strict";

exports.handler = async () => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello World" })
  };

  return response;
};
