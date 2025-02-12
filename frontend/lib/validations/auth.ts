import { z } from "zod"

export const loginSchema = z.object({
    identifier: z.string().email("Adresse e-mail invalide"),
    password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
})

export type LoginInput = z.infer<typeof loginSchema>

