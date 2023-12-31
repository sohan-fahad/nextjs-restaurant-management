export enum ENUM_ORDER_STATUS {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    PROCESSING = 'PROCESSING',
    OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY',
    CANCELLED = 'CANCELLED',
    DELIVERED = 'DELIVERED',
    RETURNED = 'RETURNED',
    REFUNDED = 'REFUNDED',
}

export enum ENUM_ORDER_PAYMENT_STATUS {
    PENDING = 'PENDING',
    PAID = 'PAID',
    DELIVERY_CHARGE_PAID = 'DELIVERY_CHARGE_PAID',
    FAILED = 'FAILED',
}

export enum ENUM_ORDER_PAYMENT_METHOD {
    CASH = 'CASH',
    GAZEPAY = 'GAZEPAY'
}

export const ORDER_STATUS_ORDER = [
    ENUM_ORDER_STATUS.PENDING,
    ENUM_ORDER_STATUS.CONFIRMED,
    ENUM_ORDER_STATUS.PROCESSING,
    ENUM_ORDER_STATUS.OUT_FOR_DELIVERY,
    ENUM_ORDER_STATUS.DELIVERED,
    ENUM_ORDER_STATUS.CANCELLED,
    ENUM_ORDER_STATUS.RETURNED,
    ENUM_ORDER_STATUS.REFUNDED,
];
