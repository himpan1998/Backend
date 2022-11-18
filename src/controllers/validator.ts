const userSchema = {
    "type": "object",
    "properties": {

        "name": {
            "type": "string",
            "nullable": false
        },
        "dob": {
            "type": "string",
            "format": "date"
        },
        "phone": {
            "type": "string",
            "nullable": false
        },

        "email": {
            "type": "string",
            "format": "email",
            "nullable": false
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
    "required": [
        "phone",
        "password"
    ],
    additionalProperties: false
}
const customerSchema = {
    "type": "object",
    "properties": {

        "first_name": {
            "type": "string",
            "nullable": false
        },
        "last_name": {
            "type": "string",
            "format": "date"
        },
        "phone": {
            "type": "string",
            "nullable": false
        },

        "email": {
            "type": "string",
            "format": "email",
            "nullable": false
        },
        "address": {
            "type": "string",
            "nullable": false
        },
        "docket_id": {
            "type": "string",
            "nullable": false
        }

    },
    "required": [
        "first_name", "last_name", "phone", "email", "address", "docket_id"
    ],
    additionalProperties: false
}


const schemaValidator: any = {
    userSchema,customerSchema
}

export default schemaValidator;