const tbl_user_schema = {
    "type": "object",
    "properties": {

        "name": {
            "type": "string",
            "nullable": false
        },
        "dob": {
            "type": "string",
            "format":"date"
        },
        "phone": {
            "type": "string",
            "nullable": false
        },

        "email":{
            "type": "string",
            "format":"email",
            "nullable":false
        },


        "address": {
            "type": "string",
            "nullable": false
        },


        "password": {
            "type": "string",
            "nullable": false
        },

    },
       "required":[
        "phone",
        "password"
       ],
        additionalProperties:false
}

export default  tbl_user_schema