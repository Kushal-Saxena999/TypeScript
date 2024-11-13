//Modules

import * as MathUtils from "./mathUtils";
import {add, PI, Calculator} from "./mathUtils";


console.log(MathUtils.add(2, 2));
const calc = new MathUtils.Calculator();
console.log(calc.add(2,2));