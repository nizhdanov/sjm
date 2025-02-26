import type { ExecutionContext } from '@nestjs/common';

import { createParamDecorator } from '@nestjs/common';

export const QueryArray = createParamDecorator((key: string, ctx: ExecutionContext): string[] => {
  const request = ctx.switchToHttp().getRequest();
  const queryValue = request.query[key];

  if (!queryValue) {
    return undefined;
  }

  if (Array.isArray(queryValue)) {
    return queryValue.map((item) => String(item));
  }

  return queryValue.split(',').map((item) => item.trim());
});
