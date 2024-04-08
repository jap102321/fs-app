export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith('/admin');
      const isOnBlogPage = request.nextUrl?.pathname.startsWith('/blog');
      const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');

      //Check if it's admin
      if (isOnAdminPanel && !user.isAdmin) return false;

      //Check if it's auth to access to blog
      if (isOnBlogPage && !user) return false;

      //Unauth users can reach login.

      if (isOnLoginPage && user)
        return Response.redirect(new URL('/', request.nextUrl));

      return true;
    },
  },
};
