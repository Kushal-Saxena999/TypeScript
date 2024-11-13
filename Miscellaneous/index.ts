//namespace

namespace registerValidation {
  export function validateName(name: string): boolean {
    return name.length > 0;
  }
}

const isValidName = registerValidation.validateName('asd')
console.log(isValidName)