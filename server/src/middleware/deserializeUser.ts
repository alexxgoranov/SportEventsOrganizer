
import { Request, Response, NextFunction } from "express";
import { get } from "lodash";
import { reGenerateAccessToken } from "../services/auth.service";
import { verifyJwt } from "../utils/jwt.utils";


export const deserializeUser = async (req: Request, response: Response, next: NextFunction) => {


    const accessToken = get(req, "headers.authorization", "").replace(
        /^Bearer\s/,
        ""
    );
    const refreshToken = get(req, "headers.x-refresh")

    if (!accessToken) {
        return next();
    }
    const { decoded, expired } = verifyJwt(accessToken)

    if (decoded) {
        response.locals.user = decoded;
        return next();
    }

    if (expired && refreshToken) {
        const newAccessToken = await reGenerateAccessToken({ refreshToken })
        if (newAccessToken) {
            response.setHeader('x-access-token', newAccessToken);
            const result = verifyJwt(newAccessToken);
            response.locals.user = result.decoded;
        }
    }
    return next();

}

export default deserializeUser