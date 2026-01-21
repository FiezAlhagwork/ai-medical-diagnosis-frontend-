import { useForm } from "react-hook-form";
import AuthLayout from "../../components/layouts/AuthLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "../../schema";
import { useTranslation } from "react-i18next";
import TextField from "../../components/ui/TextField";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { loginUser } from "../../services/auth";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setError
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });
  const { t } = useTranslation("auth");
  const { login } = useAuth()
  const onSubmit = async (data: LoginSchema) => {
    try {
      const res = await loginUser(data)

      if (res.user && res.token) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("role", res.user.role);
        localStorage.setItem("userId", res.user._id);

        login(res.user)

        if (res.user.role === "admin") {
          navigate("/admin");
        }
        else navigate("/profile");
      }
    } catch (error) {
      const message =
        error?.response?.data?.message || "Something went wrong";

      // عرض الرسالة على مستوى root form
      setError("root", {
        type: "server",
        message,
      });
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:w-full flex flex-col  ">
        <h3 className="text-2xl font-semibold text-black  mt-3 ">
          {t("auth.login")}
        </h3>
        <p className=" text-sm text-slate-700 mt-[5px] mb-6">
          {t("auth.detailsLogin")}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label={t("auth.PhoneNumber")}
            type="tel"
            placeholder="+9639XXXXXXXX"
            error={errors.phone}
            registration={register("phone")}
          />
          <TextField
            label={t("auth.password")}
            type="password"
            placeholder="******************"
            error={errors.password}
            registration={register("password")}
          />

          <p className="text-sm text-primary my-4">
            {t("auth.forgetPassword")}
          </p>

          <Button classNameButton="" isLoading={isSubmitting} disabled={!isValid}>{t("auth.login")}</Button>

          <p className="text-[15px] text-slate-800 mt-3">
            {t("auth.noAccount")}{" "}
            <Link className="font-medium text-primary" to="/signup">
              {t("auth.createAccount")}
            </Link>
          </p>
          {errors.root && <p className="text-xs text-red-500 mt-2">{errors.root?.message}</p>}
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
