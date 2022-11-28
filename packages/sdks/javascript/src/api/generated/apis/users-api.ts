/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { ApiError } from '../../generated/models';
import { User } from '../../generated/models';
import { UserCreate } from '../../generated/models';
import { UserLogin } from '../../generated/models';
import { UserLoginResponse } from '../../generated/models';
import { UserRefreshToken } from '../../generated/models';
import { UserRefreshTokenResponse } from '../../generated/models';
import { UserResendVerification } from '../../generated/models';
import { UserUpdate } from '../../generated/models';
import { UserVerify } from '../../generated/models';

/**
 * UsersApiService - Auto-generated
 */
export class UsersApiService extends ApiBaseService {
    /**
     * 
     * @summary Sign up/register a new user
     * @param {UserCreate} userCreate A JSON object containing the resource data
     */
    public async addUser(userCreate: UserCreate): Promise<ApiResponse<void>> {
        if (userCreate === null || userCreate === undefined) {
            throw new ArgumentNullException('userCreate', 'addUser');
        }
        
        let queryString = '';

        const requestUrl = '/users' + (queryString? `?${queryString}` : '');

        const response = await this.post <void, UserCreate>(requestUrl, userCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get a user by ID
     * @param {number} userId The ID of the user.
     */
    public async getUser(userId: number): Promise<ApiResponse<User>> {
        if (userId === null || userId === undefined) {
            throw new ArgumentNullException('userId', 'getUser');
        }
        
        let queryString = '';

        const requestUrl = '/users/{user_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <User>(requestUrl.replace(`{${"user_id"}}`, encodeURIComponent(String(userId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get details of the current user
     */
    public async getUserMe(): Promise<ApiResponse<User>> {
        
        let queryString = '';

        const requestUrl = '/users/me' + (queryString? `?${queryString}` : '');

        const response = await this.get <User>(requestUrl);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Login/create a new token for the given credentials
     * @param {UserLogin} userLogin A JSON object containing the resource data
     */
    public async loginUser(userLogin: UserLogin): Promise<ApiResponse<UserLoginResponse>> {
        if (userLogin === null || userLogin === undefined) {
            throw new ArgumentNullException('userLogin', 'loginUser');
        }
        
        let queryString = '';

        const requestUrl = '/users/login' + (queryString? `?${queryString}` : '');

        const response = await this.post <UserLoginResponse, UserLogin>(requestUrl, userLogin);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Logout/revoke an existing token
     */
    public async logout(): Promise<ApiResponse<void>> {
        
        let queryString = '';

        const requestUrl = '/users/logout' + (queryString? `?${queryString}` : '');

        const response = await this.get <void>(requestUrl);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Refresh an existing user access token
     * @param {UserRefreshToken} userRefreshToken A JSON object containing the resource data
     */
    public async refreshTokenUser(userRefreshToken: UserRefreshToken): Promise<ApiResponse<UserRefreshTokenResponse>> {
        if (userRefreshToken === null || userRefreshToken === undefined) {
            throw new ArgumentNullException('userRefreshToken', 'refreshTokenUser');
        }
        
        let queryString = '';

        const requestUrl = '/users/refresh-token' + (queryString? `?${queryString}` : '');

        const response = await this.post <UserRefreshTokenResponse, UserRefreshToken>(requestUrl, userRefreshToken);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Resend the verification email
     * @param {UserResendVerification} userResendVerification A JSON object containing the resource data
     */
    public async resendVerificationUser(userResendVerification: UserResendVerification): Promise<ApiResponse<void>> {
        if (userResendVerification === null || userResendVerification === undefined) {
            throw new ArgumentNullException('userResendVerification', 'resendVerificationUser');
        }
        
        let queryString = '';

        const requestUrl = '/users/account/resend-verification' + (queryString? `?${queryString}` : '');

        const response = await this.post <void, UserResendVerification>(requestUrl, userResendVerification);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Update an existing user
     * @param {number} userId The ID of the user.
     * @param {UserUpdate} userUpdate A JSON object containing the resource data
     */
    public async updateUser(userId: number, userUpdate: UserUpdate): Promise<ApiResponse<void>> {
        if (userId === null || userId === undefined) {
            throw new ArgumentNullException('userId', 'updateUser');
        }
        if (userUpdate === null || userUpdate === undefined) {
            throw new ArgumentNullException('userUpdate', 'updateUser');
        }
        
        let queryString = '';

        const requestUrl = '/users/{user_id}' + (queryString? `?${queryString}` : '');

        const response = await this.put <void, UserUpdate>(requestUrl.replace(`{${"user_id"}}`, encodeURIComponent(String(userId))), userUpdate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Activate the user account
     * @param {UserVerify} userVerify A JSON object containing the resource data
     */
    public async verifyUser(userVerify: UserVerify): Promise<ApiResponse<void>> {
        if (userVerify === null || userVerify === undefined) {
            throw new ArgumentNullException('userVerify', 'verifyUser');
        }
        
        let queryString = '';

        const requestUrl = '/users/account/verify' + (queryString? `?${queryString}` : '');

        const response = await this.post <void, UserVerify>(requestUrl, userVerify);
        return new ApiResponse(response);
    }
}
