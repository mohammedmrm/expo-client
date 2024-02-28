import z from "zod";

export const MWError = z
  .object({
    errorCode: z.string(),
  })
  .catchall(z.any());
export type Err = z.infer<typeof MWError>;

export const ANY_OBJECT_SCHEMA = z.object({}).catchall(z.any());
export type ANY_OBJECT = z.infer<typeof ANY_OBJECT_SCHEMA>;
