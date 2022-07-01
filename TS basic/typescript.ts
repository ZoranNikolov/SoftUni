import { IProgramLang } from "./program-lang.interface";

class TypeScript implements IProgramLang {
  name;
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
const typeScriptInstance: TypeScript = new TypeScript("TypeScript");
console.log(`NAME: ${typeScriptInstance.getName()}`);
