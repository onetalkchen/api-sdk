export namespace ErrorType {
    export enum Art {
        DATA_LENGTH_TOO_LONG = 'DATA_LENGTH_TOO_LONG',
        DATA_LENGTH_IS_ERROR = 'DATA_LENGTH_IS_ERROR',
        DATA_LENGTH_IS_ZERO = 'DATA_LENGTH_IS_ZERO',
        PARAMS_IS_ERROR = 'PARAMS_IS_ERROR' // 参数出错
    }
    export enum IM {
        TEXT_LENGTH_TOO_SHORT = 'TEXT_LENGTH_TOO_SHORT',
        OID_LENGTH_IS_ZERO = 'OID_LENGTH_IS_ZERO', 
        NOT_ACCEPTED_FOR_THE_MOMENT = 'NOT_ACCEPTED_FOR_THE_MOMENT', // 暂不支持
        PAGINATION_CANNOT_EXCEED_1000 = 'PAGINATION_CANNOT_EXCEED_1000', // 分页参数不能超过1000
        GID_LENGTH_IS_ZERO = 'GID_LENGTH_IS_ZERO',
        UIDS_LENGTH_IS_ZERO = 'UIDS_LENGTH_IS_ZERO'
    }
    export enum User {

    }

}
