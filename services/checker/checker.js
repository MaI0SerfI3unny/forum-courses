const option = require('@/options')

const validatorResponse = ({verification, validateVal, statusCode, errorName}) => {
        const options = option[verification]
        if(Array.isArray(options)){
            if(!options.some((el) => 
            el.name === validateVal)){
                throw new Error(JSON.stringify({ status: statusCode , message: errorName })); 
            }
        }else{
            throw new Error(JSON.stringify({ status: 500, message: "Something wrong" })); 
        }

}

module.exports = validatorResponse
