export default async function handler(req: any, res: any) {
  const { default: app } = await import("../packages/server/dist/index.cjs");
  return app(req, res);
}