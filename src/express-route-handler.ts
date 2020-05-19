import {Request, Response} from 'express';
import express from 'express';
import path from 'path';
const {ROOT_DIR , VIEW_EXTENSION , PAGE_ID } = process.env;
const expressRouteHandler = express();

expressRouteHandler.get('/products/:id', function (_req: Request, res: Response) {
  redirect(res ,`${getPageName(_req.path)}${PAGE_ID}`);
});
expressRouteHandler.get('/signin-up/register', function (_req: Request, res: Response) {
  redirect(res ,`${getPageName(_req.path)}register`);
});
expressRouteHandler.get('/details/:id', function (_req: Request, res: Response) {
  redirect(res ,`${getPageName(_req.path)}${PAGE_ID}`);
});
expressRouteHandler.get('/info/about-us', function (_req: Request, res: Response) {
  redirect(res ,`${getPageName(_req.path)}about-us`);
});
expressRouteHandler.get('/cart/my-cart', function (_req: Request, res: Response) {
  redirect(res ,`${getPageName(_req.path)}${PAGE_ID}`);
});
expressRouteHandler.get('/buy/checkout', function (_req: Request, res: Response) {
  redirect(res ,`${getPageName(_req.path)}${PAGE_ID}`);
});
function redirect(response : Response , targetPage : String) : void {
  response.sendFile(path.join(__dirname , `${ROOT_DIR}${targetPage}${VIEW_EXTENSION}`));
}
function getPageName(_path : String) {
  if(_path.indexOf("/") != -1) {
    let _arr = _path.split("/");
    if(_arr[1]) {
      return `/${_arr[1]}/`;
    }
  }else{
    return `/${_path}/`;
  }
}
export {expressRouteHandler};