import { Request, Response } from 'express';
import { DefaultQuery, UrlLike } from 'next-server/router';
import { Server as NextServer } from 'next';

export interface NextRequest extends Request { }

export interface NextResponse extends Response {
  nextRender: (pathname: string, query?: DefaultQuery, parsedUrl?: UrlLike) => Promise<void>;
  nextRequestHandler: ReturnType<NextServer['getRequestHandler']>;
}
