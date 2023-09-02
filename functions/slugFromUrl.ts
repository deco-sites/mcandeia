import type { FunctionContext, LoaderFunction } from "deco/types.ts";

export type Slug = string;

export interface Props {
  /**
   * @default slug
   * @description Param name to extract from the Request URL
   */
  param: string;
}

/**
 * @title Get params from request parameters
 * @description Set param to slug for routes of type /:slug
 */
const requestToParam: LoaderFunction<
  Props,
  Slug,
  FunctionContext
> = (_req, ctx) => {
  return {
    data: ctx.params[ctx.state.$live.param || "slug"],
  };
};

export default requestToParam;
