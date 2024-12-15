import Joi from "joi";

const schema = Joi.object({
  firstName: Joi.string().min(3).max(30).required().messages({
    "string.empty": "First name is required.",
    "string.min": "First name must be at least 3 characters.",
    "string.max": "First name must be less than 30 characters.",
  }),
  lastName: Joi.string().min(3).max(30).required().messages({
    "string.empty": "Last name is required.",
    "string.min": "Last name must be at least 3 characters.",
    "string.max": "Last name must be less than 30 characters.",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false }, minDomainSegments: 2 })
    .required()
    .messages({
      "string.empty": "Email is required.",
      "string.email": "Please enter a valid email address.",
    }),
  password: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/)
    .required()
    .messages({
      "string.empty": "Password is required.",
      "string.pattern.base":
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long.",
    }),
});

export const useValidation = () => {
  const validateFields = (fields: Record<string, string>) => {
    const { error } = schema.validate(fields, { abortEarly: false });

    if (error) {
      const fieldErrors: Record<string, string> = {};
      error.details.forEach((err) => {
        if (err.context && err.context.key) {
            fieldErrors[err.context.key] = err.message;
        }
      });
      return { errors: fieldErrors, isValid: false };
    }

    return { isValid: true };
  };

  return { validateFields };
};
