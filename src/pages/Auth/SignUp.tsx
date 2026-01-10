import { useTranslation } from "react-i18next";
import AuthLayout from "../../components/layouts/AuthLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ToggleButton from "../../components/ui/ToggleButton";
import TextField from "../../components/ui/TextField";
import { signUpSchema, type SignUpSchema } from "../../schema";
import type { Options } from "../../types";
import SelectField from "../../components/ui/SelectField";
import Button from "../../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/auth";
import type { RegisterPayload } from "../../types/auth";

const SignUp = () => {
  const navigate = useNavigate()
  const { t } = useTranslation("auth");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setError
  } = useForm({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  const genderOptions: Options[] = [
    { value: "ذكر", label: t("auth.gender_male") },
    { value: "أنثى", label: t("auth.gender_female") },
  ];

  const onSubmit = async (data: SignUpSchema) => {
    try {
      const payload: RegisterPayload = {
        name: `${data.firstName}  ${data.lastName}`,
        email: data.email || "",
        password: data.password,
        age: data.age,
        city: data.city,
        province: data.province,
        gender: data.gender,
        phone: data.phone

      }
      const res = await registerUser(payload)
      if (res.user && res.user.token) {
        localStorage.setItem("token", res.user.token);
        localStorage.setItem("role", res.user.role);
        navigate("/profile")
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
      <div className="lg:w-full h-auto md:h-full mt-10 md:mt-0 flex flex-col pb-9 ">
        <h3 className="text-xl font-semibold text-black mt-2">
          {t("auth.createAccount")}
        </h3>
        <p className=" text-sm text-slate-700 mt-[5px] mb-6">
          {t("auth.join")}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <TextField
              label={t("auth.firstName")}
              type="text"
              placeholder={t("auth.firstName") as string}
              error={errors.firstName}
              registration={register("firstName")}
            />
            <TextField
              label={t("auth.lastName")}
              type="text"
              placeholder={t("auth.lastName") as string}
              error={errors.lastName}
              registration={register("lastName")}
            />
          </div>
          <TextField
            label={t("auth.PhoneNumber")}
            type="tel"
            placeholder="+9639XXXXXXXX"
            registration={register("phone")}
            error={errors.phone}
          />

          <TextField
            label={t("auth.email")}
            type="text"
            placeholder="example@example.com"
            error={errors.email}
            registration={register("email")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <TextField
              label={t("auth.password")}
              type="password"
              placeholder={t("auth.password") as string}
              error={errors.password}
              registration={register("password")}
            />
            <TextField
              label={t("auth.confirmPassword")}
              type="password"
              placeholder={t("auth.confirmPassword") as string}
              error={errors.confirmPassword}
              registration={register("confirmPassword")}
            />
            <TextField
              label={t("auth.age")}
              type="number"
              placeholder={t("auth.age") as string}
              error={errors.age}
              registration={register("age")}
            />
            <SelectField
              label={t("auth.gender")}
              options={genderOptions}
              error={errors.gender}
              registration={register("gender")}
            />
            <SelectField
              label={t("auth.province")}
              options={["دمشق", "حمص", "درعا"]}
              error={errors.province}
              registration={register("province")}
            />
            <SelectField
              label={t("auth.city")}
              options={["دمشق", "حمص", "درعا"]}
              error={errors.city}
              registration={register("city")}
            />
          </div>

          <Button
            classNameButton=""
            isLoading={isSubmitting}
            disabled={!isValid}
          >
            {t("auth.createAccount")}
          </Button>
          <p className="text-[15px] text-slate-800 mt-3">
            {t("auth.alreadyHaveAccount")}{" "}
            <Link className="font-medium text-primary" to="/login">
              {t("auth.login")}
            </Link>
          </p>
          {errors.root && <p className="text-xs text-red-500 mt-2">{errors.root?.message}</p>}

        </form>
        <ToggleButton />
      </div>
    </AuthLayout>
  );
};

export default SignUp;
