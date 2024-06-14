import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const secret = process.env.NEXTAUTH_SECRET || "secret_key";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("session");

  console.log(token);

  if (token) {
    // Sessão é válida, permitir acesso à próxima etapa
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/sigin", request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|public|favicon.ico|sigin|signup).*)",
  ],
};
