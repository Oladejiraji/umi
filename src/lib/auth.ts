import { SignJWT, jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

import cookies from "js-cookie";

import api from "@/services/api";
import { successToast } from "@/utils/helper";

export const SESSION_NAME = "umi-Session";
const key = new TextEncoder().encode(process.env.NEXT_PUBLIC_AUTH_KEY);

export async function encrypt(payload: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const res = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1 week") // TODO: change to a lower timeline
    .sign(key);

  return res;
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

interface ILogin {
  email: string;
  password: string;
}
export async function signup(formData: ILogin) {
  // Verify credentials && get the user
  try {
    const res = await api.post({
      url: "/auth/register",
      body: { ...formData },
      auth: false,
    });

    console.log(res?.data?.message as string);
  } catch (error: any) {
    console.log("error", error);

    throw new Error(
      (error?.response?.data?.message as string) || "An error occured",
    );
  }
}

export async function login(formData: ILogin) {
  // Verify credentials && get the user
  try {
    const res = await api.post({
      url: "/auth/login",
      body: { ...formData },
      auth: false,
    });

    successToast(res?.data?.message as string);
    // Create the session

    const session = await encrypt({ user: res.data.data });

    // Save the session in a cookie
    cookies.set(SESSION_NAME, session, {
      expires: new Date(res.data.data.expiryTime),
    });
  } catch (error: any) {
    console.log("error", error);
    throw new Error(
      (error?.response?.data?.message as string) || "An error occured",
    );
  }
}

export async function verifyUser(formData: { code: string }) {
  try {
    const res = await api.post({
      url: "/auth/verify-token",
      body: { ...formData },
      auth: false,
    });

    // successToast(res?.data?.message as string);
    // Create the session

    const session = await encrypt({ user: res.data.data });

    // Save the session in a cookie
    cookies.set(SESSION_NAME, session, {
      expires: new Date(res.data.data.expiryTime),
    });
  } catch (error: any) {
    console.log("error", error.response.data.message);
    throw new Error(
      (error?.response?.data?.message as string) || "An error occured",
    );
  }
}

export async function logout() {
  // Destroy the session
  cookies.set(SESSION_NAME, "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies.get(SESSION_NAME);
  // console.log("session from getSession", session);
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get(SESSION_NAME)?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 3600 * 1000 * 24 * 7);
  const res = NextResponse.next();
  res.cookies.set({
    name: SESSION_NAME,
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
