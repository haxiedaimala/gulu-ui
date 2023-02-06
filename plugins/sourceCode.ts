// @ts-nocheck
import fs from 'fs';
import {baseParse} from '@vue/compiler-core';

export function sourceCode() {
  return {
    name: 'sourceCode',
    transform(code, id) {
      if (
        !/\/src\/components\/.*\.sourceCode\.vue/.test(id) ||
        !/vue&type=sourceCode/.test(id)
      ) {
        return;
      }
      //获取特定文件名的文件路径
      let path = `.${id.match(/\/src\/components\/sourceCode\/.*\/.*\.sourceCode\.vue/)[0]}`;
      //根据路径获取内容
      const file = fs.readFileSync(path).toString();
      //找到 自定义代码块部分 的代码
      const parsed = baseParse(file).children.find(n => n.tag === 'sourceCode');
      //获取 自定义代码块 的元素标签里的内容
      const title = parsed.children[0].content;
      //去除自定义块的源码内容
      const main = file.split(parsed.loc.source).join('').trim();

      return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)}
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim();
    }
  };
}