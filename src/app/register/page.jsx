import AnimatedTitle from "../_components/shared/AnimatedTitle";
import RegisterForm from "./_components/RegisterForm";

export const metadata = {
  title: "Register | Pure Organix Store",
  description:
    "Create an account at Pure Organix Store to access exclusive features and offers.",
  keywords: "register, Pure Organix Store, organic store, user account",
};

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary/5 py-8">
      <div className="container mx-auto max-w-md">
        <AnimatedTitle title="Register" subtitle="USER" accent="emerald" />

        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
