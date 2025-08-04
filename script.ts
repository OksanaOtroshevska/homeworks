function Fee(originalMethod: Function) {

    function replacementMethod(this: any, ...args: number[]) {
   
        const result = args.reduce((sum, num) => sum + num, 0);

        originalMethod.call(this, result);

        return result * 0.75;
    }

    return replacementMethod;

}


class Company {
    name: string;


    constructor(name: string) {
        this.name = name;
    }

    @Fee
    earnMoney(...amounts: number[]) {
        const result = amounts.reduce((sum, num) => sum + num, 0);

        console.log(Company ${this.name} earned $${result}.);
        return result;
    }

}

const myCompany = new Company("Tech Corp");

const netIncome = myCompany.earnMoney(100);

console.log(netIncome: $${netIncome}.);



