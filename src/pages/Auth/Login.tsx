import { useForm } from "react-hook-form";
import AuthLayout from "../../components/layouts/AuthLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "../../schema";
import { useTranslation } from "react-i18next";
import TextField from "../../components/ui/TextField";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });
  const { t } = useTranslation("auth");

  const onSubmit = (data: LoginSchema) => {
    console.log("LOGIN DATA:", data);
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
        </form>
      </div>
      {/* <ToggleButton /> */}
    </AuthLayout>
  );
};

export default Login;
