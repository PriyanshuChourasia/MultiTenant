import dotenv from "dotenv";
import {z} from "zod";


dotenv.config();


const envSchema = z.object({
    PORT: z.string().default("3000"),
    DB_URL: z.string().url(),
    DB_PORT: z.string().optional(),
    DB_USERNAME: z.string(),
    DB_PASSWORD: z.string().optional()
});

const parsedEnv = envSchema.safeParse(process.env);


if(!parsedEnv.success){
    console.error("Invalid environment variables: ",parsedEnv.error.format());
    process.exit(1);
}


export const env = parsedEnv.data;