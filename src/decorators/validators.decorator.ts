/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* tslint:disable:naming-convention */

import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
} from 'class-validator';
import * as moment from 'moment';

export function IsPassword(
    validationOptions?: ValidationOptions,
): PropertyDecorator {
    return (object: any, propertyName: string) => {
        registerDecorator({
            propertyName,
            name: 'isPassword',
            target: object.constructor,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: string, _args: ValidationArguments) {
                    return /^[a-zA-Z0-9!@#$%^&*]*$/.test(value);
                },
            },
        });
    };
}

export function IsSessionTime(
    validationOptions?: ValidationOptions,
): PropertyDecorator {
    return (object: any, propertyName: string) => {
        registerDecorator({
            propertyName,
            name: 'isSessionTime',
            target: object.constructor,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: string, _args: ValidationArguments) {
                    return moment(value, 'HH:mm', true).isValid();
                },
            },
        });
    };
}

export function IsISOWeekDate(
    validationOptions?: ValidationOptions,
): PropertyDecorator {
    return (object: any, propertyName: string) => {
        registerDecorator({
            propertyName,
            name: 'isISOWeekDate',
            target: object.constructor,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: string, _args: ValidationArguments) {
                    return /[0-9]{4}-W([0-4][1-9]|5[0-2])/.test(value);
                },
            },
        });
    };
}
