CredentialsProvider({
    name: "Credentials",
    credentials: {
        email: {},
        password: {},
    },
    async authorize(credentials) {
        try {
            await connectToDatabase();
            // Find the user AND explicitly ask for the password field
            const user = await User.findOne({ email: credentials?.email }).select("+password");

            if (!user) {
                throw new Error("No user found with this email.");
            }

            // You must check that user.password exists before comparing
            if (!user.password) {
                throw new Error("This account was created using a provider and does not have a password.");
            }

            const isValidPassword = await bcrypt.compare(
                credentials?.password ?? "", user.password
            );

            if (!isValidPassword) {
                throw new Error("Invalid password.");
            }
            return user;
        } catch (err) {
            console.error("Authorize error:", err);
            return null;
        }
    }
})