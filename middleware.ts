import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/panel/login",
  },
});

export const config = {
  matcher: [
    '/panel/api/:path*', 
    '/panel/admins',
    '/panel/admins/:path*',
    '/panel/products',
    '/panel/products/:path*',
    '/panel/categories',
    '/panel/categories/:path*',
    '/panel'
  ],
};
