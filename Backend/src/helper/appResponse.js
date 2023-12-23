function Appresponse(res, statusCode, message, data) {
  return res.status(statusCode).json({
    message: message ?? "Success",
    data: data ?? null,
  });
}

export default Appresponse;
