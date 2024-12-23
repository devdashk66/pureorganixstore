import AnimatedTitle from "../_components/shared/AnimatedTitle";
import LoginForm from "./_components/LoginForm";

export const metadata = {
  title: "Login | Pure Organix Store",
  description:
    "Login to your account at Pure Organix Store to access exclusive features and offers.",
  keywords: "login, Pure Organix Store, organic store, user account",
};

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary/5">
      <div className="container mx-auto max-w-md">
        <AnimatedTitle title="Login" subtitle="WELCOME" accent="emerald" />

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
