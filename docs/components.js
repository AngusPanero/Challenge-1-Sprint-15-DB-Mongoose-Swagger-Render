module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'string',
                        description:"user identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"username to register",
                        example:"Lavar"
                    },
                    completed:{
                        type: "boolean",
                        description:"Task Completada?",
                        example: true
                    },
                }
            }
        }
    }
}
