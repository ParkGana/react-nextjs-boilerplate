import { NextRequest, NextResponse } from 'next/server';

const AUTHENTICATED_URL = ['/'];

export const middleware = (req: NextRequest) => {
  const url = req.nextUrl.clone();

  const isAuthenticated = true;

  if (!isAuthenticated && AUTHENTICATED_URL.includes(url.pathname)) {
    url.pathname = '/signin';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/'],
};
