/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export declare const resolver: {
    Query: {
        user: (_: any, { ID }: {
            ID: string;
        }) => import("mongoose").Query<(import("mongoose").Document<unknown, any, import("../shared/src/Schema/ModelSchema").UserI> & import("../shared/src/Schema/ModelSchema").UserI & {
            _id: import("mongoose").Types.ObjectId;
        }) | null, import("mongoose").Document<unknown, any, import("../shared/src/Schema/ModelSchema").UserI> & import("../shared/src/Schema/ModelSchema").UserI & {
            _id: import("mongoose").Types.ObjectId;
        }, {}, import("../shared/src/Schema/ModelSchema").UserI>;
    };
    Mutation: {
        registerUser(_: any, { registerInput: { username, email, password } }: {
            registerInput: {
                username: string;
                email: string;
                password: string;
            };
        }): Promise<{
            id: any;
            username: string;
            email: string;
            token: string;
        }>;
        loginUser(_: any, { loginInput: { email, password } }: {
            loginInput: {
                email: string;
                password: string;
            };
        }): Promise<{
            id: any;
            username: string;
            email: string;
            token: string;
        }>;
    };
};