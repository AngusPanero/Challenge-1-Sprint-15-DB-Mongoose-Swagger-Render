module.exports = {
    paths: {
        "/create": {  
            post: {
                tags: ["Task"],  
                summary: "Crea task",
                description: "Crea task",
                operationId: "createTask",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Task",
                            },
                        },
                    },
                },
                responses: {
                    "201": {
                        description: "Task created successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Task",
                                },
                            },
                        },
                    },
                    "500": {
                        description: "Server error",
                    },
                },
            },
        },
        "/id/{_id}": {
        put: {
        tags: {
        Tasks: "Update a Task",
        },
        description: "Update Task",
        operationId: "updateTask",
        parameters: [
        {
            name: "_id",
            in: "path",
            schema: {
                $ref: "#/components/schemas/_id",
            },
            description: "Id of Task to be updated",
        },
        ],
        requestBody: {
            content: {
                "application/json": {
            schema: { $ref: "#/components/schemas/Task" },
            },
        },
        },
        responses: {
            200: { description: "Task updated successfully" },
            500: { description: "Server error" },
            },
        },
    },
    "/id/{_id}": {
        delete: {
        tags: {
        Tasks: "delete a Task",
        },
        description: "Delete Task",
        operationId: "deleteTask",
        parameters: [
        {
            name: "_id",
            in: "path",
            schema: {
                $ref: "#/components/schemas/_id",
            },
            description: "Id of Task to be delete",
        },
        ],
        requestBody: {
            content: {
                "application/json": {
            schema: { $ref: "#/components/schemas/Task" },
            },
        },
        },
        responses: {
            200: { description: "Task updated successfully" },
            500: { description: "Server error" },
            },
        },
    },
    },
};