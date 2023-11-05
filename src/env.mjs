import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_IFRAME_URL: z.string().url(),
  },
  skipValidation: process.env.SKIP_ENV_VALIDATION === "true",
});
