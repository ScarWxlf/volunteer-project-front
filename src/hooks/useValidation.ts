import Joi from "joi";

const createSchema = (fields: Record<string, string>) => {
    const baseSchema: Record<string, Joi.Schema> = {
      firstName: Joi.string().min(3).max(30)
      .pattern(/^[^\d]*$/)
      .required().messages({
        "string.empty": "First name is required.",
        "string.min": "First name must be at least 3 characters.",
        "string.max": "First name must be less than 30 characters.",
        "string.pattern.base": "First name must not contain numbers.",
      }),
      lastName: Joi.string().min(3).max(30)
      .pattern(/^[^\d]*$/)
      .required().messages({
        "string.empty": "Last name is required.",
        "string.min": "Last name must be at least 3 characters.",
        "string.max": "Last name must be less than 30 characters.",
        "string.pattern.base": "Last name must not contain numbers.",
      }),
      email: Joi.string()
        .email({ tlds: { allow: false }, minDomainSegments: 2 })
        .required()
        .messages({
          "string.empty": "Email is required.",
          "string.email": "Please enter a valid email address.",
        }),
      password: Joi.string()
        .disallow(Joi.ref('previousPassword'))
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/)
        .required()
        .messages({
          "string.empty": "Password is required.",
          "string.pattern.base":
            "Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long.",
          "any.invalid": "New password must be different from the previous password.",
        }),
        previousPassword: Joi.string().required().messages({
            "string.empty": "Previous password is required.",
        }),
        phone: Joi.string().allow("").pattern(/^[0-9]{10}$/).optional().messages({
            "string.pattern.base": "Phone number must be 10 digits long.",
        }),
        description: Joi.string().allow("").optional(),
    };
  
    const filteredSchema = Object.keys(fields).reduce((acc, key) => {
      if (baseSchema[key]) {
        acc[key] = baseSchema[key];
      }
      return acc;
    }, {} as Record<string, Joi.Schema>);
  
    return Joi.object(filteredSchema);
  }

export const useValidation = () => {
    const validateFields = (fields: Record<string, string>) => {
        const schema = createSchema(fields);
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
