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
import { Link } from "react-router-dom";

const SignUp = () => {
  const { t } = useTranslation("auth");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  const genderOptions: Options[] = [
    { value: "ذكر", label: t("auth.gender_male") },
    { value: "أنثى", label: t("auth.gender_female") },
  ];

  const onSubmit = (data: SignUpSchema) => {
    console.log("SignUp DATA:", data);
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
        </form>
        <ToggleButton />
      </div>
    </AuthLayout>
  );
};

export default SignUp;
