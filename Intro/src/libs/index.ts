import $ from "jquery";
import moduleLib from "./module-lib";
import umdLib from "./umd-lib";

$(".app").css("color", "red");

globalLib({ x: 1 });

globalLib.doSomething();

moduleLib.doSomething();

umdLib.doSomething();

// 模块插件
import m from "moment";
declare module "moment" {
  export function myFunction(): void;
}
m.myFunction = () => {};

// 全局插件
declare global {
  namespace globalLib {
    function doAnyting(): void;
  }
}
globalLib.doAnyting = () => {};
