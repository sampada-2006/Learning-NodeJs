const { evaluate } = require('mathjs');

const add=(problem)=>{
  const sumProblem=problem.n1+"+"+problem.n2;
          const result=evaluate(sumProblem);
          return result;
};

module.exports=add;