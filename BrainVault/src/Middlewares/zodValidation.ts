import z from "zod";

export const inputValidation = z.object({
    username: z.string().min(4).max(16),
    firstname: z.string().min(4).max(26),
    password: z.string().min(5).max(16).superRefine((val, ctx) => {
        const regxnum = /[1-9]/;
        if (!regxnum.test(val)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "add numbers to your password"
            })
        };
        const regxspl = /[!@#$]/;
        if (!regxspl.test(val)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "add special character to your password"
            })
        };
    })
})