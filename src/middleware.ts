import { NextRequest, NextResponse } from 'next/server';

const AUTHENTICATED_URL = ['/'];

export const middleware = (req: NextRequest) => {
  const url = req.nextUrl.clone();

  const isAuthenticated = true;

  // 로그인 되어있지 않은 경우, /signin 경로로 이동
  if (!isAuthenticated && AUTHENTICATED_URL.includes(url.pathname)) {
    url.pathname = '/signin';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

/* middleware를 통한 검증이 필요한 경로들 */
export const config = {
  matcher: ['/'],
};
