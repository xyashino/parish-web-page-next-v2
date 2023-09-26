import { NextResponse } from "next/server";

export const NotFoundResponse = (message = "Not Found") => {
  return NextResponse.json({ error: message }, { status: 404 });
};

export const UnauthorizedResponse = (message = "Unauthorized") => {
  return NextResponse.json({ error: message }, { status: 401 });
};

export const ServerErrorResponse = (message = "Server Error") => {
  return NextResponse.json({ error: message }, { status: 500 });
};
