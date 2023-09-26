export const NotFoundResponse = (message = "Not Found") => {
  return new Response(JSON.stringify({ error: message }), { status: 404 });
};

export const UnauthorizedResponse = (message = "Unauthorized") => {
  return new Response(JSON.stringify({ error: message }), { status: 401 });
};

export const ServerErrorResponse = (message = "Server Error") => {
  return new Response(JSON.stringify({ error: message }), { status: 500 });
};
