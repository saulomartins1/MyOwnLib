export const authConfig = {
    // pages: {
    //     signIn: "/signin",
    // },
    providers: [],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
            }
            return session;
        },
        authorized({ auth, request }) {

            const user = auth?.user;

            const isOnSignIn_Up = request.nextUrl?.pathname.startsWith("/signup") || request.nextUrl?.pathname.startsWith("/signin");
            const isOnMyBooksPage = request.nextUrl?.pathname.startsWith("/my-books");

            //Only UNauthenticated users can access "sign-in || sign-up" pages;
            if (user && isOnSignIn_Up) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            //Only authenticated users can interact with "my-books" page;
            if (!user && isOnMyBooksPage) {
                return Response.redirect(new URL("/signin", request.nextUrl));
            }

            return true;

        }
    }
}