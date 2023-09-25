import { NextRequest, NextResponse } from "next/server";
import { api } from "@/shared/api/";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const response = await api.auth.loginUser(data);

  if (!response.token) {
    return new NextResponse(
      JSON.stringify({ message: "Wrong login or password" }),
      { status: 401 }
    );
  }

  const tokenResponse = new NextResponse(
    JSON.stringify({ message: "Login was successful" }),
    { status: 200 }
  );

  tokenResponse.cookies.set("auth-token", response.token);

  return tokenResponse;
}
